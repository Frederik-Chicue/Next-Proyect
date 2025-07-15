// services/quizStorage.ts
import type { QuizProgress } from '../context/QuizContext';

const STORAGE_KEY = 'quiz-progress';

export function loadProgress(): QuizProgress {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

export function saveProgress(progress: QuizProgress): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
