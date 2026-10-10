import { useState } from "react";
import { penances } from "../data/scripture";
import SectionTitle from "./SectionTitle";
import { playFaah } from "../lib/faah";

const quickSins = [
  "I explained a joke 😔",
  "I reposted without credit",
  "I laughed at a Minion meme",
  "I said 'skibidi' unironically",
  "I used a dead meme in 2026",
  "I typed 'LMAO' with a straight face",
];

const verdicts = [
  { min: 0, label: "Venial Cringe", color: "text-emerald-400" },
  { min: 34, label: "Moderate Cringe", color: "text-amber-400" },
  { min: 67, label: "Mortal Cringe", color: "text-red-400" },
];

export default function Confessional() {
  const [sin, setSin] = useState("");
  const [state, setState] = useState<"idle" | "judging" | "done">("idle");
  const [result, setResult] = useState<{ score: number; penance: string[] } | null>(null);
  const [absolved, setAbsolved] = useState(3412);

  const confess = () => {
    if (!sin.trim()) return;
    setState("judging");
    setTimeout(() => {
      let hash = 0;
      for (const ch of sin) hash = (hash * 31 + ch.charCodeAt(0)) % 9973;
      const score = (hash % 100) + 1;
      const count = score > 66 ? 3 : score > 33 ? 2 : 1;
      const shuffled = [...penances].sort(() => Math.random() - 0.5);
      setResult({ score, penance: shuffled.slice(0, count) });
      setState("done");
      setAbsolved((a) => a + 1);
      playFaah(score / 100);
    }, 1600);
  };

  const verdict = result ? [...verdicts].reverse().find((v) => result.score >= v.min)! : null;

  return (
    <section id="confess" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle
          kicker="The Booth of Absolution"
          title="The Confessional"
          subtitle="Confess thy meme sins. The Faahlord judgeth not. (He does. A little.)"
        />

        <div className="relative overflow-hidden rounded-3xl border-2 border-[#5a3a1a] bg-gradient-to-b from-[#2a170a] to-[#140a04] p-6 shadow-2xl md:p-10">
          {/* lattice */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #e8b84a 0 2px, transparent 2px 22px), repeating-linear-gradient(-45deg, #e8b84a 0 2px, transparent 2px 22px)",
            }}
          />

          <div className="relative">
            <p className="font-cinzel text-sm tracking-widest text-gold/80 uppercase">Forgive me, Faahlord, for I have posted…</p>
            <textarea
              value={sin}
              onChange={(e) => {
                setSin(e.target.value);
                if (state === "done") setState("idle");
              }}
              rows={4}
              placeholder="It has been 3 days since my last confession. I sent a Shrek meme to my boss..."
              className="mt-4 w-full resize-none rounded-xl border border-gold/30 bg-black/40 p-4 text-lg text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {quickSins.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSin(s);
                    setState("idle");
                  }}
                  className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-sm text-parchment/70 transition hover:border-gold/50 hover:text-parchment"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-parchment/50 italic">🙏 {absolved.toLocaleString()} confessions absolved today</p>
              <button
                onClick={confess}
                disabled={!sin.trim() || state === "judging"}
                className="rounded-full bg-gradient-to-b from-red-600 to-red-900 px-8 py-3 font-cinzel font-bold tracking-widest text-parchment uppercase shadow-lg transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              >
                {state === "judging" ? "The Faahlord ponders…" : "Confess Thy Sin"}
              </button>
            </div>

            {state === "judging" && (
              <div className="mt-8 flex items-center justify-center gap-3 text-gold">
                <span className="h-3 w-3 animate-bounce rounded-full bg-gold" />
                <span className="h-3 w-3 animate-bounce rounded-full bg-gold [animation-delay:150ms]" />
                <span className="h-3 w-3 animate-bounce rounded-full bg-gold [animation-delay:300ms]" />
              </div>
            )}

            {state === "done" && result && verdict && (
              <div className="page-in parchment mt-8 rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="font-cinzel text-xs tracking-[0.3em] text-red-900/70 uppercase">The Verdict</p>
                    <p className="font-deco text-3xl font-bold text-[#2b1a0e]">{verdict.label}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-cinzel text-xs tracking-[0.3em] text-red-900/70 uppercase">Cringe Level</p>
                    <p className="font-meme text-4xl text-red-900">{result.score}%</p>
                  </div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#8b5a2b]/20">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-amber-500 to-red-700" style={{ width: `${result.score}%` }} />
                </div>
                <p className="mt-6 font-cinzel font-semibold text-red-900">Thy Penance:</p>
                <ul className="mt-2 space-y-2">
                  {result.penance.map((p) => (
                    <li key={p} className="flex gap-3 text-lg">
                      <span className="text-red-900">☩</span> {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center font-deco text-xl text-[#2b1a0e]">Go forth and post no more cringe. Thou art absolved. Faah.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
