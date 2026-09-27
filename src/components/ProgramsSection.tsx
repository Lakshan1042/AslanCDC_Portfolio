import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRight, Stethoscope, GraduationCap, Users, Layers } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenAppointment: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenAppointment,
}) => {
  const programs = [
    {
      slug: 'specialized-therapy',
      num: '01',
      title: 'Specialized Therapy',
      description: 'Occupational Therapy and Speech & Language Therapy tailored to enhance sensory processing, motor coordination, communication clarity, and daily skills.',
      featured: true,
      tag: 'Core Discipline',
      icon: Stethoscope,
      badgeBg: 'bg-aslan-blue text-white',
      borderClass: 'border-aslan-blue/40 shadow-lg shadow-aslan-blue/10',
      numColor: 'text-aslan-blue',
      iconBg: 'bg-sky-50 text-aslan-blue',
    },
    {
      slug: 'specialized-education',
      num: '02',
      title: 'Specialized Education',
      description: 'Individualized learning plans focused on unique learning styles, strengthening academic confidence, attention span, and cognitive growth.',
      featured: false,
      icon: GraduationCap,
      badgeBg: 'bg-aslan-gold text-aslan-charcoal',
      borderClass: 'border-amber-200 hover:border-aslan-gold shadow-md hover:shadow-aslan-gold/20',
      numColor: 'text-aslan-gold-dark',
      iconBg: 'bg-amber-50 text-aslan-gold-dark',
    },
    {
      slug: 'social-developmental-activities',
      num: '03',
      title: 'Social & Developmental Activities',
      description: 'Structured group play and interactive sessions designed to build peer teamwork, emotional regulation, and social communication confidence.',
      featured: false,
      icon: Users,
      badgeBg: 'bg-aslan-mint text-white',
      borderClass: 'border-emerald-200 hover:border-aslan-mint shadow-md hover:shadow-aslan-mint/20',
      numColor: 'text-aslan-mint',
      iconBg: 'bg-emerald-50 text-aslan-mint',
    },
    {
      slug: 'occupational-therapy',
      num: '04',
      title: 'Multidisciplinary Support',
      description: 'Collaborative care co-developed by Occupational Therapists, Speech Therapists, and Special Educators for holistic, integrated progress.',
      featured: false,
      icon: Layers,
      badgeBg: 'bg-aslan-coral text-white',
      borderClass: 'border-rose-200 hover:border-aslan-coral shadow-md hover:shadow-aslan-coral/20',
      numColor: 'text-aslan-coral',
      iconBg: 'bg-rose-50 text-aslan-coral',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-programs-soft relative overflow-hidden">
      
      {/* Background Soft Organic Blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-aslan-gold/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <SectionHeading
          eyebrow="Programs & Services"
          title="Supporting Every Step of Development"
          className="mb-12"
        />

        {/* 4 Colorful Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group bg-white border-2 ${item.borderClass}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${item.iconBg} shadow-xs group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-base font-extrabold font-heading tracking-widest uppercase ${item.numColor}`}>
                        {item.num}
                      </span>
                    </div>
                    {item.tag && (
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${item.badgeBg} shadow-xs`}>
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-aslan-charcoal group-hover:text-aslan-blue transition-colors pt-2">
                    {item.title}
                  </h3>

                  <p className="text-base text-aslan-charcoal-muted leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={onOpenAppointment}
                    className={`inline-flex items-center gap-1.5 text-sm font-extrabold font-heading ${item.numColor} group-hover:underline`}
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
            );
          })}
        </div>

      </div>
    </section>
  );
};


