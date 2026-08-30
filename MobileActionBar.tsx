'use client';

import React from 'react';
import { externalLinks } from '@/data/links';
import { Phone, MapPin, ShoppingBag } from 'lucide-react';

export function MobileActionBar() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-charcoal-100 px-4 py-2.5 shadow-2xl"
      aria-label="Mobile quick action buttons"
    >
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* Call */}
        <a
          href={externalLinks.call}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-ivory-50 text-charcoal-800 hover:text-burgundy-700 border border-charcoal-200/80 transition-colors shadow-sm active:scale-95"
          aria-label="Call Amogha Pure Veg Restaurant"
        >
          <Phone className="w-4 h-4 text-burgundy-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* Directions */}
        <a
          href={externalLinks.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-ivory-50 text-charcoal-800 hover:text-burgundy-700 border border-charcoal-200/80 transition-colors shadow-sm active:scale-95"
          aria-label="Get directions on Google Maps"
        >
          <MapPin className="w-4 h-4 text-burgundy-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Directions</span>
        </a>

        {/* Order Online */}
        <a
          href={externalLinks.orderOnline}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-burgundy-600 hover:bg-burgundy-700 text-white font-bold transition-all shadow-md active:scale-95"
          aria-label="Order online on Magicpin"
        >
          <ShoppingBag className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Order</span>
        </a>
      </div>
    </aside>
  );
}
