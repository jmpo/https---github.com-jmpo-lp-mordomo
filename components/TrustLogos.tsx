
import React from 'react';

const TrustLogos: React.FC = () => {
  const logos = [
    { name: 'NexTech', icon: 'token' },
    { name: 'InfinityCorp', icon: 'all_inclusive' },
    { name: 'RapidPay', icon: 'bolt' },
    { name: 'GlobalAsset', icon: 'diamond' },
    { name: 'EcoFinance', icon: 'eco' },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
          Empresas líderes que gestionan su futuro con nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">{logo.icon}</span>
              <span className="text-xl font-bold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
