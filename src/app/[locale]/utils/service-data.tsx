import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

interface Service {
    title: string;
    description: string;
    icon: ReactNode;
}

export const useServices = (): Service[] => {
    const t = useTranslations("home");

    const icon = (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
        </svg>
    );

    return [
        {
        title: t("servicesData.0.title"),
        description: t("servicesData.0.description"),
        icon,
        },
        {
        title: t("servicesData.1.title"),
        description: t("servicesData.1.description"),
        icon,
        },
        {
        title: t("servicesData.2.title"),
        description: t("servicesData.2.description"),
        icon,
        },
    ];
};
