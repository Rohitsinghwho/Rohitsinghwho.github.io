// Renders text with syntax-colour highlights: [{ word, color }]
export default function HighlightedText({ text, highlights = [] }) {
  if (!highlights.length) return <>{text}</>;
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const sorted = [...highlights].sort((a, b) => b.word.length - a.word.length);
  const re = new RegExp(`(${sorted.map((h) => escape(h.word)).join("|")})`, "g");
  const colorOf = Object.fromEntries(highlights.map((h) => [h.word, h.color]));
  return (
    <>
      {text.split(re).map((part, i) =>
        colorOf[part] ? (
          <span key={i} className={`hl-${colorOf[part]}`}>{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
}
