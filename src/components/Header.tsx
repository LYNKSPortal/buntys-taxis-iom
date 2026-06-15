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
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold tracking-widest uppercase text-white/80 hover:text-[#29ABE2] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
              <a
                href="tel:+447624313151"
                className="flex items-center gap-2 text-sm font-bold text-white/80"
              >
                <Phone size={15} />
                +44 7624 313151
              </a>
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="bg-[#29ABE2] text-white text-sm font-bold tracking-widest uppercase px-5 py-3 rounded-sm text-center hover:bg-[#1a8bbf] transition-colors duration-200"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
