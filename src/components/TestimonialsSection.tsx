import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/contentData';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIAL_PLACEHOLDERS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIAL_PLACEHOLDERS.length) % TESTIMONIAL_PLACEHOLDERS.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Auto-play timer (5 seconds), pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextTestimonial]);

  const current = TESTIMONIAL_PLACEHOLDERS[activeIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section className="py-20 md:py-24 bg-[#FDF4F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow="Parent Experiences"
          title="Stories of Growth & Progress"
          subtitle="Real reviews from parents whose children attend Aslan Child Development Center."
          centered
          className="mb-12"
        />

        {/* Carousel Card Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-aslan-sage/20 shadow-aslan-card relative space-y-6"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-aslan-teal/10 text-aslan-teal text-xs font-semibold">
                  <span>Verified Parent Review</span>
                </div>
              </div>

              {/* Quote Text */}
              <div className="relative">
                <Quote className="w-12 h-12 text-aslan-peach/30 absolute -top-4 -left-3 -z-1" />
                <p className="text-base sm:text-xl text-aslan-charcoal leading-relaxed font-sans italic relative z-10">
                  "{current.quote}"
                </p>
              </div>

              {/* Footer inside card */}
              <div className="pt-4 border-t border-aslan-sage/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-aslan-charcoal text-base sm:text-lg">
                    {current.parentName}
                  </h4>
                  <p className="text-xs sm:text-sm text-aslan-teal font-semibold font-heading">
                    {current.program}
                  </p>
                </div>

                {/* Counter Badge */}
                <span className="text-xs text-aslan-charcoal-muted font-medium bg-aslan-cream px-3 py-1 rounded-full border border-aslan-sage/20 font-sans">
                  {activeIndex + 1} of {TESTIMONIAL_PLACEHOLDERS.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white border border-aslan-sage/30 text-aslan-charcoal hover:bg-aslan-teal hover:text-white hover:border-aslan-teal transition-all shadow-sm focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIAL_PLACEHOLDERS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-aslan-teal'
                    : 'w-2.5 bg-aslan-sage/40 hover:bg-aslan-teal/40'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white border border-aslan-sage/30 text-aslan-charcoal hover:bg-aslan-teal hover:text-white hover:border-aslan-teal transition-all shadow-sm focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

