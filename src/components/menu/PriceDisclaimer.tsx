import React from 'react';
import { Info } from 'lucide-react';

export function PriceDisclaimer() {
  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-white border border-burgundy-200/80 shadow-luxury flex items-start gap-3.5 text-xs sm:text-sm text-charcoal-600"
      role="note"
      aria-label="Price disclaimer"
    >
      <div className="p-1.5 rounded-lg bg-burgundy-50 text-burgundy-700 shrink-0 mt-0.5 border border-burgundy-100">
        <Info className="w-4 h-4" />
      </div>
      <div className="space-y-1">
        <div className="font-bold text-charcoal-900">
          Indicative Menu Pricing Notice
        </div>
        <p className="leading-relaxed">
          Prices shown are based on supplied restaurant menu photographs and current third-party directory listings and may vary by ordering platform (Magicpin / Zomato / Swiggy), offers, taxes, or seasonal menu updates. Please confirm final prices when placing your order.
        </p>
      </div>
    </div>
  );
}
