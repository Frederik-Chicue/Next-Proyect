'use client';

import HeroDark from "@/../public/images/AboutUsDark.jpeg"
import HeroLight from "@/../public/images/AboutUsLight.jpg"
import { useThemeStore } from "../../../store/ThemeStore";
import Image from "next/image";

export const AboutImage = () => {
    const theme = useThemeStore((state) => state.theme);
    const imgSrc = theme === "dark" ? HeroDark : HeroLight;

    return (
        <div className="w-full md:w-5/12 lg:w-1/2 mb-4 sm:mb-6 md:mb-0">
            <div className="w-full h-80 sm:h-96 relative">
                <Image
                    src={imgSrc}
                    alt="Hero image"
                    width={2350}
                    height={2359}
                    className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
                />
            </div>
        </div>
    );
};
