import React, { useState } from 'react';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Shield,
  ArrowUp,
} from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface FooterProps {
  onVolunteerClick: () => void;
  onDonateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onVolunteerClick,
  onDonateClick,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#082829] text-stone-300 pt-16 pb-12 border-t border-[#124143]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-900 shadow-sm">
                <Heart className="w-5 h-5 fill-stone-900 text-stone-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  {NGO_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400">
                  Humanitarian Aid
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed mb-6 max-w-sm">
              Dedicated to alleviating poverty and nurturing young potential through education, clean drinking water, daily nutrition, and emergency community aid.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400 bg-white/5 px-3 py-2 rounded-lg border border-white/10 mb-6">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{NGO_INFO.registeredId} · Platinum Certified</span>
            </div>

            <button
              onClick={onDonateClick}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Make A Contribution
            </button>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Our Mission
                </a>
              </li>
              <li>
                <a href="#causes" className="hover:text-amber-400 transition-colors">
                  Featured Causes
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-400 transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-amber-400 transition-colors">
                  Field Dispatches
                </a>
              </li>
              <li>
                <button
                  onClick={onVolunteerClick}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Join Volunteer Corps
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (2.5 cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Address
            </div>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{NGO_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${NGO_INFO.phone}`} className="hover:text-white transition-colors">
                  {NGO_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${NGO_INFO.email}`} className="hover:text-white transition-colors">
                  {NGO_INFO.email}
                </a>
              </li>
              <li className="pt-2 text-xs text-stone-400">
                Mon - Fri: 8:00 AM - 6:00 PM EST<br />
                Emergency Humanitarian Hotline: 24/7
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Newsletter
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Subscribe to receive verified field dispatches, annual financial reports, and emergency relief updates.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 p-4 rounded-xl text-emerald-200 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold block text-white">Thank you for subscribing!</span>
                  You will receive our monthly humanitarian brief.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-amber-500 hover:bg-amber-400 text-stone-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[11px] text-stone-400">
                  We respect your privacy. No spam, unsubscribe anytime.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} {NGO_INFO.name} Humanitarian Foundation. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-400">Donor Privacy Code</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">501(c)(3) Audited Returns</span>
            <span className="text-stone-600">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
