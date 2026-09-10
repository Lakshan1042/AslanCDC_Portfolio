import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background Soft Organic Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-aslan-sage/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Asymmetric Dual-Image Composition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-aslan-cream group">
                <img
                  src="/images/center_interior.png"
                  alt="Inside Aslan Child Development Center consultation area"
                  className="w-full h-[360px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Small Secondary Detail Frame */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-52 h-36 sm:h-40 rounded-2xl overflow-hidden shadow-aslan-hover border-4 border-white bg-white hidden sm:block">
                <img
                  src="/images/sensory_room.png"
                  alt="Sensory equipment detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-aslan-teal font-heading">
              About Aslan
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-aslan-charcoal leading-tight tracking-tight">
              A Supportive Space for Every Child
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-aslan-charcoal-muted leading-relaxed font-sans font-normal">
              At Aslan Child Development Center, we provide specialized therapy and tailored educational support designed around your child’s individual needs in a calm, nurturing environment.
            </p>

            {/* Short Qualitative Callout Box */}
            <div className="p-4 rounded-2xl bg-aslan-cream border-l-4 border-aslan-teal text-xs sm:text-sm font-heading font-semibold text-aslan-charcoal leading-relaxed">
              "Every child has their own way of learning, communicating and growing."
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
