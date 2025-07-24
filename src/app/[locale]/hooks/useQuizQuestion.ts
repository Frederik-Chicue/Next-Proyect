import { useState } from 'react';
import type { ChampionData } from '../types/Champion';
import { useQuiz } from '../context/QuizContext';

export function useQuizQuestion(champion: ChampionData) {
    const { markCompleted, isCompleted } = useQuiz();

    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);

    const alreadyDone = isCompleted(champion.id);

    const handleAnswer = (option: string) => {
        if (alreadyDone) return;

        const ok = champion.tags.includes(option);
        setAnswered(true);
        setCorrect(ok);
        if (ok) markCompleted(champion.id);
    };

    return { answered, correct, alreadyDone, handleAnswer };
}
