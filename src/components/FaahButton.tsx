import { useState } from "react";
import { playFaah } from "../lib/faah";

type Pop = { id: number; x: number; text: string };

const variants = ["FAAAH", "FAAAAAH", "FAAAAAAAH!", "FAH.", "FAAAAAAAAAAH", "faaah..."];

export default function FaahButton({ size = "lg", onFaah }: { size?: "lg" | "sm"; onFaah?: () => void }) {
  const [pops, setPops] = useState<Pop[]>([]);
  const [shaking, setShaking] = useState(false);

  const handle = () => {
    playFaah(Math.random());
    onFaah?.();
    const id = Date.now() + Math.random();
    const text = variants[Math.floor(Math.random() * variants.length)];
    setPops((p) => [...p, { id, x: 30 + Math.random() * 40, text }]);
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
    setTimeout(() => setPops((p) => p.filter((pp) => pp.id !== id)), 1400);
  };

  const big = size === "lg";

  return (
    <div className="relative inline-block">
      {pops.map((p) => (
        <span
          key={p.id}
          className="meme-text faah-pop pointer-events-none absolute top-0 z-20 text-3xl whitespace-nowrap md:text-4xl"
          style={{ left: `${p.x}%` }}
        >
          {p.text}
        </span>
      ))}
      <button
        onClick={handle}
        aria-label="Press the Sacred Faah Button"
        className={`group relative ${shaking ? "shake" : ""} ${big ? "h-40 w-40 md:h-48 md:w-48" : "h-20 w-20"} rounded-full`}
      >
        <span className="halo absolute -inset-4 rounded-full bg-gold/30 blur-2xl" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#7a1414] to-[#3a0505] shadow-[0_10px_0_#1f0202,0_14px_30px_rgba(0,0,0,0.6)] transition-all group-active:translate-y-2 group-active:shadow-[0_2px_0_#1f0202]" />
        <span className="absolute inset-2 rounded-full border-2 border-gold/60 bg-gradient-to-b from-[#d42a2a] to-[#8a1010] transition-all group-hover:from-[#ec3a3a] group-active:translate-y-2" />
        <span className={`meme-text relative z-10 block transition-transform group-active:translate-y-2 ${big ? "text-4xl md:text-5xl" : "text-lg"}`}>
          FAAH
        </span>
      </button>
    </div>
  );
}
