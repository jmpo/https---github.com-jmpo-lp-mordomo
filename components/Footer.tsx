
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">grid_view</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight">Controla IA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              La plataforma de gestión financiera impulsada por IA líder en Latinoamérica. Diseñada para humanos, no solo para contadores.
            </p>
          </div>
          
          <div>
            <h5 className="font-black text-xs mb-6 uppercase tracking-[0.2em] text-gray-400">Producto</h5>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><a href="#features" className="hover:text-primary transition-colors">Características</a></li>
              <li><a href="#solution" className="hover:text-primary transition-colors">IA Engine</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Planes</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-xs mb-6 uppercase tracking-[0.2em] text-gray-400">Empresa</h5>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="https://controla.site/demo" className="hover:text-primary transition-colors">Demo</a></li>
              <li><a href="mailto:soporte@controla.site" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black text-xs mb-6 uppercase tracking-[0.2em] text-gray-400">Legal</h5>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-50 pt-10 gap-6">
          <p className="text-sm text-gray-400 font-bold">© 2025 Controla IA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
