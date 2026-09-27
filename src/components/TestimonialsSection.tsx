import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/contentData';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
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
    <section className="py-20 md:py-24 bg-testimonials-soft relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-aslan-gold/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow="Parent Experiences"
          title="Stories of Growth & Progress"
          subtitle="Real reviews from parents whose children attend Aslan Child Development and Therapy Center."
          centered
          className="mb-12"
        />

        {/* Fixed Height Container to Guarantee Zero Page Layout Shift */}
        <div
          className="relative h-[340px] sm:h-[280px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-4 border-amber-100 shadow-xl absolute inset-0 w-full h-full flex flex-col justify-between"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between gap-4 flex-shrink-0">
                <div className="flex items-center gap-1 text-aslan-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-aslan-gold text-aslan-gold drop-shadow-xs" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-aslan-charcoal border border-aslan-gold/40 text-xs font-extrabold font-heading shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-aslan-gold animate-pulse" />
                  <span>Verified Parent Review</span>
                </div>
              </div>

              {/* Quote Text Container - Vertically Centered */}
              <div className="relative my-auto flex-grow flex items-center px-1 py-2">
                <Quote className="w-12 h-12 text-aslan-gold/25 absolute -top-4 -left-3 -z-1" />
                <p className="text-sm sm:text-base md:text-lg text-aslan-charcoal leading-relaxed font-sans italic font-medium relative z-10">
                  "{current.quote}"
                </p>
              </div>

              {/* Footer inside card */}
              <div className="pt-3 sm:pt-4 border-t border-amber-100 flex items-center justify-between gap-4 flex-shrink-0">
                <div>
                  <h4 className="font-heading font-extrabold text-aslan-charcoal text-base">
                    {current.parentName}
                  </h4>
                  <p className="text-xs text-aslan-blue font-bold font-heading">
                    {current.program}
                  </p>
                </div>

                {/* Counter Badge */}
                <span className="text-xs text-aslan-charcoal font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-sans flex-shrink-0">
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
            className="p-3 rounded-full bg-white border border-amber-200 text-aslan-charcoal hover:bg-aslan-gold hover:border-aslan-gold transition-all shadow-md focus:outline-none hover:scale-105"
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
                    ? 'w-8 bg-aslan-gold'
                    : 'w-2.5 bg-amber-200 hover:bg-aslan-gold/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white border border-amber-200 text-aslan-charcoal hover:bg-aslan-gold hover:border-aslan-gold transition-all shadow-md focus:outline-none hover:scale-105"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};



