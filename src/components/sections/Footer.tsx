import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import logo from "@/assets/morphix-logo-dark.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-surface/40 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <img src={logo} alt="Morphix Vision" className="h-10 w-auto" width={200} height={62} />
            <p className="text-sm text-muted-foreground max-w-xs">
              We design experiences that convert. Branding, social, video & print
              — premium, on time, on brand.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {[
                { l: "Work", h: "#work" },
                { l: "About", h: "#about" },
                { l: "Services", h: "#services" },
                { l: "Contact", h: "#contact" },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="text-muted-foreground hover:text-foreground transition-colors">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Connect</div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Mail, href: "mailto:hiranimanish56@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="social link"
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-gradient-brand hover:border-transparent transition-all duration-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              +91 73597 40765 <br />
              hiranimanish56@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Morphix Vision. All rights reserved.</div>
          <div>Crafted with obsession by Manish Hirani.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
