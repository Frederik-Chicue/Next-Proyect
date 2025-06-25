import styles from "../../../styles/AuthForm.module.css";
import { SocialButton } from "./SocialButton";
import { useTranslation } from "react-i18next";

interface Props {
    context: "Inicia" | "Registrate";
}

const providers = [
    // { name: "Google", icon: "bx bxl-google" },
    // { name: "GitHub", icon: "bx bxl-github" },
    // { name: "LinkedIn", icon: "bx bxl-linkedin" },
    { name: "Back", icon: "bx bx-arrow-back" },
];

export const SocialAuthButtons = ({ context }: Props) => {
    const { t } = useTranslation("auth");

    return (
        <>
        <p>{t("social.withPlatform", { context: context.toLowerCase() })}</p>
        <div className={styles["social-icons"]}>
            {providers.map(({ name, icon }) => (
            <SocialButton key={name} provider={name} iconClass={icon} context={context} />
            ))}
        </div>
        </>
    );
};
