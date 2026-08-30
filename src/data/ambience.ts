import { AmbienceItem } from '@/types';

export const ambienceGallery: AmbienceItem[] = [
  {
    id: 'amb-1',
    title: 'Warm Dining Hall',
    subtitle: 'Comfortable Family & Group Seating',
    description:
      'A welcoming dining space designed with clean granite tabletops, comfortable seating, and bright, warm lighting suitable for relaxed breakfasts and family meals.',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=75',
    tag: 'Dining Area',
    aspectRatio: 'wide',
  },
  {
    id: 'amb-2',
    title: 'Aromatic Chai & Coffee Counter',
    subtitle: 'Freshly Brewed Morning & Evening Beverages',
    description:
      'Our dedicated tea and filter coffee counter serves piping hot cups of cardamom chai and aromatic South Indian filter coffee all day.',
    imageUrl:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=75',
    tag: 'Chai Counter',
    aspectRatio: 'square',
  },
  {
    id: 'amb-3',
    title: 'Live Dosa & Tiffin Kitchen',
    subtitle: 'Freshly Roasted Crispy Dosas',
    description:
      'Watch our skilled cooks prepare paper-thin 70MM dosas and fluffy idlys on sizzling cast-iron tawas and steam pots.',
    imageUrl:
      'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=75',
    tag: 'Live Tiffins',
    aspectRatio: 'square',
  },
  {
    id: 'amb-4',
    title: 'Ameerpet Street Gateway',
    subtitle: 'Satyam Theatre Road Landmark',
    description:
      'Conveniently situated on Satyam Theatre Road, offering quick counter service for busy commuters and relaxed table dining.',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=75',
    tag: 'Street Front',
    aspectRatio: 'wide',
  },
];

export const ambienceHighlights = ambienceGallery;

export const diningFeatures = [
  {
    icon: 'Leaf',
    title: '100% Pure Vegetarian',
    description: 'Strictly vegetarian kitchen with fresh ingredients and hygienic preparation.',
  },
  {
    icon: 'Flame',
    title: 'Tiffin & Dosa Mastery',
    description: 'Crispy ghee dosas and soft idlys served with fresh stone-ground coconut & tomato chutneys.',
  },
  {
    icon: 'Coffee',
    title: 'Signature Chai & Coffee',
    description: 'Freshly brewed aromatic tea and authentic South Indian decoction filter coffee.',
  },
  {
    icon: 'MapPin',
    title: 'Prime Ameerpet Landmark',
    description: 'Located right on Satyam Theatre Road, easily accessible for local residents and students.',
  },
];
