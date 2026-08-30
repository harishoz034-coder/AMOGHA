import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { PureVegBadge } from '@/components/ui/Badge';
import { externalLinks } from '@/data/links';
import { restaurantData } from '@/data/restaurant';
import { MapPin, ShoppingBag, ArrowRight, Sparkles, Coffee, Utensils } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Exterior / Illuminated AMOGHA Signage Visual */}
      <div className="absolute inset-0 z-0 bg-ivory-100">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Amogha Pure Veg Restaurant Exterior and Dining Entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.88] contrast-[1.05] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Luxury Light Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster-100/95 via-alabaster-100/80 to-alabaster-100/60" />
        <div className="absolute inset-0 bg-luxury-pattern opacity-60" />
      </div>

      {/* Floating Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-burgundy-200/80 text-burgundy-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-luxury backdrop-blur-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Pure Vegetarian • Ameerpet</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span>Hyderabad</span>
        </div>

        {/* Primary Brand Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black text-charcoal-900 tracking-tight leading-[1.05] mb-4">
          <span className="text-burgundy-700">AMOGHA</span>
        </h1>

        {/* Subheadline */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-800 font-semibold max-w-2xl mb-4 leading-snug">
          Pure Vegetarian South Indian & Indo-Chinese Favourites
        </p>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-charcoal-600 font-normal leading-relaxed max-w-2xl mb-8">
          A familiar Ameerpet favourite on Satyam Theatre Road for crispy dosas, cloud-soft idlys, aromatic rice dishes, sizzling Chinese favourites, and a comforting cup of hot tea.
        </p>

        {/* High-Converting Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-10">
          <Button
            href="/menu"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Menu (45+ Dishes)
          </Button>

          <Button
            href={externalLinks.orderOnline}
            external
            variant="gold"
            size="lg"
            className="w-full sm:w-auto shadow-md"
            icon={<ShoppingBag className="w-4 h-4" />}
          >
            Order on Magicpin
          </Button>

          <Button
            href={externalLinks.googleMaps}
            external
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            icon={<MapPin className="w-4 h-4 text-burgundy-600" />}
          >
            Get Directions
          </Button>
        </div>

        {/* Hero Information Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-charcoal-700">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pureVeg-500" />
            <span>100% Pure Vegetarian</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-burgundy-600" />
            <span>South Indian Tiffins & Dosas</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Indo-Chinese Specialties</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Special Chai & Coffee</span>
          </span>
        </div>
      </div>
    </section>
  );
}
