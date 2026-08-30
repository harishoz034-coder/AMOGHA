'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';
import { PureVegBadge, SpiceBadge } from '@/components/ui/Badge';
import { externalLinks } from '@/data/links';
import { X, ShoppingBag, Sparkles, ExternalLink, Utensils } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export function DishDetailModal({ dish, onClose }: DishDetailModalProps) {
  if (!dish) return null;

  const formattedPrice = `₹${dish.price.toLocaleString('en-IN')}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-charcoal-100 shadow-2xl overflow-hidden text-charcoal-900 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-charcoal-500 hover:text-burgundy-700 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500 shadow-md backdrop-blur-sm"
          aria-label="Close dish details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header if available */}
        {dish.imageUrl ? (
          <div className="relative w-full h-56 sm:h-64 shrink-0 bg-ivory-100">
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <PureVegBadge />
              {dish.bestseller && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-burgundy-600 text-white shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Popular</span>
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="p-6 pb-0 flex items-center justify-between">
            <PureVegBadge />
            {dish.bestseller && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-burgundy-50 text-burgundy-700 border border-burgundy-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Popular</span>
              </span>
            )}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase font-bold tracking-widest text-burgundy-600">
                {dish.categoryName} {dish.subcategory ? `• ${dish.subcategory}` : ''}
              </span>
              {dish.spiceLevel && <SpiceBadge level={dish.spiceLevel} />}
            </div>

            <h3 id="dish-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
              {dish.name}
            </h3>

            {dish.teluguName && (
              <div className="text-sm text-charcoal-500 font-medium mt-0.5">
                {dish.teluguName}
              </div>
            )}
          </div>

          {/* Description */}
          {dish.description && (
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
              {dish.description}
            </p>
          )}

          {/* Details Row */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-ivory-50 border border-charcoal-100 text-xs text-charcoal-700">
            <div>
              <span className="text-charcoal-400 block mb-0.5 font-medium">Dietary Type</span>
              <span className="font-bold text-pureVeg-700">100% Pure Vegetarian</span>
            </div>
            <div>
              <span className="text-charcoal-400 block mb-0.5 font-medium">Serving Size</span>
              <span className="font-bold text-charcoal-800">{dish.servesCount || 'Generous Single Portion'}</span>
            </div>
          </div>

          {/* Source verification tag */}
          <div className="text-[11px] text-charcoal-400 italic">
            * Price and availability based on verified restaurant menu records ({dish.source === 'current-online' ? 'current online listing' : 'supplied menu reference'}). Please confirm while ordering.
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-ivory-50 border-t border-charcoal-100 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider block">
              Reference Price
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
              {formattedPrice}
            </span>
          </div>

          <a
            href={externalLinks.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-burgundy-600 hover:bg-burgundy-700 text-white shadow-md hover:shadow-burgundyGlow transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}
