'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Container } from '../../components/ui/Container';
import logo from '@/../public/images/Logo.png';
import { useThemeStore } from '../../store/ThemeStore';
import { getNavItems } from '../../utils/navItems';
import { getLocalizedPath } from '../../utils/i18n'; 

export const Navbar = () => {
    const t = useTranslations('home');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const navItems = getNavItems(t);
    const { toogleTheme, theme } = useThemeStore();

    const changeLanguage = (lng: string) => {
        const newPath = getLocalizedPath(pathname, lng);
        router.replace(newPath);
    };

    const handleScrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
        <Container>
            <nav className="w-full flex justify-between gap-6 relative items-center">
            <div className="min-w-max inline-flex items-center gap-3">
                <button onClick={() => handleScrollTo('home')} className="flex items-center gap-3">
                <Image src={logo} alt="LastHit logo" width={40} height={40} />
                <span className="text-lg font-semibold text-heading-1 hidden lg:inline-block">
                    LastHit Legends
                </span>
                </button>
            </div>

            <ul className="hidden lg:flex flex-row gap-x-6 text-lg text-heading-2">
                {navItems.map((item) => (
                <li key={item.to}>
                    <button
                    onClick={() => handleScrollTo(item.to)}
                    className="cursor-pointer hover:text-primary transition-colors"
                    >
                    {item.text}
                    </button>
                </li>
                ))}
            </ul>

            <div className="flex items-center gap-x-4 max-sm:gap-2 max-sm:flex-wrap max-sm:justify-end">
                <Link
                href="/auth/login"
                className="px-6 py-3 rounded-full border bg-blue-700 dark:bg-pink-700 cursor-pointer"
                >
                <span className="text-white">{t("navbar.login")}</span>
                </Link>

                <select
                value={locale}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-transparent border-none outline-none text-heading-2 cursor-pointer"
                >
                {["es", "en", "fr", "de"].map((code) => (
                    <option key={code} value={code} className="text-black">
                    {t(`languages.${code}`)}
                    </option>
                ))}
                </select>

                <button
                onClick={toogleTheme}
                className="flex text-heading-2 rounded-full p-2 border border-box-border"
                >
                {theme === "dark" ? (
                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75
                        0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21
                        12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386
                        6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591
                        1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75
                        3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                    </svg>
                )}
                </button>
            </div>
            </nav>
        </Container>
        </header>
    );
};
