'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UploadForm from '@/components/UploadForm';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setError('Ju lutem plotësoni të gjitha fushat.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_jh66wnq',
        'template_paieipo',
        {
          from_name: name,
          from_email: email,
          message: message,
          image_url: 'Pa foto (mesazh nga faqja Kontakt)',
        },
        'vvngyOGIalTqzfONq'
      );

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Ndodhi një gabim. Ju lutem provoni përsëri.');
    } finally {
      setLoading(false);
    }
  };

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
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 20px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
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
                  albarttirana@gmail.com
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
                  E Hënë - E Shtunë: 09:00 - 21:00
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    boxSizing: 'border-box',
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    boxSizing: 'border-box',
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Error */}
              {error && (
                <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>
              )}

              {/* Success */}
              {success && (
                <p style={{ color: 'green', fontSize: '13px' }}>
                  ✓ Mesazhi u dërgua me sukses! Do t'ju kontaktojmë së shpejti.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  backgroundColor: loading ? '#8C8C8C' : '#C9A96E',
                  color: 'white',
                  padding: '16px 32px',
                  border: 'none',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  fontFamily: 'Jost, sans-serif',
                }}
              >
                {loading ? 'Duke dërguar...' : 'Dërgo Mesazhin'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <UploadForm />
      <Footer />
    </main>
  );
}
