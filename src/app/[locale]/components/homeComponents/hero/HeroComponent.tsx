'use client';

import { useRouter } from 'next/navigation';
import { Button } from "../../ui/Button";
import { useTranslations } from "next-intl";


export const HeroForm = () => {
    const router = useRouter();
    const t = useTranslations("home");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.push("/register");
            }}
            className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
            shadow-lg shadow-box-shadow border border-box-border
            bg-box-bg rounded-full ease-linear focus-within:bg-body
            focus-within:border-primary"
        >
            <span className="min-w-max pr-2 border-r border-box-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L6 14h7.5l-1.5 5.5L18 10h-7.5l3-5.5z" />
                </svg>
            </span>

            <div
                className="w-full py-3 text-gray-500 select-none"
                style={{
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                {t("hero.component.subtitle")}
            </div>

            <Button className="min-w-max text-white" onClick={() => router.push("/register")}>
                <span className="relative z-[5]">{t("hero.component.button")}</span>
            </Button>
        </form>
    );
};
