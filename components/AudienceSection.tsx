import React from 'react';

const AudienceSection: React.FC = () => {
  const forYou = [
    'Sos trabajador dependiente o independiente',
    'Tenés ingresos, pero sentís desorden',
    'Querés dejar de improvisar con tu dinero',
    'Buscás claridad sin complicaciones técnicas'
  ];

  const notForYou = [
    'Querés “ver qué pasa” sin mirar tus números',
    'Preferís seguir improvisando',
    'No te importa perder dinero sin darte cuenta'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-secondary leading-tight">Para quién es Controla</h3>
          <p className="text-gray-600 font-semibold">Identifícate rápido y decidí.</p>
          <div className="space-y-3">
            {forYou.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#f8f7f5] border border-gray-100 rounded-2xl p-3">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <p className="text-sm font-bold text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-secondary leading-tight text-red-600 flex items-center gap-2">
            <span className="material-symbols-outlined">report</span>
            No es para vos si:
          </h3>
          <div className="space-y-3">
            {notForYou.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-3">
                <span className="material-symbols-outlined text-red-500 text-lg">block</span>
                <p className="text-sm font-bold text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
