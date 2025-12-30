
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Llegás al 20 y ya no alcanza',
      desc: 'Pagos fijos desordenados: alquiler, luz, tarjetas. No sabes qué día pagar cada cosa y el sueldo se va.',
      icon: 'event_busy',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      title: 'Gastos hormiga que se comen todo',
      desc: 'Suscripciones, antojos y “compras chiquitas” que derriten tu plata sin que lo notes.',
      icon: 'bug_report',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Sin plan para imprevistos',
      desc: 'Un arreglo del auto o una urgencia médica te desacomodan el mes porque no tenés un colchón listo.',
      icon: 'report_problem',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
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
            Si no ves a dónde va tu plata, siempre falta.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Controla IA te muestra tus gastos reales y te avisa antes de que falte. Menos estrés, más control.
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
