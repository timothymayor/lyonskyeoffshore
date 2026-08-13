import React from 'react';
import { ChevronRight, Anchor, ShieldCheck, Compass, Clock, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { LyonskyeHorizon } from '../ui/LyonskyeHorizon';
import { trustIndicators, companyData } from '../../data/company';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestQuote,
  onExploreServices
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#0E213E]">
      {/* Background Image Layer with Dark Navy Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=85"
          alt="Offshore Supply Vessel and Marine Operations"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Navy Overlay with High Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E213E] via-[#0E213E]/90 to-[#0E213E]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E213E] via-transparent to-[#0E213E]/70" />
        <div className="absolute inset-0 bg-marine-grid opacity-30" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 my-auto">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#163A63]/80 border border-[#23557F] text-xs font-sans font-semibold text-[#D99A27] tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D99A27] animate-pulse" />
            <span>NIMASA CERTIFIED MARITIME OPERATOR</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            Reliable Marine & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D99A27]">
              Offshore Solutions
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#DFE5EA]/90 leading-relaxed mb-8 max-w-2xl">
            {companyData.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={onRequestQuote}
              icon={<ChevronRight className="w-5 h-5" />}
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onExploreServices}
              icon={<Compass className="w-5 h-5 text-[#D99A27]" />}
              iconPosition="left"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Primary Brand Statement Accent Banner */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#163A63]/60 border-l-4 border-[#D99A27] backdrop-blur-md max-w-2xl">
            <p className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
              {companyData.primaryBrandStatement}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#A9B3BE] font-medium tracking-wide mt-0.5">
              {companyData.supportingMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Signature Lyonskye Horizon Wave Graphic */}
      <div className="relative z-10 my-4">
        <LyonskyeHorizon variant="accent" />
      </div>

      {/* Hero Compact Trust Indicators Bar */}
      <div className="relative z-10 bg-[#0E213E]/95 border-t border-b border-[#23557F]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-3 p-2 group">
                <div className="p-2.5 rounded bg-[#163A63] border border-[#23557F] text-[#D99A27] group-hover:border-[#D99A27] transition-colors shrink-0">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Anchor className="w-5 h-5" />}
                  {idx === 2 && <Award className="w-5 h-5" />}
                  {idx === 3 && <Clock className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
                    {indicator.label}
                  </h4>
                  <p className="text-[11px] font-sans text-[#A9B3BE] mt-0.5">
                    {indicator.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
