import { Layout } from "./features/Layout";
import { AboutUs } from "./features/AboutUs";
import { Brands } from "./features/Brands";
import { CTA } from "./features/CallToAction";
import { Hero } from "./features/Hero";
import { Services } from "./features/Services";
import { Pricing } from "./features/Princing";

export  const Home = () => {
    return (
        <Layout title="LastHit-Legends">
        <Hero />
        <Services />
        <AboutUs />
        <Brands />
        <Pricing />
        <CTA />
        </Layout>
    );
};