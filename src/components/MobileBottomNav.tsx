import React from 'react';
import { PageType } from '../types';

interface MobileBottomNavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPage, onNavigate }) => {
  const items: { label: string; page: PageType; icon: string }[] = [
    { label: 'Home', page: 'home', icon: 'home' },
    { label: 'Classes', page: 'classes', icon: 'restaurant_menu' },
    { label: 'Gallery', page: 'gallery', icon: 'photo_library' },
    { label: 'About', page: 'about', icon: 'info' },
    { label: 'Contact', page: 'contact', icon: 'mail' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden bg-[#F2E8D5] border-t border-[#77574d]/15 flex justify-around items-center h-16 px-4 shadow-lg backdrop-blur-md">
      {items.map((item) => {
        const isActive = currentPage === item.page;
        return (
          <button
            key={item.page}
            onClick={() => {
              onNavigate(item.page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center space-y-0.5 transition-all ${
              isActive ? 'text-[#8d4b00] font-bold scale-105' : 'text-[#77574d] hover:text-[#3E2723]'
            }`}
          >
            <span className={`material-symbols-outlined text-xl ${isActive ? 'fill-1' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
