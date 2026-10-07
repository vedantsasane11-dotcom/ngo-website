import React, { useState } from 'react';
import { X, Heart, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData.ts';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('education');
  const [availability, setAvailability] = useState('weekends');
  const [skills, setSkills] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Global Movement</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            {submitted ? 'Welcome to SoliKind!' : 'Volunteer Application'}
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Lend your hands, professional skills, or compassionate presence to communities in need.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-stone-900">
                  Thank You, {name}!
                </h3>
                <p className="text-stone-600 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                  Your volunteer profile has been submitted to our field deployment coordinator. Check your inbox at <span className="font-semibold text-stone-900">{email}</span> for the upcoming virtual welcome orientation date.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-left text-stone-600 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-stone-900">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Next Orientation: Thursday at 6:00 PM EST</span>
                </div>
                <div>Focus Area: {interest.toUpperCase()} initiative</div>
                <div>Questions? Call our coordinator directly at {NGO_INFO.phone}</div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-[#0b3839] hover:bg-[#12494a] text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Full Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Email <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="education">Education & Youth Tutoring</option>
                  <option value="nutrition">Community Kitchen & Meal Packing</option>
                  <option value="water">Clean Water Logistics & Field Hand</option>
                  <option value="healthcare">Medical Outreach & Nursing Aid</option>
                  <option value="events">Events, Drives & Fundraising</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Availability
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['weekends', 'weekdays', 'flexible'].map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setAvailability(av)}
                      className={`py-2 text-xs font-semibold capitalize rounded-lg border transition-colors cursor-pointer ${
                        availability === av
                          ? 'border-[#0b3839] bg-emerald-50 text-[#0b3839]'
                          : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                  Relevant Experience or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your background or language skills..."
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
