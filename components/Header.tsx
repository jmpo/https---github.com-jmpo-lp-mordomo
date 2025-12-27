
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f7f5]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">grid_view</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight">Controla IA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#features" className="hover:text-primary transition-colors">Características</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
          <a href="#solution" className="hover:text-primary transition-colors">Solución</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://app.controla.site/" className="hidden sm:block text-sm font-bold hover:text-primary transition-colors">Iniciar sesión</a>
          <a 
            href="https://demo.controla.site/"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95 text-center"
          >
            Comenzar prueba
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
