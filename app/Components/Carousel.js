'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Transforming Campus Laundry into a',
    highlightTitle: 'Premium Student Experience.',
    description:
      'Deliver a fully managed, technology-driven laundry solution for your institution with seamless operations, transparent reporting, and an exceptional student experience.',
    bgImage: '/images/carouselimg1.png',
    showButtons: true,
  },
  {
    id: 2,
    title: '',
    highlightTitle: '',
    description: '',
    bgImage: '/images/carouselimg2.png',
    showButtons: false,
  },

  {
    id: 3,
    title: '',
    highlightTitle: '',
    description: '',
    bgImage: '/images/carouselimg3.png',
    showButtons: false,
  },

  {
    id: 4,
    title: '',
    highlightTitle: '',
    description: '',
    bgImage: '/images/carouselimg4.png',
    showButtons: false,
  },
  
//   {
//     id: 3,
//     title: 'Smart Machines.',
//     highlightTitle: 'Zero Downtime Operations.',
//     description:
//       'Commercial grade equipment paired with IoT monitoring ensures smooth daily workflow for thousands of students.',
//     bgImage: '/images/hero-machines.jpg',
//     showButtons: true,
//   },
];

export default function StackedHero() {
  return (
    <section className="relative w-full bg-white pt-2">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="carousel-card-shimmer sticky top-24 w-full h-[calc(100vh-7.5rem)] min-h-[540px] mb-[15vh] last:mb-0 rounded-xl overflow-hidden shadow-xl border border-gray-100/20"
          style={{
            zIndex: index + 1,
          }}
        >
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
          </div>

          {/* Card Content Grid */}
          <div
            className={`relative z-10 h-full w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col text-white ${
              slide.description || slide.showButtons
                ? 'justify-end pb-12 lg:justify-center lg:pb-0'
                : 'items-center justify-center text-center'
            }`}
          >
            <div
              className={`grid grid-cols-1 gap-8 items-center ${
                slide.description || slide.showButtons
                  ? 'lg:grid-cols-12'
                  : 'w-full place-items-center text-center'
              }`}
            >
              
              {/* Main Heading Column */}
              <div
                className={`space-y-2 ${
                  slide.description || slide.showButtons
                    ? 'lg:col-span-7'
                    : 'w-full max-w-none text-center'
                }`}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
                  {slide.title}
                  <span className="block font-medium text-gray-200 mt-1">
                    {slide.highlightTitle}
                  </span>
                </h1>
              </div>

              {/* Description & Action Buttons Column */}
              <div className="lg:col-span-5 space-y-6 lg:pl-6">
                {slide.description && (
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                )}

                {slide.showButtons && (
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="action-ripple action-ripple--call gap-2 px-6 py-2.5 text-sm font-semibold shadow-md"
                    >
                      <Phone size={16} />
                      Call us now
                    </a>
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-ripple action-ripple--whatsapp gap-2 px-6 py-2.5 text-sm font-semibold shadow-md"
                    >
                      <FaWhatsapp size={18} aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Keeps the final card pinned after it fully covers the previous card. */}
      <div className="h-[75vh] bg-[#08265A]" aria-hidden="true" />

      {/* Continuous marquee below the carousel stack. */}
      <div
        className="h-32 overflow-hidden bg-[#08265A] text-white"
        aria-label="Partnering with Colleges and Universities. Creating Smart Laundry Experiences."
      >
        <div className="carousel-marquee-track h-full items-center">
          <span className="carousel-marquee-copy" aria-hidden="true">
            Partnering with Colleges &amp; Universities <b>•</b> Creating Smart Laundry Experiences <b>•</b>
          </span>
          <span className="carousel-marquee-copy" aria-hidden="true">
            Partnering with Colleges &amp; Universities <b>•</b> Creating Smart Laundry Experiences <b>•</b>
          </span>
        </div>
      </div>
    </section>
  );
}
