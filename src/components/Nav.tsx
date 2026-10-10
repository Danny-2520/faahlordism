import { useEffect, useState } from "react";

const links = [
  { href: "#creed", label: "Creed" },
  { href: "#holy-book", label: "Holy Book" },
  { href: "#saints", label: "Saints" },
  { href: "#rituals", label: "Rituals" },
  { href: "#confess", label: "Confess" },
  { href: "#clergy", label: "Clergy" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-gold/20 bg-ink/85 py-3 backdrop-blur-md" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-velvet text-xl">📯</span>
          <span className="leading-none">
            <span className="block font-deco text-lg font-bold gold-text">Faahlordia</span>
            <span className="block font-cinzel text-[10px] tracking-[0.3em] text-parchment/60 uppercase">Church of the Meme</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-cinzel text-sm tracking-widest text-parchment/80 uppercase transition hover:text-gold">
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full border border-gold bg-gold/10 px-5 py-2 font-cinzel text-sm font-semibold tracking-widest text-gold uppercase transition hover:bg-gold hover:text-ink"
          >
            Get Baptized
          </a>
        </nav>

        <button className="text-2xl text-gold lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-gold/20 bg-ink/95 p-5 backdrop-blur lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gold/10 py-3 font-cinzel tracking-widest text-parchment/80 uppercase"
            >
              {l.label}
            </a>
          ))}
          <a href="#join" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-gold py-3 text-center font-cinzel font-bold tracking-widest text-ink uppercase">
            Get Baptized
          </a>
        </div>
      )}
    </header>
  );
}
