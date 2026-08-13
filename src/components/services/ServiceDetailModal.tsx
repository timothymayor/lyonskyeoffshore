import React from 'react';
import {
  Navigation,
  Users,
  Package,
  Ship,
  Shield,
  Compass,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Service } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onRequestQuoteForService
}) => {
  if (!service) return null;

  const renderIcon = (iconName: string) => {
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.title}
      subtitle={`SERVICE CATEGORY ${service.serviceNumber} — LYONSKYE OFFSHORE MARINE`}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Service Hero Image & Overview */}
        <div className="relative rounded-lg overflow-hidden border border-[#23557F] h-48 sm:h-64">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E213E] via-[#0E213E]/60 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <Badge variant="amber" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              {service.regulatoryAlignment}
            </Badge>
            <span className="font-serif text-3xl font-bold text-white/30">
              SERVICE {service.serviceNumber}
            </span>
          </div>
        </div>

        {/* Detailed Description */}
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D99A27] mb-2">
            OPERATIONAL SCOPE & CAPABILITY
          </h4>
          <p className="text-sm sm:text-base text-[#DFE5EA] leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Key Features & Deliverables Checklist */}
        <div className="p-5 rounded-lg bg-[#163A63]/30 border border-[#23557F]">
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
            SUPPORTING SERVICE FEATURES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D99A27] shrink-0" />
                <span className="text-xs sm:text-sm text-[#A9B3BE] font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Highlights & Target Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded bg-[#0E213E] border border-[#23557F]/80">
            <h5 className="text-xs font-bold text-[#D99A27] uppercase tracking-wider mb-2">
              KEY HIGHLIGHTS
            </h5>
            <ul className="space-y-2 text-xs text-[#A9B3BE]">
              {service.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99A27] mt-1 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded bg-[#0E213E] border border-[#23557F]/80">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#D99A27]" />
              TARGET CLIENT STAKEHOLDERS
            </h5>
            <ul className="space-y-2 text-xs text-[#A9B3BE]">
              {service.targetClients.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#717D8D] mt-1 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#23557F]/60 flex flex-col sm:flex-row justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onClose();
              onRequestQuoteForService(service.title);
            }}
            icon={<ChevronRight className="w-4 h-4" />}
          >
            Request Quote for {service.title}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
