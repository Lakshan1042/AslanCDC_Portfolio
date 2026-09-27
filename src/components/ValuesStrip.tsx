import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

export const ValuesStrip: React.FC = () => {
  const values = [
    { title: 'Child-Centered', icon: Heart, color: 'text-aslan-coral' },
    { title: 'Individualized', icon: UserCheck, color: 'text-aslan-blue' },
    { title: 'Supportive Care', icon: ShieldCheck, color: 'text-aslan-mint' },
    { title: 'Multidisciplinary', icon: Sparkles, color: 'text-amber-600' },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-amber-300 via-yellow-200 to-sky-300 border-y border-amber-200 relative overflow-hidden shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-between">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center justify-center gap-3.5 py-2.5 px-4 text-center rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xs hover:scale-105 transition-transform"
              >
                <div className={`p-2 rounded-xl bg-slate-50 ${item.color} shadow-xs flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-aslan-charcoal tracking-wide uppercase">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


