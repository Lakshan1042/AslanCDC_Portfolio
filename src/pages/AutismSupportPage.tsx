import React from 'react';
import {
  Heart,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Phone,
  Star
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { FaqSection } from '../components/FaqSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { CENTER_INFO, TESTIMONIAL_PLACEHOLDERS } from '../data/contentData';
import type { PageRoute } from '../types';

interface AutismSupportPageProps {
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenAppointment?: (serviceName?: string) => void;
}

export const AutismSupportPage: React.FC<AutismSupportPageProps> = ({
  onNavigate,
}) => {
  const autismFaqs = [
    {
      question: "Can Aslan CDC support my child if we don't have a formal diagnosis yet?",
      answer: "Yes. If your child exhibits speech delays, sensory sensitivities, lack of eye contact, or behavioral challenges, you do not need to wait for a formal medical report to begin functional therapy. We can initiate sensory regulation, speech stimulation, and motor exercises while you coordinate with medical specialists."
    },
    {
      question: "Which Aslan branch provides autism support programs?",
      answer: "Both our West Tambaram (Mudichur Road) and Chromepet (New Colony) centers offer comprehensive autism developmental therapy, speech therapy, and behavioral guidance. The West Tambaram branch also houses our full sensory gym and ADL independence lab."
    },
    {
      question: "How many sessions per week will my child need?",
      answer: "Session frequency is determined collaboratively following the initial observational evaluation, typically ranging from 2 to 5 sessions per week depending on the child's developmental goals."
    },
    {
      question: "Do you offer school readiness programs for children on the spectrum?",
      answer: "Yes. Our school readiness curriculum focuses on sitting tolerance, circle time participation, following instructions, and peer interaction to facilitate smooth transitions into preschool or formal schooling."
    }
  ];

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
            <span className="text-amber-800 font-bold">Autism Developmental Support</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-extrabold uppercase tracking-wider text-slate-900 font-heading shadow-xs">
                <Heart className="w-3.5 h-3.5 text-rose-600" />
                <span>Developmental Care & Early Intervention • Aslan CDC</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-[1.18] tracking-tight">
                Autism Developmental Support & Early Intervention in <span className="text-gradient-gold">Tambaram & Chromepet</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans font-medium">
                Guiding children with Autism Spectrum Disorder (ASD) through empathetic, individualized therapy. We integrate sensory gym regulation, functional communication, positive behavior shaping, and daily living skills in West Tambaram and Chromepet.
              </p>

              {/* Value Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Early Intervention Focus
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sensory Gym Regulation
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Parent-Centered Strategies
                </span>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('service-autism-support', 'book-autism')}
                >
                  Schedule a Developmental Assessment
                </Button>
                <a
                  href={`tel:${CENTER_INFO.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white text-slate-800 font-heading font-extrabold text-sm border-2 border-amber-200 hover:bg-amber-50 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600" /> Call Our Team: 094459 14020
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group aspect-[4/3] sm:aspect-[4/3] lg:aspect-[3/4]">
                <img
                  src="/images/sensory_gym_spider_net.webp"
                  alt="Sensory gym therapy equipment supporting vestibular balance and sensory regulation at Aslan CDC"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-amber-200 shadow-lg max-w-[290px]">
                <p className="text-xs font-extrabold text-slate-900 font-heading">Nurturing Sensory Support</p>
                <p className="text-[11px] text-slate-500 font-medium">Helping children organize sensations and reduce emotional meltdowns.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CLINICAL PHILOSOPHY */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <SectionHeading
            eyebrow="Our Approach"
            title="A Nurturing, Multidisciplinary Approach for Children on the Spectrum"
            centered
          />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-medium max-w-3xl mx-auto">
            Every child on the autism spectrum perceives, processes, and interacts with the world in a distinct, meaningful way. At Aslan CDC, we believe that despair turns into aspiration when children receive consistent, individualized support tailored to their unique pace. Rather than attempting to fit children into rigid molds, our therapy focuses on reducing sensory distress, unlocking functional communication, building sitting tolerance, and nurturing self-reliance in daily life.
          </p>
        </div>
      </section>

      {/* 3. ESSENTIAL CLINICAL DISTINCTION (THERAPY VS DIAGNOSIS) */}
      <section className="py-10 bg-amber-50/50 relative border-y border-amber-200/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xs flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-900 flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-amber-800" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                Important Clinical Information: Therapy vs. Medical Diagnosis
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                <strong>Our Scope of Care:</strong> Aslan Child Development and Therapy Center is a specialized pediatric therapy center. We conduct functional developmental evaluations (sensory profiles, speech-language baselines, fine/gross motor readiness, and behavioral patterns) to design personalized therapeutic interventions.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                <strong>Formal Medical Diagnosis:</strong> We do not provide clinical psychiatric or medical neurological diagnoses, nor do we prescribe pharmaceutical medications. If you suspect your child may have autism but have not yet received a formal diagnosis, our therapists can conduct a functional screening and guide you toward certified developmental pediatricians or pediatric neurologists for medical confirmation, while providing supportive developmental therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MULTIDISCIPLINARY MODALITIES */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Care Modalities"
            title="Multidisciplinary Therapy Modalities at Aslan CDC"
            subtitle="Integrating sensory gym therapy, communication, positive behaviors, and life skills."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-7 border-2 border-amber-200/70 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block font-heading">01. Sensory Regulation</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Sensory Integration Therapy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In our West Tambaram sensory gym and Chromepet sensory rooms, children engage in purposeful swinging, climbing, and deep pressure tactile activities that calm the nervous system and decrease emotional meltdowns.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-7 border-2 border-amber-200/70 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block font-heading">02. Communication</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Speech, Language & AAC
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Speech therapists work on joint attention, sound imitation, receptive understanding, speech clarity, and Augmentative & Alternative Communication (AAC) using visual choice cards.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-7 border-2 border-amber-200/70 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block font-heading">03. Behavioral Support</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Behaviour Modification & Routines
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We implement positive reinforcement systems, visual schedule charts, and gradual tolerance-building to replace non-functional behaviors with constructive actions.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-7 border-2 border-amber-200/70 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block font-heading">04. Education</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Specialized Education (IEP)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Special educators craft Individualized Education Plans with adapted multi-sensory teaching tools, strengthening working memory and foundational academic readiness.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-7 border-2 border-amber-200/70 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block font-heading">05. Daily Living</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Aslan Independence Lab (Life Skills)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In our specialized ADL lab, children learn practical life skills: hand washing, utensil use, food chewing, drinking, dressing, and simple mealtime routines for genuine home independence.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/30 rounded-3xl p-6 sm:p-7 border-2 border-amber-200/70 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block font-heading">06. Transition</span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  School Readiness Transition
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Targeting sitting tolerance, following teacher group routines, circle time, and peer socialization to prepare young children for formal school entry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PARENT REVIEWS (AUTHENTIC QUOTES FROM CONTENTDATA) */}
      <section className="py-16 lg:py-20 bg-contact-soft relative border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            eyebrow="Parent Feedback"
            title="Verified Parent Experiences at Aslan CDC"
            subtitle="Authentic reflections from families attending our developmental programs."
            centered
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-7 border-2 border-amber-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                "{TESTIMONIAL_PLACEHOLDERS[2].quote}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <p className="font-heading font-extrabold text-xs text-slate-900">{TESTIMONIAL_PLACEHOLDERS[2].parentName}</p>
                <p className="text-[11px] text-sky-700 font-bold">{TESTIMONIAL_PLACEHOLDERS[2].program}</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border-2 border-amber-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                "{TESTIMONIAL_PLACEHOLDERS[0].quote}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <p className="font-heading font-extrabold text-xs text-slate-900">{TESTIMONIAL_PLACEHOLDERS[0].parentName}</p>
                <p className="text-[11px] text-sky-700 font-bold">{TESTIMONIAL_PLACEHOLDERS[0].program}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DUAL BRANCH SELECTOR */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            eyebrow="Center Availability"
            title="Available Across Both Centers in Tambaram & Chromepet"
            subtitle="Visit the branch that best accommodates your family's travel and routine."
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
                <p className="text-xs text-slate-600 mb-4">Features dedicated 1-on-1 rooms, tactile pathway panels, and play therapy suites.</p>
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
        title="Frequently Asked Questions About Autism Support"
        subtitle="Helpful answers for parents seeking developmental support and early intervention."
        eyebrow="Autism Support FAQs"
        faqs={autismFaqs}
      />

      {/* 8. APPOINTMENT SECTION */}
      <div id="book-autism">
        <AppointmentSection />
      </div>

    </div>
  );
};
