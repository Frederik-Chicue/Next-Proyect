import { useMemo } from "react";
import { useQuiz } from "../context/QuizContext";
import type { ChampionSummary } from "../types/Champion";

export function useStats(champions: ChampionSummary[]) {
    const { progress } = useQuiz();

    return useMemo(() => {
        const total = champions.length;
        const acertados = progress ? Object.keys(progress).length : 0;
        const faltan = total - acertados;

        return { acertados, faltan, total };
    }, [champions.length, progress]);
}
