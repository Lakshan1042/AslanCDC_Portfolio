import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { APPROACH_STEPS } from '../data/contentData';
import { ArrowRight } from 'lucide-react';

export const SupportJourney: React.FC = () => {
  const stepColors = [
    { badge: 'bg-aslan-gold text-aslan-charcoal', border: 'border-amber-200 hover:border-aslan-gold', text: 'text-aslan-gold-dark' },
    { badge: 'bg-aslan-blue text-white', border: 'border-sky-200 hover:border-aslan-blue', text: 'text-aslan-blue' },
    { badge: 'bg-aslan-mint text-white', border: 'border-emerald-200 hover:border-aslan-mint', text: 'text-aslan-mint' },
    { badge: 'bg-aslan-coral text-white', border: 'border-rose-200 hover:border-aslan-coral', text: 'text-aslan-coral' },
    { badge: 'bg-aslan-gold text-aslan-charcoal', border: 'border-amber-200 hover:border-aslan-gold', text: 'text-aslan-gold-dark' },
  ];

  return (
    <section id="how-we-help" className="py-20 lg:py-24 bg-journey-soft relative overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <SectionHeading
          eyebrow="Our Approach"
          title="How We Support Children"
          subtitle="A clear, collaborative 5-step journey designed around your child’s growth."
          className="mb-14"
        />

        {/* 5-Step Connected Progression */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-aslan-gold via-aslan-blue to-aslan-mint -translate-y-10 z-0 opacity-60 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {APPROACH_STEPS.map((item, idx) => {
              const theme = stepColors[idx % stepColors.length];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-3xl p-6 border-2 ${theme.border} shadow-md transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`w-11 h-11 rounded-2xl ${theme.badge} font-heading font-extrabold text-base flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                        0{item.step}
                      </span>
                      {idx < APPROACH_STEPS.length - 1 && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-aslan-charcoal group-hover:text-aslan-blue transition-colors pt-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-aslan-charcoal-muted leading-relaxed font-sans font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t border-slate-100 text-[11px] font-extrabold font-heading ${theme.text}`}>
                    Step 0{item.step} of 05
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};


