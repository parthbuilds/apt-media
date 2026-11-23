'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ParallaxCard from './ParallaxCard';
import SplitButton from './SplitButton';

export default function Philosophy() {
  return (
    <section id="about" className="relative bg-[#FAFAFA] py-28 px-6 md:px-12 border-t border-zinc-200 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto border-x border-zinc-200/80">
        {/* Top Area: Row 0 - INTRODUCTION on Left Column (Col 1), Headline spanning Right Columns (Cols 2-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-zinc-200/80 border-b border-zinc-200/80">
          {/* Column 1: Small Introduction Badge */}
          <div className="p-6 sm:p-8 lg:p-10 flex items-start">
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 bg-brand-orange inline-block flex-shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                INTRODUCTION
              </span>
            </div>
          </div>

          {/* Columns 2-4: Headline on the RIGHT SIDE with refined font weight (Matching reference image) */}
          <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] uppercase tracking-tight text-obsidian leading-[1.18]"
            >
              WE DON&apos;T JUST DESIGN INTERFACES WE SHAPE MEANINGFUL DIGITAL EXPERIENCES, REFINE EVERY INTERACTION, AND CRAFT PRODUCTS THAT TRULY CONNECT WITH PEOPLE.
            </motion.h2>
          </div>
        </div>

        {/* 4-Column Staggered Chessboard Grid with Shared Vertical Dividing Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-zinc-200/80">
          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col divide-y divide-zinc-200/80 border-b lg:border-b-0 border-zinc-200/80">
            {/* Row 1 (TOP): Photo of male with Venetian blinds shadow */}
            <div className="w-full aspect-[4/5] p-0 overflow-hidden bg-obsidian">
              <ParallaxCard className="w-full h-full">
                <div className="relative w-full h-full overflow-hidden group">
                  <Image
                    src="/images/phil-shadow-man.png"
                    alt="APT MEDIA Studio Vision Portrait"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                </div>
              </ParallaxCard>
            </div>
            {/* Row 2 (BOTTOM): Empty cell (preserving architectural grid on desktop) */}
            <div className="hidden lg:block w-full aspect-[4/5] bg-transparent" />
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col divide-y divide-zinc-200/80 border-b lg:border-b-0 border-zinc-200/80">
            {/* Row 1 (TOP): Empty cell (preserving architectural grid on desktop) */}
            <div className="hidden lg:block w-full aspect-[4/5] bg-transparent" />
            {/* Row 2 (BOTTOM): OUR VISION Card */}
            <div className="w-full aspect-[4/5] p-0 bg-white">
              <ParallaxCard className="w-full h-full">
                <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-brand-orange transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-orange inline-block flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-[11px] font-mono font-bold tracking-widest uppercase text-obsidian">
                        OUR VISION
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <p className="text-base sm:text-base lg:text-sm text-zinc-700 leading-relaxed font-normal">
                      To create digital experiences that inspire, engage, and elevate brands in a fast-evolving digital world.
                    </p>
                  </div>
                </div>
              </ParallaxCard>
            </div>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col divide-y divide-zinc-200/80 border-b lg:border-b-0 border-zinc-200/80">
            {/* Row 1 (TOP): OUR MISSION Card */}
            <div className="w-full aspect-[4/5] p-0 bg-white">
              <ParallaxCard className="w-full h-full">
                <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-brand-orange transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-orange inline-block flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-[11px] font-mono font-bold tracking-widest uppercase text-obsidian">
                        OUR MISSION
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <p className="text-base sm:text-base lg:text-sm text-zinc-700 leading-relaxed font-normal">
                      To design intuitive and modern digital solutions that balance creativity, usability, and performance.
                    </p>
                  </div>
                </div>
              </ParallaxCard>
            </div>
            {/* Row 2 (BOTTOM): Empty cell (preserving architectural grid on desktop) */}
            <div className="hidden lg:block w-full aspect-[4/5] bg-transparent" />
          </div>

          {/* ================= COLUMN 4 ================= */}
          <div className="flex flex-col divide-y divide-zinc-200/80">
            {/* Row 1 (TOP): Empty cell (preserving architectural grid on desktop) */}
            <div className="hidden lg:block w-full aspect-[4/5] bg-transparent" />
            {/* Row 2 (BOTTOM): Photo of model + Split Button with 2px gap */}
            <div className="w-full aspect-[4/5] p-0 overflow-hidden bg-obsidian relative">
              <ParallaxCard className="w-full h-full">
                <div className="relative w-full h-full overflow-hidden group flex flex-col justify-end p-5 sm:p-6">
                  <Image
                    src="/images/phil-shadow-man.png"
                    alt="APT MEDIA Creative Team Member"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />

                  {/* Split Button with 2px gap and solid white fill at bottom of Card 4 */}
                  <div className="relative z-10">
                    <SplitButton
                      text="Let's Build Together"
                      href="#contact"
                      variant="white"
                    />
                  </div>
                </div>
              </ParallaxCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
