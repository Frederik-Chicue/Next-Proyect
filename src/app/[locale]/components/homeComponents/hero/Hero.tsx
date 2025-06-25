import { Container } from "../Container";
import { Numbers } from "../Numbers";
import { HeroImage } from "./HeroImage";
import { HeroContent } from "./HeroContent";

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
