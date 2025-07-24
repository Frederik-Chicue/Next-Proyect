'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
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
  const locale = useLocale(); // ✅ idioma actual
  useEffect(() => {
    if (!id) return;

    const fetchChampion = async () => {
      try {
        setLoading(true);

        const versionsRes = await fetch(
          'https://ddragon.leagueoflegends.com/api/versions.json'
        );
        const versions = await versionsRes.json();
        const latest = versions[0];

        const riotLang = languageMap[locale] || 'en_US';

        const champRes = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latest}/data/${riotLang}/champion/${id}.json`
        );
        const champData = await champRes.json();

        setChampion(champData.data[id]);
      } catch (error) {
        console.error('Error fetching champion:', error);
        setChampion(null);
      } finally {
        setLoading(false);
      }
    };

    fetchChampion();
  }, [id, locale]);

  return { champion, loading };
}
