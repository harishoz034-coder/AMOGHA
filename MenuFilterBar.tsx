'use client';

import React from 'react';
import { MenuCategoryType } from '@/types';
import { menuCategories } from '@/data/menu';
import { PureVegBadge } from '@/components/ui/Badge';
import { Search, ArrowUpDown, X } from 'lucide-react';

interface MenuFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: MenuCategoryType;
  setSelectedCategory: (cat: MenuCategoryType) => void;
  sortBy: 'default' | 'price-asc' | 'price-desc' | 'popular';
  setSortBy: (sort: 'default' | 'price-asc' | 'price-desc' | 'popular') => void;
  totalResults: number;
}

export function MenuFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  totalResults,
}: MenuFilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Top Row: Search Input + Permanent Pure Veg Badge + Sort Selector */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dosas, tiffins, rice, Manchurian, chai..."
            className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-charcoal-200 text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-burgundy-500 shadow-sm transition-all"
            aria-label="Search menu items"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-charcoal-400 hover:text-charcoal-700 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Permanent Pure-Veg Badge + Sorting */}
        <div className="flex items-center gap-2.5 shrink-0 justify-between sm:justify-end">
          {/* Permanent 100% Pure Veg indicator */}
          <PureVegBadge className="py-2 px-3.5 text-xs shadow-sm bg-white" />

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as 'default' | 'price-asc' | 'price-desc' | 'popular'
                )
              }
              className="appearance-none pl-9 pr-8 py-2.5 rounded-full bg-white border border-charcoal-200 text-charcoal-800 text-xs font-semibold focus:outline-none focus:border-burgundy-500 shadow-sm cursor-pointer"
              aria-label="Sort dishes"
            >
              <option value="default">Sort by: Default</option>
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-charcoal-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Horizontal Category Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {menuCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as MenuCategoryType)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 shadow-sm ${
                isSelected
                  ? 'bg-burgundy-600 text-white font-bold shadow-md'
                  : 'bg-white text-charcoal-700 hover:text-burgundy-700 hover:bg-ivory-50 border border-charcoal-200/80'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                  isSelected ? 'bg-burgundy-800 text-white' : 'bg-ivory-100 text-charcoal-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results Count Line */}
      <div className="flex items-center justify-between text-xs text-charcoal-400 px-1 pt-1">
        <span>
          Showing <strong className="text-charcoal-800">{totalResults}</strong> dishes
        </span>
        {searchQuery && (
          <span>
            Search results for &ldquo;
            <strong className="text-burgundy-700">{searchQuery}</strong>&rdquo;
          </span>
        )}
      </div>
    </div>
  );
}
