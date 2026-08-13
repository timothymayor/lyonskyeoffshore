import React from 'react';
import { Shield, Anchor, Users, CheckCircle2, Clock, Award, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { companyData, companyValues } from '../../data/company';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    'Operational reliability across all port calls',
    'Full NIMASA & NPA regulatory compliance',
    'Uncompromising HSE & maritime safety standards',
    '24/7 client responsiveness & operational liaisons',
    'Technical capability & crew competence audits',
    'Cost-efficient, timely maritime execution'
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0E213E] relative overflow-hidden">
      {/* Background Secondary Visual Layers */}
      <div className="absolute inset-0 bg-marine-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#163A63]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="NIMASA CERTIFIED CORPORATE PROFILE"
          title="About Lyonskye Offshore Marine Ltd."
          subtitle="Engineering confidence offshore with certified Nigerian maritime capability and international operational standards."
        />

        {/* Split Layout: Corporate Narrative vs Large Maritime Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="font-sans text-base sm:text-lg text-[#DFE5EA] leading-relaxed">
                <strong className="text-white font-semibold">{companyData.name}</strong> is a Nigerian maritime company providing professional marine, shipping, logistics and offshore support solutions to vessel owners, operators, energy companies and marine stakeholders.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#A9B3BE] leading-relaxed">
                Operating with certification from the Nigerian Maritime Administration and Safety Agency (NIMASA), Lyonskye delivers integrated solutions designed for the rigorous demands of coastal, port, and offshore environments across Nigeria and the Gulf of Guinea.
              </p>
            </div>

            {/* Focus Checklist */}
            <div className="pt-4 border-t border-[#23557F]/60">
              <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D99A27] mb-4">
                OUR OPERATIONAL FOCUS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <span className="p-1 rounded bg-[#163A63] text-[#D99A27] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-[#DFE5EA] font-medium">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Large Offshore Vessel Frame with Technical Layer */}
          <div className="lg:col-span-5 relative">
            {/* Secondary Visual Technical Geometry */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D99A27]/40 rounded-lg pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#23557F] rounded-lg pointer-events-none" />

            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#23557F] group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                alt="Lyonskye Offshore Marine Operations Vessel"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E213E] via-transparent to-transparent opacity-80" />

              {/* Technical Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0E213E]/90 border border-[#23557F] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#D99A27] text-[#0E213E] font-bold shrink-0">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                      OPERATIONAL READINESS
                    </h5>
                    <p className="text-[11px] text-[#A9B3BE]">
                      NIMASA & NPA Compliant Port & Offshore Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values System */}
        <div className="pt-8 border-t border-[#23557F]/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#D99A27]">
              OUR GUIDING PRINCIPLES
            </span>
            <h3 className="font-serif text-3xl font-bold text-white mt-2">
              The Naval Engineering Standard
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#163A63]/40 border border-[#23557F]/80 hover:border-[#D99A27]/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded bg-[#0E213E] text-[#D99A27] border border-[#23557F] group-hover:bg-[#D99A27] group-hover:text-[#0E213E] transition-colors">
                    {idx === 0 && <Shield className="w-5 h-5" />}
                    {idx === 1 && <Anchor className="w-5 h-5" />}
                    {idx === 2 && <Users className="w-5 h-5" />}
                    {idx === 3 && <CheckCircle2 className="w-5 h-5" />}
                    {idx === 4 && <Clock className="w-5 h-5" />}
                    {idx === 5 && <Award className="w-5 h-5" />}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#717D8D] group-hover:text-[#D99A27] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {val.title}
                </h4>
                <p className="text-[11px] text-[#D99A27] font-medium tracking-wide mb-3">
                  {val.subtitle}
                </p>
                <p className="text-xs text-[#A9B3BE] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
