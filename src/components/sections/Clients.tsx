import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import endeavour from "@/assets/clients/endeavour.jpg";
import swasthya from "@/assets/clients/swasthya.jpg";
import rab from "@/assets/clients/rab.jpg";
import ayodhya from "@/assets/clients/ayodhya.jpg";
import ujjval from "@/assets/clients/ujjval.jpg";
import escapades from "@/assets/clients/escapades.jpg";
import ntm from "@/assets/clients/ntm.jpg";
import ds from "@/assets/clients/ds.jpg";
import sham from "@/assets/clients/sham.jpg";
import crown from "@/assets/clients/crown.jpg";
import saraswati from "@/assets/clients/saraswati.jpg";

const clients = [
  { src: endeavour, name: "Endeavour Ladakh" },
  { src: swasthya, name: "Swasthya Physiotherapy" },
  { src: rab, name: "RAB Design Studio" },
  { src: crown, name: "Crown The Beauty Hub" },
  { src: sham, name: "Sham Industries" },
  { src: ujjval, name: "Ujjval Ghani Sing Tel" },
  { src: ntm, name: "NTM" },
  { src: ds, name: "Dwarkadas Shamkumar" },
  { src: escapades, name: "Escapades The Rebellion" },
  { src: ayodhya, name: "Ayodhya Textile Market" },
  { src: saraswati, name: "Saraswati Textile Market" },
];

const Clients = () => {
  return (
    <section className="relative py-24 border-y border-border bg-surface/40">
      <div className="container">
        <Reveal>
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              ◇ Trusted By
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground">
              Brands that chose to{" "}
              <span className="text-foreground">stand out</span>.
            </h2>
          </div>
        </Reveal>

        {/* Logo marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex gap-6 marquee-track w-max items-center">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                title={c.name}
                className="group shrink-0 h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-background/80 border border-border p-3 flex items-center justify-center hover:border-primary/50 hover:shadow-glow-soft transition-all duration-500"
              >
                <img
                  src={c.src}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  width={112}
                  height={112}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats below */}
        <Reveal delay={150}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {[
              { end: 11, suffix: "+", v: "Brands" },
              { end: 100, suffix: "+", v: "Projects" },
              { end: 60, suffix: "K+", v: "Followers Reached" },
              { end: 100, suffix: "%", v: "On-time Delivery" },
            ].map((s) => (
              <div
                key={s.v}
                className="group bg-surface/80 backdrop-blur p-8 text-center transition-colors duration-500 hover:bg-surface"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-brand transition-transform duration-500 group-hover:scale-110 inline-block">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
