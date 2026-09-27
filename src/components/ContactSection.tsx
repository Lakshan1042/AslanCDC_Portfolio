import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { CENTER_INFO } from '../data/contentData';
import { MapPin, Clock, Phone, MessageSquare, Navigation, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('main-branch');

  const selectedBranch = CENTER_INFO.branches.find((b) => b.id === selectedBranchId) || CENTER_INFO.branches[0];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-contact-soft relative overflow-hidden">
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-aslan-gold/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <SectionHeading
          eyebrow="Our Centers & Support"
          title="Visit Aslan Child Development and Therapy Center"
          subtitle="We are conveniently located across 2 branches in West Tambaram and Chromepet."
          className="mb-8 sm:mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card with Branch Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-amber-100 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Branch Selector Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-aslan-gold/20 text-aslan-charcoal">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-aslan-charcoal font-heading">
                    Our Locations (2 Branches)
                  </h3>
                </div>
                
                {/* Branch Cards Grid / Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CENTER_INFO.branches.map((branch) => {
                    const isSelected = branch.id === selectedBranchId;
                    return (
                      <div
                        key={branch.id}
                        onClick={() => setSelectedBranchId(branch.id)}
                        className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-50/90 border-2 border-amber-300 text-slate-900 shadow-md scale-[1.02]'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-amber-200 hover:bg-amber-50/30'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                                isSelected
                                  ? 'bg-amber-400 text-amber-950'
                                  : branch.isMain
                                  ? 'bg-amber-100 text-amber-900'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {branch.isMain ? 'Main Branch' : 'Branch 2'}
                            </span>
                            {isSelected && (
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                            )}
                          </div>
                          <h4 className="font-heading font-extrabold text-base mb-1 text-slate-900">
                            {branch.shortName}
                          </h4>
                          <p className={`text-xs leading-relaxed font-sans font-medium ${isSelected ? 'text-slate-800' : 'text-slate-600'}`}>
                            {branch.address}
                          </p>
                        </div>

                        <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${isSelected ? 'border-amber-200/80 text-amber-950 font-bold' : 'border-slate-100 text-slate-600'}`}>
                          <span className="font-bold flex items-center gap-1 text-[11px]">
                            <MapPin className="w-3.5 h-3.5 text-amber-600" /> Select to view map
                          </span>
                          <a
                            href={branch.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11px] font-extrabold text-amber-700 hover:underline flex items-center gap-0.5"
                          >
                            <Navigation className="w-3 h-3" /> Map
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hours & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="p-2.5 rounded-xl bg-aslan-gold text-aslan-charcoal flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-0.5 font-heading">
                      Center Hours
                    </h4>
                    <p className="text-sm font-bold text-aslan-charcoal font-sans">
                      Mon – Sat: 9:00 AM – 8:00 PM
                    </p>
                    <p className="text-xs text-aslan-charcoal-muted font-sans font-medium">
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-sky-50 border border-sky-200">
                  <div className="p-2.5 rounded-xl bg-aslan-blue text-white flex-shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-blue mb-0.5 font-heading">
                      Contact Numbers
                    </h4>
                    <div className="flex flex-wrap gap-2 font-sans">
                      {CENTER_INFO.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-sm font-bold text-aslan-blue hover:underline font-heading"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 mt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href={`tel:${CENTER_INFO.phones[0]}`}>
                <Button variant="primary" size="md" icon={Phone} fullWidth>
                  Call Us
                </Button>
              </a>

              <a
                href={`https://wa.me/91${CENTER_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="md" icon={MessageSquare} fullWidth>
                  WhatsApp Us
                </Button>
              </a>

              <a
                href={selectedBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="md" icon={Navigation} fullWidth>
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-100 h-full min-h-[360px] bg-white relative group flex flex-col">
              {/* Map Header Bar */}
              <div className="bg-amber-100/90 text-amber-950 border-b border-amber-200 px-5 py-3.5 flex items-center justify-between text-xs font-heading font-bold shadow-xs">
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  Showing: <strong className="font-extrabold text-slate-900">{selectedBranch.name}</strong>
                </span>
              </div>

              <iframe
                key={selectedBranch.id}
                title={`Aslan Child Development and Therapy Center ${selectedBranch.name} Google Maps Location`}
                src={selectedBranch.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-grow min-h-[320px] rounded-b-3xl"
              />
              
              <a
                href={selectedBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-amber-300 text-amber-950 px-4 py-2.5 rounded-full text-xs font-extrabold font-heading shadow-lg hover:bg-amber-400 hover:scale-105 transition-all flex items-center gap-2 border border-amber-400/50"
              >
                <Navigation className="w-4 h-4 text-amber-900" /> Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};



