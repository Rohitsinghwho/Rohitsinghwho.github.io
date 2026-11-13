export default function SocialLink({ href, label }) {
  if (!href) return null;
  return (
    <a className="social-link" href={href} target="_blank" rel="noopener noreferrer">
      ↳ {label} <span>→</span>
    </a>
  );
}
