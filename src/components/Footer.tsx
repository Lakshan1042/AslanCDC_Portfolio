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
    <footer className="bg-footer-bright text-aslan-charcoal border-t border-amber-200/80 pt-12 pb-24 sm:pb-16 lg:pb-14 font-sans text-xs relative overflow-hidden">
      {/* Subtle Background Soft Blobs */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-aslan-gold/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 space-y-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand with Official Logo & Slogan */}
          <div className="space-y-2 text-center md:text-left flex flex-col md:flex-row items-center gap-4">
            <button
              onClick={() => onNavigate?.('home', 'hero')}
              className="flex items-center gap-3.5 focus:outline-none group text-left"
            >
              <img 
                src="/images/aslan_logo.png" 
                alt="Aslan Child Development Center Logo" 
                className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors block">
                  ASLAN
                </span>
                <span className="text-[10px] font-extrabold tracking-widest text-sky-600 uppercase block -mt-1">
                  Child Development & Therapy Center
                </span>
              </div>
            </button>
            <div className="hidden md:block w-px h-10 bg-amber-200"></div>
            <div>
              <p className="text-slate-600 font-semibold italic text-xs">
                &ldquo;Despair turns into aspire&rdquo;
              </p>
              <p className="text-slate-500 font-medium text-[11px]">
                West Tambaram & Chromepet, Chennai
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 font-bold text-slate-700">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-sky-600 transition-colors">About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#how-we-help" onClick={(e) => handleLinkClick(e, 'how-we-help')} className="hover:text-sky-600 transition-colors">How We Help</a>
            <a href="#environment" onClick={(e) => handleLinkClick(e, 'environment')} className="hover:text-sky-600 transition-colors">Environment</a>
            <a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="hover:text-sky-600 transition-colors">Appointment</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-sky-600 transition-colors">Contact</a>
          </div>

          {/* Copyright & Phone */}
          <div className="text-slate-600 text-center md:text-right font-medium space-y-1">
            <p>© {new Date().getFullYear()} Aslan Child Development and Therapy Center.</p>
            <div className="text-xs text-sky-700 font-extrabold tracking-wide flex items-center justify-center md:justify-end gap-1.5 flex-wrap">
              <Phone className="w-3.5 h-3.5 text-sky-600 inline-block" />
              <a
                href="tel:9445914020"
                className="hover:underline hover:text-sky-900 transition-colors focus:outline-none rounded px-0.5"
              >
                9445914020
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="tel:8072545109"
                className="hover:underline hover:text-sky-900 transition-colors focus:outline-none rounded px-0.5"
              >
                8072545109
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Developer Branding Line - Positioned higher up on mobile UI */}
        <div className="pt-6 border-t border-amber-200/80 flex items-center justify-center text-center pb-4 sm:pb-0">
          <p className="text-[11px] text-slate-600 inline-flex items-center gap-2 flex-wrap justify-center font-medium">
            <span>Want a similar website?</span>
            <button
              onClick={() => setShowDeveloperModal(true)}
              className="font-extrabold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3.5 py-1 rounded-full border border-amber-300 transition-all hover:scale-105 shadow-sm focus:outline-none inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Contact Developer</span>
            </button>
          </p>
        </div>

      </div>

      {/* Developer Contact Modal */}
      <AnimatePresence>
        {showDeveloperModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-teal-100 shadow-2xl relative space-y-6 text-aslan-charcoal mb-12 sm:mb-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDeveloperModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3 shadow-sm">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Want a Similar Website?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                  Get a modern, high-performance custom website tailored specifically for your center, clinic, or business.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Phone Call */}
                <a
                  href="tel:6381276301"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-900">Call Us</span>
                    <span className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">+91 63812 76301</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916381276301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#128C7E]">WhatsApp</span>
                    <span className="text-sm font-bold text-slate-800 group-hover:text-[#128C7E] transition-colors">+91 63812 76301</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:jrlakshan1042@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-amber-950" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-900">Email Us</span>
                    <span className="text-sm font-bold text-slate-800 group-hover:text-amber-800 transition-colors truncate block">jrlakshan1042@gmail.com</span>
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

