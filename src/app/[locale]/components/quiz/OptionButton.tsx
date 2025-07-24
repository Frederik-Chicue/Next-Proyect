interface Props {
    option: string;
    onClick: (opt: string) => void;
    disabled: boolean;
}

export default function OptionButton({ option, onClick, disabled }: Props) {
    return (
        <button
        onClick={() => onClick(option)}
        disabled={disabled}
        className="quiz-option"
        >
        {option}
        </button>
    );
}
