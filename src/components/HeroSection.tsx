import React from 'react';

interface HeroSectionProps {
  onExploreClasses: () => void;
  onReadStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClasses, onReadStory }) => {
  return (
    <section className="relative min-h-[600px] md:min-h-[720px] flex items-center overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#5D4037]/30 z-10" />
        <img
          className="w-full h-full object-cover"
          alt="Master the Art of Home-Style Baking"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGYsm3MTuc120rFKgY5SEAdO7zElwttq84aTKS64zaPpKFPfkT0-Joc7HFTrZg45-VLUjqBTFpyeqb6QbOdVaNeciGueWpRXBY13cTG9-jhG4V7SIiNs-wmNvdrXVuqJyaMCXZzsPK4Lrxq9h0CQm_cE_hS8y74hFnyo266D8kTWx1GxUvJi0pfl-VKzWkPn1jXs_1Kf4jky393tC7PutJvNTymtaIuwVS4A1bPa-vdbzoOQ-vFywyBVI2iMdQCVqNLRWBiEAjU0E"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/10 via-[#FDFBF7]/80 to-[#FDFBF7] z-20" />
      </div>

      <div className="relative z-30 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <span className="inline-block bg-[#F3EDE6] text-[#D97706] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-[#D97706]/10 shadow-xs">
            EST. 2024 • BOUTIQUE BAKERY SCHOOL
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#5D4037] mb-6 leading-tight">
            Master the Art of <br />Home-Style Baking
          </h1>
          
          <p className="text-base sm:text-lg text-[#83746B] mb-10 max-w-lg leading-relaxed font-sans">
            Elevate your kitchen skills with intimate, professional-led classes designed for the passionate home baker. From sourdough secrets to delicate pastries.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onExploreClasses}
              className="bg-[#D97706] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:bg-opacity-95 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>View Classes</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <button
              onClick={onReadStory}
              className="bg-[#F3EDE6]/70 border border-[#83746B]/20 text-[#5D4037] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider backdrop-blur-sm hover:bg-[#F3EDE6] transition-all cursor-pointer"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

