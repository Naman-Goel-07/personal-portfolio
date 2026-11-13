import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Reveal } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { SITE } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  topic: z.string(),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

const TOPICS = ["General", "Project / Collaboration", "Internship / Opportunity", "Hackathon / Event"];

/**
 * No backend: submitting opens the visitor's email app with the message
 * already filled in, addressed to SITE.email.
 */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", topic: "General", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    const { name, email, topic, message } = parsed.data;
    const subject = `[${topic}] Message from ${name}`;
    const body = `${message}\n\n- ${name} (${email})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app...");
  };

  return (
    <section className="container py-20">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-brand mb-4">// Get in touch</p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95] mb-6">
              Let's <span className="text-gradient">talk.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              A project idea, a hackathon team, an internship or just hello - this reaches me.
            </p>

            <div className="space-y-5">
              <InfoRow icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <InfoRow icon={MapPin} label="Based in" value={SITE.location} />
              {SITE.socials.linkedin && <InfoRow icon={Linkedin} label="LinkedIn" value="Connect with me" href={SITE.socials.linkedin} />}
              {SITE.socials.github && <InfoRow icon={Github} label="GitHub" value="See my code" href={SITE.socials.github} />}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass-strong rounded-3xl p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider mb-2 block">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 rounded-2xl bg-card/60"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider mb-2 block">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="h-12 rounded-2xl bg-card/60"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="topic" className="font-mono text-xs uppercase tracking-wider mb-2 block">What's this about?</Label>
                <select
                  id="topic"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full h-12 rounded-2xl bg-card/60 border border-input px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or question..."
                  rows={6}
                  className="rounded-2xl bg-card/60 resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full h-12 gap-2">
                Send message <Send className="w-4 h-4" />
              </Button>
              <p className="font-mono text-[11px] text-muted-foreground text-center">
                This opens your email app with the message filled in.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) => {
  const inner = (
    <>
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-brand" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </>
  );
  const cls = "flex items-center gap-4 glass rounded-2xl p-4";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${cls} hover:border-primary/40 transition-colors`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
};

export default Contact;
