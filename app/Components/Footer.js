'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLenis } from 'lenis/react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Our Partners', href: '#partners' },
  { label: 'About Taerg', href: '/about' },
  { label: 'Campus Benefits', href: '#campus-benefits' },
  { label: 'Testimonials', href: '#testimonials' },
];

const solutions = [
  { label: 'Campus Laundry Service', href: '/about' },
  { label: 'Commercial Laundry Machines', href: '#partners' },
  { label: 'Setup & Installation', href: '#campus-benefits' },
  { label: 'Service & Maintenance', href: '#campus-benefits' },
];

const company = [
  { label: 'About us', href: '/about' },
  { label: 'Our Partners', href: '#partners' },
  { label: 'Careers', href: '#' },
  { label: 'Privacy policy', href: '#' },
  { label: 'Terms of service', href: '#' },
];

const socials = [
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'LinkedIn', href: '#', Icon: FaLinkedinIn },
  { label: 'YouTube', href: '#', Icon: FaYoutube },
];

const trustStats = [
  { value: '1000+', label: 'Happy Students' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '24H', label: 'On-Time Delivery' },
];

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#020F26] font-sans text-white scroll-mt-28">
      {/* Ambient dot-grid + glow, matching the dark sections elsewhere on the page */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#1c4ea0]/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#0b3475]/30 blur-[120px]" />

      {/* 1. Call to Action Card */}
      <div className="relative z-10 px-5 pb-8 pt-10 sm:px-8 lg:px-12">
        <ScrollReveal
          direction="scale"
          rootMargin="0px"
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center shadow-[0_30px_80px_-20px_rgba(1,12,35,0.9)] backdrop-blur-xl sm:px-8 md:px-10 md:py-10"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#FFDE6A]" />
              Let&apos;s Get Started
            </div>

            <h2 className="section-topic mx-auto max-w-2xl text-white">
              Ready to Transform Your Campus Laundry?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-300 md:text-base">
              From campus laundry services to commercial equipment, installation &amp; maintenance — we deliver end-to-end solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="action-ripple action-ripple--call gap-2 px-6 py-2.5 text-sm font-semibold shadow-md"
              >
                <Phone size={16} />
                Call us now
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="action-ripple action-ripple--whatsapp gap-2 px-6 py-2.5 text-sm font-semibold shadow-md"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust stat strip */}
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-bold tracking-tight text-white sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[10px] font-light tracking-wide text-gray-400 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-10 lg:px-12">
        {/* Large faded background watermark */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex select-none justify-center overflow-hidden text-center opacity-[0.05]">
          <span className="block translate-y-10 whitespace-nowrap text-[140px] font-black leading-none tracking-normal text-white sm:text-[180px] md:text-[220px] lg:text-[250px]">
            Taerg
          </span>
        </div>

        {/* Link columns: compact 2-up grid on mobile/tablet, evenly spread row on lg */}
        <ScrollReveal
          direction="up"
          rootMargin="0px"
          className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:items-start lg:justify-between lg:gap-x-8 lg:gap-y-0"
        >
          <div>
            <FooterColumn title="Quick Links" links={quickLinks} />
          </div>
          <div>
            <FooterColumn title="Solutions" links={solutions} />
          </div>
          <div>
            <FooterColumn title="Company" links={company} />
          </div>
          <div className="min-w-0">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white">
              Social Links
            </h3>
            <div className="flex flex-wrap items-center gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFDE6A]/50 hover:bg-[#FFDE6A]/10 hover:text-[#FFDE6A]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Contact cards + map */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <ScrollReveal direction="left" rootMargin="0px" className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            <ContactCard icon={Phone} label="Call us" value="+91 XXXXX XXXXX" href="tel:+91XXXXXXXXXX" />
            <ContactCard icon={Mail} label="Email us" value="info@taergknowledgelabs.com" href="mailto:info@taergknowledgelabs.com" />
            <ContactCard icon={MapPin} label="Visit us" value="Coimbatore, Tamil Nadu" />
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={100}
            rootMargin="0px"
            className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b2145] shadow-lg lg:col-span-7"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3473130985223!2d76.9558321!3d11.0123859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taerg Laundry Interactive Location Map"
              className="block h-full w-full border-0"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 px-6 py-5 lg:px-12">
        <ScrollReveal
          direction="up"
          rootMargin="0px"
          className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 text-center text-[11px] tracking-wider text-gray-400 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6"
        >
          <div className="flex items-center md:justify-self-start">
            <Image
              src="/images/logofooter.png"
              alt="TaerG Campus Laundry Logo"
              width={174}
              height={56}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </div>

          <p className="font-normal uppercase md:justify-self-center">
            2026 Taerg Campus Laundry. All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:justify-self-end">
            <Link
              href="#"
              className="normal-case tracking-normal text-gray-400 transition-colors hover:text-white"
              aria-label="Designed and Developed by Wexoraa Infotech"
            >
              Designed and Developed by{' '}
              <span className="font-semibold text-white">Wexoraa Infotech</span>
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFDE6A]/60 hover:text-[#FFDE6A]"
            >
              <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white">
        {title}
      </h3>
      <ul className="space-y-4 text-xs font-light text-gray-400 md:text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFDE6A] transition-transform duration-300 group-hover:scale-105">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500">{label}</p>
        <p className="truncate text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
