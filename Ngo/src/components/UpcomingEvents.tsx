import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/ngoData.ts';
import { NGOEvent } from '../types.ts';

interface UpcomingEventsProps {
  onRsvpClick: (event: NGOEvent) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onRsvpClick }) => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0b3839] mb-2 flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            <span>Community Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Join Our Upcoming Events
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Stand shoulder-to-shoulder with our team at charity drives, benefit runs, and annual fundraising galas.
          </p>
        </div>

        {/* 3-Card Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Event Image with Date Badge */}
              <div className="relative aspect-[16/10] bg-stone-900 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark teal floating date badge on top left */}
                <div className="absolute top-3 left-3 bg-[#0b3839] text-white rounded-xl px-3 py-1.5 text-center shadow-md border border-white/20">
                  <span className="block text-[10px] font-bold tracking-wider uppercase text-amber-400">
                    {event.month}
                  </span>
                  <span className="block text-lg font-extrabold leading-none">
                    {event.day}
                  </span>
                </div>

                {/* Event Category Tag */}
                <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {event.category}
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 group-hover:text-[#0b3839] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div>
                  {/* Meta Details */}
                  <div className="space-y-2 py-3 border-t border-stone-100 text-xs text-stone-600 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-stone-500 font-medium">
                      {event.spotsLeft} seats remaining
                    </span>
                    <button
                      onClick={() => onRsvpClick(event)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#0b3839] hover:bg-[#12494a] rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Ticket className="w-3.5 h-3.5 text-amber-400" />
                      <span>RSVP Free</span>
                    </button>
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
