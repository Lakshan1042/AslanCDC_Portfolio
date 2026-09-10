import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Users, Smile, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ActivitiesSpotlightProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const ActivitiesSpotlight: React.FC<ActivitiesSpotlightProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          eyebrow="Social & Developmental Activities"
          title="Learn. Play. Connect. Grow."
          subtitle="Engaging, supportive group interactions designed to build peer social skills, emotional expression, teamwork, and confidence."
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Peer Social Play */}
          <div className="bg-aslan-cream rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card hover:shadow-aslan-hover transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-aslan-teal-soft text-aslan-teal flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-aslan-charcoal">
              Peer Play & Communication
            </h3>
            <p className="text-sm text-aslan-charcoal-muted leading-relaxed font-sans">
              Guided play circles where children practice sharing, turn-taking, active listening, and initiating positive interactions with peers.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-aslan-charcoal">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal"></span>
                Turn-taking & Sharing exercises
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal"></span>
                Joint attention & eye contact
              </li>
            </ul>
          </div>

          {/* Card 2: Emotional Regulation */}
          <div className="bg-aslan-cream rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card hover:shadow-aslan-hover transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-aslan-sage-soft text-aslan-teal flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-aslan-charcoal">
              Emotional Expression & Calm
            </h3>
            <p className="text-sm text-aslan-charcoal-muted leading-relaxed font-sans">
              Helping children recognize feelings, express emotions constructiveness, and practice calming strategies during group settings.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-aslan-charcoal">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal"></span>
                Emotion identification games
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal"></span>
                Self-regulation & coping tools
              </li>
            </ul>
          </div>

          {/* Card 3: Collaborative Teamwork */}
          <div className="bg-aslan-cream rounded-3xl p-8 border border-aslan-sage/20 shadow-aslan-card hover:shadow-aslan-hover transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-aslan-peach-soft text-aslan-teal flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-aslan-charcoal">
              Teamwork & Self-Confidence
            </h3>
            <p className="text-sm text-aslan-charcoal-muted leading-relaxed font-sans">
              Group art projects, rhythm activities, and obstacle challenges designed to build pride, resilience, and cooperative problem solving.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-aslan-charcoal">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal"></span>
                Collaborative group challenges
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aslan-teal"></span>
                Confidence & independence building
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            icon={ArrowRight}
            onClick={() => onOpenAppointment('Social & Developmental Activities')}
          >
            Explore Group Activities for Your Child
          </Button>
        </div>

      </div>
    </section>
  );
};
