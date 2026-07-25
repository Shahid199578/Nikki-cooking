import React, { useState } from 'react';
import { PageType, CookingClass } from './types';
import { CLASSES_DATA, GALLERY_ITEMS, REVIEWS } from './data/classes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CTASection } from './components/CTASection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { GalleryView } from './components/GalleryView';
import { BookingModal } from './components/BookingModal';
import { ClassDetailModal } from './components/ClassDetailModal';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingClassId, setBookingClassId] = useState<string | undefined>(undefined);
  const [selectedDetailClass, setSelectedDetailClass] = useState<CookingClass | null>(null);

  const handleOpenBooking = (classId?: string) => {
    setBookingClassId(classId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#5D4037] relative selection:bg-[#D97706] selection:text-white">
      {/* Paper Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-40 pointer-events-none" />

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Dynamic Main View Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <div className="space-y-4">
            <HeroSection
              onExploreClasses={() => {
                const element = document.getElementById('classes-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('classes');
                }
              }}
              onReadStory={() => handleNavigate('about')}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-4">
              <span className="text-xs uppercase font-semibold tracking-widest text-[#D97706] block mb-2 text-center">
                Hands-On Masterclasses
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#5D4037] font-bold text-center">
                Featured Culinary Programs
              </h2>
            </div>

            <BentoGrid
              classes={CLASSES_DATA}
              onBookNow={(id) => handleOpenBooking(id)}
              onViewDetails={(cls) => setSelectedDetailClass(cls)}
            />

            <WhyChooseUsSection
              onReadStory={() => handleNavigate('about')}
              onExploreClasses={() => handleNavigate('classes')}
            />

            <ReviewsSection reviews={REVIEWS} />

            <CTASection
              onViewSchedules={() => handleNavigate('classes')}
              onGiftClass={() => handleOpenBooking()}
            />
          </div>
        )}

        {currentPage === 'classes' && (
          <div className="pt-8 pb-16 space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto px-6">
              <span className="text-xs uppercase font-semibold text-[#D97706] tracking-widest block mb-2">
                Curriculum
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#5D4037] font-bold mb-4">
                Upcoming Masterclasses
              </h1>
              <p className="text-[#83746B] text-sm md:text-base leading-relaxed">
                Small-batch workshops limited to 8 attendees. Each class includes step-by-step guidance, take-home baked goods, and starter kits.
              </p>
            </div>

            <BentoGrid
              classes={CLASSES_DATA}
              onBookNow={(id) => handleOpenBooking(id)}
              onViewDetails={(cls) => setSelectedDetailClass(cls)}
            />

            <ReviewsSection reviews={REVIEWS} />

            <CTASection
              onViewSchedules={() => handleNavigate('classes')}
              onGiftClass={() => handleOpenBooking()}
            />
          </div>
        )}

        {currentPage === 'gallery' && (
          <GalleryView items={GALLERY_ITEMS} />
        )}

        {currentPage === 'about' && (
          <AboutView
            onExploreClasses={() => handleNavigate('classes')}
            onContactClick={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView classes={CLASSES_DATA} />
        )}
      </main>

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Fixed Mobile Bottom Navigation */}
      <MobileBottomNav currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Class Detail Modal */}
      <ClassDetailModal
        cookingClass={selectedDetailClass}
        onClose={() => setSelectedDetailClass(null)}
        onBook={(id) => handleOpenBooking(id)}
      />

      {/* Class Registration / Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        classes={CLASSES_DATA}
        initialClassId={bookingClassId}
      />

      {/* Floating WhatsApp Contact Icon */}
      <a
        href="https://wa.me/918587956987?text=Hi!%20I%20have%20a%20question%20about%20The%20Nikki's%20Cooking%20Classes."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 z-45 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.553 4.184 1.603 6.009L0 24l6.166-1.618a11.97 11.97 0 0 0 5.838 1.518c6.626 0 12.004-5.378 12.004-12.004C24.008 5.378 18.63 0 12.004 0zm6.2 17.262c-.27.76-1.57 1.4-2.17 1.49-.55.08-1.27.13-3.87-.93-3.14-1.29-5.18-4.48-5.34-4.69-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.65.29-.31.64-.39.85-.39.21 0 .42 0 .6.01.19.01.44-.07.69.53.25.6.86 2.1.93 2.25.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.32.39-.46.52-.16.15-.33.32-.14.65.19.33.85 1.4 1.83 2.27.8.71 1.48.93 1.83 1.08.35.15.56.12.77-.12.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.32.12 2.05 1.01 2.4 1.19.35.18.59.27.67.41.09.15.09.86-.18 1.62z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
