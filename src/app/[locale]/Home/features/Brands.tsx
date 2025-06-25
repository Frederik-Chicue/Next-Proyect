import { Container } from "../../components/ui/Container";
import { Title } from "../../components/ui/Title";
import Lol from '@/../public/images/Logos/Lol.png';
import Riot from '@/../public/images/Logos/Riot.png';
import Twitch from '@/../public/images/Logos/Twitch.png';
import Discord from '@/../public/images/Logos/Discord.png';
import Youtube from '@/../public/images/Logos/Youtube.png';
import X from '@/../public/images/Logos/X.png';
import { useTranslations } from "next-intl";
import Image from "next/image";

const logos = [
    { name: "Lol", src: Lol },
    { name: "Riot", src: Riot },
    { name: "Twitch", src: Twitch },
    { name: "Discord", src: Discord },
    { name: "Youtube", src: Youtube },
    { name: "X", src: X },
];

export const Brands = () => {
    const  t  = useTranslations("home");

    return (
        <section>
        {" "}
        <Container className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
            <Title>{t("brands.title")}</Title>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                {logos.map((logo, key) => (
                    <div
                        key={key}
                        className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
                    >
                        <Image
                            src={logo.src}
                            width="100"
                            height="60"
                            alt={logo.name}
                            className="h-7 sm:h-20 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </Container>
        </section>
    );
};

