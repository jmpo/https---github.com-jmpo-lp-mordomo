
import React from 'react';

const gOrange: React.CSSProperties = {
  background: 'linear-gradient(90deg, #f48c25 0%, #fce8d4 50%, #f48c25 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const actions = [
  {
    title: '📸 Escanea tu ticket',
    desc: (
      <>
        ¿Te da flojera anotar? Sácale una foto a tu ticket de compra.
        La <span style={gOrange} className="font-semibold">IA lee el monto</span> y te dice cuánto te queda para gastar el resto del mes.
      </>
    ),
  },
  {
    title: '🏠 Controla tu despensa',
    desc: (
      <>
        ¿Compras cosas que ya tienes? Antes de ir al súper, mira en tu celular qué tienes en casa.
        Nuestros usuarios ahorran{' '}
        <span style={gOrange} className="font-semibold">$50/mes</span>{' '}
        solo evitando compras duplicadas.
      </>
    ),
  },
  {
    title: '🚗 Sin sorpresas del auto',
    desc: (
      <>
        Lleva el registro de mantenimientos y evita que una{' '}
        <span style={gOrange} className="font-semibold">reparación de $500</span>{' '}
        te arruine el mes por no haber cambiado el aceite a tiempo.
      </>
    ),
  },
];

const stats = [
  { emoji: '👥', value: '+2,400', label: 'usuarios activos' },
  { emoji: '⚡', value: '5 min', label: 'para configurar' },
  { emoji: '💰', value: '$100/mes', label: 'ahorro promedio' },
];

const SolutionSection: React.FC = () => {
  return (
    <section id="mecanismo" className="py-20 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Simpleza para gente cansada
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            No necesitas más disciplina.{' '}
            <br className="hidden sm:block" />
            Necesitas{' '}
            <span style={gOrange}>un sistema que te cuide</span>.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Olvida las libretas. Controla es tu{' '}
            <span style={gOrange} className="font-semibold">guardaespaldas financiero</span>{' '}
            personal: escanea tus gastos, vigila tu despensa y te avisa antes de que el dinero se evapore.
          </p>
        </div>

        {/* Stats de prueba social */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-xl font-black text-white">{s.value}</span>
              <span className="text-xs font-medium text-white/55 uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-7 shadow-lg shadow-black/20 space-y-3 hover:shadow-2xl transition-all"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <p className="text-xl font-bold leading-snug">{action.title}</p>
              <p className="text-sm text-white/75 leading-relaxed font-medium">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
