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
import { WEST_TAMBARAM_FAQS } from '../data/faqsData';
import type { PageRoute } from '../types';

interface WestTambaramPageProps {
  onNavigate: (route: PageRoute, sectionId?: string) => void;
  onOpenAppointment?: (serviceName?: string) => void;
}

export const WestTambaramPage: React.FC<WestTambaramPageProps> = ({
  onNavigate,
}) => {
  const branch = CENTER_INFO.branches.find(b => b.id === 'main-branch') || CENTER_INFO.branches[0];
  const tambaramFaqs = WEST_TAMBARAM_FAQS;

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
            <span className="text-amber-800 font-bold">West Tambaram</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-extrabold uppercase tracking-wider text-slate-900 font-heading shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Aslan CDC • Flagship Main Branch</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-[1.18] tracking-tight">
                Child Development and Therapy Center in <span className="text-gradient-gold">West Tambaram, Chennai</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans font-medium">
                Aslan CDC’s flagship facility on Mudichur Road, West Tambaram, provides advanced pediatric occupational therapy, speech therapy, specialized education, and sensory integration therapy within an expansive sensory gym and functional life-skills training environment.
              </p>

              {/* Value Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Flagship Facility with Full Sensory Gym
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Aslan Independence Lab (ADL Skills)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-extrabold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Minutes from Tambaram Station
                </span>
              </div>

              {/* Primary Actions */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate('location-west-tambaram', 'book-branch')}
                >
                  Book Appointment at West Tambaram
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
                  src="/images/sensory_gym_spider_net.webp"
                  alt="Child climbing webbed spider net in full sensory gym at Aslan Child Development Center West Tambaram"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-amber-200 shadow-lg max-w-[290px]">
                <p className="text-xs font-extrabold text-slate-900 font-heading">Specialized Sensory Gym</p>
                <p className="text-[11px] text-slate-500 font-medium">Equipped for vestibular balance, spider net climbing, and sensory calming.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. MAIN FACILITY HIGHLIGHTS & PHOTOGRAPHY */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Flagship Facility"
            title="Comprehensive Pediatric Care on Mudichur Road"
            subtitle="As our primary developmental hub, the West Tambaram center provides children with dedicated clinical spaces structured to challenge physical coordination and build real-world independence."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Feature 1 */}
            <div className="bg-amber-50/30 rounded-3xl p-6 border-2 border-amber-100 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-amber-100 shadow-xs">
                <img
                  src="/images/sensory_gym_side.webp"
                  alt="Sensory gym with climbing ladder and trampoline at West Tambaram"
                  width="768"
                  height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                  Advanced Sensory Integration Gym
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Features an octagonal rope spider climbing net, suspended bolster swings, multi-color safety crash pads, and balance ladders for sensory regulation and bilateral motor planning.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-amber-50/30 rounded-3xl p-6 border-2 border-amber-100 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-amber-100 shadow-xs">
                <img
                  src="/images/independence_lab.webp"
                  alt="Aslan Independence Lab for ADL training"
                  width="768"
                  height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                  Aslan Independence Lab (ADL)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  A simulated home environment featuring child-accessible kitchen counters, cleaning, and laundry stations, empowering children with autism and developmental delays to build functional independence in daily tasks.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-amber-50/30 rounded-3xl p-6 border-2 border-amber-100 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-amber-100 shadow-xs">
                <img
                  src="/images/consultation_desk.webp"
                  alt="Doctor consultation room at Aslan CDC"
                  width="768"
                  height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-1">
                  Consultation & Assessment Suites
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Professional discussion suites where parents review developmental screening observations, goal roadmaps, and Kalam World Record certified milestone achievements with senior care providers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THERAPIES DELIVERED AT WEST TAMBARAM */}
      <section className="py-16 lg:py-20 bg-programs-soft relative border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Clinical Disciplines"
            title="Comprehensive Therapy & Educational Programs"
            subtitle="Full-spectrum early intervention and specialized therapies delivered by certified pediatric specialists."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Occupational Therapy & Sensory Gym
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Vestibular swinging, proprioceptive weight work, fine motor pencil grip, and sensory processing balance in our equipped gym.
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
                Speech-Language Pathology
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Speech articulation, vocabulary expansion, stuttering fluency training, and augmentative alternative communication (AAC).
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Speech Therapy Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Autism Early Intervention
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Structured developmental support addressing sensory sensitivity, behavioral routines, sitting tolerance, and daily living skills.
              </p>
              <button
                onClick={() => onNavigate('service-autism-support')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Autism Support Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Oral Placement Therapy (OPT)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Tactile therapy strengthening lip closure, tongue elevation, jaw stability, chewing, and swallowing coordination (Dysphagia).
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Learn about OPT</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Primitive Reflex Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Rhythmic movement sequences to integrate retained primary reflexes (Moro, ATNR, STNR) for posture, balance, and focus.
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Reflex Integration Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                Hearing Screening (PTA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Clinical Pure Tone Audiometry hearing checks verifying that auditory barriers are not hindering language and learning progress.
              </p>
              <button
                onClick={() => onNavigate('home', 'services')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 font-heading"
              >
                <span>Hearing Screening Details</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLINICAL ASSESSMENT TRANSPARENCY */}
      <section className="py-12 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/60 border-2 border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-200/60 text-amber-900 flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-amber-800" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                Clinical Assessment vs. Medical Diagnosis Transparency
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                Our multidisciplinary team conducts therapeutic baseline assessments — including sensory profiles, motor coordination evaluations, and speech sound analyses. These evaluations help us craft an evidence-based roadmap for therapy.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                <strong>Scope Disclosure:</strong> We emphasize that these are therapeutic functional assessments, not formal medical or neurological diagnoses. For clinical neurological or genetic evaluations, we encourage collaborative care alongside certified medical doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION DETAILS, DIRECTIONS & MAP */}
      <section className="py-16 lg:py-20 bg-contact-soft relative border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Visit Main Branch"
            title="Location, Transit Directions & Center Schedule"
            subtitle="Conveniently located off Mudichur Road, minutes from Tambaram Railway Station and Bus Stand."
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
                  <p className="text-xs text-slate-500 font-medium mt-1">Landmark: Raju Street, off Mudichur Road</p>
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
                  <strong>Transit & Accessibility:</strong> Minutes from Tambaram Railway Station and West Tambaram bus terminus. Situated in a peaceful residential street with convenient vehicle parking.
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
                title="Google Map - Aslan CDC West Tambaram"
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

      {/* 6. FAQ SECTION */}
      <FaqSection
        title="Frequently Asked Questions — West Tambaram Main Branch"
        subtitle="Common questions from parents regarding our sensory gym, evaluations, and therapy schedule."
        eyebrow="Tambaram FAQs"
        faqs={tambaramFaqs}
      />

      {/* 7. CROSS-LINK TO CHROMEPET BRANCH */}
      <section className="py-8 bg-amber-50/60 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs sm:text-sm font-heading font-bold text-slate-700">
            Residing closer to GST Road or Chromepet?{' '}
            <button
              onClick={() => onNavigate('location-chromepet')}
              className="text-amber-800 hover:text-amber-950 underline font-extrabold inline-flex items-center gap-1"
            >
              Visit our Chromepet Branch in New Colony <ArrowRight className="w-3.5 h-3.5 inline" />
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
