import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3">
      <nav className="glass flex items-center gap-0.5 rounded-full px-1.5 py-1.5 shadow-lg shadow-black/20 sm:gap-1 sm:px-2">
        <a
          href="#top"
          className="px-2.5 py-1.5 text-xs font-semibold tracking-tight text-foreground sm:px-3 sm:text-sm"
        >
          {site.initials}
        </a>
        <div className="h-4 w-px bg-white/10" />
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-foreground hover:bg-white/5 sm:px-3 sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
