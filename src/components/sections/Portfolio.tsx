import { useState } from "react";
import branding from "@/assets/work-branding.jpg";
import social from "@/assets/work-social.jpg";
import video from "@/assets/work-video.jpg";
import print from "@/assets/work-print.jpg";
import logo from "@/assets/work-logo.jpg";
import wedding from "@/assets/work-wedding.jpg";
import Reveal from "@/components/Reveal";

type Cat = "All" | "Logo" | "Social" | "Video" | "Print";

const items: { src: string; title: string; cat: Cat; tall?: boolean }[] = [
  { src: logo, title: "Solunct — Identity", cat: "Logo", tall: true },
  { src: social, title: "Endeavour Ladakh", cat: "Social" },
  { src: video, title: "Cinematic Color Grade", cat: "Video" },
  { src: branding, title: "Stationery System", cat: "Print" },
  { src: wedding, title: "Wedding Invitation", cat: "Print", tall: true },
  { src: print, title: "Hazardous Waste Brochure", cat: "Print" },
];

const cats: Cat[] = ["All", "Logo", "Social", "Video", "Print"];

const Portfolio = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="work" className="relative py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ Selected Work
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Crafted with <span className="text-gradient-brand">intent</span>, built to perform.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                    active === c
                      ? "bg-gradient-brand text-primary-foreground border-transparent shadow-glow-soft"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [grid-auto-flow:dense]">
          {filtered.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className={item.tall ? "sm:row-span-2" : ""}
            >
              <a
                href="#contact"
                className={`group relative block overflow-hidden rounded-3xl border border-border bg-surface ${
                  item.tall ? "h-full min-h-[34rem]" : "h-80"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                    {item.cat}
                  </div>
                  <div className="font-display text-xl md:text-2xl font-semibold">
                    {item.title}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    View case study →
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
