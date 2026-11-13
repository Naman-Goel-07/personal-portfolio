import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/PageTransition";
import { TextScramble } from "@/components/TextScramble";
import { Counter } from "@/components/Counter";
import { Marquee } from "@/components/Marquee";
import { STATS, EXPERIENCE, PROJECTS, ACHIEVEMENTS, SKILLS, SITE, EDUCATION } from "@/lib/data";

const MARQUEE = [
  ...SKILLS.Languages.slice(0, 5),
  ...SKILLS["Frameworks & Libraries"],
  ...SKILLS.Tools.filter((t) => t !== "Git" && t !== "GitHub"),
];

const Home = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const moreProjects = PROJECTS.filter((p) => !featuredProjects.includes(p));
  const podiums = ACHIEVEMENTS.filter((a) => a.featured).slice(0, 3);
  const moreAchievements = ACHIEVEMENTS.filter((a) => !podiums.includes(a));

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[86vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 font-mono text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {EDUCATION.degree.replace("B.Tech in ", "B.Tech ")} · {EDUCATION.short}, {EDUCATION.location}
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.92] tracking-tighter mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              {SITE.name}.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="block"
            >
              I <span className="text-gradient">
                <TextScramble phrases={["build AI products.", "win hackathons.", "grow tech communities.", "solve DSA problems."]} />
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 whitespace-pre-line"
          >
            {SITE.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <Button asChild size="lg" className="rounded-full h-12 px-7 gap-2 shadow-glow">
              <Link to="/projects">See my projects <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 gap-2 glass">
              <Link to="/contact"><Mail className="w-4 h-4" /> Get in touch</Link>
            </Button>
            {SITE.socials.github && (
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 gap-2 glass">
                <a href={SITE.socials.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4" /> GitHub</a>
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-12 border-y border-border/50">
        <Marquee>
          {MARQUEE.map((t) => (
            <span key={t} className="font-display text-3xl md:text-5xl font-semibold text-muted-foreground/50 hover:text-brand transition-colors">
              {t} <span className="text-brand/60">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* EXPERIENCE */}
      <section className="container py-32">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// 01 - Experience</p>
              <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
                Where I've <span className="text-gradient">worked.</span>
              </h2>
            </div>
            <Link to="/about" className="group inline-flex items-center gap-2 font-mono text-sm hover:text-brand transition-colors">
              More about me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 0.06}>
              <div className="glass rounded-3xl p-7 h-full hover-lift hover:border-primary/40 transition-colors">
                <div className="font-mono text-xs uppercase tracking-wider text-brand mb-3">{e.date}</div>
                <h3 className="font-display text-xl font-semibold mb-1">{e.role}</h3>
                <p className="text-sm font-medium text-foreground/80 mb-3">{e.org}</p>
                <p className="text-sm text-muted-foreground">{e.points[0]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container py-32">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// 02 - Selected projects</p>
              <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
                Things I've <span className="text-gradient">built.</span>
              </h2>
            </div>
            <Link to="/projects" className="group inline-flex items-center gap-2 font-mono text-sm hover:text-brand transition-colors">
              All projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link to="/projects" className="group block h-full">
                <div className="glass rounded-3xl p-8 h-full hover-lift hover:border-primary/40 transition-colors relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                  <div className="font-display text-6xl text-primary/50 mb-6 group-hover:text-brand transition-colors">{p.title[0]}</div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 glass rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* "And more" card: lists every project not featured above. */}
          {moreProjects.length > 0 && (
            <Reveal delay={featuredProjects.length * 0.1}>
              <Link to="/projects" className="group block h-full">
                <div className="rounded-3xl p-8 h-full border-2 border-dashed border-primary/30 hover:border-primary/60 bg-primary/5 hover-lift transition-colors flex flex-col">
                  <div className="font-display text-6xl font-semibold text-gradient mb-6">+{moreProjects.length}</div>
                  <h3 className="font-display text-2xl font-semibold mb-4">More projects</h3>
                  <ul className="space-y-2 mb-6">
                    {moreProjects.map((p) => (
                      <li key={p.slug} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-brand">›</span>
                        <span><span className="text-foreground/90 font-medium">{p.title}</span> - {p.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 font-mono text-sm text-brand">
                    View all {PROJECTS.length} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* PODIUMS */}
      <section className="container py-32">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// 03 - Hackathons</p>
              <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
                On the <span className="text-gradient">podium.</span>
              </h2>
            </div>
            <Link to="/achievements" className="group inline-flex items-center gap-2 font-mono text-sm hover:text-brand transition-colors">
              All achievements <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {podiums.map((a, i) => (
            <Reveal key={a.event} delay={i * 0.08}>
              <div className="glass rounded-3xl p-8 h-full hover-lift hover:border-primary/40 transition-colors">
                <Trophy className="w-8 h-8 text-electric mb-6" />
                <div className="font-mono text-xs uppercase tracking-wider text-brand mb-2">{a.prize}</div>
                <h3 className="font-display text-2xl font-semibold mb-1">{a.event}</h3>
                <p className="text-sm text-muted-foreground">{a.place} · {a.date}</p>
              </div>
            </Reveal>
          ))}

          {/* "And more" card: lists every achievement not featured above. */}
          {moreAchievements.length > 0 && (
            <Reveal delay={podiums.length * 0.08}>
              <Link to="/achievements" className="group block h-full">
                <div className="rounded-3xl p-8 h-full border-2 border-dashed border-primary/30 hover:border-primary/60 bg-primary/5 hover-lift transition-colors flex flex-col">
                  <div className="font-display text-6xl font-semibold text-gradient mb-6">+{moreAchievements.length}</div>
                  <h3 className="font-display text-2xl font-semibold mb-4">More achievements</h3>
                  <ul className="space-y-2 mb-6">
                    {moreAchievements.map((a) => (
                      <li key={a.event} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-brand">›</span>
                        <span><span className="text-foreground/90 font-medium">{a.event}</span> - {a.prize}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 font-mono text-sm text-brand">
                    View all {ACHIEVEMENTS.length} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-32">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center glass-strong">
            <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[0.95] mb-6">
                Have an idea or an opportunity? <br />
                <span className="text-gradient">Let's talk.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Projects, hackathon teams, internships or community events - my inbox is open.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full h-12 px-8 gap-2 shadow-glow">
                  <Link to="/contact"><Mail className="w-4 h-4" /> Get in touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 gap-2 glass">
                  <Link to="/projects">See my projects <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
