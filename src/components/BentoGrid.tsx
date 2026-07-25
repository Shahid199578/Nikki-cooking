import React, { useState } from 'react';
import { CookingClass, CategoryType } from '../types';
import { ClassCard } from './ClassCard';

interface BentoGridProps {
  classes: CookingClass[];
  onBookNow: (classId: string) => void;
  onViewDetails: (cookingClass: CookingClass) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ classes, onBookNow, onViewDetails }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All Programs');

  const categories: CategoryType[] = [
    'All Programs',
    'Baking Essentials',
    'Artisan Pastry',
    'Traditional Culinary',
  ];

  const filteredClasses = classes.filter((c) => {
    if (selectedCategory === 'All Programs') return true;
    return c.category === selectedCategory;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 pb-24" id="classes-section">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#5D4037] text-white shadow-md scale-105'
                  : 'bg-[#F3EDE6] text-[#83746B] hover:bg-[#f7e5d9] hover:text-[#5D4037]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Bento Grid */}
      {filteredClasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredClasses.map((cls) => (
            <ClassCard
              key={cls.id}
              cookingClass={cls}
              onBookNow={onBookNow}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#F3EDE6]/50 rounded-2xl border border-[#83746B]/10">
          <span className="material-symbols-outlined text-4xl text-[#D97706] mb-2">restaurant</span>
          <p className="text-[#5D4037] font-serif text-xl font-semibold">No workshops found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All Programs')}
            className="mt-4 text-xs font-bold text-[#D97706] uppercase tracking-wider underline"
          >
            Show All Programs
          </button>
        </div>
      )}
    </section>
  );
};
