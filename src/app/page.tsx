import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const BookingCTA = dynamic(() => import("@/components/BookingCTA"));
const Services   = dynamic(() => import("@/components/Services"));
const Fleet      = dynamic(() => import("@/components/Fleet"));
const About      = dynamic(() => import("@/components/About"));
const Coverage   = dynamic(() => import("@/components/Coverage"));
const Contact    = dynamic(() => import("@/components/Contact"));
const Footer     = dynamic(() => import("@/components/Footer"));
const MobileBar  = dynamic(() => import("@/components/MobileBar"));

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <BookingCTA />
      <Services />
      <Fleet />
      <About />
      <Coverage />
      <Contact />
      <Footer />
      <MobileBar />
    </main>
  );
}
