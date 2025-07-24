import { useTranslations } from 'next-intl';

export default function CompletedMsg() {
    const t = useTranslations('dashboard');

    return (
        <p style={{ fontWeight: 'bold' }}>✅ {t('quizAlreadyCompleted')}</p>
    );
}
