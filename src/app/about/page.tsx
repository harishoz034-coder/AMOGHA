import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PureVegBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { externalLinks } from '@/data/links';
import { Sparkles, Utensils, Coffee, Leaf, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Our Story | Amogha Pure Veg Restaurant Ameerpet',
  description:
    'Learn about Amogha Pure Veg on Satyam Theatre Road, Ameerpet — authentic South Indian tiffins, specialty dosas, Indo-Chinese classics, and our 100% vegetarian kitchen promise.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-pureVeg-600" />,
      title: '100% Vegetarian Integrity',
      description:
        'A dedicated pure vegetarian kitchen with absolute commitment to vegetarian purity, quality ingredients, and clean food handling.',
    },
    {
      icon: <Utensils className="w-6 h-6 text-burgundy-600" />,
      title: 'Traditional Tiffin Craftsmanship',
      description:
        'Fermented batters ground to the right consistency and roasted on seasoned cast-iron griddles for authentic crispiness and aroma.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-600" />,
      title: 'Honest Value & Everyday Comfort',
      description:
        'Hearty, wholesome meals priced fairly so students, professionals, and families can enjoy delicious everyday dining.',
    },
    {
      icon: <Coffee className="w-6 h-6 text-terracotta-500" />,
      title: 'Fresh Daily Brews',
      description:
        'Aromatic cardamom-scented tea and rich South Indian filter coffee brewed fresh to fuel your mornings and evenings.',
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-bold text-burgundy-600 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-4 tracking-tight">
          A Pure-Veg Favourite in Ameerpet
        </h1>
        <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
          Bringing together the comforting flavors of South Indian tiffin traditions and Indo-Chinese favorites on Satyam Theatre Road.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
        {/* Left Column: Image Collage */}
        <div className="lg:col-span-6 relative">
          <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-luxury border border-charcoal-100 bg-ivory-100">
            <Image
              src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80"
              alt="Crisp Masala Dosa and Idly Sambar at Amogha Pure Veg"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-4 sm:-right-6 p-5 rounded-2xl bg-white border border-burgundy-200 shadow-xl max-w-[240px]">
            <PureVegBadge />
            <p className="text-xs text-charcoal-700 font-semibold mt-2">
              Satyam Theatre Road, Ameerpet, Hyderabad
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Text */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 leading-tight">
            Comfort Food, Done Right for Everyday Diners
          </h2>

          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Amogha Pure Veg was built around a simple principle: delicious, comforting vegetarian food served fresh and fast in a clean, welcoming environment.
          </p>

          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            In a bustling neighborhood like Ameerpet — surrounded by coaching centers, residential communities, and commercial offices — finding reliable everyday meals is essential. We focus on getting the fundamentals right: slow-fermented dosa batters, crisp ghee roasts, freshly stone-ground chutneys, robust vegetable biryanis, and aromatic cups of hot tea.
          </p>

          <div className="p-4 rounded-2xl bg-ivory-50 border border-burgundy-200/60 text-xs text-charcoal-600 space-y-1">
            <strong className="text-charcoal-900 block font-bold">The Amogha Promise:</strong>
            <span>100% pure vegetarian preparation, fresh ingredients sourced daily, and quick service for dine-in and takeaways.</span>
          </div>
        </div>
      </div>

      {/* Core Pillars */}
      <div className="mb-20">
        <SectionHeading
          subtitle="Our Standards"
          title="What Defines Amogha"
          description="The culinary principles and hospitality values behind every plate we serve."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-charcoal-100 hover:border-burgundy-300 shadow-card hover:shadow-cardHover transition-all space-y-3"
            >
              <div className="p-3 w-fit rounded-2xl bg-ivory-50 border border-charcoal-100">
                {v.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal-900">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-charcoal-100 text-center space-y-4 shadow-luxury max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
          Visit Us on Satyam Theatre Road
        </h3>
        <p className="text-sm text-charcoal-600">
          Join us for breakfast, lunch, evening tea, or dinner in Ameerpet.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href="/menu" variant="primary" size="md">
            Explore Menu
          </Button>
          <Button
            href={externalLinks.googleMaps}
            external
            variant="outline"
            size="md"
            icon={<MapPin className="w-4 h-4 text-burgundy-600" />}
          >
            Get GPS Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
