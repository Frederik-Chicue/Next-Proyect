import { useEffect, useState } from 'react';
import { loadProgress, saveProgress } from '../services/quizStorage';
import type { QuizProgress } from '../context/QuizContext';

export function useSyncedProgress(): [QuizProgress, React.Dispatch<React.SetStateAction<QuizProgress>>] {
    const [progress, setProgress] = useState<QuizProgress>(loadProgress);

    useEffect(() => saveProgress(progress), [progress]);

    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
        if (e.key === 'quiz-progress' && e.newValue) {
            try {
            setProgress(JSON.parse(e.newValue));
            } catch {
            // ignore malformed JSON
            }
        }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    return [progress, setProgress];
}

