export interface Service {
  slug: string;
  serviceNumber: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Anchor' | 'Users' | 'Package' | 'Ship' | 'Shield' | 'Compass' | 'Navigation' | 'Container';
  features: string[];
  image: string;
  highlights: string[];
  targetClients: string[];
  regulatoryAlignment: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Marine Logistics' | 'Shipping Agency' | 'Offshore Support' | 'Crew Supply' | 'Ship Chandling' | 'Vessel Chartering';
  location: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  servicesProvided: string[];
  isVerified: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
  isVerified: boolean;
}

export interface EnquiryForm {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceRequired: string;
  vesselOrProject: string;
  message: string;
  website_hp?: string;
}

export interface CompanyValue {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  primaryBrandStatement: string;
  supportingMessage: string;
  description: string;
  nimasaStatus: string;
  address: string;
  operatingLocation: string;
  email: string;
  phone: string;
  socials: {
    platform: string;
    url: string;
  }[];
}
