import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickInfoBar } from '@/components/home/QuickInfoBar';
import { SignatureDishes } from '@/components/home/SignatureDishes';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { AmbienceShowcase } from '@/components/home/AmbienceShowcase';
import { MenuPreviewTabs } from '@/components/home/MenuPreviewTabs';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LocationMapSection } from '@/components/home/LocationMapSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickInfoBar />
      <SignatureDishes />
      <BrandStorySection />
      <AmbienceShowcase />
      <MenuPreviewTabs />
      <TestimonialsSection />
      <LocationMapSection />
    </>
  );
}
