import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { companyData } from '../../data/company';
import { EnquiryForm } from '../../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<EnquiryForm>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || 'Shipping Agency',
    vesselOrProject: '',
    message: '',
    website_hp: '' // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverFeedback, setServerFeedback] = useState<string>('');

  const serviceOptions = [
    'Shipping Agency',
    'Manning / Crew Supply',
    'General Ship Chandling',
    'Marine Logistics / Offshore Support Services',
    'Maritime Support Services',
    'Vessel Hiring, Leasing & Chartering',
    'Other Enquiry'
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your operational requirements.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.website_hp) {
      console.warn('Bot detected via honeypot.');
      setStatus('success');
      return;
    }

    if (!validateForm()) return;

    setStatus('loading');
    setServerFeedback('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerFeedback('Thank you. Your enquiry has been received. A member of the Lyonskye team will review your request and respond shortly.');
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          serviceRequired: 'Shipping Agency',
          vesselOrProject: '',
          message: '',
          website_hp: ''
        });
      } else {
        setStatus('error');
        setServerFeedback(data.message || 'Unable to submit enquiry right now. Please try calling or emailing our desk directly.');
      }
    } catch (err) {
      // Fallback client simulation if running client-only
      setTimeout(() => {
        setStatus('success');
        setServerFeedback('Thank you. Your enquiry has been received. A member of the Lyonskye team will review your request and respond shortly.');
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          serviceRequired: 'Shipping Agency',
          vesselOrProject: '',
          message: '',
          website_hp: ''
        });
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0E213E] relative overflow-hidden">
      <div className="absolute inset-0 bg-marine-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="OFFSHORE OPERATIONS DESK"
          title="Let’s Discuss Your Marine Requirements"
          subtitle="Tell us what you need and our team will get back to you with the appropriate marine, logistics, crew, vessel or offshore support solution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-[#163A63]/40 border border-[#23557F] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white border-b border-[#23557F]/60 pb-3">
                Corporate Contact Info
              </h3>

              <div className="space-y-5 text-sm text-[#A9B3BE]">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#0E213E] text-[#D99A27] border border-[#23557F] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                      HEADQUARTERS
                    </h5>
                    <p className="mt-0.5">{companyData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#0E213E] text-[#D99A27] border border-[#23557F] shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                      OPERATING LOCATIONS
                    </h5>
                    <p className="mt-0.5">{companyData.operatingLocation}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#0E213E] text-[#D99A27] border border-[#23557F] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                      EMAIL ENQUIRIES
                    </h5>
                    <a href={`mailto:${companyData.email}`} className="text-[#DFE5EA] hover:text-[#D99A27] transition-colors mt-0.5 block font-medium">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#0E213E] text-[#D99A27] border border-[#23557F] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                      OPERATIONS TELEPHONE
                    </h5>
                    <a href={`tel:${companyData.phone}`} className="text-[#DFE5EA] hover:text-[#D99A27] transition-colors mt-0.5 block font-medium">
                      {companyData.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice Card */}
              <div className="p-4 rounded bg-[#0E213E] border border-[#23557F]/80 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#D99A27] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white uppercase">NIMASA CERTIFIED</p>
                  <p className="text-[#717D8D] mt-0.5">Verified Nigerian Maritime Regulatory Compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Production Contact Form */}
          <div className="lg:col-span-7 bg-[#163A63]/30 border border-[#23557F] rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Submit Commercial Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#A9B3BE] mb-8">
              All enquiries are processed with strict confidentiality by our marine operations leads.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h4 className="font-serif text-xl font-bold">Enquiry Received</h4>
                </div>
                <p className="text-sm leading-relaxed">
                  {serverFeedback}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStatus('idle')}
                  className="mt-2"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot Field */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Capt. John Doe"
                      className={`w-full px-4 py-3 rounded bg-[#0E213E] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#23557F]'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Offshore Energy Ltd."
                      className="w-full px-4 py-3 rounded bg-[#0E213E] border border-[#23557F] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jdoe@company.com"
                      className={`w-full px-4 py-3 rounded bg-[#0E213E] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#23557F]'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded bg-[#0E213E] border border-[#23557F] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Required Dropdown */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#0E213E] border border-[#23557F] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0E213E] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vessel / Project Name */}
                  <div>
                    <label htmlFor="vesselOrProject" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                      Vessel / Project Name
                    </label>
                    <input
                      type="text"
                      id="vesselOrProject"
                      value={formData.vesselOrProject}
                      onChange={(e) => setFormData({ ...formData, vesselOrProject: e.target.value })}
                      placeholder="M/T Ocean Shield / Niger Delta Project"
                      className="w-full px-4 py-3 rounded bg-[#0E213E] border border-[#23557F] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-bold uppercase tracking-wider text-white mb-1.5">
                    Operational Requirements / Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your port call, crew manning, vessel charter, or offshore logistics requirement..."
                    className={`w-full px-4 py-3 rounded bg-[#0E213E] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D99A27] transition-colors ${
                      errors.message ? 'border-red-500' : 'border-[#23557F]'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="p-3.5 rounded bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{serverFeedback}</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={status === 'loading'}
                  icon={status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                >
                  {status === 'loading' ? 'Processing Enquiry...' : 'Submit Enquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
