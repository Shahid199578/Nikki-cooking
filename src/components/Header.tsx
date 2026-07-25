import React, { useState } from 'react';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: (classId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Classes', page: 'classes' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#F9F6F0] border-b border-[#77574d]/10 backdrop-blur-md bg-opacity-95">
      <div className="flex justify-between items-center px-4 md:px-12 h-16 w-full max-w-7xl mx-auto">
        {/* Brand Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#8d4b00] p-1.5 rounded-lg hover:bg-[#F2E8D5] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-left font-serif text-xl md:text-2xl font-semibold text-[#3E2723] hover:opacity-90 transition-opacity tracking-tight"
          >
            The Nikki's Cooking Classes
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`font-semibold text-xs uppercase tracking-wider transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#8d4b00] border-b-2 border-[#8d4b00]'
                    : 'text-[#77574d] hover:text-[#8d4b00]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#F59E0B] text-white px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-all duration-300 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2E8D5] border-b border-[#77574d]/20 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  currentPage === item.page
                    ? 'bg-[#8d4b00] text-white font-bold'
                    : 'text-[#3E2723] hover:bg-[#F9F6F0]'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            ))}
            
            <div className="pt-4 border-t border-[#77574d]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#3E2723] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                Book A Masterclass
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
