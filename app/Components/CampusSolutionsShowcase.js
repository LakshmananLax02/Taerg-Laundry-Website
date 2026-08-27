import Image from 'next/image';
import {
  BarChart3,
  Building2,
  Headphones,
  ShieldCheck,
  WashingMachine,
} from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Campus Assessment & Planning',
    description:
      'We study hostel capacity, student routines and available space to design the right laundry model for your institution.',
  },
  {
    icon: WashingMachine,
    title: 'Commercial Laundry Infrastructure',
    description:
      'High-performance machines, practical layouts and reliable utilities create a facility built for daily campus demand.',
  },
  {
    icon: ShieldCheck,
    title: 'Managed Student Service',
    description:
      'Trained teams handle collection, hygienic garment care and dependable return while maintaining clear service standards.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Campus Reporting',
    description:
      'Structured operating insights help management monitor service quality, capacity and performance with confidence.',
  },
  {
    icon: Headphones,
    title: 'Lifecycle Support',
    description:
      'Preventive maintenance and responsive assistance keep the facility dependable throughout the academic year.',
  },
];

export default function CampusSolutionsShowcase() {
  return (
    <section
      id="campus-solutions"
      className="relative overflow-hidden bg-[#f5f8fc] px-4 py-14 sm:px-6 md:py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/35 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0b3475]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 text-center md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#031738] px-4 py-1.5 text-xs font-medium tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Complete Campus Solutions
          </span>
          <h2 className="section-topic mx-auto mt-4 max-w-4xl text-[#031738]">
            From Campus Need to Everyday Service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-slate-600 md:text-base">
            One accountable partner for planning, infrastructure, operations and ongoing support.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#173c78]/15 bg-white shadow-[0_28px_80px_-36px_rgba(3,23,56,0.48)] lg:grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[680px]">
            <Image
              src="/images/carousel4.png"
              alt="Taerg team managing a professional campus laundry facility"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020f26]/85 via-transparent to-transparent" />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#031738]/82 p-5 text-white shadow-2xl backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-blue-200">
                Built around your campus
              </p>
              <p className="mt-2 max-w-lg text-xl font-medium leading-snug tracking-[-0.025em] sm:text-2xl">
                Infrastructure that works for management and feels effortless for students.
              </p>
            </div>

            <div className="pointer-events-none absolute left-4 top-4 h-16 w-24 rounded-tl-2xl border-l border-t border-blue-300/80 sm:left-6 sm:top-6 sm:h-20 sm:w-32">
              <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
              <span className="absolute left-3 top-3 h-px w-10 bg-gradient-to-r from-blue-300/80 to-transparent" />
            </div>
          </div>

          <div className="relative px-5 py-7 sm:px-8 sm:py-10 lg:flex lg:items-center lg:py-12 lg:pl-0 lg:pr-10">
            <div className="absolute bottom-10 left-0 top-10 hidden w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent lg:block" />

            <div className="w-full space-y-3 sm:space-y-4">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <article
                    key={solution.title}
                    className="group relative flex flex-col items-center gap-4 rounded-2xl border border-transparent p-4 text-center transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/70 sm:p-5 lg:min-h-[104px] lg:items-start lg:gap-0 lg:rounded-r-2xl lg:rounded-l-none lg:py-3 lg:pl-20 lg:pr-4 lg:text-left"
                  >
                    <div className="relative z-10 mx-auto shrink-0 lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
                      <div
                        className="solution-seam-icon grid h-12 w-12 place-items-center rounded-full border border-blue-200 bg-white text-[#0b3475] shadow-[0_12px_30px_-13px_rgba(11,52,117,0.85)] transition-colors duration-300 group-hover:bg-[#0b3475] group-hover:text-white sm:h-14 sm:w-14 lg:h-[4.5rem] lg:w-[4.5rem]"
                        style={{ '--solution-delay': `${index * -0.55}s` }}
                      >
                        <Icon size={25} strokeWidth={1.65} />
                        <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-blue-500 text-[0.58rem] font-semibold text-white ring-[3px] ring-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="min-w-0 max-w-xl pt-0.5 text-center transition-transform duration-300 lg:max-w-none lg:text-left lg:group-hover:translate-x-1.5">
                      <h3 className="text-base font-semibold tracking-[-0.02em] text-[#031738] sm:text-lg">
                        {solution.title}
                      </h3>
                      <p className="mt-1.5 text-xs font-light leading-relaxed text-slate-600 sm:text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 h-16 w-24 rounded-br-2xl border-b border-r border-[#245da6]/70 sm:bottom-6 sm:right-6 sm:h-20 sm:w-32">
              <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#245da6] shadow-[0_0_12px_rgba(36,93,166,0.7)]" />
              <span className="absolute bottom-3 right-3 h-px w-10 bg-gradient-to-l from-[#245da6]/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
