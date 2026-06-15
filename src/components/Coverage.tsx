
import { MapPin } from "lucide-react";

const areas = [
  "Douglas",
  "Onchan",
  "Ramsey",
  "Peel",
  "Castletown",
  "Port Erin",
  "Port St Mary",
  "Laxey",
  "Ballasalla",
  "Kirk Michael",
  "Ballaugh",
  "Andreas",
  "IOM Airport",
  "Ferry Terminal",
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="py-20 md:py-28 bg-black border-t border-white/10 relative overflow-hidden"
    >
      {/* Background IOM map-inspired shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 500" width="400" height="500" aria-hidden="true">
          <path
            d="M200 40 C260 35 320 60 360 110 C380 140 390 170 388 200 C385 240 365 270 355 300 C340 340 345 370 330 400 C310 435 270 460 230 468 C190 476 150 468 120 448 C90 428 70 395 60 360 C45 315 50 275 45 240 C38 200 25 170 30 135 C38 90 80 55 120 44 C145 37 175 42 200 40 Z"
            fill="#29ABE2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#29ABE2]" />
              <span className="text-[#29ABE2] text-xs font-bold tracking-widest uppercase">
                Where We Go
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white leading-[1.05] mb-6">
              WE COVER THE
              <br />
              WHOLE OF THE
              <br />
              <span className="text-[#29ABE2]">ISLE OF MAN</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              From the north to the south, coast to coast — there&apos;s no corner of
              this island we don&apos;t serve. If you need to get there, we&apos;ll take
              you.
            </p>

            {/* Key routes callout */}
            <div className="bg-[#29ABE2]/5 border border-[#29ABE2]/20 rounded-sm p-6">
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-3">
                Key Routes
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Douglas ↔ IOM Airport",
                  "Douglas ↔ Ferry Terminal",
                  "Any Town ↔ Any Town",
                  "Hotel Pickups & Drop-offs",
                ].map((route) => (
                  <li
                    key={route}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                    {route}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Area Tags */}
          <div>
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-6">
              Areas Covered Include
            </p>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 hover:border-[#29ABE2]/40 hover:bg-[#29ABE2]/5 text-white/70 hover:text-white text-sm font-semibold tracking-wide px-4 py-2 rounded-sm transition-all duration-200 cursor-default"
                >
                  <MapPin size={12} className="text-[#29ABE2] shrink-0" />
                  {area}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-white/[0.02] border border-white/10 rounded-sm">
              <p className="text-white font-bold text-base mb-1">
                Not sure if we cover your area?
              </p>
              <p className="text-white/40 text-sm mb-4">
                Just ask — we almost certainly do.
              </p>
              <a
                href="tel:+447624313151"
                className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a8bbf] text-white font-bold text-sm tracking-widest uppercase px-5 py-2.5 rounded-sm transition-colors duration-200"
              >
                <MapPin size={14} />
                Ask About Your Area
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
