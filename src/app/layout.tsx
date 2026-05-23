import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alb Art | Qeramikë Luksoze',
  description:
    'Alb Art - Prodhues dhe përpunues i qeramikës për kuzhinë, banjo dhe ambiente luksoze.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
