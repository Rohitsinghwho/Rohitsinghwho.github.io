import { useEffect, useState } from "react";

const icons = {
  home: <path d="M3 11l9-8 9 8v10H3z" />,
  about: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
  work: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />,
  more: <path d="M9 3h6v6l4 10a2 2 0 01-2 2H7a2 2 0 01-2-2l4-10z" />,
  contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
};
const items = [
  ["home", "home"], ["about", "about"], ["work", "work"], ["more", "experiments"], ["contact", "contact"],
];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="side-nav" aria-label="sections">
      {items.map(([id, tip]) => (
        <a key={id} href={`#${id}`} data-tip={tip} className={active === id ? "active" : ""} aria-label={tip}>
          <svg viewBox="0 0 24 24">{icons[id]}</svg>
        </a>
      ))}
    </nav>
  );
}
