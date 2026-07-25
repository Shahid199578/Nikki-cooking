import React, { useState } from 'react';

interface WhyChooseUsSectionProps {
  onReadStory?: () => void;
  onExploreClasses?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onReadStory, onExploreClasses }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      {/* Feature Bento Grid */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-semibold tracking-widest text-[#D97706] block mb-2">
            The Nikki Difference
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5D4037] font-bold mb-4">
            Why Learn with Nikki?
          </h2>
          <p className="text-[#83746B] max-w-2xl mx-auto text-base">
            Refined techniques meets the warmth of a home kitchen. We focus on the science of baking without losing the heart of the craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1: Professional Techniques */}
          <div className="md:col-span-2 bg-[#F3EDE6] rounded-2xl p-8 border border-[#83746B]/10 flex flex-col justify-between group cursor-pointer transition-all hover:shadow-lg">
            <div>
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-[#D97706] mb-6 shadow-xs">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <h3 className="font-serif text-2xl text-[#5D4037] font-bold mb-3">
                Professional Techniques
              </h3>
              <p className="text-[#83746B] text-sm md:text-base mb-8 leading-relaxed">
                Master the same methods used in high-end boulangeries, adapted for your home oven and environment.
              </p>
            </div>
            <div className="h-48 overflow-hidden rounded-xl border border-[#83746B]/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrn7jWzRWnbjoT-qF8VwvCbS6QGGpR4G8Bszddh3v8w576ij5mgFYFHJMHry-2ECokwvz7hpnZFAs85B5Fp7UWfwgKYCHDOiEKk7nmiHVzpsY63ZVPJQYx3U807a_8EEehwneWYwDHiLR9YiMN_diC3tOwOo8gFw6Ug39Bpy2FCHNCxFB7vii0nL-HLwV0ww-t1mzmDjEOY1uqDXM7cR2BRtUglKp0xU_HHZJorhQ5ilkC_6VanSaKkRc0HP3xhB_7ubTHX7mIoZM"
                alt="Professional techniques demonstration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Small Batch Learning */}
          <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#83746B]/10 transition-all hover:shadow-lg flex flex-col items-center text-center justify-center">
            <div className="bg-[#D97706]/10 w-16 h-16 rounded-full flex items-center justify-center text-[#D97706] mb-6">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-[#5D4037] font-bold mb-3">
              Small Batch Learning
            </h3>
            <p className="text-[#83746B] text-sm leading-relaxed">
              Max 6 students per session ensuring personalized attention and hands-on guidance for every knead.
            </p>
          </div>

          {/* Card 3: Premium Ingredients */}
          <div className="bg-white rounded-2xl p-8 border border-[#83746B]/10 transition-all hover:shadow-lg flex flex-col justify-end relative overflow-hidden group min-h-[260px]">
            <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbRCMNEaFb2_HqHn387gQKw7suvKOHJcmCCifujsWNbUgxzmhJw1UDwPaJ9NVcGn6AzUmY0VQFESbRE0HajY_FgVPcN8ErOEBEveAepvPCMVSrkh1WfjK9YpksXP4vOl7MwSPBmeSqVtGyHca3vQF2iqM9ViIqnySyBs-SgIkBdEHgPdQJzfdRqJAruYN4wrtEMVQp48w33HKIhZL7vlM33ohkkagWT1KGoaUJcRLYhQ6KWMVH50jMFOLGrxX7duZV1xb4jIAYcg"
                alt="Organic wheat and salt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#83746B]/10">
              <h3 className="font-serif text-xl text-[#5D4037] font-bold mb-2">
                Premium Ingredients
              </h3>
              <p className="text-[#83746B] text-xs leading-relaxed">
                We use only organic, stone-ground flours and heritage grains sourced from local mills.
              </p>
            </div>
          </div>

          {/* Card 4: Certificate Courses */}
          <div
            onClick={onExploreClasses}
            className="md:col-span-2 bg-[#5D4037] text-white rounded-2xl p-8 flex items-center gap-8 relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex-1 z-10">
              <span className="text-[#D97706] text-xs font-bold tracking-widest uppercase mb-3 block">
                Professional Growth
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-3">
                Certificate Courses
              </h3>
              <p className="text-[#F3EDE6]/80 text-sm mb-6 leading-relaxed">
                Complete our intensive 4-week bakery fundamental series and earn your Home-Style Bakery Certification.
              </p>
              <span className="inline-flex items-center gap-2 text-[#D97706] font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
            <div className="hidden lg:block w-1/3 h-full relative z-10">
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-lZbt-AyxdCJwvHGF68PaZpaWXHfHsz6cUeQxH9udcubaLcKV6VAPz3frbOx_54lq35i22lNptVo009c_bWV6oYM9Anxlw4b_Rwy-pSY8KR3u6O1uzQuQnSw_ZmDkNhrQLgQeBRkJUIbrC6cTGJ_h4d-EnpBWtJ_2Asu8TrBQx7DYx165y43xkSKe25NtAVBEN8RRn-jRqDvCXjcwvG_j3GyLHUJTO4kvp3USqV2HwafFUUIFg3uAIOw98FVWsYkJfUvc4zOT9m4"
                  alt="Bakery certificate preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 5: Meet Nikki */}
          <div className="md:col-span-2 bg-white rounded-2xl p-2 border border-[#83746B]/10 flex flex-col md:flex-row items-center overflow-hidden shadow-xs">
            <div className="w-full md:w-1/2 h-60 md:h-full min-h-[220px] overflow-hidden rounded-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCafduDrQ1gZ-CK9FYk2lNgsPsLxP_22tJep2crRQsOHBWWW_fE83Qs3GhSirHYpBKEiOLRWwCxOxMvyAua7yYI_AB-NFjhCHK4dDaJmwuT7pxoVfClSPRlX1ElxFYwiQAnR7ROr3CilwxDkgAckibeaqVqbRK-XkAGb0GpMS-iElHEdDI2wMa1iFJid84l4VSxfKvoa2d7ZfGpHQJ5ZI9fvluMzrCP1kfPFrBzpSLLdxdI65PI1THmpOg8R8yUJGGJ6bf8KXS1Rcc"
                alt="Portrait of Chef Nikki"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-[#5D4037] font-bold mb-3">
                Meet Nikki
              </h3>
              <p className="text-[#83746B] text-sm italic mb-6 leading-relaxed">
                "Baking is a conversation between the grain, the water, and your hands. I'm here to help you understand that dialogue."
              </p>
              <button
                onClick={onReadStory}
                className="text-[#D97706] font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Read Her Story</span>
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Community Section */}
      <section className="py-20 bg-[#FDF8F0] border-y border-[#83746B]/10">
        <div className="px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#D97706] block mb-2">
              Weekly Flours & Recipes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#5D4037] font-bold mb-4">
              Join Our Baking Community
            </h2>
            <p className="text-[#83746B] text-base mb-8 max-w-md leading-relaxed">
              Receive weekly recipes, technical tips, and early access to class bookings. No spam, just flour.
            </p>

            {subscribed ? (
              <div className="p-4 bg-green-100 border border-green-300 rounded-xl text-green-900 text-sm font-semibold flex items-center gap-2 max-w-md">
                <span className="material-symbols-outlined text-green-700">check_circle</span>
                <span>Welcome to the community! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-[#FDFBF7] border border-[#83746B]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                />
                <button
                  type="submit"
                  className="bg-[#5D4037] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-opacity-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform border border-[#83746B]/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdzT9Psfa0gyP4iSNpDsB5fKcdhyVnLI3S_YYiUfxoy0dVGWHC1Vj58V2dYDhRsQ64YllEOOkVV5jCxJknxXbMEKMpB3gc0iuUZLJYOT_gQV1VGjpDzHe8Nn86h6WDXZb11Egvh0hLnsTNn1vMd7sYKAJZNJeZJUNd9NeSiVVmPiOh59sAz5L-vnMTara8L_7g_mn197jLEnS0h3pSx1a12yh27m6CVit5JLeybE44slSIlyGUfJ5FddrBea8iQTsg5xxbGoToQsI"
                alt="Golden croissants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md translate-y-6 hover:translate-y-5 transition-transform border border-[#83746B]/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3IM64qsGj59Q_wNvPfbvoRApVsz2dJYsuwwev5elcycyp9Chx8jYcyNbmtXAfHla57V4ITNQGti_eUScO02DleUrsn7RMPlcmcQ0EWnteViJF0E3UZHm9Itaxw9CbGcbHJ4-_gq4JLSmpOMJHCOABJwfQqlnJ7vYZ2-k78NpIOs9WGjfU07TwwY9Wvo9FJsLAXztvyp2XtiIH2PWrNEcG8ftfnrCT0oSIszea_RsasRoxXOqZDaQfJr7sx1xddHj9s-oSj1L_uLY"
                alt="Baking workstation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

