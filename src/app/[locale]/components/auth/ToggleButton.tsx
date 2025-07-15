import styles from './AuthForm.module.css';

interface Props {
    label: string;
    onClick: () => void;
}

export const ToggleButton = ({ label, onClick }: Props) => (
    <button className={styles.btn} onClick={onClick} aria-label={label}>
        {label}
    </button>
);
