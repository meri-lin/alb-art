import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Categories from '@/components/Categories';

export default function MaterialsPage() {
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
          Neolith
        </p>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '56px',
            color: 'white',
            fontWeight: 400,
          }}
        >
          Koleksioni i Materialeve
        </h1>
      </div>

      <Categories />
      <Footer />
    </main>
  );
}
