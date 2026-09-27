import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onExploreServices }) => {
  return (
    <section id="hero" className="py-16 lg:py-24 bg-hero-soft relative overflow-hidden">
      {/* Soft Mild Ambient Background Glows */}
      <div className="absolute top-0 left-10 w-[30rem] h-[30rem] bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-sky-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Center Brand & Logo Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-amber-200/70 shadow-sm w-fit"
            >
              <img
                src="/images/aslan_logo.png"
                alt="Aslan Child Development and Therapy Center Logo"
                className="h-14 sm:h-18 lg:h-20 w-auto object-contain drop-shadow-md flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-slate-900 leading-none">
                  ASLAN
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-sky-700 uppercase tracking-wide leading-tight mt-1">
                  Child Development and Therapy Center
                </span>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] font-bold text-amber-700">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span className="italic font-medium text-slate-600">Despair turns into aspire</span>
                </div>
              </div>
            </motion.div>

            {/* Headline (Single H1 Tag on Page) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-aslan-charcoal leading-[1.15] tracking-tight"
            >
              Every Child Has the Potential to <span className="text-gradient-gold">Grow, Learn & Thrive.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.14 }}
              className="text-base sm:text-lg md:text-xl text-aslan-charcoal-muted leading-relaxed max-w-xl font-sans font-medium"
            >
              Specialized therapy, education and developmental support designed around every child's individual needs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.22 }}
              className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <Button
                variant="primary"
                size="lg"
                icon={HeartHandshake}
                onClick={onOpenAppointment}
              >
                Book an Appointment
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                onClick={onExploreServices}
              >
                Explore Our Services
              </Button>
            </motion.div>

          </div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
            className="lg:col-span-5 relative"
          >
            {/* Soft Backing Glow Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/50 via-yellow-100/50 to-sky-200/50 rounded-[3rem] blur-lg transform rotate-2 pointer-events-none opacity-60"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                src="/images/hero_therapy.png"
                alt="Therapist interacting with child at Aslan Child Development and Therapy Center"
                className="w-full h-[380px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Top Badge with Logo */}
              <div className="absolute top-4 left-4 p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200 shadow-md flex items-center gap-2.5">
                <img
                  src="/images/aslan_logo.png"
                  alt="Aslan Logo Badge"
                  className="h-8 sm:h-9 w-auto object-contain flex-shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xs text-slate-900 leading-none">ASLAN</span>
                  <span className="text-[9px] font-bold text-sky-700 uppercase tracking-tight leading-tight mt-0.5">Therapy Center</span>
                </div>
              </div>

              {/* Soft Bottom Accent Tag */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-xs font-extrabold text-slate-900 shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span>West Tambaram & Chromepet • Chennai</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


