import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { LyonskyeLogo } from '../ui/LyonskyeLogo';
import { LyonskyeHorizon } from '../ui/LyonskyeHorizon';
import { companyData } from '../../data/company';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects & Capabilities', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const serviceLinks = [
    { label: 'Shipping Agency', href: '#services' },
    { label: 'Manning / Crew Supply', href: '#services' },
    { label: 'Ship Chandling', href: '#services' },
    { label: 'Marine Logistics', href: '#services' },
    { label: 'Maritime Support', href: '#services' },
    { label: 'Vessel Chartering', href: '#services' }
  ];

  return (
    <footer className="bg-[#0A182E] text-[#A9B3BE] border-t border-[#23557F] relative overflow-hidden font-sans">
      <div className="pt-4">
        <LyonskyeHorizon variant="subtle" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <LyonskyeLogo size="lg" />
            <p className="text-xs sm:text-sm text-[#A9B3BE] leading-relaxed">
              {companyData.description}
            </p>
            <div className="p-3.5 rounded bg-[#0E213E] border border-[#23557F] inline-flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D99A27] shrink-0" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                NIMASA CERTIFIED MARITIME OPERATOR
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-[#23557F]/60 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#D99A27] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-[#23557F]/60 pb-2">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#D99A27] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-[#23557F]/60 pb-2">
              CONTACT DESK
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D99A27] shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D99A27] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D99A27] shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors">
                  {companyData.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Copyright */}
        <div className="pt-8 border-t border-[#23557F]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left space-y-1">
            <p>
              &copy; {currentYear} <strong className="text-white">{companyData.name}</strong>. All Rights Reserved.
            </p>
            <p className="text-[11px] text-[#717D8D]">
              Certified Nigerian Maritime Administration and Safety Agency (NIMASA) Company.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#0E213E] border border-[#23557F] text-[#D99A27] hover:bg-[#D99A27] hover:text-[#0E213E] transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
