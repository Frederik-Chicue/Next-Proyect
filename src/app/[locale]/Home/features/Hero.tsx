import { Container } from "../../components/ui/Container";
import { Numbers } from "../../components/ui/Numbers";
import { HeroImage } from "../../components/homeComponents/hero/HeroImage";
import { HeroContent } from "../../components/homeComponents/hero/HeroContent";

export const Hero = () => {
    return (
        <section id="home" className="relative pt-32 lg:pt-36">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <HeroContent />
            <HeroImage />
        </Container>
        <Numbers />
        </section>
    );
};