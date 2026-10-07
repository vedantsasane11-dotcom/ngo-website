import React, { useState } from 'react';
import { Search, X, Heart, ArrowRight, Calendar, Newspaper } from 'lucide-react';
import { CAUSES_DATA, NEWS_ARTICLES, UPCOMING_EVENTS } from '../data/ngoData.ts';
import { Cause, NewsArticle, NGOEvent } from '../types.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCause: (cause: Cause) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onSelectEvent: (event: NGOEvent) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCause,
  onSelectArticle,
  onSelectEvent,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingCauses = trimmed
    ? CAUSES_DATA.filter(
        (c) =>
          c.title.toLowerCase().includes(trimmed) ||
          c.description.toLowerCase().includes(trimmed) ||
          c.category.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingArticles = trimmed
    ? NEWS_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.excerpt.toLowerCase().includes(trimmed) ||
          a.category.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingEvents = trimmed
    ? UPCOMING_EVENTS.filter(
        (e) =>
          e.title.toLowerCase().includes(trimmed) ||
          e.location.toLowerCase().includes(trimmed) ||
          e.description.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults =
    matchingCauses.length + matchingArticles.length + matchingEvents.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search causes, articles, events, or programs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base text-stone-900 placeholder-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {!trimmed && (
            <div className="text-center py-8">
              <div className="text-stone-400 text-sm mb-3">
                Try searching for keywords like:
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {['Education', 'Water', 'Nutrition', 'Children', 'Clothing Drive', 'Gala'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {trimmed && totalResults === 0 && (
            <div className="text-center py-10 text-stone-500 text-sm">
              No results found for &ldquo;{query}&rdquo;. Try another term.
            </div>
          )}

          {/* Causes matches */}
          {matchingCauses.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0b3839] mb-3 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-amber-500" />
                <span>Causes & Campaigns ({matchingCauses.length})</span>
              </div>
              <div className="space-y-2">
                {matchingCauses.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onClose();
                      onSelectCause(c);
                    }}
                    className="p-3 bg-stone-50 hover:bg-emerald-50/60 rounded-xl border border-stone-200/80 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-900">
                        {c.title}
                      </div>
                      <div className="text-xs text-stone-500 line-clamp-1">
                        {c.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events matches */}
          {matchingEvents.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0b3839] mb-3 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>Upcoming Events ({matchingEvents.length})</span>
              </div>
              <div className="space-y-2">
                {matchingEvents.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => {
                      onClose();
                      onSelectEvent(e);
                    }}
                    className="p-3 bg-stone-50 hover:bg-amber-50/60 rounded-xl border border-stone-200/80 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-900">
                        {e.title}
                      </div>
                      <div className="text-xs text-stone-500">
                        {e.date} · {e.location}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles matches */}
          {matchingArticles.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0b3839] mb-3 flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5 text-amber-500" />
                <span>Field Reports ({matchingArticles.length})</span>
              </div>
              <div className="space-y-2">
                {matchingArticles.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => {
                      onClose();
                      onSelectArticle(a);
                    }}
                    className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200/80 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-900">
                        {a.title}
                      </div>
                      <div className="text-xs text-stone-500 line-clamp-1">
                        {a.excerpt}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
