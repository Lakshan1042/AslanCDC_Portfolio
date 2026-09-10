import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/contentData';
import { Quote, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIAL_PLACEHOLDERS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIAL_PLACEHOLDERS.length) % TESTIMONIAL_PLACEHOLDERS.length);
  };

  const current = TESTIMONIAL_PLACEHOLDERS[activeIndex];

  return (
    <section className="py-16 md:py-20 bg-[#FDF4F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        <SectionHeading
          eyebrow="Parent Experiences"
          title="Stories of Growth"
          centered
          className="mb-8"
        />

        {/* Compact Featured Testimonial Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-10 border border-aslan-sage/20 shadow-aslan-card relative space-y-6"
        >
          <div className="flex items-center justify-between">
            <Quote className="w-10 h-10 text-aslan-peach fill-aslan-peach" />
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-aslan-sage-soft text-aslan-teal text-xs font-semibold">
              <Info className="w-3.5 h-3.5" />
              <span>Placeholder Story</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-aslan-charcoal leading-relaxed font-sans italic">
            "{current.quote}"
          </p>

          <div className="pt-4 border-t border-aslan-sage/10 flex items-center justify-between">
            <div>
              <h4 className="font-heading font-bold text-aslan-charcoal text-base">
                {current.parentName}
              </h4>
              <p className="text-xs text-aslan-teal font-medium font-heading">
                {current.program}
              </p>
            </div>

            {/* Subtle Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-aslan-sage/30 text-aslan-charcoal hover:bg-aslan-cream transition-colors"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-aslan-sage/30 text-aslan-charcoal hover:bg-aslan-cream transition-colors"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
