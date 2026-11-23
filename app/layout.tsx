import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'APT MEDIA™ — Bespoke Digital Experiences & Brand Design',
  description:
    "We don't just design interfaces — we shape meaningful digital experiences, refine every interaction, and craft products that truly connect with people.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-zinc-900 selection:bg-brand-orange selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
