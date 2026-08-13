import React from 'react';
import { ChevronRight, Anchor } from 'lucide-react';
import { Button } from '../ui/Button';
import { LyonskyeHorizon } from '../ui/LyonskyeHorizon';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  onRequestQuote: () => void;
  variant?: 'amber' | 'navy';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Marine Support When You Need It",
  subtitle = "Talk to our operations team about your next vessel, port call, offshore or logistics requirement across Nigeria and the Gulf of Guinea.",
  primaryCtaText = "Request a Quote",
  onRequestQuote,
  variant = 'navy'
}) => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#163A63] border-t border-b border-[#23557F] overflow-hidden">
      <div className="absolute inset-0 bg-marine-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#0E213E] border border-[#23557F] text-[#D99A27] mb-6">
          <Anchor className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#DFE5EA] leading-relaxed mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onRequestQuote}
            icon={<ChevronRight className="w-5 h-5" />}
          >
            {primaryCtaText}
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <LyonskyeHorizon variant="subtle" />
      </div>
    </section>
  );
};
