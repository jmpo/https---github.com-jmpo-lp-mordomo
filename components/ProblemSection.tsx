
import React from 'react';

const gOrange: React.CSSProperties = {
  background: 'linear-gradient(90deg, #f48c25 0%, #fce8d4 50%, #f48c25 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const problems = [
  {
    emoji: '💸',
    title: 'Cobras y pagas',
    desc: (
      <>
        El dinero entra y sale tan rápido que ni lo ves.
      </>
    ),
  },
  {
    emoji: '🐜',
    title: (
      <>
        El <span style={gOrange}>"gasto hormiga"</span> te mata
      </>
    ),
    desc: (
      <>
        Ese café, esa suscripción que no usas, ese delivery extra...
        se comen el <span style={gOrange} className="font-black">30%</span> de tu esfuerzo.
      </>
    ),
  },
  {
    emoji: '🛒',
    title: 'Compras doble',
    desc: (
      <>
        Vas al súper y compras detergente, llegas a casa y ya tenías.
        Acabas de <span style={gOrange}>tirar dinero a la basura</span>.
      </>
    ),
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="lead" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm text-rose-300">report</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">El problema real</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            La triste realidad de{' '}
            <span style={gOrange}>la carrera de la rata</span>
          </h2>
          <p className="text-white/70 text-base max-w-3xl mx-auto font-medium leading-relaxed">
            Trabajas, cobras y aun así llegas en cero. No es falta de esfuerzo: hay{' '}
            <span style={gOrange} className="font-semibold">fugas invisibles</span>{' '}
            que nadie te enseñó a tapar.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-black/30 space-y-6">
          <div className="grid gap-4">
            {problems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl bg-white/5 border border-rose-500/20 px-4 py-4">
                <span className="text-2xl mt-0.5 shrink-0">{item.emoji}</span>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-white">{item.title}</p>
                  <p className="text-white/75 text-sm leading-relaxed font-medium">{item.desc}</p>
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
