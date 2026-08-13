import React, { useState } from 'react';
import { ShieldAlert, Layers, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { projectsData, projectNoticeText } from '../../data/projects';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    'All',
    'Marine Logistics',
    'Shipping Agency',
    'Offshore Support',
    'Crew Supply',
    'Ship Chandling',
    'Vessel Chartering'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0E213E] relative overflow-hidden">
      <div className="absolute inset-0 bg-marine-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CAPABILITY MATRIX & EXPERTISE"
          title="Selected Capabilities & Project Experience"
          subtitle="Demonstrated technical readiness and operational execution across Nigerian offshore sectors and maritime hubs."
        />

        {/* Verified Notice Banner (Section 20 requirement) */}
        <div className="mb-10 p-4 sm:p-5 rounded-lg bg-[#163A63]/50 border border-[#23557F] flex items-start gap-3.5 backdrop-blur-sm">
          <ShieldAlert className="w-5 h-5 text-[#D99A27] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-sans text-[#A9B3BE] leading-relaxed">
            <strong className="text-white font-semibold">Disclosure Notice: </strong>
            {projectNoticeText}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-sans font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D99A27] text-[#0E213E] shadow-md font-bold'
                  : 'bg-[#163A63]/50 text-[#A9B3BE] hover:text-white hover:bg-[#163A63] border border-[#23557F]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Capability Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProjectModal(proj)}
              className="group cursor-pointer rounded-lg bg-[#163A63]/30 border border-[#23557F]/80 hover:border-[#D99A27] transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E213E] via-[#0E213E]/40 to-transparent" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0E213E]/90 border border-[#23557F] text-[10px] font-sans font-bold uppercase tracking-wider text-[#D99A27]">
                    {proj.category}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#A9B3BE] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D99A27]" />
                      {proj.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#717D8D]" />
                      {proj.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D99A27] transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-xs text-[#A9B3BE] leading-relaxed line-clamp-3 mb-4">
                    {proj.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-sans font-semibold text-[#D99A27] uppercase tracking-wider">
                <span>View Capability Scope</span>
                <Layers className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <Modal
          isOpen={activeProjectModal !== null}
          onClose={() => setActiveProjectModal(null)}
          title={activeProjectModal.title}
          subtitle={`CAPABILITY CATEGORY: ${activeProjectModal.category}`}
          maxWidth="2xl"
        >
          <div className="space-y-5">
            <div className="relative rounded-lg overflow-hidden border border-[#23557F] h-48">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E213E] to-transparent" />
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-[#A9B3BE] p-3 rounded bg-[#163A63]/40 border border-[#23557F]">
              <div>
                <span className="text-[#D99A27] font-semibold uppercase">Location: </span>
                {activeProjectModal.location}
              </div>
              <div>
                <span className="text-[#D99A27] font-semibold uppercase">Status: </span>
                {activeProjectModal.year}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Operational Overview
              </h4>
              <p className="text-xs sm:text-sm text-[#DFE5EA] leading-relaxed">
                {activeProjectModal.description}
              </p>
            </div>

            <div className="p-4 rounded bg-[#0E213E] border border-[#23557F]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D99A27] mb-3">
                Services Provided
              </h4>
              <div className="space-y-2">
                {activeProjectModal.servicesProvided.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#A9B3BE]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A27]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#23557F] flex justify-end">
              <Button variant="outline" size="sm" onClick={() => setActiveProjectModal(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
