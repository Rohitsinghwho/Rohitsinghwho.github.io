export default function GlowEffect({ size = 600, delay = 0, ...pos }) {
  return <div className="glow" style={{ ...pos, width: size, height: size, animationDelay: `${delay}s` }} />;
}
