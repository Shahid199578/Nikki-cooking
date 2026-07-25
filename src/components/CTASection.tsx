import React from 'react';

interface CTASectionProps {
  onViewSchedules: () => void;
  onGiftClass: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onViewSchedules, onGiftClass }) => {
  return (
    <section className="py-24 px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto bg-[#5D4037] p-10 sm:p-16 rounded-[2.5rem] text-[#F3EDE6] relative overflow-hidden shadow-2xl border border-[#D97706]/30">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#D97706] bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
            Join Our Kitchen Studio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Flourish?
          </h2>
          <p className="text-sm sm:text-base mb-10 opacity-90 text-[#FDF8F0] leading-relaxed">
            Join our community of passionate bakers and home cooks. New classes announced every first Monday of the month.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onViewSchedules}
              className="bg-[#D97706] text-[#5D4037] font-bold px-8 py-4 rounded-xl hover:bg-white transition-all text-xs uppercase tracking-widest shadow-md cursor-pointer"
            >
              View All Schedules
            </button>
            <button
              onClick={onGiftClass}
              className="border border-[#F3EDE6]/40 text-[#F3EDE6] font-semibold px-8 py-4 rounded-xl hover:bg-[#F3EDE6]/10 transition-all text-xs uppercase tracking-widest backdrop-blur-xs cursor-pointer"
            >
              Gift a Class
            </button>
          </div>
        </div>

        {/* Ambient glow decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#D97706]/15 rounded-full -mr-36 -mt-36 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D97706]/20 rounded-full -ml-36 -mb-36 blur-[90px] pointer-events-none" />
      </div>
    </section>
  );
};
