
import React from 'react';

const PromiseSection: React.FC = () => {
  const values = [
    {
      title: 'Todo en un solo sistema',
      desc: 'Olvidate de usar 5 apps diferentes. Centraliza finanzas, clientes, vehículos e inversiones en una plataforma unificada.',
      icon: 'hub',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      title: 'Control confirmado',
      desc: 'Cada centavo rastreado y verificado. Nada se escapa de tu supervisión financiera diaria.',
      icon: 'check_circle',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      title: 'Menos decisiones',
      desc: 'La IA analiza datos complejos por vos. Recibe alertas claras y sugerencias listas para ejecutar.',
      icon: 'psychology',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      title: 'El sistema trabaja por vos',
      desc: 'Automatización inteligente de cobros y recordatorios para que te enfoques en crecer, no en operar.',
      icon: 'smart_toy',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Historial y trazabilidad',
      desc: 'Registro inmutable de cada movimiento. Auditoría completa disponible en segundos para tu tranquilidad.',
      icon: 'receipt_long',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Pensado para la vida real',
      desc: 'Diseñado para empresarios de carne y hueso, con flujos de trabajo intuitivos, no para contadores.',
      icon: 'favorite',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    }
  ];

  return (
    <section className="py-24 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="text-[10px] font-black text-primary tracking-widest uppercase">LA PROMESA</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-black text-secondary leading-tight">
            No necesitás trabajar más ni ganar más. <br />
            <span className="text-primary">Necesitás controlar mejor.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            El caos financiero no se soluciona con más ingresos, sino con mejor administración. Controla IA transforma la complejidad de tus operaciones en claridad absoluta, dándote el poder de tomar decisiones basadas en datos reales.
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
            Empieza a controlar hoy
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
