import { Service } from '../types';

export const servicesData: Service[] = [
  {
    slug: 'shipping-agency',
    serviceNumber: '01',
    title: 'Shipping Agency',
    shortDescription: 'Comprehensive port call management, pre-arrival planning, berth coordination, and regulatory clearance across all major Nigerian ports.',
    fullDescription: 'As your trusted local and international shipping agent, we manage every aspect of vessel port calls, from pre-arrival planning and berth coordination to customs clearance, immigration formalities, and cargo documentation. Our experienced team liaises directly with port authorities, terminals, and regulatory bodies to ensure fast turnaround, full compliance, and cost-efficient operations for every port call.',
    iconName: 'Navigation',
    features: [
      'Port Call Management',
      'Pre-Arrival Planning',
      'Berth Coordination',
      'Port Authority Liaison',
      'Customs Clearance',
      'Immigration Formalities',
      'Cargo Documentation',
      'Regulatory Coordination'
    ],
    highlights: [
      'Fast turnaround time minimization',
      'Direct NPA & NIMASA regulatory liaison',
      '24/7 port ops monitoring in Lagos, Port Harcourt, & Warri'
    ],
    targetClients: [
      'Shipowners & Charterers',
      'Vessel Operators',
      'International Shipping Lines',
      'Offshore Fleet Managers'
    ],
    regulatoryAlignment: 'NIMASA Port Operations & NPA Compliance Certified',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'manning-crew-supply',
    serviceNumber: '02',
    title: 'Manning / Crew Supply',
    shortDescription: 'STCW & MLC 2006 compliant marine crew recruitment, certification verification, medical fitness, and seamless onboard deployment.',
    fullDescription: 'We provide reliable, fully certified crew solutions for vessels across all trades. Our manning services cover recruitment, screening, medical fitness verification, and deployment of officers, ratings, and specialized personnel, all in strict adherence to STCW and MLC 2006 requirements. We take pride in matching the right talent to your operational needs, ensuring safety, competence, and continuity onboard.',
    iconName: 'Users',
    features: [
      'Crew Recruitment',
      'Crew Screening',
      'Certification Verification',
      'Medical Fitness Verification',
      'Officer Supply',
      'Rating Supply',
      'Specialized Crew',
      'Crew Deployment',
      'STCW Compliance',
      'MLC 2006 Alignment'
    ],
    highlights: [
      '100% verified STCW certification audit',
      'Officers and ratings for offshore supply & tanker vessels',
      'Continuous crew welfare and rotation oversight'
    ],
    targetClients: [
      'Offshore Vessel Operators',
      'Merchant Fleet Owners',
      'Subsea & Construction Contractors'
    ],
    regulatoryAlignment: 'STCW 2010 Convention & MLC 2006 Standard Compliant',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'ship-chandling',
    serviceNumber: '03',
    title: 'General Ship Chandling',
    shortDescription: 'Fresh provisions, bonded stores, deck & engine spares, safety gear, and technical supplies delivered directly to berth or anchorage.',
    fullDescription: 'Our ship chandling services ensure vessels are fully provisioned and equipped, wherever they call. We supply fresh provisions, bonded stores, deck and engine spares, safety gear, and technical equipment through a trusted supplier network. With a focus on quality, punctuality, and competitive pricing, we help minimize port delays and keep your vessel operation-ready.',
    iconName: 'Package',
    features: [
      'Fresh Provisions',
      'Bonded Stores',
      'Deck Stores',
      'Engine Stores',
      'Spare Parts',
      'Safety Equipment',
      'Technical Supplies',
      'Vessel Replenishment'
    ],
    highlights: [
      'Cold-chain preserved fresh provisions',
      'IMPA & ISSA cataloged marine spares',
      'Offshore anchorage launch supply delivery'
    ],
    targetClients: [
      'Foreign-going Cargo Vessels',
      'Offshore Support Vessels (OSVs)',
      'Tugs & Barges'
    ],
    regulatoryAlignment: 'IMPA Quality Guidelines & HACCP Hygiene Standard Compliant',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'marine-logistics',
    serviceNumber: '04',
    title: 'Marine Logistics / Offshore Support Services',
    shortDescription: 'Integrated offshore logistics, rig-to-shore freight forwarding, heavy cargo transportation, and offshore supply vessel coordination.',
    fullDescription: 'We deliver integrated logistics solutions for offshore operations, supporting oil & gas, renewable energy, and marine construction projects. Our offerings include offshore supply vessel coordination, cargo and equipment transportation, warehousing, freight forwarding, and rig-to-shore logistics, backed by an experienced operations team focused on safety, efficiency, and reliability.',
    iconName: 'Ship',
    features: [
      'Offshore Supply Coordination',
      'Cargo Transportation',
      'Equipment Transportation',
      'Warehousing',
      'Freight Forwarding',
      'Rig-to-Shore Logistics',
      'Offshore Project Support',
      'Marine Logistics Coordination'
    ],
    highlights: [
      'Heavy lift & project cargo handling',
      'Secure shore base staging & bonded warehousing',
      'Dedicated Gulf of Guinea offshore logistics desk'
    ],
    targetClients: [
      'E&P Oil & Gas Operators',
      'EPIC Contractors',
      'Offshore Drilling Contractors'
    ],
    regulatoryAlignment: 'ISO 9001 / HSE Offshore Transport Safety Compliant',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'maritime-support',
    serviceNumber: '05',
    title: 'Maritime Support Services',
    shortDescription: 'Single point of contact for technical consultancy, vessel husbandry, regulatory compliance, and emergency response coordination.',
    fullDescription: 'From technical consultancy and vessel husbandry to regulatory compliance and emergency response coordination, our maritime support services are designed to be a single, dependable point of contact for shipowners and operators. We help clients navigate complex maritime requirements with responsive, expert guidance at every stage of vessel operations.',
    iconName: 'Shield',
    features: [
      'Technical Consultancy',
      'Vessel Husbandry',
      'Regulatory Support',
      'Compliance Coordination',
      'Emergency Response Coordination',
      'Operational Support',
      'Marine Advisory Services'
    ],
    highlights: [
      'Single-window vessel husbandry management',
      'Regulatory compliance audits and class liaisons',
      'Rapid emergency escalation protocol'
    ],
    targetClients: [
      'Shipowners & Ship Managers',
      'Marine Superintendents',
      'Technical & Commercial Directors'
    ],
    regulatoryAlignment: 'NIMASA & International Maritime Organization (IMO) Standards',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'vessel-chartering',
    serviceNumber: '06',
    title: 'Vessel Hiring, Leasing & Chartering',
    shortDescription: 'Spot and long-term chartering of PSVs, AHTS, tugs, crew boats, and barges tailored to offshore and cargo project needs.',
    fullDescription: 'We offer flexible vessel hiring, leasing, and chartering arrangements, from short-term spot charters to long-term lease agreements, tailored to cargo, offshore, and specialized project needs. Drawing on an extensive network of vessel owners and operators, we assist clients in sourcing the right tonnage and negotiating favorable, well-structured contracts.',
    iconName: 'Compass',
    features: [
      'Vessel Sourcing',
      'Spot Chartering',
      'Long-Term Chartering',
      'Vessel Leasing',
      'Project Vessel Hire',
      'Cargo Vessel Solutions',
      'Offshore Vessel Solutions',
      'Tonnage Matching',
      'Charter Negotiation Support'
    ],
    highlights: [
      'Access to vetted PSV, AHTS, Crew Boat, & Barge tonnage',
      'BIMCO compliant charter contract structuring',
      'Technical pre-fixture inspection coordination'
    ],
    targetClients: [
      'Offshore Project Managers',
      'Charterers & Procurement Leads',
      'Marine Logistics Contractors'
    ],
    regulatoryAlignment: 'BIMCO Standard Charter Terms & NIMASA Cabotage Guidelines',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  }
];
