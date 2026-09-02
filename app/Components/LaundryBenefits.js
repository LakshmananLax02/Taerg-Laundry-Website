'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  UserRoundCheck,
  TimerReset,
  ShieldCheck,
  Truck,
  Settings2,
} from 'lucide-react';

const benefits = [
  {
    title: 'Student Convenience',
    description:
      'Students get dependable laundry care within the campus, with simple access and no need to travel outside for everyday washing needs.',
    icon: UserRoundCheck,
  },
  {
    title: 'Time Saving',
    description:
      'Scheduled collection and timely delivery remove the weekly laundry burden, leaving students more time for classes, projects and campus life.',
    icon: TimerReset,
  },
  {
    title: 'Hygienic Laundry Care',
    description:
      'Professional processes, quality detergents and carefully maintained equipment deliver consistently fresh garments with stronger hygiene standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Easy Pickup & Delivery',
    description:
      'Doorstep pickup and organized return schedules make every laundry cycle predictable, convenient and easy to manage around academic routines.',
    icon: Truck,
  },
  {
    title: 'Efficient Management',
    description:
      'A fully managed service gives institutions structured operations, reliable reporting and responsive support without adding administrative workload.',
    icon: Settings2,
  },
];

export default function LaundryBenefits() {
  const cardRefs = useRef([]);
  const [cardProgress, setCardProgress] = useState(() =>
    benefits.map(() => 0),
  );

  useEffect(() => {
    let frameId;

    const updateCardProgress = () => {
      const viewportHeight = window.innerHeight;
      const nextProgress = cardRefs.current.map((card) => {
        if (!card) return 0;

        const { top } = card.getBoundingClientRect();
        const animationStart = viewportHeight * 0.92;
        const animationEnd = viewportHeight * 0.38;

        return Math.min(
          1,
          Math.max(0, (animationStart - top) / (animationStart - animationEnd)),
        );
      });

      setCardProgress(nextProgress);
      frameId = undefined;
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateCardProgress);
    };

    updateCardProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      id="campus-benefits"
      className="relative bg-black text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image
          src="/images/carousel3.png"
          alt="Modern campus laundry facility"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020A17]/15 via-[#031738]/10 to-black/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.48)_100%)]" />
      </div>

      <div className="relative z-10 -mt-[100vh] pb-[12vh]">
        <div className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6">
          <header className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black/45 px-5 py-10 text-center shadow-2xl backdrop-blur-md sm:px-10 sm:py-14 md:px-16">
            <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none text-[150px] font-black leading-none text-white/[0.055] sm:text-[210px]">
              05
            </span>

            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-100">
                <span className="h-2 w-2 rounded-full bg-[#FFDE6A]" />
                Campus Benefits
              </div>

              <h2 className="section-topic">
                Benefits of Campus Laundry Service
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-200 sm:text-base md:text-lg">
                Designed to provide students with a smarter, safer and more
                convenient laundry experience.
              </p>
            </div>
          </header>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-benefit-index={index}
                className={`flex min-h-[58vh] items-center justify-center ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                <article
                  className="group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-black/45 p-5 shadow-2xl backdrop-blur-md transition-[border-color,background-color] duration-500 hover:border-white/30 hover:bg-black/55 sm:p-7"
                  style={{
                    opacity: 0.38 + cardProgress[index] * 0.62,
                    transform: `scale(${0.965 + cardProgress[index] * 0.035})`,
                    filter: `blur(${(1 - cardProgress[index]) * 2.5}px)`,
                    willChange:
                      cardProgress[index] < 1
                        ? 'transform, opacity, filter'
                        : 'auto',
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-400 via-white/90 to-[#FFDE6A]"
                    style={{
                      transform: `scaleX(${cardProgress[index]})`,
                      opacity: 0.35 + cardProgress[index] * 0.65,
                    }}
                    aria-hidden="true"
                  />

                  <span
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none text-[7rem] font-black leading-none text-white sm:right-8 sm:text-[10rem]"
                    style={{ opacity: 0.035 + cardProgress[index] * 0.035 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/15  text-white shadow-lg  transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                      <Icon size={32} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 max-w-md text-xs font-light leading-relaxed text-gray-200 sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
