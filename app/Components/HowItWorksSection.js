"use client";

import { useState } from "react";
import Image from "next/image";
import {
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
  const step = steps[activeStep];

  const selectStep = (index) => {
    setActiveStep(Math.max(0, Math.min(steps.length - 1, index)));
  };

  return (
    <section
      aria-labelledby="process-title"
      className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1760px]">
        <header className="mx-auto mb-7 max-w-4xl text-center sm:mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0a1b3d] px-3 py-1 text-xs font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Our Process
          </div>

          <h2 id="process-title" className="section-topic mt-4 text-[#0a1b3d]">
            How Taerg Laundry Helps Students
          </h2>
        </header>

        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-36px_rgba(3,23,56,0.45)] lg:grid-cols-12">
          <div className="relative min-h-[280px] bg-[#071a3a] sm:min-h-[340px] lg:col-span-7 lg:min-h-[420px]">
            <Image
              key={step.image}
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover"
              priority={activeStep === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031738]/55 via-transparent to-black/5" />

            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0a1b3d] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              Step {step.id} of {String(steps.length).padStart(2, "0")}
            </div>

            <div className="pointer-events-none absolute inset-x-3 top-1/2 z-10 flex -translate-y-1/2 justify-between sm:inset-x-5">
              <button
                type="button"
                onClick={() => selectStep(activeStep - 1)}
                disabled={activeStep === 0}
                aria-label="Previous process step"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-md backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => selectStep(activeStep + 1)}
                disabled={activeStep === steps.length - 1}
                aria-label="Next process step"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-md backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <article className="flex min-h-[280px] flex-col justify-center p-5 sm:min-h-[320px] sm:p-6 lg:col-span-5 lg:min-h-[420px] lg:p-8 xl:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {step.subtitle}
            </p>

            <div className="mt-4 flex items-start gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#0a1b3d] text-base font-semibold text-white shadow-sm sm:h-14 sm:w-14">
                {step.id}
              </span>
              <h3 className="pt-1 text-2xl font-semibold leading-tight tracking-tight text-[#0a1b3d] sm:text-3xl">
                {step.title}
              </h3>
            </div>

            <p className="mt-5 text-sm font-light leading-relaxed text-slate-600 sm:text-base">
              {step.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-[#0a1b3d]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-2" aria-label="Process steps">
              {steps.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectStep(index)}
                  aria-label={`Show ${item.subtitle}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`h-1.5 flex-1 rounded-full ${
                    activeStep === index ? "bg-blue-600" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
