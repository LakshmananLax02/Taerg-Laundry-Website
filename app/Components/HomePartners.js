'use client';

import Image from 'next/image';

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
  return (
    <section id="partners" className="bg-white px-6 py-10 font-sans sm:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Tag/Badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0B2545] px-4 py-1.5 text-white shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
          <span className="text-xs font-medium tracking-wide">Our partners</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-topic mb-7 text-[#0B2545] md:mb-8">
          Trusted Partners
        </h2>

        {/* Partners Logos Grid */}
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 items-center justify-items-center gap-x-6 gap-y-5 md:grid-cols-4 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="partner-logo-perspective relative flex h-16 w-full max-w-[210px] items-center justify-center sm:h-20"
              style={{ '--partner-delay': `${index * 0.45}s` }}
            >
              <div className="partner-logo-rotator">
                <div className="partner-logo-face">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="max-h-18 w-auto object-contain sm:max-h-20"
                  />
                </div>
                <div className="partner-logo-face partner-logo-face--back" aria-hidden="true">
                  <Image
                    src={partner.logo}
                    alt=""
                    width={partner.width}
                    height={partner.height}
                    className="max-h-12 w-auto object-contain sm:max-h-16"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
