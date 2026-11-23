'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ParallaxCard from './ParallaxCard';
import SplitButton from './SplitButton';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  colSpan: string;
  aspectRatio: string;
}

export default function SelectedWorks() {
  const row1Projects: Project[] = [
    {
      id: '01',
      title: 'Creative Hub',
      category: 'VISUAL IDENTITY',
      year: '2023',
      image: '/images/project-creative-hub.png',
      colSpan: 'lg:col-span-3',
      aspectRatio: 'aspect-square',
    },
    {
      id: '02',
      title: 'Design Oasis',
      category: 'USER EXPERIENCE',
      year: '2024',
      image: '/images/project-design-oasis.png',
      colSpan: 'lg:col-span-5',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: '03',
      title: 'Inspire Studio',
      category: 'BRAND STRATEGY',
      year: '2022',
      image: '/images/project-inspire-studio.png',
      colSpan: 'lg:col-span-4',
      aspectRatio: 'aspect-[4/3]',
    },
  ];

  const row2Projects: Project[] = [
    {
      id: '04',
      title: 'Visionary Works',
      category: 'MOTION GRAPHICS',
      year: '2025',
      image: '/images/project-visionary-works.png',
      colSpan: 'lg:col-span-4',
      aspectRatio: 'aspect-[16/10]',
    },
    {
      id: '05',
      title: 'Artistry Collective',
      category: 'INTERACTIVE DESIGN',
      year: '2020',
      image: '/images/project-artistry-collective.png',
      colSpan: 'lg:col-span-3',
      aspectRatio: 'aspect-square',
    },
    {
      id: '06',
      title: 'Pixel Perfect',
      category: 'WEB DEVELOPMENT',
      year: '2021',
      image: '/images/project-pixel-perfect.png',
      colSpan: 'lg:col-span-5',
      aspectRatio: 'aspect-[16/11]',
    },
  ];

  return (
    <section id="work" className="bg-white py-28 px-6 md:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-brand-orange inline-block" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                PROJECTS
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-obsidian leading-[0.95]">
              SELECTED <br />
              <span className="text-brand-orange">WORKS</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4 max-w-sm">
            <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed text-left md:text-right">
              Exploring ideas through design, building experiences that stand out and perform.
            </p>
            <SplitButton
              text="View all Project"
              href="#work"
              variant="dark"
            />
          </div>
        </div>

        {/* Row 1 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-12">
          {row1Projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${project.colSpan} group cursor-pointer`}
            >
              <ParallaxCard>
                <div className={`relative w-full ${project.aspectRatio} overflow-hidden bg-zinc-100 border border-zinc-200/90 shadow-sm`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Card Metadata beneath image */}
                <div className="mt-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-obsidian tracking-tight group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-medium">
                    {project.year}
                  </span>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>

        {/* Row 2 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {row2Projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${project.colSpan} group cursor-pointer`}
            >
              <ParallaxCard>
                <div className={`relative w-full ${project.aspectRatio} overflow-hidden bg-zinc-100 border border-zinc-200/90 shadow-sm`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Card Metadata */}
                <div className="mt-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-obsidian tracking-tight group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-medium">
                    {project.year}
                  </span>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
