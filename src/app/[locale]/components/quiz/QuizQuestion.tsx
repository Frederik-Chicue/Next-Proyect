import { useTranslations } from 'next-intl';
import OptionButton from './OptionButton';
import ResultMessage from './ResultMessage';
import type { ChampionData } from '../../types/Champion';

interface Props {
    champion: ChampionData;
    answered: boolean;
    correct: boolean;
    onAnswer: (opt: string) => void;
    onClose: () => void;
}

export default function QuizQuestion({
    champion,
    answered,
    correct,
    onAnswer,
    onClose,
    }: Props) {
    const t = useTranslations('dashboard');

    const options = [...champion.tags, 'Healer'];

    return (
        <>
        <h3>{t('questionTitle', { name: champion.name })}</h3>
        <p>{t('questionText', { name: champion.name })}</p>

        <div className="quiz-options">
            {options.map((opt) => (
            <OptionButton
                key={opt}
                option={opt}
                onClick={onAnswer}
                disabled={answered}
            />
            ))}
        </div>

        {answered && (
            <>
            <ResultMessage correct={correct} />
            <button
                onClick={onClose}
                className="quiz-option"
                style={{ marginTop: '1rem' }}
            >
                {t('close')}
            </button>
            </>
        )}
        </>
    );
}
