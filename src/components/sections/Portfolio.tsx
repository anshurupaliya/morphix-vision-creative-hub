import { useState } from "react";
import Reveal from "@/components/Reveal";

import logoRoyalBlush from "@/assets/portfolio/logo-royal-blush.jpg";
import logoSis from "@/assets/portfolio/logo-sis-mug.jpg";
import logoEhouse from "@/assets/portfolio/logo-e-house.jpg";
import logoEnvy from "@/assets/portfolio/logo-envy.jpg";
import logoRadhe from "@/assets/portfolio/logo-radhe.jpg";
import logoFabie from "@/assets/portfolio/logo-fabie.jpg";

import socialEndeavour from "@/assets/portfolio/social-endeavour.jpg";
import socialHulk from "@/assets/portfolio/social-hulk.jpg";
import socialHulkPost from "@/assets/portfolio/social-hulk-post.jpg";

import videoBridal from "@/assets/portfolio/video-bridal.jpg";
import videoSaree from "@/assets/portfolio/video-saree.jpg";
import videoPhysio from "@/assets/portfolio/video-physio.jpg";
import videoWomen from "@/assets/portfolio/video-women.jpg";

import printRudraj from "@/assets/portfolio/print-rudraj-card.jpg";
import printBrochure from "@/assets/portfolio/print-brochure.jpg";

type Cat = "All" | "Logo" | "Social" | "Video" | "Print";

const items: { src: string; title: string; client: string; cat: Cat; tall?: boolean }[] = [
  { src: logoRoyalBlush, title: "Royal Blush", client: "Identity & Logo", cat: "Logo", tall: true },
  { src: socialEndeavour, title: "Manali · Leh · Srinagar", client: "Endeavour Ladakh", cat: "Social" },
  { src: videoPhysio, title: "7 Benefits of Physiotherapy", client: "Swasthya Clinic", cat: "Video" },
  { src: printRudraj, title: "Business Card System", client: "Rudraj Immigration", cat: "Print", tall: true },
  { src: socialHulk, title: "Muscle 8 Iso Hydro", client: "Hulk Nutrition", cat: "Social" },
  { src: logoSis, title: "SIS Brand Mug", client: "Brand Identity", cat: "Logo" },
  { src: videoBridal, title: "Bridal Wedding Lehenga", client: "Saree Collection", cat: "Video" },
  { src: logoEhouse, title: "e — House Mark", client: "Real Estate Logo", cat: "Logo" },
  { src: socialHulkPost, title: "Nutrition Facts Carousel", client: "Hulk Nutrition", cat: "Social", tall: true },
  { src: videoWomen, title: "8 Factors · Women Health", client: "Wellness Reel", cat: "Video" },
  { src: printBrochure, title: "Hazardous Waste Brochure", client: "The Leela Corporation", cat: "Print" },
  { src: logoEnvy, title: "Envy Designs", client: "Architecture Logo", cat: "Logo" },
  { src: logoRadhe, title: "Radhe Jewellery", client: "Jewellery Branding", cat: "Logo" },
  { src: videoSaree, title: "Party Wear Saree", client: "Saree Collection", cat: "Video" },
  { src: logoFabie, title: "Fabie Fashion", client: "Apparel Branding", cat: "Logo" },
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
              key={`${item.title}-${item.client}`}
              delay={Math.min(i * 50, 400)}
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
                  alt={`${item.title} — ${item.client}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item.cat}
                  </div>
                  <div className="font-display text-xl md:text-2xl font-semibold leading-tight">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {item.client}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
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
