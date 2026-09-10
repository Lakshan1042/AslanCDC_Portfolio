import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { CheckCircle2, Loader2, HeartHandshake, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

interface FormErrors {
  parentName?: string;
  childName?: string;
  phone?: string;
  email?: string;
  concern?: string;
}

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    concern: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter your full name.';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = "Please enter your child's name.";
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      newErrors.phone = 'Please enter your contact number.';
    } else if (!/^[6-9]\d{9}$/.test(phoneClean) && !/^\d{10}$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!formData.concern.trim()) {
      newErrors.concern = 'Please share a brief note about your child’s needs.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="book" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Organic Background Glow Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-aslan-sage/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Headline & Qualitative Graphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-aslan-teal font-heading">
              Appointment Request
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-aslan-charcoal leading-tight tracking-tight">
              Let's Take the Next Step Together
            </h2>

            <p className="text-base sm:text-lg text-aslan-charcoal-muted leading-relaxed font-sans font-normal">
              Tell us a little about your child and our team will get in touch with you.
            </p>

            {/* Qualitative Trust Card */}
            <div className="p-6 rounded-3xl bg-aslan-cream border border-aslan-sage/20 shadow-aslan-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-aslan-teal text-white">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-aslan-charcoal text-sm">
                  What to Expect Next
                </h3>
              </div>

              <div className="space-y-2 text-xs text-aslan-charcoal-muted font-sans leading-relaxed">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-aslan-teal flex-shrink-0" />
                  <span>Empathetic, confidential consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-aslan-teal flex-shrink-0" />
                  <span>Response within center operational hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Compact 5-Field Form with Validation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-aslan-cream rounded-3xl p-8 md:p-10 border border-aslan-sage/20 shadow-aslan-card"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-14 h-14 bg-aslan-sage-soft text-aslan-teal rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-aslan-charcoal">
                  Thank you!
                </h3>
                <p className="text-aslan-charcoal-muted max-w-md mx-auto text-base leading-relaxed font-sans">
                  We've received your request. Our team will contact you shortly.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ parentName: '', childName: '', phone: '', email: '', concern: '' });
                      setErrors({});
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Parent Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-sm focus:outline-none transition-all text-aslan-charcoal ${
                        errors.parentName
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-aslan-sage/30 focus:ring-2 focus:ring-aslan-teal focus:border-aslan-teal'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* 2. Child Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
                      Child Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Child's name"
                      value={formData.childName}
                      onChange={(e) => {
                        setFormData({ ...formData, childName: e.target.value });
                        if (errors.childName) setErrors({ ...errors, childName: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-sm focus:outline-none transition-all text-aslan-charcoal ${
                        errors.childName
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-aslan-sage/30 focus:ring-2 focus:ring-aslan-teal focus:border-aslan-teal'
                      }`}
                    />
                    {errors.childName && (
                      <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.childName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 3. Contact Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-sm focus:outline-none transition-all text-aslan-charcoal ${
                        errors.phone
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-aslan-sage/30 focus:ring-2 focus:ring-aslan-teal focus:border-aslan-teal'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* 4. Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-sm focus:outline-none transition-all text-aslan-charcoal ${
                        errors.email
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-aslan-sage/30 focus:ring-2 focus:ring-aslan-teal focus:border-aslan-teal'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Concern */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
                    Concern *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share a brief note about your child's needs or developmental goals..."
                    value={formData.concern}
                    onChange={(e) => {
                      setFormData({ ...formData, concern: e.target.value });
                      if (errors.concern) setErrors({ ...errors, concern: undefined });
                    }}
                    className={`w-full px-4 py-3 bg-white border rounded-2xl text-sm focus:outline-none transition-all text-aslan-charcoal resize-none ${
                      errors.concern
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-aslan-sage/30 focus:ring-2 focus:ring-aslan-teal focus:border-aslan-teal'
                    }`}
                  ></textarea>
                  {errors.concern && (
                    <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.concern}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
