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
    { label: 'Programs', href: 'services', route: 'home' as PageRoute },
    { label: 'Our Approach', href: 'how-we-help', route: 'home' as PageRoute },
    { label: 'Gallery', href: 'gallery', route: 'home' as PageRoute },
    { label: 'AMS', route: 'ams' as PageRoute, isBadge: true },
    { label: 'Contact', href: 'contact', route: 'home' as PageRoute },
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
          ? 'bg-white/95 backdrop-blur-md py-3 border-b border-aslan-sage/20 shadow-aslan-sm'
          : 'bg-aslan-cream/90 backdrop-blur-sm py-4 border-b border-aslan-sage/15'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Brand Mark */}
          <button
            onClick={() => onNavigate('home', 'hero')}
            className="flex flex-col text-left group focus:outline-none focus:ring-2 focus:ring-aslan-teal rounded-lg p-1"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-aslan-teal">
                ASLAN
              </span>
              {currentRoute === 'ams' && (
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-aslan-teal text-white rounded-md">
                  AMS
                </span>
              )}
            </div>
            <span className="text-[10px] font-semibold tracking-widest text-aslan-charcoal-muted uppercase -mt-0.5">
              Child Development Center
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = link.route === currentRoute && link.route === 'ams';
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm font-medium transition-colors relative py-1 flex items-center gap-1 focus:outline-none focus:text-aslan-teal ${isActive
                    ? 'text-aslan-teal font-bold'
                    : 'text-aslan-charcoal hover:text-aslan-teal'
                    }`}
                >
                  <span>{link.label}</span>
                  {link.isBadge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-extrabold bg-aslan-sage/20 text-aslan-teal rounded-full uppercase">
                      New
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA - Smooth Navigates to #book */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="primary"
              size="md"
              onClick={handleBookClick}
            >
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-aslan-charcoal hover:text-aslan-teal focus:outline-none rounded-lg"
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
              className="lg:hidden bg-white border-b border-aslan-sage/20 px-6 py-6 space-y-4 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link)}
                    className="text-left text-base font-medium text-aslan-charcoal py-2 border-b border-aslan-sage/10 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {link.isBadge && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-aslan-teal text-white rounded-md">
                        AMS Coming Soon
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-aslan-sage/20 px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${CENTER_INFO.phones[0]}`}
          className="flex-1 py-2 bg-aslan-cream rounded-xl text-aslan-teal font-medium text-xs text-center flex items-center justify-center gap-1.5 border border-aslan-sage/20 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" /> Call
        </a>
        <a
          href={`https://wa.me/91${CENTER_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 bg-[#25D366]/10 text-[#128C7E] font-medium text-xs text-center flex items-center justify-center gap-1.5 border border-[#25D366]/20 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
        </a>
        <button
          onClick={handleBookClick}
          className="flex-[1.3] py-2 bg-aslan-teal text-white rounded-xl font-heading font-semibold text-xs text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5" /> Book
        </button>
      </div>
    </>
  );
};
