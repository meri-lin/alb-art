import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero i vogël */}
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
          Punimet Tona
        </p>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '56px',
            color: 'white',
            fontWeight: 400,
          }}
        >
          Projektet e Realizuara
        </h1>
      </div>

      <Projects />
      <Footer />
    </main>
  );
}
