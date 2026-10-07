import React from 'react';
import { IMPACT_STATS } from '../data/ngoData.ts';

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-stone-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500 max-w-[200px]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
