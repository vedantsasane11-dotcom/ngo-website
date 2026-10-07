import React from 'react';
import { Newspaper, Calendar, Clock, ArrowRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/ngoData.ts';
import { NewsArticle } from '../types.ts';

interface LatestNewsProps {
  onReadArticle: (article: NewsArticle) => void;
}

export const LatestNews: React.FC<LatestNewsProps> = ({ onReadArticle }) => {
  return (
    <section id="news" className="py-20 sm:py-28 bg-[#fbfbfa] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2 flex items-center justify-center gap-1.5">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Field Dispatches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 [text-wrap:balance]">
            Our Latest News and Articles
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Real stories of transformation, quarterly accountability updates, and insights from community leaders.
          </p>
        </div>

        {/* 3-Card Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group cursor-pointer"
              onClick={() => onReadArticle(article)}
            >
              {/* Article Image */}
              <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0b3839]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {article.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators (Zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {article.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 group-hover:text-[#0b3839] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    By {article.author}
                  </span>
                  <div className="text-xs font-bold text-[#f97316] group-hover:text-[#ea580c] flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
