import Image from 'next/image';
import {
  UserRoundCheck,
  TimerReset,
  ShieldCheck,
  Truck,
  Settings2,
} from 'lucide-react';

const benefits = [
  {
    title: 'Student Convenience',
    description: 'Easy access to laundry services within the campus.',
    icon: UserRoundCheck,
  },
  {
    title: 'Time Saving',
    description: 'Spend more time on studies and campus activities.',
    icon: TimerReset,
  },
  {
    title: 'Hygienic Laundry Care',
    description: 'Professional cleaning with better hygiene standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Easy Pickup & Delivery',
    description: 'Convenient laundry collection and delivery support.',
    icon: Truck,
  },
  {
    title: 'Efficient Management',
    description: 'Organized and efficient campus laundry operations.',
    icon: Settings2,
  },
];

export default function LaundryBenefits() {
  return (
    <section
      id="campus-benefits"
      className="relative bg-black text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image
          src="/images/carouselimg1.png"
          alt="Modern campus laundry facility"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020A17]/75 via-[#031738]/70 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.48)_100%)]" />
      </div>

      <div className="relative z-10 -mt-[100vh] pb-[12vh]">
        <div className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6">
          <header className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black/45 px-5 py-10 text-center shadow-2xl backdrop-blur-md sm:px-10 sm:py-14 md:px-16">
            <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none text-[150px] font-black leading-none text-white/[0.055] sm:text-[210px]">
              05
            </span>

            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-100">
                <span className="h-2 w-2 rounded-full bg-[#FFDE6A]" />
                Campus Benefits
              </div>

              <h2 className="section-topic">
                Benefits of Campus Laundry Service
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-200 sm:text-base md:text-lg">
                Designed to provide students with a smarter, safer and more
                convenient laundry experience.
              </p>
            </div>
          </header>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex min-h-[68vh] items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <article className="group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-black/45 p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-black/55 sm:p-7">
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none text-[7rem] font-black leading-none text-white/[0.055] sm:right-8 sm:text-[10rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white text-[#061B3B] shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                      <Icon size={32} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-blue-200/80 sm:text-xs">
                        Benefit {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1.5 text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 max-w-md text-xs font-light leading-relaxed text-gray-200 sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
