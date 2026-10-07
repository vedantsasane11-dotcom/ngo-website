import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ImpactStats } from './components/ImpactStats.tsx';
import { FeaturedCauses } from './components/FeaturedCauses.tsx';
import { ImpactCalculator } from './components/ImpactCalculator.tsx';
import { ActivityGallery } from './components/ActivityGallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { UpcomingEvents } from './components/UpcomingEvents.tsx';
import { DonationBanner } from './components/DonationBanner.tsx';
import { LatestNews } from './components/LatestNews.tsx';
import { Footer } from './components/Footer.tsx';

import { DonationModal } from './components/DonationModal.tsx';
import { VolunteerModal } from './components/VolunteerModal.tsx';
import { EventRsvpModal } from './components/EventRsvpModal.tsx';
import { CauseModal } from './components/CauseModal.tsx';
import { ArticleModal } from './components/ArticleModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { AboutModal } from './components/AboutModal.tsx';

import { Cause, NGOEvent, NewsArticle } from './types.ts';

export default function App() {
  // Modal states
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [selectedCauseForDonation, setSelectedCauseForDonation] = useState<Cause | null>(null);
  const [donationAmount, setDonationAmount] = useState<number>(50);

  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<NGOEvent | null>(null);
  const [viewingCause, setViewingCause] = useState<Cause | null>(null);
  const [viewingArticle, setViewingArticle] = useState<NewsArticle | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  // Active section tracking for navbar highlighting
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'causes', 'events', 'gallery', 'news', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers
  const handleOpenGeneralDonation = (amount = 50) => {
    setSelectedCauseForDonation(null);
    setDonationAmount(amount);
    setDonationModalOpen(true);
  };

  const handleDonateToCause = (cause: Cause) => {
    setSelectedCauseForDonation(cause);
    setDonationAmount(50);
    setDonationModalOpen(true);
  };

  const handleRsvpEvent = (event: NGOEvent) => {
    setSelectedEventForRsvp(event);
  };

  const handleViewCauseDetails = (cause: Cause) => {
    setViewingCause(cause);
  };

  const handleReadArticle = (article: NewsArticle) => {
    setViewingArticle(article);
  };

  const scrollToCauses = () => {
    const el = document.getElementById('causes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* 1. Top Contact & Information Bar */}
      <TopBar
        onVolunteerClick={() => setVolunteerModalOpen(true)}
        onDonateClick={() => handleOpenGeneralDonation(50)}
      />

      {/* 2. Main Sticky Navigation Bar */}
      <Navbar
        onDonateClick={() => handleOpenGeneralDonation(50)}
        onSearchClick={() => setSearchModalOpen(true)}
        onVolunteerClick={() => setVolunteerModalOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection
          onDonateClick={() => handleOpenGeneralDonation(50)}
          onExploreClick={scrollToCauses}
        />

        {/* 4. About & Mission Section */}
        <AboutSection
          onLearnMoreClick={() => setAboutModalOpen(true)}
          onDonateClick={() => handleOpenGeneralDonation(50)}
        />

        {/* 5. 4-Column Impact Statistics */}
        <ImpactStats />

        {/* 6. Featured Causes Cards */}
        <FeaturedCauses
          onDonateToCause={handleDonateToCause}
          onViewCauseDetails={handleViewCauseDetails}
        />

        {/* 7. Interactive Impact Calculator */}
        <ImpactCalculator
          onDonatePreset={(amount) => handleOpenGeneralDonation(amount)}
        />

        {/* 8. Field Activity Photo Gallery Strip */}
        <ActivityGallery />

        {/* 9. Testimonials & Voices of Trust */}
        <Testimonials />

        {/* 10. Upcoming Events with RSVP */}
        <UpcomingEvents onRsvpClick={handleRsvpEvent} />

        {/* 11. Full-Width Impact Donation Banner */}
        <DonationBanner
          onDonateWithAmount={(amount) => handleOpenGeneralDonation(amount)}
        />

        {/* 12. Latest News & Articles */}
        <LatestNews onReadArticle={handleReadArticle} />
      </main>

      {/* 13. Comprehensive Dark Green Footer */}
      <Footer
        onVolunteerClick={() => setVolunteerModalOpen(true)}
        onDonateClick={() => handleOpenGeneralDonation(50)}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        preselectedCause={selectedCauseForDonation}
        initialAmount={donationAmount}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <EventRsvpModal
        isOpen={!!selectedEventForRsvp}
        onClose={() => setSelectedEventForRsvp(null)}
        event={selectedEventForRsvp}
      />

      <CauseModal
        isOpen={!!viewingCause}
        onClose={() => setViewingCause(null)}
        cause={viewingCause}
        onDonate={(cause) => {
          setViewingCause(null);
          handleDonateToCause(cause);
        }}
      />

      <ArticleModal
        isOpen={!!viewingArticle}
        onClose={() => setViewingArticle(null)}
        article={viewingArticle}
        onDonateClick={() => {
          setViewingArticle(null);
          handleOpenGeneralDonation(50);
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectCause={(cause) => {
          setViewingCause(cause);
        }}
        onSelectArticle={(article) => {
          setViewingArticle(article);
        }}
        onSelectEvent={(event) => {
          setSelectedEventForRsvp(event);
        }}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onDonateClick={() => {
          setAboutModalOpen(false);
          handleOpenGeneralDonation(100);
        }}
      />
    </div>
  );
}
