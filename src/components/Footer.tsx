import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, X, Sparkles } from 'lucide-react';
import type { PageRoute } from '../types';

interface FooterProps {
  onNavigate?: (route: PageRoute, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showDeveloperModal, setShowDeveloperModal] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home', sectionId);
    }
  };

  return (
    <footer className="bg-white border-t border-aslan-sage/20 py-12 text-aslan-charcoal font-sans text-xs relative">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <button
              onClick={() => onNavigate?.('home', 'hero')}
              className="font-heading font-extrabold text-lg tracking-tight text-aslan-teal hover:opacity-95 text-left block focus:outline-none"
            >
              ASLAN
            </button>
            <p className="text-aslan-charcoal-muted">
              Child Development Center • West Tambaram & Chromepet, Chennai
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 font-medium text-aslan-charcoal-muted">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-aslan-teal transition-colors">About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-aslan-teal transition-colors">Services</a>
            <a href="#how-we-help" onClick={(e) => handleLinkClick(e, 'how-we-help')} className="hover:text-aslan-teal transition-colors">How We Help</a>
            <a href="#environment" onClick={(e) => handleLinkClick(e, 'environment')} className="hover:text-aslan-teal transition-colors">Environment</a>
            <a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="hover:text-aslan-teal transition-colors">Appointment</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-aslan-teal transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-aslan-charcoal-muted text-center md:text-right">
            <p>© {new Date().getFullYear()} Aslan Child Development Center.</p>
            <p className="text-[10px]">9445914020 • 8072545109</p>
          </div>
        </div>

        {/* Subtle Developer Branding Line */}
        <div className="pt-6 border-t border-aslan-sage/10 flex items-center justify-center text-center">
          <p className="text-[11px] text-aslan-charcoal-muted inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>Want a similar website?</span>
            <button
              onClick={() => setShowDeveloperModal(true)}
              className="font-semibold text-aslan-teal hover:underline inline-flex items-center gap-1 bg-aslan-teal/5 px-2.5 py-1 rounded-full border border-aslan-teal/15 transition-all hover:bg-aslan-teal/10 focus:outline-none"
            >
              <Sparkles className="w-3 h-3 text-aslan-teal" />
              <span>Contact Developer</span>
            </button>
          </p>
        </div>

      </div>

      {/* Developer Contact Modal */}
      <AnimatePresence>
        {showDeveloperModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aslan-charcoal/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-aslan-sage/20 shadow-2xl relative space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDeveloperModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-aslan-charcoal-muted hover:text-aslan-charcoal hover:bg-aslan-cream transition-colors focus:outline-none"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-aslan-teal/10 text-aslan-teal flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-aslan-charcoal">
                  Want a Similar Website?
                </h3>
                <p className="text-xs text-aslan-charcoal-muted leading-relaxed font-sans">
                  Get a modern, high-performance custom website tailored specifically for your center, clinic, or business.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Phone Call */}
                <a
                  href="tel:6381276301"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-aslan-cream hover:bg-aslan-sage-soft border border-aslan-sage/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-aslan-teal text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-aslan-charcoal-muted">Call Us</span>
                    <span className="text-sm font-semibold text-aslan-charcoal group-hover:text-aslan-teal transition-colors">+91 63812 76301</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916381276301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#128C7E]">WhatsApp</span>
                    <span className="text-sm font-semibold text-aslan-charcoal group-hover:text-[#128C7E] transition-colors">+91 63812 76301</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:jrlakshan1042@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-aslan-cream hover:bg-aslan-sage-soft border border-aslan-sage/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-aslan-teal text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-aslan-charcoal-muted">Email Us</span>
                    <span className="text-sm font-semibold text-aslan-charcoal group-hover:text-aslan-teal transition-colors truncate block">jrlakshan1042@gmail.com</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
