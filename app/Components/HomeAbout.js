'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Building2, Leaf, Clock3 } from 'lucide-react';

const aboutCards = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Student-First Experience',
    subtitle: 'Designed for campus life',
    description: 'Pickup, care and delivery planned around classes and hostel routines.',
  },
  {
    id: 2,
    icon: Building2,
    title: 'Fully Managed Operations',
    subtitle: 'Zero administrative overhead',
    description: 'Staffing, machines, reporting and maintenance handled end-to-end.',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Sustainable Laundry Care',
    subtitle: 'Efficient wash technology',
    description: 'Optimized commercial cycles help reduce water and energy consumption.',
  },
  {
    id: 4,
    icon: Clock3,
    title: 'Dependable Turnaround',
    subtitle: 'Fast and reliable service',
    description: 'Predictable service standards keep every student routine moving.',
  },
];

function updateBorderGlow(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const pointerX = event.clientX - rect.left;
  const pointerY = event.clientY - rect.top;
  const distanceToEdge = Math.min(
    pointerX,
    pointerY,
    rect.width - pointerX,
    rect.height - pointerY,
  );
  const edgeProximity = Math.max(0, 1 - distanceToEdge / 72);
  const angle =
    Math.atan2(pointerY - rect.height / 2, pointerX - rect.width / 2) *
      (180 / Math.PI) +
    90;

  card.style.setProperty('--edge-proximity', edgeProximity.toFixed(3));
  card.style.setProperty('--cursor-angle', `${angle}deg`);
  card.style.setProperty('--glow-x', `${(pointerX / rect.width) * 100}%`);
  card.style.setProperty('--glow-y', `${(pointerY / rect.height) * 100}%`);
}

function resetBorderGlow(event) {
  event.currentTarget.style.setProperty('--edge-proximity', '0');
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let scrollFrame = null;

    const updateCardsFromScroll = () => {
      if (scrollFrame !== null) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null;
        const section = sectionRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;
        const cards = cardRefs.current.filter(Boolean);

        if (!section || !viewport || !track || cards.length === 0) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollRange = Math.max(section.offsetHeight - viewportHeight, 1);
        const progress = Math.min(0.999, Math.max(0, -rect.top / scrollRange));
        const firstCard = cards[0];
        const lastCard = cards[cards.length - 1];
        const firstCenter = firstCard.offsetLeft + firstCard.offsetWidth / 2;
        const lastCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2;
        const targetCenter = firstCenter + (lastCenter - firstCenter) * progress;
        const viewportWidth = viewport.clientWidth;
        const translateX = viewportWidth / 2 - targetCenter;
        const activeIndex = Math.min(
          cards.length - 1,
          Math.round(progress * (cards.length - 1)),
        );

        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        cards.forEach((card, cardIndex) => {
          card.classList.toggle('is-card-current', cardIndex === activeIndex);
        });
      });
    };

    updateCardsFromScroll();
    window.addEventListener('scroll', updateCardsFromScroll, { passive: true });
    window.addEventListener('resize', updateCardsFromScroll);

    return () => {
      window.removeEventListener('scroll', updateCardsFromScroll);
      window.removeEventListener('resize', updateCardsFromScroll);
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative z-20 h-[360svh] bg-[#F8FAFC] font-sans lg:h-[360vh]">
      <div className="sticky top-0 flex min-h-screen w-full items-center overflow-hidden px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center md:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#031738] text-white px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            <span className="text-xs font-medium tracking-wide">About Taerg</span>
          </div>

          <h2 className="section-topic text-[#031738]">
            Built on Trust, Driven by Innovation
          </h2>

          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-gray-500 md:text-base">
            Taerg combines dependable campus operations, commercial laundry
            technology and student-focused service into one managed experience.
          </p>
        </div>

        {/* Vertical scrolling drives this horizontal card track. */}
        <div
          ref={viewportRef}
          className="about-card-viewport w-full min-w-0 overflow-hidden py-5"
        >
        <div ref={trackRef} className="about-card-track flex w-max items-stretch gap-4 md:gap-5">
          {aboutCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                ref={(element) => {
                  cardRefs.current[card.id - 1] = element;
                }}
                className="about-border-glow about-horizontal-card group relative min-h-[245px] w-[82vw] max-w-[370px] shrink-0 rounded-2xl sm:w-[46vw] sm:max-w-[420px] lg:w-[36vw] lg:max-w-[460px]"
                onPointerMove={updateBorderGlow}
                onPointerLeave={resetBorderGlow}
              >
                <span className="edge-light" aria-hidden="true" />

                <div className="about-wave-card relative min-h-[245px] w-full overflow-hidden rounded-[inherit] border border-[#173C78]/35 bg-[#031738] shadow-[0_18px_38px_-22px_rgba(3,23,56,0.8)] transition-shadow duration-300 group-hover:shadow-[0_24px_44px_-20px_rgba(3,23,56,0.9)]">
                {/* Animated Waves Background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl bg-[linear-gradient(155deg,#071F46,#031738)]">
                  <div className="about-wave about-wave-one" />
                  <div className="about-wave about-wave-two" />
                  <div className="about-wave about-wave-three" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex min-h-[245px] flex-col p-5 sm:p-6">
                  <div className="mb-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#031738] shadow-md transition-transform duration-300 group-hover:scale-105">
                    <IconComponent size={24} strokeWidth={1.8} />
                  </div>

                  <div className="mt-8 text-left text-white">
                    <h3 className="text-lg font-semibold leading-snug">{card.title}</h3>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-blue-200">
                      {card.subtitle}
                    </p>
                    <p className="mt-3 text-xs font-light leading-relaxed text-white/75">
                      {card.description}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>

      </div>
      </div>

      {/* Global CSS Keyframes for Wave Animation */}
      <style jsx global>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .about-border-glow {
          --edge-proximity: 0;
          --cursor-angle: 45deg;
          --glow-x: 50%;
          --glow-y: 50%;
          isolation: isolate;
        }

        .about-card-track {
          transform: translate3d(0, 0, 0);
          transition: transform 100ms linear;
          will-change: transform;
        }

        .about-horizontal-card {
          opacity: 0.48;
          transform: scale(0.92);
          transition:
            opacity 420ms ease,
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 420ms ease;
          filter: saturate(0.72) brightness(0.82);
          will-change: opacity, transform;
        }

        .about-horizontal-card.is-card-current {
          opacity: 1;
          transform: scale(1);
          filter: saturate(1) brightness(1);
        }

        .about-horizontal-card.is-card-current:hover {
          transform: translateY(-4px) scale(1);
        }

        .about-border-glow::before {
          content: '';
          position: absolute;
          z-index: 3;
          inset: -1px;
          padding: 1.5px;
          border-radius: inherit;
          pointer-events: none;
          background: conic-gradient(
            from var(--cursor-angle),
            transparent 0deg,
            transparent 105deg,
            #4f8ad8 150deg,
            #ffde6a 180deg,
            #76b6ee 210deg,
            transparent 255deg,
            transparent 360deg
          );
          opacity: var(--edge-proximity);
          transition: opacity 180ms ease-out;
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .about-border-glow::after {
          content: '';
          position: absolute;
          z-index: 1;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: radial-gradient(
            circle at var(--glow-x) var(--glow-y),
            rgb(99 167 232 / 28%),
            transparent 38%
          );
          opacity: var(--edge-proximity);
          transition: opacity 220ms ease-out;
        }

        .about-border-glow > .edge-light {
          position: absolute;
          z-index: 0;
          inset: -10px;
          border-radius: inherit;
          pointer-events: none;
          background: conic-gradient(
            from var(--cursor-angle),
            transparent 0deg 125deg,
            rgb(79 138 216 / 55%) 158deg,
            rgb(255 222 106 / 68%) 180deg,
            rgb(118 182 238 / 50%) 202deg,
            transparent 235deg 360deg
          );
          opacity: calc(var(--edge-proximity) * 0.7);
          filter: blur(11px);
          transition: opacity 220ms ease-out;
        }

        .about-wave-card {
          z-index: 2;
        }

        .about-wave {
          position: absolute;
          left: 50%;
          top: 72%;
          width: 470px;
          height: 470px;
          margin-left: -235px;
          border-radius: 42%;
          transform-origin: center;
          background: linear-gradient(135deg, #153c78, #2d66b2 58%, #63a7e8);
          animation: wave 16s linear infinite;
        }

        .about-wave-one {
          opacity: 0.58;
        }

        .about-wave-two {
          top: 76%;
          border-radius: 46%;
          opacity: 0.4;
          animation-duration: 20s;
          animation-direction: reverse;
        }

        .about-wave-three {
          top: 80%;
          border-radius: 39%;
          opacity: 0.28;
          animation-duration: 24s;
        }

        .about-border-glow:hover .about-wave {
          animation-duration: 7s;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-horizontal-card,
          .about-horizontal-card.is-card-current,
          .about-horizontal-card.is-card-current:hover {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }

          .about-card-track {
            transition: none;
          }

          .about-wave,
          .about-border-glow:hover .about-wave {
            animation: none;
          }

          .about-border-glow::before,
          .about-border-glow::after,
          .about-border-glow > .edge-light {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
