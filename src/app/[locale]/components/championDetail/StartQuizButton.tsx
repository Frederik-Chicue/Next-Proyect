import { useQuiz } from '../../context/QuizContext';
import { useTranslations } from 'next-intl';

interface Props {
    champId: string;
    onClick: () => void;
}

export default function StartQuizBtn({ champId, onClick }: Props) {
    const { isCompleted } = useQuiz();
    const t = useTranslations('dashboard');
    const done = isCompleted(champId);

    return (
        <button
        className="start-quiz-btn"
        onClick={onClick}
        disabled={done}
        >
        {done ? t('quizCompleted') : t('startQuiz')}
        </button>
    );
}
