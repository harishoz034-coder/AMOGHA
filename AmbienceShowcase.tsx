import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ambienceHighlights } from '@/data/ambience';
import { ArrowRight, Sparkles } from 'lucide-react';

export function AmbienceShowcase() {
  return (
    <section id="ambience" className="py-24 px-4 sm:px-6 lg:px-8 bg-alabaster-100 border-t border-charcoal-100 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Dining Atmosphere"
          title="A Place for Everyday Meals"
          description="From quick breakfasts and evening tea to casual meals with family and friends, the experience feels warm, practical and inviting."
          alignment="center"
        />

        {/* Ambience Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ambienceHighlights.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-charcoal-100 hover:border-burgundy-300 transition-all duration-300 shadow-card hover:shadow-cardHover flex flex-col h-[380px]"
            >
              {/* Image */}
              <div className="relative w-full h-full bg-ivory-100">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1.5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-200 line-clamp-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="text-center">
          <Button
            href="/ambience"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View Ambience & Spaces
          </Button>
        </div>
      </div>
    </section>
  );
}
