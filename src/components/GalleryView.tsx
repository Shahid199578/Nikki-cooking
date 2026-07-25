import React, { useState } from 'react';
import { GalleryItem } from '../types';

interface GalleryViewProps {
  items: GalleryItem[];
}

export const GalleryView: React.FC<GalleryViewProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Sourdough', 'Pastry', 'Process', 'Class Moments'];

  const filteredItems = items.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-6 md:px-16 animate-fadeIn">
      {/* Header */}
      <div className="text-center pt-12 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-semibold text-[#D97706] tracking-widest block mb-2">
          Visual Memories
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#5D4037] font-bold mb-4">
          Studio Gallery
        </h1>
        <p className="text-[#83746B] text-sm md:text-base leading-relaxed">
          Moments captured during our hands-on workshops — from golden sourdough crusts to delicate sugar art.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#5D4037] text-white shadow-sm scale-105'
                : 'bg-[#F3EDE6] text-[#83746B] hover:bg-[#f7e5d9] hover:text-[#5D4037]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className="group relative rounded-2xl overflow-hidden bg-[#F3EDE6] border border-[#83746B]/10 aspect-square cursor-pointer card-hover shadow-xs"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5D4037]/90 via-[#5D4037]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] mb-1">
                {item.category}
              </span>
              <h4 className="font-serif text-lg font-bold mb-1">{item.title}</h4>
              <p className="text-xs text-[#F3EDE6]/80 line-clamp-2">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FDFBF7] rounded-2xl max-w-3xl w-full overflow-hidden border border-[#83746B]/20 relative">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#5D4037] text-white flex items-center justify-center hover:bg-[#D97706] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="h-[450px] w-full bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-[#FDFBF7]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] bg-[#F3EDE6] px-2.5 py-1 rounded">
                {lightboxItem.category}
              </span>
              <h3 className="font-serif text-2xl text-[#5D4037] font-bold mt-2 mb-1">
                {lightboxItem.title}
              </h3>
              <p className="text-sm text-[#83746B]">{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
