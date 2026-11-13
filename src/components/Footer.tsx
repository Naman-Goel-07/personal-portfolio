import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Lockup } from "./Brand";
import { SITE } from "@/lib/data";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Site", links: [["/", "Home"], ["/about", "About"], ["/projects", "Projects"]] },
  { title: "More", links: [["/achievements", "Achievements"], ["/now", "Now"], ["/contact", "Contact"]] },
];

// Socials with an empty link in data.ts are hidden until filled in.
const socials = [
  { Icon: Github, href: SITE.socials.github, label: "GitHub" },
  { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { Icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
].filter((s) => s.href);

export const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      <div className="container py-20 relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <div className="mb-6">
              <Lockup className="text-xl" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-semibold leading-[0.95] mb-4">
              Building, competing, <br />
              <span className="text-gradient">and learning in public.</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md whitespace-pre-line">{SITE.bio}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="font-mono text-sm text-brand hover:underline underline-offset-4"
            >
              {SITE.email}
            </a>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map(([href, label]) => (
                    <li key={label}>
                      <Link to={href} className="group inline-flex items-center gap-1 text-sm hover:text-brand transition-colors">
                        {label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border/50">
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.fullName} · {SITE.location}
          </span>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift"
                aria-label={s.label}
              >
                <s.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
