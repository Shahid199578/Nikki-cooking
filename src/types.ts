export type CategoryType = 'All Programs' | 'Baking Essentials' | 'Artisan Pastry' | 'Traditional Culinary';

export interface CookingClass {
  id: string;
  title: string;
  category: 'Baking Essentials' | 'Artisan Pastry' | 'Traditional Culinary';
  duration: string;
  price: number;
  description: string;
  image: string;
  badgeText: string;
  featured?: boolean;
  colSpan?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  seatsLeft: number;
  batchOptions: string[];
  syllabus: string[];
  instructor: string;
  highlights: string[];
}

export interface RegistrationRequest {
  fullName: string;
  email: string;
  phone?: string;
  selectedClassId: string;
  preferredBatch: string;
  dietaryNotes: string;
}

export type PageType = 'home' | 'classes' | 'about' | 'gallery' | 'contact';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  className: string;
  avatar?: string;
}
