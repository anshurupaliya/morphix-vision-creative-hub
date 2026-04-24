import heroBlob from "@/assets/hero-blob.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Animated gradient blobs */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-primary/30 blur-[140px] blob-float pulse-glow"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 w-[38rem] h-[38rem] rounded-full bg-primary-glow/30 blur-[160px] blob-float pulse-glow"
        style={{ animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(24_100%_50%/0.12),transparent_60%)]"
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
        }}
      />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_hsl(var(--neon))]" />
            Premium Creative Studio
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
            We Design <br className="hidden sm:block" />
            <span className="text-gradient-brand">Experiences</span> That <br className="hidden sm:block" />
            <span className="italic font-light">Convert.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Morphix Vision helps brands stand out with powerful design &
            storytelling — branding, social, video & print, crafted with intent.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all duration-500 hover:scale-[1.03]"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-4 text-sm font-medium hover:border-primary/50 hover:bg-surface transition-all duration-500"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand">
                <Play className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
              </span>
              Contact Us
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { k: "50+", v: "Brands Crafted" },
              { k: "3+", v: "Years Experience" },
              { k: "10+", v: "Industries" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-gradient-brand">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating visual */}
        <div className="lg:col-span-5 relative animate-scale-in">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img
              src={heroBlob}
              alt="Abstract glowing orange fluid form"
              width={1280}
              height={1280}
              className="relative w-full h-full object-cover rounded-[3rem] mix-blend-screen blob-float"
            />
            {/* Floating chips */}
            <div className="absolute -left-4 top-10 glass-card rounded-2xl px-4 py-3 text-xs animate-fade-in">
              <div className="text-muted-foreground">Branding</div>
              <div className="font-display font-semibold">Identity Systems</div>
            </div>
            <div className="absolute -right-2 bottom-10 glass-card rounded-2xl px-4 py-3 text-xs animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-muted-foreground">Motion</div>
              <div className="font-display font-semibold">Video & Ads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
