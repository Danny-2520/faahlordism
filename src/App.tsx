import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Creed from "./components/Creed";
import HolyBook from "./components/HolyBook";
import Saints from "./components/Saints";
import Rituals from "./components/Rituals";
import Confessional from "./components/Confessional";
import Clergy from "./components/Clergy";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  const [rank, setRank] = useState("Meme Priest");

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Creed />
        <HolyBook />
        <Saints />
        <Rituals />
        <Confessional />
        <Clergy onChoose={setRank} />
        <Join rank={rank} setRank={setRank} />
      </main>
      <Footer />
    </div>
  );
}
