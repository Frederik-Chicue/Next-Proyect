"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LoginFormContainer } from "../../login/Loginform";
import { RegisterFormContainer } from "../../register/RegisterForm";
import { AuthTogglePanel } from "./AuthTogglePanel";
import styles from "../../styles/AuthForm.module.css";
import "boxicons/css/boxicons.min.css";

export const AuthForm = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isRegisterRoute = pathname === "/register";
    const [showRegisterForm, setShowRegisterForm] = useState(isRegisterRoute);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowRegisterForm(isRegisterRoute);
        }, 1100);

        return () => clearTimeout(timeout);
    }, [isRegisterRoute]);

    const handleToggle = () => {
        router.push(isRegisterRoute ? "/login" : "/register");
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
