import React from 'react';
import { trackMetaEvent } from '../metaPixel';

const steps = [
  {
    title: 'Tú pones la meta',
    desc: '¿Viajar? ¿Pagar la tarjeta? ¿Comprar la moto? Elige un objetivo real, no un sueño lejano.',
    icon: 'flag',
  },
  {
    title: 'Te damos el número diario',
    desc: 'Si guardas lo que cuesta una gaseosa al día, lo logras en 6 meses. Sin cálculos raros.',
    icon: 'calculate',
  },
  {
    title: 'Ves la barra avanzar',
    desc: 'Progreso visible cada semana. Es adictivo ver cómo se llena y saber que sí vas a llegar.',
    icon: 'trending_up',
  },
];

const TransformationSection: React.FC = () => {
  return (
    <section id="metas" className="py-20 bg-[#0f172a] text-white border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.18em] text-primary">
            El módulo de metas
          </p>
          <h2 className="text-3xl lg:text-4xl font-black">Convierte tus "sueños imposibles" en un plan de $2 dólares al día.</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            No es motivación vacía: es matemática simple. La Calculadora de Metas te dice cuánto guardar sin sacrificar tu vida diaria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg shadow-black/20 space-y-3 hover:shadow-2xl transition-all"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shadow-inner shadow-black/10">
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </div>
                <p className="text-lg font-extrabold">{step.title}</p>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 lg:p-8 shadow-xl shadow-black/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">Resultados reales</p>
            <p className="text-xl font-black">Pequeñas acciones diarias, metas que sí se cumplen.</p>
            <p className="text-white/70 text-sm">
              El sistema te avisa si vas atrasado y te propone ajustes sencillos para no perder el ritmo.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-3 rounded-2xl bg-emerald-500/15 text-emerald-200 border border-emerald-500/30 text-sm font-bold">
              Desde USD 2/día para lograrlo
            </div>
            <div className="px-4 py-3 rounded-2xl bg-primary/15 text-primary border border-primary/30 text-sm font-bold">
              Cancela cuando quieras
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#oferta"
            onClick={() => trackMetaEvent('Lead', { content_name: 'metas_cta' })}
            className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine"
          >
            👉 VER PLANES Y PRECIOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
