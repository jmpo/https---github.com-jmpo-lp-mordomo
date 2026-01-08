
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import { initMetaPixel } from './metaPixel';
import Lp2Page from './components/lp2/Lp2Page';

const App: React.FC = () => {
  const isLp2 = typeof window !== 'undefined' && window.location.pathname.toLowerCase().includes('/lp2');

  useEffect(() => {
    initMetaPixel();
  }, []);

  if (isLp2) {
    return <Lp2Page />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0b1220] text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <VideoSection />
        <SolutionSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
