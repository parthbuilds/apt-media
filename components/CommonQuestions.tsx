'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function CommonQuestions() {
  // Item 1 ("What information do you need to get started?") is expanded by default to match reference Image 4
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs: FaqItem[] = [
    {
      question: 'How long does a project usually take?',
      answer:
        'Most projects take between 2 to 6 weeks depending on scope and complexity. We provide an exact day-by-day milestone roadmap before kickoff so expectations are clear from day one.',
    },
    {
      question: 'What information do you need to get started?',
      answer:
        'We need a brief about your goals, target audience, and any references you have. All plans include revisions to ensure the final result meets your expectations. Most projects take between 1–3 weeks depending on scope and complexity.',
    },
    {
      question: 'Do you offer revisions?',
      answer:
        'Yes! All plans include iterative review cycles so you are never surprised by final deliverables. We refine each screen until your team is genuinely thrilled.',
    },
    {
      question: 'Can you handle both design and development?',
      answer:
        'Absolutely. We design and build modern Next.js, React, and WebGL web experiences with pixel-perfect attention to detail, accessible code, and blazing load times.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes, our clients span North America, Europe, Australia, and Asia. We combine asynchronous updates with timezone-friendly syncs for seamless worldwide collaboration.',
    },
  ];

  return (
    <section id="faq" className="relative bg-[#F7F7F7] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-12 border-t border-zinc-200 overflow-hidden">
      {/* 4-Column Continuous Architectural Grid Container (Matching Image 4 Reference) */}
      <div className="relative max-w-7xl mx-auto border-x border-zinc-200/80">
        {/* Continuous Full-Height Vertical Column Lines in Background */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80" />

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4">
          {/* ================= COLUMN 1: FAQ BADGE & CLUTCH REVIEW PROOF ================= */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 border-zinc-200/80">
            {/* Top: Section Tag */}
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-orange inline-block flex-shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                  FAQ
                </span>
              </div>
            </div>

            {/* Bottom: Authentic Clutch Review Widget (Matching Image 2 Reference) */}
            <div className="hidden lg:block pt-16 lg:pt-0 mt-auto">
              <div className="relative w-48 sm:w-52 aspect-[266/127] hover:opacity-90 transition-opacity">
                <Image
                  src="/images/faq-clutch-widget.png"
                  alt="10+ Years Experience, 4.9 Star Reviews on Clutch.co"
                  fill
                  className="object-contain object-left-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ================= COLUMNS 2-4: HEADING ON TOP & ACCORDION ROWS ================= */}
          <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            {/* Top: Heading COMMON QUESTIONS spanning Columns 2-4 */}
            <div className="pb-10 sm:pb-14 lg:pb-16">
              <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.92]">
                <span className="text-obsidian block">COMMON</span>
                <span className="text-brand-orange block">QUESTIONS</span>
              </h2>
            </div>

            {/* Accordion List with Clean Minimal Divider Lines (Matching Image 4) */}
            <div className="w-full border-t border-zinc-200/80">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="border-b border-zinc-200/80 transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full py-6 sm:py-7 text-left flex items-center justify-between gap-6 group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-medium text-lg sm:text-xl md:text-2xl text-obsidian tracking-tight group-hover:text-brand-orange transition-colors">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 text-zinc-500 group-hover:text-obsidian transition-colors">
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-obsidian' : ''
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-3xl">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Clutch Widget on Mobile (Visible below accordion on small screens) */}
            <div className="block lg:hidden pt-12">
              <div className="relative w-48 aspect-[266/127]">
                <Image
                  src="/images/faq-clutch-widget.png"
                  alt="10+ Years Experience, 4.9 Star Reviews on Clutch.co"
                  fill
                  className="object-contain object-left-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
