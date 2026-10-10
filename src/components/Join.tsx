import { useState } from "react";
import { ranks, saints } from "../data/scripture";
import SectionTitle from "./SectionTitle";
import { playFaah } from "../lib/faah";

const titles = ["Brother", "Sister", "Deacon", "Elder", "Friar", "Abbot", "Oracle"];
const epithets = [
  "the Deep-Fried",
  "of the Eternal Scroll",
  "the Unexplained",
  "Who Faahs at Dawn",
  "the Never-Given-Up",
  "of the Holy Swamp",
  "the Absolute Unit",
  "the Ratio-Proof",
  "Bringer of Top Text",
  "the Based",
];

const favMemes = ["Doge", "Shrek", "Rickroll", "Harambe", "Big Chungus", "Nyan Cat", "Trollface", "Grumpy Cat", "Distracted Boyfriend", "Skibidi (heresy)"];

function hash(s: string) {
  let h = 7;
  for (const c of s) h = (h * 33 + c.charCodeAt(0)) >>> 0;
  return h;
}

export default function Join({ rank, setRank }: { rank: string; setRank: (r: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fav, setFav] = useState(favMemes[0]);
  const [vow, setVow] = useState(false);
  const [cert, setCert] = useState<null | { holy: string; number: string; patron: string; date: string }>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !vow) return;
    const h = hash(name + fav);
    const first = name.trim().split(" ")[0];
    setCert({
      holy: `${titles[h % titles.length]} ${first} ${epithets[(h >> 3) % epithets.length]}`,
      number: `FL-${(h % 900000) + 100000}`,
      patron: saints[(h >> 5) % saints.length].name,
      date: new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }),
    });
    playFaah(1);
  };

  return (
    <section id="join" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="The Initiation"
          title="Get Baptized in the Holy Feed"
          subtitle="Take the sacred vow, receive thy holy Faahlordian name, and join 420,000+ brothers and sisters of the Meme."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <form onSubmit={submit} className="space-y-5 rounded-3xl border border-gold/25 bg-ink/70 p-6 md:p-8">
            <div>
              <label className="font-cinzel text-xs tracking-widest text-gold/80 uppercase">Thy Mortal Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Kevin"
                className="mt-2 w-full rounded-xl border border-gold/30 bg-black/40 px-4 py-3 text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="font-cinzel text-xs tracking-widest text-gold/80 uppercase">Thy Electronic Scroll (Email)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kevin@groupchat.com"
                className="mt-2 w-full rounded-xl border border-gold/30 bg-black/40 px-4 py-3 text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="font-cinzel text-xs tracking-widest text-gold/80 uppercase">Desired Rank</label>
                <select
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gold/30 bg-black/40 px-4 py-3 text-parchment focus:border-gold focus:outline-none"
                >
                  {ranks.map((r) => (
                    <option key={r.name} value={r.name} className="bg-ink">
                      {r.icon} {r.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-cinzel text-xs tracking-widest text-gold/80 uppercase">Most Sacred Meme</label>
                <select
                  value={fav}
                  onChange={(e) => setFav(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gold/30 bg-black/40 px-4 py-3 text-parchment focus:border-gold focus:outline-none"
                >
                  {favMemes.map((m) => (
                    <option key={m} className="bg-ink">
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="flex cursor-pointer gap-3 rounded-xl border border-gold/20 bg-gold/5 p-4">
              <input type="checkbox" checked={vow} onChange={(e) => setVow(e.target.checked)} className="mt-1 h-5 w-5 accent-[#e8b84a]" />
              <span className="text-parchment/80 italic">
                I solemnly vow to never explain the joke, to credit the creator, and to utter the Sacred Faah at every worthy fail. So help me Doge.
              </span>
            </label>

            {fav === "Skibidi (heresy)" && (
              <p className="rounded-lg border border-red-500/40 bg-red-900/20 p-3 text-sm text-red-300">
                ⚠️ The Council has noted thy choice. Thou may still join, but thou art being watched.
              </p>
            )}

            <button
              type="submit"
              disabled={!name.trim() || !vow}
              className="w-full rounded-full bg-gradient-to-b from-gold-light to-gold py-4 font-cinzel font-bold tracking-widest text-ink uppercase shadow-[0_0_40px_rgba(232,184,74,0.3)] transition hover:scale-[1.01] disabled:opacity-40"
            >
              📯 Receive the Holy Faah
            </button>
          </form>

          {/* Certificate */}
          <div className="relative">
            {cert ? (
              <div className="page-in parchment relative rounded-2xl p-3 shadow-2xl">
                <div className="rounded-xl border-4 border-double border-[#8b5a2b] p-6 text-center md:p-10">
                  <p className="font-cinzel text-xs tracking-[0.4em] text-red-900/80 uppercase">Certificate of Baptism</p>
                  <p className="mt-2 font-deco text-2xl font-bold text-[#2b1a0e] md:text-3xl">The Church of the Faahlord</p>
                  <p className="mt-6 italic text-[#4a3220]">Be it known throughout the Feed that</p>
                  <p className="mt-3 font-deco text-3xl leading-tight font-black text-red-900 md:text-4xl">{cert.holy}</p>
                  <p className="mt-4 italic text-[#4a3220]">
                    has been washed in the Holy Feed and is hereby ordained as a
                  </p>
                  <p className="mt-2 font-cinzel text-xl font-bold text-[#2b1a0e]">{rank}</p>
                  <p className="mt-4 text-[#4a3220]">
                    under the protection of <strong>{cert.patron}</strong>, devoted to the sacred meme of <strong>{fav}</strong>.
                  </p>
                  <div className="mt-8 flex items-end justify-between gap-4 text-left text-sm text-[#4a3220]">
                    <div>
                      <p className="font-cinzel text-xs uppercase">Registry No.</p>
                      <p className="font-semibold">{cert.number}</p>
                    </div>
                    <div className="grid h-20 w-20 place-items-center rounded-full border-4 border-red-900/70 bg-red-800 text-3xl text-gold-light shadow-lg">
                      📯
                    </div>
                    <div className="text-right">
                      <p className="font-cinzel text-xs uppercase">Anointed</p>
                      <p className="font-semibold">{cert.date}</p>
                    </div>
                  </div>
                  <p className="mt-6 font-deco text-lg text-red-900">Faaaah. Amen.</p>
                </div>
              </div>
            ) : (
              <div className="grid min-h-[480px] place-items-center rounded-2xl border-2 border-dashed border-gold/30 bg-ink/40 p-10 text-center">
                <div>
                  <p className="float text-7xl">📜</p>
                  <p className="mt-6 font-deco text-2xl text-gold">Thy Holy Certificate Awaits</p>
                  <p className="mt-3 text-parchment/60 italic">Complete the initiation to receive thy sacred Faahlordian name.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
