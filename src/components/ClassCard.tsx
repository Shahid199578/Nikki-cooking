import React from 'react';
import { CookingClass } from '../types';

interface ClassCardProps {
  cookingClass: CookingClass;
  onBookNow: (classId: string) => void;
  onViewDetails: (cookingClass: CookingClass) => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({ cookingClass, onBookNow, onViewDetails }) => {
  const isHorizontalLayout = cookingClass.featured;

  return (
    <div
      className={`${cookingClass.colSpan || 'md:col-span-4'} group relative overflow-hidden bg-[#F3EDE6] border border-[#83746B]/10 rounded-2xl card-hover flex flex-col ${
        isHorizontalLayout ? 'md:flex-row' : ''
      } shadow-xs hover:shadow-md transition-all duration-300`}
    >
      {/* Image container */}
      <div
        className={`${
          isHorizontalLayout ? 'md:w-1/2 h-72 md:h-full' : 'h-64'
        } relative overflow-hidden bg-[#5D4037]/10`}
      >
        <img
          src={cookingClass.image}
          alt={cookingClass.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#5D4037] text-white px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider shadow-sm">
            {cookingClass.badgeText}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-[#FDFBF7]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#D97706] border border-[#D97706]/20">
          {cookingClass.seatsLeft} seats left
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`${
          isHorizontalLayout ? 'md:w-1/2 p-8 md:p-10' : 'p-8'
        } flex flex-col justify-between flex-1`}
      >
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#D97706]">
            <span className="material-symbols-outlined text-base">schedule</span>
            <span className="font-semibold text-xs tracking-wider uppercase">{cookingClass.duration}</span>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-[#83746B] font-medium">{cookingClass.level}</span>
          </div>

          <h3
            onClick={() => onViewDetails(cookingClass)}
            className="font-serif text-2xl md:text-3xl text-[#5D4037] mb-3 hover:text-[#D97706] transition-colors cursor-pointer"
          >
            {cookingClass.title}
          </h3>

          <p className="text-[#83746B] text-sm leading-relaxed mb-6">
            {cookingClass.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#83746B]/10 mt-auto">
          <div>
            <span className="text-[#D97706] font-bold text-2xl">₹{cookingClass.price.toLocaleString('en-IN')}</span>
            <span className="text-xs text-[#83746B] block font-medium">per attendee</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(cookingClass)}
              className="px-3.5 py-2.5 rounded-xl border border-[#83746B]/30 text-[#5D4037] hover:bg-[#FDFBF7] transition-all text-xs font-semibold uppercase tracking-wider"
              title="View Syllabus & Info"
            >
              Info
            </button>
            <button
              onClick={() => onBookNow(cookingClass.id)}
              className="bg-[#D97706] text-white px-6 py-2.5 rounded-xl hover:bg-opacity-90 transition-all text-xs font-semibold uppercase tracking-wider shadow-sm active:scale-95 cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
