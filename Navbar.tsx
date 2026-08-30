'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, externalLinks } from '@/data/links';
import { restaurantData } from '@/data/restaurant';
import { Button } from '@/components/ui/Button';
import { PureVegBadge } from '@/components/ui/Badge';
import { Phone, MapPin, ShoppingBag, Menu, X } from 'lucide-react';
import { DownloadPdfButton } from '@/components/ui/DownloadPdfButton';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-charcoal-100 shadow-luxury py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-charcoal-100/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Anchor */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-burgundy-700 group-hover:text-burgundy-800 transition-colors">
                  {restaurantData.brandDisplay}
                </span>
                <PureVegBadge showText={false} />
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-semibold -mt-0.5">
                Satyam Theatre Rd • Ameerpet
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-burgundy-50 text-burgundy-700 font-bold border border-burgundy-200'
                      : 'text-charcoal-700 hover:text-burgundy-700 hover:bg-ivory-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center space-x-3">
            <DownloadPdfButton variant="outline" size="sm" />

            {/* Phone Button */}
            <a
              href={externalLinks.call}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-charcoal-600 hover:text-burgundy-700 transition-colors"
              title="Call restaurant directly"
            >
              <Phone className="w-3.5 h-3.5 text-burgundy-600" />
              <span>{restaurantData.displayPhone}</span>
            </a>

            {/* Directions Button */}
            <Button
              href={externalLinks.googleMaps}
              external
              variant="outline"
              size="sm"
              icon={<MapPin className="w-3.5 h-3.5 text-burgundy-600" />}
            >
              Directions
            </Button>

            {/* Primary Order Online CTA (Magicpin) */}
            <Button
              href={externalLinks.orderOnline}
              external
              variant="primary"
              size="sm"
              icon={<ShoppingBag className="w-3.5 h-3.5" />}
            >
              Order Online
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <DownloadPdfButton variant="outline" size="sm" label="PDF" />

            <a
              href={externalLinks.call}
              className="p-2 rounded-full bg-burgundy-50 text-burgundy-700 border border-burgundy-200"
              aria-label="Call Amogha Pure Veg"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-charcoal-800 hover:text-burgundy-700 hover:bg-ivory-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
              aria-label="Toggle navigation drawer"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-white/98 backdrop-blur-xl border-t border-charcoal-100 p-6 flex flex-col justify-between sm:hidden animate-fade-in shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-charcoal-100">
              <div>
                <span className="font-serif text-2xl font-bold text-burgundy-700">
                  {restaurantData.brandDisplay}
                </span>
                <div className="text-xs text-gold-600 font-medium">
                  {restaurantData.address.street}
                </div>
              </div>
              <PureVegBadge />
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-burgundy-600 text-white font-bold shadow-sm'
                        : 'text-charcoal-800 hover:bg-ivory-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-charcoal-100">
            <DownloadPdfButton variant="primary" size="md" className="w-full justify-center" />

            <Button
              href={externalLinks.orderOnline}
              external
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={<ShoppingBag className="w-4 h-4" />}
            >
              Order Online on Magicpin
            </Button>

            <Button
              href={externalLinks.googleMaps}
              external
              variant="outline"
              size="lg"
              className="w-full justify-center"
              icon={<MapPin className="w-4 h-4 text-burgundy-600" />}
            >
              Google Maps Directions
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
