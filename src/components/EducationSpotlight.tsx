import React from 'react';
import { SectionHeading } from './SectionHeading';
import { BookOpen, Sparkles, Target, Brain, Award } from 'lucide-react';
import { Button } from './Button';

interface EducationSpotlightProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const EducationSpotlight: React.FC<EducationSpotlightProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 md:py-24 bg-aslan-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Specialized Education"
              title="Learning That Starts With the Child"
              subtitle="Tailored educational strategies that focus on individual learning styles, promoting academic confidence, focus, and personal growth."
            />

            <p className="text-aslan-charcoal-muted leading-relaxed text-base font-sans">
              Traditional classroom settings may not always accommodate a child's unique pace or sensory needs. Our specialized educational support adapts teaching methodologies to align with how your child best processes information.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-aslan-sage/20 shadow-aslan-sm">
                <div className="p-3 rounded-xl bg-aslan-teal-soft text-aslan-teal flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-aslan-charcoal text-base">Individualized Education Plans (IEP)</h4>
                  <p className="text-xs text-aslan-charcoal-muted leading-relaxed">
                    Customized learning goals tailored to your child's specific developmental stage, strengthening foundational literacy, numeracy, and problem-solving skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-aslan-sage/20 shadow-aslan-sm">
                <div className="p-3 rounded-xl bg-aslan-sage-soft text-aslan-teal flex-shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-aslan-charcoal text-base">Attention & Cognitive Skill Building</h4>
                  <p className="text-xs text-aslan-charcoal-muted leading-relaxed">
                    Structured exercises that enhance attention span, task completion, working memory, and logical processing without overwhelming the child.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-aslan-sage/20 shadow-aslan-sm">
                <div className="p-3 rounded-xl bg-aslan-peach-soft text-aslan-teal flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-aslan-charcoal text-base">School Readiness & Adaptations</h4>
                  <p className="text-xs text-aslan-charcoal-muted leading-relaxed">
                    Preparing children for mainstream or adapted academic environments by building classroom routines, self-advocacy, and learning independence.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                icon={BookOpen}
                onClick={() => onOpenAppointment('Specialized Education')}
              >
                Inquire About Specialized Education
              </Button>
            </div>

          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card relative space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-aslan-peach/40 text-aslan-teal flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-aslan-teal" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-aslan-charcoal">
                Every Learning Journey is Unique
              </h3>

              <p className="text-sm text-aslan-charcoal-muted leading-relaxed">
                By combining multi-sensory learning tools with gentle encouragement, we help children overcome learning hurdles and rediscover the joy of discovery.
              </p>

              <div className="p-5 rounded-2xl bg-aslan-cream border border-aslan-sage/20 space-y-3 text-xs text-aslan-charcoal">
                <div className="flex justify-between items-center font-semibold">
                  <span>Structured Pace</span>
                  <span className="text-aslan-teal">1-on-1 Focus</span>
                </div>
                <div className="w-full bg-aslan-sage/20 rounded-full h-2">
                  <div className="bg-aslan-teal h-2 rounded-full w-4/5"></div>
                </div>
                <p className="text-[11px] text-aslan-charcoal-muted">
                  Learning plans are adjusted dynamically as the child reaches milestones.
                </p>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs font-semibold text-aslan-teal">
                  Consultation available Monday – Saturday
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
