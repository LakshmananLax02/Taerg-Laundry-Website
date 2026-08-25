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
    title: 'A Smarter Campus Service for',
    highlightTitle: 'Students and Institutions.',
    bgImage: '/images/carousel2.png',
    showButtons: false,
  },

  {
    id: 3,
    title: 'More Time for Learning.',
    highlightTitle: 'Less Time Managing Laundry.',
    bgImage: '/images/carousel3.png',
    showButtons: false,
  },

  {
    id: 4,
    title: 'Fully Managed Operations.',
    highlightTitle: 'Clearer Control for Management.',
    bgImage: '/images/carousel4.png',
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
          className="carousel-card-shimmer sticky top-24 mb-[15vh] h-[calc(100svh-6rem)] min-h-[520px] w-full overflow-hidden rounded-xl border border-gray-100/20 shadow-xl last:mb-0 md:h-[calc(100vh-7.5rem)] md:min-h-[540px]"
          style={{
            zIndex: index + 1,
          }}
        >
          {/* Background image shown at its original brightness. */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card Content Grid */}
          <div
            className={`${
              slide.description || slide.showButtons
                ? 'relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-8 text-white lg:px-12 lg:py-0'
                : 'absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-white lg:px-12'
            }`}
          >
            <div
              className={`${
                slide.description || slide.showButtons
                  ? 'grid grid-cols-1 items-center gap-8 lg:grid-cols-12'
                  : 'grid h-full w-full place-items-center text-center'
              }`}
            >
              
              {/* Main Heading Column */}
              <div
                className={`space-y-2 ${
                  slide.description || slide.showButtons
                    ? 'lg:col-span-7'
                    : 'flex w-full items-center justify-center text-center'
                }`}
              >
                <h1
                  className={`leading-tight tracking-tight ${
                    index === 0
                      ? 'text-3xl font-semibold md:text-5xl lg:text-6xl'
                      : 'm-0 flex max-w-[95%] flex-col items-center justify-center gap-0 text-2xl font-normal leading-[1.12] md:text-4xl lg:max-w-[90%] lg:text-5xl'
                  } [text-shadow:0_2px_18px_rgba(0,0,0,0.72)]`}
                >
                  {slide.title}
                  <span className={`${index === 0 ? 'mt-1' : 'mt-0'} block text-gray-200`}>
                    {slide.highlightTitle}
                  </span>
                </h1>
              </div>

              {/* Description & Action Buttons Column */}
              {(slide.description || slide.showButtons) && (
                <div className="space-y-6 lg:col-span-5 lg:pl-6">
                  {slide.description && (
                    <p className="max-w-lg text-sm font-light leading-relaxed text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.78)] md:text-base">
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
              )}

            </div>
          </div>
        </div>
      ))}

      {/* Keeps the final card pinned after it fully covers the previous card. */}
      <div className="h-[75vh] bg-[#08265A]" aria-hidden="true" />

      {/* Continuous marquee below the carousel stack. */}
      <div
        className="h-32 overflow-hidden bg-[#08265A] text-white lg:h-20"
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
