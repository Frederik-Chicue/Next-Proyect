import { useTranslations } from 'next-intl';

type T = ReturnType<typeof useTranslations>;

export const getNavItems = (t: T) => [
    { to: "home", text: t("navbar.home") },
    { to: "services", text: t("navbar.services") },
    { to: "about-us", text: t("navbar.about") },
];
