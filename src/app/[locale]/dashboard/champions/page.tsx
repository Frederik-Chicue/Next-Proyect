'use client'

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useQuiz } from '../../context/QuizContext';
import { useChampionList } from '../../hooks/useChampionList';
import { useStats } from '../../hooks/useStats';
import StatsBanner from '../../components/champions/StatsBanner';
import ChampionGrid from '../../components/champions/ChampionGrid';
import './ChampionList.css';

export default function ChampionList() {
    const t = useTranslations("dashboard");
    const { champions, version, loading } = useChampionList();
    const { setTotalChampions } = useQuiz();
    const [search, setSearch] = useState('');

    useEffect(() => {
    if (champions.length > 0) {
        setTotalChampions(champions.length);
    }
}, [champions, setTotalChampions]);


    const { correct, remaining } = useStats(champions);

    const filteredChampions = champions.filter(champ =>
        champ.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>{t("loading")}</p>;

    return (
        <div className="flex flex-col items-center gap-y-4 px-4 sm:px-6 md:px-0 mt-4">
        <StatsBanner correct={correct} remaining={remaining} />

        <input
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input w-full max-w-md p-2 border rounded-md shadow-sm mx-auto mb-6 block"
        />

        {filteredChampions.length === 0 ? (
            <p className="text-gray-500">{t("empty")}</p>
        ) : (
            <ChampionGrid champions={filteredChampions} version={version} />
        )}
        </div>
    );
}
