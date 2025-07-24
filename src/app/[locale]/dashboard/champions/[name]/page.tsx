'use client'

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useChampion } from '../../../hooks/useChampion';
import ChampionLayout from '../../../components/championDetail/ChampionLayout';
import QuizModal from '../../../components/quiz/QuizModal';
import './ChampionDetail.css'

export default function ChampionDetail() {
    const { name } = useParams<{ name: string }>();
    const [showQuiz, setShowQuiz] = useState(false);
    const { champion, loading } = useChampion(name);
    console.log('champion:',champion)
    console.log('loading:',loading)
    if (loading || !champion) return <p>Loading…</p>;

    return (
        <>
        <ChampionLayout champion={champion} onStartQuiz={() => setShowQuiz(true)} />
        {showQuiz && <QuizModal champion={champion} onClose={() => setShowQuiz(false)} />}
        </>
    );
}
