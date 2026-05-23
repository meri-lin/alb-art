'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function UploadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'albart_uploads');
    formData.append('cloud_name', 'dshlnc7le');

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dshlnc7le/image/upload`,
      { method: 'POST', body: formData }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setError('Ju lutem plotësoni të gjitha fushat.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let imageUrl = 'Pa foto';
      if (file) {
        imageUrl = await uploadToCloudinary(file);
      }

      await emailjs.send(
        'service_jh66wnq',
        'template_paieipo',
        {
          from_name: name,
          from_email: email,
          message: message,
          image_url: imageUrl,
        },
        'vvngyOGIalTqzfONq'
      );

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setFile(null);
      if (fileRef.current) fileRef.current.value = '';
    } catch (err) {
      setError('Ndodhi një gabim. Ju lutem provoni përsëri.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '96px 24px', backgroundColor: '#F5F2ED' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              color: '#C9A96E',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              fontSize: '12px',
              marginBottom: '16px',
            }}
          >
            Dërgoni Projektin
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '42px',
              color: '#1C1C1C',
              fontWeight: 400,
              marginBottom: '16px',
            }}
          >
            Na Tregoni Vizionin Tuaj
          </h2>
          <p
            style={{
              color: '#8C8C8C',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: '1.8',
            }}
          >
            Ngarkoni skicën ose foton e projektit tuaj dhe arkitekti ynë do t'ju
            kontaktojë.
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Emri */}
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
                backgroundColor: '#FAFAFA',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Email */}
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
                backgroundColor: '#FAFAFA',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Mesazhi */}
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
              Përshkrimi i Projektit
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Përshkruani projektin tuaj..."
              rows={4}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '1px solid #E5E5E5',
                outline: 'none',
                fontSize: '14px',
                fontFamily: 'Jost, sans-serif',
                backgroundColor: '#FAFAFA',
                resize: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Upload Foto */}
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
              Foto / Skicë e Projektit
            </label>
            <div
              onClick={() => fileRef.current?.click()}
              style={{
                border: '2px dashed #E5E5E5',
                padding: '32px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#FAFAFA',
                transition: 'border-color 0.3s',
              }}
            >
              {file ? (
                <p style={{ color: '#1C1C1C', fontSize: '14px' }}>
                  ✓ {file.name}
                </p>
              ) : (
                <>
                  <p
                    style={{
                      color: '#8C8C8C',
                      fontSize: '14px',
                      marginBottom: '8px',
                    }}
                  >
                    Klikoni për të ngarkuar foton
                  </p>
                  <p style={{ color: '#C9A96E', fontSize: '12px' }}>
                    PNG, JPG, PDF deri në 10MB
                  </p>
                </>
              )}
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ display: 'none' }}
            />
          </div>

          {/* Error */}
          {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}

          {/* Success */}
          {success && (
            <p style={{ color: 'green', fontSize: '13px' }}>
              ✓ Projekti u dërgua me sukses! Do t'ju kontaktojmë së shpejti.
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#8C8C8C' : '#C9A96E',
              color: 'white',
              padding: '18px 32px',
              border: 'none',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontSize: '12px',
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%',
              fontFamily: 'Jost, sans-serif',
            }}
          >
            {loading ? 'Duke dërguar...' : 'Dërgo Projektin'}
          </button>
        </div>
      </div>
    </section>
  );
}
