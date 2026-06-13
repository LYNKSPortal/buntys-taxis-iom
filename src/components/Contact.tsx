"use client";

import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+44 7624 313151",
    description: "Available for bookings and enquiries",
    href: "tel:+447624313151",
    ctaLabel: "Call Now",
    accent: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+44 7624 313151",
    description: "Message us directly on WhatsApp",
    href: "https://wa.me/447624313151",
    ctaLabel: "Message on WhatsApp",
    accent: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@buntystaxis.com",
    description: "For advance bookings and enquiries",
    href: "mailto:info@buntystaxis.com",
    ctaLabel: "Send an Email",
    accent: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#29ABE2]" />
            <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white leading-[1.05]">
            READY TO BOOK?
          </h2>
          <p className="mt-4 text-white/50 text-base md:text-lg max-w-xl">
            Reach us by phone, WhatsApp, or email. For guaranteed availability,
            booking in advance is recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col p-8 border rounded-sm transition-all duration-300 ${
                  method.accent
                    ? "border-[#29ABE2]/40 bg-[#29ABE2]/5 hover:bg-[#29ABE2]/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${
                    method.accent
                      ? "bg-[#29ABE2]/20"
                      : "bg-white/5"
                  }`}
                >
                  <Icon
                    size={22}
                    className={method.accent ? "text-[#29ABE2]" : "text-white/60"}
                  />
                </div>

                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">
                  {method.label}
                </p>
                <p className="text-white font-bold text-lg mb-1 break-all">
                  {method.value}
                </p>
                <p className="text-white/40 text-sm mb-8">
                  {method.description}
                </p>

                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`mt-auto inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase px-5 py-3 rounded-sm transition-all duration-200 ${
                    method.accent
                      ? "bg-[#29ABE2] hover:bg-[#1a8bbf] text-white"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
                  }`}
                >
                  <Icon size={14} />
                  {method.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>

        {/* Availability Notice */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white/[0.02] border border-white/10 rounded-sm">
          <div className="shrink-0 w-10 h-10 bg-[#29ABE2]/10 rounded-sm flex items-center justify-center">
            <Clock size={18} className="text-[#29ABE2]" />
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wide">
              Booking Tip
            </p>
            <p className="text-white/40 text-sm mt-0.5">
              For guaranteed availability — especially for airport and ferry
              transfers — we strongly recommend booking in advance. Short-notice
              journeys can be arranged by calling or WhatsApp-ing us directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
