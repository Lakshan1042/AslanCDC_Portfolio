import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string; tag: string } | null>(null);

  const galleryItems = [
    {
      src: '/images/hero_therapy.png',
      caption: 'Occupational Therapy Sensory Room with Balance & Coordination Tools',
      tag: 'Sensory & Motor Therapy Space',
      span: 'col-span-1 md:col-span-2 row-span-2',
      height: 'h-80 md:h-[460px]'
    },
    {
      src: '/images/speech_session.png',
      caption: 'Speech & Language Therapy Station for Interactive Articulation Exercises',
      tag: 'Speech Therapy Studio',
      span: 'col-span-1 md:col-span-1 row-span-1',
      height: 'h-56 md:h-[220px]'
    },
    {
      src: '/images/sensory_room.png',
      caption: 'Specialized Sensory Integration Room Equipped for Pediatric Motor Planning',
      tag: 'Sensory Gym',
      span: 'col-span-1 md:col-span-1 row-span-1',
      height: 'h-56 md:h-[220px]'
    },
    {
      src: '/images/center_interior.png',
      caption: 'Calm, Welcoming Reception & Family Consultation Lounge at Mudichur Road',
      tag: 'Parent Lounge & Reception',
      span: 'col-span-1 md:col-span-2 row-span-1',
      height: 'h-60 md:h-[220px]'
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-aslan-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          eyebrow="Center Environment"
          title="Inside Aslan"
          subtitle="Explore our warm, sensory-friendly therapy rooms and reassuring spaces at West Tambaram, Chennai."
          centered
          className="mb-14"
        />

        {/* Asymmetrical Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden shadow-aslan-card border border-aslan-sage/20 bg-white cursor-pointer ${item.span}`}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className={`w-full ${item.height} object-cover group-hover:scale-105 transition-transform duration-500`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-aslan-charcoal/80 via-aslan-charcoal/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity p-6 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-aslan-teal text-white w-fit mb-2 shadow-aslan-sm">
                  {item.tag}
                </span>
                <p className="text-white font-heading font-medium text-sm md:text-base leading-snug">
                  {item.caption}
                </p>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-aslan-charcoal-muted flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-aslan-teal" />
          <span>Designed with generous natural lighting and sensory-friendly acoustic dampening for child comfort.</span>
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-aslan-charcoal/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-aslan-lg border border-aslan-sage/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-aslan-charcoal/70 text-white hover:bg-aslan-charcoal transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-aslan-cream flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-aslan-teal text-white mb-1">
                  {selectedImage.tag}
                </span>
                <h4 className="text-base font-bold font-heading text-aslan-charcoal">
                  {selectedImage.caption}
                </h4>
              </div>
              <span className="text-xs text-aslan-charcoal-muted">
                Aslan Child Development Center • West Tambaram
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
