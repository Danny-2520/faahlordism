type Props = {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function SectionTitle({ kicker, title, subtitle, dark }: Props) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className={`font-cinzel text-xs tracking-[0.4em] uppercase ${dark ? "text-red-900" : "text-gold/80"}`}>
        ✦ {kicker} ✦
      </p>
      <h2 className={`mt-4 font-deco text-4xl font-bold leading-tight md:text-5xl ${dark ? "text-[#2b1a0e]" : "gold-text"}`}>
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3">
        <span className={`h-px w-16 ${dark ? "bg-red-900/40" : "bg-gold/40"}`} />
        <span className={dark ? "text-red-900" : "text-gold"}>☩</span>
        <span className={`h-px w-16 ${dark ? "bg-red-900/40" : "bg-gold/40"}`} />
      </div>
      {subtitle && (
        <p className={`mt-5 text-lg italic md:text-xl ${dark ? "text-[#4a3220]" : "text-parchment/70"}`}>{subtitle}</p>
      )}
    </div>
  );
}
