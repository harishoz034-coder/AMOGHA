import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PureVegBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ambienceGallery, diningFeatures } from '@/data/ambience';
import { externalLinks } from '@/data/links';
import { Sparkles, MapPin, Coffee, Utensils, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Ambience & Dining Spaces | Amogha Pure Veg Restaurant',
  description:
    'Experience the warm, practical and welcoming dining spaces at Amogha Pure Veg on Satyam Theatre Road, Ameerpet.',
};

export default function AmbiencePage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-bold text-burgundy-600 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Dining Atmosphere</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-4 tracking-tight">
          Simple. Warm. Welcoming.
        </h1>
        <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
          A comfortable setting on Satyam Theatre Road for breakfast, evening tea, quick meals, and casual dining with family and friends.
        </p>
      </div>

      {/* Editorial Photo Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {ambienceGallery.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl overflow-hidden bg-white border border-charcoal-100 shadow-card hover:shadow-cardHover transition-all flex flex-col"
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-ivory-100">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-burgundy-700 border border-burgundy-200/80 shadow-sm backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-2">
              <div className="text-xs font-semibold text-gold-600 uppercase tracking-wider">
                {item.subtitle}
              </div>
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dining Features Row */}
      <div className="mb-20">
        <SectionHeading
          subtitle="Guest Comfort"
          title="Designed for Everyday Convenience"
          description="Everything you need for a comfortable dining stop in Ameerpet."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diningFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-charcoal-100 shadow-card space-y-3"
            >
              <h3 className="font-serif text-base font-bold text-charcoal-900">
                {feat.title}
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-burgundy-200 text-center space-y-4 shadow-luxury max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
          Drop in for Breakfast, Tea or Dinner
        </h3>
        <p className="text-sm text-charcoal-600">
          Satyam Theatre Rd, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            href={externalLinks.googleMaps}
            external
            variant="primary"
            size="md"
            icon={<MapPin className="w-4 h-4" />}
          >
            Get GPS Directions
          </Button>
          <Button href="/menu" variant="outline" size="md">
            View Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
