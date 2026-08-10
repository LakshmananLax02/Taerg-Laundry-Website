'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#031738] text-white pb-0 overflow-hidden font-sans scroll-mt-28">
      
      {/* 1. Call to Action Card */}
      <div className="bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_48%,#031738_48%,#031738_100%)] px-5 pb-10 pt-6 sm:px-8 lg:px-12">
        <div className="relative z-20 mx-auto max-w-6xl rounded-sm border-2 border-white/90 bg-[#1B3673] px-6 py-7 text-center shadow-2xl sm:px-8 md:px-12 md:py-9">
          <h2 className="mx-auto mb-3 max-w-2xl text-2xl font-normal leading-tight tracking-wide text-white md:text-4xl">
            Ready to Transform Your Campus Laundry?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-xs font-light leading-relaxed text-gray-200 md:text-sm">
            From campus laundry services to commercial equipment, installation & maintenance, we deliver end-to-end solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="action-ripple action-ripple--call gap-2 px-5 py-2 text-xs font-semibold shadow-sm"
            >
              <Phone size={15} />
              Call us now
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="action-ripple action-ripple--whatsapp gap-2 px-5 py-2 text-xs font-semibold shadow-sm"
            >
              <FaWhatsapp size={17} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid Section Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 z-10">
        
        {/* Large Faded Background Watermark Text "TaerG" */}
        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-0 flex select-none justify-center overflow-hidden text-center opacity-[0.07]">
          <span className="block translate-y-10 whitespace-nowrap text-[140px] font-black leading-none tracking-normal text-white sm:text-[180px] md:text-[220px] lg:text-[250px]">
            Taerg
          </span>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 relative z-10 items-start">
          
          {/* Quick Links */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
              QUICK LINKS
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-gray-300 font-light">
              <li><Link href="#partners" className="hover:text-white transition-colors">Our Partners</Link></li>
              <li><Link href="#experience" className="hover:text-white transition-colors">Campus Experience</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#insights" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="min-w-0 lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
              SOLUTIONS
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-gray-300 font-light">
              <li><Link href="#laundry-service" className="hover:text-white transition-colors">Campus Laundry Service</Link></li>
              <li><Link href="#commercial-machines" className="hover:text-white transition-colors">Commercial Laundry Machines</Link></li>
              <li><Link href="#installation" className="hover:text-white transition-colors">Laundry Setup & Installation</Link></li>
              <li><Link href="#maintenance" className="hover:text-white transition-colors">Machine Service & Maintenance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
              COMPANY
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-gray-300 font-light">
              <li><Link href="#about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="#partners" className="hover:text-white transition-colors">Our Partners</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#privacy" className="hover:text-white transition-colors">Privacy policy</Link></li>
              <li><Link href="#terms" className="hover:text-white transition-colors">Terms of service</Link></li>
              <li><Link href="#security" className="hover:text-white transition-colors">Technical Security</Link></li>
            </ul>
          </div>

          {/* Contact Info & Social Icons */}
          <div className="min-w-0 space-y-4 lg:col-span-2">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
              CONTACT
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
              Coimbatore, Tamil Nadu<br />
              info@taergknowledgelabs.com<br />
              +91 XXXXX XXXXX
            </p>

            {/* Social Media Yellow Badges */}
            <div className="flex items-center gap-2 pt-2">
              {/* Facebook */}
              <a href="#" className="w-7 h-7 bg-[#FFDE6A] text-[#031738] rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-7 h-7 bg-[#FFDE6A] text-[#031738] rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-7 h-7 bg-[#FFDE6A] text-[#031738] rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.261-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-7 h-7 bg-[#FFDE6A] text-[#031738] rounded-sm flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              {/* Google */}
              <a href="#" className="w-7 h-7 bg-[#FFDE6A] text-[#031738] rounded-sm flex items-center justify-center font-bold text-xs hover:opacity-90 transition-opacity">
                G
              </a>
            </div>

            <a
              href="tel:+91XXXXXXXXXX"
              className="action-ripple action-ripple--call mt-3 gap-2 px-5 py-2.5 text-xs font-semibold shadow-sm"
            >
              <Phone size={14} />
              Call us now
            </a>
          </div>

          {/* Interactive Zoomable Map Widget */}
          <div className="min-w-0 overflow-hidden rounded-xl border border-white/20 h-64 lg:h-72 shadow-lg w-full relative z-10 lg:col-span-3 bg-[#0b2145]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3473130985223!2d76.9558321!3d11.0123859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taerg Laundry Interactive Location Map"
              className="block w-full h-full border-0"
            ></iframe>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-[#020F26] border-t border-white/10 py-6 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] tracking-wider text-gray-300">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logofooter.png"
              alt="TaerG Campus Laundry Logo"
              width={174}
              height={56}
              className="h-11 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Copyright Text */}
          <p className="text-center font-normal uppercase">
            2026 TAERG CAMPUS LAUNDRY. ALL RIGHTS RESERVED.
          </p>

          {/* Development Credit — replace the placeholder URL when available. */}
          <Link
            href="#"
            className="text-center normal-case tracking-normal text-gray-300 transition-colors hover:text-white md:text-right"
            aria-label="Designed and Developed by Wexoraa Infotech"
          >
            Designed and Developed by{' '}
            <span className="font-semibold text-[#FFDE6A]">Wexoraa Infotech</span>
          </Link>
        </div>
      </div>

    </footer>
  );
}
