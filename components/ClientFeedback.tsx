'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SplitButton from './SplitButton';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  colorImage: string;
}

export default function ClientFeedback() {
  const testimonials: Testimonial[] = [
    {
      id: 0,
      author: 'Daniel Foster',
      role: 'PRODUCT MANAGER',
      company: 'STRATA SYSTEMS',
      quote:
        'WORKING WITH APT MEDIA WAS A SEAMLESS EXPERIENCE. THEIR ATTENTION TO DETAIL AND ABILITY TO TRANSLATE IDEAS INTO CLEAN, FUNCTIONAL DESIGN TRULY STOOD OUT.',
      image: '/images/client-avatar-daniel-gray.png',
      colorImage: '/images/client-avatar-daniel.png',
    },
    {
      id: 1,
      author: 'Elena Rostova',
      role: 'CHIEF DESIGN OFFICER',
      company: 'AURA TECH',
      quote:
        'APT MEDIA REIMAGINED OUR ENTIRE BRAND IDENTITY FROM THE GROUND UP. THE IMPACT WAS IMMEDIATE: OUR CONVERSIONS INCREASED BY 42% IN THE FIRST QUARTER AFTER LAUNCH.',
      image: '/images/client-avatar-1.png',
      colorImage: '/images/client-avatar-1-color.png',
    },
    {
      id: 2,
      author: 'Julian Vance',
      role: 'FOUNDER & CEO',
      company: 'KINETIX',
      quote:
        'AN EXCEPTIONAL EYE FOR DETAIL. THEY MERGED MODERN BRUTALISM WITH FLUID INTUITIVENESS. OUR CLIENTS FREQUENTLY COMPLIMENT THE DIGITAL PLATFORM.',
      image: '/images/client-avatar-2.png',
      colorImage: '/images/client-avatar-2-color.png',
    },
    {
      id: 3,
      author: 'Maya Lin',
      role: 'HEAD OF GROWTH',
      company: 'LUMEN AI',
      quote:
        'THE SPEED AND RIGOR THEY BROUGHT TO OUR DESIGN SPRINT WAS UNPARALLELED. APT MEDIA FEELS LESS LIKE AN AGENCY AND MORE LIKE AN INTEGRATED SPECIAL-OPS TEAM.',
      image: '/images/client-avatar-3.png',
      colorImage: '/images/client-avatar-3-color.png',
    },
    {
      id: 4,
      author: 'Liam Davies',
      role: 'VP OF PRODUCT',
      company: 'VORTEX LABS',
      quote:
        'FROM TYPOGRAPHY TO MICRO-ANIMATIONS, EVERYTHING APT MEDIA DELIVERS FEELS CUSTOM AND ELEVATED. THEY TRULY DEFINE MODERN LUXURY IN SOFTWARE DESIGN.',
      image: '/images/client-avatar-4.png',
      colorImage: '/images/client-avatar-4-color.png',
    },
    {
      id: 5,
      author: 'Rachel Thorne',
      role: 'MANAGING PARTNER',
      company: 'MONO CAPITAL',
      quote:
        'DELIVERED AHEAD OF SCHEDULE WITH UNCOMPROMISED CODE QUALITY AND PIXEL-PERFECT COMPONENTS. A RARITY IN THE CREATIVE AND DIGITAL ENGINEERING INDUSTRY.',
      image: '/images/client-avatar-5.png',
      colorImage: '/images/client-avatar-5-color.png',
    },
    {
      id: 6,
      author: 'Arthur Vance',
      role: 'CREATIVE LEAD',
      company: 'SYNDICATE LABS',
      quote:
        'THEIR ABILITY TO COMBINE AVANT-GARDE VISUAL CONCEPTS WITH HIGH-PERFORMANCE CODE ELEVATED OUR PRODUCT FAR BEYOND EXPECTATIONS.',
      image: '/images/client-avatar-6.png',
      colorImage: '/images/client-avatar-6-color.png',
    },
  ];

  // Repeat testimonials 5 times for infinite smooth runway in both directions
  const repeatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Start in the middle set (index 14 = Daniel Foster)
  const [globalIndex, setGlobalIndex] = useState(14);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  // Measure container width responsively
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const activeIndex = ((globalIndex % testimonials.length) + testimonials.length) % testimonials.length;
  const current = testimonials[activeIndex];

  // Auto-advance every 4.2 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setGlobalIndex((prev) => prev + 1);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Keep index within safe boundaries without animation glitches
  useEffect(() => {
    if (globalIndex >= 28) {
      setGlobalIndex(14 + (globalIndex % 7));
    } else if (globalIndex < 7) {
      setGlobalIndex(14 + (globalIndex % 7));
    }
  }, [globalIndex]);

  const handlePrev = () => {
    setGlobalIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setGlobalIndex((prev) => prev + 1);
  };

  // Geometry: Align the active item directly at the 25% mark on desktop
  // Ensure generous gap so the expanded spotlight card NEVER overlaps neighboring cards
  const isDesktop = containerWidth >= 768;
  const itemWidth = isDesktop ? 128 : 100; // w-32 on desktop, w-24 on mobile
  const itemGap = isDesktop ? 44 : 16;     // 44px gap on desktop, 16px on mobile
  const step = itemWidth + itemGap;

  // On desktop (lg), Column 2 starts at 25% of container width + 20px pop offset
  // On mobile (< 768), cards stay uniform size (not bigger) with a clean left margin
  const targetX = containerWidth >= 1024 
    ? containerWidth * 0.25 + 20 
    : containerWidth >= 768 
      ? containerWidth * 0.20 + 10 
      : 20;

  const trackOffset = targetX - globalIndex * step;

  return (
    <section id="feedback" className="relative bg-[#FAFAFA] py-28 px-4 sm:px-6 md:px-12 border-t border-zinc-200 overflow-hidden">
      {/* 4-Column Continuous Architectural Grid Container (Matching Reference) */}
      <div 
        ref={containerRef}
        className="relative max-w-7xl mx-auto border-x border-zinc-200/80"
      >
        {/* Continuous Full-Height Vertical Column Lines in Background */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80" />

        {/* Content Layer (No Boxed Card Wrapper) */}
        <div className="relative z-10">
          {/* ================= 1. SECTION HEADER ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-4 pb-16 sm:pb-20">
            {/* Column 1: Title & Badge */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-orange inline-block flex-shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] uppercase tracking-tight leading-[0.95]">
                <span className="text-obsidian block">CLIENT</span>
                <span className="text-brand-orange block">FEEDBACK</span>
              </h2>
            </div>

            {/* Columns 2-3: Architectural Open Space */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Column 4: Header Description & Button */}
            <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
              <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed max-w-sm">
                Real feedback from clients who trusted us to deliver meaningful digital experiences.
              </p>
              <div>
                <SplitButton
                  text="Work With Us"
                  href="#contact"
                  variant="dark"
                />
              </div>
            </div>
          </div>

          {/* ================= 2. QUOTE & AUTHOR BLOCK (Fixed Height Container - Zero Vertical Bounce) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-4 pt-4 pb-12 sm:pb-16 md:pb-20">
            {/* Column 1: Clean Architectural Left Margin */}
            <div className="hidden lg:block p-6 sm:p-8" />

            {/* Columns 2-4: Quote, Author & Arrow Controls */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              {/* Bold Double Quotes Graphic matching Reference Image 2 */}
              <div className="text-zinc-400 select-none mb-6">
                <svg width="44" height="34" viewBox="0 0 44 34" fill="currentColor">
                  <path d="M0 20.4 C0 9.18 7.48 1.7 18.36 0 L 19.04 6.12 C 12.92 7.14 9.18 10.88 8.84 16.32 L 17.34 16.32 L 17.34 34 L 0 34 Z M 24.48 20.4 C 24.48 9.18 31.96 1.7 42.84 0 L 43.52 6.12 C 37.4 7.14 33.66 10.88 33.32 16.32 L 41.82 16.32 L 41.82 34 L 24.48 34 Z" />
                </svg>
              </div>

              {/* Dynamic Quote Text: Reserved Min-Height prevents any section height jumping */}
              <div className="min-h-[175px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-start">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={current.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-display font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] text-obsidian uppercase tracking-tight leading-[1.18] max-w-4xl"
                  >
                    &ldquo;{current.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author Info + Left/Right Arrow Navigation Buttons (Stable Fixed Position) */}
              <div className="flex items-end justify-between max-w-4xl pt-6 border-t border-zinc-200/40">
                <div className="min-h-[44px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="font-display font-bold text-base sm:text-lg text-obsidian uppercase tracking-wide">
                        {current.author}
                      </div>
                      <div className="text-[11px] font-mono font-medium tracking-widest text-zinc-400 uppercase mt-0.5">
                        {current.role}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Square Black Navigation Buttons Side-by-Side */}
                <div className="flex items-center gap-[2px]">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 bg-obsidian text-white flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 bg-obsidian text-white flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 shadow-sm"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= 3. 25% SPOTLIGHT SLIDER CAROUSEL ================= */}
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredIdx(null);
            }}
            className="w-full pt-10 pb-8 sm:pt-14 sm:pb-10 md:pt-20 md:pb-16 overflow-hidden relative"
          >
            {/* Sliding Track - Silky smooth glide with zero card bounce */}
            <div 
              style={{
                transform: `translateX(${trackOffset}px)`,
                transition: 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className="flex items-end gap-4 md:gap-11 whitespace-nowrap min-w-max will-change-transform"
            >
              {repeatedTestimonials.map((client, idx) => {
                const isSpotlight = idx === globalIndex;
                const isHovered = hoveredIdx === idx;
                const isColored = isSpotlight || isHovered;

                return (
                  <div
                    key={`client-slider-${client.id}-${idx}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onClick={() => setGlobalIndex(idx)}
                    className="relative cursor-pointer flex-shrink-0 flex items-end justify-center w-24 h-24 md:w-32 md:h-32"
                    title={`${client.author} — ${client.role}`}
                  >
                    <div
                      className={`relative w-full h-full aspect-square transition-all duration-700 ease-out origin-bottom ${
                        isSpotlight
                          ? 'border-2 border-brand-orange shadow-2xl z-30 scale-100 md:scale-[1.38] md:translate-x-1'
                          : isHovered
                            ? 'border-2 border-brand-orange shadow-2xl z-20 scale-100 md:scale-115'
                            : 'border border-zinc-300/80 z-10 scale-100'
                      }`}
                    >
                      <div className="relative w-full h-full overflow-hidden bg-zinc-950">
                        {/* Monochrome Base Image - Pure Black & White when inactive */}
                        <Image
                          src={client.image}
                          alt={client.author}
                          fill
                          sizes="(max-width: 768px) 120px, 240px"
                          className={`object-cover filter contrast-110 transition-all duration-500 ${
                            isColored ? 'grayscale-0 opacity-100' : 'grayscale opacity-75'
                          }`}
                        />
                        {/* Amber/Red Duotone Overlay - Blossoms into vibrant color at 25% spotlight or hover */}
                        <Image
                          src={client.colorImage}
                          alt={client.author}
                          fill
                          sizes="(max-width: 768px) 120px, 240px"
                          className={`object-cover contrast-115 transition-opacity duration-500 pointer-events-none ${
                            isColored ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
