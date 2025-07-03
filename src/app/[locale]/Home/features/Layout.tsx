'use client';

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";

interface LayoutProps{
    title: string;
    children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
    useEffect(() => {
        document.title = title;
    }, [title]) 
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden bg-body text-heading-1 min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}