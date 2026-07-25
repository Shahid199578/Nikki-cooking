import React from 'react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <span className="text-xs uppercase font-semibold tracking-widest text-[#D97706] block mb-2">
          Student Voices
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#5D4037] font-bold">
          Loved by Home Bakers & Chefs
        </h2>
        <p className="text-[#83746B] text-sm md:text-base mt-2">
          Hear from graduates who transformed their baking confidence in our Ghaziabad studio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-[#F3EDE6] p-8 rounded-2xl border border-[#83746B]/10 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex gap-1 text-[#D97706] mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1 text-lg">
                    star
                  </span>
                ))}
              </div>
              <p className="text-[#5D4037] text-sm leading-relaxed italic mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#83746B]/10">
              <span className="font-serif text-lg font-bold text-[#5D4037] block">
                {rev.author}
              </span>
              <span className="text-xs text-[#D97706] font-semibold block">
                {rev.role} • {rev.className}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
