import React from 'react';
import { X, Heart, ShieldCheck, Award, CheckCircle2, FileText } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onDonateClick,
}) => {
  if (!isOpen) return null;

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
        {/* Header */}
        <div className="bg-[#0b3839] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close about modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-stone-200 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Institutional Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            About {NGO_INFO.name} Foundation
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-lg">
            Eighteen years of unbroken dedication to children and underserved families across 18 countries.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Our Founding Conviction
            </h3>
            <p>
              Founded in 2008 by a coalition of educators, pediatricians, and community organizers, {NGO_INFO.name} was established on a radical standard: that aid should not merely alleviate immediate hardship, but establish durable infrastructure that enables communities to achieve permanent self-reliance.
            </p>
          </div>

          {/* Financial Transparency Breakdown */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Financial Stewardship & Transparency</span>
              </h4>
              <span className="text-xs font-semibold text-emerald-700">FY2025 Audited</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span>89.2% Direct Field Programs & Community Delivery</span>
                  <span className="font-bold">89.2%</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full w-[89.2%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span>6.8% Administrative & Governance Oversight</span>
                  <span className="font-bold">6.8%</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[6.8%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span>4.0% Donor Care & Public Accountability Reports</span>
                  <span className="font-bold">4.0%</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-stone-400 rounded-full w-[4.0%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Four Core Commitments */}
          <div>
            <h3 className="text-lg font-bold text-stone-900 mb-3">
              Our 4 Pillars of Intervention
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block mb-1">
                  01. Educational Sanctuaries
                </span>
                Modular solar-powered schoolhouses, textbooks, STEM kits, and accredited educator stipends.
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block mb-1">
                  02. Water Sovereignty
                </span>
                Deep-drilled solar boreholes with reverse-osmosis filtration maintained by local committees.
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block mb-1">
                  03. Daily Childhood Nourishment
                </span>
                15,000+ warm, locally-sourced meals delivered daily to keep children active and engaged.
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block mb-1">
                  04. Rapid Emergency Aid
                </span>
                All-terrain medical mobile clinics and seasonal winter supplies for displaced settlements.
              </div>
            </div>
          </div>

          {/* Legal and Governance Credentials */}
          <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Registered 501(c)(3) Nonprofit (EIN: 84-2938102)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-stone-400" />
              <button
                onClick={() => alert('Download FY2025 Audited 990 tax return')}
                className="text-stone-700 font-semibold hover:underline cursor-pointer"
              >
                Download Form 990
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
            <button
              onClick={() => {
                onClose();
                onDonateClick();
              }}
              className="flex-1 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Support Our Mission</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
