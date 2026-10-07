import React from 'react';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';
import { NewsArticle } from '../types.ts';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: NewsArticle | null;
  onDonateClick: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  article,
  onDonateClick,
}) => {
  if (!isOpen || !article) return null;

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
        <div className="relative aspect-[16/9] bg-stone-900">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close article"
            className="absolute top-4 right-4 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-[#0b3839] text-white px-3 py-1 rounded-md text-xs font-bold">
            {article.category}
          </div>
        </div>

        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              {article.readTime}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-medium text-stone-700">
              <User className="w-3.5 h-3.5 text-stone-400" />
              {article.author}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 leading-tight">
            {article.title}
          </h2>

          <div className="text-base text-stone-700 leading-relaxed space-y-4 mb-8">
            <p className="font-medium text-stone-800 text-lg leading-relaxed">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p>
              Through generous donor partnerships, our field personnel guarantee that all intervention programs continue to be evaluated against strict quality benchmarks, ensuring measurable, lasting upliftment for local families.
            </p>
          </div>

          <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-emerald-950">
                Inspired by this report?
              </div>
              <div className="text-xs text-emerald-800">
                Help us expand these community programs today.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onDonateClick();
              }}
              className="px-5 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              Support This Mission
            </button>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-stone-100 mt-6">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Field Story</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
