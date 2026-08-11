"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Compass, ShieldCheck, Sparkles } from "lucide-react";

export default function VirtualTourSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#0a1b3d] text-white px-3.5 py-1 rounded-full text-xs font-medium">
            <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
            Interactive Experience
          </div>

          <h2 className="section-topic text-[#0a1b3d]">
            Take A Virtual Tour Of Our Campus Laundry
          </h2>
        </div>

        {/* Video Box Container */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-900">
          
          {/* Card Aspect Ratio Container */}
          <div className="relative aspect-[2.2/1] w-full min-h-[220px] sm:min-h-[280px]">
            
            {isPlaying ? (
              /* INLINE VIDEO PLAYER STATE */
              <div className="relative w-full h-full bg-black">
                {/* 1. Standard HTML5 Video Player */}
                <video
                  src="/images/booking-confirmation-background.mp4" 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                />

             

                {/* Close Button to exit video */}
                <button
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close video"
                  className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/20 shadow-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* THUMBNAIL PREVIEW STATE */
              <>
                <Image
                  src="/images/virtual-tour-thumb.jpg" // Replace with your thumbnail image path
                  alt="Campus Laundry Virtual Tour Thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3d]/80 via-black/20 to-black/20 group-hover:via-black/10 transition-all duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-black/40 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  HD 4K Tour
                </div>

                {/* Center Play Button Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play Virtual Tour Video"
                    className="group/btn relative flex items-center justify-center"
                  >
                    <span className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/30 animate-ping pointer-events-none" />
                    
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#0a1b3d] shadow-md flex items-center justify-center transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:bg-blue-600 group-hover/btn:text-white">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                    </div>
                  </button>
                </div>

                {/* Bottom Bar Details */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white pointer-events-none">
                  <div className="space-y-0.5">
                    <p className="text-[10px] sm:text-xs text-blue-300 font-semibold tracking-wider uppercase">Live Experience</p>
                    <p className="text-xs sm:text-base font-bold truncate">State-of-the-Art Laundromat Setup</p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    <div className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Eco-Friendly
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      Sanitized
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
