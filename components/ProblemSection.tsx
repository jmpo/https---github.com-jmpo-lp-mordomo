
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Gastos que aparecen “de la nada”',
      desc: 'Pagos y suscripciones que se llevan el sueldo sin avisar.',
      icon: 'receipt',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      title: 'Meses que se desordenan sin explicación',
      desc: 'Cobrás, pagás y volvés a cero. No hay avance porque no ves el cuadro completo.',
      icon: 'history_toggle_off',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Decisiones tomadas con miedo',
      desc: 'Gastás o postergás sin saber si alcanza. Ansiedad constante.',
      icon: 'warning',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-500'
    },
    {
      title: 'Metas que siempre se postergan',
      desc: 'El viaje, el fondo de emergencia o el auto quedan para “después” porque no hay visibilidad.',
      icon: 'flag_circle',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-[#f8f7f5]" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary">
            No es que ganes poco. Es que el dinero se te escapa sin darte cuenta.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold text-gray-700">
            {[
              'Pagás cuentas y no sabés bien cuánto te queda',
              'Los gastos chicos se acumulan',
              'Vivís diciendo “el mes que viene me organizo”',
              'Cualquier imprevisto te desarma',
              'Sentís que trabajás mucho, pero no avanzás',
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-start gap-2 shadow-sm">
                <span className="material-symbols-outlined text-primary text-base">warning</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-primary font-black">
            Ese desorden genera estrés, ansiedad y malas decisiones. Y lo peor: no se arregla solo.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] font-black text-red-600 tracking-widest uppercase">EL PROBLEMA</span>
          </div>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-secondary mb-6">
            Mientras no veas tus números con claridad, tu vida financiera decide por vos.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            El desorden no avisa. Solo avanza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover-lift reveal-up"
              style={{ animationDelay: `${0.08 * i}s` }}
            >
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

        <div className="max-w-3xl mx-auto mt-12 text-center space-y-4 text-gray-700 font-semibold">
          <p className="text-gray-600 font-bold">El caos financiero se construye mes a mes cuando:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm font-bold text-gray-600">
            <span className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">No registrás lo que gastás</span>
            <span className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">No sabés cuánto podés gastar tranquilo</span>
            <span className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">No tenés claridad real</span>
          </div>
          <p className="text-primary font-black">Tener ingresos sin control no es estabilidad. Es una ilusión.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
