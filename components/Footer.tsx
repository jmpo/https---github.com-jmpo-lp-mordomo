
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1220] pt-16 pb-10 border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-secondary shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60 font-black">Controla IA</p>
              <p className="text-lg font-extrabold leading-none">Tu sueldo sin fugas</p>
            </div>
          </div>
          <div className="flex gap-4 text-sm font-semibold text-white/70">
            <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
            <a href="#lead" className="hover:text-white transition-colors">Problema</a>
            <a href="#mecanismo" className="hover:text-white transition-colors">Solución</a>
            <a href="#metas" className="hover:text-white transition-colors">Metas</a>
            <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
          </div>
          <a href="https://wa.link/wcvh0b" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
            soporte@controla.site
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4 text-sm text-white/60">
          <p className="font-bold">© 2025 Controla IA. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-base">verified</span>
              Garantía 30 días
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-base">lock</span>
              Pago seguro
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
