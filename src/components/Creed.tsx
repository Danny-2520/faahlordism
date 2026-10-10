import { commandments } from "../data/scripture";
import SectionTitle from "./SectionTitle";

export default function Creed() {
  return (
    <section id="creed" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          kicker="The Sacred Law"
          title="The Ten Commandments of Meme"
          subtitle="Handed down upon two stone tablets, which were later cropped, watermarked, and reposted."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {[commandments.slice(0, 5), commandments.slice(5)].map((tablet, ti) => (
            <div
              key={ti}
              className="relative rounded-t-[200px] border-2 border-stone-500/40 bg-gradient-to-b from-stone-700/40 to-stone-900/40 px-6 pt-20 pb-8 shadow-2xl md:px-10"
            >
              <span className="absolute top-8 left-1/2 -translate-x-1/2 font-deco text-xl text-gold/60">
                Tablet {ti === 0 ? "I" : "II"}
              </span>
              <ul className="space-y-5">
                {tablet.map((c) => (
                  <li key={c.n} className="group flex gap-4 rounded-xl p-3 transition hover:bg-gold/5">
                    <span className="w-12 shrink-0 font-deco text-2xl font-bold text-gold">{c.n}</span>
                    <div>
                      <p className="font-cinzel text-lg font-semibold text-parchment">{c.text}</p>
                      <p className="mt-1 text-parchment/55 italic">{c.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-gold/30 bg-velvet/40 p-8 text-center md:p-12">
          <p className="font-cinzel text-xs tracking-[0.4em] text-gold/70 uppercase">The Faahlordian Creed</p>
          <p className="mt-6 text-xl leading-relaxed text-parchment/90 italic md:text-2xl">
            "I believe in one Faahlord, the Almighty Sound, maker of Top Text and Bottom Text, of all things seen and screenshot.
            I believe in the Holy Doge, the Rickroll Everlasting, and the communion of Shitposters.
            I look for the resurrection of dead memes, and the irony of the world to come."
          </p>
          <p className="mt-6 font-deco text-2xl text-gold">Faaaah.</p>
        </div>
      </div>
    </section>
  );
}
