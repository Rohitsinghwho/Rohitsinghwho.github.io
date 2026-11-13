import { usePersonalInfo } from "../hooks/usePersonalInfo";

export default function TitleBar() {
  const { firstName, lastName } = usePersonalInfo();
  return (
    <div className="window-titlebar">
      <div className="window-dots">
        <span className="window-dot red" /><span className="window-dot yellow" /><span className="window-dot green" />
      </div>
      <div className="window-title">{firstName.toLowerCase()} &lt;<span className="g">{lastName.toLowerCase()}</span>&gt;</div>
      <div style={{ width: 52 }} />
    </div>
  );
}
