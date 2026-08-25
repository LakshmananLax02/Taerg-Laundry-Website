'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FRAME_COUNT = 180;
const DESKTOP_FRAME_PATH = '/hero-sequence';
const MOBILE_FRAME_PATH = '/hero-sequence-mobile';
const PRELOAD_BATCH_SIZE = 12;

const stages = [
  {
    eyebrow: 'Who We Are',
    audience: 'About Taerg',
    title: 'Building Better Campus Living Through Smarter Laundry.',
    description:
      'Taerg is a campus-focused laundry solutions company combining commercial equipment, trained teams and dependable service into one seamless experience.',
    outcomes: ['Campus focused', 'End-to-end expertise'],
  },
  {
    eyebrow: 'Our Purpose',
    audience: 'Students First',
    title: 'More Time for Learning. Less Time Managing Laundry.',
    description:
      'We remove an everyday burden from student life through accessible collection, hygienic garment care and reliable on-time return.',
    outcomes: ['Student convenience', 'Consistent care'],
  },
  {
    eyebrow: 'How We Work',
    audience: 'For Institutions',
    title: 'One Partner. Complete Laundry Operations.',
    description:
      'From facility planning and commercial machines to staffing, maintenance and reporting, Taerg manages every operational detail.',
    outcomes: ['Fully managed', 'Clear accountability'],
  },
  {
    eyebrow: 'Our Vision',
    audience: 'Schools • Colleges • Universities',
    title: 'Creating Cleaner, Healthier and More Efficient Campuses.',
    description:
      'We partner with education leaders to raise campus living standards while building sustainable, scalable laundry infrastructure for the future.',
    outcomes: ['Long-term partnership', 'Stronger campus value'],
    actions: true,
  },
];

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const smoothstep = (value) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

const getFrameSource = (index, framePath) =>
  `${framePath}/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

function getStageOpacity(progress, index) {
  if (index === 0) return 1 - smoothstep((progress - 0.19) / 0.075);
  if (index === 1) {
    return smoothstep((progress - 0.18) / 0.075) *
      (1 - smoothstep((progress - 0.43) / 0.075));
  }
  if (index === 2) {
    return smoothstep((progress - 0.42) / 0.075) *
      (1 - smoothstep((progress - 0.68) / 0.075));
  }

  return smoothstep((progress - 0.67) / 0.075);
}

export default function HeroScrollSequence() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef(Array(FRAME_COUNT).fill(null));
  const framePromisesRef = useRef(Array(FRAME_COUNT).fill(null));
  const requestedFrameRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const stageRefs = useRef([]);
  const headlineRefs = useRef([]);
  const copyRefs = useRef([]);
  const mobileCardRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const activeStageRef = useRef(0);
  const [activeStage, setActiveStage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return undefined;

    const context = canvas.getContext('2d', { alpha: false });
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = reducedMotionQuery.matches;
    let mounted = true;
    let sourceVersion = 0;
    let currentFramePath = window.innerWidth < 768 ? MOBILE_FRAME_PATH : DESKTOP_FRAME_PATH;

    const paintFrame = (image, index, force = false) => {
      if (!image?.naturalWidth || (!force && renderedFrameRef.current === index)) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const pixelRatio = canvasWidth / Math.max(canvas.getBoundingClientRect().width, 1);
      const safeTop =
        (window.innerWidth >= 1024 ? 80 : window.innerWidth >= 768 ? 72 : 56) * pixelRatio;
      const safeBottom =
        (window.innerWidth >= 1024 ? 16 : window.innerWidth >= 768 ? 20 : 48) * pixelRatio;
      const availableHeight = Math.max(canvasHeight - safeTop - safeBottom, 1);
      // Keep a subtle, balanced frame around the desktop sequence while the
      // dedicated portrait mobile sequence continues to use the full width.
      const desktopWidthRatio = window.innerWidth >= 1024 ? 0.94 : 0.96;
      const targetWidth =
        window.innerWidth >= 768 ? canvasWidth * desktopWidthRatio : canvasWidth;
      const widthScale = targetWidth / image.naturalWidth;
      const heightScale = availableHeight / image.naturalHeight;
      const scale = window.innerWidth >= 768 ? Math.min(widthScale, heightScale) : widthScale;
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      const x = (canvasWidth - width) / 2;
      const y = safeTop + (availableHeight - height) / 2;

      context.fillStyle = '#020b1c';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(image, x, y, width, height);
      renderedFrameRef.current = index;
    };

    const loadFrame = (index, highPriority = false, version = sourceVersion) => {
      const safeIndex = clamp(Math.round(index), 0, FRAME_COUNT - 1);
      if (framesRef.current[safeIndex]) {
        return Promise.resolve(framesRef.current[safeIndex]);
      }
      if (framePromisesRef.current[safeIndex]) {
        return framePromisesRef.current[safeIndex];
      }

      framePromisesRef.current[safeIndex] = new Promise((resolve) => {
        const image = new window.Image();
        image.decoding = 'async';
        image.fetchPriority = highPriority ? 'high' : 'auto';
        image.onload = () => {
          if (version !== sourceVersion) {
            resolve(null);
            return;
          }
          framesRef.current[safeIndex] = image;
          resolve(image);
        };
        image.onerror = () => resolve(null);
        image.src = getFrameSource(safeIndex, currentFramePath);
      });

      return framePromisesRef.current[safeIndex];
    };

    const findNearestLoadedFrame = (targetIndex) => {
      if (framesRef.current[targetIndex]) return targetIndex;

      for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
        const previous = targetIndex - distance;
        const next = targetIndex + distance;
        if (previous >= 0 && framesRef.current[previous]) return previous;
        if (next < FRAME_COUNT && framesRef.current[next]) return next;
      }

      return -1;
    };

    const renderRequestedFrame = (index) => {
      const safeIndex = clamp(Math.round(index), 0, FRAME_COUNT - 1);
      requestedFrameRef.current = safeIndex;

      const nearestLoaded = findNearestLoadedFrame(safeIndex);
      if (nearestLoaded >= 0) {
        paintFrame(framesRef.current[nearestLoaded], nearestLoaded);
      }

      if (!framesRef.current[safeIndex]) {
        loadFrame(safeIndex, true).then((image) => {
          if (mounted && image && requestedFrameRef.current === safeIndex) {
            paintFrame(image, safeIndex);
          }
        });
      }
    };

    const resizeCanvas = () => {
      const nextFramePath = window.innerWidth < 768 ? MOBILE_FRAME_PATH : DESKTOP_FRAME_PATH;
      if (nextFramePath !== currentFramePath) {
        sourceVersion += 1;
        currentFramePath = nextFramePath;
        framesRef.current = Array(FRAME_COUNT).fill(null);
        framePromisesRef.current = Array(FRAME_COUNT).fill(null);
        renderedFrameRef.current = -1;
        setIsReady(false);
        preloadSequence(sourceVersion);
      }

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      renderedFrameRef.current = -1;

      const currentFrame = findNearestLoadedFrame(requestedFrameRef.current);
      if (currentFrame >= 0) {
        paintFrame(framesRef.current[currentFrame], currentFrame, true);
      }
    };

    async function preloadSequence(version = sourceVersion) {
      const firstFrame = await loadFrame(0, true, version);
      if (!mounted || version !== sourceVersion) return;

      if (!firstFrame) {
        setHasError(true);
        return;
      }

      resizeCanvas();
      paintFrame(firstFrame, 0, true);
      setIsReady(true);

      // Load the remaining frames in controlled batches. A requested frame is
      // always promoted immediately if the user scrolls ahead of preloading.
      for (
        let start = 1;
        start < FRAME_COUNT && mounted && version === sourceVersion;
        start += PRELOAD_BATCH_SIZE
      ) {
        const end = Math.min(start + PRELOAD_BATCH_SIZE, FRAME_COUNT);
        const batch = [];
        for (let index = start; index < end; index += 1) {
          batch.push(loadFrame(index, false, version));
        }
        await Promise.all(batch);
      }
    };

    const update = () => {
      if (!mounted) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const scrollProgress = reducedMotion ? 0 : clamp(-rect.top / scrollDistance);

      // Hold the opening and closing images briefly, then map the complete
      // middle scroll range linearly across all 180 frames.
      const sequenceProgress = clamp((scrollProgress - 0.035) / 0.91);
      const frameIndex = Math.round(sequenceProgress * (FRAME_COUNT - 1));
      renderRequestedFrame(frameIndex);

      const nextActiveStage = reducedMotion
        ? 0
        : Math.min(stages.length - 1, Math.floor(scrollProgress * stages.length));
      if (nextActiveStage !== activeStageRef.current) {
        activeStageRef.current = nextActiveStage;
        setActiveStage(nextActiveStage);
      }

      stageRefs.current.forEach((element, index) => {
        if (!element) return;
        const opacity = reducedMotion
          ? index === 0
            ? 1
            : 0
          : getStageOpacity(scrollProgress, index);
        const offset = (1 - opacity) * 72;
        const scale = 0.94 + opacity * 0.06;
        const blur = (1 - opacity) * 8;

        element.style.opacity = String(opacity);
        element.style.pointerEvents = opacity > 0.72 ? 'auto' : 'none';

        headlineRefs.current[index]?.style.setProperty('--stage-offset', `${-offset}px`);
        headlineRefs.current[index]?.style.setProperty('--stage-scale', String(scale));
        headlineRefs.current[index]?.style.setProperty('--stage-blur', `${blur}px`);
        copyRefs.current[index]?.style.setProperty('--stage-offset', `${offset}px`);
        copyRefs.current[index]?.style.setProperty('--stage-scale', String(scale));
        copyRefs.current[index]?.style.setProperty('--stage-blur', `${blur}px`);
        if (mobileCardRefs.current[index]) {
          mobileCardRefs.current[index].style.transform = `translate3d(0, ${offset * 0.3}px, 0) scale(${scale})`;
          mobileCardRefs.current[index].style.filter = `blur(${blur}px)`;
        }
      });

      animationFrameRef.current = window.requestAnimationFrame(update);
    };

    const handleMotionChange = (event) => {
      reducedMotion = event.matches;
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    reducedMotionQuery.addEventListener?.('change', handleMotionChange);
    preloadSequence();
    animationFrameRef.current = window.requestAnimationFrame(update);

    return () => {
      mounted = false;
      window.removeEventListener('resize', resizeCanvas);
      reducedMotionQuery.removeEventListener?.('change', handleMotionChange);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      framePromisesRef.current = Array(FRAME_COUNT).fill(null);
      framesRef.current = Array(FRAME_COUNT).fill(null);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500svh] w-full bg-[#020b1c] motion-reduce:h-[100svh]"
      aria-label="About Taerg and our campus laundry mission"
    >
      <p className="sr-only">
        Discover who Taerg is, why we focus on students, how we manage complete campus laundry
        operations and the future we are building with educational institutions.
      </p>

      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#020b1c]">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,9,25,0.18)_0%,rgba(1,9,25,0.02)_48%,rgba(1,9,25,0.72)_100%)] md:bg-[linear-gradient(90deg,rgba(1,9,25,0.72)_0%,rgba(1,9,25,0.16)_34%,rgba(1,9,25,0.1)_66%,rgba(1,9,25,0.68)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#020b1c]/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#020b1c]/68 to-transparent" />

        {!isReady && !hasError && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-[#020b1c] text-white">
            <div className="flex flex-col items-center gap-4">
              <span className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-white" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                Preparing the experience
              </span>
            </div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#123b72_0%,#061a3b_48%,#020b1c_100%)]" />
        )}

        <div className="absolute inset-0 z-10">
          {stages.map((stage, index) => (
            <div
              key={stage.title}
              ref={(element) => {
                stageRefs.current[index] = element;
              }}
              className={`absolute inset-0 px-5 text-white transition-none will-change-opacity sm:px-8 lg:px-14 xl:px-20 ${
                index === 0 ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={activeStage !== index}
            >
              <div className="relative mx-auto h-full w-full max-w-[1500px]">
                <div
                  ref={(element) => {
                    headlineRefs.current[index] = element;
                  }}
                  className="hidden [--stage-blur:0px] [--stage-offset:0px] [--stage-scale:1] [filter:blur(var(--stage-blur))] will-change-[transform,filter] md:absolute md:left-0 md:top-[calc(50%+1.625rem)] md:block md:w-[28vw] md:max-w-[27rem] md:[transform:translate3d(var(--stage-offset),-50%,0)_scale(var(--stage-scale))] lg:top-[calc(50%+2rem)] xl:w-[27vw] xl:max-w-[28rem]"
                >
                  <div className="hero-story-card px-5 py-4 text-center sm:px-6 sm:py-5 lg:text-left">
                    <span className="pointer-events-none absolute -right-1 -top-7 text-[6.5rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.045] sm:text-[7.5rem]">
                      0{index + 1}
                    </span>
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                        <span className="grid h-8 min-w-8 place-items-center rounded-full border border-blue-300/30 bg-blue-300/10 text-[0.63rem] font-semibold text-blue-100">
                          0{index + 1}
                        </span>
                        <span className="h-px w-9 bg-gradient-to-r from-blue-300/80 to-transparent" />
                        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-blue-200 sm:text-[0.66rem]">
                          {stage.eyebrow}
                        </p>
                      </div>
                      <span className="mb-3 inline-flex rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.14em] text-white/70">
                        {stage.audience}
                      </span>
                      <h1 className="text-balance text-[clamp(1.7rem,2.85vw,3rem)] font-medium leading-[1.03] tracking-[-0.042em]">
                        {stage.title}
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  ref={(element) => {
                    copyRefs.current[index] = element;
                  }}
                  className="hidden [--stage-blur:0px] [--stage-offset:0px] [--stage-scale:1] [filter:blur(var(--stage-blur))] will-change-[transform,filter] md:absolute md:right-0 md:top-[calc(50%+1.625rem)] md:block md:w-[26vw] md:max-w-sm md:[transform:translate3d(var(--stage-offset),-50%,0)_scale(var(--stage-scale))] lg:top-[calc(50%+2rem)] xl:w-[24vw] xl:max-w-[25rem]"
                >
                  <div className="hero-story-card hero-story-card--copy px-5 py-4 text-center sm:px-6 sm:py-5 lg:text-left">
                    <div className="relative z-10">
                      <p className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-blue-200/80">
                        Campus impact
                      </p>
                      <p className="text-xs font-light leading-relaxed text-white/80 sm:text-sm lg:text-base">
                        {stage.description}
                      </p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                        {stage.outcomes.map((outcome) => (
                          <span
                            key={outcome}
                            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/15 bg-blue-300/[0.07] px-2.5 py-1 text-[0.6rem] font-medium text-blue-50/75"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]" />
                            {outcome}
                          </span>
                        ))}
                      </div>

                      {stage.actions && (
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                          <a
                            href="tel:+91XXXXXXXXXX"
                            tabIndex={activeStage === index ? 0 : -1}
                            className="action-ripple action-ripple--call gap-2 px-4 py-2 text-xs font-semibold shadow-lg"
                          >
                            <Phone size={16} aria-hidden="true" />
                            Call us now
                          </a>
                          <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={activeStage === index ? 0 : -1}
                            className="action-ripple action-ripple--whatsapp gap-2 px-4 py-2 text-xs font-semibold shadow-lg"
                          >
                            <FaWhatsapp size={18} aria-hidden="true" />
                            Chat on WhatsApp
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  ref={(element) => {
                    mobileCardRefs.current[index] = element;
                  }}
                  className="absolute inset-x-0 bottom-4 mx-auto w-full max-w-[31rem] will-change-[transform,filter] md:hidden"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#03132e]/88 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-5">
                    <span className="pointer-events-none absolute -right-2 -top-5 text-[5.5rem] font-medium leading-none tracking-[-0.08em] text-white/[0.05]">
                      0{index + 1}
                    </span>
                    <div className="relative z-10">
                      <div className="mb-2.5 flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-full border border-blue-200/25 bg-blue-300/10 text-[0.58rem] font-semibold text-blue-100">
                          0{index + 1}
                        </span>
                        <span className="h-px w-6 bg-blue-300/70" />
                        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-blue-200">
                          {stage.audience}
                        </span>
                      </div>

                      <h1 className="max-w-[90%] text-pretty text-[clamp(1.25rem,6vw,1.7rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white">
                        {stage.title}
                      </h1>
                      <p className="mt-2 line-clamp-2 max-w-[95%] text-[0.72rem] font-light leading-[1.55] text-white/70 sm:text-xs">
                        {stage.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {stage.outcomes.map((outcome) => (
                          <span
                            key={outcome}
                            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/15 bg-blue-300/[0.08] px-2 py-1 text-[0.55rem] font-medium text-blue-50/80"
                          >
                            <span className="h-1 w-1 rounded-full bg-blue-300" />
                            {outcome}
                          </span>
                        ))}
                      </div>

                      {stage.actions && (
                        <div className="mt-3 flex gap-2">
                          <a
                            href="tel:+91XXXXXXXXXX"
                            tabIndex={activeStage === index ? 0 : -1}
                            className="action-ripple action-ripple--call gap-1.5 px-3 py-2 text-[0.65rem] font-semibold"
                          >
                            <Phone size={14} aria-hidden="true" />
                            Call now
                          </a>
                          <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={activeStage === index ? 0 : -1}
                            className="action-ripple action-ripple--whatsapp gap-1.5 px-3 py-2 text-[0.65rem] font-semibold"
                          >
                            <FaWhatsapp size={16} aria-hidden="true" />
                            WhatsApp
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
