import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Ticket, Clock, Download } from 'lucide-react';
import { NGOEvent } from '../types.ts';

interface EventRsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: NGOEvent | null;
}

export const EventRsvpModal: React.FC<EventRsvpModalProps> = ({
  isOpen,
  onClose,
  event,
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setTicketId('TKT-' + Math.floor(10000 + Math.random() * 90000));
    setConfirmed(true);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
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
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0b3839] text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-stone-200 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <Ticket className="w-3.5 h-3.5" />
            <span>Community Event Registration</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            {confirmed ? 'Registration Confirmed!' : event.title}
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Free admission · All community members and supporters welcome.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {confirmed ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-stone-900">
                  You are all set, {name}!
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  We reserved <span className="font-bold text-stone-900">{tickets} seat(s)</span> for you. A calendar invitation and entry QR pass were sent to <span className="font-semibold text-stone-900">{email}</span>.
                </p>
              </div>

              {/* Event Ticket Card */}
              <div className="bg-stone-50 border-2 border-dashed border-stone-300 rounded-2xl p-5 text-left text-xs space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200 font-bold text-stone-900">
                  <span>{event.title}</span>
                  <span className="text-amber-600 font-mono">{ticketId}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{event.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Calendar event (.ics) for "${event.title}" downloaded.`)}
                  className="flex-1 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Add to Calendar</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="flex-1 py-2.5 bg-[#0b3839] hover:bg-[#12494a] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-xs space-y-1 text-stone-700">
                <div className="flex items-center gap-2 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>{event.date} · {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Your Full Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Green"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Email Address <span className="text-amber-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="samuel@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Number of Attendees
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setTickets(num)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-colors cursor-pointer ${
                        tickets === num
                          ? 'border-[#0b3839] bg-emerald-50 text-[#0b3839]'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Ticket className="w-4 h-4" />
                <span>Confirm Free RSVP</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
