import { useTranslations } from "next-intl";
import { Paragraph } from "../../ui/Paragraph";
import { HeroForm } from "./HeroComponent";

export const HeroContent = () => {
    const  t  = useTranslations("home");

    return (
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
            <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            {t("hero.title.part1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
            {t("hero.title.part2")} 
            </span>
            </h1>
            <Paragraph className="mt-8">
            {t("hero.description.line1")}
            <br /> 
            {t("hero.description.line2")}
            </Paragraph>
            <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
                <HeroForm />
            </div>
            </div>
        </div>
    );
};
