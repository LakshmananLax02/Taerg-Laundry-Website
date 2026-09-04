import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Shirt,
  Users,
  Wrench,
} from 'lucide-react';

const capabilities = [
  {
    number: '01',
    icon: Building2,
    title: 'Plan & Build',
    description:
      'We assess campus demand, design practical layouts and install commercial laundry infrastructure suited to daily institutional use.',
  },
  {
    number: '02',
    icon: Shirt,
    title: 'Operate & Care',
    description:
      'Trained teams manage collection, hygienic garment care, organised folding and dependable return around student routines.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Support & Improve',
    description:
      'Preventive maintenance, responsive support and clear service standards keep the campus operation dependable over time.',
  },
];

const values = [
  {
    number: '01',
    title: 'Students First',
    description:
      'Every collection point, service window and care process is planned around real campus life.',
  },
  {
    number: '02',
    title: 'One Accountable Partner',
    description:
      'Institutions gain one team responsible for infrastructure, operations and ongoing support.',
  },
  {
    number: '03',
    title: 'Consistent Quality',
    description:
      'Defined workflows and professional garment care create a reliable experience in every cycle.',
  },
  {
    number: '04',
    title: 'Built for the Long Term',
    description:
      'Scalable systems and dependable partnerships help campus laundry evolve with institutional needs.',
  },
];

export default function AboutUsContent() {
  return (
    <div className="overflow-hidden bg-white text-[#031738]">
      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -left-28 top-14 h-80 w-80 rounded-full bg-blue-100/70 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#031738] px-4 py-1.5 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              About the Company
            </span>

            <h2 className="section-topic mt-5 max-w-2xl text-[#031738]">
              Campus laundry, built around student life.
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>
                Taerg is a campus-focused laundry solutions company helping schools, colleges and universities deliver a cleaner, simpler and more dependable student experience.
              </p>
              <p>
                We bring together commercial equipment, thoughtful facility planning, trained operating teams and ongoing support—giving institutions one accountable partner for the complete laundry operation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-5">
              {[
                ['Campus', 'Focused'],
                ['End-to-End', 'Managed'],
                ['Student', 'Centred'],
              ].map(([top, bottom]) => (
                <div key={top} className="px-3 first:pl-0 sm:px-5 sm:first:pl-0">
                  <p className="text-base font-semibold tracking-[-0.025em] text-[#031738] sm:text-lg">{top}</p>
                  <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-slate-400 sm:text-xs">{bottom}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#031738] sm:aspect-[16/11]">
              <Image
                src="/images/carousel3.png"
                alt="Taerg team serving a student at a professionally managed campus laundry"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020f26]/65 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Our role on campus</p>
                <p className="mt-2 max-w-lg text-xl font-medium leading-snug tracking-[-0.03em] text-white sm:text-2xl">
                  Making an everyday campus need feel effortless.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-[#245da6] sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#031738] px-4 py-1.5 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              What We Do
            </span>
            <h2 className="section-topic mt-5 text-[#031738]">
              One team for the complete campus laundry journey.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 text-slate-600 sm:text-base">
              From the first campus assessment to dependable daily service, every stage works as one connected operation.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl sm:min-h-[480px] lg:min-h-full">
              <Image
                src="/images/carousel4.png"
                alt="Taerg professionals managing washing, pressing and folding"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020f26]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Professionally managed</p>
                <p className="mt-2 max-w-sm text-xl font-medium leading-snug tracking-[-0.03em] text-white sm:text-2xl">
                  Infrastructure, people and process working together.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article key={capability.number} className="group grid grid-cols-[auto_1fr] gap-4 border-b border-slate-200 py-7 first:pt-0 last:border-0 last:pb-0 sm:gap-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-[#031738] text-white transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                        <Icon size={23} strokeWidth={1.65} aria-hidden="true" />
                      </div>
                      <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-[#245da6]">{capability.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#031738] sm:text-2xl">{capability.title}</h3>
                      <p className="mt-2 text-sm font-light leading-7 text-slate-600 sm:text-base">{capability.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#031738] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_80%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#ffde6a]" />
              Why We Exist
            </span>
            <h2 className="section-topic mt-5 text-white">A better everyday experience for every campus.</h2>
          </div>

          <div className="mt-12 grid border-y border-white/10 md:grid-cols-2 md:divide-x md:divide-white/10">
            <article className="py-9 md:py-12 md:pr-10 lg:pr-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Our Mission</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Remove laundry as a burden from campus life.
              </h3>
              <p className="mt-5 max-w-xl text-sm font-light leading-7 text-slate-300 sm:text-base">
                We make dependable laundry care accessible to students while giving institutions a professionally managed operation they can trust.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-blue-100">
                <CheckCircle2 size={18} className="text-[#ffde6a]" aria-hidden="true" />
                Convenience without compromising care
              </div>
            </article>

            <article className="border-t border-white/10 py-9 md:border-t-0 md:py-12 md:pl-10 lg:pl-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Our Vision</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Raise the standard of student living across institutions.
              </h3>
              <p className="mt-5 max-w-xl text-sm font-light leading-7 text-slate-300 sm:text-base">
                We envision cleaner, healthier and more efficient campuses supported by scalable laundry infrastructure and lasting partnerships.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-blue-100">
                <ShieldCheck size={18} className="text-[#ffde6a]" aria-hidden="true" />
                Stronger systems for long-term campus value
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#245da6]">What Guides Us</p>
            <h2 className="section-topic mt-4 text-[#031738]">Principles behind every Taerg campus.</h2>
            <p className="mt-5 max-w-md text-sm font-light leading-7 text-slate-600 sm:text-base">
              Our decisions stay grounded in the people who use the service and the institutions that depend on it.
            </p>
            <Link
              href="/our-services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0b3475] transition-colors hover:text-[#245da6]"
            >
              Explore our services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="border-t border-slate-200">
            {values.map((value) => (
              <article key={value.number} className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:items-start sm:gap-6 sm:py-7">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#245da6]">{value.number}</span>
                <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#031738] sm:text-xl">{value.title}</h3>
                <p className="text-sm font-light leading-7 text-slate-600 sm:text-base">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
