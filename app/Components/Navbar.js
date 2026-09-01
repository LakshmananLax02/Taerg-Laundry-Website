'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/#campus-solutions' },
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/#success-stories' },
    { name: 'Blogs', href: '/#insights' },
  ];

  // Subtle elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-[padding] duration-500 ${
        isScrolled ? 'px-3 pt-3 sm:px-6' : 'p-0'
      }`}
    >
      <div
        className={`pointer-events-auto transition-all duration-500 ${
          isScrolled
            ? 'max-w-7xl mx-auto rounded-xl bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-xl py-2.5 px-4 sm:px-6'
            : 'w-full rounded-none bg-white border-b border-gray-100 shadow-none py-4 px-5 sm:px-8 lg:px-12'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (Left Side) */}
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
            aria-label="TaerG Campus Laundry home"
          >
            <Image
              src="/images/logo.png"
              alt="TaerG Campus Laundry"
              width={174}
              height={56}
              className="h-10 w-auto object-contain sm:h-11 md:h-12"
              priority
            />
          </Link>

          {/* Centered Desktop Links */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-5 lg:mx-8">
            <nav className="flex items-center gap-6 lg:gap-9">
              {navLinks.map((link) => {
                const isActive =
                  pathname === '/about'
                    ? link.name === 'About Taerg'
                    : activeTab === link.name;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveTab(link.name)}
                    className={`relative py-2 text-sm lg:text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      isActive
                        ? 'text-[#0B2545]'
                        : 'text-slate-600 hover:text-[#0B2545]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#0B2545] transition-transform duration-200 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Action Button or Spacer */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              className="action-ripple action-ripple--contact px-5 py-2.5 text-xs font-semibold shadow-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Toggle (ONLY VISIBLE ON MOBILE) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#0B2545] hover:bg-gray-100 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2545]"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-end relative">
                <span
                  className={`h-[2px] bg-[#0B2545] rounded-full transition-all duration-300 origin-right ${
                    isMobileMenuOpen ? 'w-5 -rotate-45 translate-y-[1px]' : 'w-5'
                  }`}
                ></span>
                <span
                  className={`h-[2px] bg-[#0B2545] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 w-0' : 'w-3.5'
                  }`}
                ></span>
                <span
                  className={`h-[2px] bg-[#0B2545] rounded-full transition-all duration-300 origin-right ${
                    isMobileMenuOpen ? 'w-5 rotate-45 -translate-y-[1px]' : 'w-4'
                  }`}
                ></span>
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Slide-Down Menu Drawer */}
        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-gray-200' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col pb-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === '/about'
                  ? link.name === 'About Taerg'
                  : activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`border-l-2 px-4 py-3 text-[15px] font-semibold transition-colors ${
                    isActive
                      ? 'border-[#0B2545] bg-slate-100 text-[#0B2545]'
                      : 'border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0B2545]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="action-ripple action-ripple--contact mt-4 px-4 py-3 text-center text-sm font-semibold"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
