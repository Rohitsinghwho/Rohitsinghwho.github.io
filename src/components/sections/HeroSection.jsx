import { usePersonalInfo } from "../hooks/usePersonalInfo";
import GlowEffect from "../ui/GlowEffect";
import FloatingSymbol from "../ui/FloatingSymbol";

const symbols = [
  { s: "{", style: { top: "12%", left: "8%", fontSize: "4rem" }, d: 7, delay: 0 },
  { s: "</>", style: { top: "18%", right: "10%", fontSize: "3.4rem" }, d: 5.5, delay: -2 },
  { s: "#", style: { bottom: "16%", left: "12%", fontSize: "3rem" }, d: 8, delay: -3 },
  { s: "}", style: { bottom: "20%", right: "8%", fontSize: "4rem" }, d: 6.5, delay: -1 },
  { s: "=>", style: { top: "55%", left: "3%", fontSize: "2.4rem" }, d: 9, delay: -4 },
  { s: "[ ]", style: { top: "8%", left: "48%", fontSize: "2.2rem" }, d: 7.5, delay: -5 },
];

export default function HeroSection() {
  const { firstName, lastName, role, accent, tagline } = usePersonalInfo();
  const rest = role.replace(accent, "").trim();
  return (
    <section id="home" className="hero">
      <GlowEffect top={-150} left={-100} />
      <GlowEffect bottom={-250} right={-150} delay={-6} />
      {symbols.map((x) => (
        <FloatingSymbol key={x.s} symbol={x.s} style={x.style} duration={x.d} delay={x.delay} />
      ))}
      <div className="section-inner hero-inner">
        <div className="hero-label">HOME</div>
        <h1 className="hero-heading">
          Hi, I'm {firstName} {lastName}, a<br />
          <span className="g">{accent}</span> {rest}
        </h1>
        <p className="hero-sub">{tagline}</p>
        <div className="hero-cta">
          <a className="btn primary" href="#work">see my work</a>
          <a className="btn" href="#contact">get in touch →</a>
        </div>
      </div>
    </section>
  );
}
