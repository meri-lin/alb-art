'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    name: 'Statuario Bianco',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP2-Statuario_bianco-scaled.jpg',
  },
  {
    name: 'Calacatta Oro',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP3-Calacatta_oro.jpg',
  },
  {
    name: 'Onice Crema',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP4-Onice_crema-scaled.jpg',
  },
  {
    name: 'Calacatta Venato',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP5-Calacatta_venato-scaled.jpg',
  },
  {
    name: 'Statuario Venato',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP6-Statuario_venato-scaled.jpg',
  },
  {
    name: 'Solid White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP8-Solid_white.jpg',
  },
  {
    name: 'Cement White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP10-Cement_white-scaled.jpg',
  },
  {
    name: 'Cement Grey',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP11-Cement_grey-scaled.jpg',
  },
  {
    name: 'Cement Black',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP12-Cement_black-scaled.jpg',
  },
  {
    name: 'Statuario',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP13-Statuario-scaled.jpg',
  },
  {
    name: 'Travertino Silver',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP16-Travertino_Silver-scaled.jpg',
  },
  {
    name: 'Panda White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP15-Panda_white.jpg',
  },
  {
    name: 'Statuario Light',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP18_Statuario_light-scaled.jpg',
  },
  {
    name: 'Onice Perla',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP19-Onice_perla-scaled.jpg',
  },
  {
    name: 'Nero Marquinia',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP21-Nero_marquinia-scaled.jpg',
  },
  {
    name: 'Pietra Grigia',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP23-Pietra_grigia-scaled.jpg',
  },
  {
    name: 'Invisible White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP35-Invisible_white-scaled.jpg',
  },
  {
    name: 'Cementine',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP29-Cementine-scaled.jpg',
  },
  {
    name: 'Maioliche',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP30-Maioliche-scaled.jpg',
  },
  {
    name: 'Arabescato Oro',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP31-Arabescato_oro-scaled.jpg',
  },
  {
    name: 'Purple Emma',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP40-Purple_emma-scaled.jpg',
  },
  {
    name: 'Super White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP36-Super-white-scaled.jpg',
  },
  {
    name: 'Grey Shadow',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP37-Grey_shadow-scaled.jpg',
  },
  {
    name: 'Green Sofia',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP41-Green_sofia-scaled.jpg',
  },
  {
    name: 'Pure White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP24-Pure_white-scaled.jpg',
  },
  {
    name: 'Dolominte',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP25-Dolominte-scaled.jpg',
  },
  {
    name: 'Crystal White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP26-Crystal-white-scaled.jpg',
  },
  {
    name: 'Precious Marble',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP27-Precious_Marble.jpg',
  },
  {
    name: 'Taj Mahal White',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP47-Taj_mahal_white-scaled.jpg',
  },
  {
    name: 'Onice Bianco',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP44-Onice_bianco-scaled.jpg',
  },
  {
    name: 'Regia Onyx',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP1919-REGIA_ONYX-scaled.jpg',
  },
  {
    name: 'Onice Nero',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP45_Onice_nero_2.jpg',
  },
  {
    name: 'Onice Extra Bianco',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP46_Onice_extra_Bianco.jpg',
  },
  {
    name: 'Pietra Silver',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP43-Pietra_silver-scaled.jpg',
  },
];

const SHOW_INITIAL = 8;

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? products : products.slice(0, SHOW_INITIAL);

  return (
    <section className="py-24 px-6 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A96E] tracking-[0.4em] uppercase text-sm mb-4">
            Koleksioni Neolith
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] mb-4">
            Materialet Tona
          </h2>
          <p className="text-[#8C8C8C] max-w-xl mx-auto font-light">
            Çdo material është zgjedhur me kujdes për cilësinë, qëndrueshmërinë
            dhe elegancën e tij.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {visible.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.1 }}
              className="group relative overflow-hidden cursor-pointer bg-white"
              style={{ maxWidth: '100%' }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/40 transition-all duration-500" />
              </div>
              <div className="py-3 px-2">
                <h3 className="font-serif text-base text-[#1C1C1C]">
                  {product.name}
                </h3>
                <p className="text-[#C9A96E] text-xs tracking-widest uppercase mt-1">
                  Neolith
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="border border-[#1C1C1C] text-[#1C1C1C] px-12 py-4 tracking-widest uppercase text-sm hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
            >
              Shiko të Gjitha ({products.length})
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
