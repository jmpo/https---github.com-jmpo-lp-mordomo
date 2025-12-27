
import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Mensual',
      price: '7.99',
      period: '/ mes',
      features: ['Acceso total a la IA', 'Control de ingresos y egresos', 'Reportes mensuales automáticos', 'Soporte estándar'],
      cta: 'Elegir Mensual',
      popular: false,
      href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6'
    },
    {
      name: 'Semestral',
      price: '34.99',
      period: '/ 6 meses',
      features: ['Ahorro del 27% vs mensual', 'Todos los beneficios IA', 'Gestión de flotas y vehículos', 'Soporte prioritario 24/7'],
      cta: 'Elegir Semestral',
      popular: false,
      href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6'
    },
    {
      name: 'Anual',
      price: '59.99',
      period: '/ año',
      features: ['Ahorro máximo del 37%', 'Asesoría financiera IA proactiva', 'Multiusuario para equipos', 'Garantía de satisfacción total'],
      cta: 'Elegir Anual',
      popular: true,
      href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6'
    }
  ];

  return (
    <section className="py-24 bg-[#f8f7f5]" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-secondary mb-6">Planes diseñados para tu libertad</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Inversiones pensadas para escalar tu patrimonio. Sin comisiones ocultas, sin sorpresas.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-12 rounded-[3rem] border ${p.popular ? 'border-primary ring-[12px] ring-primary/5 scale-110 z-10 shadow-2xl' : 'border-gray-100'} shadow-xl transition-all duration-500 hover:translate-y-[-10px] group`}
            >
              {p.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  RECOMENDADO
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-black text-secondary mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">USD {p.price}</span>
                  <span className="text-gray-400 font-bold text-sm">{p.period}</span>
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
                className={`block w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 text-center shadow-xl ${
                  p.popular 
                    ? 'bg-secondary text-white hover:bg-black shadow-secondary/20' 
                    : 'bg-gray-50 text-secondary hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-16 text-sm font-bold text-gray-400">
          ¿Necesitas un plan a medida? <a href="#" className="text-primary hover:underline">Contacta con ventas</a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
