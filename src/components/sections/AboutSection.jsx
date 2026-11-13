import { useAboutContent } from "../hooks/useAboutContent";
import { usePersonalInfo } from "../hooks/usePersonalInfo";
import DraggablePanel from "../ui/DraggablePanel";
import HighlightedText from "../ui/HighlightedText";
import SocialLink from "../ui/SocialLink";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import GlowEffect from "../ui/GlowEffect";
import TechTag from "../ui/TechTag";

function Numbered({ items }) {
  return items.map((p) => (
    <div className="num" key={p.id}>
      <i>{p.id}</i>
      <p><HighlightedText text={p.text} highlights={p.highlights} /></p>
    </div>
  ));
}

export default function AboutSection() {
  const { paragraphs, collaborations, whereIWork, stack } = useAboutContent();
  const { portraitUrl, location, socials, firstName } = usePersonalInfo();

  return (
    <section id="about">
      <GlowEffect top="20%" right={-200} />
      <div className="section-inner">
        <ScrollReveal>
          <SectionLabel text="about" />
          <h2>a bit about <span className="g">me</span></h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="about-grid">
            <DraggablePanel title="about-me" className="p-about"><Numbered items={paragraphs} /></DraggablePanel>
            <DraggablePanel title="portrait" className="p-portrait">
              <div className="portrait-wrap"><img src={portraitUrl} alt={firstName} loading="lazy" /></div>
            </DraggablePanel>
            <DraggablePanel title="where-i-work" className="p-where">
              <p>{location.flag} {whereIWork}</p>
            </DraggablePanel>
            <DraggablePanel title="collaborations" className="p-collab"><Numbered items={collaborations} /></DraggablePanel>
            <DraggablePanel title="me-online" className="p-online">
              <div className="linklist">
                <SocialLink href={socials.linkedin} label="linkedin" />
                <SocialLink href={socials.instagram} label="instagram" />
                <SocialLink href={socials.twitter} label="x [twitter]" />
                <SocialLink href={socials.github} label="github" />
              </div>
            </DraggablePanel>
          </div>
          <p className="hint">// tip: drag the panels by their title bars on desktop</p>
          <div className="stack">{stack.map((t) => <TechTag key={t} label={t} />)}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}
