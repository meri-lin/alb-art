import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
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
          Na Gjeni
        </p>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '56px',
            color: 'white',
            fontWeight: 400,
          }}
        >
          Kontakt
        </h1>
      </div>

      {/* Content */}
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 24px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Informacioni */}
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
              Informacion
            </p>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '40px',
                color: '#1C1C1C',
                fontWeight: 400,
                marginBottom: '32px',
              }}
            >
              Na Kontaktoni
            </h2>
            <p
              style={{
                color: '#8C8C8C',
                fontSize: '15px',
                lineHeight: '1.8',
                fontWeight: 300,
                marginBottom: '48px',
              }}
            >
              Jemi të gatshëm t'ju ndihmojmë të zgjidhni materialin e duhur për
              projektin tuaj. Vizitoni showroomin tonë ose na kontaktoni direkt.
            </p>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <div>
                <h4
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    marginBottom: '8px',
                  }}
                >
                  Adresa
                </h4>
                <p
                  style={{
                    color: '#8C8C8C',
                    fontSize: '14px',
                    fontWeight: 300,
                  }}
                >
                  Tiranë, Shqipëri
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    marginBottom: '8px',
                  }}
                >
                  Telefon
                </h4>
                <p
                  style={{
                    color: '#8C8C8C',
                    fontSize: '14px',
                    fontWeight: 300,
                  }}
                >
                  +355 67 200 1043
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </h4>
                <p
                  style={{
                    color: '#8C8C8C',
                    fontSize: '14px',
                    fontWeight: 300,
                  }}
                >
                  info@albart.al
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    marginBottom: '8px',
                  }}
                >
                  Orari
                </h4>
                <p
                  style={{
                    color: '#8C8C8C',
                    fontSize: '14px',
                    fontWeight: 300,
                  }}
                >
                  E Hënë - E Shtunë: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulari */}
          <div style={{ backgroundColor: 'white', padding: '48px' }}>
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px',
                color: '#1C1C1C',
                marginBottom: '32px',
                fontWeight: 400,
              }}
            >
              Dërgoni një Mesazh
            </h3>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <label
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Emri
                </label>
                <input
                  type="text"
                  placeholder="Emri juaj"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid #E5E5E5',
                    outline: 'none',
                    fontSize: '14px',
                    fontFamily: 'Jost, sans-serif',
                    color: '#1C1C1C',
                    backgroundColor: '#FAFAFA',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@juaj.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid #E5E5E5',
                    outline: 'none',
                    fontSize: '14px',
                    fontFamily: 'Jost, sans-serif',
                    color: '#1C1C1C',
                    backgroundColor: '#FAFAFA',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#1C1C1C',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Mesazhi
                </label>
                <textarea
                  placeholder="Si mund t'ju ndihmojmë?"
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid #E5E5E5',
                    outline: 'none',
                    fontSize: '14px',
                    fontFamily: 'Jost, sans-serif',
                    color: '#1C1C1C',
                    backgroundColor: '#FAFAFA',
                    resize: 'none',
                  }}
                />
              </div>
              <button
                style={{
                  backgroundColor: '#C9A96E',
                  color: 'white',
                  padding: '16px 32px',
                  border: 'none',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Dërgo Mesazhin
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
