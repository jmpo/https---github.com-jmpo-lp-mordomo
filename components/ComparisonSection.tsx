
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">¿Por qué cambiar hoy?</h2>
          <p className="text-gray-400 text-lg">La diferencia entre sobrevivir y escalar.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-800">
          <div className="p-8 lg:p-16 space-y-8 opacity-60">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500">dangerous</span>
              Sin Controla IA
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-3 text-gray-300">
                <span className="material-symbols-outlined text-sm pt-1">close</span>
                Horas perdidas en Excel cada fin de semana.
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="material-symbols-outlined text-sm pt-1">close</span>
                Incertidumbre constante sobre el flujo de caja.
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="material-symbols-outlined text-sm pt-1">close</span>
                Multas por olvidos en fechas clave.
              </li>
            </ul>
          </div>
          
          <div className="p-8 lg:p-16 space-y-8 bg-primary/5 rounded-2xl lg:rounded-none">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined">verified</span>
              Con Controla IA
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-sm pt-1">check</span>
                Visibilidad 24/7 de tu salud financiera real.
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-sm pt-1">check</span>
                Automatización total de ingresos y egresos.
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-sm pt-1">check</span>
                Asistente inteligente que te ahorra dinero cada mes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
