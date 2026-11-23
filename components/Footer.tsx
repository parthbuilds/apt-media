'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Send, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#feedback' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter / X', href: 'https://x.com', icon: Twitter },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: Globe },
  ];

  return (
    <footer id="contact" className="bg-obsidian text-white pt-24 pb-12 px-6 md:px-12 border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Newsletter & Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-zinc-800">
          {/* Newsletter Box */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-orange font-medium block">
              NEWSLETTER
            </span>
            <h3 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
              STAY UPDATED WITH OUR <br />
              <span className="text-zinc-400">LATEST WORK AND INSIGHTS</span>
            </h3>
            <p className="text-xs text-zinc-400 max-w-md">
              A bi-weekly digest of design systems, brand psychology, and frontend engineering explorations. No spam.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-5 py-3 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono placeholder:text-zinc-500 focus:outline-none focus:border-brand-orange flex-grow"
              />
              <button
                type="submit"
                className="px-7 py-3 bg-brand-orange hover:bg-brand-orange-peak text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md border border-brand-orange"
              >
                <span>Subscribe</span>
                <Send size={13} />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-2">
                <CheckCircle2 size={14} />
                <span>Thank you for subscribing to APT MEDIA Insights!</span>
              </div>
            )}
          </div>

          {/* Contact Details & Office */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-3 font-bold">
                EMAIL
              </span>
              <a
                href="mailto:hello@aptmedia.studio"
                className="text-white hover:text-brand-orange transition-colors block text-sm"
              >
                hello@aptmedia.studio
              </a>
              <a
                href="mailto:press@aptmedia.studio"
                className="text-zinc-400 hover:text-brand-orange transition-colors block mt-1"
              >
                press@aptmedia.studio
              </a>
            </div>

            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-3 font-bold">
                LOCATION
              </span>
              <p className="text-zinc-300 leading-relaxed">
                3162 Martin Luther King Jr Blvd,
                <br />
                Fayetteville AR 72704
              </p>
              <p className="text-zinc-500 mt-2">
                Secondary Studio: London, UK
              </p>
            </div>

            <div>
              <span className="text-zinc-500 uppercase tracking-widest block mb-3 font-bold">
                CONTACT
              </span>
              <p className="text-white font-medium text-sm">
                +1 (555) 234-5678
              </p>
              <div className="mt-4 flex items-center gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                <span className="text-[10px]">CURRENTLY ACCEPTING CLIENTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: Navigation Links & Social Media */}
        <div className="py-12 border-b border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-zinc-400">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
                >
                  <Icon size={14} />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Colossal Full-Bleed Typographic Wordmark: APT MEDIA (Guaranteed Strictly Single Line) */}
        <div className="pt-16 pb-8 w-full text-center select-none overflow-hidden flex items-center justify-center">
          <h1
            style={{ whiteSpace: 'nowrap' }}
            className="font-display font-semibold text-[9vw] sm:text-[10vw] md:text-[10.8vw] lg:text-[11.2vw] tracking-tight leading-none text-brand-orange hover:text-brand-orange-peak transition-colors cursor-default uppercase whitespace-nowrap inline-flex items-baseline justify-center max-w-full"
          >
            <span>APT MEDIA</span>
            <span className="text-[2.8vw] font-mono ml-2 align-super">™</span>
          </h1>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          <div>
            ALL COPYRIGHT RESERVED. APT MEDIA STUDIO 2026
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              TERMS & CONDITIONS
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              STYLE GUIDE
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              404 ERROR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
