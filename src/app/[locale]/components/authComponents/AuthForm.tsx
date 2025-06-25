import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginFormContainer } from "./LoginForm";
import { RegisterFormContainer } from "./RegisterForm";
import { AuthTogglePanel } from "./AuthTogglePanel";
import styles from "../../../styles/AuthForm.module.css";
import "boxicons/css/boxicons.min.css";

export const AuthForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isRegisterRoute = location.pathname === "/register";
    const [showRegisterForm, setShowRegisterForm] = useState(isRegisterRoute);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowRegisterForm(isRegisterRoute);
        }, 1100);

        return () => clearTimeout(timeout);
    }, [isRegisterRoute]);

    const handleToggle = () => {
        navigate(isRegisterRoute ? "/login" : "/register");
    };

    return (
        <div className={`auth-page-bg ${styles.wrapper}`}>
            <main
                className={`${styles.container} ${isRegisterRoute ? styles.active : ""}`}
                role="main"
            >
                {showRegisterForm ? <RegisterFormContainer /> : <LoginFormContainer />}
                <AuthTogglePanel onToggle={handleToggle} />
            </main>
        </div>
    );
};
