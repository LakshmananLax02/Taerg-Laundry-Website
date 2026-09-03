import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Clock3,
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

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'We assess your campus, student strength, service expectations and operational constraints.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'We create the right infrastructure, collection model and operating plan for your institution.',
  },
  {
    number: '03',
    title: 'Operate',
    text: 'Our team runs each stage with clear routines, quality checks and dependable turnaround.',
  },
  {
    number: '04',
    title: 'Improve',
    text: 'Ongoing reporting and support help the service stay reliable as campus requirements grow.',
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
      <section className="relative isolate overflow-hidden bg-[#020f26] px-5 pb-12 pt-32 text-white sm:px-8 sm:pb-16 sm:pt-36 lg:px-12 lg:pb-20 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(to_bottom,#000_20%,transparent_92%)]" />
        <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#174b95]/30 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-[#0b3475]/35 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.19em] text-blue-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#ffde6a] shadow-[0_0_12px_rgba(255,222,106,0.8)]" />
              Our Services
            </span>

            <h1 className="mt-6 max-w-3xl text-[clamp(2.65rem,6vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
              Every campus laundry need,
              <span className="block text-blue-300">handled as one.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base font-light leading-7 text-slate-300 sm:text-lg sm:leading-8">
              From planning and commercial machines to daily garment care and ongoing support, Taerg delivers a complete laundry ecosystem for educational institutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="action-ripple action-ripple--call gap-2 px-6 py-3 text-sm font-semibold"
              >
                Explore our services
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="action-ripple gap-2 border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm"
              >
                Plan your campus setup
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="relative aspect-[1.12/1] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#071a37] shadow-[0_32px_100px_-35px_rgba(0,0,0,0.95)] sm:aspect-[1.35/1] lg:aspect-[1.08/1]">
              <Image
                src="/images/carousel4.png"
                alt="Taerg professionals operating a modern campus laundry facility"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020f26]/80 via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-[#031738]/80 p-3 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:gap-4 sm:p-4">
                {[
                  ['01', 'Plan'],
                  ['02', 'Install'],
                  ['03', 'Manage'],
                ].map(([number, label]) => (
                  <div key={label} className="border-r border-white/10 last:border-0">
                    <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-blue-300">{number}</p>
                    <p className="mt-1 text-xs font-medium text-white sm:text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -left-3 top-8 rounded-2xl border border-blue-300/20 bg-[#08244d]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-6 sm:top-10 sm:px-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-blue-200">One partner</p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">End-to-end delivery</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:mt-16">
          {[
            ['6', 'Connected services'],
            ['360°', 'Campus support'],
            ['1', 'Accountable partner'],
            ['All', 'Campus needs covered'],
          ].map(([value, label]) => (
            <div key={label} className="bg-[#04152f]/90 px-4 py-5 text-center sm:px-6">
              <p className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-slate-400 sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative scroll-mt-24 bg-[#f5f8fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 border-b border-slate-200 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#245da6]">Complete service portfolio</p>
              <h2 className="section-topic mt-4 text-[#031738]">Built for campus. Managed by Taerg.</h2>
            </div>
            <p className="max-w-2xl text-sm font-light leading-7 text-slate-600 sm:text-base lg:justify-self-end lg:text-lg lg:leading-8">
              Choose the support your institution needs today, or combine every layer into one fully managed campus laundry solution.
            </p>
          </div>

          <div className="mt-10 space-y-6 lg:mt-14 lg:space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const imageFirst = index % 2 === 1;

              return (
                <article
                  key={service.number}
                  className="group grid overflow-hidden rounded-[1.75rem] border border-[#173c78]/15 bg-white shadow-[0_26px_70px_-42px_rgba(3,23,56,0.58)] lg:min-h-[480px] lg:grid-cols-2"
                >
                  <div
                    className={`relative order-2 flex flex-col justify-center overflow-hidden p-6 sm:p-9 lg:p-12 xl:p-14 ${
                      imageFirst ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-5 -top-10 text-[10rem] font-semibold leading-none tracking-[-0.08em] text-[#031738]/[0.035] sm:text-[12rem]">
                      {service.number}
                    </div>

                    <div className="relative flex items-center gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#061c3f] text-white shadow-[0_12px_26px_-14px_rgba(3,23,56,0.8)] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#245da6]">
                          Service {service.number}
                        </p>
                        <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.13em] text-slate-400">
                          {service.audience}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-7 max-w-xl">
                      <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#031738]">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-sm font-light leading-7 text-slate-600 sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    <ul className="relative mt-7 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-xs font-medium text-slate-600 sm:text-sm">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[#245da6]">
                            <Check size={12} strokeWidth={2.4} aria-hidden="true" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative order-1 min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full ${
                      imageFirst ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020f26]/75 via-transparent to-transparent" />

                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-2xl border border-white/15 bg-[#031738]/72 p-4 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-5">
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-blue-200">Taerg Campus Laundry</p>
                        <p className="mt-1.5 text-sm font-medium sm:text-base">{service.audience}</p>
                      </div>
                      <span className="text-3xl font-semibold tracking-[-0.05em] text-white/35 sm:text-4xl">
                        {service.number}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#173c78]/15 bg-white shadow-[0_30px_85px_-42px_rgba(3,23,56,0.58)] lg:grid-cols-2">
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[520px] lg:min-h-[690px]">
            <Image
              src="/images/carousel2.png"
              alt="Taerg team collecting laundry from students on campus"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020f26]/85 via-[#020f26]/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-[#031738]/80 p-5 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-200">Made for real campus routines</p>
              <p className="mt-2 max-w-md text-xl font-medium leading-snug tracking-[-0.03em] sm:text-2xl">
                Dependable for management. Effortless for students.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#f7f9fc] p-6 sm:p-10 lg:p-12 xl:p-16">
            <span className="w-fit rounded-full bg-[#031738] px-4 py-1.5 text-xs font-medium text-white">One service, two clear outcomes</span>
            <h2 className="section-topic mt-5 text-[#031738]">Laundry that works for the whole campus.</h2>
            <p className="mt-5 text-sm font-light leading-7 text-slate-600 sm:text-base">
              Taerg connects student convenience with the control and accountability institutional teams need.
            </p>

            <div className="mt-8 space-y-4">
              <OutcomeCard
                icon={Users}
                title="For students"
                text="Simple access, predictable collection and clean, folded clothes returned around academic schedules."
              />
              <OutcomeCard
                icon={BarChart3}
                title="For campus management"
                text="One operating partner, defined service standards, dependable infrastructure and clearer oversight."
              />
              <OutcomeCard
                icon={ShieldCheck}
                title="For your institution"
                text="A professionally managed amenity that strengthens student experience and long-term campus value."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#031738] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_80%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-blue-100">
              <Clock3 size={14} aria-hidden="true" />
              The Taerg service model
            </span>
            <h2 className="section-topic mt-5 text-white">From campus need to dependable daily service.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-slate-300 sm:text-base">
              A clear operating journey keeps decisions simple and every stakeholder aligned.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.number} className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.18em] text-blue-300">{step.number}</span>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden text-white/25 xl:block" size={18} aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-6 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[1.5rem] border border-blue-200/15 bg-gradient-to-r from-[#092b5c] via-[#0b3475] to-[#071d42] sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Start with a campus assessment</p>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Tell us your student capacity. We&apos;ll help shape the right laundry model.
              </h3>
            </div>
            <div className="px-6 pb-6 sm:px-8 sm:pb-0 sm:pl-0">
              <a href="#contact" className="action-ripple action-ripple--call gap-2 px-6 py-3 text-sm font-semibold">
                Talk to our team
                <ArrowRight size={17} aria-hidden="true" />
              </a>
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

function OutcomeCard({ icon: Icon, title, text }) {
  return (
    <article className="group flex gap-4 rounded-2xl border border-[#173c78]/10 bg-white p-4 shadow-[0_12px_32px_-26px_rgba(3,23,56,0.55)] transition-[transform,border-color] duration-300 hover:translate-x-1 hover:border-[#245da6]/30 sm:p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#061c3f] text-white transition-transform duration-300 group-hover:scale-105">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold tracking-[-0.02em] text-[#031738]">{title}</h3>
        <p className="mt-1.5 text-xs font-light leading-6 text-slate-600 sm:text-sm">{text}</p>
      </div>
    </article>
  );
}
