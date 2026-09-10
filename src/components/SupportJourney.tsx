import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { APPROACH_STEPS } from '../data/contentData';
import { ArrowRight } from 'lucide-react';

export const SupportJourney: React.FC = () => {
  return (
    <section id="how-we-help" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background Soft Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-aslan-sage/5 rounded-full blur-3xl pointer-events-none"></div>

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
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-aslan-sage/30 -translate-y-10 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {APPROACH_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-aslan-cream rounded-3xl p-6 border border-aslan-sage/20 shadow-aslan-card hover:shadow-aslan-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-aslan-teal text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-aslan-sm group-hover:scale-105 transition-transform">
                      0{item.step}
                    </span>
                    {idx < APPROACH_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-aslan-teal/30" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-aslan-charcoal group-hover:text-aslan-teal transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-aslan-charcoal-muted leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-aslan-sage/10 text-[11px] font-semibold text-aslan-teal font-heading">
                  Step 0{item.step} of 05
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
