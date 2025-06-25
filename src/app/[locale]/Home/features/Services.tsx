import { useServices } from "../../utils/service-data";
import { Service } from "./Service";
import { Container } from "../../components/ui/Container";
import { Paragraph } from "../../components/ui/Paragraph";
import { Title } from "../../components/ui/Title";
import { useTranslations } from "next-intl";

export const Services = () => {
    const  t  = useTranslations("home"); 
    const services = useServices();

    return (
        <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y4">
            <Title>{t("services.title")}</Title>
            <Paragraph>{t("services.description")}</Paragraph>
            </div>

            <div className="grid ms:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, key) => (
                <Service
                key={key}
                title={service.title}
                description={service.description}
                icon={service.icon}
                />
            ))}
            </div>
        </Container>
        </section>
    );
};
