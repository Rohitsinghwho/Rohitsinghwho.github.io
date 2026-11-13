import { useDraggable } from "../hooks/useDraggable";

export default function DraggablePanel({ title, children, className = "" }) {
  const { panelRef, onPointerDown } = useDraggable();
  return (
    <div ref={panelRef} className={`panel ${className}`}>
      <div className="panel-titlebar" onPointerDown={onPointerDown}>
        <span className="panel-dots">
          <span className="window-dot red" />
          <span className="window-dot yellow" />
          <span className="window-dot green" />
        </span>
        <span className="panel-title">{title}</span>
      </div>
      <div className="panel-body">{children}</div>
    </div>
  );
}
