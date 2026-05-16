
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
import Lp7Page from './components/lp7/Lp7Page';
import Lp8Page from './components/lp8/Lp8Page';
import Lp9Page from './components/lp9/Lp9Page';
import StickyScarcityBar from './components/StickyScarcityBar';

const App: React.FC = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '';
  const isLp2 = pathname.includes('/lp2');
  const isLp3 = pathname.includes('/lp3');
  const isNegocios = pathname.includes('/negocios');
  const isLp5 = pathname.includes('/lp5');
  const isLp6 = pathname.includes('/lp6');
  const isLp7 = pathname.includes('/lp7');
  const isLp8 = pathname.includes('/lp8');
  const isLp9 = pathname.includes('/lp9');

  useEffect(() => {
    initMetaPixel();
  }, []);

  if (isLp5) {
    if (typeof window !== 'undefined' && !pathname.includes('/lp5/index.html')) {
      window.location.href = '/lp5/index.html';
    }
    return null;
  }
  if (isLp9) {
    return <Lp9Page />;
  }
  if (isLp8) {
    return (
      <>
        <StickyScarcityBar theme="light" ctaHref="#precios" />
        <Lp8Page />
      </>
    );
  }
  if (isLp7) {
    return <Lp7Page />;
  }
  if (isLp6) {
    return (
      <>
        <StickyScarcityBar theme="dark" ctaHref="#oferta" />
        <Lp6Page />
      </>
    );
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

  // LP6 es la landing principal
  return (
    <>
      <StickyScarcityBar theme="dark" ctaHref="#oferta" />
      <Lp6Page />
    </>
  );
};

export default App;
