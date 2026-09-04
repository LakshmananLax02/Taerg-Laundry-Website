import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ShieldCheck,
  Shirt,
  Truck,
  Users,
  WashingMachine,
  Wrench,
} from 'lucide-react';

export const metadata = {
  title: 'Our Services | Taerg Campus Laundry',
  description:
    'Explore Taerg campus laundry services, from planning and commercial machine installation to managed student laundry, reporting and lifecycle support.',
};

const services = [
  {
    number: '01',
    icon: Building2,
    title: 'Campus Assessment & Planning',
    description:
      'We study hostel capacity, student routines, utility readiness and available space before shaping a laundry model around your institution.',
    features: ['Capacity and demand study', 'Layout and utility planning', 'Implementation roadmap'],
    audience: 'For schools, colleges and universities',
    image: '/images/carousel2.png',
    imageAlt: 'A modern Taerg laundry facility integrated into a college campus',
  },
  {
    number: '02',
    icon: WashingMachine,
    title: 'Commercial Laundry Infrastructure',
    description:
      'High-performance washers, dryers and practical facility layouts engineered for the continuous demands of campus life.',
    features: ['Commercial-grade equipment', 'Professional installation', 'Space-efficient configuration'],
    audience: 'Built for daily institutional demand',
    image: '/images/carouselimg1.png',
    imageAlt: 'Commercial laundry machines and freshly folded garments',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Managed Pickup & Delivery',
    description:
      'Scheduled hostel collection and dependable return slots keep laundry moving without interrupting classes or campus routines.',
    features: ['Convenient collection points', 'Organised order handling', 'On-time campus delivery'],
    audience: 'Designed around student schedules',
    image: '/images/ourprocessimg2.png',
    imageAlt: 'Taerg team collecting a laundry bag from students',
  },
  {
    number: '04',
    icon: Shirt,
    title: 'Wash, Dry & Fold Care',
    description:
      'Every load follows a structured care process for hygienic washing, thorough drying and clean, organised folding.',
    features: ['Hygienic wash cycles', 'Fabric-conscious handling', 'Neatly folded returns'],
    audience: 'Consistent care, every cycle',
    image: '/images/carousel4.png',
    imageAlt: 'Taerg laundry specialists washing, pressing and folding clothes',
  },
  {
    number: '05',
    icon: Users,
    title: 'Fully Managed Operations',
    description:
      'Taerg can manage the people, processes and daily coordination behind your campus laundry as one accountable partner.',
    features: ['Trained operating team', 'Defined service standards', 'Day-to-day coordination'],
    audience: 'Less administration for management',
    image: '/images/carousel3.png',
    imageAlt: 'A Taerg campus laundry team serving a student',
  },
  {
    number: '06',
    icon: Wrench,
    title: 'Maintenance & Lifecycle Support',
    description:
      'Preventive care and responsive technical support protect equipment uptime throughout the academic year.',
    features: ['Preventive maintenance', 'Responsive service support', 'Performance monitoring'],
    audience: 'Reliable beyond installation',
    image: '/images/whychooseimg.png',
    imageAlt: 'A professionally managed Taerg campus laundry centre',
  },
];

const faqs = [
  {
    question: 'Can Taerg set up a new laundry facility on our campus?',
    answer:
      'Yes. We can support the complete journey from site assessment and capacity planning to commercial equipment installation and an operating model tailored to your campus.',
  },
  {
    question: 'Can you manage an existing campus laundry facility?',
    answer:
      'Yes. After reviewing the current infrastructure and demand, Taerg can recommend and operate a managed service covering staffing, process, collection, garment care and delivery.',
  },
  {
    question: 'How is the service planned around student routines?',
    answer:
      'Collection points, time slots and return schedules are designed around hostel access, class timings and the daily rhythm of each institution.',
  },
  {
    question: 'Do you provide maintenance after installation?',
    answer:
      'Yes. Lifecycle support can include preventive maintenance, performance checks and responsive assistance to help protect machine uptime.',
  },
];

export default function OurServicesPage() {
  return (
    <div className="overflow-hidden bg-white font-sans text-[#031738]">
      <section className="relative isolate flex h-[50svh] min-h-[340px] max-h-[480px] items-center justify-center overflow-hidden bg-[#020f26] px-5 pb-8 pt-28 text-center text-white sm:px-8 sm:pb-10 sm:pt-32 lg:px-12">
        <Image
          src="/images/carousel4.png"
          alt="Taerg team delivering professional campus laundry services"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#020f26]/55" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#020f26]/65 to-transparent" />

        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200 sm:text-sm">
            Complete campus laundry solutions
          </p>
          <h1 className="mt-4 text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-none tracking-[-0.055em] text-white">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-6 text-slate-200 sm:text-base sm:leading-7">
            From infrastructure and installation to daily operations and student delivery, Taerg manages every stage of campus laundry.
          </p>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-24 bg-[#f5f8fc] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#031738] px-4 py-1.5 text-xs font-medium tracking-wide text-white">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Complete Service Portfolio
            </span>
            <h2 className="section-topic mx-auto mt-4 text-[#031738]">
              Built for Campus. Managed by Taerg.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-slate-600 sm:text-base">
              Choose the support your institution needs or bring every layer together as one fully managed campus laundry solution.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const imageFirst = index % 2 === 1;

        return (
          <section
            key={service.number}
            className={`group px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#f5f8fc]'
            }`}
          >
            <div className="mx-auto grid max-w-7xl items-stretch gap-9 lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <div
                className={`order-2 flex flex-col justify-center ${
                  imageFirst ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#061c3f] text-white transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                    <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <div className="h-px w-10 bg-[#245da6]/45" />
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#245da6]">
                    {service.number}
                  </span>
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.17em] text-[#245da6]">
                  {service.audience}
                </p>
                <h3 className="mt-3 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#031738]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-600 sm:text-base">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-[#245da6]">
                        <Check size={13} strokeWidth={2.4} aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`relative order-1 mx-auto aspect-[4/3] w-full min-w-0 max-w-full overflow-hidden rounded-xl bg-[#061c3f] shadow-[0_28px_70px_-42px_rgba(3,23,56,0.62)] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:self-stretch ${
                  imageFirst ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020f26]/35 to-transparent" />
                <span className="absolute bottom-5 right-6 text-4xl font-semibold tracking-[-0.06em] text-white/65 sm:text-5xl">
                  {service.number}
                </span>
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative isolate overflow-hidden bg-[#031738] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <Image
          src="/images/carousel2.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-[0.13] grayscale"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(36,93,166,0.22),transparent_48%),linear-gradient(90deg,rgba(3,23,56,0.98),rgba(3,23,56,0.82),rgba(3,23,56,0.98))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_78%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#ffde6a]" />
              One Service. Two Clear Outcomes.
            </span>
            <h2 className="section-topic mx-auto mt-5 max-w-3xl text-white">
              Laundry that works for the whole campus.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-slate-300 sm:text-base">
              Taerg connects everyday student convenience with the operational confidence campus teams need.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-9 md:grid-cols-[1fr_auto_1fr] md:gap-7 lg:mt-16 lg:gap-12">
            <article className="text-center md:text-right">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-blue-300/25 bg-blue-400/10 text-blue-200 md:ml-auto md:mr-0">
                <Users size={22} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">For students</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">More time for campus life.</h3>
              <p className="mt-4 ml-auto max-w-md text-sm font-light leading-7 text-slate-300 sm:text-base">
                Simple access, predictable collection and clean, folded clothes returned around academic schedules.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-end">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Easy access</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Dependable return</span>
              </div>
            </article>

            <div className="relative mx-auto flex items-center justify-center md:h-64 md:w-28">
              <span className="absolute hidden h-px w-[calc(100vw-8rem)] max-w-5xl bg-gradient-to-r from-transparent via-blue-300/25 to-transparent md:block" />
              <span className="absolute hidden h-64 w-px bg-gradient-to-b from-transparent via-blue-300/30 to-transparent md:block" />
              <div className="relative z-10 grid h-24 w-24 place-items-center rounded-full border border-blue-200/25 bg-[#08244d] shadow-[0_0_0_10px_rgba(59,130,246,0.06),0_20px_50px_rgba(0,0,0,0.35)]">
                <WashingMachine size={35} strokeWidth={1.45} className="text-white" aria-hidden="true" />
                <span className="absolute -bottom-2 rounded-full bg-[#ffde6a] px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#031738]">
                  Taerg
                </span>
              </div>
            </div>

            <article className="text-center md:text-left">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-blue-300/25 bg-blue-400/10 text-blue-200 md:ml-0 md:mr-auto">
                <BarChart3 size={22} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">For campus management</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">Clearer operational control.</h3>
              <p className="mt-4 max-w-md text-sm font-light leading-7 text-slate-300 sm:text-base">
                One accountable partner, defined standards, dependable infrastructure and clearer service oversight.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">One partner</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Visible standards</span>
              </div>
            </article>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
            <ShieldCheck size={30} strokeWidth={1.6} className="shrink-0 text-[#ffde6a]" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">The shared result</p>
              <p className="mt-1 text-base font-medium text-white sm:text-lg">
                A trusted campus amenity that strengthens student experience and long-term institutional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#245da6]">Service questions</p>
            <h2 className="section-topic mt-4 text-[#031738]">Clear answers for campus teams.</h2>
            <p className="mt-5 max-w-md text-sm font-light leading-7 text-slate-600 sm:text-base">
              Every institution is different. These are the questions campus teams most often ask before planning a service.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0b3475] transition-colors hover:text-[#245da6]">
              Learn more about Taerg
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl border border-[#173c78]/12 bg-white px-5 py-1 shadow-sm open:border-[#245da6]/30 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-semibold tracking-[-0.02em] text-[#031738] marker:hidden sm:text-lg">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 text-xs tracking-[0.12em] text-[#245da6]">0{index + 1}</span>
                    {faq.question}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#0b3475] transition-transform duration-300 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">+</span>
                  </span>
                </summary>
                <p className="border-t border-slate-100 pb-5 pt-4 text-sm font-light leading-7 text-slate-600 sm:pl-10 sm:pr-12">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
