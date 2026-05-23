'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-4.jpeg',
    title: 'Projekt Banjo',
    material: 'Statuario Bianco',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-8.jpeg',
    title: 'Projekt Kuzhinë',
    material: 'Calacatta Oro',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-14.jpeg',
    title: 'Veshje Murale',
    material: 'Nero Marquinia',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Malat-Material-2-scaled.jpg',
    title: 'Sipërfaqe Banak',
    material: 'Emperador',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-17.jpeg',
    title: 'Ambient Luksoze',
    material: 'Onice Crema',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-10.jpeg',
    title: 'Dysheme Premium',
    material: 'Travertino Silver',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Illyrian-Grey-Material.jpeg',
    title: 'Fasadë Externe',
    material: 'Ilyrian Grey',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-1.jpeg',
    title: 'Projekt Rezidencial',
    material: 'Pure White',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-2.jpeg',
    title: 'Tavolinë Luksoze',
    material: 'Calacatta Venato',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-15.jpeg',
    title: 'Shkallë Mermeri',
    material: 'Picasso Gold',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Banak-i-punuar-me-Materialet-Emperador-dhe-Onyx-1-scaled.jpg',
    title: 'Banak Kuzhinë',
    material: 'Emperador & Onyx',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-12.jpeg',
    title: 'Ambient Modern',
    material: 'Cement Grey',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-19.jpeg',
    title: 'Projekt Dysheme',
    material: 'Picasso Gold',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-13.jpeg',
    title: 'Veshje Muri',
    material: 'Statuario Venato',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-11.jpeg',
    title: 'Projekt Zyre',
    material: 'Solid White',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-6.jpeg',
    title: 'Ambient Banjo',
    material: 'Onice Perla',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-3.jpeg',
    title: 'Projekt Hotel',
    material: 'Super White',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-7.jpeg',
    title: 'Sipërfaqe Premium',
    material: 'Crystal White',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-9.jpeg',
    title: 'Projekt Privat',
    material: 'Grey Shadow',
  },
  {
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/Art-Tradite-5.jpeg',
    title: 'Ambient Luksoze',
    material: 'Panda White',
  },
];

const SHOW_INITIAL = 8;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, SHOW_INITIAL);

  return (
    <section style={{ padding: '96px 24px', backgroundColor: '#F5F2ED' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p
            style={{
              color: '#C9A96E',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              fontSize: '12px',
              marginBottom: '16px',
            }}
          >
            Punimet Tona
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '48px',
              color: '#1C1C1C',
              fontWeight: 400,
            }}
          >
            Projektet e Realizuara
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {visible.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              style={{ cursor: 'pointer', overflow: 'hidden' }}
              className="group"
            >
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                    display: 'block',
                  }}
                  className="group-hover:scale-110"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(28,28,28,0)',
                    transition: 'background 0.5s',
                  }}
                  className="group-hover:bg-black/40"
                />
              </div>
              <div style={{ padding: '12px 4px' }}>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '18px',
                    color: '#1C1C1C',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: '#C9A96E',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}
                >
                  {project.material}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                border: '1px solid #1C1C1C',
                background: 'transparent',
                color: '#1C1C1C',
                padding: '16px 48px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              Shiko të Gjitha ({projects.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
