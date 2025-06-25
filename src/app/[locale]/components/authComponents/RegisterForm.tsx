import styles from "../../../styles/AuthForm.module.css";
import { RegisterFormFields } from "./RegisterFormFields";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { useRegisterForm } from "../../../hooks/useRegisterForm";
import { useTranslation } from "react-i18next";

export const RegisterFormContainer = () => {
    const { t } = useTranslation ("auth");
    const { data, handleInputChange, handleFormSubmit } = useRegisterForm();

    return (
        <section className={`${styles["form-box"]} ${styles.register}`} aria-labelledby="register-title">
        <form aria-label="Register form" role="form" onSubmit={handleFormSubmit}>
            <h1 id="register-title">{t("titleRegister.register")}</h1>
            <RegisterFormFields data={data} onChange={handleInputChange} />
            <button type="submit" className={styles.btn}>{t("titleRegister.register")}</button>
            <SocialAuthButtons context="Registrate" />
        </form>
        </section>
    );
};

