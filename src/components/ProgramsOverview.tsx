import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Activity, MessageCircle, BookOpen, Users, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/contentData';

interface ProgramsOverviewProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({ onOpenAppointment }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-aslan-teal" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-aslan-teal" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-aslan-teal" />;
      case 'Users':
        return <Users className="w-6 h-6 text-aslan-teal" />;
      default:
        return <Activity className="w-6 h-6 text-aslan-teal" />;
    }
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-aslan-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          eyebrow="Core Offerings"
          title="Supporting Every Step of Development"
          subtitle="Comprehensive, structured developmental programs designed to foster communication, motor coordination, cognitive growth, and social interaction."
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow-aslan-card hover:shadow-aslan-hover transition-all duration-300 border border-aslan-sage/20 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-aslan-sage-soft border border-aslan-sage/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-aslan-cream text-aslan-teal border border-aslan-sage/20">
                    {service.category === 'therapy' ? 'Clinical Therapy' : service.category === 'education' ? 'Educational Support' : service.category === 'activities' ? 'Developmental Group' : 'Collaborative Care'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-aslan-charcoal mb-3 group-hover:text-aslan-teal transition-colors">
                  {service.title}
                </h3>

                <p className="text-aslan-charcoal-muted text-base leading-relaxed mb-6 font-sans">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-charcoal">Key Focus Areas:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-xs text-aslan-charcoal-muted gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-aslan-sage/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenAppointment(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold font-heading text-aslan-teal hover:text-aslan-teal-dark group/link"
                >
                  Book for {service.title}
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
