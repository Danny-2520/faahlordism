import { useState } from "react";
import { ranks, testimonies } from "../data/scripture";
import SectionTitle from "./SectionTitle";

export default function Clergy({ onChoose }: { onChoose: (rank: string) => void }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="clergy" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-velvet/40 to-ink" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionTitle
          kicker="The Pro Community"
          title="Ascend the Holy Hierarchy"
          subtitle="Every Faahlordian begins as a Normie. Few become Bishops. Choose thy path through the ranks of the clergy."
        />

        <div className="mb-10 flex items-center justify-center gap-4 font-cinzel text-sm tracking-widest uppercase">
          <span className={!yearly ? "text-gold" : "text-parchment/50"}>Monthly Tithe</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative h-7 w-14 rounded-full border border-gold/50 bg-ink"
            aria-label="Toggle yearly billing"
          >
            <span className={`absolute top-0.5 h-5.5 w-5.5 rounded-full bg-gold transition-all ${yearly ? "left-7.5" : "left-0.5"}`} />
          </button>
          <span className={yearly ? "text-gold" : "text-parchment/50"}>
            Yearly Tithe <span className="text-red-400">(-69%)</span>
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ranks.map((r) => {
            const base = parseFloat(r.price.replace("$", ""));
            const price = isNaN(base) ? r.price : yearly ? `$${(base * 12 * 0.31).toFixed(2)}` : r.price;
            const period = isNaN(base) ? r.period : yearly ? "/ year" : r.period;
            return (
              <div
                key={r.name}
                className={`relative flex flex-col rounded-3xl border p-7 transition hover:-translate-y-1 ${
                  r.highlight
                    ? "border-gold bg-gradient-to-b from-gold/20 to-ink shadow-[0_0_60px_rgba(232,184,74,0.25)]"
                    : "border-gold/20 bg-ink/70"
                }`}
              >
                {r.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-cinzel text-xs font-bold tracking-widest text-ink uppercase">
                    Most Blessed
                  </span>
                )}
                <span className="text-5xl">{r.icon}</span>
                <h3 className="mt-4 font-cinzel text-xl font-bold text-parchment">{r.name}</h3>
                <p className="mt-3">
                  <span className="font-deco text-4xl font-bold gold-text">{price}</span>
                  <span className="ml-1 text-parchment/50">{period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {r.perks.map((p) => (
                    <li key={p} className="flex gap-2 text-parchment/75">
                      <span className="text-gold">✦</span> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  onClick={() => onChoose(r.name)}
                  className={`mt-8 block rounded-full py-3 text-center font-cinzel text-sm font-bold tracking-widest uppercase transition ${
                    r.highlight ? "bg-gold text-ink hover:bg-gold-light" : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  {r.price === "Free" ? "Begin Thy Journey" : "Ascend"}
                </a>
              </div>
            );
          })}
        </div>

        {/* Testimonies */}
        <div className="mt-28">
          <h3 className="text-center font-deco text-3xl text-gold md:text-4xl">Testimonies of the Faithful</h3>
          <p className="mt-3 text-center text-parchment/60 italic">Real* stories from real* Faahlordians. (*Spiritually real.)</p>
          <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
            {testimonies.map((t) => (
              <figure key={t.name} className="mb-6 break-inside-avoid rounded-2xl border border-gold/20 bg-ink/70 p-6">
                <p className="text-gold">★★★★★</p>
                <blockquote className="mt-3 text-lg leading-relaxed text-parchment/85 italic">"{t.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-velvet text-2xl">{t.avatar}</span>
                  <span>
                    <span className="block font-cinzel text-sm font-semibold text-parchment">{t.name}</span>
                    <span className="block text-xs text-gold/80">{t.rank}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
