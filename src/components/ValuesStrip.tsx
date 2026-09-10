import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

export const ValuesStrip: React.FC = () => {
  const values = [
    { title: 'Child-Centered', icon: Heart },
    { title: 'Individualized', icon: UserCheck },
    { title: 'Supportive Care', icon: ShieldCheck },
    { title: 'Multidisciplinary', icon: Sparkles },
  ];

  return (
    <section className="py-8 bg-aslan-sage-soft border-y border-aslan-sage/20 relative overflow-hidden">
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
                className="flex items-center justify-center gap-3 py-2 px-3 text-center"
              >
                <div className="p-2 rounded-xl bg-white text-aslan-teal shadow-aslan-sm flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-heading font-bold text-xs sm:text-sm text-aslan-charcoal tracking-wide uppercase">
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
