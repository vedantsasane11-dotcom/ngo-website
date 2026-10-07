import React, { useState } from 'react';
import {
  X,
  Heart,
  CheckCircle2,
  CreditCard,
  Printer,
  Sparkles,
} from 'lucide-react';
import { CAUSES_DATA } from '../data/ngoData.ts';
import { Cause } from '../types.ts';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCause?: Cause | null;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  preselectedCause,
  initialAmount = 50,
}) => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCauseId, setSelectedCauseId] = useState<string>(
    preselectedCause?.id || 'all'
  );
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [dedicatedTo, setDedicatedTo] = useState('');
  const [showDedication, setShowDedication] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  if (!isOpen) return null;

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(parseInt(val, 10) || 50);
    }
  };

  const currentFinalAmount = customAmount ? parseInt(customAmount, 10) || 0 : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentFinalAmount || currentFinalAmount <= 0) return;
    if (!donorEmail) return;

    // Generate realistic receipt ID
    const rId = 'SK-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(rId);
    setIsCompleted(true);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleResetAndClose = () => {
    setIsCompleted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0b3839] text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-stone-200 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <Heart className="w-3.5 h-3.5 fill-amber-400" />
            <span>Secure 501(c)(3) Giving</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            {isCompleted ? 'Donation Confirmed' : 'Make Your Tax-Deductible Gift'}
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Every contribution directly funds field operations with audited transparency.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isCompleted ? (
            /* Success & Instant Receipt View */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-stone-900">
                  Thank You, {isAnonymous ? 'Generous Friend' : donorName || 'Donor'}!
                </h3>
                <p className="text-stone-600 text-sm mt-1 max-w-md mx-auto">
                  Your pledge of{' '}
                  <span className="font-bold text-stone-900">
                    ${currentFinalAmount} ({frequency})
                  </span>{' '}
                  has been successfully recorded. A formal tax receipt was sent to{' '}
                  <span className="font-medium text-stone-900">{donorEmail}</span>.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-left text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-stone-200 font-bold text-stone-900 text-sm">
                  <span>Official Donation Receipt</span>
                  <span className="text-amber-600 font-mono">{receiptNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date:</span>
                  <span className="font-medium text-stone-800">
                    {new Date().toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Designation:</span>
                  <span className="font-medium text-stone-800">
                    {selectedCauseId === 'all'
                      ? 'Where Most Needed'
                      : CAUSES_DATA.find((c) => c.id === selectedCauseId)?.title ||
                        'Where Most Needed'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Type:</span>
                  <span className="font-medium text-stone-800 capitalize">
                    {frequency} Contribution
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Charity ID:</span>
                  <span className="font-medium text-stone-800">
                    EIN 84-2938102 (501c3 Exempt)
                  </span>
                </div>
                {dedicatedTo && (
                  <div className="flex justify-between pt-1 border-t border-stone-200">
                    <span className="text-stone-500">Dedicated in honor of:</span>
                    <span className="font-medium text-stone-800">{dedicatedTo}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrintReceipt}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            /* Donation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Frequency Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      frequency === 'monthly'
                        ? 'bg-amber-400 text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-stone-900" />
                    <span>Monthly (Recommended)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      frequency === 'one-time'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    One-Time Gift
                  </button>
                </div>
              </div>

              {/* Amount Presets */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Select Amount (USD)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                        amount === amt && !customAmount
                          ? 'bg-[#0b3839] text-white ring-2 ring-emerald-500 shadow-xs'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    placeholder="Enter custom dollar amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full pl-8 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-semibold"
                  />
                </div>
              </div>

              {/* Cause Assignment */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Direct My Contribution To
                </label>
                <select
                  value={selectedCauseId}
                  onChange={(e) => setSelectedCauseId(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                >
                  <option value="all">Where It Is Most Urgently Needed</option>
                  {CAUSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Donor Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    Your Name (or leave blank if anonymous)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Roosevelt"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    Receipt Email <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Dedication & Anonymous Options */}
              <div className="space-y-2 pt-1 text-xs text-stone-600">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded text-amber-600 focus:ring-amber-500"
                    />
                    <span>Make my gift anonymous on public donor boards</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowDedication(!showDedication)}
                    className="text-amber-600 font-medium hover:underline cursor-pointer"
                  >
                    {showDedication ? '- Remove dedication' : '+ Dedicate this gift'}
                  </button>
                </div>

                {showDedication && (
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="In memory of / In honor of someone special"
                      value={dedicatedTo}
                      onChange={(e) => setDedicatedTo(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                )}
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#0b3839] bg-emerald-50/60 text-[#0b3839]'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      paymentMethod === 'paypal'
                        ? 'border-[#0b3839] bg-emerald-50/60 text-[#0b3839]'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      paymentMethod === 'applepay'
                        ? 'border-[#0b3839] bg-emerald-50/60 text-[#0b3839]'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>Apple / GPay</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 text-base font-bold text-white bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] rounded-2xl shadow-lg transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>
                  Confirm & Give ${currentFinalAmount} ({frequency})
                </span>
              </button>

              <div className="text-center text-[11px] text-stone-400">
                🔒 256-bit encrypted SSL transaction. 100% tax-deductible in accordance with US IRC 501(c)(3).
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
