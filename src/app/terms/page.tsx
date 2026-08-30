import React from 'react';

export const metadata = {
  title: 'Terms of Service | Amogha Pure Veg Restaurant',
  description: 'Terms of service and pricing policies for Amogha Pure Veg Restaurant in Ameerpet, Hyderabad.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-charcoal-100 shadow-card">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
          Terms of Service & Pricing Policy
        </h1>
        <p className="text-xs text-charcoal-400">Last updated: August 2026</p>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            1. Indicative Menu Pricing
          </h2>
          <p>
            Menu items, item availability, and prices displayed on this website are based on supplied restaurant photographs and current third-party directory listings (e.g., Magicpin). Prices are indicative only and subject to change without prior notice based on outlet updates, delivery partner platform commissions, packaging charges, and applicable government taxes.
          </p>
        </section>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            2. Pure Vegetarian Policy
          </h2>
          <p>
            Amogha Pure Veg operates a strictly 100% vegetarian kitchen. We do not prepare, store, or serve any non-vegetarian meat, poultry, seafood, or egg products on our premises.
          </p>
        </section>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            3. Third-Party Platforms
          </h2>
          <p>
            Links to external ordering and discovery platforms (including Magicpin, Google Maps, Zomato, and Swiggy) are provided for visitor convenience. Orders placed on third-party platforms are governed by their respective terms, refund policies, and delivery timelines.
          </p>
        </section>

        <section className="space-y-3 text-sm text-charcoal-600 leading-relaxed">
          <h2 className="font-serif text-lg font-bold text-charcoal-900">
            4. Contact
          </h2>
          <p>
            For any direct inquiries, parcel confirmations, or feedback, please contact Amogha Pure Veg at Satyam Theatre Rd, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad (+91 98856 57733).
          </p>
        </section>
      </div>
    </div>
  );
}
