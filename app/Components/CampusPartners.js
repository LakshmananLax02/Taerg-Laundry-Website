import Image from 'next/image';
import { ShieldCheck, Users, Clock, CheckCircle2 } from 'lucide-react';

const institutions = [
  {
    name: "KCE",
    fullName: "Kathir college of engineering",
    location: "Coimbatore, Tamil Nadu",
    logo: "/images/camkceimg.png",
  },
  {
    name: "SSEC",
    fullName: "Kathir college of engineering",
    location: "Coimbatore, Tamil Nadu",
    logo: "/images/camssecimg1.png",
  },
  {
    name: "JCT",
    fullName: "Kathir college of engineering",
    location: "Coimbatore, Tamil Nadu",
    logo: "/images/camjctimg1.png", 
  },
  {
    name: "SVEC",
    fullName: "Kathir college of engineering",
    location: "Coimbatore, Tamil Nadu",
    logo: "/images/camsvceimg1.png", 
  },
];

const features = [
  {
    title: "Reliable & Trusted",
    description: "Quality you can count on.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Team",
    description: "Skilled professionals at your service.",
    icon: Users,
  },
  {
    title: "On-Time Support",
    description: "Quick response and on-time solutions.",
    icon: Clock,
  },
  {
    title: "End-to-End Solutions",
    description: "From setup to support, we've got you covered.",
    icon: CheckCircle2,
  },
];

export default function CampusPartners() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0a1b3d] text-white px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Our Campus Partners
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Trusted by Leading Educational Institutions
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Partnering with forward-thinking campuses to deliver world-class laundry infrastructure and student experiences.
            </p>
          </div>

          {/* Right Column: 4 Institution Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {institutions.map((item, index) => (
              <div 
                key={index} 
                className="campus-partner-card group flex items-center gap-5 rounded-2xl border border-[#0a1b3d]/30 p-6 shadow-sm"
              >
                <span className="campus-card-fold" aria-hidden="true" />
                <span className="campus-card-points" aria-hidden="true">
                  {Array.from({ length: 10 }, (_, pointIndex) => (
                    <span
                      key={pointIndex}
                      className="campus-card-point"
                      style={{
                        '--point-left': `${8 + pointIndex * 9}%`,
                        '--point-duration': `${1.7 + (pointIndex % 4) * 0.25}s`,
                        '--point-delay': `${(pointIndex % 5) * 0.18}s`,
                      }}
                    />
                  ))}
                </span>

                {/* Institution Image */}
                <div className="relative z-10 h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={`${item.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Institution Details */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#0a1b3d] transition-colors duration-300 group-hover:text-white">{item.name}</h3>
                  <p className="text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:text-blue-100">{item.fullName}</p>
                  <p className="mt-0.5 text-[11px] text-gray-400 transition-colors duration-300 group-hover:text-blue-200">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner Bar */}
        <div className="bg-[#04122d] rounded-2xl py-8 px-6 lg:px-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-900/50">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={`flex items-center gap-4 ${index !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                  <div className="w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-white">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">{feature.title}</h4>
                    <p className="text-xs text-gray-300 mt-0.5">{feature.description}</p>
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
