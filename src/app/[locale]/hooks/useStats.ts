import { useMemo } from 'react';
import { useQuiz } from '../context/QuizContext';
import type { ChampionSummary } from '../types/Champion';

interface Stats {
    correct: number;
    remaining: number;
    total: number;
}

export function useStats(champions: ChampionSummary[]): Stats {
    const { progress } = useQuiz();

    const stats = useMemo(() => {
        const total = champions.length;

        if (!progress) {
        return {
            correct: 0,
            remaining: total,
            total,
        };
        }

        const correct = Object.keys(progress).length;
        const remaining = total - correct;

        return { correct, remaining, total };
    }, [champions, progress]);

    return stats;
}
