"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src="/3000w/logo.png"
              alt="Bunty's Taxis"
              width={180}
              height={44}
              className="h-10 md:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-[#29ABE2] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+447624313151"
              className="flex items-center gap-2 text-sm font-bold tracking-wide text-white/80 hover:text-[#29ABE2] transition-colors duration-200"
            >
              <Phone size={15} />
              <span>+44 7624 313151</span>
            </a>
            <a
              href="#booking"
              className="bg-[#29ABE2] text-white text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-[#1a8bbf] transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-white py-2 px-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <>
                <X size={22} />
                <span className="text-xs font-bold tracking-widest uppercase">Close</span>
              </>
            ) : (
              <>
                <Menu size={22} />
                <span className="text-xs font-bold tracking-widest uppercase">Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black flex flex-col transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
          {/* Top bar inside overlay */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10 shrink-0">
            <a href="#" onClick={() => setMenuOpen(false)}>
              <Image
                src="/3000w/logo.png"
                alt="Bunty's Taxis"
                width={140}
                height={34}
                className="h-9 w-auto object-contain"
              />
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-white py-2 px-1"
              aria-label="Close menu"
            >
              <X size={22} />
              <span className="text-xs font-bold tracking-widest uppercase">Close</span>
            </button>
          </div>

          {/* Nav Links — large, centred */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-3xl font-black uppercase tracking-wide text-white/80 hover:text-[#29ABE2] transition-all duration-300 py-4 border-b border-white/[0.06] last:border-0"
                style={{
                  transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="px-6 pb-10 pt-6 flex flex-col gap-3 border-t border-white/10 shrink-0">
            <a
              href="tel:+447624313151"
              className="flex items-center justify-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors duration-200"
            >
              <Phone size={15} className="text-[#29ABE2]" />
              +44 7624 313151
            </a>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="bg-[#29ABE2] text-white text-sm font-bold tracking-widest uppercase px-5 py-4 rounded-sm text-center hover:bg-[#1a8bbf] transition-colors duration-200"
            >
              Book a Taxi
            </a>
          </div>
        </div>
    </header>
  );
}
