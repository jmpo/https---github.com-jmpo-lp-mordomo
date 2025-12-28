
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import PromiseSection from './components/PromiseSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TestimonialsSection from './components/TestimonialsSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { initMetaPixel } from './metaPixel';

const App: React.FC = () => {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <PromiseSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <ComparisonSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
