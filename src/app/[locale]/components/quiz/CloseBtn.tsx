interface Props {
    onClose: () => void;
}
export default function CloseBtn({ onClose }: Props) {
    return (
        <button className="modal-close" onClick={onClose}>
        ✕
        </button>
    );
}
