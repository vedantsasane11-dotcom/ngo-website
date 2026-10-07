import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/ngoData.ts';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#fbfbfa] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Voices of Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            What Our Supporters Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Real reflections from long-time donors, partner organizations, and community workers.
          </p>
        </div>

        {/* 3-Card Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Warm Orange Circular Quote Mark */}
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white mb-6 shadow-xs">
                  <Quote className="w-5 h-5 fill-white" />
                </div>

                {/* Quote Body */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Attribution */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-stone-100">
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-stone-500">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
