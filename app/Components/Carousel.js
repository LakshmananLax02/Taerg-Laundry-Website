'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
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
  {
    id: 5,
    title: 'Reliable Campus Care.',
    highlightTitle: 'Delivered with Confidence.',
    bgImage: '/images/carousel4.png',
    showButtons: false,
  },
];

export default function StackedHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [slideDirection, setSlideDirection] = useState('left');

  const changeSlide = (nextSlide, direction) => {
    if (nextSlide === activeSlide) return;

    setPreviousSlide(activeSlide);
    setSlideDirection(direction);
    setActiveSlide(nextSlide);
  };

  const showPreviousSlide = () => {
    changeSlide((activeSlide - 1 + slides.length) % slides.length, 'right');
  };

  const showNextSlide = () => {
    changeSlide((activeSlide + 1) % slides.length, 'left');
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPreviousSlide(activeSlide);
      setSlideDirection('left');
      setActiveSlide((activeSlide + 1) % slides.length);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="relative w-full bg-[#020b1c] pt-[72px] sm:pt-[76px] md:pt-20">
      <div
        className="relative h-[calc(100svh-6rem)] min-h-[520px] w-full overflow-hidden rounded-xl border border-white/10 shadow-xl md:h-[calc(100vh-7rem)] md:min-h-[560px]"
        aria-roledescription="carousel"
        aria-label="Taerg campus laundry highlights"
      >
        {slides.map((slide, index) => {
          const isActive = activeSlide === index;
          const isOutgoing = previousSlide === index;
          const activeAnimation =
            slideDirection === 'right'
              ? 'carousel-slide-in-from-left'
              : 'carousel-slide-in-from-right';
          const outgoingAnimation =
            slideDirection === 'right'
              ? 'carousel-slide-out-to-right'
              : 'carousel-slide-out-to-left';

          return (
            <article
              key={slide.id}
              className={`absolute inset-0 overflow-hidden ${
                isActive
                  ? `visible z-20 opacity-100 ${activeAnimation}`
                  : isOutgoing
                    ? `visible z-10 opacity-0 ${outgoingAnimation}`
                    : 'invisible z-0 opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                priority={index < 2}
                sizes="100vw"
                className="object-cover object-center"
              />

              <div
                className={`relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 pb-20 pt-8 text-white lg:px-12 ${
                  slide.description || slide.showButtons ? '' : 'justify-center text-center'
                }`}
              >
                <div
                  className={`w-full ${
                    slide.description || slide.showButtons
                      ? 'grid grid-cols-1 items-center gap-8 lg:grid-cols-12'
                      : 'flex justify-center'
                  }`}
                >
                  <div
                    className={`${
                      slide.description || slide.showButtons
                        ? 'lg:col-span-7'
                        : 'flex w-full justify-center'
                    }`}
                  >
                    <h1
                      className={`tracking-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.72)] ${
                        index === 0
                          ? 'max-w-3xl text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl'
                          : 'm-0 flex max-w-[95%] flex-col items-center gap-0 text-2xl font-normal leading-[1.12] md:text-4xl lg:max-w-[90%] lg:text-5xl'
                      }`}
                    >
                      {slide.title}
                      <span className={`${index === 0 ? 'mt-1' : 'mt-0'} block text-gray-200`}>
                        {slide.highlightTitle}
                      </span>
                    </h1>
                  </div>

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
            </article>
          );
        })}

        <button
          type="button"
          onClick={showPreviousSlide}
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white shadow-lg backdrop-blur-md sm:left-5 sm:h-12 sm:w-12 lg:left-8"
          aria-label="Show previous carousel slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={showNextSlide}
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white shadow-lg backdrop-blur-md sm:right-5 sm:h-12 sm:w-12 lg:right-8"
          aria-label="Show next carousel slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>

        <div className="absolute inset-x-0 bottom-6 z-30 flex items-center justify-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() =>
                changeSlide(index, index < activeSlide ? 'right' : 'left')
              }
              className={`h-2 rounded-full border border-white/70 ${
                activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/35'
              }`}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-current={activeSlide === index ? 'true' : undefined}
            />
          ))}
        </div>

        <p className="absolute bottom-5 right-5 z-30 text-xs font-semibold tracking-[0.18em] text-white/75 sm:right-8">
          {String(activeSlide + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
        </p>
      </div>

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
