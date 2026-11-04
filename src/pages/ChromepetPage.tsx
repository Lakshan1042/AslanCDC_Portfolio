import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  CheckCircle2,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { FaqSection } from '../components/FaqSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { CENTER_INFO } from '../data/contentData';
import type { PageRoute } from '../types';

interface ChromepetPageProps {
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenAppointment?: (serviceName?: string) => void;
}

export const ChromepetPage: React.FC<ChromepetPageProps> = ({
  onNavigate,
}) => {
  const branch = CENTER_INFO.branches.find(b => b.id === 'chromepet-branch') || CENTER_INFO.branches[1];

  const chromepetFaqs = [
    {
      question: "Which neighborhoods are served by the Chromepet center?",
      answer: "Our Chromepet branch primarily serves families living in Chromepet, New Colony, Hasthinapuram, Radha Nagar, Pallavaram, Nemilichery, and surrounding southern Chennai suburbs."
    },
    {
      question: "How do I schedule an appointment for my child at the Chromepet branch?",
      answer: "You can schedule an appointment by submitting the appointment form on this page or by contacting our team directly at 9445914020. Our care coordinator will schedule an initial observational consultation."
    },
    {
      question: "What should we bring to the initial consultation?",
      answer: "Please bring any previous developmental reports, pediatrician observation notes, and school feedback, along with a note of your personal observations regarding your child's daily routines."
    },
    {
      question: "How does the Chromepet branch differ from the West Tambaram branch?",
      answer: "Both centers deliver professional occupational therapy, speech therapy, and special education. Our West Tambaram main branch additionally houses our full sensory gym and life-skills independence lab, while Chromepet offers focused, quiet 1-on-1 cubicles and early play therapy rooms."
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
            <span className="text-slate-400">Locations</span>
            <span>/</span>
            <span className="text-amber-800 font-bold">Chromepet</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-extrabold uppercase tracking-wider text-slate-900 font-heading shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Aslan CDC • Chromepet Branch</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-[1.18] tracking-tight">
                Child Development and Therapy Center in <span className="text-gradient-gold">Chromepet, Chennai</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans font-medium">
                Located in peaceful New Colony, Chromepet, Aslan Child Development and Therapy Center provides a supportive, nurturing environment where children with developmental, speech, and sensory needs receive tailored, play-based therapy from compassionate professionals.
              </p>

              {/* Value Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> New Colony Location (Near GST Road)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Early Learning & Play Rooms
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1-on-1 Individual Attention
                </span>
              </div>

              {/* Primary Actions */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('location-chromepet', 'book-branch')}
                >
                  Book Appointment at Chromepet
                </Button>
                <a
                  href={`tel:${CENTER_INFO.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white text-slate-800 font-heading font-extrabold text-sm border-2 border-amber-200 hover:bg-amber-50 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600" /> Call: 094459 14020
                </a>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group aspect-[4/3] sm:aspect-[4/3] lg:aspect-[3/4]">
                <img
                  src="/images/play_therapy_room.webp"
                  alt="Bright early childhood play therapy and learning room with activity floor mats at Aslan CDC Chromepet"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-amber-200 shadow-lg max-w-[280px]">
                <p className="text-xs font-extrabold text-slate-900 font-heading">New Colony Facility</p>
                <p className="text-[11px] text-slate-500 font-medium">Calm, structured spaces designed for focused child learning.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. BRANCH OVERVIEW & VERIFIED PHOTOGRAPHY */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Inside Chromepet"
            title="Compassionate Pediatric Therapy in New Colony"
            subtitle="Our Chromepet facility was specifically chosen to provide a quiet, distraction-free environment for young children and their families."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Room 1 */}
            <div className="bg-amber-50/30 rounded-3xl p-6 border-2 border-amber-100 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-amber-100 shadow-xs">
                <img
                  src="/images/play_therapy_room.webp"
                  alt="Play therapy room at Chromepet center"
                  width="768"
                  height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                  Early Learning & Play Therapy Room
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Spacious floor mat spaces equipped with color-coded posture chairs, sensory ring toys, and table-top activities designed to encourage attention span and natural play-based learning.
                </p>
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-amber-50/30 rounded-3xl p-6 border-2 border-amber-100 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-amber-100 shadow-xs">
                <img
                  src="/images/sensory_tactile_pathway.webp"
                  alt="Sensory tactile pathway and panels at Aslan CDC"
                  width="768"
                  height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                  Tactile Pathway & Activity Wall
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Multi-textured sensory wall panels featuring diverse tactile surfaces and calming greenery to help children explore touch sensations and de-escalate anxiety.
                </p>
              </div>
            </div>

            {/* Room 3 */}
            <div className="bg-amber-50/30 rounded-3xl p-6 border-2 border-amber-100 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-amber-100 shadow-xs">
                <img
                  src="/images/therapy_cubicles.webp"
                  alt="Individual therapy cubicles at Aslan CDC"
                  width="768"
                  height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                  1-on-1 Speech & Behavioral Cubicles
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Private, partitioned therapy stations allowing speech-language pathologists and special educators to deliver focused 1-on-1 instruction without visual distractions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THERAPIES AVAILABLE AT CHROMEPET */}
      <section className="py-16 lg:py-20 bg-contact-soft relative border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Therapy Programs"
            title="Specialized Services Available at Chromepet"
            subtitle="Delivering evidence-based developmental support tailored to each child's individual needs."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Occupational Therapy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Strengthening fine motor hand skills, pencil grasp, hand-eye coordination, and everyday self-care routines for school and home.
              </p>
              <button
                onClick={() => onNavigate('service-occupational-therapy')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Explore Occupational Therapy</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Speech & Language Therapy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Improving speech sound pronunciation, overcoming stuttering, building expressive vocabulary, and introducing AAC choice boards.
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Learn about Speech Therapy</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Autism Developmental Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Early intervention addressing sensory sensitivities, positive behavioral adaptation, functional communication, and emotional regulation.
              </p>
              <button
                onClick={() => onNavigate('service-autism-support')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Explore Autism Support</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Special Education (IEP)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Individualized Education Plans tailored to unique learning styles, strengthening foundational literacy, math concepts, and attention span.
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Special Education Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                School Readiness Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Pre-school transition training focusing on sitting tolerance, following classroom instructions, circle time participation, and peer cooperation.
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>School Readiness Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Behaviour Modification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Positive reinforcement systems and visual schedules to replace tantrums and defiance with constructive daily behaviors.
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Behavioral Support Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLINICAL ASSESSMENT VS DIAGNOSIS TRANSPARENCY */}
      <section className="py-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/60 border-2 border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-200/60 text-amber-900 flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-amber-800" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                Understanding Our Therapeutic Evaluation Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                At Aslan CDC Chromepet, our initial consultations consist of observational, functional, and developmental evaluations conducted by certified therapists. We assess sensory thresholds, motor milestones, articulation, and cognitive learning pace to formulate an Individualized Therapy Plan.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                <strong>Scope Disclosure:</strong> We do not issue formal clinical neurological or psychiatric diagnoses. Where clinical medical evaluations are required, we work collaboratively alongside certified developmental pediatricians and pediatric neurologists as therapeutic care partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION DETAILS, DIRECTIONS & MAP */}
      <section className="py-16 lg:py-20 bg-contact-soft relative border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Visit Chromepet"
            title="Branch Location, Directions & Visiting Hours"
            subtitle="Conveniently situated in New Colony, minutes away from GST Road and Chromepet Railway Station."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Address & Hours Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 block mb-1 font-heading">Address</span>
                  <p className="font-heading font-extrabold text-base text-slate-900 leading-snug">
                    {branch.address}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Landmark: 3rd Cross Street, New Colony</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                      <p className="text-slate-500 text-xs">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <Phone className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">+91 94459 14020 / +91 80725 45109</p>
                      <p className="text-slate-500 text-xs">Direct Clinic Support</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs text-slate-600 font-medium">
                  <strong>Transit & Parking:</strong> Accessible from GST Road via New Colony Main Road. Two-wheeler parking and street drop-off are available directly outside.
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 min-h-[44px] rounded-xl bg-amber-300 hover:bg-amber-400 text-amber-950 font-heading font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" /> Open Google Maps
                </a>
                <a
                  href={`https://wa.me/91${CENTER_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 min-h-[44px] rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-heading font-extrabold text-xs text-center flex items-center justify-center gap-1.5 border border-emerald-200 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-md min-h-[350px] bg-slate-100">
              <iframe
                title="Google Map - Aslan CDC Chromepet"
                src={branch.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Matching JSON-LD verbatim) */}
      <FaqSection
        title="Frequently Asked Questions — Chromepet Center"
        subtitle="Helpful answers for parents considering enrollment or evaluation at our Chromepet facility."
        eyebrow="Chromepet FAQs"
        faqs={chromepetFaqs}
      />

      {/* 7. CROSS-LINK TO WEST TAMBARAM MAIN BRANCH */}
      <section className="py-8 bg-amber-50/60 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs sm:text-sm font-heading font-bold text-slate-700">
            Looking for our main facility with the full sensory gym and ADL Independence Lab?{' '}
            <button
              onClick={() => onNavigate('location-west-tambaram')}
              className="text-amber-800 hover:text-amber-950 underline font-extrabold inline-flex items-center gap-1"
            >
              Explore our West Tambaram Main Branch <ArrowRight className="w-3.5 h-3.5 inline" />
            </button>
          </p>
        </div>
      </section>

      {/* 8. APPOINTMENT FORM INTEGRATION */}
      <div id="book-branch">
        <AppointmentSection />
      </div>

    </div>
  );
};
