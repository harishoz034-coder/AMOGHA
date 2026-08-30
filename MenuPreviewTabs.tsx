'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { DishDetailModal } from '@/components/menu/DishDetailModal';
import { Button } from '@/components/ui/Button';
import { menuItems } from '@/data/menu';
import { MenuCategoryType, MenuItem } from '@/types';
import { ArrowRight, Utensils } from 'lucide-react';

const previewTabs: { id: MenuCategoryType; label: string }[] = [
  { id: 'dosa', label: 'Specialty Dosas' },
  { id: 'tiffins', label: 'South Indian Tiffins' },
  { id: 'chinese', label: 'Indo-Chinese' },
  { id: 'rice', label: 'Rice & Biryani' },
  { id: 'breads', label: 'Breads & Roti' },
  { id: 'beverages', label: 'Chai & Beverages' },
];

export function MenuPreviewTabs() {
  const [activeTab, setActiveTab] = useState<MenuCategoryType>('dosa');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Pick 4 items for the selected preview tab
  const itemsForTab = menuItems
    .filter((item) => item.category === activeTab)
    .slice(0, 4);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-charcoal-100">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Explore By Category"
          title="Curated Menu Highlights"
          description="Sample our popular offerings across crisp dosas, morning tiffins, sizzling Chinese specialties, and freshly brewed chai."
          alignment="center"
        />

        {/* Tab Selector */}
        <div className="flex items-center justify-center overflow-x-auto pb-2 mb-10 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-ivory-100 border border-charcoal-200/80 shadow-inner">
            {previewTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-burgundy-600 text-white font-bold shadow-md'
                      : 'text-charcoal-700 hover:text-burgundy-700 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid for Active Tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {itemsForTab.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onSelect={(dish) => setSelectedDish(dish)}
            />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <Button
            href="/menu"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View Complete 45-Item Menu
          </Button>
        </div>
      </div>

      {/* Dish Modal */}
      <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </section>
  );
}
