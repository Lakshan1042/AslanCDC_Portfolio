import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { CENTER_INFO } from '../data/contentData';
import { MapPin, Clock, Phone, MessageSquare, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-aslan-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionHeading
          eyebrow="Location & Support"
          title="Visit Aslan"
          subtitle="We are conveniently located on Mudichur Road, West Tambaram."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-aslan-sage/20 shadow-aslan-card flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-aslan-teal-soft text-aslan-teal flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-teal mb-1 font-heading">
                    Address
                  </h4>
                  <p className="text-base text-aslan-charcoal font-medium leading-relaxed font-sans">
                    2nd Floor, Sha Complex,<br />
                    Mudichur Road, West Tambaram,<br />
                    Tambaram, Chennai, Tamil Nadu – 600045
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-aslan-sage-soft text-aslan-teal flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-teal mb-1 font-heading">
                    Center Hours
                  </h4>
                  <p className="text-base font-semibold text-aslan-charcoal font-sans">
                    Monday – Saturday: 9:00 AM – 8:00 PM
                  </p>
                  <p className="text-xs text-aslan-charcoal-muted mt-0.5 font-sans">
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-aslan-peach-soft text-aslan-teal flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-teal mb-1 font-heading">
                    Contact Numbers
                  </h4>
                  <div className="flex flex-wrap gap-4 pt-1 font-sans">
                    {CENTER_INFO.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-lg font-bold text-aslan-teal hover:underline font-heading"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-8 mt-8 border-t border-aslan-sage/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                href={CENTER_INFO.googleMapsUrl}
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
            <div className="rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 h-full min-h-[340px] bg-white relative group">
              <iframe
                title="Aslan Child Development Center Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1965!2d80.1029057!3d12.9268392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f051e448e3b%3A0x5a10d0687e59a966!2sASLAN%20-%20Occupational%20Therapy%2C%20Speech%20Therapy%2C%20Special%20Education%2C%20Physio%20Therapy!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] rounded-3xl"
              />
              <a
                href={CENTER_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold font-heading text-aslan-teal shadow-md hover:bg-aslan-teal hover:text-white transition-all flex items-center gap-1.5"
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
