'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  RotateCcw,
  ShieldCheck,
  User,
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      '“Taerg Laundry has made my college life so much easier. I just schedule a pickup and get fresh, neatly folded clothes right on time!”',
    name: 'Arjun R.',
    role: '3rd Year, B.Tech',
    stars: 5,
  },
  {
    id: 2,
    quote:
      '“Super convenient and very hygienic. I love how professional and reliable the entire process is.”',
    name: 'Sneha K.',
    role: '2nd Year, BBA',
    stars: 5,
  },
  {
    id: 3,
    quote:
      '“Great quality washing and steam ironing. Their pickup and delivery service is a huge time saver!”',
    name: 'Vikram S.',
    role: '4th Year, B.Com',
    stars: 5,
  },
];

const stats = [
  { id: 1, icon: Users, value: '1000+', label: 'Happy Students' },
  { id: 2, icon: Star, value: '4.9/5', label: 'Average Rating' },
  { id: 3, icon: RotateCcw, value: '98%', label: 'Satisfaction Rate' },
  { id: 4, icon: ShieldCheck, value: '24H', label: 'On-Time Delivery' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-7 md:py-7 px-4 sm:px-6 lg:px-12 font-sans relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#031738] text-white px-3.5 py-1 rounded-full shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
          <span className="text-xs font-medium tracking-wide">Testimonials</span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="section-topic mb-2 text-[#031738]">
            Loved by Students, Trusted Every Day
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-light">
            See what students have to say about their experience with Taerg Laundry.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative w-full max-w-6xl mb-4">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#031738] shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial Cards Layout */}
          <div className="overflow-visible px-2 py-3 md:px-3 md:py-4">
            {/* Desktop View (3-Card Grid) */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>

            {/* Mobile View (Single Slide) */}
            <div className="block md:hidden">
              <TestimonialCard item={testimonials[currentIndex]} />
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#031738] shadow-xl"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center gap-1.5 mb-8 md:mb-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-5 bg-[#031738]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Dark Navy Metrics Banner */}
        <div className="w-full bg-[#031738] rounded-xl p-5 md:p-8 text-white shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex items-center justify-center gap-3 ${
                    idx >= 2 ? 'pt-4 lg:pt-0' : ''
                  }`}
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <IconComponent size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg md:text-2xl font-bold tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-[10px] md:text-xs font-light tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

// Single Testimonial Card Component
function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card flex h-full w-full flex-col justify-between rounded-xl border border-slate-200/80 p-5 shadow-[0_14px_38px_-18px_rgba(3,23,56,0.28),0_5px_14px_-8px_rgba(3,23,56,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_-18px_rgba(3,23,56,0.34),0_8px_18px_-9px_rgba(3,23,56,0.18)] md:p-6">
      <div className="space-y-2 mb-4">
        <span className="text-4xl font-serif text-indigo-200 leading-none block select-none -mb-1">
          “
        </span>
        <p className="text-[#031738] text-xs md:text-sm font-medium leading-relaxed">
          {item.quote}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Person/User Icon Circle */}
          <div className="w-9 h-9 rounded-full border border-gray-200 bg-slate-100 text-[#031738] flex items-center justify-center shrink-0 shadow-2xs">
            <User size={18} />
          </div>
          <div>
            <h4 className="text-[#031738] text-xs font-bold leading-snug">
              {item.name}
            </h4>
            <p className="text-gray-400 text-[11px] font-light">
              {item.role}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(item.stars)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
  );
}
