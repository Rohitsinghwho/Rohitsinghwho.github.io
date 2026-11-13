import DraggablePanel from "./DraggablePanel";

export default function TestimonialCard({ testimonial }) {
  const { quote, authorName, authorTitle, avatarUrl } = testimonial;
  return (
    <DraggablePanel title="testimonial">
      {quote.split(/\n+/).map((line, i) => (
        <div className="num" key={i}><i>{i + 1}</i><p>{line}</p></div>
      ))}
      <div className="author">
        {avatarUrl && <img src={avatarUrl} alt={authorName} />}
        <span><b>{authorName}</b><br />{authorTitle}</span>
      </div>
    </DraggablePanel>
  );
}
