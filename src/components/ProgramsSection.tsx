import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import {
  Activity,
  MessageCircle,
  BookOpen,
  GraduationCap,
  RefreshCw,
  Volume2,
  Smile,
  HeartHandshake,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Stethoscope,
  Check,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Pause,
  Play
} from 'lucide-react';
import { SERVICES, SEO_CONDITIONS_CATEGORIES } from '../data/contentData';

interface ProgramsSectionProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenAppointment,
}) => {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isExpandedConditions, setIsExpandedConditions] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 35;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoplay || maxIndex <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoplay, maxIndex, currentIndex]);

  const renderServiceIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'Activity':
        return <Activity className={className} />;
      case 'MessageCircle':
        return <MessageCircle className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'RefreshCw':
        return <RefreshCw className={className} />;
      case 'Volume2':
        return <Volume2 className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'therapy':
        return {
          badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
          borderClass: 'border-sky-200 hover:border-sky-400 shadow-sky-100',
          numColor: 'text-sky-700',
          iconBg: 'bg-sky-50 text-sky-700',
          tagLabel: 'Clinical Therapy',
        };
      case 'education':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
          borderClass: 'border-amber-200 hover:border-amber-400 shadow-amber-100',
          numColor: 'text-amber-700',
          iconBg: 'bg-amber-50 text-amber-700',
          tagLabel: 'Special Education',
        };
      case 'assessment':
        return {
          badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
          borderClass: 'border-purple-200 hover:border-purple-400 shadow-purple-100',
          numColor: 'text-purple-700',
          iconBg: 'bg-purple-50 text-purple-700',
          tagLabel: 'Diagnostic Assessment',
        };
      case 'support':
      default:
        return {
          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          borderClass: 'border-emerald-200 hover:border-emerald-400 shadow-emerald-100',
          numColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50 text-emerald-700',
          tagLabel: 'Counselling & Support',
        };
    }
  };

  const visibleServices = SERVICES.slice(currentIndex, currentIndex + itemsPerPage);
  const totalPages = Math.ceil(SERVICES.length / itemsPerPage);

  return (
    <section id="services" className="py-20 lg:py-24 bg-programs-soft relative overflow-hidden">
      {/* Background Soft Organic Blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-aslan-gold/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow="Services Offered"
          title="Comprehensive Pediatric Care & Therapy"
          subtitle="Empowering every aspect of child development through evidence-based occupational therapy, speech therapy, special education, assessments, and family support."
          className="mb-8"
        />

        {/* Carousel Controls Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <span className="text-xs font-extrabold text-slate-600 font-heading tracking-wider uppercase">
            Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, SERVICES.length)} of {SERVICES.length} Services Offered
          </span>

          {/* Carousel Arrow Controls & Autoplay Toggle */}
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full border border-slate-200 shadow-sm">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title={isAutoplay ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isAutoplay ? <Pause className="w-4 h-4 text-amber-600" /> : <Play className="w-4 h-4 text-emerald-600" />}
            </button>

            <button
              onClick={handlePrev}
              disabled={SERVICES.length <= itemsPerPage}
              className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              disabled={SERVICES.length <= itemsPerPage}
              className="p-2 rounded-full bg-amber-300 text-amber-950 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              aria-label="Next services"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CAROUSEL SLIDER TRACK WITH TOUCH SWIPE */}
        <div
          className="relative min-h-[440px] overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {visibleServices.map((service) => {
                const globalIndex = SERVICES.findIndex((s) => s.id === service.id);
                const styles = getCategoryStyles(service.category);
                const numFormatted = globalIndex + 1 < 10 ? `0${globalIndex + 1}` : `${globalIndex + 1}`;

                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -6 }}
                    className={`rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group bg-white border-2 shadow-sm hover:shadow-xl ${styles.borderClass}`}
                  >
                    <div className="space-y-4">
                      {/* Top Bar: Icon + Number + Tag */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-2xl ${styles.iconBg} shadow-xs group-hover:scale-110 transition-transform`}>
                            {renderServiceIcon(service.iconName)}
                          </div>
                          <span className={`text-base font-extrabold font-heading tracking-widest uppercase ${styles.numColor}`}>
                            {numFormatted}
                          </span>
                        </div>

                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${styles.badgeBg}`}>
                          {styles.tagLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-sky-700 transition-colors pt-1">
                        {service.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* Highlights Bullet Points */}
                      <div className="pt-2 space-y-1.5 border-t border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Core Interventions:
                        </span>
                        <ul className="space-y-1">
                          {service.highlights.slice(0, 3).map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-700 leading-tight">
                              <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-end">
                      <button
                        onClick={() => onOpenAppointment(service.title)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold font-heading bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 shadow-xs active:scale-95 transition-all`}
                      >
                        <span>Book Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-800" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CAROUSEL PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-16">
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const isActive = Math.floor(currentIndex / itemsPerPage) === pageIdx;
            return (
              <button
                key={pageIdx}
                onClick={() => setCurrentIndex(pageIdx * itemsPerPage)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-amber-500 shadow-sm' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${pageIdx + 1}`}
              />
            );
          })}
        </div>

        {/* SEO SCOPE OF SUPPORT & CONDITIONS ADDRESSED SECTION */}
        <div className="mt-8 bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-200/80 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-2xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider font-heading">
              <Stethoscope className="w-3.5 h-3.5 text-amber-700" />
              <span>Scope of Care & Specializations</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Conditions & Developmental Needs Supported
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
              We provide clinical, educational, and therapeutic management across a broad range of pediatric speech, motor, cognitive, sensory, and behavioral conditions:
            </p>

            {/* Quick Keyword Filter */}
            <div className="relative pt-2 max-w-md">
              <input
                type="text"
                placeholder="Filter conditions (e.g. ASD, Stuttering, ADHD, Dysphagia, Apraxia)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 focus:bg-white text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-4" />
            </div>
          </div>

          {/* Categorized Condition Badges */}
          <div className="space-y-7">
            {SEO_CONDITIONS_CATEGORIES.map((cat, cIdx) => {
              const matchingConditions = cat.conditions.filter((cond) =>
                cond.toLowerCase().includes(searchTerm.toLowerCase().trim())
              );

              if (searchTerm.trim() && matchingConditions.length === 0) {
                return null;
              }

              const visibleConditions = (!isExpandedConditions && !searchTerm.trim())
                ? matchingConditions.slice(0, 4)
                : matchingConditions;

              return (
                <div key={cIdx} className="space-y-3 border-t border-slate-100 pt-6 first:border-0 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm font-extrabold font-heading text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      {cat.title}
                    </h4>
                    <span className="text-[11px] font-medium text-slate-500">
                      {cat.description}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {visibleConditions.map((cond, idx) => {
                      const isSelected = selectedCondition === cond;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedCondition(isSelected ? null : cond)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm scale-105 border border-amber-500'
                              : 'bg-slate-100/90 text-slate-700 hover:bg-amber-100 hover:text-slate-900 border border-slate-200/80'
                          }`}
                        >
                          <span>{cond}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* See More Conditions Toggle Button */}
          {!searchTerm.trim() && (
            <div className="pt-6 border-t border-slate-100 flex justify-center">
              <button
                onClick={() => setIsExpandedConditions(!isExpandedConditions)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold font-heading bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 shadow-xs transition-all active:scale-95"
              >
                <span>
                  {isExpandedConditions
                    ? 'Show Fewer Conditions'
                    : `See All Conditions & Needs (+${SEO_CONDITIONS_CATEGORIES.reduce((acc, cat) => acc + cat.conditions.length, 0) - 12} more)`}
                </span>
                {isExpandedConditions ? (
                  <ChevronUp className="w-4 h-4 text-amber-800" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-amber-800" />
                )}
              </button>
            </div>
          )}

          {/* Selected Condition Quick Info Box */}
          <AnimatePresence>
            {selectedCondition && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold font-heading text-amber-950 text-sm">
                    {selectedCondition} — Specialized Support Available
                  </span>
                  <button
                    onClick={() => setSelectedCondition(null)}
                    className="text-[10px] font-extrabold uppercase text-amber-800 hover:underline"
                  >
                    Close
                  </button>
                </div>
                <p className="font-medium leading-relaxed font-sans text-slate-700">
                  Our qualified multidisciplinary therapists in West Tambaram & Chromepet evaluate and support children presenting with {selectedCondition}. Contact our care team to learn more about customized treatment options.
                </p>
                <button
                  onClick={() => onOpenAppointment(selectedCondition)}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-sky-800 hover:underline font-heading pt-1"
                >
                  <span>Inquire about therapy for {selectedCondition}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};




