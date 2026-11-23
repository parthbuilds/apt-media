'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import SplitButton from './SplitButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div
        className={`px-6 md:px-12 py-3 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-zinc-800 shadow-2xl'
            : 'bg-obsidian/60 backdrop-blur-sm border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo: APT MEDIA (Official Vector Logo Image) */}
          <Link href="#" className="group flex items-center">
            <Image
              src="/images/E visa.svg"
              alt="APT MEDIA"
              width={180}
              height={72}
              priority
              className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
            />
          </Link>

          {/* Desktop Center Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium tracking-widest uppercase text-zinc-300 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Section */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-zinc-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center hover:text-white hover:border-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>

            {/* Split Button with gap */}
            <SplitButton
              text="Let's Collab"
              href="#contact"
              variant="outline"
            />

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-obsidian border-b border-zinc-800 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-display font-bold uppercase tracking-wider text-zinc-300 hover:text-brand-orange py-1 border-b border-zinc-900"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between">
                <SplitButton
                  text="Let's Collab"
                  href="#contact"
                  variant="white"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
