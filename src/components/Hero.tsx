
import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#29ABE2 1px, transparent 1px), linear-gradient(90deg, #29ABE2 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Driving Cars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[
          { top: "4%",  size: 30,  duration: 22, delay: 0,   opacity: 0.08, ltr: true  },
          { top: "14%", size: 160, duration: 16, delay: -7,  opacity: 0.14, ltr: false },
          { top: "28%", size: 40,  duration: 28, delay: -14, opacity: 0.07, ltr: true  },
          { top: "42%", size: 220, duration: 13, delay: -4,  opacity: 0.16, ltr: false },
          { top: "58%", size: 35,  duration: 20, delay: -10, opacity: 0.08, ltr: true  },
          { top: "68%", size: 180, duration: 18, delay: -2,  opacity: 0.13, ltr: false },
          { top: "82%", size: 55,  duration: 25, delay: -18, opacity: 0.09, ltr: true  },
        ].map((car, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: car.top,
              left: 0,
              willChange: "transform",
              animation: `${car.ltr ? "carLTR" : "carRTL"} ${car.duration}s linear ${car.delay}s infinite`,
            }}
          >
            <Image
              src="/car.png"
              alt=""
              width={car.size}
              height={car.size}
              style={{
                opacity: car.opacity,
                mixBlendMode: "screen",
                display: "block",
              }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Blue Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
            Isle of Man — Island-Wide Coverage
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-wide leading-[0.95] text-white mb-6 animate-fade-in-up animate-delay-100">
            PREMIER
            <br />
            <span className="text-[#29ABE2]">TAXI</span> SERVICE
            <span className="block text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest mt-4">
              ON THE ISLE OF MAN
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/60 font-medium max-w-xl mx-auto mt-8 mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            Reliable cars and multi-seater vehicles covering the whole island.
            From Douglas to Ramsey, airport to ferry — we&apos;ve got you covered.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 bg-[#29ABE2] hover:bg-[#1a8bbf] text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:scale-105"
            >
              Book a Taxi
              <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/447624313151"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#29ABE2] text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200"
            >
              <MessageCircle size={18} className="text-[#29ABE2]" />
              WhatsApp
            </a>
          </div>

          {/* Phone Number */}
          <div className="mt-10 flex items-center justify-center gap-3 animate-fade-in-up animate-delay-400">
            <div className="w-8 h-px bg-[#29ABE2]" />
            <a
              href="tel:+447624313151"
              className="text-white/50 hover:text-white text-sm font-semibold tracking-widest transition-colors duration-200"
            >
              +44 7624 313151
            </a>
            <span className="text-white/20 text-sm">— Call or WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-xs tracking-widest uppercase text-white/50">Scroll</span>
        <ChevronDown size={16} className="text-white/50" />
      </div>
    </section>
  );
}
