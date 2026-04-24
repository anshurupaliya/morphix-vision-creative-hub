import Reveal from "@/components/Reveal";

const clients = [
  "Endeavour Ladakh",
  "Wasthya Physio",
  "RAB Studio",
  "Crown Beauty Hub",
  "Sham Industries",
  "Hulk Nutrition",
  "Maruti Mart",
  "Rudraj Immigration",
  "Escapades Rebellion",
  "Ujjval Ghani",
];

const Clients = () => {
  return (
    <section className="relative py-24 border-y border-border bg-surface/40">
      <div className="container">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              ◇ Trusted By
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground">
              Brands that chose to{" "}
              <span className="text-foreground">stand out</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex gap-16 marquee-track w-max">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="font-display text-2xl md:text-3xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
