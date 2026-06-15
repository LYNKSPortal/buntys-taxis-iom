
import { Phone, MessageCircle, Mail, CalendarCheck } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative py-20 md:py-28 bg-[#29ABE2] overflow-hidden"
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <CalendarCheck size={20} className="text-black/70" />
              <span className="text-black/70 text-xs font-bold tracking-widest uppercase">
                Advance Booking Recommended
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-black leading-[1.05]">
              BOOK IN ADVANCE
              <br />
              FOR GUARANTEED
              <br />
              AVAILABILITY
            </h2>
            <p className="mt-4 text-black/70 text-base md:text-lg font-medium max-w-lg leading-relaxed">
              We recommend booking ahead to secure your vehicle. For last-minute
              journeys, call or WhatsApp us directly and we&apos;ll do our best to
              accommodate you.
            </p>
          </div>

          {/* Booking Buttons */}
          <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[260px]">
            <a
              href="https://wa.me/447624313151"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-black text-white font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-white hover:text-black transition-all duration-200 group"
            >
              <MessageCircle size={20} className="text-[#29ABE2] group-hover:text-black transition-colors" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href="tel:+447624313151"
              className="flex items-center gap-4 bg-black text-white font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-white hover:text-black transition-all duration-200 group"
            >
              <Phone size={20} className="text-[#29ABE2] group-hover:text-black transition-colors" />
              <span>Call +44 7624 313151</span>
            </a>
            <a
              href="mailto:info@buntystaxis.com"
              className="flex items-center gap-4 bg-black/20 text-black font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-black hover:text-white transition-all duration-200 group border border-black/20"
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
