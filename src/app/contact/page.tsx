import React from 'react';
import { restaurantData } from '@/data/restaurant';
import { externalLinks } from '@/data/links';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PureVegBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Clock, ShoppingBag, Navigation, Sparkles, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Contact & Location | Amogha Pure Veg Restaurant Ameerpet',
  description:
    'Visit Amogha Pure Veg on Satyam Theatre Road, Ameerpet, Hyderabad. Find address, phone number +91 98856 57733, operating hours, and Google Maps directions.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-bold text-burgundy-600 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Find & Contact Us</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-4 tracking-tight">
          Visit Amogha in Ameerpet
        </h1>
        <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
          Conveniently located on Satyam Theatre Road, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-charcoal-100 shadow-luxury flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-charcoal-100">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-700">
                  {restaurantData.brandDisplay}
                </span>
                <p className="text-xs text-gold-600 font-medium">Pure Veg Restaurant</p>
              </div>
              <PureVegBadge />
            </div>

            {/* Details */}
            <div className="space-y-4 text-sm text-charcoal-700">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-burgundy-50 text-burgundy-700 shrink-0 border border-burgundy-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-bold mb-0.5">Address</strong>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {restaurantData.address.fullFormatted}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-burgundy-50 text-burgundy-700 shrink-0 border border-burgundy-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-bold mb-0.5">Direct Calling</strong>
                  <a
                    href={externalLinks.call}
                    className="text-base font-bold text-burgundy-700 hover:underline block"
                  >
                    {restaurantData.displayPhone}
                  </a>
                  <span className="text-[11px] text-charcoal-400">Tappable for mobile calls</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-ivory-100 text-gold-700 shrink-0 border border-ivory-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-charcoal-900 font-bold mb-0.5">Published Hours</strong>
                  <p className="text-xs sm:text-sm text-charcoal-800 font-semibold">
                    {restaurantData.hours.display}
                  </p>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">
                    {restaurantData.hours.sourceNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-charcoal-100">
            <Button
              href={externalLinks.googleMaps}
              external
              variant="primary"
              size="md"
              className="w-full justify-center shadow-sm"
              icon={<Navigation className="w-4 h-4" />}
            >
              Get Directions
            </Button>

            <Button
              href={externalLinks.call}
              external
              variant="outline"
              size="md"
              className="w-full justify-center"
              icon={<Phone className="w-4 h-4 text-burgundy-600" />}
            >
              Call Restaurant
            </Button>

            <Button
              href={externalLinks.orderOnline}
              external
              variant="gold"
              size="md"
              className="w-full justify-center sm:col-span-2 shadow-sm"
              icon={<ShoppingBag className="w-4 h-4" />}
            >
              Order on Magicpin
            </Button>
          </div>
        </div>

        {/* Map Embed */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-card border border-charcoal-100 min-h-[440px] bg-ivory-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.666872550502!2d78.4483!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c1f5b08a6b%3A0x44a7f6fce52c038c!2sSatyam%20Theatre%20Rd%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '460px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amogha Pure Veg Restaurant Google Map"
          />
        </div>
      </div>

      {/* Visitor Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-xs sm:text-sm text-charcoal-600">
        <div className="p-5 rounded-2xl bg-white border border-charcoal-100 space-y-1 shadow-sm">
          <strong className="text-charcoal-900 block font-bold">🚍 Nearby Transit</strong>
          <p>Easily accessible from Ameerpet Metro Interchange Station and local TSRTC bus stops.</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-charcoal-100 space-y-1 shadow-sm">
          <strong className="text-charcoal-900 block font-bold">🛵 Parcel & Takeaway</strong>
          <p>Quick parcel counter available for morning tiffins, evening snacks, and tea.</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-charcoal-100 space-y-1 shadow-sm">
          <strong className="text-charcoal-900 block font-bold">🕒 Peak Hours</strong>
          <p>Morning tiffin rush (8:00 AM – 11:00 AM) and evening chai & snack hours (4:30 PM – 7:30 PM).</p>
        </div>
      </div>
    </div>
  );
}
