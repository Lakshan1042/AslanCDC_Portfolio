import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface NotFoundPageProps {
  onBackToHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-aslan-cream text-aslan-charcoal flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 md:p-10 border border-aslan-sage/20 shadow-aslan-card space-y-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-aslan-sage-soft text-aslan-teal flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-aslan-teal font-heading">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold font-heading text-aslan-charcoal">
            Page Not Found
          </h1>
          <p className="text-sm text-aslan-charcoal-muted leading-relaxed font-sans">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-2">
          <Button
            variant="primary"
            size="md"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={onBackToHome}
            fullWidth
          >
            Back to Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
