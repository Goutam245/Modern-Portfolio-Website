import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'Alpha Core Solutions | Advanced Physical Security | Saudi Arabia';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Mission />
        <Services />
        <Stats />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
