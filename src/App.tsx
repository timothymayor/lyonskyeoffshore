import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ServicesSection } from './components/services/ServicesSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { CTASection } from './components/cta/CTASection';
import { Footer } from './components/footer/Footer';
import { LegalModal } from './components/legal/LegalModal';
import { CookieBanner } from './components/cookie/CookieBanner';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import { Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Shipping Agency');

  // Quick Quote Modal state inside modal
  const [quoteForm, setQuoteForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: 'Shipping Agency',
    details: ''
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Active section observer on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
      setQuoteForm(prev => ({ ...prev, serviceRequired: serviceName }));
    }
    setQuoteModalOpen(true);
    setQuoteSubmitted(false);
  };

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.fullName || !quoteForm.email) return;

    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteModalOpen(false);
      setQuoteSubmitted(false);
      setQuoteForm({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        serviceRequired: 'Shipping Agency',
        details: ''
      });
    }, 2500);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E213E] text-slate-100 font-sans selection:bg-[#D99A27] selection:text-[#0E213E]">
      {/* Navbar */}
      <Navbar
        onRequestQuote={() => handleOpenQuoteModal()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onRequestQuote={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* About Section */}
        <AboutSection />

        {/* CTA Interstitial 1 */}
        <CTASection
          title="Need Reliable Offshore Support?"
          subtitle="Speak with our marine operations leads for vessel husbandry, crew deployment, or spot charter requests."
          primaryCtaText="Speak With Lyonskye"
          onRequestQuote={() => handleOpenQuoteModal()}
        />

        {/* Core Services Section */}
        <ServicesSection
          onRequestQuoteForService={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        {/* Capability / Projects Matrix */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Interstitial 2 */}
        <CTASection
          title="Marine Support When You Need It"
          subtitle="Talk to our team about your next vessel, port call, offshore or logistics requirement across Nigerian ports and terminals."
          primaryCtaText="Request a Quote"
          onRequestQuote={() => handleOpenQuoteModal()}
        />

        {/* Contact Section */}
        <ContactSection preselectedService={selectedServiceForQuote} />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Legal Privacy / Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Request a Quote Direct Modal */}
      <Modal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        title="Request a Quotation"
        subtitle="LYONSKYE OFFSHORE MARINE ENQUIRY DESK"
        maxWidth="lg"
      >
        {quoteSubmitted ? (
          <div className="p-6 text-center space-y-3 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-emerald-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="font-serif text-2xl font-bold">Quote Request Received</h4>
            <p className="text-xs text-slate-300">
              Thank you. Our operations team will review your specification and send a formal response shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleQuickQuoteSubmit} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-bold text-white uppercase mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={quoteForm.fullName}
                onChange={(e) => setQuoteForm({ ...quoteForm, fullName: e.target.value })}
                placeholder="Capt. Jane Doe"
                className="w-full px-3.5 py-2.5 rounded bg-[#0E213E] border border-[#23557F] text-white focus:outline-none focus:ring-2 focus:ring-[#D99A27]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  placeholder="jdoe@company.com"
                  className="w-full px-3.5 py-2.5 rounded bg-[#0E213E] border border-[#23557F] text-white focus:outline-none focus:ring-2 focus:ring-[#D99A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">Company</label>
                <input
                  type="text"
                  value={quoteForm.company}
                  onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                  placeholder="Global Maritime Corp"
                  className="w-full px-3.5 py-2.5 rounded bg-[#0E213E] border border-[#23557F] text-white focus:outline-none focus:ring-2 focus:ring-[#D99A27]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase mb-1">Service Required *</label>
              <select
                value={quoteForm.serviceRequired}
                onChange={(e) => setQuoteForm({ ...quoteForm, serviceRequired: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#0E213E] border border-[#23557F] text-white focus:outline-none focus:ring-2 focus:ring-[#D99A27]"
              >
                <option value="Shipping Agency">Shipping Agency</option>
                <option value="Manning / Crew Supply">Manning / Crew Supply</option>
                <option value="General Ship Chandling">General Ship Chandling</option>
                <option value="Marine Logistics / Offshore Support Services">Marine Logistics / Offshore Support Services</option>
                <option value="Maritime Support Services">Maritime Support Services</option>
                <option value="Vessel Hiring, Leasing & Chartering">Vessel Hiring, Leasing & Chartering</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase mb-1">Operational Details</label>
              <textarea
                rows={3}
                value={quoteForm.details}
                onChange={(e) => setQuoteForm({ ...quoteForm, details: e.target.value })}
                placeholder="Vessel name, port of call, dates or required tonnage..."
                className="w-full px-3.5 py-2.5 rounded bg-[#0E213E] border border-[#23557F] text-white focus:outline-none focus:ring-2 focus:ring-[#D99A27]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] text-[#A9B3BE] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D99A27]" /> NIMASA Certified Data Governance
              </span>
              <Button type="submit" variant="primary" size="md" icon={<Send className="w-3.5 h-3.5" />}>
                Submit Quote Request
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
