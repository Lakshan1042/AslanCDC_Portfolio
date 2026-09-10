import React from 'react';
import { SectionHeading } from './SectionHeading';
import { APPROACH_STEPS } from '../data/contentData';
import { MessageSquare, Search, ClipboardList, HeartHandshake, TrendingUp } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <MessageSquare className="w-5 h-5" />;
      case 2:
        return <Search className="w-5 h-5" />;
      case 3:
        return <ClipboardList className="w-5 h-5" />;
      case 4:
        return <HeartHandshake className="w-5 h-5" />;
      case 5:
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <section id="approach" className="py-16 md:py-24 bg-aslan-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        <SectionHeading
          eyebrow="Developmental Methodology"
          title="A Journey Designed Around Your Child"
          subtitle="Our 5-step collaborative process ensures your child receives compassionate, structured, and goal-directed care every step of the way."
          centered
          className="mb-16"
        />

        {/* 5 Steps Layout */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-aslan-sage/30 -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {APPROACH_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 border border-aslan-sage/20 shadow-aslan-card hover:shadow-aslan-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-2xl bg-aslan-teal text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-aslan-sm">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-aslan-sage-soft text-aslan-teal group-hover:scale-110 transition-transform">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-aslan-charcoal mb-1 group-hover:text-aslan-teal transition-colors">
                    {item.title}
                  </h3>

                  <h4 className="text-xs font-semibold text-aslan-teal mb-3">
                    {item.subtitle}
                  </h4>

                  <p className="text-xs text-aslan-charcoal-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-aslan-sage/10 text-[11px] font-semibold text-aslan-charcoal-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-aslan-peach"></span>
                  Step {item.step} of 5
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassuring Parent Callout */}
        <div className="mt-14 p-6 md:p-8 rounded-3xl bg-white border border-aslan-sage/30 shadow-aslan-sm max-w-4xl mx-auto text-center space-y-3">
          <h4 className="text-lg md:text-xl font-bold font-heading text-aslan-charcoal">
            Family-Centered Collaboration at Every Step
          </h4>
          <p className="text-sm text-aslan-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            We actively involve parents after every session with actionable insights and home strategies, ensuring progress is reinforced seamlessly across everyday activities.
          </p>
        </div>

      </div>
    </section>
  );
};
