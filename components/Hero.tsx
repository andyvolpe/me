import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-3xl">
        <p className="mb-4 font-mono text-sm text-accent">{site.role}</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium"
          >
            See my work
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
