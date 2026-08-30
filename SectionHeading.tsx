import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignStyles[alignment]} ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-bold text-burgundy-600 mb-3">
          <span className="w-6 h-px bg-gold-400" />
          <span>{subtitle}</span>
          <span className="w-6 h-px bg-gold-400" />
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-charcoal-500 font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
