import Link from "next/link";
import styles from "../../styles/AuthForm.module.css";

export const SocialIcons = () => {
    return (
        <div className={styles["social-icons"]} aria-label="Opciones de login social">
            <Link href="/home" aria-label="Volver a la página de inicio">
                <i className="bx bx-arrow-back" aria-hidden="true"></i>
            </Link>
        </div>
    );
};
