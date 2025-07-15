"use client"

import { createContext, useContext, useState, type ReactNode } from "react";
import { useSyncedProgress } from "../hooks/useSyncedProgress";

export type ChampionID = string;
export type QuizProgress = Record<ChampionID, true>;

interface QuizCtxValue {
    progress: QuizProgress;
    markCompleted: (id: ChampionID) => void;
    isCompleted: (id: ChampionID) => boolean;
    totalChampions: number;
    setTotalChampions: (n: number) => void;
}

const QuizContext = createContext<QuizCtxValue>({} as QuizCtxValue);
export const useQuiz = () => useContext(QuizContext);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [progress, setProgress] = useSyncedProgress();
    const [totalChampions, setTotalChampions] = useState<number>(0);

    const markCompleted = (id: ChampionID) =>
        setProgress((prev) => (prev[id] ? prev : { ...prev, [id]: true }));

    const isCompleted = (id: ChampionID) => !!progress[id];

    return (
        <QuizContext.Provider
        value={{ progress, markCompleted, isCompleted, totalChampions, setTotalChampions }}
        >
        {children}
        </QuizContext.Provider>
    );
}
