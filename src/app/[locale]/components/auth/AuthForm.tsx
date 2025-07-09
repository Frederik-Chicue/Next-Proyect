'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LoginFormContainer } from './LoginForm';
import { RegisterFormContainer } from './RegisterForm';
import { AuthTogglePanel } from './AuthTogglePanel';
import styles from '../../styles/AuthForm.module.css';
import 'boxicons/css/boxicons.min.css';

export const AuthForm = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isRegisterRoute = pathname.includes('/auth/register');
    const [showRegisterForm, setShowRegisterForm] = useState(isRegisterRoute);
    const [isActive, setIsActive] = useState(isRegisterRoute);

    useEffect(() => {
        setIsActive(isRegisterRoute);
        const timeout = setTimeout(() => {
        setShowRegisterForm(isRegisterRoute);
        }, 10000);

        return () => clearTimeout(timeout);
    }, [isRegisterRoute]);

    const handleToggle = () => {
        setIsActive((prev) => !prev);

        setTimeout(() => {
        router.push(isRegisterRoute ? '/auth/login' : '/auth/register');
        }, 1640);
    };

    return (
        <div className={`auth-page-bg ${styles.wrapper}`}>
        <main
            className={`${styles.container} ${isActive ? styles.active : ''}`}
            role="main"
        >
            {showRegisterForm ? <RegisterFormContainer /> : <LoginFormContainer />}
            <AuthTogglePanel onToggle={handleToggle} />
        </main>
        </div>
    );
};
