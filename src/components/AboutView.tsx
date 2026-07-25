import React from 'react';

interface AboutViewProps {
  onExploreClasses: () => void;
  onContactClick: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExploreClasses, onContactClick }) => {
  return (
    <div className="space-y-20 pb-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#F9F6F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase font-semibold text-[#8d4b00] tracking-widest mb-3 block">
              Meet Nikki
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#3E2723] font-bold mb-6 leading-tight">
              From Home Kitchen to Master Baker
            </h1>
            <p className="text-[#77574d] text-base md:text-lg leading-relaxed mb-8">
              The journey of a thousand loaves began in a small apartment kitchen in Ghaziabad. What started as a search for the perfect crust became a lifelong mission to share the soulful art and rigorous science of baking.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onExploreClasses}
                className="bg-[#8d4b00] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-sm cursor-pointer"
              >
                Explore Workshops
              </button>
              <button
                onClick={onContactClick}
                className="border border-[#77574d]/30 text-[#3E2723] px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest hover:bg-[#F2E8D5] transition-all cursor-pointer"
              >
                Contact Studio
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F2E8D5] rounded-2xl rotate-2 -z-10 transition-transform group-hover:rotate-1" />
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-[#77574d]/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBad07Epu4ur4iiCnbsAQUWJIAmfGcg4RT7vS_c43fUQxFCYhkwqSO6SsJJaXpaqnSHMXWcWa3Z1vV197YCw0lpsaHG61Jkd_EoJWP16YMHQcFyeQ6iXZxDOeM9Cwk6Bdz54f9rsomnxr_t8ajacf6iZi56fMIllT-lvnv7Qyoqbbfu2nvyMJoqoWCda8VEUolnLoAN8X2AgWa-v7JzD5M2TYlxcyEPUg771nRs6TaNrbzEzaYX-NTy0v_SY1MqFSKFkpcGNvtOFmU"
                alt="Chef Nikki smiling warmly with freshly baked sourdough bread"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Science & Heritage Bento Section */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Science of Baking */}
          <div className="md:col-span-7 bg-[#F2E8D5] p-8 sm:p-12 rounded-2xl border border-[#77574d]/10 flex flex-col justify-center min-h-[380px]">
            <span className="material-symbols-outlined text-[#8d4b00] text-4xl mb-4">science</span>
            <h2 className="font-serif text-3xl text-[#3E2723] font-bold mb-4">
              The Science of Baking
            </h2>
            <p className="text-[#77574d] text-base leading-relaxed mb-6">
              Beyond recipes lies the magic of chemistry. We explore the Maillard reaction, the intricate lattice of gluten, and the microbial life of wild starters. Nikki believes that when you understand the 'why' behind the dough, you master the craft.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#F9F6F0] px-4 py-1.5 rounded-full text-xs font-semibold text-[#8d4b00]">
                HYDRATION
              </span>
              <span className="bg-[#F9F6F0] px-4 py-1.5 rounded-full text-xs font-semibold text-[#8d4b00]">
                FERMENTATION
              </span>
              <span className="bg-[#F9F6F0] px-4 py-1.5 rounded-full text-xs font-semibold text-[#8d4b00]">
                ENZYMES
              </span>
            </div>
          </div>

          {/* Scoring Image */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden min-h-[380px] shadow-sm border border-[#77574d]/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCczQXNHsjGThAM8zO2qVRzjM7s0TAV1llbXBGU8_yNKCnhGTVXBB8Ar5rpgYGOmFCZFx9A04pYysCQPqHwGBbk-oKAQnH6EBX80ErZzfmaTWu3TOadkQhy1F3e27eqp9y872okMmnSgrk0hk-Tl6Ehm1doZiQqUFQagMu56s4yRp31FzwCRAQhVKdhVF-ZMqzddJiOOCIKY_UYKD4BGKZwIeqxyn29fHno2r_gXLFppwIjidbSrWpyxY7XBe78xRr8hSVEfa7b0Ks"
              alt="Scoring sourdough dough with lame blade"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Heritage Image */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden min-h-[380px] shadow-sm border border-[#77574d]/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUhMMIshTDG4JtyGJjVCTPXb7qetJtry-4ViI8AV0pr521FSc1EJpsTVmA5mX4WC2QP7VvEzvI8Qgq2Kv_rufaKCzczPVTmGdsO6BY5CHYnKJeZ6jHHG9WbQ2GKKtrnIbHkt5siAfxW-vQYIvBlCJv-xXofqh1k5HhRwbi3zu5scH7rtYtypDuC2d3ny5mpHFbQKs2lHbt-_DLd7J71BZfPRpt90DKU-Lr5G3xhY79EL-_L78SgIidfXmDbL-6xDt2Zx2kTOOBADw"
              alt="Heritage grains and handwritten recipes"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Authentic Heritage Box */}
          <div className="md:col-span-7 bg-[#3E2723] text-[#F2E8D5] p-8 sm:p-12 rounded-2xl border border-[#8d4b00]/20 flex flex-col justify-center min-h-[380px]">
            <h2 className="font-serif text-3xl text-[#F59E0B] font-bold mb-4">
              Authentic Heritage
            </h2>
            <p className="text-[#F2E8D5]/90 text-base leading-relaxed">
              Our methods are rooted in the timeless traditions of slow-proofing and hand-kneading. Nikki draws inspiration from heirloom grains and family secrets, blending ancient wisdom with modern precision to create breads that tell a story with every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-[#F9F6F0] px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#3E2723] font-bold mb-3">
            A Decade of Teaching
          </h2>
          <p className="text-[#77574d] max-w-xl mx-auto text-sm md:text-base">
            From a single student to a thriving community in Ghaziabad, Nikki has shaped the culinary landscape one workshop at a time.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#77574d]/20" />

          <div className="space-y-12">
            {/* 2014 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 text-center md:text-right order-2 md:order-1 mt-4 md:mt-0">
                <h3 className="font-serif text-2xl font-bold text-[#8d4b00] mb-2">2014</h3>
                <p className="text-[#77574d] text-sm leading-relaxed">
                  The First Class. Nikki opens her home kitchen in Ghaziabad to three curious neighbors, teaching the basics of rustic bread.
                </p>
              </div>
              <div className="z-10 bg-[#F59E0B] w-5 h-5 rounded-full border-4 border-white shadow-md order-1 md:order-2" />
              <div className="md:w-5/12 order-3" />
            </div>

            {/* 2017 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 order-1" />
              <div className="z-10 bg-[#F59E0B] w-5 h-5 rounded-full border-4 border-white shadow-md order-2" />
              <div className="md:w-5/12 text-center md:text-left order-3 mt-4 md:mt-0">
                <h3 className="font-serif text-2xl font-bold text-[#8d4b00] mb-2">2017</h3>
                <p className="text-[#77574d] text-sm leading-relaxed">
                  The Dedicated Studio. Expanding into a professional studio space, introducing advanced Patisserie and French pastry certifications.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 text-center md:text-right order-2 md:order-1 mt-4 md:mt-0">
                <h3 className="font-serif text-2xl font-bold text-[#8d4b00] mb-2">2021</h3>
                <p className="text-[#77574d] text-sm leading-relaxed">
                  A Master's Legacy. Recognized as Ghaziabad's premier baking educator, reaching over 2,000 graduates across India.
                </p>
              </div>
              <div className="z-10 bg-[#F59E0B] w-5 h-5 rounded-full border-4 border-white shadow-md order-1 md:order-2" />
              <div className="md:w-5/12 order-3" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto">
        <div className="bg-[#3E2723] p-10 md:p-16 rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Begin Your Own Journey
            </h2>
            <p className="text-sm sm:text-base text-[#F2E8D5]/80 max-w-lg mx-auto mb-8">
              Join a community where every loaf is a lesson and every student is a master in the making.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={onExploreClasses}
                className="bg-[#F59E0B] text-[#3E2723] px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md cursor-pointer"
              >
                Explore Classes
              </button>
              <button
                onClick={onContactClick}
                className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                Contact Nikki
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
