"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Bag up all your dirty clothes",
    subtitle: "Step 01",
    description: "Gather all your unwashed clothes into your provided laundry bag for quick and hassle-free pickup.",
    image: "/images/ourprocessimg1.png", 
    tags: ["Easy Packing", "Convenient"]
  },
  {
    id: "02",
    title: "We collect your garments",
    subtitle: "Step 02",
    description: "Our dedicated team collects your laundry bag directly from your doorstep or designated campus location.",
    image: "/images/whychooseimg.png",
    tags: ["Doorstep Pickup", "Campus Service"]
  },
  {
    id: "03",
    title: "We wash your garments",
    subtitle: "Step 03",
    description: "Your clothes are washed using high-quality detergents and eco-friendly machinery to ensure optimal hygiene and fabric care.",
    image: "/images/carouselimg1.png",
    tags: ["Hygienic Wash", "Eco-Friendly"]
  },
  {
    id: "04",
    title: "We deliver you with clean and folded",
    subtitle: "Step 04",
    description: "Freshly laundered, dried, and neatly folded clothes are delivered back to you, ready to wear.",
    image: "/images/ourprocessimg2.png", // Update with your actual image path
    tags: ["Neatly Folded", "On-Time Delivery"]
  }
];


export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const lastScrollControlRef = useRef(0);

  const handleNext = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  }, []);

  // Auto-scroll timer (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastScrollControlRef.current > 1400) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [handleNext]);

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
        const isScrollControlled = rect.top <= 0 && rect.bottom >= window.innerHeight;

        if (!isScrollControlled) return;

        const progress = Math.min(0.999, Math.max(0, -rect.top / scrollRange));
        const nextStep = Math.min(
          steps.length - 1,
          Math.floor(progress * steps.length),
        );

        lastScrollControlRef.current = Date.now();
        setActiveStep((currentStep) =>
          currentStep === nextStep ? currentStep : nextStep,
        );
      });
    };

    updateStepFromScroll();
    window.addEventListener("scroll", updateStepFromScroll, { passive: true });
    window.addEventListener("resize", updateStepFromScroll);

    return () => {
      window.removeEventListener("scroll", updateStepFromScroll);
      window.removeEventListener("resize", updateStepFromScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400svh] bg-slate-50 lg:h-[400vh]">
      <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-center overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-4 flex flex-col items-center border-b border-gray-200 pb-4 text-center sm:mb-5">
          <div className="flex flex-col items-center space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#0a1b3d] text-white px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Our Process
            </div>
            
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0a1b3d] sm:text-4xl lg:text-5xl [@media(max-height:700px)]:text-4xl">
              How Taerg Laundry Helps Students
            </h2>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:h-[clamp(300px,42svh,380px)] lg:grid-cols-12">
          
          {/* LEFT COLUMN: Main Image Display */}
          <div className="flex flex-col lg:col-span-6">
            <div className="group relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md sm:min-h-[380px] lg:min-h-0">
              
              {/* Active Image */}
              <Image
                key={steps[activeStep].id}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                className="process-step-image object-cover"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3d]/90 via-[#0a1b3d]/20 to-transparent" />

              {/* Top Step Counter Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#0a1b3d] flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-blue-600" />
                Step {steps[activeStep].id} of 04
              </div>

              {/* Prev / Next Navigation Arrows */}
              <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none z-20">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Step"
                  className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 border border-white/20 active:scale-90 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next Step"
                  className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 border border-white/20 active:scale-90 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Image Bottom Text Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 z-10">
                <p className="text-[10px] font-semibold text-blue-300 tracking-wider uppercase">
                  {steps[activeStep].subtitle}
                </p>
                <h3 className="text-base font-semibold leading-snug sm:text-xl">
                  {steps[activeStep].title}
                </h3>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {steps[activeStep].tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-[11px] px-2.5 py-0.5 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-blue-300" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-center lg:col-span-6">
            
            {/* MOBILE ONLY VIEW: Show ONLY 1 active step card */}
            <div className="block lg:hidden">
              <div className="relative p-4 rounded-xl bg-white border-2 border-blue-500 shadow-md">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-l-xl" />

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1b3d] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                    {steps[activeStep].id}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-semibold text-sm text-[#0a1b3d] truncate">
                        {steps[activeStep].title}
                      </h4>
                      <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY VIEW: Show ALL 4 step cards */}
            <div className="hidden h-full flex-col justify-center gap-2.5 lg:flex">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className={`group relative flex min-h-0 flex-1 cursor-pointer items-center rounded-xl border p-2.5 transition-all duration-200 2xl:p-3.5 ${
                      isActive
                        ? "scale-[1.01] border-blue-500/60 bg-white shadow-md"
                        : "border-gray-200/80 bg-white/70 shadow-xs hover:bg-white"
                    }`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 top-0 w-1 rounded-l-xl transition-colors duration-200 ${
                        isActive ? "bg-blue-600" : "bg-transparent group-hover:bg-gray-300"
                      }`}
                    />

                    <div className="flex w-full items-center gap-3.5">
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 ${
                          isActive
                            ? "bg-[#0a1b3d] text-white shadow-sm"
                            : "bg-slate-100 text-gray-500 group-hover:bg-slate-200 group-hover:text-gray-900"
                        }`}
                      >
                        {step.id}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`truncate text-sm font-semibold transition-colors sm:text-base ${
                              isActive ? "text-[#0a1b3d]" : "text-gray-800"
                            }`}
                          >
                            {step.title}
                          </h4>
                          <ArrowRight
                            className={`h-3.5 w-3.5 flex-shrink-0 transition-all duration-200 ${
                              isActive
                                ? "translate-x-0.5 text-blue-600 opacity-100"
                                : "text-gray-400 opacity-0 group-hover:opacity-100"
                            }`}
                          />
                        </div>

                        <p
                          className={`mt-0.5 text-xs transition-all duration-200 ${
                            isActive ? "line-clamp-2 text-gray-600" : "line-clamp-1 text-gray-400"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
      </div>
    </section>
  );
}
