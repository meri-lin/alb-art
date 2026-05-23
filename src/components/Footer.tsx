import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1C1C1C',
        color: 'white',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* 3 kolonat */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Kolona 1 - Logo */}
          <div>
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px',
                marginBottom: '16px',
              }}
            >
              ALB<span style={{ color: '#C9A96E' }}>ART</span>
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '14px',
                lineHeight: '1.8',
                fontWeight: 300,
              }}
            >
              Prodhues dhe përpunues i qeramikës Neolith për kuzhinë, banjo dhe
              ambiente luksoze në Shqipëri.
            </p>
          </div>

          {/* Kolona 2 - Navigim */}
          <div>
            <h4
              style={{
                color: '#C9A96E',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontSize: '11px',
                marginBottom: '24px',
              }}
            >
              Navigim
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                { label: 'Home', href: '/' },
                { label: 'Projektet', href: '/projects' },
                { label: 'Materialet', href: '/materials' },
                { label: 'Rreth Nesh', href: '/about' },
                { label: 'Kontakt', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      fontWeight: 300,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolona 3 - Kontakt */}
          <div>
            <h4
              style={{
                color: '#C9A96E',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontSize: '11px',
                marginBottom: '24px',
              }}
            >
              Kontakt
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontWeight: 300,
                }}
              >
                Tirane, Shqiperi
              </li>
              <li
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontWeight: 300,
                }}
              >
                Tel: +355 67 200 1043
              </li>
              <li
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontWeight: 300,
                }}
              >
                Email: info@albart.al
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Instagram
              </a>
              <a
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
            2025 Alb Art. Te gjitha te drejtat e rezervuara.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
            Neolith — Qeramike Luksoze
          </p>
        </div>
      </div>
    </footer>
  );
}
