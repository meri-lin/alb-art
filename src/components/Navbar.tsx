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
    </nav>
  );
}
