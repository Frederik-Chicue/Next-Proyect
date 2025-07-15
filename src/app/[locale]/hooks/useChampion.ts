import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import type { ChampionData } from '../types/Champion';

const languageMap: Record<string, string> = {
    es: 'es_MX',
    en: 'en_US',
    fr: 'fr_FR',  
    de: 'de_DE',  
};

export function useChampion(id?: string) {
    const [champion, setChampion] = useState<ChampionData | null>(null);
    const [loading, setLoading] = useState(true);
    const { i18n } = useTranslation();

    useEffect(() => {
        if (!id) return;

        const fetchChampion = async () => {
            try {
                setLoading(true);

                const { data: versions } = await axios.get<string[]>(
                    'https://ddragon.leagueoflegends.com/api/versions.json'
                );
                const latest = versions[0];
                const riotLang = languageMap[i18n.language] || 'en_US';

                const { data } = await axios.get<{ data: Record<string, ChampionData> }>(
                    `https://ddragon.leagueoflegends.com/cdn/${latest}/data/${riotLang}/champion/${id}.json`
                );

                setChampion(data.data[id]);
            } catch (error) {
                console.error(error);
                setChampion(null);
            } finally {
                setLoading(false);
            }
        };

        fetchChampion();
    }, [id, i18n.language]);

    return { champion, loading };
}
