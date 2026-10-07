import React, { useState } from 'react';
import { Camera, Eye, MapPin, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/ngoData.ts';
import { ActivityPhoto } from '../types.ts';

export const ActivityGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<ActivityPhoto | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0b3839] mb-2 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-500" />
              <span>Real Field Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Moments of Hope and Dignity
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-md">
            Unfiltered snapshots directly from our active field sanctuaries, classrooms, clinics, and clean water wells.
          </p>
        </div>

        {/* 6-Photo Grid Strip matching reference layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-stone-100 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-[0.92] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs font-semibold leading-tight line-clamp-1">
                  {item.title}
                </span>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-300">
                  <Eye className="w-3 h-3 text-amber-400" />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-stone-900">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-3 right-3 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-semibold text-amber-600 uppercase tracking-wider">
                  {activePhoto.category}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {activePhoto.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
