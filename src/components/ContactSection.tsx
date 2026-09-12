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
    <section id="contact" className="py-20 lg:py-24 bg-aslan-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionHeading
          eyebrow="Our Centers & Support"
          title="Visit Aslan"
          subtitle="We are conveniently located across 2 branches in West Tambaram and Chromepet."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card with Branch Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-aslan-sage/20 shadow-aslan-card flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Branch Selector Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-aslan-teal" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-aslan-teal font-heading">
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
                        className={`cursor-pointer p-4 rounded-2xl border transition-all relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-aslan-cream/70 border-aslan-teal shadow-sm ring-2 ring-aslan-teal/20'
                            : 'bg-white border-aslan-sage/30 hover:border-aslan-teal/50 hover:bg-aslan-cream/30'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                branch.isMain
                                  ? 'bg-aslan-teal text-white'
                                  : 'bg-aslan-gold/20 text-aslan-charcoal'
                              }`}
                            >
                              {branch.isMain ? 'Main Branch' : 'Branch 2'}
                            </span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-aslan-teal animate-pulse" />
                            )}
                          </div>
                          <h4 className="font-heading font-bold text-sm text-aslan-charcoal mb-1">
                            {branch.shortName}
                          </h4>
                          <p className="text-xs text-aslan-charcoal-muted leading-relaxed font-sans">
                            {branch.address}
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-aslan-sage/15 flex items-center justify-between text-xs">
                          <span className="text-aslan-teal font-medium flex items-center gap-1 text-[11px]">
                            <MapPin className="w-3.5 h-3.5" /> Select to view map
                          </span>
                          <a
                            href={branch.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11px] font-semibold text-aslan-teal hover:underline flex items-center gap-0.5"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-aslan-sage/15">
                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-aslan-sage-soft text-aslan-teal flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-teal mb-0.5 font-heading">
                      Center Hours
                    </h4>
                    <p className="text-sm font-semibold text-aslan-charcoal font-sans">
                      Mon – Sat: 9:00 AM – 8:00 PM
                    </p>
                    <p className="text-xs text-aslan-charcoal-muted font-sans">
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-aslan-peach-soft text-aslan-teal flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-teal mb-0.5 font-heading">
                      Contact Numbers
                    </h4>
                    <div className="flex flex-wrap gap-2 font-sans">
                      {CENTER_INFO.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-sm font-bold text-aslan-teal hover:underline font-heading"
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
            <div className="pt-6 mt-8 border-t border-aslan-sage/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                <Button variant="outline" size="md" icon={Navigation} fullWidth>
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
            <div className="rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 h-full min-h-[360px] bg-white relative group flex flex-col">
              {/* Map Header Bar */}
              <div className="bg-aslan-teal text-white px-4 py-3 flex items-center justify-between text-xs font-heading font-medium">
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Showing: <strong className="font-bold">{selectedBranch.name}</strong>
                </span>
              </div>

              <iframe
                key={selectedBranch.id}
                title={`Aslan Child Development Center ${selectedBranch.name} Google Maps Location`}
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
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full text-xs font-bold font-heading text-aslan-teal shadow-md hover:bg-aslan-teal hover:text-white transition-all flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

