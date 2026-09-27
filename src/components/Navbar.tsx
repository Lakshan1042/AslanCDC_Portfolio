import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { CENTER_INFO } from '../data/contentData';
import type { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: 'hero', route: 'home' as PageRoute },
    { label: 'About', href: 'about', route: 'home' as PageRoute },
    { label: 'Contact', href: 'contact', route: 'home' as PageRoute },
    { label: 'Programs', href: 'services', route: 'home' as PageRoute },
    { label: 'Our Approach', href: 'how-we-help', route: 'home' as PageRoute },
    { label: 'Gallery', href: 'gallery', route: 'home' as PageRoute },
    { label: 'AMS', route: 'ams' as PageRoute, isBadge: true },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.route === 'ams') {
      onNavigate('ams');
    } else {
      onNavigate('home', link.href);
    }
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
    onNavigate('home', 'book');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md py-2.5 border-b border-aslan-gold/30 shadow-md'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-amber-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Official Aslan Logo Brand Mark */}
          <button
            onClick={() => onNavigate('home', 'hero')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-aslan-gold rounded-xl p-1"
          >
            <img
              src="/images/aslan_logo.png"
              alt="Aslan Child Development Center Official Logo"
              className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-aslan-charcoal group-hover:text-aslan-blue transition-colors">
                  AS<span className="text-aslan-gold">L</span>AN
                </span>
                {currentRoute === 'ams' && (
                  <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-aslan-gold text-aslan-charcoal rounded-md shadow-xs">
                    AMS
                  </span>
                )}
              </div>
              <span className="text-[9px] font-bold tracking-wider text-aslan-charcoal-muted uppercase -mt-0.5">
                Child Development & Therapy Center
              </span>
              <span className="text-[10px] font-semibold text-aslan-blue italic">
                - Despair turns into aspire
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const isActive = link.route === currentRoute && link.route === 'ams';
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm font-bold transition-all duration-200 px-3.5 py-2 rounded-full flex items-center gap-1.5 focus:outline-none ${isActive
                    ? 'bg-sky-100 text-sky-900 font-extrabold border border-sky-300/80 shadow-xs'
                    : 'text-slate-700 hover:text-sky-900 hover:bg-sky-100/80'
                    }`}
                >
                  <span>{link.label}</span>
                  {link.isBadge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-extrabold bg-sky-500 text-white rounded-full uppercase shadow-xs">
                      New
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="secondary"
              size="md"
              onClick={handleBookClick}
            >
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-900 hover:bg-sky-100/60 focus:outline-none rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Animated Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-b border-amber-100 px-6 py-6 space-y-4 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link)}
                    className="text-left text-base font-bold text-slate-700 hover:text-sky-900 hover:bg-sky-50 px-3 py-2 rounded-xl transition-colors flex items-center justify-between border-b border-slate-100"
                  >
                    <span>{link.label}</span>
                    {link.isBadge && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-sky-500 text-white rounded-md shadow-xs">
                        AMS Coming Soon
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={handleBookClick}
                >
                  Book an Appointment
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Fixed Quick Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${CENTER_INFO.phones[0]}`}
          className="flex-1 py-2 bg-aslan-gold/20 text-aslan-charcoal font-extrabold text-xs text-center flex items-center justify-center gap-1.5 border border-aslan-gold/40 rounded-xl active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-aslan-blue" /> Call
        </a>
        <a
          href={`https://wa.me/91${CENTER_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 bg-emerald-50 text-emerald-800 font-extrabold text-xs text-center flex items-center justify-center gap-1.5 border border-emerald-200 rounded-xl active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5 text-aslan-mint" /> WhatsApp
        </a>
        <button
          onClick={handleBookClick}
          className="flex-[1.3] py-2 bg-amber-300 hover:bg-amber-400 text-amber-950 border border-amber-400/40 rounded-xl font-heading font-extrabold text-xs text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5" /> Book
        </button>
      </div>
    </>
  );
};


