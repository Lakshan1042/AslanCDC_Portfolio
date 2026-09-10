import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ENVIRONMENT_GALLERY } from '../data/contentData';

export const TeamEnvironmentSection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 lg:py-24 bg-aslan-cream relative overflow-hidden">
      
      {/* Organic Background Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-aslan-sage/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-aslan-peach/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <SectionHeading
          eyebrow="Inside Aslan"
          title="A Warm & Nurturing Environment"
          subtitle="A warm and supportive environment where children can learn, connect and grow."
          className="mb-12"
        />

        {/* Asymmetrical Editorial Composition (6 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Item 1: Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group h-[380px] lg:h-[440px]"
          >
            <img
              src={ENVIRONMENT_GALLERY[0].src}
              alt={ENVIRONMENT_GALLERY[0].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-6 flex items-end">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-aslan-teal backdrop-blur-md font-heading">
                {ENVIRONMENT_GALLERY[0].tag}
              </span>
            </div>
          </motion.div>

          {/* Item 2 & 3: 2 Stacked Smaller Images */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group h-[180px] lg:h-[210px]"
            >
              <img
                src={ENVIRONMENT_GALLERY[1].src}
                alt={ENVIRONMENT_GALLERY[1].alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-4 flex items-end">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-aslan-teal backdrop-blur-md font-heading">
                  {ENVIRONMENT_GALLERY[1].tag}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group h-[180px] lg:h-[210px]"
            >
              <img
                src={ENVIRONMENT_GALLERY[2].src}
                alt={ENVIRONMENT_GALLERY[2].alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-4 flex items-end">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-aslan-teal backdrop-blur-md font-heading">
                  {ENVIRONMENT_GALLERY[2].tag}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Items 4, 5, 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group h-[260px] lg:h-[290px]"
          >
            <img
              src={ENVIRONMENT_GALLERY[3].src}
              alt={ENVIRONMENT_GALLERY[3].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-5 flex items-end">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-aslan-teal backdrop-blur-md font-heading">
                {ENVIRONMENT_GALLERY[3].tag}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group h-[260px] lg:h-[290px]"
          >
            <img
              src={ENVIRONMENT_GALLERY[4].src}
              alt={ENVIRONMENT_GALLERY[4].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-5 flex items-end">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-aslan-teal backdrop-blur-md font-heading">
                {ENVIRONMENT_GALLERY[4].tag}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white group h-[260px] lg:h-[290px]"
          >
            <img
              src={ENVIRONMENT_GALLERY[5].src}
              alt={ENVIRONMENT_GALLERY[5].alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-5 flex items-end">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-aslan-teal backdrop-blur-md font-heading">
                {ENVIRONMENT_GALLERY[5].tag}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
