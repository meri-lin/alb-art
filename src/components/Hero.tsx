'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(28,28,28,0.65)',
          zIndex: 10,
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C9A96E] tracking-[0.4em] uppercase text-sm mb-6"
        >
          Qeramikë Luksoze
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8 max-w-4xl"
        >
          Arti i Qeramikës <br />
          <span className="text-[#C9A96E]">në Çdo Detail</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg max-w-xl mb-12 font-light tracking-wide"
        >
          Nga fleta e parë deri në përpunimin final — ofrojmë qeramikë të
          cilësisë së lartë për kuzhinë, banjo dhe ambiente luksoze.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/projects"
            style={{
              backgroundColor: '#C9A96E',
              color: 'white',
              padding: '16px 40px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              fontSize: '12px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Shiko Projektet
          </Link>
          <Link
            href="/contact"
            style={{
              border: '1px solid white',
              color: 'white',
              padding: '16px 40px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              fontSize: '12px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Na Kontakto
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-16 bg-white/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full bg-[#C9A96E]"
            animate={{ height: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
