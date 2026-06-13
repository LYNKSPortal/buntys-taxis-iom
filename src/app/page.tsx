import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

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
