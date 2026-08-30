import React from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { Footer } from '@/components/layout/Footer';
import { JsonLdRestaurant } from '@/components/seo/JsonLdRestaurant';
import { restaurantData } from '@/data/restaurant';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amogha-pureveg.com'),
  title: 'Amogha Pure Veg | South Indian & Chinese Restaurant in Ameerpet, Hyderabad',
  description:
    'Amogha Pure Veg in Ameerpet, Hyderabad. 100% pure vegetarian South Indian dosas, tiffins, rice dishes, Indo-Chinese favourites and comforting chai on Satyam Theatre Road. View menu, call or get directions.',
  keywords: [
    'Amogha Pure Veg Ameerpet',
    'Amogha restaurant Ameerpet',
    'pure veg restaurant Ameerpet',
    'South Indian restaurant Ameerpet',
    'dosa Ameerpet',
    'Chinese restaurant Ameerpet',
    'vegetarian restaurant Hyderabad',
    'Amogha Satyam Theatre Road',
    'Amogha Pure Veg Hyderabad',
  ],
  authors: [{ name: 'Amogha Pure Veg Restaurant' }],
  openGraph: {
    title: 'Amogha Pure Veg | South Indian & Chinese Restaurant in Ameerpet, Hyderabad',
    description:
      'Pure vegetarian South Indian comfort, dosas, tiffins, Indo-Chinese classics & chai on Satyam Theatre Road, Ameerpet.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Amogha Pure Veg Restaurant',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <JsonLdRestaurant />
      </head>
      <body className="min-h-screen flex flex-col bg-alabaster-100 text-charcoal-900 selection:bg-burgundy-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <MobileActionBar />
        <Footer />
      </body>
    </html>
  );
}
