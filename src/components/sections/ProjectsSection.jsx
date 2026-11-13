import { useProjects, useMoreRepos } from "../hooks/useProjects";
import ProjectCard from "../ui/ProjectCard";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import GlowEffect from "../ui/GlowEffect";

export default function ProjectsSection() {
  const projects = useProjects();
  const repos = useMoreRepos();
  return (
    <>
      <section id="work">
        <GlowEffect top="10%" left={-250} />
        <div className="section-inner">
          <ScrollReveal>
            <SectionLabel text="work" />
            <h2>selected <span className="g">projects</span></h2>
          </ScrollReveal>
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
      <section id="more">
        <div className="section-inner">
          <ScrollReveal>
            <SectionLabel text="experiments" />
            <h2>more things i've <span className="b">built</span></h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="repos">
              {repos.map((r) => (
                <a className="repo" key={r.name} href={r.url} target="_blank" rel="noopener noreferrer">
                  <h4>{r.name}</h4><p>{r.desc}</p><small>{r.lang}</small>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
