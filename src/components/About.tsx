
import { Heart, Award, ThumbsUp } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Established & Experienced",
    description:
      "Years of experience operating on the Isle of Man means we know the roads, the island, and our passengers.",
  },
  {
    icon: Heart,
    title: "Passionate About Taxis",
    description:
      "We genuinely love what we do. That passion shows in our service, our vehicles, and how we treat every passenger.",
  },
  {
    icon: ThumbsUp,
    title: "Premium for Everyone",
    description:
      "Premium isn't reserved for a few — we deliver a high-quality experience to every single passenger we carry.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Big Statement */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#29ABE2]" />
              <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white leading-[1.05] mb-6">
              ISLE OF MAN&apos;S
              <br />
              PREMIUM
              <br />
              <span className="text-[#29ABE2]">TAXI FIRM</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              Bunty&apos;s Taxis is an established taxi firm with deep roots in the
              Isle of Man. We&apos;re not just a taxi company — we&apos;re passionate about
              transport and committed to delivering a genuinely premium experience
              to every person we carry.
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              Our fleet, our drivers, and our commitment to service reflect
              everything we believe a taxi company should be: reliable,
              professional, and always there when you need us.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#29ABE2] pl-4">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-white/40 text-sm mt-1 uppercase tracking-wide font-semibold">
                  Island Coverage
                </div>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-white/40 text-sm mt-1 uppercase tracking-wide font-semibold">
                  Reachable
                </div>
              </div>
            </div>
          </div>

          {/* Right — Pillars */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group flex gap-6 p-6 md:p-8 border border-white/8 hover:border-[#29ABE2]/30 bg-white/[0.015] hover:bg-white/[0.03] rounded-sm transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#29ABE2]/10 rounded-sm flex items-center justify-center group-hover:bg-[#29ABE2]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#29ABE2]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base uppercase tracking-wide mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
