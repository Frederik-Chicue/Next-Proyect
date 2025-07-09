import { InputBox } from "../../../components/auth/InputBox";
import { useTranslations } from "next-intl";

interface Props {
    data: {
        email: string;
        password: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginFormFields = ({ data, onChange }: Props) => {
    const t = useTranslations("auth");

    return (
        <>
        <InputBox
            type="email"
            id="email"
            label={t("formLogin.email.label")}
            iconClass="bx bxs-user"
            value={data.email}
            onChange={onChange}
            placeholder={t("formLogin.email.placeholder")}
        />

        <InputBox
            type="password"
            id="password"
            label={t("formLogin.password.label")}
            iconClass="bx bxs-lock"
            value={data.password}
            onChange={onChange}
            placeholder={t("formLogin.password.placeholder")}
        />
        </>
    );
};
