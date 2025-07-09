import styles from "../../styles/AuthForm.module.css";
import { ToggleButton } from "./ToggleButton";
import { useTranslations } from "next-intl";

interface Props {
    onToggle: (register: boolean) => void;
}

interface PanelProps {
    title: string;
    description: string;
    label: string;
    onClick: () => void;
    panelStyle: string;
}

const TogglePanel = ({ title, description, label, onClick, panelStyle }: PanelProps) => (
    <div className={`${styles["toggle-panel"]} ${panelStyle}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ToggleButton label={label} onClick={onClick} />
    </div>
);

export const AuthTogglePanel = ({ onToggle }: Props) => {
    const t  = useTranslations("auth");

    return (
        <div className={styles["toggle-box"]}>
        <TogglePanel
            title={t("toggle.welcomeTitle")}
            description={t("toggle.noAccount")}
            label={t("toggle.register")}
            onClick={() => onToggle(true)}
            panelStyle={styles["toggle-left"]}
        />
        <TogglePanel
            title={t("toggle.backTitle")}
            description={t("toggle.haveAccount")}
            label={t("toggle.login")}
            onClick={() => onToggle(false)}
            panelStyle={styles["toggle-right"]}
        />
        </div>
    );
};
