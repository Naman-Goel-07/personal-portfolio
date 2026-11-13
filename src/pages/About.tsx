import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { EDUCATION, EXPERIENCE, TIMELINE, SITE } from "@/lib/data";

const About = () => (
  <>
    {/* HERO */}
    <section className="container py-24">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-brand mb-4">// About me</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95] mb-6">
            Developer. <br />
            Hackathon winner. <br />
            <span className="text-gradient">Community lead.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            I'm {SITE.fullName}, based in {SITE.location}. I'm pursuing a {EDUCATION.degree} at{" "}
            {EDUCATION.school} ({EDUCATION.years}). I work in the Founder's Office at BunkToBrains, lead
            HackerRank's Campus Crew at VIPS, and moderate the CodeCap tech community. Outside of that I
            build AI and full-stack products and compete at hackathons.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full gap-2">
              <Link to="/projects">See my projects <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full glass">
              <Link to="/now">What I'm doing now</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-electric/30 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-[2rem] glass-strong overflow-hidden">
              {SITE.photo ? (
                <img src={SITE.photo} alt={SITE.fullName} decoding="async" width={800} height={800} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[9rem] font-bold text-gradient leading-none">NG</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* EDUCATION */}
    <section className="container py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// Education</p>
        <div className="glass-strong rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="w-7 h-7 text-brand" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-1">{EDUCATION.school}</h2>
            <p className="text-muted-foreground">{EDUCATION.degree} · {EDUCATION.location}</p>
          </div>
          <div className="md:text-right">
            <div className="font-mono text-sm text-brand">{EDUCATION.years}</div>
            <div className="font-mono text-xs text-muted-foreground mt-1">{EDUCATION.grade}</div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* EXPERIENCE */}
    <section className="container py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// Experience</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-14 leading-[0.95]">
          Roles I've <span className="text-gradient">taken on.</span>
        </h2>
      </Reveal>
      <div className="space-y-5">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.role + e.org} delay={i * 0.06}>
            <div className="glass rounded-3xl p-7 md:p-8 hover:border-primary/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                  <p className="text-foreground/80 font-medium">{e.org}</p>
                </div>
                <span className={`font-mono text-xs uppercase tracking-wider shrink-0 ${e.current ? "text-brand" : "text-muted-foreground"}`}>
                  {e.date}
                </span>
              </div>
              <ul className="space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-muted-foreground">
                    <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* TIMELINE */}
    <section className="container py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-brand mb-3">// The journey</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-14 leading-[0.95]">
          How I got <span className="text-gradient">here.</span>
        </h2>
      </Reveal>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-electric/50 -translate-x-1/2" />
        {TIMELINE.map((t, i) => (
          <Reveal key={t.year + t.title} delay={i * 0.05}>
            <div className={`relative pl-12 md:pl-0 mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
              <div className={`md:text-right ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="font-mono text-xs text-brand mb-1">{t.year}</div>
                <h3 className="font-display text-2xl font-semibold">{t.title}</h3>
              </div>
              <p className="text-muted-foreground md:pt-1">{t.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default About;
