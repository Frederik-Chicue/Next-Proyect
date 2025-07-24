import ChampionCard from './ChampionCard';
import type { ChampionSummary } from '../../types/Champion';

interface Props {
    champions: ChampionSummary[];
    version: string;
}

export default function ChampionGrid({ champions, version }: Props) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4 max-w-7xl mx-auto">
        {champions.map((c) => (
            <ChampionCard key={c.id} champ={c} version={version} />
        ))}
        </div>
    );
}
