import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Amogha Pure Veg Restaurant',
  description: 'Privacy policy for Amogha Pure Veg Restaurant website.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-charcoal-100 shadow-card">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-charcoal-400">Last updated: August 2026</p>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            1. Information We Collect
          </h2>
          <p>
            This website serves primarily as an informational showcase of Amogha Pure Veg Restaurant. We do not require visitors to register an account or store personal financial details.
          </p>
        </section>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            2. External Ordering Platforms
          </h2>
          <p>
            When you click on links to order online via Magicpin, Zomato, or Swiggy, you are redirected to third-party secure ordering environments that operate under their own privacy practices and data retention policies.
          </p>
        </section>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            3. Contact Information
          </h2>
          <p>
            If you have questions regarding this privacy statement, you can reach out via phone at +91 98856 57733 or visit us in person at Satyam Theatre Road, Ameerpet, Hyderabad.
          </p>
        </section>
      </div>
    </div>
  );
}
