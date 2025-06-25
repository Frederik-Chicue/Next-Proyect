'use client';

import HeroDark from "@/../public/images/HeroDark.png"
import HeroLight from "@/../public/images/HeroLight.png"
import { useThemeStore } from "../../../store/ThemeStore";
import Image from "next/image";

export const HeroImage = () => {
    const theme = useThemeStore((state) => state.theme);
    return (
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
        <Image
            src={theme === "dark" ? HeroDark : HeroLight}
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
        />
        </div>
    );
};
