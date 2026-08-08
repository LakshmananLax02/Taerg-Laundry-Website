'use client';

import Image from 'next/image';

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#031738] px-4 py-12 font-sans text-white sm:px-6 md:py-14 lg:px-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="relative z-10 mb-8 text-center md:mb-10">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            {/* Blue Accent Circles */}
            <span className="inline-block h-6 w-6 rounded-full bg-[#132B5C] md:h-7 md:w-7"></span>
            <span className="inline-block h-6 w-6 rounded-full bg-[#132B5C] md:h-7 md:w-7"></span>
            
            <h2 className="text-3xl font-normal leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Why Choose Taerg
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-xl text-xs font-light leading-relaxed tracking-wide text-gray-300 md:text-sm">
            Partnering with forward-thinking campuses to deliver world-class
            laundry infrastructure and student experiences.
          </p>
        </div>

        {/* Feature Grid Item 01 */}
        <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Text Column with Huge "01" Background Watermark */}
          <div className="relative py-4 lg:col-span-6 lg:py-6 lg:pl-6">
            
            {/* Giant Faded "01" Watermark */}
            <div className="pointer-events-none absolute -left-3 -top-3 z-0 select-none opacity-20 lg:-left-5 lg:-top-5">
              <span className="block text-[160px] font-black leading-none text-[#1B3673] sm:text-[190px] lg:text-[240px]">
                01
              </span>
            </div>

            {/* Content Container (Positioned over the 01 watermark) */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-baseline gap-3 md:gap-4">
                <span className="text-2xl font-extrabold text-white md:text-3xl">01</span>
                <h3 className="text-2xl font-normal leading-tight text-white md:text-3xl lg:text-4xl">
                  Dedicated Campus <br /> Infrastructure
                </h3>
              </div>

              <p className="max-w-md text-sm font-light leading-relaxed text-gray-300 md:text-base">
                Purpose-built laundry centres designed exclusively for educational institutions, seamlessly integrated into your campus environment.
              </p>
            </div>
          </div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-6 relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/whychooseimg.png" // Replace with your actual campus laundry image path
                alt="Taerg Dedicated Campus Infrastructure Counter"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
