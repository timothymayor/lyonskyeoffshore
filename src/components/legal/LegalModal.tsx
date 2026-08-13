import React from 'react';
import { Modal } from '../ui/Modal';
import { companyData } from '../../data/company';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

  return (
    <Modal
      isOpen={type !== null}
      onClose={onClose}
      title={title}
      subtitle={`LYONSKYE OFFSHORE MARINE LTD. — LEGAL GOVERNANCE`}
      maxWidth="4xl"
    >
      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#A9B3BE] space-y-4">
        {isPrivacy ? (
          <>
            <p>
              <strong className="text-white">Effective Date:</strong> August 2026. {companyData.name} ("Lyonskye") respects your operational privacy and is committed to protecting data collected during commercial vessel enquiries and marine service engagements.
            </p>
            <h4 className="text-sm font-bold text-white uppercase mt-4">1. Information Collection</h4>
            <p>
              We collect contact information, company affiliation, vessel registration data, port call requirements, and communications submitted through our enquiry form solely for providing maritime, crewing, chandling, and logistics operations.
            </p>
            <h4 className="text-sm font-bold text-white uppercase mt-4">2. Use of Information</h4>
            <p>
              Submitted information is used strictly to evaluate commercial scope, process port agency formalities with NIMASA and Nigerian Port Authority (NPA), manage crew deployments under STCW/MLC standards, and communicate operational updates.
            </p>
            <h4 className="text-sm font-bold text-white uppercase mt-4">3. Data Security & Non-Disclosure</h4>
            <p>
              We enforce administrative and technical controls to safeguard corporate information. Commercial enquiry data is never sold or shared with unauthorized third parties outside statutory maritime regulatory mandates.
            </p>
          </>
        ) : (
          <>
            <p>
              <strong className="text-white">Terms of Use:</strong> By accessing and utilizing the corporate platform of {companyData.name}, you agree to the following terms and conditions governing maritime services and enquiries.
            </p>
            <h4 className="text-sm font-bold text-white uppercase mt-4">1. Commercial Representation</h4>
            <p>
              All service offerings, tonnage charter listings, and port call quotations are subject to formal contract execution, BIMCO charter terms where applicable, and regulatory approval.
            </p>
            <h4 className="text-sm font-bold text-white uppercase mt-4">2. Regulatory Compliance</h4>
            <p>
              Clients engaging Lyonskye for shipping agency, manning, or offshore support must adhere to relevant Nigerian maritime laws, NIMASA safety regulations, Cabotage guidelines, and international maritime conventions.
            </p>
            <h4 className="text-sm font-bold text-white uppercase mt-4">3. Intellectual Property</h4>
            <p>
              The Lyonskye brand identity, logo crest, horizon graphics, and web content are protected assets of {companyData.name}.
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};
