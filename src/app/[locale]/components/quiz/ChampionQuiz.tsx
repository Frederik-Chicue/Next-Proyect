import CloseBtn      from './CloseBtn';
import CompletedMsg  from './CompletedMsg';
import QuizQuestion  from './QuizQuestion';
import { useQuizQuestion } from '../../hooks/useQuizQuestion';
import type { ChampionData } from '../../types/Champion';

interface Props {
    champion: ChampionData;
    onClose: () => void;
}

export default function ChampionQuiz({ champion, onClose }: Props) {
    const { answered, correct, alreadyDone, handleAnswer } =
        useQuizQuestion(champion);
    if (alreadyDone) {
        return (
        <>
            <CloseBtn onClose={onClose} />
            <CompletedMsg />
        </>
        );
    }

    return (
        <>
        <CloseBtn onClose={onClose} />
        <QuizQuestion
            champion={champion}
            answered={answered}
            correct={correct}
            onAnswer={handleAnswer}
            onClose={onClose}
        />
        </>
    );
}
