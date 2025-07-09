import styles from "../../styles/AuthForm.module.css";
import { LoginFormFields } from "./LoginFormFields";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useTranslations } from "next-intl";

export const LoginFormContainer = () => {
    const t = useTranslations ("auth");
    const { data, handleInputChange, handleFormSubmit } = useLoginForm();

    return (
        <section className={`${styles["form-box"]} ${styles.login}`} aria-labelledby="login-title">
        <form aria-label="Login form" role="form" onSubmit={handleFormSubmit}>
            <h1 id="login-title">{t("title.login")} </h1>
            <LoginFormFields data={data} onChange={handleInputChange} /> 
            <button type="submit" className={styles.btn}>
            {t("title.login")}
            </button>
            <SocialAuthButtons context="Inicia" />
        </form>
        </section>
    );
};
