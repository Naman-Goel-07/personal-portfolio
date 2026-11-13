import { useState } from "react";
import { Trophy, Star, ExternalLink, Code2 } from "lucide-react";
import { Reveal } from "@/components/PageTransition";
import { Counter } from "@/components/Counter";
import { ACHIEVEMENTS, CP_PROFILES } from "@/lib/data";

const FILTERS = ["All", "Hackathons", "Competitive Programming"] as const;

const Achievements = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = filter === "All" ? ACHIEVEMENTS : ACHIEVEMENTS.filter((a) => a.category === filter);
  const featured = ACHIEVEMENTS.filter((a) => a.featured);

  return (
    <>
      <section className="container py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-brand mb-4">// Achievements</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6 max-w-4xl">
            Hackathons, contests, <br />
            <span className="text-gradient">and competitive programming.</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-3 gap-4 mt-14 max-w-2xl">
          {[
            { v: ACHIEVEMENTS.filter((a) => a.featured).length, l: "Top-2 finishes" },
            { v: ACHIEVEMENTS.filter((a) => a.category === "Hackathons").length, l: "Hackathon results" },
            { v: CP_PROFILES.length, l: "CP profiles" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5">
              <div className="font-display text-4xl font-bold text-gradient">
                <Counter to={s.v} />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-12">
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <Star className="w-5 h-5 text-electric fill-electric" /> Featured
          </h2>
        </Reveal>
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {featured.map((a, i) => (
            <Reveal key={a.event} delay={i * 0.08}>
              <div className="snap-start shrink-0 w-[300px] md:w-[400px] glass-strong rounded-3xl p-8 hover-lift hover:border-electric/50 transition-colors">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-electric/20 mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <Trophy className="w-20 h-20 text-electric relative" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand">{a.prize}</span>
                <h3 className="font-display text-xl font-bold mt-2 mb-1">{a.event}</h3>
                <p className="text-sm text-muted-foreground">{a.place} · {a.date}</p>
                {a.link && (
                  <a href={a.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-brand mt-3 hover:underline">
                    <ExternalLink className="w-3 h-3" /> Certificate
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="container py-20">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 h-10 rounded-full text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "glass hover:border-primary/40"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((a, i) => (
            <Reveal key={a.event} delay={i * 0.04}>
              <div className="glass rounded-3xl p-7 h-full hover-lift hover:border-primary/40 transition-colors">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-brand">{a.category}</span>
                  <span className="font-mono text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-1 leading-tight">{a.event}</h3>
                <p className="text-sm font-medium text-foreground/80 mb-1">{a.prize}</p>
                <p className="text-sm text-muted-foreground">{a.place}</p>
                {a.link && (
                  <a href={a.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-brand mt-3 hover:underline">
                    <ExternalLink className="w-3 h-3" /> Certificate
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CP PROFILES */}
      <section className="container py-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// Competitive programming</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-10 leading-[0.95]">
            Coding <span className="text-gradient">profiles.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CP_PROFILES.map((c, i) => {
            const inner = (
              <>
                <Code2 className="w-6 h-6 text-brand mb-4" />
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.platform}</div>
                <div className="font-display text-3xl font-semibold text-gradient">{c.stat}</div>
              </>
            );
            const cls = "glass rounded-3xl p-7 h-full block hover-lift hover:border-primary/40 transition-colors";
            return (
              <Reveal key={c.platform} delay={i * 0.05}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Achievements;
