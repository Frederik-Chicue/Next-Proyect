import Link from 'next/link';
import type { ChampionSummary } from '../../types/Champion';
// import Image from 'next/image';

interface Props {
    champ: ChampionSummary;
    version: string;
}
export default function ChampionCard({ champ, version }: Props) {
    return (
        <Link href={`/dashboard/champions/${champ.id}`} className="champion-card">
        <img
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
            alt={champ.name}
        />
        <p className="champion-name">{champ.name}</p>
        <p className="champion-title">
            {champ.title.charAt(0).toUpperCase() + champ.title.slice(1)}
        </p>
        </Link>
    );
}
