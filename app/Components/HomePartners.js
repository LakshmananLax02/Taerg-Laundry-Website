'use client';

import Image from 'next/image';
import { useState } from 'react';

const partners = [
  {
    name: 'LG Commercial Laundry',
    logo: '/images/lglogo.png',
    width: 280,
    height: 90,
  },
  {
    name: 'Speed Queen Laundry',
    logo: '/images/speedlogo.png',
    width: 280,
    height: 90,
  },
  {
    name: 'SEITZ',
    logo: '/images/seitzlogo.png',
    width: 220,
    height: 90,
  },
  {
    name: 'PONY',
    logo: '/images/ponylogo.png',
    width: 240,
    height: 90,
  },
];

export default function TrustedPartners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <section id="partners" className="bg-white px-6 py-10 font-sans sm:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Tag/Badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0B2545] px-4 py-1.5 text-white shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
          <span className="text-xs font-medium tracking-wide">Our partners</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-7 text-4xl font-normal tracking-tight text-[#0B2545] md:mb-8 md:text-5xl">
          Trusted Partners
        </h2>

        {/* Partners Logos Grid */}
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 items-center justify-items-center gap-x-6 gap-y-5 md:grid-cols-4 md:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative flex h-14 w-full max-w-[210px] items-center justify-center sm:h-16"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                onMouseEnter={() => setHoveredPartner(partner.name)}
                onMouseLeave={() => setHoveredPartner(null)}
                className="max-h-12 w-auto object-contain transition-all duration-300 ease-out sm:max-h-20"
                style={{
                  transform: hoveredPartner === partner.name ? 'scale(1.05)' : 'scale(1)',
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
