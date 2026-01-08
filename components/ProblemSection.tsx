
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="lead" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">La gran mentira del mercado</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black">
            Deja de jugar a "No Gastar" y empieza a jugar a "Ganar" 🏆
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-black/30 space-y-6">
          <p className="text-lg text-white/80 leading-relaxed">
            Hay una mentira gigante en el mundo de las finanzas personales: "Si dejas de comprar café, serás millonario".
          </p>
          <div className="space-y-3 text-white/75">
            <p className="font-semibold">Falso. Nadie se hace rico solo recortando. Te haces rico gestionando.</p>
            <p>
              El problema de las apps actuales (y del Excel) es que son "Espejos de Pobreza". Solo sirven para recordarte que
              gastaste dinero, generándote culpa y ansiedad. Por eso las abandonas.
            </p>
            <p>
              Para salir de la carrera de la rata, necesitas cambiar el enfoque. Necesitas dejar de actuar como un "ahorrador asustado" y empezar a operar como un "Gestor de Patrimonio".
            </p>
            <p className="text-primary font-bold">
              Y para eso, no necesitas un Excel. Necesitas una Arquitectura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
