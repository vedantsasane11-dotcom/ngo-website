import React from 'react';
import { X, Heart, MapPin, Users, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Cause } from '../types.ts';

interface CauseModalProps {
  isOpen: boolean;
  onClose: () => void;
  cause: Cause | null;
  onDonate: (cause: Cause) => void;
}

export const CauseModal: React.FC<CauseModalProps> = ({
  isOpen,
  onClose,
  cause,
  onDonate,
}) => {
  if (!isOpen || !cause) return null;

  const percentage = Math.min(
    100,
    Math.round((cause.raised / cause.goal) * 1000) / 10
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cause Hero Image */}
        <div className="relative aspect-[16/9] bg-stone-900">
          <img
            src={cause.image}
            alt={cause.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close cause details"
            className="absolute top-4 right-4 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-[#0b3839]">
            {cause.categoryLabel}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>{cause.location}</span>
            <span>·</span>
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>{cause.donorsCount} Active Donors</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 leading-snug">
            {cause.title}
          </h2>

          {/* Progress Card */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 mb-6">
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-stone-600">Fundraising Milestone</span>
              <span className="text-amber-600 tabular-nums">{percentage}% Complete</span>
            </div>
            <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-stone-700">
              <div>
                <span className="text-stone-400 block text-[11px]">Raised</span>
                <span className="font-bold text-stone-900 text-base">
                  ${cause.raised.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-stone-400 block text-[11px]">Goal Needed</span>
                <span className="font-bold text-stone-900 text-base">
                  ${cause.goal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Full Narrative */}
          <div className="space-y-4 text-stone-600 text-sm leading-relaxed mb-6">
            <p>{cause.description}</p>
            <p>{cause.fullStory}</p>
          </div>

          {/* Impact Metrics List */}
          <div className="border-t border-stone-100 pt-5 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              Direct Measurable Outcomes:
            </h4>
            <div className="space-y-2">
              {cause.impactMetrics.map((metric, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
            <button
              onClick={() => {
                onClose();
                onDonate(cause);
              }}
              className="flex-1 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate To This Cause</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3.5 border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

          <div className="mt-3 text-center flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Eligible for instant IRS 501(c)(3) tax receipt</span>
          </div>
        </div>
      </div>
    </div>
  );
};
