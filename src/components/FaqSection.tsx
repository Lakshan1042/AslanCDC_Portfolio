import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  faqs: FaqItemData[];
  className?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Answers to common questions from parents regarding our therapy programs, evaluations, and center visits.",
  eyebrow = "Parent Guidance & FAQs",
  faqs,
  className = "py-16 lg:py-24 bg-white relative overflow-hidden",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={className}>
      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          centered
          className="mb-10 sm:mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-amber-300 bg-amber-50/40 shadow-sm'
                    : 'border-slate-200/80 bg-white hover:border-amber-200 hover:bg-slate-50/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-2xl min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 leading-snug flex items-center gap-2.5">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${isOpen ? 'text-amber-600' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-amber-200/70 text-amber-900' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-amber-200/40">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

