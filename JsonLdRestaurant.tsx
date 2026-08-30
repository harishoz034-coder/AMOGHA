import React from 'react';
import { restaurantData } from '@/data/restaurant';
import { externalLinks } from '@/data/links';

export function JsonLdRestaurant() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantData.name,
    description: restaurantData.description,
    telephone: restaurantData.phone,
    servesCuisine: restaurantData.cuisines,
    priceRange: '₹',
    url: 'https://amogha-pureveg.com',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantData.address.street,
      addressLocality: restaurantData.address.area,
      addressRegion: restaurantData.address.state,
      postalCode: restaurantData.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurantData.geo.latitude,
      longitude: restaurantData.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: restaurantData.hours.opens,
        closes: restaurantData.hours.closes,
      },
    ],
    hasMenu: 'https://amogha-pureveg.com/menu',
    sameAs: [
      externalLinks.googleMaps,
      externalLinks.magicpin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
