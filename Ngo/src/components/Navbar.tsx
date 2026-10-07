import React, { useState } from 'react';
import { Heart, Search, Menu, X, Sparkles } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface NavbarProps {
  onDonateClick: () => void;
  onSearchClick: () => void;
  onVolunteerClick: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDonateClick,
  onSearchClick,
  onVolunteerClick,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Causes', href: '#causes' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Stories', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark & Icon */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0b3839] flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#0b3839]">
                {NGO_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-500">
                Humanitarian Aid
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#0b3839] font-semibold'
                      : 'text-stone-600 hover:text-[#0b3839]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f97316] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onSearchClick}
              aria-label="Search causes and articles"
              className="p-2.5 text-stone-600 hover:text-[#0b3839] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onVolunteerClick}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0b3839] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Get Involved</span>
            </button>

            <button
              onClick={onDonateClick}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] rounded-lg shadow-sm hover:shadow transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu & Donate Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onDonateClick}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#f97316] rounded-lg shadow-sm"
            >
              Donate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-stone-700 hover:text-[#0b3839] hover:bg-stone-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 pb-4 border-b border-stone-100">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 px-3 text-sm font-medium text-stone-700 hover:text-[#0b3839] hover:bg-stone-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSearchClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Search Causes & Stories</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onVolunteerClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-[#0b3839] bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Join as Volunteer</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDonateClick();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#f97316] rounded-lg shadow-sm"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
