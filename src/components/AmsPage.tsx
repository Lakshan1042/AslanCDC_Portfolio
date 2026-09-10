import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { SEOHead } from './SEOHead';

interface AmsPageProps {
  onBackToHome: () => void;
}

export const AmsPage: React.FC<AmsPageProps> = ({ onBackToHome }) => {
  return (
    <>
      <SEOHead
        title="AMS — Aslan Management Software | Coming Soon"
        description="Aslan Management Software (AMS) — A dedicated digital care portal coming soon for Aslan Child Development Center."
        canonicalUrl="https://aslancdc.com/ams"
        noindex={true}
      />

      <div className="min-h-screen bg-aslan-cream text-aslan-charcoal flex flex-col justify-between py-8 sm:py-12 px-6 relative overflow-hidden">
        
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-aslan-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-aslan-peach/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Navigation */}
        <header className="max-w-6xl mx-auto w-full flex items-center justify-between z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-aslan-teal hover:text-aslan-teal-dark transition-colors font-heading group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
            Back to Aslan CDC
          </button>

          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-xl tracking-tight text-aslan-teal">
              ASLAN
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold bg-aslan-teal text-white rounded-full uppercase tracking-wider">
              AMS
            </span>
          </div>
        </header>

        {/* Main Content — Minimal & Spacious */}
        <main className="max-w-2xl mx-auto w-full text-center space-y-8 my-auto py-12 z-10">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aslan-sage-soft border border-aslan-sage/30 text-aslan-teal text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aslan Management Software</span>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold font-heading text-aslan-charcoal tracking-tight">
              Coming Soon
            </h1>
            <p className="text-base sm:text-lg text-aslan-charcoal-muted leading-relaxed max-w-lg mx-auto font-sans">
              We are crafting a dedicated digital care platform to support our therapy sessions, parent updates, and daily operational care.
            </p>
          </motion.div>

          {/* Simple Elegant Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-aslan-sage/30 shadow-aslan-card max-w-md mx-auto space-y-4 text-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Under Active Development
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-aslan-charcoal-muted pt-1">
              <Clock className="w-3.5 h-3.5 text-aslan-teal" />
              <span>Target Launch: Late 2026</span>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" onClick={onBackToHome}>
              Return to Main Website
            </Button>
          </motion.div>

        </main>

        {/* Minimal Footer */}
        <footer className="max-w-6xl mx-auto w-full text-center text-xs text-aslan-charcoal-muted z-10 pt-6">
          <p>© {new Date().getFullYear()} Aslan Child Development Center. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
};


