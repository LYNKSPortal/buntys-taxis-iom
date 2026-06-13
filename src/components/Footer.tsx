"use client";

import Image from "next/image";
import { Phone, MessageCircle, Mail } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/3000w/logo.png"
                alt="Bunty's Taxis"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium taxi service covering the whole Isle of Man. Cars and
              multi-seater vehicles available.
            </p>
            <p className="text-white/25 text-xs mt-4 uppercase tracking-widest font-semibold">
              Isle of Man
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#29ABE2] text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+447624313151"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={14} className="text-[#29ABE2] shrink-0" />
                +44 7624 313151
              </a>
              <a
                href="https://wa.me/447624313151"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                <MessageCircle size={14} className="text-[#29ABE2] shrink-0" />
                WhatsApp
              </a>
              <a
                href="mailto:info@buntystaxis.com"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail size={14} className="text-[#29ABE2] shrink-0" />
                info@buntystaxis.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Bunty&apos;s Taxis. Isle of Man.
          </p>
          <a
            href="https://buntystaxis.com"
            className="text-white/25 hover:text-white/40 text-xs transition-colors duration-200"
          >
            buntystaxis.com
          </a>
        </div>
      </div>
    </footer>
  );
}
