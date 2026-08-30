'use client';

import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '@/data/menu';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { MenuFilterBar } from '@/components/menu/MenuFilterBar';
import { PriceDisclaimer } from '@/components/menu/PriceDisclaimer';
import { DishDetailModal } from '@/components/menu/DishDetailModal';
import { PureVegBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { externalLinks } from '@/data/links';
import { MenuCategoryType, MenuItem } from '@/types';
import { ShoppingBag, Phone, MapPin, Sparkles, FilterX, HelpCircle } from 'lucide-react';

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'popular'>('default');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    return menuItems
      .filter((item) => {
        // Category filter
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchesName = item.name.toLowerCase().includes(query);
          const matchesDesc = item.description?.toLowerCase().includes(query) || false;
          const matchesTelugu = item.teluguName?.toLowerCase().includes(query) || false;
          if (!matchesName && !matchesDesc && !matchesTelugu) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'popular') {
          const scoreA = (a.bestseller ? 2 : 0) + (a.featured ? 1 : 0);
          const scoreB = (b.bestseller ? 2 : 0) + (b.featured ? 1 : 0);
          return scoreB - scoreA;
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  // Group by category if 'all' is selected and no search
  const groupedCategories = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    const categoriesMap: { [key in MenuCategoryType]?: MenuItem[] } = {};
    filteredItems.forEach((item) => {
      if (!categoriesMap[item.category]) {
        categoriesMap[item.category] = [];
      }
      categoriesMap[item.category]!.push(item);
    });

    return menuCategories
      .filter((cat) => cat.id !== 'all' && categoriesMap[cat.id as MenuCategoryType]?.length)
      .map((cat) => ({
        id: cat.id,
        name: cat.name,
        items: categoriesMap[cat.id as MenuCategoryType] || [],
      }));
  }, [filteredItems, selectedCategory, searchQuery]);

  const faqs = [
    {
      q: 'Is everything at Amogha 100% pure vegetarian?',
      a: 'Yes, absolutely. Amogha Pure Veg operates a strictly vegetarian kitchen with zero non-vegetarian items, poultry, or egg products used in any preparations.',
    },
    {
      q: 'What is special about the Amogh Special Dosa?',
      a: 'The Amogh Special Dosa is our signature house creation layered with grated cottage cheese (paneer), roasted cashews, fresh spices, and golden melted butter roasted over a crisp crepe.',
    },
    {
      q: 'Are tiffins available throughout the day?',
      a: 'Our core tiffins including Idly, Wada, and our full range of specialty dosas are freshly prepared during morning and evening tiffin hours.',
    },
    {
      q: 'How do I place an online delivery order?',
      a: 'You can order directly through our verified Magicpin listing or contact the restaurant directly at +91 98856 57733 for parcel inquiries.',
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-bold text-burgundy-600 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>100% Pure Vegetarian Menu</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-4 tracking-tight">
          Our Digital Menu
        </h1>
        <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
          Explore our complete selection of South Indian morning tiffins, golden specialty dosas, flavorful rice items, sizzling Indo-Chinese, and fresh cardamom chai.
        </p>

        {/* Quick External CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Button
            href={externalLinks.orderOnline}
            external
            variant="primary"
            size="sm"
            icon={<ShoppingBag className="w-3.5 h-3.5" />}
          >
            Order on Magicpin
          </Button>

          <Button
            href={externalLinks.call}
            external
            variant="outline"
            size="sm"
            icon={<Phone className="w-3.5 h-3.5 text-burgundy-600" />}
          >
            Call +91 98856 57733
          </Button>

          <Button
            href={externalLinks.googleMaps}
            external
            variant="ghost"
            size="sm"
            icon={<MapPin className="w-3.5 h-3.5 text-burgundy-600" />}
          >
            Get Directions
          </Button>
        </div>
      </div>

      {/* Mandatory PRD Indicative Pricing Disclaimer */}
      <div className="mb-8 max-w-4xl mx-auto">
        <PriceDisclaimer />
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-30 bg-alabaster-100/95 backdrop-blur-md pt-3 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-charcoal-200/80 shadow-xs mb-8">
        <MenuFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={filteredItems.length}
        />
      </div>

      {/* Menu Cards Rendering */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-charcoal-200 max-w-lg mx-auto space-y-4 shadow-sm">
          <FilterX className="w-12 h-12 text-burgundy-600 mx-auto opacity-80" />
          <h3 className="font-serif text-2xl font-bold text-charcoal-900">No dishes found</h3>
          <p className="text-sm text-charcoal-500">
            We couldn&apos;t find any dishes matching your search query. Try searching for &ldquo;dosa&rdquo;, &ldquo;idly&rdquo;, or &ldquo;manchurian&rdquo;.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSortBy('default');
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : groupedCategories ? (
        /* Grouped view by Category */
        <div className="space-y-16">
          {groupedCategories.map((catGroup) => (
            <section key={catGroup.id} id={catGroup.id} className="scroll-mt-36">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-charcoal-200">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                  {catGroup.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-burgundy-50 text-burgundy-700 border border-burgundy-200">
                  {catGroup.items.length} items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catGroup.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onSelect={(dish) => setSelectedDish(dish)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        /* Flat filtered results grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onSelect={(dish) => setSelectedDish(dish)}
            />
          ))}
        </div>
      )}

      {/* Culinary Notes & FAQ */}
      <div className="mt-20 pt-16 border-t border-charcoal-200 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
            South Indian Tiffin & Dining Notes
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Insights into our daily preparations, pure veg kitchen standards, and tiffin timings.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-5 rounded-2xl bg-white border border-charcoal-100 space-y-2 shadow-sm"
            >
              <h4 className="font-bold text-charcoal-900 text-sm flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-burgundy-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Callout */}
      <div className="mt-16 p-8 rounded-3xl bg-white border border-burgundy-200 text-center space-y-4 shadow-luxury">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
          Craving Crisp Dosas or Indo-Chinese Specials?
        </h3>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto">
          Visit Amogha on Satyam Theatre Road for fresh table dining or order directly on Magicpin for quick doorstep delivery.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            href={externalLinks.orderOnline}
            external
            variant="primary"
            size="md"
            icon={<ShoppingBag className="w-4 h-4" />}
          >
            Order on Magicpin
          </Button>

          <Button
            href={externalLinks.googleMaps}
            external
            variant="outline"
            size="md"
            icon={<MapPin className="w-4 h-4 text-burgundy-600" />}
          >
            Directions to Ameerpet
          </Button>
        </div>
      </div>

      {/* Interactive Dish Quick View Modal */}
      <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}
