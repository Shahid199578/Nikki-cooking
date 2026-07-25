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
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#231a13] relative selection:bg-[#F59E0B] selection:text-white">
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
              <span className="text-xs uppercase font-semibold tracking-widest text-[#8d4b00] block mb-2 text-center">
                Hands-On Masterclasses
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3E2723] font-bold text-center">
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
              <span className="text-xs uppercase font-semibold text-[#8d4b00] tracking-widest block mb-2">
                Curriculum
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#3E2723] font-bold mb-4">
                Upcoming Masterclasses
              </h1>
              <p className="text-[#77574d] text-sm md:text-base leading-relaxed">
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
    </div>
  );
};

export default App;
