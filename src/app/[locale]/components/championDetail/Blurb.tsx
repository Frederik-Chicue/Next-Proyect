export default function Blurb({ text }: { text: string }) {
    return (
        <div className="section">
        <h2>Blurb</h2>
        <p>{text}</p>
        </div>
    );
}