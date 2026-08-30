'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';
import { PureVegBadge, SpiceBadge } from '@/components/ui/Badge';
import { externalLinks } from '@/data/links';
import { Sparkles, ShoppingBag, Info, ExternalLink } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  compact?: boolean;
  onSelect?: (item: MenuItem) => void;
}

export function MenuItemCard({ item, compact = false, onSelect }: MenuItemCardProps) {
  const formattedPrice = `₹${item.price.toLocaleString('en-IN')}`;

  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicks directly on the order link, don't trigger modal
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group flex flex-col justify-between p-5 rounded-2xl bg-white hover:bg-ivory-50/50 border border-charcoal-100 hover:border-burgundy-300 transition-all duration-200 shadow-card hover:shadow-cardHover ${
        onSelect ? 'cursor-pointer' : ''
      }`}
    >
      <div>
        {/* Optional Visual for Signature Items */}
        {item.imageUrl && !compact && (
          <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden bg-ivory-100">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-2.5 left-2.5">
              <PureVegBadge showText={false} />
            </div>
            {item.bestseller && (
              <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-burgundy-600 text-white shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Popular</span>
              </span>
            )}
          </div>
        )}

        {/* Header: Badges & Tags */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            {!item.imageUrl && <PureVegBadge />}
            {item.spiceLevel && <SpiceBadge level={item.spiceLevel} />}
          </div>

          <div className="flex items-center gap-1.5">
            {item.bestseller && !item.imageUrl && (
              <span className="px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-burgundy-50 text-burgundy-700 border border-burgundy-200">
                Popular
              </span>
            )}
            {item.source === 'current-online' && (
              <span className="px-2 py-0.5 rounded-full text-[9px] uppercase font-semibold tracking-wider bg-ivory-100 text-charcoal-500 border border-charcoal-200">
                Online Ref
              </span>
            )}
          </div>
        </div>

        {/* Title & Telugu Name */}
        <div className="mb-2">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors leading-snug">
            {item.name}
          </h3>
          {item.teluguName && (
            <p className="text-xs text-charcoal-500 font-normal tracking-wide mt-0.5">
              {item.teluguName}
            </p>
          )}
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed mb-4">
            {item.description}
          </p>
        )}
      </div>

      {/* Footer: Price + Action */}
      <div className="pt-3 mt-2 border-t border-charcoal-100 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
            {formattedPrice}
          </span>
          <span className="text-[10px] text-charcoal-400 uppercase tracking-wider">
            {item.servesCount || 'Per portion'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onSelect && (
            <button
              type="button"
              onClick={() => onSelect(item)}
              className="p-2 rounded-full bg-ivory-100 text-charcoal-500 hover:text-burgundy-700 hover:bg-burgundy-50 transition-colors"
              title="View dish details"
              aria-label={`View details for ${item.name}`}
            >
              <Info className="w-4 h-4" />
            </button>
          )}

          <a
            href={externalLinks.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-burgundy-600 hover:bg-burgundy-700 text-white transition-all shadow-sm group-hover:shadow-burgundyGlow"
            aria-label={`Order ${item.name} online`}
          >
            <span>Order</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
