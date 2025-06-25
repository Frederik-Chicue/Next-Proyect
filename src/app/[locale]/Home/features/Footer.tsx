'use client';

import { Container } from "../../components/ui/Container";
import logo from "@/../public/images/Logo.png";
import { getNavItems } from "../../utils/navItems";
import { useTranslations } from "next-intl";
import { Link as ScrollLink } from 'react-scroll'; 
import Image from "next/image";

export const Footer = () => {
    const t = useTranslations("home");
    const navItems = getNavItems(t);

    return (
        <footer className="relative pt-10 rounded-t-3xl bg-box-bg">
            <Container className="pb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <Image src={logo} alt="LastHit Legends Logo" className="w-10 h-10" />
                        <span className="text-lg font-semibold text-heading-1">
                            LastHit Legends
                        </span>
                    </div>
                    <ul className="flex gap-6 text-heading-1">
                        {navItems.map((item, key) => (
                            <li key={key}>
                                <ScrollLink
                                    to={item.to}
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    className="cursor-pointer hover:text-primary transition-colors"
                                >
                                    {item.text}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
};
