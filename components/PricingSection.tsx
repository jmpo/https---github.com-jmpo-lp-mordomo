
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

type Plan = {
  name: string;
  charge: number;
  months: number;
  monthlyDisplay?: number;
  compareAt?: number;
  saving?: number;
  mentalCopy?: string;
  bonusCopy?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlight?: 'popular' | 'value';
  href: string;
};

const PricingSection: React.FC = () => {
  const [countdown, setCountdown] = React.useState('12:00:00');
  const [toastIndex, setToastIndex] = React.useState(0);

  const sharedFeatures = [
    'Calendario de pagos y recordatorios',
    'Alertas antes de que falte dinero',
    'Metas de ahorro con monto sugerido',
    'Detección de gastos hormiga y suscripciones',
    'Lista inteligente de supermercado',
    'Soporte humano prioritario'
  ];

  const plans: Plan[] = [
    {
      name: 'Mensual',
      charge: 5,
      monthlyDisplay: 5,
      months: 1,
      features: sharedFeatures,
      cta: 'Elegir Mensual',
      popular: false,
      href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6'
    },
    {
      name: 'Semestral',
      charge: 24.99,
      compareAt: 30,
      saving: 5,
      monthlyDisplay: 4.17,
      months: 6,
      features: sharedFeatures,
      cta: 'Elegir Semestral',
      popular: true,
      highlight: 'popular',
      href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6'
    },
    {
      name: 'Anual',
      charge: 39.99,
      compareAt: 60,
      saving: 20,
      monthlyDisplay: 3.33,
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

  const proofMessages = [
    { name: 'María de Lima', action: 'armó su fondo de emergencia', time: 'hace 2 min' },
    { name: 'José de Bogotá', action: 'contrató el plan Anual', time: 'hace 5 min' },
    { name: 'Ana de CDMX', action: 'configuró metas familiares', time: 'hace 8 min' },
    { name: 'Luis de Buenos Aires', action: 'bajó sus suscripciones duplicadas', time: 'hace 12 min' }
  ];

  React.useEffect(() => {
    const target = Date.now() + 12 * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);
      const hrs = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const secs = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
      setCountdown(`${hrs}:${mins}:${secs}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % proofMessages.length);
    }, 7000);
    return () => clearInterval(id);
  }, [proofMessages.length]);

  return (
    <section className="py-24 bg-[#f8f7f5]" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-secondary mb-6">Planes simples para ordenar tu dinero</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Precio claro, sin letra chica. Probalo y sentí alivio en tu próximo cierre de mes.</p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-6 text-center text-sm font-semibold text-gray-600">
          Lo que hoy pagás no es el plan. Es el precio de dejar de perder dinero sin darte cuenta.
        </div>
        
        <div className="max-w-3xl mx-auto mb-12 md:mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white border border-primary/20 shadow-lg shadow-primary/10 px-6 py-4 rounded-3xl">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-primary">Oferta de lanzamiento</span>
            <div className="flex items-center gap-2 text-sm font-bold text-secondary">
              <span className="material-symbols-outlined text-primary text-lg">hourglass_top</span>
              Termina en {countdown}
            </div>
            <span className="text-xs font-semibold text-gray-500">Garantía 7 días o te devolvemos el 100%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto mt-4 md:mt-8">
          {plans.map((p, i) => {
            const monthlyPrice = p.monthlyDisplay ?? p.charge / p.months;
            const isPopular = p.highlight === 'popular';
            const isBestValue = p.highlight === 'value';
            const discountPercent = p.compareAt ? Math.round(((p.compareAt - p.charge) / p.compareAt) * 100) : null;

            return (
              <div 
                key={i} 
                className={`relative bg-white p-8 sm:p-10 lg:p-12 rounded-[3rem] border ${
                  p.popular 
                    ? 'border-primary ring-[10px] ring-primary/5 scale-100 md:scale-105 md:z-10 md:shadow-2xl' 
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
                      {p.months === 1 ? 'Pago mensual' : `Pago único por ${p.months} meses`}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-inner space-y-3 text-center">
                    <div className="text-[11px] font-black uppercase tracking-[0.16em] text-primary">Precio por mes</div>
                    <div className="flex items-baseline justify-center gap-2 whitespace-nowrap">
                      <span className="text-4xl lg:text-5xl font-black leading-tight text-secondary">USD {monthlyPrice.toFixed(2)}</span>
                      <span className="text-sm font-bold text-gray-400">/mes</span>
                    </div>
                    <div className="text-sm font-bold text-gray-700">
                      Total hoy: {currencyFormatter.format(p.charge)}{' '}
                      {p.compareAt && (
                        <span className="text-gray-400 line-through text-xs ml-1">{currencyFormatter.format(p.compareAt)}</span>
                      )}
                    </div>
                    {p.saving && (
                      <div className="flex justify-center">
                        <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full shadow-sm">
                          Ahorro real: {currencyFormatter.format(p.saving)} {discountPercent ? `(${discountPercent}% OFF)` : ''}
                        </span>
                      </div>
                    )}
                    <div className="text-xs font-semibold text-gray-500">
                      Garantía 7 días.
                    </div>
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
                  onClick={() => trackMetaEvent('InitiateCheckout', { content_name: p.name, value: p.charge, currency: 'USD' })}
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
          ¿Tenés dudas? <a href="mailto:soporte@controla.site" className="text-primary hover:underline">Escribinos y te ayudamos</a>
        </p>
      </div>

      <div className="fixed bottom-6 right-4 sm:right-8 z-40">
        <div className="bg-white border border-gray-200 shadow-2xl shadow-primary/10 px-4 py-3 rounded-2xl flex items-start gap-3 max-w-xs animate-in fade-in">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
            <span className="material-symbols-outlined text-base">verified</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-secondary">{proofMessages[toastIndex].name}</p>
            <p className="text-xs font-semibold text-gray-600">{proofMessages[toastIndex].action}</p>
            <p className="text-[11px] font-bold text-green-600">{proofMessages[toastIndex].time}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
