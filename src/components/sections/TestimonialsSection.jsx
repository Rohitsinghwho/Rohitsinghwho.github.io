import { useTestimonials } from "../hooks/useTestimonials";
import TestimonialCard from "../ui/TestimonialCard";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";

// Hidden until real testimonials are added to portfolioData.js
export default function TestimonialsSection() {
  const testimonials = useTestimonials();
  if (!testimonials.length) return null;
  return (
    <section id="testimonials">
      <div className="section-inner">
        <ScrollReveal>
          <SectionLabel text="testimonials" />
          <h2>nice things <span className="g">people</span> <span className="b">say</span> about my work</h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="testimonials">
            {testimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
