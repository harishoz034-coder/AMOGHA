import { RestaurantInfo } from '@/types';

export const restaurantData: RestaurantInfo = {
  name: 'Amogha Pure Veg Restaurant',
  brandDisplay: 'AMOGHA',
  tagline: 'Pure Vegetarian South Indian & Indo-Chinese Favourites',
  headline: 'Authentic South Indian Tiffins, Dosas & Indo-Chinese Classics in Ameerpet',
  description:
    'A familiar Ameerpet favourite on Satyam Theatre Road serving crispy golden dosas, steaming soft idlys, flavorful rice dishes, sizzling Indo-Chinese specialities, and freshly brewed tea in a clean, welcoming setting.',
  story:
    'Amogha Pure Veg brings together the authentic comfort of traditional South Indian tiffin culture and vibrant Indo-Chinese favourites in the bustling heart of Ameerpet. From early morning filter coffee and ghee-roasted karam dosas to hearty afternoon veg biryanis and evening cups of hot tea with crispy wadas, Amogha is an everyday destination for local residents, students, and families seeking delicious, 100% vegetarian food prepared with hygiene and care.',
  pureVeg: true,
  approxCost: '₹300 for two',
  costForTwo: 300,
  costDisclaimer:
    'Prices and availability are based on current third-party directory listings and may vary by ordering platform, offers, or menu updates.',
  address: {
    street: 'Satyam Theatre Rd, Kumar Basti, Srinivasa Nagar',
    landmark: 'Near Satyam Theatre Junction',
    area: 'Ameerpet',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500016',
    country: 'India',
    fullFormatted:
      'Satyam Theatre Rd, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500016',
  },
  phone: '+919885657733',
  displayPhone: '+91 98856 57733',
  hours: {
    opens: '10:00',
    closes: '22:00',
    display: '10:00 AM – 10:00 PM',
    days: 'Monday – Sunday (All 7 Days)',
    sourceNote:
      'Hours are based on current online directory references and may vary for morning tiffin service.',
  },
  cuisines: [
    '100% Pure Vegetarian',
    'South Indian Tiffins',
    'Specialty Dosas',
    'Indo-Chinese',
    'Rice Dishes',
    'Chai & Beverages',
  ],
  features: [
    'Pure Vegetarian Kitchen (No Non-Veg / No Egg)',
    'Freshly Prepared Morning Tiffins & Evening Snacks',
    'Quick Service & Comfortable Dining Seating',
    'Online Ordering via Magicpin & Delivery Partners',
    'Prime Location on Satyam Theatre Road, Ameerpet',
  ],
  geo: {
    latitude: 17.4375,
    longitude: 78.4483,
  },
};
