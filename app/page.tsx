import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />

      <Section id="about" title="About">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <span
              key={skill}
              className="glass rounded-full px-3 py-1 text-xs text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-4">
          {site.experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <article className="glass glass-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-medium">
                    {job.role} ·{" "}
                    <span className="text-foreground/70">{job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {job.summary}
                </p>
                {job.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 text-accent/60">—</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-4 sm:grid-cols-2">
          {site.education.map((entry) => (
            <article key={entry.school} className="glass rounded-2xl p-6">
              <h3 className="text-base font-medium">{entry.school}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {entry.degree}
              </p>
              <p className="mt-3 font-mono text-xs text-muted">
                {entry.period}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="beyond" title="Outside of work">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {site.beyond.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="glass rounded-2xl p-8 text-center sm:p-12">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s make complex things feel simple.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            I&apos;m always open to interesting projects and conversations.
            The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium"
            >
              {site.email}
            </a>
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                className="rounded-full px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Resume ↓
              </a>
            )}
          </div>
        </div>
      </Section>

      <footer className="px-6 pb-10 pt-4">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <div className="flex gap-5">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
