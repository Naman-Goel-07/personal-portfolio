import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/PageTransition";
import { PROJECTS, SKILLS } from "@/lib/data";

const Projects = () => (
  <>
    {/* HERO */}
    <section className="container py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-brand mb-4">// Projects and skills</p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95] mb-6 max-w-4xl">
          Things I've built. <br />
          <span className="text-gradient">And what I built them with.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          AI-powered tools and full-stack web apps, from compliance workspaces to crowd safety.
        </p>
      </Reveal>
    </section>

    {/* PROJECT LIST */}
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <div className="group glass rounded-3xl p-7 h-full hover-lift hover:border-primary/40 transition-colors flex flex-col">
              <div className="aspect-[16/9] rounded-2xl bg-gradient-mesh mb-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl md:text-5xl text-primary/30 font-semibold group-hover:text-primary/60 transition-colors">{p.title}</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="text-foreground/80 mb-3">{p.desc}</p>
              <ul className="space-y-1.5 mb-5">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-brand">›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 glass rounded-full">{s}</span>
                  ))}
                </div>
                <div className="flex gap-2 shrink-0">
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:border-primary/60 transition" title="Live demo" aria-label={`${p.title} live demo`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:border-primary/60 transition" title="GitHub" aria-label={`${p.title} on GitHub`}>
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* SKILL GRID */}
    <section className="container py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// Toolkit</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-14 leading-[0.95]">
          Technical <span className="text-gradient">skills.</span>
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <Reveal key={cat} delay={i * 0.05}>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-display text-xl font-semibold mb-6">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tool) => (
                  <span key={tool} className="font-mono text-xs px-3 py-1.5 rounded-full bg-secondary/70 border border-border/60">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container py-20">
      <Reveal>
        <div className="glass-strong rounded-[2rem] p-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">Want to build something together?</h2>
          <p className="text-muted-foreground mb-8">
            I'm always up for a good project, a hackathon team or a conversation about one.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-7 h-12 rounded-full hover:opacity-90 transition">
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default Projects;
