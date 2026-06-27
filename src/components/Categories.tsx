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
                <div className="py-3 px-2">
                  <h3 className="font-serif text-base text-[#1C1C1C]">
                    {product.name}
                  </h3>
                  <p className="text-[#C9A96E] text-xs tracking-widest uppercase mt-1">
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
