"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../store/AuthContext"; 
import { useTranslations } from "next-intl";


export const useLoginForm = () => {
    const t = useTranslations("auth");
    const [data, setData] = useState({ email: "", password: "" });
    const router = useRouter();
    const { login } = useAuth(); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.id]: e.target.value.trim() });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

        const matchedUser = storedUsers.find(
            (user: { email: string; password: string }) =>
                user.email === data.email && user.password === data.password
        );

        if (matchedUser) {
            login(); 
            alert(t("messages.success")); 
            router.push("/dashboard");
        } else {
            alert(t("messages.error"));
        }
    };

    return {
        data,
        handleInputChange,
        handleFormSubmit
    };
};
