
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

type Plan = {
  name: string;
  total: number;
  months: number;
  features: string[];
  cta: string;
  popular?: boolean;
  highlight?: 'popular' | 'value';
  href: string;
};

const PricingSection: React.FC = () => {
  const sharedFeatures = [
    'Sistema para carga y control de inversiones',
    'Creación y seguimiento de metas',
    'Mantenimiento y control de vehículos',
    'Lista inteligente de supermercado',
    'Dashboard personalizado con IA',
    'Soporte prioritario'
  ];

  const plans: Plan[] = [
    {
      name: 'Mensual',
      total: 7.99,
      months: 1,
      features: sharedFeatures,
      cta: 'Elegir Mensual',
      popular: false,
      href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6'
    },
    {
      name: 'Semestral',
      total: 34.99,
      months: 6,
      features: sharedFeatures,
      cta: 'Elegir Semestral',
      popular: true,
      highlight: 'popular',
      href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6'
    },
    {
      name: 'Anual',
      total: 59.99,
      months: 12,
      features: sharedFeatures,
      cta: 'Elegir Anual',
      popular: true,
      highlight: 'value',
      href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6'
    }
  ];

  const currencyFormatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const monthlyReference = plans.find((p) => p.months === 1)?.total ?? 0;

  return (
    <section className="py-24 bg-[#f8f7f5]" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-secondary mb-6">Planes diseñados para tu libertad</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Inversiones pensadas para escalar tu patrimonio. Sin comisiones ocultas, sin sorpresas.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((p, i) => {
            const monthlyPrice = p.total / p.months;
            const savings = p.months > 1 && monthlyReference > 0 ? monthlyReference * p.months - p.total : 0;

            const isPopular = p.highlight === 'popular';
            const isBestValue = p.highlight === 'value';

            return (
              <div 
                key={i} 
                className={`relative bg-white p-12 rounded-[3rem] border ${
                  p.popular 
                    ? 'border-primary ring-[12px] ring-primary/5 scale-100 md:scale-110 md:z-10 md:shadow-2xl' 
                    : 'border-gray-100 scale-100'
                } shadow-xl transition-all duration-500 md:hover:translate-y-[-10px] group flex flex-col ${
                  isBestValue ? 'bg-gradient-to-b from-emerald-50 to-white' : ''
                }`}
              >
                {p.highlight && (
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg ${
                    isPopular ? 'bg-primary' : 'bg-emerald-500'
                  }`}>
                    {isPopular ? 'Más Popular' : 'Mejor Valor'}
                  </div>
                )}
                
                <div className="mb-8 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-secondary mb-1">{p.name}</h3>
                    <p className="text-sm font-semibold text-gray-400">
                      {p.months === 1 ? 'Pago mensual' : `Pago único cada ${p.months} meses`}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-inner space-y-3 text-center">
                    <div className="text-[11px] font-black uppercase tracking-[0.16em] text-primary">Precio por mes</div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-black leading-tight text-secondary">USD {monthlyPrice.toFixed(2)}</span>
                      <span className="text-sm font-bold text-gray-400">/mes</span>
                    </div>
                    <div className="text-sm font-bold text-gray-600">
                      {p.months === 1 ? 'Pago recurrente mensual' : `${currencyFormatter.format(p.total)} al contado (${p.months} meses)`}
                    </div>
                    {(p.months === 1 || savings > 0) && (
                      <div className="flex justify-center">
                        {p.months === 1 ? (
                          <span className="text-xs font-black text-secondary bg-secondary/10 px-4 py-2 rounded-full">Pagas mes a mes</span>
                        ) : (
                          <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full shadow-sm">
                            +{currencyFormatter.format(savings)} de ahorro
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-100 mb-8"></div>

                <ul className="space-y-5 mb-12 min-h-[180px]">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-semibold text-gray-600">
                      <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'wght' 700" }}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a 
                  href={p.href}
                  onClick={() => trackMetaEvent('InitiateCheckout', { content_name: p.name, value: p.total, currency: 'USD' })}
                  className={`mt-auto block w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 text-center shadow-xl ${
                    p.popular 
                      ? 'bg-secondary text-white hover:bg-black shadow-secondary/20' 
                      : 'bg-gray-50 text-secondary hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
        
        <p className="text-center mt-16 text-sm font-bold text-gray-400">
          ¿Necesitas un plan a medida? <a href="#" className="text-primary hover:underline">Contacta con ventas</a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
