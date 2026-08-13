import React, { useState } from 'react';
import {
  Navigation,
  Users,
  Package,
  Ship,
  Shield,
  Compass,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { servicesData } from '../../data/services';
import { Service } from '../../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestQuoteForService
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Navigation': return <Navigation className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Package': return <Package className="w-6 h-6" />;
      case 'Ship': return <Ship className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      default: return <Ship className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0E213E] relative overflow-hidden">
      {/* Subtle Background Accent Grid */}
      <div className="absolute inset-0 bg-marine-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CORE MARITIME CAPABILITIES"
          title="Integrated Marine & Offshore Services"
          subtitle="Tailored to the demanding requirements of shipowners, offshore operators, energy companies, and marine stakeholders across Nigerian ports and deepwater terminals."
        />

        {/* 6-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer rounded-lg bg-[#163A63]/30 border border-[#23557F]/80 hover:border-[#D99A27] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-[#163A63]/50 hover:-translate-y-1.5"
            >
              <div>
                {/* Card Top Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E213E] via-[#0E213E]/60 to-transparent" />

                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0E213E]/90 border border-[#D99A27]/60 text-[#D99A27] font-serif text-lg font-bold backdrop-blur-sm">
                    {service.serviceNumber}
                  </div>

                  {/* Service Icon Badge */}
                  <div className="absolute top-4 right-4 p-2.5 rounded bg-[#163A63]/90 border border-[#23557F] text-white group-hover:bg-[#D99A27] group-hover:text-[#0E213E] transition-colors shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D99A27] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#A9B3BE] leading-relaxed line-clamp-3 mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Supporting feature tags (first 3) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-[#0E213E] text-[#717D8D] border border-[#23557F]/60"
                      >
                        {feat}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-[#0E213E] text-[#D99A27]">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Interaction */}
              <div className="px-6 pb-6 pt-0 border-t border-[#23557F]/40 flex items-center justify-between text-xs font-sans font-bold tracking-wider uppercase text-[#D99A27] group-hover:text-white transition-colors">
                <span>LEARN MORE & SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        onRequestQuoteForService={onRequestQuoteForService}
      />
    </section>
  );
};
