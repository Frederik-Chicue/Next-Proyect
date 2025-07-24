import { useTranslations } from 'next-intl';

interface Props {
    correct: boolean;
}

export default function ResultMessage({ correct }: Props) {
    const t = useTranslations('dashboard');

    return (
        <p
        style={{ marginTop: '1rem', fontWeight: 'bold' }}
        className={correct ? 'text-green-500' : 'text-red-500'}
        >
        {correct ? `✅ ${t('correctAnswer')}` : `❌ ${t('incorrectAnswer')}`}
        </p>
    );
}
