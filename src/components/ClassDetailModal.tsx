import React from 'react';
import { CookingClass } from '../types';

interface ClassDetailModalProps {
  cookingClass: CookingClass | null;
  onClose: () => void;
  onBook: (classId: string) => void;
}

export const ClassDetailModal: React.FC<ClassDetailModalProps> = ({ cookingClass, onClose, onBook }) => {
  if (!cookingClass) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FDFBF7] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#83746B]/20 shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#5D4037]/80 text-white flex items-center justify-center hover:bg-[#5D4037] transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Hero image banner */}
        <div className="relative h-64 w-full">
          <img
            src={cookingClass.image}
            alt={cookingClass.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5D4037]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-[#D97706] text-[#5D4037] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
              {cookingClass.category} • {cookingClass.level}
            </span>
            <h2 className="font-serif text-3xl text-white font-semibold">
              {cookingClass.title}
            </h2>
          </div>
        </div>

        {/* Modal content */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F3EDE6] rounded-xl border border-[#83746B]/10">
            <div className="flex items-center gap-2 text-[#D97706]">
              <span className="material-symbols-outlined">schedule</span>
              <span className="font-semibold text-sm">{cookingClass.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-[#D97706]">
              <span className="material-symbols-outlined">person</span>
              <span className="font-semibold text-sm">Instructor: {cookingClass.instructor}</span>
            </div>
            <div className="text-xl font-bold text-[#D97706]">
              ₹{cookingClass.price.toLocaleString('en-IN')}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#5D4037] font-semibold mb-2">About This Workshop</h3>
            <p className="text-[#83746B] text-sm leading-relaxed">
              {cookingClass.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-serif text-lg text-[#5D4037] font-semibold mb-3">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {cookingClass.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#5D4037] bg-[#FDF8F0] p-2.5 rounded-lg border border-[#D97706]/10">
                  <span className="material-symbols-outlined text-[#D97706] text-base">check_circle</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div>
            <h3 className="font-serif text-lg text-[#5D4037] font-semibold mb-3">Workshop Syllabus</h3>
            <ul className="space-y-2">
              {cookingClass.syllabus.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#83746B]">
                  <span className="w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Batches */}
          <div>
            <h3 className="font-serif text-lg text-[#5D4037] font-semibold mb-2">Available Batch Timings</h3>
            <div className="space-y-2">
              {cookingClass.batchOptions.map((batch, bIdx) => (
                <div key={bIdx} className="p-3 bg-[#F3EDE6]/60 rounded-lg text-xs font-medium text-[#5D4037] flex items-center justify-between">
                  <span>{batch}</span>
                  <span className="text-[#D97706] font-semibold">Small Group (Max 8)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#83746B]/15 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-[#83746B]/30 text-[#5D4037] font-semibold text-xs uppercase tracking-wider hover:bg-[#F3EDE6]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(cookingClass.id);
              }}
              className="bg-[#D97706] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-opacity-95 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">confirmation_number</span>
              Reserve My Seat (₹{cookingClass.price.toLocaleString('en-IN')})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
