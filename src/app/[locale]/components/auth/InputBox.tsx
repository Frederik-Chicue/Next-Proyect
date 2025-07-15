import styles from './AuthForm.module.css';

interface InputBoxProps {
    id: string;
    type: string;
    placeholder: string;
    iconClass: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({
    id,
    type,
    placeholder,
    iconClass,
    label,
    value,
    onChange,
}: InputBoxProps) => (
    <div className={styles["input-box"]}>
        <label htmlFor={id} className={styles["sr-only"]}>
        {label}
        </label>
        <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        />
        <i className={iconClass} aria-hidden="true"></i>
    </div>
);
