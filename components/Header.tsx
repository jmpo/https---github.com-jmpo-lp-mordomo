
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1220]/85 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-secondary shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-lg">grid_view</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/60 font-black">Controla IA</p>
            <p className="text-lg font-extrabold leading-none">Sueldo sin fugas</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/70">
          <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
          <a href="#lead" className="hover:text-white transition-colors">Problema</a>
          <a href="#mecanismo" className="hover:text-white transition-colors">Solución</a>
          <a href="#metas" className="hover:text-white transition-colors">Metas</a>
          <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://demo.controla.site/"
            onClick={() => trackMetaEvent('Lead', { content_name: 'header_demo' })}
            className="hidden sm:inline-flex text-sm font-bold text-white/80 hover:text-white"
          >
            Ver demo
          </a>
          <a
            href="#oferta"
            onClick={() => trackMetaEvent('Lead', { content_name: 'header_cta' })}
            className="bg-primary text-secondary font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95"
          >
            Encontrar fugas
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
