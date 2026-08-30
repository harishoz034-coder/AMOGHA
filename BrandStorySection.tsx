import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { PureVegBadge } from '@/components/ui/Badge';
import { Sparkles, Utensils, Coffee, Leaf, ArrowRight } from 'lucide-react';

export function BrandStorySection() {
  const storyFeatures = [
    {
      icon: <Leaf className="w-5 h-5 text-pureVeg-600" />,
      title: '100% Pure Vegetarian',
      description: 'Strict vegetarian kitchen policy ensuring purity, hygiene, and authentic flavors in every dish.',
    },
    {
      icon: <Utensils className="w-5 h-5 text-burgundy-600" />,
      title: 'Fresh Stone-Ground Chutneys',
      description: 'Daily freshly prepared coconut, spicy ginger-tomato, and allam chutneys paired with piping hot sambar.',
    },
    {
      icon: <Coffee className="w-5 h-5 text-gold-600" />,
      title: 'Special Chai & Filter Coffee',
      description: 'Slow-simmered cardamom tea and decoction filter coffee brewed throughout the day.',
    },
  ];

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-charcoal-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Storytelling */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Visual */}
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-charcoal-100">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Amogha Pure Veg Restaurant Kitchen and Dining Ambiance"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Pure Veg Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 p-5 rounded-2xl bg-white/95 border border-burgundy-200 shadow-xl backdrop-blur-md max-w-[240px] space-y-1.5">
              <PureVegBadge />
              <p className="text-xs text-charcoal-700 leading-snug font-medium pt-1">
                South Indian tiffins, dosas & Indo-Chinese classics on Satyam Theatre Road.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-bold text-burgundy-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ameerpet Comfort Dining</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              A Pure-Veg Favourite in <br />
              <span className="text-burgundy-700">Ameerpet, Hyderabad</span>
            </h2>
          </div>

          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Amogha brings together familiar South Indian tiffins, crisp dosas, rice dishes, Indo-Chinese favourites, and beverages in a straightforward, welcoming setting in Ameerpet.
          </p>

          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Whether you are dropping in for a quick morning plate of 2 Idly 1 Wada before work, sharing a golden 70MM Dosa with friends, or unwinding over a hot cup of cardamom tea with crispy Gobi Manchurian, Amogha delivers comforting everyday dining at honest prices.
          </p>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {storyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-ivory-50 border border-charcoal-100 space-y-2 hover:border-burgundy-300 transition-colors shadow-sm"
              >
                <div className="p-2 w-fit rounded-xl bg-white border border-charcoal-100 shadow-xs">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-sm font-bold text-charcoal-900">
                  {feat.title}
                </h3>
                <p className="text-xs text-charcoal-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button
              href="/about"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Learn More About Amogha
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
