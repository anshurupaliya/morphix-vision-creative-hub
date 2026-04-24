import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  {
    quote:
      "Manish transformed our entire visual identity. Our engagement tripled within two months of the rebrand.",
    name: "Travel Brand Founder",
    role: "Endeavour Ladakh",
  },
  {
    quote:
      "The video ads Morphix Vision created out-performed everything we'd done before. Crisp, premium, on-brand.",
    name: "Marketing Lead",
    role: "Hulk Nutrition",
  },
  {
    quote:
      "Pixel-perfect, deadline-perfect. Working with Manish feels like having an in-house creative director.",
    name: "Co-founder",
    role: "Rudraj Immigration",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ Testimonials
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Words from <span className="text-gradient-brand">happy</span> founders.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass-card glow-border h-full rounded-3xl p-7 hover:bg-surface/80 transition-all duration-500">
                <Quote className="h-8 w-8 text-primary/60 mb-5" />
                <blockquote className="text-base leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
