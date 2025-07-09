import styles from "../../styles/AuthForm.module.css";
import { SocialButton } from "./SocialButton";
import { useTranslations } from "next-intl";

interface Props {
    context: "Inicia" | "Registrate";
}

const providers = [
    { name: "Back", icon: "bx bx-arrow-back" },
];

export const SocialAuthButtons = ({ context }: Props) => {
    const t = useTranslations("auth");

    return (
        <>
        <p>{t("social.withPlatform")}</p>
        <div className={styles["social-icons"]}>
            {providers.map(({ name, icon }) => (
            <SocialButton key={name} provider={name} iconClass={icon} context={context} />
            ))}
        </div>
        </>
    );
};
