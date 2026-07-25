import { CookingClass, GalleryItem, Review } from '../types';

export const CLASSES_DATA: CookingClass[] = [
  {
    id: 'artisan-sourdough',
    title: 'Artisan Sourdough Mastery',
    category: 'Baking Essentials',
    duration: '4.5 Hours',
    price: 2499,
    description: 'Dive deep into the science of wild yeast. Learn the folding techniques, hydration ratios, and steam baking secrets for the perfect crust.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyuvOAd9mGTX9rbnyIb6-H25b3qziKH8aIGn9rjqH1c8XYMbUYVq1g0yugvXYnZnWTDcQyrpmshmjez_IOJH3WQAHU5lBYBHw3gCw5-Q8ihpOvQBP2oWA94xyyHqEm3gkyoBKHdrC7hl7zUiJaYtL2uOC3NvgIlz2i2kkm_G31LdskWJosvSUU9iZXoQizzbA41EHY7sgg1OXPp23Ezw4XrGBAs_hszw6T4YTx04ovh5FGYDNF2POm89YuV7R5PCsElQZQqImOp9w',
    badgeText: 'Baking Essentials',
    featured: true,
    colSpan: 'md:col-span-8',
    level: 'Beginner',
    seatsLeft: 3,
    batchOptions: [
      'Weekend Morning (9:00 AM - 1:30 PM)',
      'Weekend Afternoon (2:30 PM - 7:00 PM)',
      'Weekday Intensive (Wed 10:00 AM - 2:30 PM)'
    ],
    syllabus: [
      'Cultivating and maintaining wild starters',
      'Baker’s math & hydration control (65%-85%)',
      'Stretch-and-fold method vs. kneading',
      'Cold fermentation & scoring techniques',
      'Dutch oven & stone deck steam baking'
    ],
    instructor: 'Chef Nikki Sharma',
    highlights: ['Take home 100-year starter jar', '2 freshly baked loaves', 'Detailed recipe binder']
  },
  {
    id: 'parisian-macarons',
    title: 'Parisian Macarons',
    category: 'Artisan Pastry',
    duration: '3 Hours',
    price: 1999,
    description: 'Conquer the temperamental macaron. Focus on the "macaronage" technique and seasonal ganache fillings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWLNX5XlqXQJWSDhjpeedM9LMt4mRnsg71vlFaKj9ADewdo2CIRTBjsA33zHWHz4L--H-_OdOpRyAEE5kjvkGUOKFmrRK7AbWPVjOLzSvkFXeQ56UKnqQR6OJUJ7fiBXMFeShXX72gerSfuLH_0R8vohT90b3XT1ndNT9Oy1R4_q37YXP97dhHGlv0e8Usqei_iAtkvL23fXVnKYSzm0BiDLdX3IHZPbCY_GY_5UCgeXY_SKtmSa2v_09Acz-UyZLbH2wdz9Ev5RM',
    badgeText: 'Artisan Pastry',
    colSpan: 'md:col-span-4',
    level: 'Intermediate',
    seatsLeft: 2,
    batchOptions: [
      'Saturday Morning (10:00 AM - 1:00 PM)',
      'Sunday Afternoon (3:00 PM - 6:00 PM)'
    ],
    syllabus: [
      'Italian vs. French meringue methods',
      'Mastering the macaronage consistency',
      'Piping uniform shells with foot development',
      'Salted caramel, pistachio & dark chocolate ganache'
    ],
    instructor: 'Chef Nikki Sharma',
    highlights: ['Gift box of 18 macarons', 'Troubleshooting guide', 'Piping stencil template']
  },
  {
    id: 'aromatic-biryani',
    title: 'Aromatic Biryani',
    category: 'Traditional Culinary',
    duration: '4 Hours',
    price: 2299,
    description: 'Master the "Dum" slow-cooking method. A journey through spices, fragrance, and layered perfection.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP6jBiI_80Fry37736bmQcfTSIsUbXHEqDTnpnROIWVe8nPFGC3oFmRwF9VzlpMEttjVvG1FLNG0JiCyxau41_5R6MDoyds2O7tVSE0F_HqHRsg_Tjp0ZjgGj8zGTacki9frMNTACxNRwak88JXcPrXuxicaXWIWGnBFux6zHdKq58H_QD0j06c9k1mEPC7WQYABNDHfKqqV6jJUDkBduaUmYRx8feb4BLFV-CKPr3jviUq6Uxo2qM4azd_d7T6ebXSWwsI1-LrA4',
    badgeText: 'Traditional Culinary',
    colSpan: 'md:col-span-4',
    level: 'All Levels',
    seatsLeft: 4,
    batchOptions: [
      'Saturday Evening (4:00 PM - 8:00 PM)',
      'Sunday Morning (10:30 AM - 2:30 PM)'
    ],
    syllabus: [
      'Whole spice tempering and saffron infusion',
      'Parboiling aromatic basmati to precise grain',
      'Marination science for tender proteins & vegetables',
      'Dough seal (Dum) method for steam trapping',
      'Cooling mint burani raita & spicy mirchi ka salan'
    ],
    instructor: 'Chef Nikki Sharma',
    highlights: ['Pot of authentic Dum Biryani', 'Spice wheel gift kit', 'Pairing sides recipes']
  },
  {
    id: 'laminated-secret',
    title: 'The Laminated Secret',
    category: 'Artisan Pastry',
    duration: '6 Hours (Weekend)',
    price: 2999,
    description: 'Learn the patient art of hand-lamination. Achieve those shattered-glass layers and honeycomb interiors every time.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9OYbq6uENL8iCRAPQtFRUo8C7urHRbfVmdtD7pFRLEji9ku8su4PKTHRQ6BihMrKFqRJughuYJNsutc3k2VOC0T-N43PF5O0Q6iXe20P6wjE6W4UZof0Mx4tswWF54p9-6_0a3sdV7zsulhgR_roZUzEPCuG3RtbIq1ki656nt3HNaYRNX2uWUE2qIzQmooCIrIgsok36hxPxI3LugIDaDNSagFouepe7rtiIFmuj2U8T212Mw5r48GSzFnI7g5l17JQCP5_sF6w',
    badgeText: 'Artisan Pastry',
    featured: true,
    colSpan: 'md:col-span-8',
    level: 'Advanced',
    seatsLeft: 2,
    batchOptions: [
      'Weekend Intensive (Saturday 9:00 AM - 3:00 PM)',
      'Sunday Masterclass (Sunday 9:00 AM - 3:00 PM)'
    ],
    syllabus: [
      'Butter block temperature & fat percentage science',
      'Single & double folds for honeycomb cross-section',
      'Pain au chocolat, Almond Croissants & Cruffins',
      'Proofing environments and egg-wash shine secrets'
    ],
    instructor: 'Chef Nikki Sharma',
    highlights: ['Baker’s lamination ruler', 'Dozen freshly baked viennoiserie', 'French butter guide']
  },
  {
    id: 'rustic-galettes-pies',
    title: 'Rustic Galettes & Fruit Pies',
    category: 'Baking Essentials',
    duration: '3.5 Hours',
    price: 1899,
    description: 'Master flaky, buttery pie doughs from scratch. Craft seasonal fruit fillings, lattices, and free-form galettes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUhMMIshTDG4JtyGJjVCTPXb7qetJtry-4ViI8AV0pr521FSc1EJpsTVmA5mX4WC2QP7VvEzvI8Qgq2Kv_rufaKCzczPVTmGdsO6BY5CHYnKJeZ6jHHG9WbQ2GKKtrnIbHkt5siAfxW-vQYIvBlCJv-xXofqh1k5HhRwbi3zu5scH7rtYtypDuC2d3ny5mpHFbQKs2lHbt-_DLd7J71BZfPRpt90DKU-Lr5G3xhY79EL-_L78SgIidfXmDbL-6xDt2Zx2kTOOBADw',
    badgeText: 'Baking Essentials',
    colSpan: 'md:col-span-4',
    level: 'Beginner',
    seatsLeft: 5,
    batchOptions: [
      'Friday Afternoon (2:00 PM - 5:30 PM)',
      'Sunday Morning (10:00 AM - 1:30 PM)'
    ],
    syllabus: [
      'Cold butter cutting technique for ultimate flakiness',
      'Blind baking vs. galette folding',
      'Fruit maceration & pectin thickening',
      'Savory tomato & goat cheese tart variations'
    ],
    instructor: 'Chef Nikki Sharma',
    highlights: ['Ceramic pie dish to take home', '2 whole galettes', 'Recipe book']
  },
  {
    id: 'french-choux-pastry',
    title: 'Éclairs & Choux Mastery',
    category: 'Artisan Pastry',
    duration: '4 Hours',
    price: 2199,
    description: 'Master Choux paste (pâte à choux) to create light, airy Éclairs, Profiteroles, and Paris-Brest with silky diplomat cream.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdzT9Psfa0gyP4iSNpDsB5fKcdhyVnLI3S_YYiUfxoy0dVGWHC1Vj58V2dYDhRsQ64YllEOOkVV5jCxJknxXbMEKMpB3gc0iuUZLJYOT_gQV1VGjpDzHe8Nn86h6WDXZb11Egvh0hLnsTNn1vMd7sYKAJZNJeZJUNd9NeSiVVmPiOh59sAz5L-vnMTara8L_7g_mn197jLEnS0h3pSx1a12yh27m6CVit5JLeybE44slSIlyGUfJ5FddrBea8iQTsg5xxbGoToQsI',
    badgeText: 'Artisan Pastry',
    colSpan: 'md:col-span-4',
    level: 'Intermediate',
    seatsLeft: 3,
    batchOptions: [
      'Thursday Evening (4:00 PM - 8:00 PM)',
      'Saturday Afternoon (2:00 PM - 6:00 PM)'
    ],
    syllabus: [
      'Pan-searing flour paste for optimal moisture evaporation',
      'Egg absorption tests for perfect piping consistency',
      'Craquelin topping for crisp textured shells',
      'Diplomat cream, praline paste & glossy mirror glaze'
    ],
    instructor: 'Chef Nikki Sharma',
    highlights: ['Assorted Eclair Box (12 pcs)', 'Piping nozzles kit', 'Step-by-step video recap']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Golden Sourdough Crumb',
    category: 'Sourdough',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyuvOAd9mGTX9rbnyIb6-H25b3qziKH8aIGn9rjqH1c8XYMbUYVq1g0yugvXYnZnWTDcQyrpmshmjez_IOJH3WQAHU5lBYBHw3gCw5-Q8ihpOvQBP2oWA94xyyHqEm3gkyoBKHdrC7hl7zUiJaYtL2uOC3NvgIlz2i2kkm_G31LdskWJosvSUU9iZXoQizzbA41EHY7sgg1OXPp23Ezw4XrGBAs_hszw6T4YTx04ovh5FGYDNF2POm89YuV7R5PCsElQZQqImOp9w',
    caption: 'Student loaf sliced open showcasing an open, airy crumb structure.'
  },
  {
    id: 'g2',
    title: 'Macaron Feet Precision',
    category: 'Pastry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWLNX5XlqXQJWSDhjpeedM9LMt4mRnsg71vlFaKj9ADewdo2CIRTBjsA33zHWHz4L--H-_OdOpRyAEE5kjvkGUOKFmrRK7AbWPVjOLzSvkFXeQ56UKnqQR6OJUJ7fiBXMFeShXX72gerSfuLH_0R8vohT90b3XT1ndNT9Oy1R4_q37YXP97dhHGlv0e8Usqei_iAtkvL23fXVnKYSzm0BiDLdX3IHZPbCY_GY_5UCgeXY_SKtmSa2v_09Acz-UyZLbH2wdz9Ev5RM',
    caption: 'Macarons lined up after baking with flawless feet and smooth tops.'
  },
  {
    id: 'g3',
    title: 'Laminated Croissants',
    category: 'Pastry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9OYbq6uENL8iCRAPQtFRUo8C7urHRbfVmdtD7pFRLEji9ku8su4PKTHRQ6BihMrKFqRJughuYJNsutc3k2VOC0T-N43PF5O0Q6iXe20P6wjE6W4UZof0Mx4tswWF54p9-6_0a3sdV7zsulhgR_roZUzEPCuG3RtbIq1ki656nt3HNaYRNX2uWUE2qIzQmooCIrIgsok36hxPxI3LugIDaDNSagFouepe7rtiIFmuj2U8T212Mw5r48GSzFnI7g5l17JQCP5_sF6w',
    caption: 'Freshly baked croissants showing golden-brown butter lamination.'
  },
  {
    id: 'g4',
    title: 'Hand-Scoring Sourdough',
    category: 'Process',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCczQXNHsjGThAM8zO2qVRzjM7s0TAV1llbXBGU8_yNKCnhGTVXBB8Ar5rpgYGOmFCZFx9A04pYysCQPqHwGBbk-oKAQnH6EBX80ErZzfmaTWu3TOadkQhy1F3e27eqp9y872okMmnSgrk0hk-Tl6Ehm1doZiQqUFQagMu56s4yRp31FzwCRAQhVKdhVF-ZMqzddJiOOCIKY_UYKD4BGKZwIeqxyn29fHno2r_gXLFppwIjidbSrWpyxY7XBe78xRr8hSVEfa7b0Ks',
    caption: 'Intricate scoring with a baker’s lame blade before oven entry.'
  },
  {
    id: 'g5',
    title: 'Chef Nikki Demonstration',
    category: 'Class Moments',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBad07Epu4ur4iiCnbsAQUWJIAmfGcg4RT7vS_c43fUQxFCYhkwqSO6SsJJaXpaqnSHMXWcWa3Z1vV197YCw0lpsaHG61Jkd_EoJWP16YMHQcFyeQ6iXZxDOeM9Cwk6Bdz54f9rsomnxr_t8ajacf6iZi56fMIllT-lvnv7Qyoqbbfu2nvyMJoqoWCda8VEUolnLoAN8X2AgWa-v7JzD5M2TYlxcyEPUg771nRs6TaNrbzEzaYX-NTy0v_SY1MqFSKFkpcGNvtOFmU',
    caption: 'Nikki explaining wild starter culture activity to students.'
  },
  {
    id: 'g6',
    title: 'High-Hydration Folding',
    category: 'Process',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrn7jWzRWnbjoT-qF8VwvCbS6QGGpR4G8Bszddh3v8w576ij5mgFYFHJMHry-2ECokwvz7hpnZFAs85B5Fp7UWfwgKYCHDOiEKk7nmiHVzpsY63ZVPJQYx3U807a_8EEehwneWYwDHiLR9YiMN_diC3tOwOo8gFw6Ug39Bpy2FCHNCxFB7vii0nL-HLwV0ww-t1mzmDjEOY1uqDXM7cR2BRtUglKp0xU_HHZJorhQ5ilkC_6VanSaKkRc0HP3xhB_7ubTHX7mIoZM',
    caption: 'Coil folding 80% hydration sourdough for optimal gluten tension.'
  },
  {
    id: 'g7',
    title: 'Authentic Dum Biryani',
    category: 'Culinary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP6jBiI_80Fry37736bmQcfTSIsUbXHEqDTnpnROIWVe8nPFGC3oFmRwF9VzlpMEttjVvG1FLNG0JiCyxau41_5R6MDoyds2O7tVSE0F_HqHRsg_Tjp0ZjgGj8zGTacki9frMNTACxNRwak88JXcPrXuxicaXWIWGnBFux6zHdKq58H_QD0j06c9k1mEPC7WQYABNDHfKqqV6jJUDkBduaUmYRx8feb4BLFV-CKPr3jviUq6Uxo2qM4azd_d7T6ebXSWwsI1-LrA4',
    caption: 'Clay pot Dum Biryani garnished with saffron and fried onions.'
  },
  {
    id: 'g8',
    title: 'Golden Hour Kneading',
    category: 'Kitchen Studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg8YXUuNXeSP46dYCcznQ6TCVmpZ99uLcMyIVtdeY_wpSmoOAUpUFigQ6bMv-liOakoo2ULAYMgFTO-HIF4qY9CrjmmTABr2LLtetvXdTskyRs-V1c6vDbS8gjbQjN5ZCIIC3de5qVQIxeDUwavN70xIiz1A184_QnWfjGKurOXhOmdW1eRIuBhqjxQMhZIZ7FclHrExV_Aoo41fvuxQb7xg_iog-46n9BEKmmPCySZDv1l5lfjMmPZiP-gi22aSfr8awgbD7ag9M',
    caption: 'Sunlit wooden workbenches prepared for hands-on dough work.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Ananya Roy',
    role: 'Home Baker',
    comment: 'Nikki explained the science behind sourdough starter so clearly! My loaves used to be dense bricks, but now I get ear crusts and open crumbs consistently!',
    rating: 5,
    className: 'Artisan Sourdough Mastery'
  },
  {
    id: 'r2',
    author: 'Vikram Mehta',
    role: 'Amateur Pastry Enthusiast',
    comment: 'The macaron class was a revelation! Small group size meant Nikki personally watched my macaronage technique and corrected my piping posture.',
    rating: 5,
    className: 'Parisian Macarons'
  },
  {
    id: 'r3',
    author: 'Pooja Agarwal',
    role: 'Culinary Explorer',
    comment: 'The Biryani workshop taught me spice ratios I will use for the rest of my life. The Dum seal technique made the rice extraordinarily fragrant.',
    rating: 5,
    className: 'Aromatic Biryani'
  }
];
