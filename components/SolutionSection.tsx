
import React from 'react';

const actions = [
  {
    title: '📸 Escanea tu ticket',
    desc: '¿Te da flojera anotar? Sácale una foto a tu ticket de compra. La IA lee el monto y te dice cuánto te queda para gastar el resto del mes.',
    icon: 'document_scanner',
  },
  {
    title: '🏠 Controla tu despensa',
    desc: '¿Compras cosas que ya tienes? Antes de ir al súper, mira en tu celular qué tienes en casa. Nuestros usuarios ahorran $50/mes solo evitando compras duplicadas.',
    icon: 'inventory_2',
  },
  {
    title: '🚗 Sin sorpresas del auto',
    desc: 'Lleva el registro de mantenimientos y evita que una reparación de $500 te arruine el mes por no haber cambiado el aceite a tiempo.',
    icon: 'directions_car',
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section id="mecanismo" className="py-20 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.18em] text-primary">
            Simpleza para gente cansada
          </p>
          <h2 className="text-3xl lg:text-4xl font-black">No necesitas más disciplina. Necesitas un sistema que te cuide.</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Olvida las libretas. Controla es tu guardaespaldas financiero personal: escanea tus gastos, vigila tu despensa y te avisa antes de que el dinero se evapore.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <div
              key={action.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-7 shadow-lg shadow-black/20 space-y-4 hover:shadow-2xl transition-all"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shadow-inner shadow-black/10">
                  <span className="material-symbols-outlined text-xl">{action.icon}</span>
                </div>
                <p className="text-xl font-extrabold leading-snug">{action.title}</p>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
