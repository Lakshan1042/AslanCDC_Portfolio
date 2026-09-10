import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Activity, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface TherapySpotlightProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const TherapySpotlight: React.FC<TherapySpotlightProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          eyebrow="Specialized Therapy"
          title="Therapy Designed Around Your Child"
          subtitle="Empowering emotional, social, sensory, and cognitive development through specialized evidence-based therapy disciplines."
          className="mb-12"
        />

        {/* 2 Main Confirmed Services: Occupational Therapy & Speech Therapy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: Occupational Therapy */}
          <div className="bg-aslan-cream rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-aslan-teal text-white flex items-center justify-center shadow-aslan-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-aslan-teal">Clinical Therapy</span>
                  <h3 className="text-2xl font-bold font-heading text-aslan-charcoal">Occupational Therapy</h3>
                </div>
              </div>

              <p className="text-aslan-charcoal-muted leading-relaxed font-sans text-base">
                Occupational Therapy helps children develop essential fine and gross motor skills, sensory modulation, balance, hand-eye coordination, and self-care abilities so they can independently navigate daily home and school activities.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-charcoal">What We Address:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 text-sm text-aslan-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Sensory Processing:</strong> Helping children regulate responses to light, sound, touch, and movement.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-aslan-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Motor Skills & Handwriting:</strong> Building grip strength, posture control, and precise pencil control.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-aslan-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Daily Independence:</strong> Fostering self-dressing, feeding, and executive organization skills.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4 items-center">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenAppointment('Occupational Therapy')}
              >
                Book Occupational Therapy
              </Button>
            </div>
          </div>

          {/* Card 2: Speech & Language Therapy */}
          <div className="bg-aslan-cream rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-aslan-teal text-white flex items-center justify-center shadow-aslan-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-aslan-teal">Clinical Therapy</span>
                  <h3 className="text-2xl font-bold font-heading text-aslan-charcoal">Speech & Language Therapy</h3>
                </div>
              </div>

              <p className="text-aslan-charcoal-muted leading-relaxed font-sans text-base">
                Speech Therapy focuses on improving speech sound articulation, expressive vocabulary, comprehension of spoken language, and social pragmatic skills, enabling children to communicate expressively and connect with others.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-aslan-charcoal">What We Address:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 text-sm text-aslan-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Speech Articulation & Clarity:</strong> Helping children pronounce sounds clearly and confidently.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-aslan-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Language Comprehension:</strong> Enhancing sentence formation, vocabulary, and listening comprehension.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-aslan-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-aslan-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Social Communication:</strong> Nurturing eye contact, turn-taking in conversation, and peer communication.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4 items-center">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenAppointment('Speech & Language Therapy')}
              >
                Book Speech Therapy
              </Button>
            </div>
          </div>

        </div>

        {/* Photography Spotlight Banner */}
        <div className="mt-12 rounded-3xl bg-aslan-teal text-white p-8 md:p-12 relative overflow-hidden shadow-aslan-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-aslan-cream">
                Dedicated Therapy Environment
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Gentle, Individualized Therapy Sessions
              </h3>
              <p className="text-aslan-cream/90 text-sm md:text-base leading-relaxed font-sans">
                Every therapy session is structured around your child’s pace, integrating evidence-based interventions into engaging sensory play and interactive exercises.
              </p>
              <div className="pt-2">
                <Button
                  variant="accent"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => onOpenAppointment()}
                >
                  Schedule Initial Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src="/images/speech_session.png"
                alt="Speech Therapy Session at Aslan Center"
                className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-aslan-md border border-white/20"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
