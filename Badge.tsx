import React from 'react';
import { SpiceLevel } from '@/types';
import { Leaf, Flame } from 'lucide-react';

interface PureVegBadgeProps {
  className?: string;
  showText?: boolean;
}

export function PureVegBadge({ className = '', showText = true }: PureVegBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-pureVeg-50 text-pureVeg-700 border border-pureVeg-500/40 shadow-sm ${className}`}
      title="100% Pure Vegetarian"
    >
      <span className="w-2 h-2 rounded-full bg-pureVeg-500 ring-2 ring-pureVeg-100" />
      {showText && <span>Pure Veg</span>}
    </span>
  );
}

interface SpiceBadgeProps {
  level: SpiceLevel;
  className?: string;
}

export function SpiceBadge({ level, className = '' }: SpiceBadgeProps) {
  if (level === 'none') return null;

  const spiceConfigs: Record<
    SpiceLevel,
    { label: string; flames: number; style: string }
  > = {
    none: { label: '', flames: 0, style: '' },
    mild: {
      label: 'Mild',
      flames: 1,
      style: 'bg-emerald-50 text-emerald-700 border-emerald-300',
    },
    medium: {
      label: 'Medium',
      flames: 2,
      style: 'bg-amber-50 text-amber-800 border-amber-300',
    },
    spicy: {
      label: 'Spicy',
      flames: 3,
      style: 'bg-orange-50 text-orange-800 border-orange-300',
    },
    very_spicy: {
      label: 'Fiery',
      flames: 4,
      style: 'bg-rose-50 text-rose-800 border-rose-400 font-bold',
    },
  };

  const config = spiceConfigs[level];

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold border ${config.style} ${className}`}
    >
      <Flame className="w-3 h-3 text-current" />
      <span>{config.label}</span>
    </span>
  );
}
