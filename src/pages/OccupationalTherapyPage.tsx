import React from 'react';
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { FaqSection } from '../components/FaqSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { CENTER_INFO } from '../data/contentData';
import { OCCUPATIONAL_THERAPY_FAQS } from '../data/faqsData';
import type { PageRoute } from '../types';

interface OccupationalTherapyPageProps {
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenAppointment?: (serviceName?: string) => void;
}

export const OccupationalTherapyPage: React.FC<OccupationalTherapyPageProps> = ({
  onNavigate,
}) => {
  const otFaqs = OCCUPATIONAL_THERAPY_FAQS;

  return (
    <div className="bg-aslan-cream text-aslan-charcoal font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 bg-hero-soft relative overflow-hidden border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-heading font-semibold text-slate-500">
            <button onClick={() => onNavigate('home')} className="hover:text-sky-700 transition-colors">Home</button>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-amber-800 font-bold">Occupational Therapy</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-extrabold uppercase tracking-wider text-slate-900 font-heading shadow-xs">
                <Activity className="w-3.5 h-3.5 text-amber-700" />
                <span>Specialized Pediatric Therapy • Aslan CDC</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-[1.18] tracking-tight">
                Pediatric Occupational Therapy in <span className="text-gradient-gold">Tambaram & Chromepet</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans font-medium">
                Empowering children to build motor coordination, sensory balance, handwriting confidence, and everyday self-care skills through structured, play-based occupational therapy in our specialized therapy rooms and sensory gym.
              </p>

              {/* Value Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fine Motor & Handwriting
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sensory Integration Gym
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ADL Independence Lab
                </span>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('service-occupational-therapy', 'book-ot')}
                >
                  Schedule an OT Assessment
                </Button>
                <a
                  href={`tel:${CENTER_INFO.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white text-slate-800 font-heading font-extrabold text-sm border-2 border-amber-200 hover:bg-amber-50 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600" /> Speak with Our Team
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group aspect-[4/3] sm:aspect-[4/3] lg:aspect-[3/4]">
                <img
                  src="/images/sensory_gym_side.webp"
                  alt="Occupational therapy motor equipment, climbing ladder, and trampoline at Aslan Child Development Center"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-amber-200 shadow-lg max-w-[280px]">
                <p className="text-xs font-extrabold text-slate-900 font-heading">Sensory-Motor Integration</p>
                <p className="text-[11px] text-slate-500 font-medium">Play-based therapy designed around each child's natural pace.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CORE PHILOSOPHY */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <SectionHeading
            eyebrow="Clinical Philosophy"
            title="Supporting Your Child's Independence, Coordination & Daily Life Skills"
            centered
          />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-medium max-w-3xl mx-auto">
            For a child, "occupation" refers to everyday activities: playing, holding a pencil, tying shoelaces, buttoning clothes, sitting attentively at a desk, and navigating sensory surroundings without feeling overwhelmed. At Aslan CDC, our pediatric occupational therapists identify underlying sensory-motor challenges and guide children through joyful, structured therapeutic activities that build real-world confidence.
          </p>
        </div>
      </section>

      {/* 3. DEVELOPMENTAL SIGNS */}
      <section className="py-16 lg:py-20 bg-contact-soft relative border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Observational Indicators"
            title="Developmental Signs That May Benefit from Occupational Therapy"
            subtitle="Common everyday indicators that pediatric occupational therapy can address effectively."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2 font-heading">01. Fine Motor</span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">Handwriting & Pencil Grasp</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Awkward pencil grasp, premature hand fatigue during writing, difficulty using scissors, or struggling to manipulate small puzzle pieces.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2 font-heading">02. Gross Motor</span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">Balance & Body Posture</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Frequent tripping or clumsiness, difficulty climbing stairs, slumping posture when seated at a desk, or poor two-hand coordination.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2 font-heading">03. Sensory Processing</span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">Sensory Regulation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extreme sensitivity to loud sounds, distress with clothing tags or messy textures, or intense sensory-seeking behavior (constant crashing, jumping).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2 font-heading">04. Everyday Routines</span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">Self-Care Independence</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Relying heavily on parents for self-feeding, brushing, buttoning, or packing school bags past typical age milestones.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY INTERVENTION PILLARS */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Core Interventions"
            title="Key Areas of Occupational Therapy Intervention at Aslan"
            subtitle="Tailored clinical modalities delivered in dedicated sensory gyms and therapy suites."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            <div className="p-8 rounded-3xl bg-amber-50/40 border-2 border-amber-200/80 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Sensory Integration in Our Dedicated Sensory Gym
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                In our West Tambaram sensory gym, children interact with suspended bolster swings, spider climbing nets, and balance platforms. These purposeful movements organize the vestibular and proprioceptive nervous systems, reducing anxiety and improving emotional self-regulation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-amber-50/40 border-2 border-amber-200/80 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Aslan Independence Lab (ADL Life Skills)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Our custom Independence Lab simulates real-world home environments — kitchen countertops, laundry sorting, and table setting. Children practice functional daily living skills step-by-step to gain genuine self-reliance at home and in school.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-amber-50/40 border-2 border-amber-200/80 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Fine Motor Mastery & Handwriting Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Targeting finger arch strength, pincer grasp, hand-eye coordination, and visual-spatial orientation. We help children transition from clumsy grasps to comfortable, legible handwriting without hand fatigue.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-amber-50/40 border-2 border-amber-200/80 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Motor Planning & Bilateral Coordination
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Guiding children to sequence multi-step motor actions smoothly — such as jumping, catching a ball, cutting with scissors, and stabilizing paper with one hand while writing with the other.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 5-STEP CLINICAL PROCESS */}
      <section className="py-16 lg:py-20 bg-programs-soft relative border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="The Aslan Pathway"
            title="The 5-Step Occupational Therapy Process"
            subtitle="A transparent, collaborative journey designed around your child's natural learning pace."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Understand', desc: 'Listening deeply to parent observations and daily family routines.' },
              { step: '02', title: 'Assess', desc: 'Functional observational assessment of sensory thresholds and fine/gross motor skills.' },
              { step: '03', title: 'Plan', desc: 'Co-creating a personalized roadmap with clear, achievable milestone goals.' },
              { step: '04', title: 'Support', desc: 'Engaging, play-based clinical sessions in our therapy rooms and sensory gym.' },
              { step: '05', title: 'Grow', desc: 'Empowering parents with practical home routines to transition skills into everyday life.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border-2 border-amber-200/70 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black font-heading text-amber-600 tracking-wider block mb-2">{item.step}</span>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUAL BRANCH SELECTOR */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            eyebrow="Available Centers"
            title="Available Across Both Centers in Tambaram & Chromepet"
            subtitle="Choose the location most convenient for your family's weekly schedule."
            centered
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-amber-50/50 border-2 border-amber-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 font-heading block mb-1">Flagship Main Center</span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">West Tambaram (Mudichur Rd)</h3>
                <p className="text-xs text-slate-600 mb-4">Features the full sensory gym, spider climbing net, and ADL Independence Lab.</p>
              </div>
              <button
                onClick={() => onNavigate('location-west-tambaram')}
                className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>View West Tambaram Branch</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/50 border-2 border-amber-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 font-heading block mb-1">Quiet New Colony Center</span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">Chromepet (New Colony)</h3>
                <p className="text-xs text-slate-600 mb-4">Features dedicated 1-on-1 fine motor rooms, tactile pathway panels, and play therapy suites.</p>
              </div>
              <button
                onClick={() => onNavigate('location-chromepet')}
                className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>View Chromepet Branch</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <FaqSection
        title="Frequently Asked Questions About Occupational Therapy"
        subtitle="Common questions from parents about session structures, age suitability, and therapy outcomes."
        eyebrow="Occupational Therapy FAQs"
        faqs={otFaqs}
      />

      {/* 8. APPOINTMENT SECTION */}
      <div id="book-ot">
        <AppointmentSection />
      </div>

    </div>
  );
};
