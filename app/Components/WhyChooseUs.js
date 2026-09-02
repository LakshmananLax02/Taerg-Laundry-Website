'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const reasons = [
  {
    number: '01',
    title: 'Dedicated Campus Infrastructure',
    description:
      'Purpose-built laundry centres designed exclusively for educational institutions, seamlessly integrated into your campus environment.',
    image: '/images/whychooseimg.png',
    alt: 'Taerg campus laundry centre serving a student',
    background: '#061A39',
  },
  {
    number: '02',
    title: 'Managed Pickup & Delivery',
    description:
      'Scheduled doorstep collection and dependable return services built around academic routines, reducing queues and keeping student life moving.',
    image: '/images/ourprocessimg2.png',
    alt: 'Taerg team collecting laundry from students on campus',
    background: '#09234B',
    reverse: true,
  },
  {
    number: '03',
    title: 'Student-First Convenience',
    description:
      'A simple, hygienic and reliable laundry experience that gives students more time to focus on campus life while Taerg handles the complete process.',
    image: '/images/ourprocessimg1.png',
    alt: 'Student preparing laundry for the Taerg campus service',
    background: '#0C2D5E',
  },
];

export default function WhyChoose() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const updateReasonFromScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const track = trackRef.current;

        if (!track) return;

        const rect = track.getBoundingClientRect();
        const scrollRange = Math.max(track.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(0.9999, Math.max(0, -rect.top / scrollRange));
        setScrollProgress((current) =>
          Math.abs(current - progress) < 0.0005 ? current : progress,
        );
      });
    };

    updateReasonFromScroll();
    window.addEventListener('scroll', updateReasonFromScroll, { passive: true });
    window.addEventListener('resize', updateReasonFromScroll);

    return () => {
      window.removeEventListener('scroll', updateReasonFromScroll);
      window.removeEventListener('resize', updateReasonFromScroll);

      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const activeReason = Math.min(
    reasons.length - 1,
    Math.max(0, Math.round(scrollProgress * reasons.length - 1)),
  );

  return (
    <section className="relative isolate bg-[#020A17] font-sans text-white">
      <header className="sticky top-20 z-[1] grid h-[calc(100svh-6rem)] place-content-center overflow-hidden bg-[#031738] px-5 text-center lg:top-28 lg:h-[calc(100svh-8rem)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0a1b3d] px-3.5 py-1.5 text-xs font-medium text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              Why Taerg
            </div>
          </div>

          <h2 className="section-topic">
            Why Choose Taerg
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed tracking-wide text-gray-300 sm:text-base lg:text-lg">
            Partnering with forward-thinking campuses to deliver world-class
            laundry infrastructure and student experiences.
          </p>

          <div className="mx-auto mt-8 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.22em] text-blue-100/70">
            <span className="h-px w-10 bg-blue-300/50" />
            Scroll to explore
            <span className="h-px w-10 bg-blue-300/50" />
          </div>
        </div>
      </header>

      <div ref={trackRef} className="relative h-[360svh] bg-[#020A17]">
        <div className="sticky top-20 z-[2] h-[calc(100svh-6rem)] overflow-hidden  border-x border-t border-white/10 bg-[#061A39] shadow-[0_-20px_65px_-35px_rgba(0,0,0,0.95)] lg:top-28 lg:h-[calc(100svh-8rem)]">
          <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_75%,transparent_100%)]" />

          {reasons.map((reason, index) => {
            const isActive = index === activeReason;
            const relativePosition =
              index + 1 - scrollProgress * reasons.length;
            const distanceFromCenter = Math.abs(relativePosition);
            const cardOpacity = Math.max(
              0,
              Math.min(1, 1 - distanceFromCenter * 0.65),
            );

            return (
              <article
                key={reason.number}
                aria-hidden={!isActive}
                className="pointer-events-none absolute inset-0 grid grid-cols-1 grid-rows-[52%_48%] lg:grid-cols-12 lg:grid-rows-none"
                style={{
                  zIndex: Math.max(1, 20 - Math.round(distanceFromCenter * 10)),
                  opacity: cardOpacity,
                  transform: `translate3d(${relativePosition * 105}%, 0, 0)`,
                  willChange: 'transform, opacity',
                }}
              >
                <div
                  className={`relative flex h-full min-h-0 flex-col justify-center overflow-hidden px-6 py-8 sm:px-10 lg:col-span-5 lg:px-12 lg:py-10 xl:px-16 xl:py-14 ${
                    reason.reverse ? 'lg:order-2' : ''
                  }`}
                  style={{ backgroundColor: reason.background }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />
                  <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none text-[11rem] font-black leading-none text-white/[0.035] sm:text-[15rem] lg:text-[20rem]">
                    {reason.number}
                  </span>

                  <div className="relative z-10 max-w-xl">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                        {reason.number}
                      </span>
                      <span className="h-px w-14 bg-blue-300/60" />
                    </div>

                    <h3 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-blue-100/80 sm:text-base lg:mt-6 lg:text-lg">
                      {reason.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 lg:mt-9" aria-hidden="true">
                      {reasons.map((item, dotIndex) => (
                        <span
                          key={item.number}
                          className={`h-1.5 rounded-full transition-all ${
                            dotIndex === index
                              ? 'w-8 bg-white'
                              : 'w-3 bg-white/25'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`relative h-full min-h-0 overflow-hidden lg:col-span-7 ${
                    reason.reverse ? 'lg:order-1' : ''
                  }`}
                  style={{ backgroundColor: reason.background }}
                >
                  <div className="absolute inset-x-4 bottom-4 top-0 overflow-hidden rounded-2xl border border-white/15 sm:inset-x-6 sm:bottom-6 lg:inset-8">
                    <Image
                      src={reason.image}
                      alt={reason.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031738]/45 via-transparent to-white/5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
