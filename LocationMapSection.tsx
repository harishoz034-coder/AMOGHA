import React from 'react';
import { restaurantData } from '@/data/restaurant';
import { externalLinks } from '@/data/links';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PureVegBadge } from '@/components/ui/Badge';
import { MapPin, Phone, Clock, ShoppingBag, Navigation, ExternalLink } from 'lucide-react';

export function LocationMapSection() {
  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-charcoal-100">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Location & Directions"
          title="Find Amogha in Ameerpet"
          description="Conveniently situated on Satyam Theatre Road, Kumar Basti, Srinivasa Nagar, Ameerpet."
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Card & CTAs */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-ivory-50 border border-charcoal-100 shadow-luxury space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-700">
                  {restaurantData.brandDisplay}
                </div>
                <PureVegBadge />
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-burgundy-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 block font-bold mb-0.5">Address</strong>
                    <span>{restaurantData.address.fullFormatted}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-burgundy-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 block font-bold mb-0.5">Telephone</strong>
                    <a
                      href={externalLinks.call}
                      className="font-bold text-burgundy-700 hover:underline text-base"
                    >
                      {restaurantData.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 block font-bold mb-0.5">Hours</strong>
                    <span>{restaurantData.hours.display} (All 7 Days)</span>
                    <span className="text-[11px] text-charcoal-400 block mt-0.5">
                      {restaurantData.hours.sourceNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-charcoal-200/80">
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
                Order Online on Magicpin
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-card border border-charcoal-100 min-h-[420px] bg-ivory-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.666872550502!2d78.4483!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c1f5b08a6b%3A0x44a7f6fce52c038c!2sSatyam%20Theatre%20Rd%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amogha Pure Veg Restaurant Google Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
