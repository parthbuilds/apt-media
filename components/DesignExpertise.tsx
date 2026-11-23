'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SplitButton from './SplitButton';

interface ServiceItem {
  id: string;
  title: string;
  col1: string[];
  col2: string[];
  image: string;
  badge: string;
}

export default function DesignExpertise() {
  const [activeItem, setActiveItem] = useState<number>(0);

  const services: ServiceItem[] = [
    {
      id: '01.',
      title: 'BRANDING',
      col1: ['LOGO DESIGN', 'BRAND GUIDELINE', 'COMMUNICATION'],
      col2: ['BRAND IDENTITY', 'STRATEGY'],
      image: '/images/expertise-mara-clean.png',
      badge: 'MARA EDITORIAL COVER',
    },
    {
      id: '02.',
      title: 'MOTION DESIGN',
      col1: ['MICRO INTERACTIONS', 'UI ANIMATIONS', 'PRODUCT MOTION'],
      col2: ['TRANSITION DESIGN', 'SCROLL ANIMATIONS', 'INTERACTION FEEDBACK'],
      image: '/images/work-mixer.png',
      badge: 'CHOREOGRAPHED MOTION REEL',
    },
    {
      id: '03.',
      title: 'UI/UX DESIGN',
      col1: ['USER RESEARCH', 'WIREFRAMING', 'PROTOTYPING'],
      col2: ['DESIGN SYSTEMS', 'USABILITY TESTING'],
      image: '/images/work-keyboard.png',
      badge: 'MULTI-TIER DESIGN SYSTEM',
    },
    {
      id: '04.',
      title: 'WEB DEVELOPMENT',
      col1: ['RESPONSIVE WEBSITES', 'FRAMER SITES', 'FULL STACK'],
      col2: ['BACK-END DEVELOPMENT', 'NO-CODE DEV', 'DEV-OPS'],
      image: '/images/work-synth.png',
      badge: 'HIGH-PERFORMANCE NEXT.JS ARCHITECTURE',
    },
  ];

  return (
    <section id="services" className="bg-[#FAFAFA] py-28 px-6 md:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-obsidian leading-[0.95]">
              DESIGN <br />
              <span className="text-brand-orange">EXPERTISE</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4 max-w-sm">
            <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed text-left md:text-right">
              We design thoughtful digital solutions that blend creativity, usability, and performance.
            </p>
            <SplitButton
              text="Start a Project"
              href="#contact"
              variant="dark"
            />
          </div>
        </div>

        {/* Stacked Interactive Services List with Bottom Slide-Up Image */}
        <div className="border-t border-zinc-200">
          {services.map((service, index) => {
            const isActive = activeItem === index;

            return (
              <div
                key={service.id}
                className="border-b border-zinc-200 py-8 transition-colors duration-300"
              >
                {/* Header Row: Title & Sub-disciplines */}
                <div
                  onClick={() => setActiveItem(isActive ? -1 : index)}
                  className="cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
                >
                  {/* Left: ID & Title */}
                  <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-baseline gap-3">
                    <span className="text-xs font-mono font-medium text-zinc-400">
                      {service.id}
                    </span>
                    <h3
                      className={`font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-brand-orange' : 'text-obsidian group-hover:text-brand-orange'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Sub-services in 2 clean columns */}
                  <div className="lg:col-span-6 grid grid-cols-2 gap-4 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    <div className="space-y-1">
                      {service.col1.map((item) => (
                        <div key={item} className="hover:text-obsidian transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {service.col2.map((item) => (
                        <div key={item} className="hover:text-obsidian transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* IMAGE EXPANDING / COMING FROM BOTTOM - Clean & Smooth Drawer Transition */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ 
                        height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.35, ease: 'easeOut' }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8">
                        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-obsidian border border-zinc-300 shadow-xl group">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-6 text-white text-xs font-mono tracking-widest uppercase">
                            {service.badge}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
