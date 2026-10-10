import { tickerItems } from "../data/scripture";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-y border-gold/30 bg-gradient-to-r from-[#3a0808] via-[#5a0f0f] to-[#3a0808] py-3">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="font-cinzel text-sm tracking-wider text-gold-light">
            {t} <span className="ml-12 text-gold/50">☩</span>
          </span>
        ))}
      </div>
    </div>
  );
}
