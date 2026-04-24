import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import endeavour from "@/assets/clients/endeavour.jpg";
import escapades from "@/assets/clients/escapades.jpg";
import swasthya from "@/assets/clients/swasthya.jpg";

const items = [
  {
    quote:
      "The creative for our Manali–Leh–Srinagar circuit tour was a scroll-stopper. Inquiries jumped within days of posting.",
    name: "Team",
    role: "Endeavour Ladakh",
    project: "Social + Story Ads",
    logo: endeavour,
  },
  {
    quote:
      "Our explainer reels — 7 Benefits of Physiotherapy, 8 Factors Women's Health — genuinely changed how patients find us. Crisp, clinical, shareable.",
    name: "Clinic Lead",
    role: "Swasthya Physiotherapy",
    project: "Video Content",
    logo: swasthya,
  },
  {
    quote:
      "Pixel-perfect, deadline-perfect. Our ride-book creatives and bike-trip story ads look premium next to the best in the travel space.",
    name: "Founder",
    role: "Escapades The Rebellion",
    project: "Social + Story Ads",
    logo: escapades,
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
            <Reveal key={t.role} delay={i * 100}>
              <figure className="glass-card glow-border h-full rounded-3xl p-7 hover:bg-surface/80 transition-all duration-500 flex flex-col">
                <Quote className="h-8 w-8 text-primary/60 mb-5" />
                <blockquote className="text-base leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-background/80 border border-border p-2 flex items-center justify-center">
                    <img
                      src={t.logo}
                      alt={`${t.role} logo`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-semibold truncate">{t.role}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                      {t.name} · {t.project}
                    </div>
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
