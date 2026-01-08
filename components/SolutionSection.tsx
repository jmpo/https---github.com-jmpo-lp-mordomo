
import React from 'react';

const layers = [
  {
    title: '🏛️ CAPA 1: La "Cuenta Madre" (Centralización de Activos)',
    highlight: 'Aquí es donde ocurre la magia. En lugar de tener tus inversiones dispersas:',
    points: [
      'Creas tu Cuenta Madre dentro de la plataforma.',
      'Desglosas tus Subcuentas: Bonos, Acciones, CDA, Fondos, Cripto.',
      'El Resultado: Cada vez que entras, no ves "cuánto gastaste", ves "CUÁNTO TIENES". El efecto psicológico es brutal: te motiva a seguir creciendo.',
    ],
  },
  {
    title: '⚙️ CAPA 2: El Motor de Gastos Recurrentes (Defensa Automática)',
    highlight: 'Protege tu capital de los gastos fijos sin esfuerzo mental.',
    points: [
      'Cargas tus obligaciones (Alquiler, Luz, Internet) una sola vez.',
      'El sistema las descuenta automáticamente mes a mes.',
      'Tú solo te preocupas por el dinero que queda libre (tu Free Cash Flow).',
    ],
  },
  {
    title: '👁️ CAPA 3: Visión Artificial de Consumo (Ingesta sin Dolor)',
    highlight: 'Para los gastos del día a día, eliminamos la fricción.',
    points: [
      'Usas nuestra IA para escanear facturas al instante.',
      'El sistema categoriza el gasto y ajusta tu Patrimonio Neto en tiempo real.',
    ],
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section id="mecanismo" className="py-20 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.18em] text-primary">
            Integración de Inversiones + Gastos
          </p>
          <h2 className="text-3xl lg:text-4xl font-black">Cómo funciona la "Arquitectura de Riqueza Silenciosa"</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Mientras tú vives tu vida, Controla opera en segundo plano con un sistema de tres capas que los bancos no quieren que tengas tan fácil.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-7 shadow-lg shadow-black/20 space-y-4 hover:shadow-2xl transition-all"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <p className="text-xl font-extrabold">{layer.title}</p>
              <p className="text-sm font-semibold text-primary">{layer.highlight}</p>
              <ul className="space-y-2 text-sm text-white/80 leading-relaxed">
                {layer.points.map(point => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
