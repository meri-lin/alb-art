import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-img {
          position: relative;
          height: 500px;
          overflow: hidden;
        }
        .stats-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          text-align: center;
        }
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-img {
            height: 300px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-section {
            padding: 60px 24px !important;
          }
          .about-h2 {
            font-size: 32px !important;
          }
          .about-hero-h1 {
            font-size: 36px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div
        style={{
          backgroundColor: '#1C1C1C',
          padding: '160px 24px 80px',
          textAlign: 'center',
        }}
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
          Historia Jonë
        </p>
        <h1
          className="about-hero-h1"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '56px',
            color: 'white',
            fontWeight: 400,
          }}
        >
          Rreth Nesh
        </h1>
      </div>

      {/* Seksioni 1 */}
      <div
        className="about-section"
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 24px' }}
      >
        <div className="about-grid">
          <div>
            <p
              style={{
                color: '#C9A96E',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                fontSize: '11px',
                marginBottom: '24px',
              }}
            >
              Kush Jemi
            </p>
            <h2
              className="about-h2"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '42px',
                color: '#1C1C1C',
                fontWeight: 400,
                marginBottom: '24px',
                lineHeight: '1.3',
              }}
            >
              Arti i Qeramikës në Çdo Detail
            </h2>
            <p
              style={{
                color: '#8C8C8C',
                fontSize: '15px',
                lineHeight: '1.9',
                fontWeight: 300,
                marginBottom: '20px',
              }}
            >
              Alb Art është kompani shqiptare e specializuar në importin,
              përpunimin dhe instalimin e qeramikës Neolith — një prej
              materialeve më luksoze dhe inovative në treg.
            </p>
            <p
              style={{
                color: '#8C8C8C',
                fontSize: '15px',
                lineHeight: '1.9',
                fontWeight: 300,
              }}
            >
              Me vite eksperiencë në industri, ofrojmë zgjidhje complete për
              kuzhinë, banjo, dysheme dhe fasada — duke kombinuar cilësinë e
              lartë me dizajnin bashkëkohor.
            </p>
          </div>
          <div className="about-img">
            <img
              src="/images/about/abt_img1.webp"
              alt="Rreth Nesh"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ backgroundColor: '#1C1C1C', padding: '80px 24px' }}>
        <div className="stats-grid">
          {[
            { number: '500+', label: 'Projekte të Realizuara' },
            { number: '40+', label: 'Materiale Neolith' },
            { number: '10+', label: 'Vite Eksperiencë' },
          ].map((stat, i) => (
            <div key={i}>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '56px',
                  color: '#C9A96E',
                  fontWeight: 400,
                  marginBottom: '8px',
                }}
              >
                {stat.number}
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '12px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Seksioni 2 */}
      <div
        className="about-section"
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 24px' }}
      >
        <div className="about-grid">
          <div className="about-img">
            <img
              src="/images/about/abt_img2.webp"
              alt="Showroom"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <p
              style={{
                color: '#C9A96E',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                fontSize: '11px',
                marginBottom: '24px',
              }}
            >
              Showroom
            </p>
            <h2
              className="about-h2"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '42px',
                color: '#1C1C1C',
                fontWeight: 400,
                marginBottom: '24px',
                lineHeight: '1.3',
              }}
            >
              Vizitoni Showroomin Tonë
            </h2>
            <p
              style={{
                color: '#8C8C8C',
                fontSize: '15px',
                lineHeight: '1.9',
                fontWeight: 300,
                marginBottom: '32px',
              }}
            >
              Në showroomin tonë mund të shikoni dhe prekni të gjitha materialet
              Neolith. Ekipi ynë është i gatshëm t'ju këshillojë për zgjedhjen
              më të mirë për projektin tuaj.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                border: '1px solid #1C1C1C',
                color: '#1C1C1C',
                padding: '16px 40px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontSize: '11px',
                textDecoration: 'none',
              }}
            >
              Na Kontaktoni
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
