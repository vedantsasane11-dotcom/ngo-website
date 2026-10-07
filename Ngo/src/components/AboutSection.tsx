import React from 'react';
import { Phone, CheckCircle2, Heart, Award } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
  onDonateClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMoreClick,
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Organic Arched/Curved Photographic Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Arched image container matching reference image */}
            <div className="relative w-full max-w-md">
              {/* Decorative subtle background halo */}
              <div className="absolute -inset-4 bg-emerald-100/60 rounded-t-[140px] rounded-b-[40px] -rotate-1 -z-10" />

              <div className="overflow-hidden rounded-t-[140px] rounded-b-[36px] shadow-xl border-4 border-white bg-stone-100 aspect-[4/5]">
                <img
                  src={NGO_INFO.aboutImage}
                  alt="Mother and child receiving loving community support"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-2 bg-white rounded-2xl p-4 shadow-lg border border-stone-200/80 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center text-white shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-stone-900 leading-tight">
                    18+ Years
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Verified Global Impact
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Welcome Kicker */}
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0b3839] mb-2 flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Welcome To {NGO_INFO.name}</span>
            </div>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.18] mb-6 [text-wrap:balance]">
              We Can Donate for Better Future
            </h2>

            {/* Body Prose */}
            <p className="text-base text-stone-600 leading-relaxed mb-4">
              At {NGO_INFO.name}, we believe in the power of compassion and collective action to create positive change in the world. Our organization was founded on the principle that every individual, regardless of their background, deserves dignity and a fair start in life.
            </p>

            <p className="text-base text-stone-600 leading-relaxed mb-8">
              Our mission is to alleviate suffering and promote sustainable community development by providing direct support and resources to those in need. We strive to address the root causes of poverty, inequality, and educational injustice.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero administrative waste</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct village-level delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent quarterly audits</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Empowering local leadership</span>
              </div>
            </div>

            {/* Action Buttons: "More About Us" and "Call Us" */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
              <button
                onClick={onLearnMoreClick}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] rounded-lg shadow-sm hover:shadow transition-all duration-150 cursor-pointer"
              >
                More About Us
              </button>

              <a
                href={`tel:${NGO_INFO.phoneAlt}`}
                className="flex items-center gap-3 text-stone-800 hover:text-[#0b3839] transition-colors group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-[#0b3839] border border-emerald-200 transition-colors">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-medium text-stone-500">Call Us Anytime</span>
                  <span className="text-base font-bold text-stone-900 group-hover:text-[#0b3839]">
                    {NGO_INFO.phoneAlt}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
