import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onExploreServices }) => {
  return (
    <section id="hero" className="py-20 lg:py-24 bg-aslan-cream relative overflow-hidden">
      {/* Soft Organic Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-aslan-sage/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-aslan-peach/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Soft Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-aslan-sage/25 shadow-aslan-sm text-aslan-teal text-xs font-semibold uppercase tracking-wider font-heading"
            >
              <Sparkles className="w-3.5 h-3.5 text-aslan-teal" />
              <span>Nurturing Every Potential</span>
            </motion.div>

            {/* Headline (Single H1 Tag on Page) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-aslan-charcoal leading-[1.14] tracking-tight"
            >
              Every Child Has the Potential to <span className="text-aslan-teal">Grow, Learn & Thrive.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.14 }}
              className="text-base sm:text-lg md:text-xl text-aslan-charcoal-muted leading-relaxed max-w-xl font-sans font-normal"
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
                onClick={onOpenAppointment}
              >
                Book an Appointment
              </Button>

              <Button
                variant="outline"
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
            {/* Organic Backing Glow Frame */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-aslan-teal/15 via-aslan-sage/20 to-aslan-peach/30 rounded-[2.5rem] blur-xl transform rotate-1 pointer-events-none opacity-80"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group">
              <img
                src="/images/hero_therapy.png"
                alt="Therapist interacting with child at Aslan Child Development Center"
                className="w-full h-[380px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle Bottom Accent Tag */}
              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-aslan-sage/20 text-xs font-semibold text-aslan-teal shadow-aslan-sm">
                West Tambaram • Chennai
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
