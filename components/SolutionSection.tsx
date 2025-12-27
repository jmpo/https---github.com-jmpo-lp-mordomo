
import React, { useEffect, useState } from 'react';

const SolutionSection: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev < 15420000 ? prev + 125000 : 15420000));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const formatGs = (val: number) => {
    return new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="solution">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Enhanced Animated Visual Side */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] scale-75 animate-pulse"></div>

            {/* Simulated App Matrix - "The Growth Engine" */}
            <div className="relative z-20 w-full max-w-md bg-[#f8f7f5] rounded-[2.5rem] border border-gray-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-8 space-y-8 animate-in fade-in zoom-in duration-1000 overflow-hidden">
              
              {/* Header with Counter */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-primary tracking-widest uppercase mb-1">Crecimiento Mensual</p>
                  <h4 className="text-3xl font-black text-secondary tabular-nums">
                    {formatGs(counter)}
                  </h4>
                </div>
                <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  +12.5%
                </div>
              </div>

              {/* Matrix Columns Animation */}
              <div className="space-y-6">
                <div className="flex justify-between items-end gap-1.5 h-40">
                  {[35, 60, 40, 85, 55, 75, 45, 80, 95, 65, 85, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-full bg-gray-200/50 rounded-t-lg relative overflow-hidden group"
                      style={{ height: `${h}%` }}
                    >
                      <div 
                        className="absolute bottom-0 left-0 w-full bg-primary rounded-t-lg transition-all duration-1000"
                        style={{ 
                          height: '0%', 
                          animation: `grow-up 3s ease-out forwards ${i * 0.1}s` 
                        }}
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-3">
                  <span>ENE</span><span>MAY</span><span>SEP</span><span>DIC</span>
                </div>
              </div>

              {/* Money Flow Particles (Floating Gs.) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute text-primary/20 font-black text-xl animate-float-money"
                    style={{ 
                      left: `${Math.random() * 80}%`, 
                      top: '100%',
                      animationDelay: `${i * 1.5}s`,
                      animationDuration: `${4 + Math.random() * 4}s`
                    }}
                  >
                    Gs.
                  </div>
                ))}
              </div>

              {/* Floating AI Insight Card (Modernized) */}
              <div className="absolute -right-4 bottom-12 bg-secondary text-white p-5 rounded-3xl shadow-2xl border border-primary/20 max-w-[200px] animate-float group hover:scale-105 transition-transform">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xs animate-pulse">auto_awesome</span>
                  </div>
                  <span className="text-[9px] font-black tracking-widest text-primary uppercase">Optimización IA</span>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-300">
                  Detectamos un <span className="text-white font-bold">flujo inactivo</span> de capital. Sugerimos reinvertir para maximizar rentabilidad.
                </p>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-secondary leading-[1.1]">
              Una plataforma que <span className="text-primary">piensa por vos.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Controla IA no es solo un registro; es un motor de crecimiento. Analiza cada movimiento para ofrecerte proyecciones claras y oportunidades de ahorro que antes eran invisibles.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { t: 'Flujo de Caja Dinámico', d: 'Visualiza el movimiento de tu dinero con la intensidad de la matriz anual, anticipando excedentes y faltantes.', i: 'show_chart' },
                { t: 'Inteligencia en Cada Peso', d: 'La IA identifica gastos innecesarios y sugiere mejores formas de administrar tu capital automáticamente.', i: 'psychology' },
                { t: 'Control de Activos Total', d: 'Desde vehículos hasta inversiones, todo sincronizado en reportes profesionales listos para actuar.', i: 'account_balance' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.i}</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-black text-xl mb-1 group-hover:text-primary transition-colors">{item.t}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a 
                href="#pricing"
                className="inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_50px_rgba(244,140,37,0.3)] active:scale-95 group"
              >
                Ver planes de ahorro
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes grow-up {
          from { height: 0%; }
          to { height: 100%; }
        }
        @keyframes float-money {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-600px) rotate(360deg); opacity: 0; }
        }
        .animate-float-money {
          animation: float-money linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;
