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
            
            {/* Soft Eyebrow Tag with Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 shadow-xs text-slate-900 text-xs font-bold font-heading"
            >
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Despair turns into aspire</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            </motion.div>

            {/* Headline (Single H1 Tag on Page) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-aslan-charcoal leading-[1.14] tracking-tight"
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
              className="pt-3 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
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


