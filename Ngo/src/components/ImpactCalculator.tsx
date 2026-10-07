import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, HeartHandshake } from 'lucide-react';
import { IMPACT_CALCULATOR_PRESETS } from '../data/ngoData.ts';

interface ImpactCalculatorProps {
  onDonatePreset: (amount: number) => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({
  onDonatePreset,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(1);
  const currentPreset = IMPACT_CALCULATOR_PRESETS[selectedIdx];

  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0b3839] mb-1.5">
                <Calculator className="w-3.5 h-3.5 text-amber-500" />
                <span>Interactive Philanthropy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                See What Your Support Accomplishes
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span>100% Accountable Field Audits</span>
            </div>
          </div>

          {/* Amount Selector Tabs */}
          <div className="pt-8">
            <div className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wider">
              Select a contribution tier:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
              {IMPACT_CALCULATOR_PRESETS.map((preset, idx) => (
                <button
                  key={preset.amount}
                  onClick={() => setSelectedIdx(idx)}
                  className={`py-3 px-2 rounded-xl text-center transition-all cursor-pointer ${
                    selectedIdx === idx
                      ? 'bg-[#0b3839] text-white shadow-md ring-2 ring-emerald-500'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <div className="text-lg font-bold tabular-nums">
                    ${preset.amount}
                  </div>
                  <div className="text-[11px] opacity-80 truncate">
                    {idx === 0
                      ? 'Starter'
                      : idx === 1
                      ? 'Family'
                      : idx === 2
                      ? 'Community'
                      : idx === 3
                      ? 'Clinic'
                      : 'Village'}
                  </div>
                </button>
              ))}
            </div>

            {/* Impact Feature Card */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Your ${currentPreset.amount} Direct Impact</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {currentPreset.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
                  {currentPreset.impact}
                </p>
              </div>

              <button
                onClick={() => onDonatePreset(currentPreset.amount)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer whitespace-nowrap"
              >
                <span>Sponsor ${currentPreset.amount}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
