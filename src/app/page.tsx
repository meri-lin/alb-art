import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </main>
  );
}
