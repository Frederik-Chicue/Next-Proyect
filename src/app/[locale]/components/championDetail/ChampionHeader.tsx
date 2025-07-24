import type { ChampionData } from '../../types/Champion';

export default function ChampionHeader({ champ }: { champ: ChampionData }) {
    return (
        <div className="header">
            <h1>{champ.name}</h1>
            <p className="title">{champ.title}</p>
            <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.name}_0.jpg`}
                alt={champ.name}
            />
        </div>
    );
}
