'use client';

import React from 'react';
import Image from 'next/image';

export default function LogoMarquee() {
  const clientLogos = [
    { id: 1, name: 'Client Logo 1', src: '/images/clients/client-1.svg' },
    { id: 2, name: 'Client Logo 2', src: '/images/clients/client-2.svg' },
    { id: 3, name: 'Client Logo 3', src: '/images/clients/client-3.svg' },
    { id: 4, name: 'Client Logo 4', src: '/images/clients/client-4.svg' },
    { id: 5, name: 'Client Logo 5', src: '/images/clients/client-5.svg' },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-12 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* ================= DESKTOP VIEW: Static 5-Partitioned Grid matching Reference Image ================= */}
        <div className="hidden md:block w-full border border-zinc-200/90 bg-white shadow-sm">
          <div className="grid grid-cols-5 divide-x divide-zinc-200/90">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="h-32 sm:h-36 flex items-center justify-center p-6 bg-white hover:bg-zinc-50 transition-colors duration-200 group cursor-default"
                title={logo.name}
              >
                <div className="flex items-center justify-center w-full max-w-[180px]">
                  <Image
                    unoptimized
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={72}
                    className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto max-h-16 max-w-[180px] object-contain group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE VIEW: Animated Moving Marquee with Cleanly Separated Bordered Cells ================= */}
        <div className="block md:hidden w-full border border-zinc-200/90 bg-white overflow-hidden shadow-sm">
          <div className="flex items-stretch animate-marquee whitespace-nowrap min-w-max">
            {/* Set 1 */}
            {clientLogos.map((logo) => (
              <div
                key={`m1-${logo.id}`}
                className="w-64 h-28 flex items-center justify-center px-6 border-r border-zinc-200/90 flex-shrink-0 bg-white"
                title={logo.name}
              >
                <Image
                  unoptimized
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="h-10 sm:h-12 w-auto max-h-12 max-w-[170px] object-contain"
                />
              </div>
            ))}
            {/* Set 2 (for seamless loop) */}
            {clientLogos.map((logo) => (
              <div
                key={`m2-${logo.id}`}
                className="w-64 h-28 flex items-center justify-center px-6 border-r border-zinc-200/90 flex-shrink-0 bg-white"
                title={logo.name}
              >
                <Image
                  unoptimized
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="h-10 sm:h-12 w-auto max-h-12 max-w-[170px] object-contain"
                />
              </div>
            ))}
            {/* Set 3 (ensures full coverage on wider tablets) */}
            {clientLogos.map((logo) => (
              <div
                key={`m3-${logo.id}`}
                className="w-64 h-28 flex items-center justify-center px-6 border-r border-zinc-200/90 flex-shrink-0 bg-white"
                title={logo.name}
              >
                <Image
                  unoptimized
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="h-10 sm:h-12 w-auto max-h-12 max-w-[170px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
