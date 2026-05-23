'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? '#F5F2ED' : 'transparent',
          boxShadow: scrolled ? '0 1px 10px rgba(0,0,0,0.05)' : 'none',
          padding: scrolled ? '16px 48px' : '24px 48px',
          transition: 'all 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '24px',
            letterSpacing: '0.2em',
            color: scrolled ? '#1C1C1C' : 'white',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
        >
          ALB<span style={{ color: '#C9A96E' }}>ART</span>
        </Link>

        {/* Desktop Links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
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
                  color: scrolled ? '#1C1C1C' : 'white',
                  textDecoration: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 300,
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
            zIndex: 51,
            position: 'relative',
          }}
        >
          {isOpen ? (
            <span
              style={{
                color: scrolled ? '#1C1C1C' : 'white',
                fontSize: '24px',
                lineHeight: 1,
              }}
            >
              ✕
            </span>
          ) : (
            <>
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? '#1C1C1C' : 'white',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? '#1C1C1C' : 'white',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? '#1C1C1C' : 'white',
                }}
              />
            </>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#1C1C1C',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'Projektet', href: '/projects' },
            { label: 'Materialet', href: '/materials' },
            { label: 'Rreth Nesh', href: '/about' },
            { label: 'Kontakt', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '36px',
                fontWeight: 400,
                letterSpacing: '0.1em',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
