'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import ParallaxCard from './ParallaxCard';
import SplitButton from './SplitButton';
import HeroGradient from './HeroGradient';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-obsidian text-white pt-32 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* 1. Real-Time Dynamic WebGL Gradient using @firecms/neat */}
      <HeroGradient />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 md:pt-14">
        {/* Top Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-widest text-zinc-200"
          >
            <span className="w-1.5 h-1.5 bg-brand-orange animate-ping" />
            <Sparkles size={12} className="text-brand-orange" />
            <span>Creative Agency</span>
          </motion.div>
        </div>

        {/* Hero Typography: APT MEDIA (Reduced weight for refined luxury) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tight leading-[0.88] uppercase text-white drop-shadow-2xl"
            >
              APT MEDIA<sup className="text-3xl md:text-5xl font-mono text-brand-orange font-bold align-super">™</sup>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                STUDIO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-base md:text-lg text-zinc-200 font-normal leading-relaxed drop-shadow"
            >
              Crafting bespoke digital experiences designed to connect, empower, and leave a lasting impact.
            </motion.p>

            {/* Split Buttons with Gap and White/Dark fills */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <SplitButton
                text="Start a Project"
                href="#contact"
                variant="white"
              />
              <SplitButton
                text="Explore Works"
                href="#work"
                variant="outline"
              />
            </motion.div>
          </div>

          {/* Floating Interactive 3D Parallax Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex justify-start lg:justify-end"
          >
            <ParallaxCard className="w-full max-w-xs">
              <div className="p-4 bg-white border border-zinc-200/90 shadow-2xl space-y-3">
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 border border-zinc-200/80 group">
                  <Image
                    src="/images/work-synth.png"
                    alt="Featured Work"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-brand-orange flex items-center justify-center text-obsidian">
                      <Play size={10} className="fill-obsidian translate-x-0.5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-white font-medium tracking-wider">
                      Featured Work / 2024
                    </span>
                  </div>
                </div>

                {/* Sound wave visualizer */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium">
                      AUDIO HARDWARE
                    </div>
                    <div className="text-xs font-mono font-bold text-obsidian uppercase tracking-wider">
                      SYNTHESIS-01
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-5">
                    <span className="w-1 bg-brand-orange animate-bounce h-3" />
                    <span className="w-1 bg-brand-orange animate-bounce [animation-delay:0.2s] h-5" />
                    <span className="w-1 bg-brand-orange animate-bounce [animation-delay:0.4s] h-2" />
                    <span className="w-1 bg-brand-orange animate-bounce [animation-delay:0.1s] h-4" />
                  </div>
                </div>
              </div>
            </ParallaxCard>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Down Anchor */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 flex items-center justify-center">
        <Link
          href="#about"
          className="group flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
        >
          <span>| SCROLL DOWN |</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-brand-orange" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
