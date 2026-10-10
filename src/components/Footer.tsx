import FaahButton from "./FaahButton";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-black/60 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <p className="meme-text text-4xl md:text-6xl">One does not simply</p>
          <p className="meme-text text-4xl md:text-6xl">leave without a Faah</p>
          <div className="mt-6">
            <FaahButton size="sm" />
          </div>
        </div>

        <div className="grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-deco text-2xl font-bold gold-text">Faahlordia</p>
            <p className="mt-3 max-w-md text-parchment/60 italic">
              The official pro community of the Faahlordians, the new faith for memes. Founded on the sacred belief that every fail deserves a
              Faah, and every Faah deserves a fail.
            </p>
          </div>
          <div>
            <p className="font-cinzel text-xs tracking-widest text-gold uppercase">Scripture</p>
            <ul className="mt-4 space-y-2 text-parchment/60">
              <li><a href="#holy-book" className="hover:text-gold">The Holy Book of Memes</a></li>
              <li><a href="#creed" className="hover:text-gold">The Ten Commandments</a></li>
              <li><a href="#saints" className="hover:text-gold">Saints & Prophets</a></li>
              <li><a href="#rituals" className="hover:text-gold">Prayer Generator</a></li>
            </ul>
          </div>
          <div>
            <p className="font-cinzel text-xs tracking-widest text-gold uppercase">Congregation</p>
            <ul className="mt-4 space-y-2 text-parchment/60">
              <li><a href="#confess" className="hover:text-gold">The Confessional</a></li>
              <li><a href="#clergy" className="hover:text-gold">Clergy Ranks</a></li>
              <li><a href="#join" className="hover:text-gold">Get Baptized</a></li>
              <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className="hover:text-gold">Totally Normal Link 👀</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-sm text-parchment/40 md:flex-row">
          <p>© Anno Memeini {new Date().getFullYear()} The Church of the Faahlord. All memes reserved (and reposted).</p>
          <p className="italic">A parody faith. No ogres were harmed. Faah responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
