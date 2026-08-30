import React from 'react';
import { restaurantData } from '@/data/restaurant';
import { PureVegBadge } from '@/components/ui/Badge';
import { MapPin, Clock, Wallet, Utensils } from 'lucide-react';

export function QuickInfoBar() {
  return (
    <section
      className="bg-white border-y border-charcoal-100 py-6 px-4 sm:px-6 lg:px-8 shadow-sm"
      aria-label="Restaurant quick operational facts"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-charcoal-100">
          {/* Pure Veg Positioning */}
          <div className="flex items-center gap-3.5 pt-3 lg:pt-0 lg:px-4 first:pt-0">
            <div className="p-3 rounded-2xl bg-pureVeg-50 border border-pureVeg-100 text-pureVeg-600 shrink-0">
              <span className="w-4 h-4 rounded-full bg-pureVeg-500 block ring-4 ring-pureVeg-100" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400 block">
                Dietary Assurance
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-charcoal-900">
                100% Pure Vegetarian
              </span>
              <span className="text-[11px] text-charcoal-500 block">
                Zero meat, poultry or egg
              </span>
            </div>
          </div>

          {/* Cuisine Style */}
          <div className="flex items-center gap-3.5 pt-3 lg:pt-0 lg:px-4">
            <div className="p-3 rounded-2xl bg-burgundy-50 border border-burgundy-100 text-burgundy-600 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400 block">
                Cuisine Range
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-charcoal-900">
                South Indian + Chinese
              </span>
              <span className="text-[11px] text-charcoal-500 block">
                Tiffins, dosas, fried rice, tea
              </span>
            </div>
          </div>

          {/* Cost for two */}
          <div className="flex items-center gap-3.5 pt-3 lg:pt-0 lg:px-4">
            <div className="p-3 rounded-2xl bg-ivory-100 border border-ivory-200 text-gold-700 shrink-0">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400 block">
                Cost Reference
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-charcoal-900">
                Around ₹300 for two
              </span>
              <span className="text-[11px] text-charcoal-500 block">
                Magicpin listing reference
              </span>
            </div>
          </div>

          {/* Location & Timings */}
          <div className="flex items-center gap-3.5 pt-3 lg:pt-0 lg:px-4">
            <div className="p-3 rounded-2xl bg-terracotta-50 border border-terracotta-100 text-terracotta-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400 block">
                Ameerpet Landmark
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-charcoal-900">
                Satyam Theatre Road
              </span>
              <span className="text-[11px] text-charcoal-500 block">
                {restaurantData.hours.display}
              </span>
            </div>
          </div>
        </div>

        {/* Small Pricing Disclaimer */}
        <div className="mt-4 text-center text-[11px] text-charcoal-400 italic">
          * Prices and availability may vary by platform and may change without notice.
        </div>
      </div>
    </section>
  );
}
