import { Container } from "../../components/ui/Container";
import { CTAContent } from "../../components/home/cta/CTAContent";

export const CTA = () => {
    return (
        <section className="pb-20 relative">
        <Container>
            <div className="relative rounded-2xl overflow-hidden">
            <CTAContent />
            </div>
        </Container>
        </section>
    );
};
