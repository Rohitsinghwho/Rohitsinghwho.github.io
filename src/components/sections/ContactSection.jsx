import { usePersonalInfo } from "../hooks/usePersonalInfo";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import GlowEffect from "../ui/GlowEffect";

export default function ContactSection() {
  const { socials } = usePersonalInfo();
  return (
    <section id="contact">
      <GlowEffect bottom={-300} left="30%" />
      <div className="section-inner">
        <ScrollReveal>
          <SectionLabel text="contact" />
          <p className="contact-big">
            have a project or role in mind?{" "}
            <a href={socials.github} target="_blank" rel="noopener noreferrer">let's work together →</a>
          </p>
          <p className="contact-sub">
            the easiest way to reach me is through github or instagram. i'm always happy to talk about backend
            systems, open source or a new opportunity.
          </p>
          <div className="hero-cta left">
            {socials.github && <a className="btn primary" href={socials.github} target="_blank" rel="noopener noreferrer">github</a>}
            {socials.instagram && <a className="btn" href={socials.instagram} target="_blank" rel="noopener noreferrer">instagram</a>}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
