"use client";

import { Plane, Ship, MapPin, Globe, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Punctual, stress-free transfers to and from Isle of Man Airport. We track your flight so you're never left waiting.",
  },
  {
    icon: Ship,
    title: "Ferry Port Transfers",
    description:
      "Reliable pickups and drop-offs at the Isle of Man ferry terminal. Perfect for Steam Packet connections.",
  },
  {
    icon: MapPin,
    title: "Local Journeys",
    description:
      "Short-hop or cross-town — wherever you need to go on the island, we'll get you there comfortably.",
  },
  {
    icon: Globe,
    title: "Island-Wide Travel",
    description:
      "From Douglas to Peel, Ramsey to Castletown — we cover every corner of the Isle of Man.",
  },
  {
    icon: Users,
    title: "Multi-Seater Vehicles",
    description:
      "Travelling in a group? Our larger vehicles comfortably seat more passengers with room for luggage.",
  },
  {
    icon: Briefcase,
    title: "Business & Group Travel",
    description:
      "Professional, discreet service for business clients and group bookings. We'll handle the logistics.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#29ABE2]" />
            <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white leading-[1.05]">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-white/50 text-base md:text-lg max-w-xl">
            Whether it&apos;s a quick local trip or an island-wide transfer, Bunty&apos;s
            Taxis has the right vehicle and the right experience for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-black p-8 md:p-10 hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover accent bar */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#29ABE2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 rounded-sm bg-[#29ABE2]/10 flex items-center justify-center mb-6 group-hover:bg-[#29ABE2]/20 transition-colors duration-300">
                  <Icon size={24} className="text-[#29ABE2]" />
                </div>

                <h3 className="text-lg font-black uppercase tracking-wide text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Need something specific? Get in touch and we&apos;ll arrange it.
          </p>
          <a
            href="#booking"
            className="bg-[#29ABE2] hover:bg-[#1a8bbf] text-white font-bold text-sm tracking-widest uppercase px-6 py-3 rounded-sm transition-colors duration-200"
          >
            Book a Journey
          </a>
        </div>
      </div>
    </section>
  );
}
