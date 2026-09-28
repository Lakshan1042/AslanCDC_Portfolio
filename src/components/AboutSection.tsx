import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-about-soft relative overflow-hidden">
      
      {/* Background Soft Organic Blobs */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-aslan-gold/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none"></div>

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
              {/* Main Image Frame with Soft Gold Border */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-aslan-gold/30 bg-white group">
                <img
                  src="/images/learning_session.png"
                  alt="Special education classroom with kidney activity table at Aslan Child Development Center"
                  className="w-full h-[360px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-52 h-36 sm:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white hidden sm:block p-1">
                <img
                  src="/images/aslan_wall_sign.png"
                  alt="Aslan Child Development Center illuminated emblem logo"
                  className="w-full h-full object-cover rounded-xl"
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
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-aslan-gold/20 border border-aslan-gold/40 text-xs font-extrabold uppercase tracking-wider text-aslan-charcoal font-heading">
              <Heart className="w-3.5 h-3.5 text-aslan-coral fill-aslan-coral/20" />
              <span>About Aslan</span>
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-aslan-charcoal leading-tight tracking-tight">
              A Supportive & <span className="text-gradient-gold">Nurturing Space</span> for Every Child
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-aslan-charcoal-muted leading-relaxed font-sans font-medium">
              At Aslan Child Development and Therapy Center, we provide specialized therapy and tailored educational support designed around your child’s individual needs in a calm, nurturing environment.
            </p>

            {/* Slogan Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-sky-50 to-emerald-50 border-l-4 border-aslan-gold text-sm sm:text-base font-heading font-bold text-aslan-charcoal leading-relaxed shadow-sm flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-aslan-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-aslan-blue text-xs uppercase font-extrabold tracking-wider mb-0.5">Our Promise</p>
                <p>"Despair turns into aspire — Every child has their own unique way of learning, communicating, and growing."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


