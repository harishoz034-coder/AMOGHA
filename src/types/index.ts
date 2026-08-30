export type MenuCategoryType =
  | 'all'
  | 'tiffins'
  | 'dosa'
  | 'rice'
  | 'chinese'
  | 'breads'
  | 'beverages';

export type SpiceLevel = 'none' | 'mild' | 'medium' | 'spicy' | 'very_spicy';

export interface MenuItem {
  id: string;
  name: string;
  teluguName?: string;
  category: MenuCategoryType;
  categoryName: string;
  subcategory?: string;
  price: number;
  priceRange?: string;
  featured?: boolean;
  bestseller?: boolean;
  recommended?: boolean;
  spiceLevel?: SpiceLevel;
  description?: string;
  imageUrl?: string;
  servesCount?: string;
  source: 'uploaded-menu' | 'current-online';
  lastVerified?: string;
  needsVerification?: boolean;
}

export interface RestaurantInfo {
  name: string;
  brandDisplay: string;
  tagline: string;
  headline: string;
  description: string;
  story: string;
  pureVeg: boolean;
  approxCost: string;
  costForTwo: number;
  costDisclaimer: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  phone: string;
  displayPhone: string;
  hours: {
    opens: string;
    closes: string;
    display: string;
    days: string;
    sourceNote: string;
  };
  cuisines: string[];
  features: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
}

export interface AmbienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tag: string;
  aspectRatio?: 'wide' | 'square' | 'tall';
}

export interface ReviewItem {
  id: string;
  author: string;
  tag: string;
  favoriteDish: string;
  comment: string;
  rating: number;
}
