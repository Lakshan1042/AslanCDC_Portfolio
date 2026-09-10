import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenAppointment: () => void;
  onSelectServiceDetail?: (slug: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenAppointment,
  onSelectServiceDetail,
}) => {
  const programs = [
    {
      slug: 'specialized-therapy',
      num: '01',
      title: 'Specialized Therapy',
      description: 'Occupational Therapy and Speech & Language Therapy tailored to enhance sensory processing, motor coordination, communication clarity, and daily skills.',
      featured: true,
      tag: 'Core Discipline',
    },
    {
      slug: 'specialized-education',
      num: '02',
      title: 'Specialized Education',
      description: 'Individualized learning plans focused on unique learning styles, strengthening academic confidence, attention span, and cognitive growth.',
      featured: false,
    },
    {
      slug: 'social-developmental-activities',
      num: '03',
      title: 'Social & Developmental Activities',
      description: 'Structured group play and interactive sessions designed to build peer teamwork, emotional regulation, and social communication confidence.',
      featured: false,
    },
    {
      slug: 'occupational-therapy',
      num: '04',
      title: 'Multidisciplinary Support',
      description: 'Collaborative care co-developed by Occupational Therapists, Speech Therapists, and Special Educators for holistic, integrated progress.',
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#FCFAF6] relative overflow-hidden">
      
      {/* Background Soft Organic Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-aslan-peach/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <SectionHeading
          eyebrow="Programs & Services"
          title="Supporting Every Step of Development"
          className="mb-12"
        />

        {/* 4 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group ${
                item.featured
                  ? 'bg-white border-2 border-aslan-teal/40 shadow-aslan-hover relative'
                  : 'bg-white border border-aslan-sage/20 shadow-aslan-card hover:shadow-aslan-hover'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-aslan-teal font-heading tracking-widest uppercase">
                    {item.num}
                  </span>
                  {item.tag && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-aslan-teal text-white shadow-aslan-sm">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold font-heading text-aslan-charcoal group-hover:text-aslan-teal transition-colors">
                  {item.title}
                </h3>

                <p className="text-base text-aslan-charcoal-muted leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-aslan-sage/10 flex items-center justify-between">
                {onSelectServiceDetail ? (
                  <button
                    onClick={() => onSelectServiceDetail(item.slug)}
                    className="inline-flex items-center gap-1 text-xs font-semibold font-heading text-aslan-charcoal-muted hover:text-aslan-teal transition-colors"
                  >
                    <span>Read Program Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : <span />}

                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-heading text-aslan-teal group-hover:underline"
                >
                  <span>Book Appointment</span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
