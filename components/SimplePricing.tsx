'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ParallaxCard from './ParallaxCard';
import SplitButton from './SplitButton';

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
  delivery: string;
}

export default function SimplePricing() {
  const tiers: PricingTier[] = [
    {
      name: 'Starter Build',
      tagline: 'Perfect for small projects and early-stage ideas.',
      price: '$4,500',
      period: '/ one-time',
      popular: false,
      delivery: '10 Days Delivery',
      features: [
        'UI Design (up to 5 key screens)',
        'Design System (basic tokens & typography)',
        '1 Round of iterative revisions',
        'Figma source files + design tokens',
        'Direct Slack communication channel',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Standard Plan',
      tagline: 'Ideal for growing products, funded startups, and brands.',
      price: '$8,500',
      period: '/ one-time',
      popular: true,
      delivery: '20 Days Delivery',
      features: [
        'UI/UX Design (up to 15 key screens)',
        'Comprehensive multi-tier Design System',
        'Interactive micro-interactions & motion specs',
        '4 Rounds of collaborative revisions',
        'Next.js / Webflow dev-ready components',
        'Weekly strategy & design syncs',
      ],
      cta: 'Choose Plan',
    },
    {
      name: 'Custom Enterprise',
      tagline: 'For full product ecosystems and scalable enterprise solutions.',
      price: 'Custom',
      period: '/ tailored scope',
      popular: false,
      delivery: 'Flexible Milestones',
      features: [
        'End-to-end multi-platform product design',
        'Dedicated senior design & engineering team',
        'Unlimited request backlog & priority turnaround',
        'Full-stack Next.js production build',
        'Design tokens & CI/CD design automated pipeline',
        '24/7 dedicated private Slack & SLA support',
      ],
      cta: 'Contact Us',
    },
  ];

  return (
    <section id="pricing" className="bg-white py-28 px-6 md:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-brand-orange" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                PRICING & ENGAGEMENT
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-obsidian leading-[0.95]">
              SIMPLE <br />
              <span className="text-brand-orange">PRICING</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4 max-w-sm">
            <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed text-left md:text-right">
              Transparent and flexible pricing designed to fit your project needs and deliver real value.
            </p>
            <SplitButton
              text="Start a Project"
              href="#contact"
              variant="dark"
            />
          </div>
        </div>

        {/* 3 Pricing Cards with 3D Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="flex"
            >
              <ParallaxCard className="w-full flex flex-col justify-between">
                <div
                  className={`p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-300 relative border ${
                    tier.popular
                      ? 'bg-chalk border-2 border-brand-orange shadow-lg'
                      : 'bg-white border-zinc-200 shadow-sm hover:border-zinc-300'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-6 px-3.5 py-1 bg-brand-orange text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-display font-bold text-xl uppercase tracking-tight text-obsidian">
                        {tier.name}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase">
                        {tier.delivery}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-500 mb-8 min-h-[36px]">
                      {tier.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="mb-8 pb-8 border-b border-zinc-200 flex items-baseline gap-2">
                      <span className="font-display font-extrabold text-4xl sm:text-5xl text-obsidian tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase">
                        {tier.period}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                          <div className="w-4 h-4 bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-orange/30">
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sharp Split Action Button (Same compact structure with 2px gap) */}
                  <div className="pt-2">
                    <SplitButton
                      text={tier.cta}
                      href="#contact"
                      variant="dark"
                    />
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
