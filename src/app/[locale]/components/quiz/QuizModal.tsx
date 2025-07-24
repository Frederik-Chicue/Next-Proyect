import ChampionQuiz from './ChampionQuiz';
import type { ChampionData } from '../../types/Champion';

interface Props {
    champion: ChampionData;
    onClose: () => void;
}

export default function QuizModal({ champion, onClose }: Props) {
    return (
        <div className="modal-overlay">
        <div className="modal-content">
            <ChampionQuiz champion={champion} onClose={onClose} />
        </div>
        </div>
    );
}