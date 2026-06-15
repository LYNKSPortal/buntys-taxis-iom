
import Image from "next/image";
import { ShieldCheck, Star, Zap } from "lucide-react";

const fleetFeatures = [
  {
    icon: ShieldCheck,
    title: "Comfort & Safety",
    description:
      "All vehicles are well-maintained, clean, and comfortable — whether it's a short hop or a long island crossing.",
  },
  {
    icon: Star,
    title: "Standard to Multi-Seater",
    description:
      "From a solo trip in a standard saloon to a group booking in a spacious multi-seater van — we have the right vehicle.",
  },
  {
    icon: Zap,
    title: "Reliable & Flexible",
    description:
      "We adapt to your needs. Luggage, mobility requirements, last-minute changes — just let us know.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 md:py-28 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#29ABE2]" />
              <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
                The Fleet
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white leading-[1.05] mb-6">
              THE RIGHT VEHICLE
              <br />
              FOR EVERY JOURNEY
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Our fleet ranges from comfortable standard cars to spacious
              multi-seater vans, giving you the flexibility to travel the way
              you want — solo, with family, or as a group.
            </p>

            <div className="flex flex-col gap-6">
              {fleetFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 bg-[#29ABE2]/10 rounded-sm flex items-center justify-center mt-0.5">
                      <Icon size={20} className="text-[#29ABE2]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            {/* Large decorative car SVG */}
            <div className="relative bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 pb-20 flex items-center justify-center overflow-hidden min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#29ABE2]/5 to-transparent" />
              <Image
                src="/car.png"
                alt="Bunty's Taxis fleet"
                width={200}
                height={200}
                className="w-36 md:w-44 mx-auto"
                style={{ mixBlendMode: "screen" }}
              />

              {/* Fleet label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center">
                <div className="flex gap-3">
                  <div className="bg-[#29ABE2]/10 border border-[#29ABE2]/20 text-[#29ABE2] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                    Cars
                  </div>
                  <div className="bg-white/5 border border-white/10 text-white/60 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                    Multi-Seater Vans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
