'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ParallaxCard from './ParallaxCard';
import SplitButton from './SplitButton';

export default function CreativeMinds() {
  return (
    <section id="team" className="bg-obsidian text-white pt-10 sm:pt-12 lg:pt-14 pb-52 sm:pb-60 lg:pb-72 px-6 md:px-12 border-t border-zinc-800">
      {/* 4-Column Continuous Architectural Grid Container (Matching Reference Image) */}
      <div className="max-w-7xl mx-auto border-x border-zinc-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-zinc-800/80">
          {/* ================= COLUMN 1 ================= */}
          <div className="p-6 lg:p-8 pt-1 sm:pt-1 lg:pt-2 flex flex-col justify-between border-b md:border-b-0 border-zinc-800/80">
            {/* Top: Section Header - Sized to fit cleanly within Column 1 with ample line clearance */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-orange inline-block flex-shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  TEAM
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] uppercase tracking-tight leading-[0.95]">
                <span className="text-white block">CREATIVE</span>
                <span className="text-brand-orange block">MINDS</span>
              </h2>
            </div>

            {/* Generous Spacer for Staggered Monumental Cascade */}
            <div className="hidden lg:block h-80 xl:h-[26rem]" />

            {/* Middle-Bottom: Ethan Cole Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 lg:mt-0"
            >
              {/* Meta Label Above Photo */}
              <div className="flex items-center justify-between pb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-200 font-medium">Ethan Cole</span>
                <span className="text-zinc-500">UI/UX DESIGNER</span>
              </div>
              <ParallaxCard className="aspect-[4/5] w-full">
                <div className="relative w-full h-full overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-md group">
                  <Image
                    src="/images/team-ethan.png"
                    alt="Ethan Cole — UI/UX Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                </div>
              </ParallaxCard>
            </motion.div>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 border-zinc-800/80">
            {/* Top: Ava Mitchell Card positioned with generous vertical clearance so heading is NOT crowded */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-12 lg:mt-0 lg:pt-48 xl:pt-56"
            >
              {/* Meta Label Above Photo */}
              <div className="flex items-center justify-between pb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-200 font-medium">Ava Mitchell</span>
                <span className="text-zinc-500">CREATIVE DIRECTOR</span>
              </div>
              <ParallaxCard className="aspect-[4/5] w-full">
                <div className="relative w-full h-full overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-md group">
                  <Image
                    src="/images/team-ava.png"
                    alt="Ava Mitchell — Creative Director"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                </div>
              </ParallaxCard>
            </motion.div>

            {/* Bottom: Empty space on desktop maintaining the architectural grid */}
            <div className="hidden lg:block h-64 xl:h-80" />
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 border-zinc-800/80">

            {/* Spacer before Sophia Laurent */}
            <div className="hidden lg:block h-80 xl:h-[28rem]" />

            {/* Bottom: Sophia Laurent Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 lg:mt-0"
            >
              {/* Meta Label Above Photo */}
              <div className="flex items-center justify-between pb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-200 font-medium">Sophia Laurent</span>
                <span className="text-zinc-500">PRODUCT DESIGNER</span>
              </div>
              <ParallaxCard className="aspect-[4/5] w-full">
                <div className="relative w-full h-full overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-md group">
                  <Image
                    src="/images/team-sophia.png"
                    alt="Sophia Laurent — Product Designer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                </div>
              </ParallaxCard>
            </motion.div>
          </div>

          {/* ================= COLUMN 4 ================= */}
          <div className="p-6 lg:p-8 pt-1 sm:pt-1 lg:pt-2 flex flex-col justify-between">
            {/* Top: Description & Action Button - Positioned High Up at Top Line */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                A team of passionate designers &amp; creators dedicated to crafting digital experiences.
              </p>
              <div className="pt-2">
                <SplitButton
                  text="Join Our Team"
                  href="#contact"
                  variant="white"
                />
              </div>
            </div>

            {/* Middle: Arthur Cole / Artistry Collective Card with generous top margin so Join Our Team is never too close */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-28 lg:mt-40 xl:mt-48 mb-16 lg:mb-24"
            >
              {/* Meta Label Above Photo */}
              <div className="flex items-center justify-between pb-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span className="text-zinc-200 font-medium">Artistry Collective</span>
                <span className="text-zinc-500">INTERACTIVE DESIGN</span>
              </div>
              <ParallaxCard className="aspect-[4/5] w-full">
                <div className="relative w-full h-full overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-md group">
                  <Image
                    src="/images/team-arthur.png"
                    alt="Artistry Collective / Arthur Cole — Interactive Design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                </div>
              </ParallaxCard>
            </motion.div>

            {/* Bottom: View All Team Square White Button with Arrow Up-Right */}
            <div className="flex flex-col items-end pt-8">
              <Link
                href="#team"
                className="w-12 h-12 bg-white text-obsidian flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors shadow-md"
                aria-label="View all team members"
              >
                <ArrowUpRight size={20} strokeWidth={2.2} />
              </Link>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mt-2 font-medium">
                View All Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
