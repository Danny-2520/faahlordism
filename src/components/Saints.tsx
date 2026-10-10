import { useState } from "react";
import { saints } from "../data/scripture";
import SectionTitle from "./SectionTitle";

export default function Saints() {
  const [lit, setLit] = useState<Record<string, number>>({});

  return (
    <section id="saints" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          kicker="The Hall of the Blessed"
          title="Saints & Prophets"
          subtitle="Canonized by the Great Meme Council for miracles of virality. Light a candle to receive their blessing."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {saints.map((s) => {
            const candles = lit[s.name] || 0;
            return (
              <div
                key={s.name}
                className={`group relative overflow-hidden rounded-t-[140px] rounded-b-2xl border border-gold/25 bg-gradient-to-b ${s.color} to-ink p-6 pt-10 text-center transition hover:-translate-y-2 hover:border-gold/60`}
              >
                <div className="relative mx-auto grid h-28 w-28 place-items-center">
                  <span className="halo absolute inset-0 rounded-full border-4 border-gold/60 shadow-[0_0_40px_rgba(232,184,74,0.6)]" />
                  <span className="text-6xl transition group-hover:scale-110">{s.emoji}</span>
                </div>
                <h3 className="mt-6 font-cinzel text-lg font-bold text-parchment">{s.name}</h3>
                <p className="font-deco text-sm text-gold">{s.title}</p>
                <p className="mt-4 min-h-[72px] text-parchment/65 italic">"{s.miracle}"</p>
                <p className="mt-3 font-cinzel text-xs tracking-widest text-parchment/45 uppercase">Feast Day · {s.feast}</p>
                <button
                  onClick={() => setLit((l) => ({ ...l, [s.name]: (l[s.name] || 0) + 1 }))}
                  className="mt-5 w-full rounded-full border border-gold/40 py-2 font-cinzel text-xs tracking-widest text-gold uppercase transition hover:bg-gold hover:text-ink"
                >
                  🕯️ Light a Candle {candles > 0 && `(${candles})`}
                </button>
                {candles > 0 && (
                  <p className="mt-2 text-xs text-gold-light/80">
                    {candles >= 10 ? "The saint is overwhelmed with blessings." : candles >= 3 ? "Thou art noticed." : "Thy prayer is received."}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
