'use client';

import { useTranslations, useLocale } from "next-intl";
import { pricingPlans } from "../../utils/pricingPlan";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Paragraph } from "../../components/ui/Paragraph";
import { Title } from "../../components/ui/Title";

export const Pricing = () => {
    const t = useTranslations("home");
    const locale = useLocale(); // ✅ Idioma actual

    return (
        <section id="pricing" className="py-5">
            <Container className="text-center">
                <Title>{t("pricing.title")}</Title>
                <Paragraph className="mt-4">
                    {t("pricing.description")}
                </Paragraph>
            </Container>
            <Container className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, key) => (
                        <div key={key} className="relative group h-full">
                            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                                    {plan.bestValue && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                                            {t("pricing.bestValue")}
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-semibold text-heading-1">
                                        {t(plan.title)}
                                    </h3>
                                    <p className="mt-4 text-4xl font-bold text-heading-1">
                                        {formatPrice(plan.rawPrice, locale)}
                                    </p>
                                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span>✅</span>
                                                <span className="text-primary">{t(feature)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                                            {t("pricing.cta")}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
