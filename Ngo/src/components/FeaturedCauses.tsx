import React, { useState } from 'react';
import { Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { CAUSES_DATA } from '../data/ngoData.ts';
import { Cause } from '../types.ts';

interface FeaturedCausesProps {
  onDonateToCause: (cause: Cause) => void;
  onViewCauseDetails: (cause: Cause) => void;
}

export const FeaturedCauses: React.FC<FeaturedCausesProps> = ({
  onDonateToCause,
  onViewCauseDetails,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Causes' },
    { id: 'education', label: 'Education' },
    { id: 'nutrition', label: 'Hunger Relief' },
    { id: 'water', label: 'Clean Water' },
  ];

  const filteredCauses =
    selectedFilter === 'all'
      ? CAUSES_DATA
      : CAUSES_DATA.filter((c) => c.category === selectedFilter);

  return (
    <section id="causes" className="py-20 sm:py-28 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Featured Cause
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Find the popular cause
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Direct your gift directly where your heart lies. We guarantee total transparency with every dollar pledged.
          </p>

          {/* Interactive Filter Controls (compliant with Section 1.A interactive tabs rule) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100 rounded-xl max-w-md mx-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-white text-[#0b3839] shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCauses.map((cause) => {
            const percentage = Math.min(
              100,
              Math.round((cause.raised / cause.goal) * 1000) / 10
            );

            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
              >
                {/* Cause Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category unboxed tag on card */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0b3839] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    {cause.categoryLabel}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-[#0b3839] transition-colors leading-snug">
                      {cause.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {cause.description}
                    </p>
                  </div>

                  <div>
                    {/* Progress Bar Container */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="text-stone-500">Progress</span>
                        <span className="text-amber-600 font-bold tabular-nums">
                          {percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Raised & Goal Figures */}
                    <div className="flex items-center justify-between text-xs py-3 border-t border-stone-100 text-stone-600 mb-5">
                      <div>
                        <span className="text-stone-400 block text-[11px]">Raised</span>
                        <span className="font-bold text-stone-900 text-sm tabular-nums">
                          ${cause.raised.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-stone-400 block text-[11px]">Goal</span>
                        <span className="font-medium text-stone-700 text-sm tabular-nums">
                          ${cause.goal.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onDonateToCause(cause)}
                        className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] rounded-lg shadow-xs hover:shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5 fill-white" />
                        <span>Donate Now</span>
                      </button>

                      <button
                        onClick={() => onViewCauseDetails(cause)}
                        className="py-2.5 px-3 text-xs sm:text-sm font-medium text-stone-700 hover:text-[#0b3839] hover:bg-stone-100 rounded-lg border border-stone-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="View Full Story"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-500 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Have a custom philanthropic project or corporate grant in mind?</span>
            <a
              href="#contact"
              className="text-[#0b3839] font-semibold hover:underline"
            >
              Contact our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
