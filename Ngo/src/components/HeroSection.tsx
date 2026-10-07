import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface HeroSectionProps {
  onDonateClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDonateClick,
  onExploreClick,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      kicker: 'Transforming Young Lives',
      headline: 'Give The Child The Gift Of Education.',
      description:
        'Education is a powerful tool for community development. Charities working in the education sector not only help individuals break cycles of adversity, but equip future leaders with knowledge and confidence.',
      cta: 'Get Started',
      accent: 'Education & Literacy',
    },
    {
      kicker: 'Lifesaving Clean Water Access',
      headline: 'Quench The Thirst Of Vulnerable Villages.',
      description:
        'Clean, sustainable water stops preventable disease in its tracks and restores dignity. Solar-powered boreholes give girls their childhood back and keep whole families thriving.',
      cta: 'Support Clean Water',
      accent: 'Clean Water Initiative',
    },
    {
      kicker: 'Zero Child Goes Hungry',
      headline: 'Changing Lives One Warm Meal At A Time.',
      description:
        'Proper nutrition is foundational to childhood development and learning. Our daily community meal programs deliver balanced, hot food to over 15,000 children every day.',
      cta: 'Feed A Child Today',
      accent: 'Daily Nutrition Program',
    },
  ];

  const current = slides[activeSlide];

  return (
    <section id="home" className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center bg-stone-900 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={NGO_INFO.heroImage}
          alt="Smiling child receiving education and community support"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05] transition-all duration-700"
        />
        {/* Soft dark-gradient scrim for optimal readability (conforms to Section 1.F contrast standard) */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl text-white">
          {/* Unboxed Metadata Tag (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse" />
            <span>{current.kicker}</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-300 font-normal">{current.accent}</span>
          </div>

          {/* Bold Display Headline with balanced wrapping */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
            {current.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed font-normal mb-8 max-w-xl">
            {current.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onDonateClick}
              className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <span>{current.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 text-sm sm:text-base font-medium text-stone-100 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-150 cursor-pointer"
            >
              Discover Our Impact
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Tax Deductible 501(c)(3)</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
              <span>89% Directly Funds Field Programs</span>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators at bottom */}
        <div className="mt-10 sm:mt-12 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? 'w-8 bg-amber-400'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
