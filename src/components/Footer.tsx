import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#5D4037] text-[#F3EDE6] w-full pt-16 pb-24 md:pb-16 px-6 md:px-16 border-t border-[#D97706]/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <span 
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-2xl text-[#D97706] font-semibold block mb-4 cursor-pointer hover:opacity-90"
          >
            The Nikki's Cooking Classes
          </span>
          <p className="text-sm text-[#F3EDE6]/70 leading-relaxed mb-6">
            Crafting confidence in the kitchen since 2012. Empowering home cooks with the professional science of baking in our intimate studio.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#F3EDE6]/10 flex items-center justify-center text-[#F3EDE6] hover:bg-[#D97706] hover:text-[#5D4037] transition-colors"
              title="Instagram"
            >
              <span className="material-symbols-outlined text-lg">camera_alt</span>
            </a>
            <a 
              href="https://wa.me/918587956987" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-full bg-[#F3EDE6]/10 flex items-center justify-center text-[#F3EDE6] hover:bg-[#25D366] hover:text-white transition-colors"
              title="WhatsApp"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
            </a>
            <button 
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-9 h-9 rounded-full bg-[#F3EDE6]/10 flex items-center justify-center text-[#F3EDE6] hover:bg-[#D97706] hover:text-[#5D4037] transition-colors"
              title="Location"
            >
              <span className="material-symbols-outlined text-lg">location_on</span>
            </button>
          </div>
        </div>

        {/* Learning */}
        <div>
          <h5 className="text-xs uppercase font-semibold mb-5 tracking-widest text-[#D97706]">
            Learning
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <button 
                onClick={() => { onNavigate('classes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F3EDE6]/80 hover:text-white hover:underline underline-offset-4 transition-all"
              >
                Baking Essentials
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('classes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F3EDE6]/80 hover:text-white hover:underline underline-offset-4 transition-all"
              >
                Artisan Pastry
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('classes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F3EDE6]/80 hover:text-white hover:underline underline-offset-4 transition-all"
              >
                Traditional Culinary
              </button>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h5 className="text-xs uppercase font-semibold mb-5 tracking-widest text-[#D97706]">
            Explore
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <button 
                onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F3EDE6]/80 hover:text-white hover:underline underline-offset-4 transition-all"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F3EDE6]/80 hover:text-white hover:underline underline-offset-4 transition-all"
              >
                Photo Gallery
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#F3EDE6]/80 hover:text-white hover:underline underline-offset-4 transition-all"
              >
                Student Story & Reviews
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-xs uppercase font-semibold mb-5 tracking-widest text-[#D97706]">
            Contact
          </h5>
          <p className="text-[#F3EDE6]/90 text-sm font-semibold mb-1">
            The Nikki's Cooking Classes
          </p>
          <p className="text-[#F3EDE6]/80 text-sm mb-1">
            Near Maharaja Agrasen, Sundaram Khand
          </p>
          <p className="text-[#F3EDE6]/80 text-sm mb-4">
            Sector 19, Vasundhara, Ghaziabad 201012
          </p>
          <a 
            href="mailto:hello@nikkiscooking.com" 
            className="text-[#F3EDE6]/90 hover:text-white hover:underline text-sm block font-medium mb-1"
          >
            hello@nikkiscooking.com
          </a>
          <p className="text-[#F3EDE6]/70 text-sm">
            +91 85879 56987
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#F3EDE6]/10 mt-12 pt-6 text-center text-[#F3EDE6]/40 text-xs flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© 2024 The Nikki's Cooking Classes. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-[#F3EDE6]/70 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#F3EDE6]/70 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
