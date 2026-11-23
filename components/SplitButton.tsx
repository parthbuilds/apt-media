'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SplitButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'white' | 'dark' | 'black' | 'orange' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

export default function SplitButton({
  text,
  href,
  onClick,
  variant = 'dark',
  className = '',
  type = 'button',
}: SplitButtonProps) {
  const isWhite = variant === 'white';
  const isOrange = variant === 'orange';
  const isOutline = variant === 'outline';

  const textBg = isWhite
    ? 'bg-white text-zinc-900 border border-zinc-200/90 group-hover:bg-zinc-50'
    : isOrange
    ? 'bg-brand-orange text-white border border-brand-orange group-hover:bg-brand-orange-peak'
    : isOutline
    ? 'bg-white/10 backdrop-blur-md text-white border border-white/25 group-hover:bg-white/20'
    : 'bg-[#18181b] text-white border border-[#18181b] group-hover:bg-black group-hover:border-black';

  const arrowBg = isWhite
    ? 'bg-white text-zinc-900 border border-zinc-200/90 group-hover:bg-zinc-50'
    : isOrange
    ? 'bg-brand-orange text-white border border-brand-orange group-hover:bg-brand-orange-peak'
    : isOutline
    ? 'bg-white/10 backdrop-blur-md text-white border border-white/25 group-hover:bg-white/20'
    : 'bg-[#18181b] text-white border border-[#18181b] group-hover:bg-brand-orange group-hover:border-brand-orange';

  const content = (
    <div
      className={`group inline-flex items-stretch gap-[2px] transition-all duration-200 cursor-pointer ${className}`}
    >
      {/* Left text compartment */}
      <div
        className={`px-4 py-2.5 sm:px-5 sm:py-3 text-[13px] sm:text-sm font-medium tracking-normal whitespace-nowrap flex items-center transition-colors duration-200 shadow-sm ${textBg}`}
      >
        {text}
      </div>

      {/* Right square arrow compartment (separated by the 2px gap) */}
      <div
        className={`w-9 sm:w-11 self-stretch flex items-center justify-center flex-shrink-0 transition-colors duration-200 shadow-sm ${arrowBg}`}
      >
        <ArrowRight
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="inline-block">{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className="inline-block text-left p-0 border-0 bg-transparent">
      {content}
    </button>
  );
}
