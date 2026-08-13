import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import { LyonskyeLogo } from '../ui/LyonskyeLogo';
import { Button } from '../ui/Button';
import { companyData } from '../../data/company';

interface NavbarProps {
  onRequestQuote: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Corporate Bar */}
      <div className={`hidden md:block transition-all duration-300 border-b ${isScrolled ? 'bg-[#0E213E]/95 border-[#23557F]/40 py-1.5' : 'bg-[#0E213E]/80 backdrop-blur-sm border-white/10 py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-sans text-[#A9B3BE]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#D99A27] font-semibold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              NIMASA CERTIFIED MARITIME OPERATOR
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline">{companyData.operatingLocation}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#D99A27]" />
              {companyData.email}
            </a>
            <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D99A27]" />
              {companyData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E213E]/95 backdrop-blur-md shadow-xl border-b border-[#23557F]/60 py-3'
            : 'bg-gradient-to-b from-[#0E213E]/90 to-transparent py-4 sm:py-5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A27] rounded-md"
          >
            <LyonskyeLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label.toLowerCase().replace(' ', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative font-sans text-xs tracking-[0.18em] font-semibold uppercase transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#D99A27]' : 'text-slate-200 hover:text-[#D99A27]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D99A27] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={onRequestQuote}
              icon={<ChevronRight className="w-4 h-4" />}
            >
              REQUEST A QUOTE
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={onRequestQuote}
              className="text-[10px] px-3 py-1.5 min-h-[36px]"
            >
              QUOTE
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-white hover:bg-[#163A63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A27]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D99A27]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0E213E] border-b border-[#23557F] px-4 pt-4 pb-6 mt-3 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-[#D99A27] py-2 border-b border-[#163A63]/60 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#717D8D]" />
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                >
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
