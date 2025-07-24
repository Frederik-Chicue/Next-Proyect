import { useTranslations } from 'next-intl';
import type { ChampionData } from '../../types/Champion';

const color = (tag: string) =>
    ({
        Mage: '#8e44ad',
        Assassin: '#c0392b',
        Fighter: '#27ae60',
        Tank: '#2980b9',
        Marksman: '#f39c12',
        Support: '#16a085',
    }[tag] ?? '#7f8c8d');

export default function TagList({ tags }: { tags: ChampionData['tags'] }) {
    const t = useTranslations('dashboard');

    return (
        <div className="tags">
        {tags.map((tag) => (
            <span key={tag} className={`tag ${tag}`} style={{ background: color(tag) }}>
            {t(`roles.${tag}`, {tag})} 
            </span>
        ))}
        </div>
    );
}
