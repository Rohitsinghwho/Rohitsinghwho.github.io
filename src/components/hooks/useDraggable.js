import { useRef, useCallback, useEffect } from "react";

let maxZ = 10;

// Transform-based drag so the panel keeps its place in the grid. Desktop only (>1024px).
export function useDraggable() {
  const panelRef = useRef(null);
  const state = useRef({ dragging: false, sx: 0, sy: 0, dx: 0, dy: 0 });

  const onPointerDown = useCallback((e) => {
    if (window.innerWidth <= 1024 || !panelRef.current) return;
    e.preventDefault();
    const s = state.current;
    s.dragging = true;
    s.sx = e.clientX - s.dx;
    s.sy = e.clientY - s.dy;
    panelRef.current.style.zIndex = ++maxZ;
    panelRef.current.classList.add("dragging");
  }, []);

  useEffect(() => {
    const move = (e) => {
      const s = state.current;
      if (!s.dragging || !panelRef.current) return;
      s.dx = e.clientX - s.sx;
      s.dy = e.clientY - s.sy;
      panelRef.current.style.translate = `${s.dx}px ${s.dy}px`;
    };
    const up = () => {
      state.current.dragging = false;
      panelRef.current?.classList.remove("dragging");
    };
    const reset = () => {
      if (window.innerWidth <= 1024 && panelRef.current) {
        panelRef.current.style.translate = "";
        Object.assign(state.current, { dx: 0, dy: 0 });
      }
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("resize", reset);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return { panelRef, onPointerDown };
}
