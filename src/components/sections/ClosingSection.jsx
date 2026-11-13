import { usePersonalInfo } from "../hooks/usePersonalInfo";

export default function ClosingSection() {
  const { firstName, lastName, socials } = usePersonalInfo();
  const name = `${firstName} ${lastName}`.toLowerCase();
  return (
    <footer className="closing">
      <p className="see"><a href={socials.github} target="_blank" rel="noopener noreferrer">see my code live</a></p>
      <p>development by <a href={socials.github} target="_blank" rel="noopener noreferrer">{name}</a> // design inspired by the code-editor aesthetic</p>
      <p><em>"learning something new every day."</em></p>
      <p>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">github</a>
        {socials.instagram && <> / <a href={socials.instagram} target="_blank" rel="noopener noreferrer">instagram</a></>}
      </p>
    </footer>
  );
}
