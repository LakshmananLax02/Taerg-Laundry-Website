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
  return (
    <section className="relative isolate bg-[#031738] px-2 py-8 font-sans text-white sm:px-4 sm:py-6 md:py-6 lg:px-10 lg:py-6">
      <div className="mx-auto max-w-7xl">
        <header className="relative z-10 mb-6 px-2 text-center sm:mb-8 md:mb-10">
          <div className="mb-3 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0a1b3d] px-3 py-1 text-xs font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Why Taerg
            </div>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Why Choose Taerg
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs font-light leading-relaxed tracking-wide text-gray-300 md:text-sm">
            Partnering with forward-thinking campuses to deliver world-class
            laundry infrastructure and student experiences.
          </p>
        </header>

        <div className="relative">
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className="sticky top-20 mb-[8vh] grid h-[calc(100svh-5.75rem)] max-h-[650px] w-full grid-cols-1 grid-rows-[minmax(0,1fr)_38%] items-center overflow-hidden rounded-2xl border border-white/10 shadow-[0_28px_70px_-35px_rgba(0,0,0,0.9)] last:mb-0 sm:mb-[10vh] sm:rounded-3xl md:top-24 lg:mb-[12vh] lg:h-[calc(100vh-7.5rem)] lg:max-h-none lg:grid-cols-12 lg:grid-rows-none"
              style={{ backgroundColor: reason.background, zIndex: index + 1 }}
            >
              <div
                className={`relative z-10 flex h-full min-h-0 flex-col justify-center px-5 py-5 sm:px-7 sm:py-6 md:px-9 lg:col-span-5 lg:px-12 lg:py-14 ${
                  reason.reverse ? 'lg:order-2' : ''
                }`}
              >
                <span className="pointer-events-none absolute -left-3 top-1/2 -translate-y-1/2 select-none text-[180px] font-black leading-none text-white/[0.035] sm:text-[230px] lg:text-[300px]">
                  {reason.number}
                </span>

                <div className="relative z-10 max-w-lg">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4 lg:mb-5">
                    <span className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                      {reason.number}
                    </span>
                    <span className="h-px w-14 bg-blue-300/60" />
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 max-w-md text-xs font-light leading-relaxed text-blue-100/80 sm:mt-4 sm:text-sm md:text-base lg:mt-5">
                    {reason.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 sm:mt-6 lg:mt-8" aria-hidden="true">
                    {reasons.map((item, dotIndex) => (
                      <span
                        key={item.number}
                        className={`h-1.5 rounded-full transition-all ${
                          dotIndex === index ? 'w-8 bg-white' : 'w-3 bg-white/25'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`relative h-full min-h-0 self-stretch lg:col-span-7 ${
                  reason.reverse ? 'lg:order-1' : ''
                }`}
              >
                <div className="absolute inset-x-2 bottom-2 top-0 overflow-hidden rounded-xl border border-white/15 sm:inset-x-4 sm:bottom-4 sm:rounded-2xl lg:inset-6">
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
          ))}

          <div className="h-[8vh] sm:h-[12vh] lg:h-[18vh]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
