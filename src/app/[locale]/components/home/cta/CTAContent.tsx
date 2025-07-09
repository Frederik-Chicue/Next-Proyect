import { Button } from "../../ui/Button";
import { Paragraph } from "../../ui/Paragraph";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const CTAContent = () => {
    const t = useTranslations("home");

    return (
        <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
            {t("cta.title")} <span>{t("cta.span")}</span>
        </h1>

        <Paragraph className="pt-10">
            {t("cta.description")}
        </Paragraph>

        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
            <Link href="/login">
            <Button className="w-50 transform transition-transform duration-300 hover:scale-105 text-white">
                {t("cta.button")}
            </Button>
            </Link>
        </div>
        </div>
    );
};
