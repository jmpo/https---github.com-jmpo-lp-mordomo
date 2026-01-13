
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="lead" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm text-rose-300">report</span>
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">El problema real</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black leading-tight">
            La triste realidad de la carrera de la rata
          </h2>
          <p className="text-white/70 text-base max-w-3xl mx-auto">
            Trabajas, cobras y aun así llegas en cero. No es falta de esfuerzo: hay fugas invisibles que nadie te enseñó a tapar.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-black/30 space-y-6">
          <div className="grid gap-4">
            {[
              {
                title: 'Cobras y pagas',
                desc: 'El dinero entra y sale tan rápido que ni lo ves.',
              },
              {
                title: 'El "gasto hormiga" te mata',
                desc: 'Ese café, esa suscripción que no usas, ese delivery extra... se comen el 30% de tu esfuerzo.',
              },
              {
                title: 'Compras doble',
                desc: 'Vas al súper y compras detergente, llegas a casa y ya tenías. Acabas de tirar dinero a la basura.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-white/5 border border-rose-500/20 px-4 py-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-300 flex items-center justify-center shrink-0 shadow-inner shadow-black/10">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 700" }}>close</span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-extrabold text-white">{item.title}</p>
                  <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
