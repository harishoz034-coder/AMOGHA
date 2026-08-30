import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none text-center cursor-pointer tracking-wide';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold',
  };

  const variantStyles = {
    // Rich Wine Burgundy CTA
    primary:
      'bg-burgundy-600 hover:bg-burgundy-700 text-alabaster-50 shadow-md hover:shadow-burgundyGlow focus-visible:ring-burgundy-500 border border-burgundy-500/50',
    // Muted Warm Terracotta
    secondary:
      'bg-terracotta-500 hover:bg-terracotta-600 text-alabaster-50 shadow-sm focus-visible:ring-terracotta-400',
    // Antique Gold Accent CTA
    gold: 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-charcoal-950 font-bold shadow-md hover:shadow-glow focus-visible:ring-gold-400',
    // Elegant Luxury Light Outline
    outline:
      'bg-white/80 hover:bg-white text-charcoal-850 hover:text-burgundy-600 border border-charcoal-200 hover:border-burgundy-400 shadow-sm focus-visible:ring-burgundy-400',
    // Clean Ghost
    ghost:
      'bg-transparent hover:bg-ivory-100 text-charcoal-700 hover:text-burgundy-600 focus-visible:ring-burgundy-400',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
