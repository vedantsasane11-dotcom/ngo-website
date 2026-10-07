import React from 'react';
import { Phone, MapPin, Mail, Award, Heart } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface TopBarProps {
  onVolunteerClick: () => void;
  onDonateClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onVolunteerClick }) => {
  return (
    <div className="bg-[#0b3839] text-stone-200 text-xs py-2 px-4 border-b border-[#12494a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Contact Information */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href={`tel:${NGO_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{NGO_INFO.phone}</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{NGO_INFO.address}</span>
          </div>

          <a
            href={`mailto:${NGO_INFO.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{NGO_INFO.email}</span>
          </a>
        </div>

        {/* Right: Trust badges & Volunteer prompt */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="hidden lg:inline-flex items-center gap-1 text-emerald-300">
            <Award className="w-3.5 h-3.5" />
            <span>{NGO_INFO.registeredId}</span>
          </span>

          <span className="hidden sm:inline-block text-stone-500">|</span>

          <button
            onClick={onVolunteerClick}
            className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-medium transition-colors cursor-pointer"
          >
            <Heart className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>Volunteer With Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
