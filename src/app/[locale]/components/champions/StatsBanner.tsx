import { useTranslations } from "next-intl";

interface Props {
    correct: number;
    remaining: number;
}

export default function StatsBanner({ correct, remaining }: Props) {
    const t = useTranslations('dashboard');

    return (
        <div className="flex justify-center gap-6 p-4 rounded-xl bg-box-bg shadow-md text-heading-2 font-semibold text-base">
        <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>{t("banner.correct", { count: correct })}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-red-500 text-xl">❌</span>
            <span>{t("banner.remaining", { count: remaining })}</span>
        </div>
        </div>
    );
}
