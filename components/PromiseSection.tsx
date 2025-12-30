
import React from 'react';

const PromiseSection: React.FC = () => {
  const values = [
    {
      title: 'Ver exactamente a dónde se va tu plata',
      desc: 'Todo categorizado en un solo lugar. Sin planillas.',
      icon: 'visibility',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Detectar fugas invisibles que te frenan',
      desc: 'Suscripciones y gastos chicos marcados en segundos.',
      icon: 'bug_report',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Organizar tus cuentas sin planillas complicadas',
      desc: 'Bancos, tarjetas y efectivo juntos y claros.',
      icon: 'account_balance',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      title: 'Planificar con números reales, no suposiciones',
      desc: 'Metas alcanzables con montos sugeridos y seguimiento simple.',
      icon: 'flag',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Todo simple y visual',
      desc: 'Diseñado para personas reales, no expertos en finanzas.',
      icon: 'palette',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600'
    },
    {
      title: 'Sin estrés ni juicios',
      desc: 'Claridad para decidir sin culpa ni improvisación.',
      icon: 'favorite',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[10px] font-black text-primary tracking-widest uppercase">LA SOLUCIÓN</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-black text-secondary leading-tight">
            Las personas financieramente tranquilas no ganan más. <br />
            <span className="text-primary">Ven mejor.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            No adivinan. No improvisan. No viven apagando incendios. Tienen claridad. Y la claridad cambia todo. Controla existe para darte esa vista completa sin juicios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`w-14 h-14 ${v.bgColor} rounded-2xl flex items-center justify-center ${v.iconColor} mb-6 transition-transform group-hover:scale-110`}>
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-secondary mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a 
            href="#pricing"
            className="flex items-center gap-3 bg-[#181411] hover:bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl active:scale-95 group"
          >
            Quiero tomar control de mi dinero hoy
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
