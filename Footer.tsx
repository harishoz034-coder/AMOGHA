import React from 'react';
import Link from 'next/link';
import { restaurantData } from '@/data/restaurant';
import { navLinks, externalLinks } from '@/data/links';
import { PureVegBadge } from '@/components/ui/Badge';
import { Phone, MapPin, Clock, ArrowUpRight, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-charcoal-100 text-charcoal-600 pt-16 pb-24 md:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-burgundy-700">
                {restaurantData.brandDisplay}
              </span>
              <PureVegBadge />
            </div>

            <p className="text-sm text-charcoal-500 leading-relaxed max-w-sm">
              {restaurantData.tagline}. Authentic tiffins, dosas, rice dishes, Indo-Chinese favourites, and comforting chai on Satyam Theatre Road, Ameerpet.
            </p>

            <div className="pt-2 text-xs text-charcoal-500">
              <strong className="text-charcoal-800">Cost Reference:</strong> {restaurantData.approxCost} (third-party listing reference).
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-charcoal-900 border-b border-charcoal-100 pb-2">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-charcoal-600 hover:text-burgundy-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-charcoal-900 border-b border-charcoal-100 pb-2">
              Cuisines & Specialties
            </h3>
            <ul className="space-y-1.5 text-xs text-charcoal-500">
              <li>• South Indian Tiffins (Idly, Wada, Puri)</li>
              <li>• Specialty Dosas (Masala, Karam, 70MM)</li>
              <li>• Rice Dishes & Veg Biryani</li>
              <li>• Sizzling Indo-Chinese & Manchurian</li>
              <li>• Fresh Cardamom Chai & Filter Coffee</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-charcoal-900 border-b border-charcoal-100 pb-2">
              Location & Hours
            </h3>
            <div className="space-y-2.5 text-xs text-charcoal-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-burgundy-600 shrink-0 mt-0.5" />
                <span>{restaurantData.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-burgundy-600 shrink-0" />
                <a
                  href={externalLinks.call}
                  className="font-bold text-burgundy-700 hover:underline"
                >
                  {restaurantData.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-charcoal-500">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{restaurantData.hours.display} (Daily)</span>
              </div>
            </div>
          </div>
        </div>

        {/* PRD Required Indicative Pricing Disclaimer */}
        <div className="p-4 rounded-2xl bg-ivory-50 border border-charcoal-100 text-xs text-charcoal-500 leading-relaxed mb-8">
          <strong className="text-charcoal-800">📌 Pricing & Information Disclaimer:</strong> Prices and menu items shown are based on supplied menu photographs and current third-party directory listings and may vary by outlet, ordering platform (Magicpin / Zomato / Swiggy), applicable taxes, or menu updates. Please confirm final prices when ordering.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-charcoal-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© 2026 {restaurantData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-burgundy-700 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-burgundy-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
