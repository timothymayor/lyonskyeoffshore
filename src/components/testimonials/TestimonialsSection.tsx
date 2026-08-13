import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData, testimonialNoticeText } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0E213E] relative overflow-hidden">
      <div className="absolute inset-0 bg-marine-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CLIENT CONFIDENCE & GOVERNANCE"
          title="Client Endorsements & Feedback"
          subtitle="Building long-term commercial relationships through accountability, safety compliance, and operational excellence."
        />

        {/* Authorization Placeholder Banner (Section 21 Requirement) */}
        <div className="mb-12 p-4 sm:p-5 rounded-lg bg-[#163A63]/40 border border-[#23557F] flex items-center gap-3 max-w-3xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-[#D99A27] shrink-0" />
          <p className="text-xs sm:text-sm font-sans text-[#A9B3BE]">
            <strong className="text-white font-semibold">Governance Protocol: </strong>
            {testimonialNoticeText}
          </p>
        </div>

        {/* Data-driven Testimonial Carousel */}
        <div className="max-w-4xl mx-auto bg-[#163A63]/30 border border-[#23557F] rounded-xl p-8 sm:p-12 relative shadow-2xl backdrop-blur-md">
          <Quote className="w-12 h-12 text-[#D99A27]/20 absolute top-6 left-6 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white italic leading-relaxed">
              "{current.quote}"
            </p>

            <div className="pt-6 border-t border-[#23557F]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">
                  {current.name}
                </h4>
                <p className="text-xs text-[#D99A27] font-medium mt-0.5">
                  {current.position}
                </p>
                <p className="text-xs text-[#717D8D] font-medium mt-0.5">
                  {current.company}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-[#0E213E] border border-[#23557F] text-white hover:text-[#D99A27] hover:border-[#D99A27] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A27]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-[#717D8D] px-2 font-semibold">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-[#0E213E] border border-[#23557F] text-white hover:text-[#D99A27] hover:border-[#D99A27] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A27]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
