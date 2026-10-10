import { useEffect, useMemo, useState } from "react";
import bookImg from "../assets/book.jpg";
import { holyBook } from "../data/scripture";
import SectionTitle from "./SectionTitle";
import { playFaah } from "../lib/faah";

type Pos = { b: number; c: number };
type Ref = { bookId: string; ch: number; v: number };

const refKey = (r: Ref) => `${r.bookId}:${r.ch}:${r.v}`;

export default function HolyBook() {
  const [pos, setPos] = useState<Pos>({ b: 0, c: 0 });
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("faah-bookmarks") || "[]");
    } catch {
      return [];
    }
  });
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    localStorage.setItem("faah-bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const book = holyBook[pos.b];
  const chapter = book.chapters[pos.c];

  const go = (p: Pos, hl: string | null = null) => {
    setPos(p);
    setHighlight(hl);
    setFlipKey((k) => k + 1);
  };

  const flat = useMemo(() => {
    const out: Pos[] = [];
    holyBook.forEach((bk, b) => bk.chapters.forEach((_, c) => out.push({ b, c })));
    return out;
  }, []);
  const flatIdx = flat.findIndex((p) => p.b === pos.b && p.c === pos.c);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const out: { b: number; c: number; v: number; text: string }[] = [];
    holyBook.forEach((bk, b) =>
      bk.chapters.forEach((ch, c) =>
        ch.verses.forEach((text, v) => {
          if (text.toLowerCase().includes(q)) out.push({ b, c, v, text });
        })
      )
    );
    return out.slice(0, 30);
  }, [query]);

  const randomVerse = () => {
    const b = Math.floor(Math.random() * holyBook.length);
    const c = Math.floor(Math.random() * holyBook[b].chapters.length);
    const v = Math.floor(Math.random() * holyBook[b].chapters[c].verses.length);
    go({ b, c }, refKey({ bookId: holyBook[b].id, ch: holyBook[b].chapters[c].number, v: v + 1 }));
  };

  const shareVerse = async (v: number, text: string) => {
    const ref = `${book.name} ${chapter.number}:${v}`;
    const payload = `"${text}" — ${ref} (The Holy Book of Memes) 📯`;
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      /* ignore */
    }
    setCopied(refKey({ bookId: book.id, ch: chapter.number, v }));
    setTimeout(() => setCopied(null), 1500);
  };

  const toggleBookmark = (k: string) =>
    setBookmarks((bm) => (bm.includes(k) ? bm.filter((x) => x !== k) : [...bm, k]));

  const resolveRef = (k: string) => {
    const [bookId, ch, v] = k.split(":");
    const b = holyBook.findIndex((x) => x.id === bookId);
    if (b < 0) return null;
    const c = holyBook[b].chapters.findIndex((x) => x.number === Number(ch));
    if (c < 0) return null;
    return { b, c, v: Number(v), label: `${holyBook[b].name} ${ch}:${v}`, text: holyBook[b].chapters[c].verses[Number(v) - 1] };
  };

  const testaments = ["Old Memes", "New Memes"] as const;

  return (
    <section id="holy-book" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-velvet/50 to-ink" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionTitle
          kicker="Sacred Scripture"
          title="The Holy Book of Memes"
          subtitle="The complete, canonized, unexplained Word of the Faahlord — in nine books across the Old and New Memes."
        />

        {/* Intro banner */}
        <div className="mb-12 grid items-center gap-8 overflow-hidden rounded-3xl border border-gold/25 bg-ink/60 md:grid-cols-2">
          <img src={bookImg} alt="The Holy Book of Memes on the altar" className="h-64 w-full object-cover md:h-full" />
          <div className="p-8 md:p-10">
            <p className="font-cinzel text-xs tracking-[0.3em] text-gold/70 uppercase">The Memeble · Authorized Faahlord Version</p>
            <p className="mt-4 text-lg leading-relaxed text-parchment/80">
              Compiled by the Great Meme Council from ancient forums, lost Vines, and the deepest corners of the comment section.
              Read it, bookmark it, quote it in the group chat. Just never, <em>ever</em> explain it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={randomVerse}
                className="rounded-full bg-gold px-6 py-3 font-cinzel text-sm font-bold tracking-widest text-ink uppercase transition hover:scale-105"
              >
                🎲 Receive a Random Verse
              </button>
              <button
                onClick={() => go({ b: 0, c: 0 })}
                className="rounded-full border border-gold/50 px-6 py-3 font-cinzel text-sm tracking-widest text-gold uppercase transition hover:bg-gold/10"
              >
                Begin at Genesis
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the scriptures…"
                className="w-full rounded-xl border border-gold/30 bg-ink/80 px-4 py-3 pl-10 text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none"
              />
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gold/60">🔍</span>
            </div>

            {query.trim().length >= 2 ? (
              <div className="max-h-[520px] space-y-2 overflow-y-auto rounded-xl border border-gold/20 bg-ink/70 p-3">
                <p className="px-2 font-cinzel text-xs tracking-widest text-gold/70 uppercase">
                  {results.length} verse{results.length === 1 ? "" : "s"} found
                </p>
                {results.map((r) => (
                  <button
                    key={`${r.b}-${r.c}-${r.v}`}
                    onClick={() => {
                      go({ b: r.b, c: r.c }, refKey({ bookId: holyBook[r.b].id, ch: holyBook[r.b].chapters[r.c].number, v: r.v + 1 }));
                      setQuery("");
                    }}
                    className="block w-full rounded-lg p-2 text-left transition hover:bg-gold/10"
                  >
                    <span className="font-cinzel text-xs text-gold">
                      {holyBook[r.b].name} {holyBook[r.b].chapters[r.c].number}:{r.v + 1}
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-sm text-parchment/70">{r.text}</span>
                  </button>
                ))}
                {results.length === 0 && <p className="p-2 text-sm text-parchment/50 italic">The scriptures are silent on this matter.</p>}
              </div>
            ) : (
              <nav className="rounded-xl border border-gold/20 bg-ink/70 p-3">
                {testaments.map((t) => (
                  <div key={t} className="mb-3 last:mb-0">
                    <p className="px-2 py-2 font-deco text-sm text-gold/80">{t}</p>
                    {holyBook.map((bk, b) =>
                      bk.testament === t ? (
                        <button
                          key={bk.id}
                          onClick={() => go({ b, c: 0 })}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                            pos.b === b ? "bg-gold/15 text-gold" : "text-parchment/75 hover:bg-gold/5 hover:text-parchment"
                          }`}
                        >
                          <span className="text-lg">{bk.icon}</span>
                          <span className="font-cinzel text-sm">{bk.name}</span>
                        </button>
                      ) : null
                    )}
                  </div>
                ))}
              </nav>
            )}

            {bookmarks.length > 0 && (
              <div className="rounded-xl border border-gold/20 bg-ink/70 p-3">
                <p className="px-2 py-2 font-deco text-sm text-gold/80">🔖 Thy Bookmarks</p>
                {bookmarks.map((k) => {
                  const r = resolveRef(k);
                  if (!r) return null;
                  return (
                    <button
                      key={k}
                      onClick={() => go({ b: r.b, c: r.c }, k)}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-parchment/70 transition hover:bg-gold/5"
                    >
                      <span className="font-cinzel text-xs text-gold">{r.label}</span>
                      <span className="line-clamp-1 block">{r.text}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          {/* Page */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-[#6b3a12] via-[#3d1f08] to-[#2a1405] shadow-2xl" />
            <article key={flipKey} className="page-in parchment relative rounded-3xl p-6 shadow-inner md:p-12">
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-[#8b5a2b]/40" />

              <header className="relative text-center">
                <p className="font-cinzel text-xs tracking-[0.4em] text-red-900/80 uppercase">
                  {book.testament} · {book.subtitle}
                </p>
                <h3 className="mt-3 font-deco text-3xl font-bold text-[#2b1a0e] md:text-5xl">
                  {book.icon} {book.name}
                </h3>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {book.chapters.map((ch, c) => (
                    <button
                      key={ch.number}
                      onClick={() => go({ b: pos.b, c })}
                      className={`rounded-full border px-4 py-1.5 font-cinzel text-sm transition ${
                        pos.c === c ? "border-red-900 bg-red-900 text-parchment" : "border-[#8b5a2b]/50 text-[#4a3220] hover:bg-[#8b5a2b]/10"
                      }`}
                    >
                      Chapter {ch.number}
                    </button>
                  ))}
                </div>
                <p className="mt-6 font-cinzel text-xl font-semibold text-red-900">
                  Chapter {chapter.number}: {chapter.title}
                </p>
              </header>

              <div className="relative mt-8 space-y-1 md:columns-1">
                {chapter.verses.map((text, i) => {
                  const v = i + 1;
                  const k = refKey({ bookId: book.id, ch: chapter.number, v });
                  const isHl = highlight === k;
                  const isBm = bookmarks.includes(k);
                  return (
                    <div
                      key={k}
                      className={`group relative flex gap-3 rounded-lg px-3 py-2 transition ${
                        isHl ? "bg-yellow-300/50 ring-2 ring-red-900/30" : "hover:bg-[#8b5a2b]/10"
                      }`}
                    >
                      <sup className="mt-3 w-6 shrink-0 text-right font-cinzel text-xs font-bold text-red-900">{v}</sup>
                      <p className={`flex-1 text-lg leading-relaxed md:text-xl ${i === 0 ? "drop-cap" : ""}`}>{text}</p>
                      <div className="flex shrink-0 items-start gap-1 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                        <button
                          onClick={() => toggleBookmark(k)}
                          title="Bookmark verse"
                          className={`rounded p-1 text-sm hover:bg-[#8b5a2b]/20 ${isBm ? "" : "grayscale"}`}
                        >
                          🔖
                        </button>
                        <button onClick={() => shareVerse(v, text)} title="Copy verse" className="rounded p-1 text-sm hover:bg-[#8b5a2b]/20">
                          {copied === k ? "✅" : "📋"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <footer className="relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#8b5a2b]/30 pt-6">
                <button
                  disabled={flatIdx <= 0}
                  onClick={() => go(flat[flatIdx - 1])}
                  className="rounded-full border border-[#8b5a2b]/50 px-5 py-2 font-cinzel text-sm text-[#4a3220] transition hover:bg-[#8b5a2b]/10 disabled:opacity-30"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => playFaah()}
                  className="font-cinzel text-xs tracking-[0.3em] text-red-900/70 uppercase hover:text-red-900"
                  title="Say Faah"
                >
                  ☩ {flatIdx + 1} / {flat.length} · Say Faah ☩
                </button>
                <button
                  disabled={flatIdx >= flat.length - 1}
                  onClick={() => go(flat[flatIdx + 1])}
                  className="rounded-full border border-[#8b5a2b]/50 px-5 py-2 font-cinzel text-sm text-[#4a3220] transition hover:bg-[#8b5a2b]/10 disabled:opacity-30"
                >
                  Next →
                </button>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
