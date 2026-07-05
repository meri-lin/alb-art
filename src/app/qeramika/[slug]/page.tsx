// src/app/qeramika/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  products,
  getProductBySlug,
  DEFAULT_SIZE,
  DEFAULT_THICKNESSES,
  DEFAULT_FINISHES,
} from '@/app/data/products';

// Gjeneron statikisht një faqe për secilin produkt (/qeramika/statuario-bianco, etj.)
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Alb-Art Marbles`,
    description: `${product.name} - ${product.collection}. Pllaka qeramike nga Alb-Art Marbles.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const size = product.size ?? DEFAULT_SIZE;
  const thicknesses = product.thicknesses ?? DEFAULT_THICKNESSES;
  const finishes = product.finishes ?? DEFAULT_FINISHES;
  const bookmatchImages = product.bookmatchImages ?? [];

  return (
    <main className="bg-[#FFF] min-h-screen pt-32 pb-24 px-6">
      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
          margin-top: 40px;
          margin-bottom: 48px;
        }
        .product-title {
          font-size: 1.875rem;
        }
        .product-spec-value {
          font-size: 1.125rem;
        }
        @media (max-width: 767px) {
          main {
            padding-left: 24px;
            padding-right: 24px;
          }
          .product-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .product-title {
            font-size: 1.5rem;
          }
          .product-spec-value {
            font-size: 0.95rem;
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <Link
          href="/materials"
          className="text-[#8C8C8C] text-sm tracking-widest uppercase hover:text-[#1C1C1C] transition-colors no-underline"
        >
          ← Materialet
        </Link>

        {/* Grid me 3 kolona (desktop) / 1 kolonë (mobile) - CSS standarde, pa Tailwind */}
        <div className="product-grid">
          {/* Rreshti 1, Kolona 1: Titulli */}
          <div>
            <p className="text-[#C9A96E] tracking-[0.4em] uppercase text-sm mb-3">
              {product.collection}
            </p>
            <h1 className="product-title font-serif text-[#1C1C1C] leading-tight">
              {product.name}
            </h1>

            <Link
              href="/contact"
              className="inline-block mt-10 border border-[#1C1C1C] text-[#1C1C1C] px-8 py-3 tracking-widest uppercase text-xs hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 w-fit no-underline"
            >
              Kërko Informacion
            </Link>
          </div>

          {/* Rreshti 1, Kolona 2: Foto kryesore () */}
          <div style={{ width: '100%', maxWidth: '320px', margin: '0 auto' }}>
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-white shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Rreshti 1, Kolona 3: Foto detaji #1 (nëse ekziston) */}
          {product.detailImages && product.detailImages[0] && (
            <div style={{ width: '100%', maxWidth: '320px', margin: '0 auto' }}>
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-white shadow-sm">
                <img
                  src={product.detailImages[0]}
                  alt={`${product.name} - detaj teksture 1`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Rreshti 2, Kolona 1: Foto detaji #2 (vetëm nëse ekziston) */}
          {product.detailImages && product.detailImages[1] && (
            <div style={{ width: '100%', maxWidth: '320px', margin: '0 auto' }}>
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-white shadow-sm">
                <img
                  src={product.detailImages[1]}
                  alt={`${product.name} - detaj teksture 2`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Specifikimet teknike - mbushin pjesën tjetër të rreshtit 2 */}
          <div className="space-y-6">
            <SpecRow label="Formati / Size" value={size} />
            <SpecRow
              label="Spesori / Thicknesses"
              value={thicknesses.join(', ')}
            />
            <SpecRow
              label="Sipërfaqja / Finishes"
              value={finishes.join(', ')}
            />
          </div>
        </div>

        {/* Bookmatch - variantet e kombinimit */}
        <section className="mb-20">
          <p className="text-[#C9A96E] tracking-[0.4em] uppercase text-sm mb-3">
            Grafika
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1C1C1C] mb-8">
            Zgjidhjet e Faqeve / Bookmatch Solutions
          </h2>

          {bookmatchImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bookmatchImages.map((variant, i) => (
                <div key={i} className="bg-white">
                  <div className="aspect-[1/2] overflow-hidden">
                    <img
                      src={variant.image}
                      alt={variant.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-xs tracking-widest uppercase text-[#8C8C8C] py-3">
                    {variant.label}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white py-16 px-6 text-center text-[#8C8C8C]">
              Foto e variantëve bookmatch për <strong>{product.name}</strong> po
              përgatitet — kontaktoni për detaje.
            </div>
          )}
        </section>

        {/* Foto e ambientit (render) */}
        {product.ambientImage && (
          <section>
            <div className="w-full aspect-video overflow-hidden bg-white">
              <img
                src={product.ambientImage}
                alt={`${product.name} - ambient`}
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#1C1C1C]/10 pb-4">
      <p className="text-[#8C8C8C] text-xs tracking-widest uppercase mb-2">
        {label}
      </p>
      <p className="product-spec-value font-serif text-[#1C1C1C]">{value}</p>
    </div>
  );
}
