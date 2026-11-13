export default function FloatingSymbol({ symbol, style, duration = 6, delay = 0 }) {
  return (
    <span
      className="floating-element"
      aria-hidden="true"
      style={{ ...style, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      {symbol}
    </span>
  );
}
