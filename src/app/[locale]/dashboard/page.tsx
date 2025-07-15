"use client"

import { useChampionList } from "../hooks/useChampionList";
import { useStats } from "../hooks/useStats";
import { useTranslations } from "next-intl";

function StatCard({
    icon,
    color,
    value,
    label,
    }: {
    icon: string;
    color: string;
    value: number;
    label: string;
    }) {
    return (
        <div className="flex items-center gap-6 bg-box-bg text-heading-1 shadow-md dark:shadow-none rounded-2xl px-8 py-6 border border-[rgb(var(--box-border))]">
        <div className={`p-5 rounded-xl text-4xl ${color}`}>
            <i className={icon} />
        </div>
        <div>
            <p className="text-4xl font-bold">{value}</p>
            <p className="text-heading-3 text-base">{label}</p>
        </div>
        </div>
    );
}

export default function DashboardPage() {
    const { champions } = useChampionList();
    const { acertados, faltan } = useStats(champions);
    const t = useTranslations("dashboard");

    const stats = [
        {
        icon: "bx bx-calendar",
        color: "bg-blue-100 text-blue-600",
        value: champions.length,
        label: t("stats.total"),
        },
        {
        icon: "bx bx-user-check",
        color: "bg-yellow-100 text-yellow-600",
        value: acertados,
        label: t("stats.completed"),
        },
        {
        icon: "bx bx-dumbbell",
        color: "bg-red-100 text-red-600",
        value: faltan,
        label: t("stats.remaining"),
        },
    ];

    return (
        <div className="px-8 py-12 max-w-screen-xl mx-auto">
        <div className="mb-12">
            <h1 className="text-5xl font-bold text-heading-1">{t("title")}</h1>
            <p className="text-heading-3 text-lg mt-2">{t("breadcrumb")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
            ))}
        </div>
        </div>
    );
}
