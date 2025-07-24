import { useTranslations } from "next-intl";
import ChampionHeader from "./ChampionHeader";
import TagList from "./TagList";
import StatBlock from "./StatBlock";
import Blurb from "./Blurb";
import StartQuizBtn from "./StartQuizButton";
import type { ChampionData } from "../../types/Champion";

interface Props {
    champion: ChampionData;
    onStartQuiz: () => void;
}

export default function ChampionLayout({ champion, onStartQuiz }: Props) {
    const t = useTranslations("dashboard");

    return (
        <div className="champion-detail">
        <ChampionHeader champ={champion} />

        <div className="info">
            <div className="section">
            <h2>{t("tags")}</h2>
            <TagList tags={champion.tags} />
            </div>

            <StatBlock stats={champion.stats} />
            <Blurb text={champion.blurb} />
            <StartQuizBtn champId={champion.id} onClick={onStartQuiz} />
        </div>
        </div>
    );
}