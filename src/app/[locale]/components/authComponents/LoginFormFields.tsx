import { InputBox } from "./InputBox";
import { useTranslation } from "react-i18next";

interface Props {
    data: {
        email: string;
        password: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginFormFields = ({ data, onChange }: Props) => {
    const { t } = useTranslation("auth");

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
