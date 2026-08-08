import Image from 'next/image';

const benefits = [
  {
    number: "01",
    title: "Benefits Of Campus Laundry Service",
    description: "Designed to provide students with a smarter and more convenient laundry experience.",
  },
  {
    number: "02",
    title: "Time-Saving Convenience",
    description: "Students no longer need to spend hours doing laundry manually or traveling off-campus.",
  },
  {
    number: "03",
    title: "Hassle-Free Scheduling",
    description: "Easy drop-offs and quick turnarounds keep daily routines smooth and stress-free.",
  },
  {
    number: "04",
    title: "Eco-Friendly & Reliable",
    description: "State-of-the-art energy-efficient machines that deliver high quality hygiene and care.",
  },
];

export default function LaundryBenefits() {
  return (
    <section className="relative bg-black text-white">
      {/* 1. FIXED / STICKY BACKGROUND IMAGE */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image
          src="/images/carouselimg1.png"
          alt="Campus Laundry Service Background"
          fill
          className="object-cover brightness-75"
          priority
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. SCROLLING TEXT CONTENT OVERLAY */}
      <div className="relative z-10 -mt-[100vh] space-y-[40vh] pb-[30vh]">
        {benefits.map((item, index) => (
          <div 
            key={index} 
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          >
            <div className="relative max-w-4xl w-full text-center p-8 sm:p-12 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl">
              
              {/* Large Watermark Number Background */}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] font-extrabold text-white/10 select-none pointer-events-none leading-none">
                {item.number}
              </span>

              {/* Main Content */}
              <div className="relative z-10 space-y-4">
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                  {item.title}
                </h2>
                
                <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}