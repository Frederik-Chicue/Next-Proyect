import type { ChampionData } from '../../types/Champion';

export default function StatBlock({ stats }: { stats: ChampionData['stats'] }) {
    return (
        <div className="section">
        <h2>Stats</h2>
        <p>HP: {stats.hp}</p>
        <p>AD: {stats.attackdamage}</p>
        <p>Armor: {stats.armor}</p>
        </div>
    );
}