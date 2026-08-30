'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { DishDetailModal } from '@/components/menu/DishDetailModal';
import { Button } from '@/components/ui/Button';
import { signatureDishes } from '@/data/menu';
import { MenuItem } from '@/types';
import { ArrowRight } from 'lucide-react';

export function SignatureDishes() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <section id="signatures" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-alabaster-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          subtitle="Customer Favourites"
          title="Comfort Food, Done Right"
          description="From crisp golden dosas and cloud-soft idly-vadas to sizzling Indo-Chinese wok specials and a hot glass of cardamom tea."
          alignment="center"
        />

        {/* Signature Dishes 8-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {signatureDishes.map((dish) => (
            <MenuItemCard
              key={dish.id}
              item={dish}
              onSelect={(item) => setSelectedDish(item)}
            />
          ))}
        </div>

        {/* View Full Menu Action */}
        <div className="text-center">
          <Button
            href="/menu"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Full 45+ Item Menu
          </Button>
        </div>
      </div>

      {/* Dish Quick View Modal */}
      <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </section>
  );
}
