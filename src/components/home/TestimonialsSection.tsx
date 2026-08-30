import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PureVegBadge } from '@/components/ui/Badge';
import { Star, Quote, Coffee, Sparkles } from 'lucide-react';

export function TestimonialsSection() {
  const highlights = [
    {
      author: 'Naveen Kumar',
      tag: 'Morning Tiffin Regular',
      dish: 'Ghee Karam Dosa & Idly-Wada',
      text: 'One of the most reliable breakfast spots near Satyam Theatre Road. The Ghee Karam Dosa has a great spicy punch and the sambar is always piping hot.',
      rating: 5,
    },
    {
      author: 'Pooja Sharma',
      tag: 'Student & Quick Meals',
      dish: 'Gobi Manchurian & Veg Fried Rice',
      text: 'Affordable, clean, and 100% pure veg. We regularly order Chinese snacks and tea after coaching classes. Great value for money in Ameerpet.',
      rating: 5,
    },
    {
      author: 'Srinivas Murthy',
      tag: 'Family Dinner',
      dish: '70MM Dosa & Special Tea',
      text: 'Crisp, huge dosas that the kids love. The tea counter serves exceptional cardamom tea in the evening. Friendly staff and fast service.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-alabaster-100 border-t border-charcoal-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Diner Feedback"
          title="Loved by Ameerpet Locals & Students"
          description="What everyday guests appreciate most about our crisp dosas, fresh chutneys, quick service, and honest pricing."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.author}
              className="p-8 rounded-3xl bg-white border border-charcoal-100 hover:border-burgundy-300 transition-all duration-300 shadow-card hover:shadow-cardHover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-ivory-100 text-charcoal-600 border border-charcoal-200">
                    {item.tag}
                  </span>
                </div>

                <div className="text-xs text-burgundy-700 font-bold">
                  Favourite: <strong className="text-charcoal-900">{item.dish}</strong>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal-100 text-xs font-semibold text-charcoal-800">
                — {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
