import { CompanyInfo, CompanyValue } from '../types';

export const companyData: CompanyInfo = {
  name: "Lyonskye Offshore Marine Ltd.",
  shortName: "Lyonskye",
  tagline: "NIMASA Certified Maritime & Energy Solutions",
  primaryBrandStatement: "ENGINEERING CONFIDENCE OFFSHORE.",
  supportingMessage: "Marine Capability. Energy Expertise. Operational Excellence.",
  description: "Lyonskye Offshore Marine Ltd. is a certified Nigerian Maritime Administration and Safety Agency (NIMASA) company committed to providing dependable maritime and energy-sector solutions tailored to the operational needs of shipowners, vessel operators, offshore companies, oil and gas organizations, marine contractors, logistics operators, and other maritime stakeholders.",
  nimasaStatus: "NIMASA Certified Maritime Operator",
  address: "Victoria Island / Ikoyi Maritime Corridor, Lagos, Nigeria",
  operatingLocation: "Lagos, Port Harcourt, Warri, Calabar & Offshore Gulf of Guinea",
  email: "enquiries@lyonskye.com",
  phone: "+234 (0) 800 LYONSKYE / +234 1 234 5678",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/lyonskye-offshore-marine" },
    { platform: "X (Twitter)", url: "https://x.com/lyonskyemarine" }
  ]
};

export const companyValues: CompanyValue[] = [
  {
    title: "SAFETY FIRST",
    subtitle: "Non-negotiable operational standard",
    description: "Safety is embedded in every operational decision, vessel call, and crew deployment to protect personnel, assets, and the marine environment.",
    icon: "Shield"
  },
  {
    title: "RELIABILITY",
    subtitle: "Dependable execution when it matters",
    description: "We deliver dependable, round-the-clock support when it matters most, mitigating port delays and maintaining operational continuity.",
    icon: "Anchor"
  },
  {
    title: "PROFESSIONALISM",
    subtitle: "Disciplined processes & accountability",
    description: "Experienced people, disciplined processes, and accountable execution across all Nigerian ports and offshore terminals.",
    icon: "Users"
  },
  {
    title: "COMPLIANCE",
    subtitle: "Strict regulatory adherence",
    description: "We operate with strong regard for NIMASA, STCW, MLC 2006, and international maritime safety requirements.",
    icon: "CheckCircle2"
  },
  {
    title: "RESPONSIVENESS",
    subtitle: "24/7 dedicated operational liaison",
    description: "Our clients receive timely, transparent communication and immediate operational support at every stage.",
    icon: "Clock"
  },
  {
    title: "INTEGRITY",
    subtitle: "Transparent commercial conduct",
    description: "We build long-term relationships through commercial transparency, accurate documentation, and ethical conduct.",
    icon: "Award"
  }
];

export const trustIndicators = [
  { label: "NIMASA Certified Company", detail: "Registered & Regulatory Compliant" },
  { label: "Marine & Offshore Expertise", detail: "Gulf of Guinea Capability" },
  { label: "Safety & Compliance Driven", detail: "HSE & STCW/MLC Aligned" },
  { label: "Responsive Operations", detail: "24/7 Port & Offshore Support" }
];
