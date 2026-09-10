import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Heart, Compass, Smile, Shield } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Welcome to Aslan"
              title="A Supportive Space for Every Child"
              subtitle="Providing thoughtful therapy, tailored education, and reassuring developmental guidance for families in West Tambaram, Chennai."
            />

            <div className="space-y-4 text-aslan-charcoal-muted leading-relaxed text-base font-sans">
              <p>
                At <strong className="text-aslan-teal font-semibold">Aslan Child Development Center</strong>, we believe every child possesses unique strengths and deserves a nurturing environment to learn, express, and thrive.
              </p>
              <p>
                Located on Mudichur Road, West Tambaram, our center brings together specialized therapy and tailored educational support designed specifically around the natural pace of your child. We collaborate closely with parents and caregivers to create a calm, empowering space where every developmental step is supported with warmth and clinical expertise.
              </p>
            </div>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-aslan-cream border border-aslan-sage/20 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-aslan-teal-soft text-aslan-teal flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-aslan-charcoal text-base">Child-Centered Philosophy</h4>
                <p className="text-xs text-aslan-charcoal-muted leading-normal">
                  Programs tailored around individual learning styles and sensory comfort rather than rigid templates.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-aslan-cream border border-aslan-sage/20 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-aslan-sage-soft text-aslan-teal flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-aslan-charcoal text-base">Parent Guidance</h4>
                <p className="text-xs text-aslan-charcoal-muted leading-normal">
                  Empowering parents with clear feedback and home practices to sustain progress across daily routines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-aslan-cream border border-aslan-sage/20 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-aslan-peach-soft text-aslan-teal flex items-center justify-center">
                  <Smile className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-aslan-charcoal text-base">Sensory-Friendly Space</h4>
                <p className="text-xs text-aslan-charcoal-muted leading-normal">
                  Calm, well-lit therapy rooms designed to reduce anxiety and promote focused engagement.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-aslan-cream border border-aslan-sage/20 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-aslan-teal-soft text-aslan-teal flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-aslan-charcoal text-base">Professional Standards</h4>
                <p className="text-xs text-aslan-charcoal-muted leading-normal">
                  Qualified Occupational Therapists, Speech Therapists, and Special Educators working collaboratively.
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-aslan-md border border-aslan-sage/20 bg-aslan-cream p-3">
                <img
                  src="/images/center_interior.png"
                  alt="Inside Aslan Child Development Center consultation area"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-aslan-teal text-white space-y-1 text-center shadow-aslan-sm">
                <p className="font-heading font-semibold text-sm">
                  Visit Us in West Tambaram, Chennai
                </p>
                <p className="text-xs text-aslan-cream/80">
                  2nd Floor, Sha Complex, Mudichur Road • Open Mon – Sat (9 AM – 8 PM)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
