
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0b1220] text-white pt-10 pb-14 sm:pt-16 sm:pb-20 hero-aurora">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[#102138] to-[#0b1220] opacity-90" />
      <div className="absolute -left-16 top-10 w-64 h-64 bg-primary/20 blur-[120px]" />
      <div className="absolute right-0 -bottom-14 w-80 h-80 bg-white/5 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-4 space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left duration-700">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-white/80">
          <span className="material-symbols-outlined text-sm text-primary">warning</span>
          ADVERTENCIA: ¿Sigues usando apps que solo te hacen sentir culpable por comprar un café?
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08]">
            Por qué los "Presupuestos Tradicionales" te mantienen estancado (Y cómo activar la "Arquitectura de Riqueza Silenciosa" para ver crecer tu dinero sin obsesionarte con recortar gastos).
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl">
            La mayoría de herramientas solo miran el pasado (lo que gastaste). Controla es el primer sistema de Gestión de Activos 360° que centraliza tus Inversiones, Automatiza tus Pagos y Proyecta tu Libertad Financiera en una sola pantalla.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#oferta"
            onClick={() => trackMetaEvent('Lead', { content_name: 'hero_cta' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 sm:px-7 py-4 rounded-2xl font-black text-base sm:text-lg shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine"
          >
            👉 QUIERO CONSTRUIR MI PATRIMONIO AHORA (Prueba Gratis - Empieza tu Arquitectura)
          </a>
          <a
            href="#video"
            onClick={() => trackMetaEvent('Lead', { content_name: 'hero_ver_video' })}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-sm font-semibold text-white/80 hover:bg-white/10 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-primary">play_circle</span>
            Ver video
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
