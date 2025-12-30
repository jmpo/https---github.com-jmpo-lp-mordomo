
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">Dentro de 3 meses solo hay dos escenarios:</h2>
          <p className="text-gray-400 text-lg">El tiempo va a pasar igual. La diferencia es si lo usás a tu favor.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-800">
          <div className="p-8 lg:p-16 space-y-8 opacity-80">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500">do_not_disturb_on</span>
              Opción A (no hacer nada)
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-3 text-gray-300">
                <span className="material-symbols-outlined text-sm pt-1">close</span>
                Seguís sin saber a dónde se va tu plata.
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="material-symbols-outlined text-sm pt-1">close</span>
                El estrés financiero sigue.
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="material-symbols-outlined text-sm pt-1">close</span>
                Los meses pasan y nada cambia.
              </li>
            </ul>
          </div>
          
          <div className="p-8 lg:p-16 space-y-8 bg-primary/5 rounded-2xl lg:rounded-none">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">verified</span>
              Opción B (tomar control hoy)
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-sm pt-1">check</span>
                Claridad total de tus números.
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-sm pt-1">check</span>
                Decisiones conscientes y sin miedo.
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-sm pt-1">check</span>
                Tranquilidad real y avance hacia tus metas.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
