import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface RegisterFormData {
    username: string;
    email: string;
    password: string;
}

type T = ReturnType<typeof useTranslations<"auth">>;

const isFormComplete = (data: RegisterFormData, t: T): string | null => {
    if (!data.username || !data.email || !data.password) {
        return t("form.errors.emptyFields");
    }
    return null;
};

const isPasswordValid = (password: string, t: T): string | null => {
    return password.length >= 6
        ? null
        : t("form.errors.passwordTooShort");
};

const isUsernameValid = (rawUsername: string, t: T): string | null => {
    const username = rawUsername.replace(/\s+/g, "");
    if (username.length < 6) return t("form.errors.usernameTooShort");
    if (/^\d+$/.test(username)) return t("form.errors.usernameOnlyNumbers");
    if (/^[a-zA-Z]+$/.test(username)) return t("form.errors.usernameOnlyLetters");
    return null;
};

const isEmailUnique = (email: string, t: T): string | null => {
    if (typeof window === "undefined") return null;
    const storedUsers: RegisterFormData[] = JSON.parse(localStorage.getItem("users") || "[]");
    return storedUsers.some((user) => user.email === email)
        ? t("form.errors.emailTaken")
        : null;
};

export const useRegisterForm = () => {
    const [data, setData] = useState<RegisterFormData>({
        username: "",
        email: "",
        password: ""
    });

    const router = useRouter();
    const t = useTranslations("auth");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if (!["username", "email", "password"].includes(id)) return;

        setData((prev) => ({
        ...prev,
        [id]: id === "username" ? value.replace(/\s+/g, "") : value
        }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validators = [
        () => isFormComplete(data, t),
        () => isUsernameValid(data.username, t),
        () => isPasswordValid(data.password, t),
        () => isEmailUnique(data.email, t)
        ];

        for (const validate of validators) {
        const error = validate();
        if (error) {
            alert(error);
            return;
        }
        }

        if (typeof window !== "undefined") {
        const storedUsers: RegisterFormData[] = JSON.parse(localStorage.getItem("users") || "[]");
        storedUsers.push(data);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        }

        alert(t("form.success"));
        setData({ username: "", email: "", password: "" });
        router.push("/login");
    };

    return {
        data,
        handleInputChange,
        handleFormSubmit
    };
};
