import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import type { ChampionSummary } from '../types/Champion';

type Response = { data: Record<string, ChampionSummary> };

const languageMap: Record<string, string> = {
    es: 'es_MX',
    en: 'en_US',
    fr: 'fr_FR',
    de: 'de_DE',
};

export function useChampionList() {
    const [champions, setChampions] = useState<ChampionSummary[]>([]);
    const [version, setVersion] = useState('');
    const [loading, setLoading] = useState(true);
    const locale = useLocale();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const versionsRes = await fetch(
                    'https://ddragon.leagueoflegends.com/api/versions.json'
                );

                if (!versionsRes.ok) throw new Error('Error al obtener versiones');

                const versions: string[] = await versionsRes.json();
                const latest = versions[0];
                setVersion(latest);

                const riotLang = languageMap[locale] || 'en_US';

                const championsRes = await fetch(
                    `https://ddragon.leagueoflegends.com/cdn/${latest}/data/${riotLang}/champion.json`
                );

                if (!championsRes.ok) throw new Error('Error al obtener campeones');

                const json: Response = await championsRes.json();
                setChampions(Object.values(json.data));
            } catch (err) {
                console.error('Error en useChampionList:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [locale]);

    return { champions, version, loading };
}
