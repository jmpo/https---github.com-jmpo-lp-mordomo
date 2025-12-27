
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Información Fragmentada',
      desc: 'Hojas de cálculo, extractos bancarios y notas físicas. No sabes cuánto tienes realmente hasta que haces la suma manual.',
      icon: 'schema',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Olvidos Costosos',
      desc: 'Pagos de impuestos o cuotas que se vencen. Las multas por retrasos están drenando tu capital silenciosamente.',
      icon: 'event_busy',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-500'
    },
    {
      title: 'Decisiones a Ciegas',
      desc: '¿Puedes permitirte esa nueva inversión? Sin proyecciones claras, cada movimiento es una apuesta arriesgada.',
      icon: 'query_stats',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500'
    }
  ];

  return (
    <section className="py-24 bg-[#f8f7f5]" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] font-black text-red-600 tracking-widest uppercase">EL PROBLEMA</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary mb-6">
            Gestionar tus finanzas no debería ser un <span className="text-primary">segundo trabajo.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La mayoría de las personas pierde hasta 10 horas al mes conciliando datos. 
            Controla IA automatiza lo aburrido para que te enfoques en crecer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              {/* Decorative background shape */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 ${p.bgColor} opacity-0 group-hover:opacity-40 rounded-full transition-all duration-500 blur-2xl`}></div>
              
              <div className={`w-16 h-16 ${p.bgColor} rounded-2xl flex items-center justify-center ${p.iconColor} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
              </div>
              
              <h3 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">{p.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-primary transition-colors">
                <span>Identificado como riesgo</span>
                <span className="material-symbols-outlined text-sm">warning</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
