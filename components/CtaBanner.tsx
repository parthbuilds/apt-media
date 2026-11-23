'use client';

import { motion } from 'framer-motion';
import SplitButton from './SplitButton';

export default function CtaBanner() {
  return (
    <section className="bg-white py-24 sm:py-32 px-6 md:px-12 border-t border-zinc-200 text-center relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold mb-6">
            TRANSFORM YOUR VISION
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-obsidian leading-[0.95]">
            READY TO CREATE <br />
            SOMETHING PEOPLE <br />
            <span className="text-brand-orange">WILL REMEMBER?</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-zinc-500 max-w-xl mx-auto font-normal">
            We partner with visionary founders, daring startups, and established global brands to craft category-defining digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <SplitButton
              text="Let's Collaborate Together"
              href="#contact"
              variant="dark"
              className="shadow-2xl scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
