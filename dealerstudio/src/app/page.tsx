import Image from "next/image";
import Hero from "./components/hero_banner"
import Section2 from "./components/cards/cardlist"

export default function Home() {
  return (
    <div >
       <Hero/>
       <Section2/>
    </div>
  );
}
