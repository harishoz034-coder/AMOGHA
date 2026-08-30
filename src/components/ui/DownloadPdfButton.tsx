'use client';

import React, { useState } from 'react';
import { FileDown, Loader2 } from 'lucide-react';

interface DownloadPdfButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export function DownloadPdfButton({
  className = '',
  variant = 'outline',
  size = 'sm',
  label = 'Download PDF',
}: DownloadPdfButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownloadPdf = () => {
    setLoading(true);
    setTimeout(() => {
      window.print();
      setLoading(false);
    }, 250);
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3.5 text-sm',
  }[size];

  const variantStyles = {
    primary: 'bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold',
    secondary: 'bg-ivory-100 hover:bg-ivory-200 text-charcoal-900 border border-charcoal-200',
    outline: 'bg-white hover:bg-burgundy-50 text-burgundy-700 border border-burgundy-300 hover:border-burgundy-600',
  }[variant];

  return (
    <button
      type="button"
      onClick={handleDownloadPdf}
      disabled={loading}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      title="Download restaurant menu & brochure as PDF"
      aria-label="Download PDF"
    >
      {loading ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
      ) : (
        <FileDown className="w-3.5 h-3.5 text-burgundy-700" />
      )}
      <span>{loading ? 'Preparing...' : label}</span>
    </button>
  );
}
