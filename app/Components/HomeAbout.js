import { Building2, Clock3, GraduationCap, Leaf } from 'lucide-react';

const aboutCards = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Student-First Experience',
    subtitle: 'Designed for campus life',
    description:
      'Pickup, care and delivery planned around classes and hostel routines.',
  },
  {
    id: 2,
    icon: Building2,
    title: 'Fully Managed Operations',
    subtitle: 'Zero administrative overhead',
    description:
      'Staffing, machines, reporting and maintenance handled end-to-end.',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Sustainable Laundry Care',
    subtitle: 'Efficient wash technology',
    description:
      'Optimized commercial cycles help reduce water and energy consumption.',
  },
  {
    id: 4,
    icon: Clock3,
    title: 'Dependable Turnaround',
    subtitle: 'Fast and reliable service',
    description:
      'Predictable service standards keep every student routine moving.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#F8FAFC] px-4 py-20 font-sans sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#031738] px-3.5 py-1.5 text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-xs font-medium tracking-wide">About Taerg</span>
          </div>

          <h2 className="section-topic mt-5 text-[#031738]">
            Built on Trust, Driven by Innovation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-500 md:text-base">
            Taerg combines dependable campus operations, commercial laundry
            technology and student-focused service into one managed experience.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {aboutCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                className="relative min-h-[230px] overflow-hidden rounded-2xl border border-[#173C78]/35 bg-[#031738] p-6 shadow-[0_18px_40px_-28px_rgba(3,23,56,0.75)] sm:p-7"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-5 select-none text-[7.5rem] font-bold leading-none text-white/[0.035]"
                  aria-hidden="true"
                >
                  {String(card.id).padStart(2, '0')}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex h-12 w-12 self-center items-center justify-center rounded-xl bg-white text-[#031738] shadow-sm">
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div className="mt-auto pt-8 text-left text-white">
                    <h3 className="text-xl font-semibold leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-blue-200">
                      {card.subtitle}
                    </p>
                    <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
