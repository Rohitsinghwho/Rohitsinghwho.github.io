import TechTag from "./TechTag";
import OnlineDot from "./OnlineDot";
import ScrollReveal from "./ScrollReveal";

// colour strings and // comments in the snippet
function Code({ code }) {
  const parts = code.split(/(\/\/.*|"[^"]*")/g);
  return (
    <pre className="code">
      {parts.map((p, i) =>
        p.startsWith("//") ? <span key={i} className="c-c">{p}</span>
        : p.startsWith('"') ? <span key={i} className="c-s">{p}</span>
        : p
      )}
    </pre>
  );
}

export default function ProjectCard({ project }) {
  const { id, name, tags, year, description, flow, features, code, status, liveUrl, sourceUrl } = project;
  return (
    <ScrollReveal className="project">
      <div className="proj-head">
        <div>
          <div className="proj-meta">&gt; work / {id}</div>
          <h3>{name}</h3>
        </div>
        <div className="year">{year}</div>
      </div>
      <p className="proj-intro">{description}</p>
      <div className="tags">{tags.map((t) => <TechTag key={t} label={t} />)}</div>

      <div className="proj-window">
        <div className="panel-titlebar static">
          <span className="panel-dots">
            <span className="window-dot red" /><span className="window-dot yellow" /><span className="window-dot green" />
          </span>
          <span className="panel-title">{name.toLowerCase().replace(/\s+/g, "-")} / overview</span>
        </div>
        {flow?.length > 0 && (
          <div className="diagram">
            {flow.map((n, i) => (
              <span key={n.label} className="flow-item">
                <span className={`node ${n.hl ? "hl" : ""} ${n.danger ? "danger" : ""}`}>{n.label}</span>
                {i < flow.length - 1 && <span className="arrow">→</span>}
              </span>
            ))}
          </div>
        )}
        <div className={`proj-grid ${code ? "" : "single"}`}>
          <ul className="feat">
            {features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          {code && <Code code={code} />}
        </div>
        <div className="proj-status">
          <span><OnlineDot /> {status}</span>
          <span>
            {liveUrl && <a className="cta" href={liveUrl} target="_blank" rel="noopener noreferrer">see it live →</a>}
            {sourceUrl && <a className="cta alt" href={sourceUrl} target="_blank" rel="noopener noreferrer">view source →</a>}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}
