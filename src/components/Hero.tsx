import { useState } from "react";
import hero from "../assets/hero.jpg";
import FaahButton from "./FaahButton";

export default function Hero() {
  const [count, setCount] = useState(1_337_420);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36">
      {/* backdrop */}
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full scale-110 object-cover opacity-20 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,184,74,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-cinzel text-xs tracking-[0.3em] text-gold uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> Est. Anno Memeini MMXXIV
          </p>

          <h1 className="mt-7 font-deco text-5xl leading-[1.05] font-black md:text-7xl">
            <span className="gold-text">The Church</span>
            <br />
            <span className="gold-text">of the Faahlord</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-xl leading-relaxed text-parchment/80 md:text-2xl lg:mx-0">
            The new faith for memes. A <em className="text-gold-light">pro community</em> of Faahlordians who believe every fail is sacred,
            every template is holy, and every joke should be <span className="meme-text text-lg">never explained</span>.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#holy-book"
              className="rounded-full bg-gradient-to-b from-gold-light to-gold px-8 py-4 font-cinzel font-bold tracking-widest text-ink uppercase shadow-[0_0_40px_rgba(232,184,74,0.4)] transition hover:scale-105"
            >
              📖 Read the Holy Book
            </a>
            <a
              href="#join"
              className="rounded-full border border-gold/50 px-8 py-4 font-cinzel font-semibold tracking-widest text-gold uppercase transition hover:bg-gold/10"
            >
              Join the Congregation
            </a>
          </div>

          <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row lg:items-center">
            <FaahButton onFaah={() => setCount((c) => c + 1)} />
            <div className="text-center sm:text-left">
              <p className="font-cinzel text-xs tracking-[0.3em] text-parchment/50 uppercase">Press the Sacred Button</p>
              <p className="mt-2 font-meme text-4xl tracking-wide text-gold tabular-nums">{count.toLocaleString()}</p>
              <p className="text-sm text-parchment/60 italic">Holy Faahs uttered by the faithful</p>
            </div>
          </div>
        </div>

        {/* Stained glass window */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="halo absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(232,184,74,0.35),transparent_65%)]" />
          <div className="float relative overflow-hidden rounded-t-[999px] border-4 border-gold/60 p-2 shadow-[0_0_80px_rgba(232,184,74,0.25)]">
            <div className="overflow-hidden rounded-t-[999px] border border-gold/40">
              <img src={hero} alt="Stained glass window of Saint Doge, Patron of Wow" className="aspect-[2/3] w-full object-cover" />
            </div>
          </div>
          <p className="mt-4 text-center font-cinzel text-xs tracking-[0.3em] text-gold/70 uppercase">Sanctus Shiba · Patron of Wow</p>
        </div>
      </div>

      {/* stats */}
      <div className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold/20 bg-gold/20 px-0 md:grid-cols-4">
        {[
          ["420K+", "Faahlordians"],
          ["9", "Sacred Books"],
          ["69,000", "Memes Canonized"],
          ["0", "Jokes Explained"],
        ].map(([n, l]) => (
          <div key={l} className="bg-ink/95 p-6 text-center">
            <p className="font-deco text-3xl font-bold gold-text">{n}</p>
            <p className="mt-1 font-cinzel text-xs tracking-[0.2em] text-parchment/60 uppercase">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
