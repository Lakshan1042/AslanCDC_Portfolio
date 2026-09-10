import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-aslan-sage/20 py-12 text-aslan-charcoal font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="space-y-1 text-center md:text-left">
          <span className="font-heading font-extrabold text-lg tracking-tight text-aslan-teal">
            ASLAN
          </span>
          <p className="text-aslan-charcoal-muted">
            Child Development Center • West Tambaram, Chennai
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 font-medium text-aslan-charcoal-muted">
          <a href="#about" className="hover:text-aslan-teal transition-colors">About</a>
          <a href="#services" className="hover:text-aslan-teal transition-colors">Services</a>
          <a href="#how-we-help" className="hover:text-aslan-teal transition-colors">How We Help</a>
          <a href="#environment" className="hover:text-aslan-teal transition-colors">Environment</a>
          <a href="#book" className="hover:text-aslan-teal transition-colors">Appointment</a>
          <a href="#contact" className="hover:text-aslan-teal transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-aslan-charcoal-muted text-center md:text-right">
          <p>© {new Date().getFullYear()} Aslan Child Development Center.</p>
          <p className="text-[10px]">9445914020 • 8072545109</p>
        </div>

      </div>
    </footer>
  );
};
