'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const DURATION = 5;

const loopAnimate = { opacity: [0, 1, 1, 0], y: [-80, 0, 0, 60] };

const loopTransition = (delay = 0) => ({
  duration: DURATION,
  delay,
  times: [0, 0.15, 0.85, 1],
  ease: 'easeOut' as const,
  repeat: Infinity,
});

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

      <div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{
          paddingTop: 'clamp(90px, 14vh, 140px)',
          paddingBottom: 'clamp(70px, 12vh, 120px)',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -80 }}
          animate={loopAnimate}
          transition={loopTransition(0)}
          style={{
            color: '#C9A96E',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            fontSize: 'clamp(22px, min(2.8vw, 4vh), 44px)',
            marginBottom: 'clamp(16px, 5vh, 56px)',
          }}
        >
          ALB-ART
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={loopAnimate}
          transition={loopTransition(0.2)}
          className="font-serif text-white"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(36px, min(7.5vw, 10vh), 112px)',
            lineHeight: 1.1,
            maxWidth: '1200px',
            marginBottom: 'clamp(18px, 5.5vh, 64px)',
          }}
        >
          Arti i Qeramikës <br />
          <span style={{ color: '#C9A96E' }}>në Çdo Detaj</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -80 }}
          animate={loopAnimate}
          transition={loopTransition(0.4)}
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 100,
            fontSize: 'clamp(16px, min(1.9vw, 2.8vh), 28px)',
            lineHeight: 1.6,
            letterSpacing: '0.02em',
            maxWidth: '860px',
            marginBottom: 'clamp(20px, 6vh, 72px)',
          }}
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
            gap: '28px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/projects"
            style={{
              backgroundColor: '#C9A96E',
              color: 'white',
              fontWeight: 700,
              padding: 'clamp(14px, 2.4vh, 20px) clamp(32px, 4vw, 52px)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(12px, min(1.1vw, 1.8vh), 16px)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Shiko Projektet
          </Link>
          <Link
            href="/contact"
            style={{
              border: '2px solid white',
              color: 'white',
              fontWeight: 700,
              padding: 'clamp(14px, 2.4vh, 20px) clamp(32px, 4vw, 52px)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              fontSize: 'clamp(12px, min(1.1vw, 1.8vh), 16px)',
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
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
