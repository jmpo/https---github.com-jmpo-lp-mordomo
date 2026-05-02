
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
import TransformationSection from './components/TransformationSection';
import Lp3Page from './components/lp3/Lp3Page';
import NegociosPage from './components/negocios/NegociosPage';
import Lp6Page from './components/lp6/Lp6Page';

const App: React.FC = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '';
  const isLp2 = pathname.includes('/lp2');
  const isLp3 = pathname.includes('/lp3');
  const isNegocios = pathname.includes('/negocios');
  const isLp5 = pathname.includes('/lp5');
  const isLp6 = pathname.includes('/lp6');

  useEffect(() => {
    initMetaPixel();
  }, []);

  if (isLp5) {
    if (typeof window !== 'undefined' && !pathname.includes('/lp5/index.html')) {
      window.location.href = '/lp5/index.html';
    }
    return null;
  }
  if (isLp6) {
    return <Lp6Page />;
  }
  if (isNegocios) {
    return <NegociosPage />;
  }
  if (isLp3) {
    return <Lp3Page />;
  }
  if (isLp2) {
    return <Lp2Page />;
  }

  // LP6 es ahora la landing principal
  return <Lp6Page />;
};

export default App;
