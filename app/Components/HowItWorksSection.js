"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Bag up all your dirty clothes",
    subtitle: "Step 01",
    description:
      "Gather all your unwashed clothes into your provided laundry bag for quick and hassle-free pickup.",
    image: "/images/ourprocessimg1.png",
    tags: ["Easy Packing", "Convenient"],
  },
  {
    id: "02",
    title: "We collect your garments",
    subtitle: "Step 02",
    description:
      "Our dedicated team collects your laundry bag directly from your doorstep or designated campus location.",
    image: "/images/whychooseimg.png",
    tags: ["Doorstep Pickup", "Campus Service"],
  },
  {
    id: "03",
    title: "We wash your garments",
    subtitle: "Step 03",
    description:
      "Your clothes are washed using high-quality detergents and eco-friendly machinery to ensure optimal hygiene and fabric care.",
    image: "/images/carouselimg1.png",
    tags: ["Hygienic Wash", "Eco-Friendly"],
  },
  {
    id: "04",
    title: "We deliver clean and folded laundry",
    subtitle: "Step 04",
    description:
      "Freshly laundered, dried, and neatly folded clothes are delivered back to you, ready to wear.",
    image: "/images/ourprocessimg2.png",
    tags: ["Neatly Folded", "On-Time Delivery"],
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  const scrollToStep = useCallback((nextIndex) => {
    const section = sectionRef.current;
    const index = Math.max(0, Math.min(steps.length - 1, nextIndex));

    setActiveStep(index);

    if (!section) return;

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
    const stepProgress = (index + 0.5) / steps.length;

    window.scrollTo({
      top: sectionTop + scrollRange * stepProgress,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let frameId = null;

    const updateStepFromScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const section = sectionRef.current;

        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(0.9999, Math.max(0, -rect.top / scrollRange));
        const nextStep = Math.min(
          steps.length - 1,
          Math.floor(progress * steps.length),
        );

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setActiveStep((currentStep) =>
            currentStep === nextStep ? currentStep : nextStep,
          );
        }
      });
    };

    updateStepFromScroll();
    window.addEventListener("scroll", updateStepFromScroll, { passive: true });
    window.addEventListener("resize", updateStepFromScroll);

    return () => {
      window.removeEventListener("scroll", updateStepFromScroll);
      window.removeEventListener("resize", updateStepFromScroll);

      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-title"
      className="relative h-[400svh] bg-slate-50"
    >
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden sm:top-20 sm:h-[calc(100svh-5rem)]">
        <div className="mx-auto flex h-full w-full max-w-[1760px] flex-col px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6">
          <header className="flex flex-none flex-col items-center border-b border-slate-200 pb-3 text-center sm:pb-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0a1b3d] px-3 py-1 text-xs font-medium text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              Our Process
            </div>
            <h2
              id="process-title"
              className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-[#0a1b3d] sm:text-3xl lg:text-4xl 2xl:text-5xl"
            >
              How Taerg Laundry Helps Students
            </h2>
          </header>

          <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1.35fr)_minmax(0,0.65fr)] gap-3 pt-3 sm:gap-4 sm:pt-4 lg:grid-cols-12 lg:grid-rows-1 lg:gap-7">
            <div className="relative min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-[#071a3a] shadow-[0_22px_55px_-32px_rgba(3,23,56,0.7)] lg:col-span-7">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const hasPassed = index < activeStep;

                return (
                  <div
                    key={step.id}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isActive
                        ? "translate-y-0 scale-100 opacity-100"
                        : hasPassed
                          ? "-translate-y-[7%] scale-[1.025] opacity-0"
                          : "translate-y-[7%] scale-[1.025] opacity-0"
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1023px) 100vw, 58vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031738]/95 via-[#031738]/20 to-black/10" />
                  </div>
                );
              })}

              <div className="absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold text-[#0a1b3d] shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
                <Sparkles className="h-3 w-3 text-blue-600" />
                Step {steps[activeStep].id} of {String(steps.length).padStart(2, "0")}
              </div>

              <div className="pointer-events-none absolute inset-x-2 inset-y-0 z-30 flex items-center justify-between sm:inset-x-3">
                <button
                  type="button"
                  onClick={() => scrollToStep(activeStep - 1)}
                  disabled={activeStep === 0}
                  aria-label="Previous process step"
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-35 sm:h-11 sm:w-11"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToStep(activeStep + 1)}
                  disabled={activeStep === steps.length - 1}
                  aria-label="Next process step"
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-35 sm:h-11 sm:w-11"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-6 sm:bottom-5 lg:hidden">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-300">
                  {steps[activeStep].subtitle}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-tight text-white sm:text-xl">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <div className="relative min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-34px_rgba(3,23,56,0.55)] lg:col-span-5">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const hasPassed = index < activeStep;

                return (
                  <article
                    key={step.id}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 flex flex-col justify-center px-5 py-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-7 lg:px-8 xl:px-10 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : hasPassed
                          ? "-translate-y-8 opacity-0"
                          : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="hidden lg:block">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                        {step.subtitle}
                      </p>
                      <div className="mt-3 flex items-start gap-4">
                        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#0a1b3d] text-base font-semibold text-white shadow-md xl:h-14 xl:w-14">
                          {step.id}
                        </span>
                        <h3 className="pt-1 text-2xl font-semibold leading-tight tracking-tight text-[#0a1b3d] xl:text-3xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 lg:mt-5 lg:text-base xl:text-lg">
                      {step.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2 lg:mt-6">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-[#0a1b3d] sm:text-xs"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}

              <div className="absolute inset-x-5 bottom-3 z-20 flex items-center gap-2 sm:inset-x-7 lg:bottom-5 lg:px-1 xl:inset-x-10">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => scrollToStep(index)}
                    aria-label={`Go to ${step.subtitle}`}
                    aria-current={activeStep === index ? "step" : undefined}
                    className="group flex flex-1 items-center gap-2 py-2"
                  >
                    <span
                      className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                        index <= activeStep ? "bg-blue-600" : "bg-slate-200"
                      }`}
                    />
                    {activeStep === index && (
                      <ArrowRight className="hidden h-3.5 w-3.5 text-blue-600 sm:block" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
