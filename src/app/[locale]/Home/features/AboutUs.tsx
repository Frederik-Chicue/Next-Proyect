import { Container } from "../../components/ui/Container";
import { Paragraph } from "../../components/ui/Paragraph";
import { Title } from "../../components/ui/Title";
import { Info } from "../../components/ui/Info";
import { AboutImage } from "../../components/homeComponents/about/AboutImage";
import { useAboutPurpose } from "../../utils/useAboutPurpose";
import { useTranslations } from "next-intl";

export const AboutUs = () => {
    const  t  = useTranslations("home");
    const aboutPurpose = useAboutPurpose();

    const icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    );

    return (

        
        <section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <AboutImage />
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                <Title>{t("about.title")}</Title>
                <Paragraph>{t("about.description")}</Paragraph>
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                    {Array.isArray(aboutPurpose) && aboutPurpose.map((item, idx) => (
                    <Info key={idx} title={item.title} description={item.description}>
                        {icon}
                    </Info>
                    ))}
                </div>
            </div>
        </Container>
        </section>
    );
};
