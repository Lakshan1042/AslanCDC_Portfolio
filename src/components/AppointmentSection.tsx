import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { CheckCircle2, Loader2, HeartHandshake, ShieldCheck, Clock, AlertCircle, Building2, Home, Sparkles } from 'lucide-react';

interface FormErrors {
  parentName?: string;
  childName?: string;
  phone?: string;
  email?: string;
  concern?: string;
  address?: string;
}

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    concern: '',
    appointmentType: 'center' as 'center' | 'home',
    address: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

    if (formData.appointmentType === 'home' && !formData.address.trim()) {
      newErrors.address = 'Please enter your complete home address for the visit.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

    try {
      if (scriptUrl) {
        const formDataPayload = new FormData();
        formDataPayload.append('parentName', formData.parentName);
        formDataPayload.append('childName', formData.childName);
        formDataPayload.append('phone', formData.phone);
        formDataPayload.append('email', formData.email);
        formDataPayload.append('concern', formData.concern);
        formDataPayload.append('isHomeAppointment', formData.appointmentType === 'home' ? 'Yes' : 'No');
        formDataPayload.append('address', formData.appointmentType === 'home' ? formData.address.trim() : 'Center Visit');
        formDataPayload.append('submittedAt', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

        await fetch(scriptUrl, {
          method: 'POST',
          body: formDataPayload,
          mode: 'no-cors',
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('Failed to submit enquiry. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book" className="py-20 lg:py-24 bg-gradient-to-br from-amber-50 via-sky-50/50 to-emerald-50/60 relative overflow-hidden">
      
      {/* Soft Background Glow Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-aslan-gold/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-aslan-blue/15 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/80 text-xs font-extrabold uppercase tracking-wider text-slate-900 font-heading shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Appointment Request</span>
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 leading-tight tracking-tight">
              Let's Take the <span className="text-gradient-gold">Next Step Together</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-medium">
              Tell us a little about your child and choose between a Center Visit or Home Appointment.
            </p>

            {/* Soft White Trust Card */}
            <div className="p-6 rounded-3xl bg-white text-slate-900 shadow-lg space-y-4 border-2 border-amber-200/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-900 shadow-xs">
                  <HeartHandshake className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-slate-900 text-base">
                    What to Expect Next
                  </h3>
                  <p className="text-[11px] font-bold text-amber-700 italic">
                    - Despair turns into aspire
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium font-sans leading-relaxed pt-1">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-amber-600 flex-shrink-0" />
                  <span>Empathetic, confidential consultation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4.5 h-4.5 text-amber-600 flex-shrink-0" />
                  <span>Response within center operational hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border-4 border-amber-100 shadow-2xl relative overflow-hidden"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-aslan-mint rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-aslan-charcoal">
                  Thank You!
                </h3>
                <p className="text-aslan-charcoal-muted max-w-md mx-auto text-base leading-relaxed font-sans">
                  We've received your request for a {formData.appointmentType === 'home' ? 'Home Appointment' : 'Center Visit'}. Our care team will contact you shortly.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        childName: '',
                        phone: '',
                        email: '',
                        concern: '',
                        appointmentType: 'center',
                        address: '',
                      });
                      setErrors({});
                      setSubmitError(null);
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Appointment Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 font-heading">
                    Appointment Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, appointmentType: 'center' });
                        if (errors.address) setErrors({ ...errors, address: undefined });
                      }}
                      className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all duration-300 font-heading ${
                        formData.appointmentType === 'center'
                          ? 'bg-amber-100 border-2 border-amber-300 text-slate-900 shadow-sm scale-[1.02]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-amber-200 hover:bg-amber-50/40 hover:text-slate-900'
                      }`}
                    >
                      <Building2 className="w-4 h-4 flex-shrink-0 text-amber-700" />
                      <span>Center Visit</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, appointmentType: 'home' })}
                      className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all duration-300 font-heading ${
                        formData.appointmentType === 'home'
                          ? 'bg-amber-100 border-2 border-amber-300 text-slate-900 shadow-sm scale-[1.02]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-amber-200 hover:bg-amber-50/40 hover:text-slate-900'
                      }`}
                    >
                      <Home className="w-4 h-4 flex-shrink-0 text-amber-700" />
                      <span>Home Appointment</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Parent Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm focus:outline-none focus:bg-white transition-all text-aslan-charcoal ${
                        errors.parentName
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-400'
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm focus:outline-none focus:bg-white transition-all text-aslan-charcoal ${
                        errors.childName
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-400'
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm focus:outline-none focus:bg-white transition-all text-aslan-charcoal ${
                        errors.phone
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-400'
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
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
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm focus:outline-none focus:bg-white transition-all text-aslan-charcoal ${
                        errors.email
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-slate-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Conditional Home Address Field */}
                <AnimatePresence>
                  {formData.appointmentType === 'home' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <label className="block text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
                        Home Address for Visit *
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Enter complete home address (House No, Street, Area, Landmark, Pincode)..."
                        value={formData.address}
                        onChange={(e) => {
                          setFormData({ ...formData, address: e.target.value });
                          if (errors.address) setErrors({ ...errors, address: undefined });
                        }}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm focus:outline-none focus:bg-white transition-all text-aslan-charcoal resize-none ${
                          errors.address
                            ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                            : 'border-slate-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-400'
                        }`}
                      ></textarea>
                      {errors.address && (
                        <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 5. Concern */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-aslan-charcoal mb-1 font-heading">
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
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm focus:outline-none focus:bg-white transition-all text-aslan-charcoal resize-none ${
                      errors.concern
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/30'
                        : 'border-slate-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-400'
                    }`}
                  ></textarea>
                  {errors.concern && (
                    <p className="text-rose-600 text-xs font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.concern}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

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



