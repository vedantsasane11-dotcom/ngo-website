import React, { useState } from 'react';
import { Heart, Gift, ArrowRight } from 'lucide-react';

interface DonationBannerProps {
  onDonateWithAmount: (amount: number) => void;
}

export const DonationBanner: React.FC<DonationBannerProps> = ({
  onDonateWithAmount,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');

  const presetAmounts = [25, 50, 100, 250];

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(parseInt(val, 10) || 50);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount;
    if (finalAmount > 0) {
      onDonateWithAmount(finalAmount);
    }
  };

  return (
    <section className="relative py-20 sm:py-24 bg-[#0b3839] text-white overflow-hidden">
      {/* Subtle radial ambient illumination */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
          <Heart className="w-3.5 h-3.5 fill-amber-400" />
          <span>Help make a lasting difference</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
          Your donation means a lot to them.
          <br className="hidden sm:inline" />
          <span className="text-amber-400"> Donate what you can.</span>
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you contribute a single warm lunch or sponsor an entire classroom, 100% of your tax-deductible gift empowers human dignity.
        </p>

        {/* Interactive Quick Giving Console */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 max-w-2xl mx-auto shadow-2xl"
        >
          {/* Frequency Switcher */}
          <div className="flex items-center justify-center gap-2 mb-6 p-1 bg-black/20 rounded-xl max-w-xs mx-auto">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                frequency === 'one-time'
                  ? 'bg-white text-[#0b3839] shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                frequency === 'monthly'
                  ? 'bg-amber-400 text-stone-900 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Monthly Sustainer
            </button>
          </div>

          {/* Amount Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount('');
                }}
                className={`py-3 px-4 rounded-xl text-base font-bold transition-all cursor-pointer ${
                  selectedAmount === amt && !customAmount
                    ? 'bg-amber-400 text-stone-950 ring-2 ring-amber-300 shadow-md'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            <div className="relative w-full sm:flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-bold">
                $
              </span>
              <input
                type="text"
                placeholder="Other amount (USD)"
                value={customAmount}
                onChange={handleCustomChange}
                className="w-full pl-8 pr-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-semibold"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Donate ${customAmount || selectedAmount}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Micro trust note */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-stone-300">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Eligible for employer matching gift programs & 501(c)(3) tax receipt</span>
          </div>
        </form>
      </div>
    </section>
  );
};
