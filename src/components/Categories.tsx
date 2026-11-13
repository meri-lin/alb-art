'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { products } from '@/app/data/products';

const SHOW_INITIAL = 8;

export default function Categories() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? products : products.slice(0, SHOW_INITIAL);

  return (
    <section
      style={{
        backgroundColor: '#F5F2ED',
        paddingTop: 'clamp(100px, 12vw, 180px)',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        overflowX: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              color: '#C9A96E',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              marginBottom: '28px',
            }}
          >
            Koleksioni Neolith
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: [0, 1, 1, 0], x: [120, 0, 0, -60] }}
            transition={{
              duration: 3,
              times: [0, 0.25, 0.8, 1],
              ease: 'easeOut',
              repeat: Infinity,
            }}
            className="font-serif"
            style={{
              color: '#1C1C1C',
              fontWeight: 700,
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.15,
              marginBottom: '28px',
            }}
          >
            Materialet Tona
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: [0, 1, 1, 0], x: [120, 0, 0, -60] }}
            transition={{
              duration: 3,
              delay: 0.25,
              times: [0, 0.25, 0.8, 1],
              ease: 'easeOut',
              repeat: Infinity,
            }}
            style={{
              color: '#6B6B6B',
              fontWeight: 600,
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              lineHeight: 1.6,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Çdo material është zgjedhur me kujdes për cilësinë, qëndrueshmërinë
            dhe elegancën e tij.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {visible.map((product, i) => (
            <Link
              key={product.slug}
              href={`/qeramika/${product.slug}`}
              className="no-underline"
            >
              <motion.div
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
                <div style={{ padding: '16px 12px' }}>
                  <h3
                    className="font-serif"
                    style={{
                      color: '#1C1C1C',
                      fontWeight: 700,
                      fontSize: '18px',
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      color: '#C9A96E',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginTop: '6px',
                    }}
                  >
                    {product.collection}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '64px' }}
          >
            <button
              onClick={() => setShowAll(true)}
              style={{
                border: '2px solid #1C1C1C',
                color: '#1C1C1C',
                fontWeight: 700,
                padding: '18px 52px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '14px',
                background: 'transparent',
                cursor: 'pointer',
              }}
              className="hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
            >
              Shiko të Gjitha ({products.length})
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
