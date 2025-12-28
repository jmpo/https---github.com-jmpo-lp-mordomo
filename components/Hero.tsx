
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Nuevo: Asistente IA v2.0</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-secondary">
            Control total de tus <span className="relative">
              <span className="relative z-10 text-primary">finanzas</span>
              <span className="absolute left-0 bottom-2 w-full h-4 bg-primary/10 -rotate-1"></span>
            </span> en un solo lugar.
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Gestiona ingresos, vehículos, clientes e inversiones con el poder de la Inteligencia Artificial. Tu negocio, simplificado y optimizado automáticamente.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Sin hojas de cálculo.
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Reportes instantáneos.
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              100% Automatizado.
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#pricing"
              onClick={() => trackMetaEvent('Lead', { content_name: 'hero_comenzar_ahora' })}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 active:scale-95 text-center"
            >
              Comenzar Ahora
            </a>
            <a 
              href="https://demo.controla.site/"
              onClick={() => trackMetaEvent('Lead', { content_name: 'hero_ver_demo' })}
              className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
            >
              Ver Demo
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 40}/64/64`}
                  className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-gray-100"
                  alt="User avatar"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">
                +2k
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-500">
              Profesionales confían en Controla IA
            </p>
          </div>
        </div>
        
        {/* Right Side: Dashboard Mockup with Realistic Data */}
        <div className="relative perspective-1000 hidden lg:block animate-in fade-in zoom-in duration-1000">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
          
          <div className="relative bg-[#f8f7f5] rounded-2xl border border-gray-200 shadow-2xl rotate-y-12 transform-gpu overflow-hidden min-h-[550px] flex">
            
            {/* Sidebar Mockup */}
            <div className="w-40 bg-white border-r border-gray-100 p-4 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-[10px]">
                   <span className="material-symbols-outlined text-sm">grid_view</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black leading-none">Controla IA</span>
                  <span className="text-[6px] text-primary font-bold uppercase">Enterprise</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Principal</div>
                {['Dashboard', 'Cuentas', 'Ingresos', 'Gastos', 'Vehículos'].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-2 p-1.5 rounded-md text-[9px] font-semibold ${item === 'Dashboard' ? 'bg-primary/5 text-primary' : 'text-gray-500'}`}>
                    <span className="material-symbols-outlined text-xs">
                      {item === 'Dashboard' ? 'dashboard' : item === 'Vehículos' ? 'local_shipping' : 'payments'}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Mockup with Real Data */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-black text-secondary">Relatórios</h3>
                  <p className="text-[10px] text-gray-400">Análisis financiero de este mes</p>
                </div>
                <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-2">
                   <span className="material-symbols-outlined text-xs">download</span> Exportar
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[8px] font-bold text-gray-400 uppercase">Total Receitas</p>
                    <span className="material-symbols-outlined text-green-500 text-xs">trending_up</span>
                  </div>
                  <h4 className="text-lg font-black text-green-600">Gs. 15.4M</h4>
                  <p className="text-[7px] text-gray-400 mt-1">Sincronizado hoy</p>
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[8px] font-bold text-gray-400 uppercase">Total Despesas</p>
                    <span className="material-symbols-outlined text-red-500 text-xs">trending_down</span>
                  </div>
                  <h4 className="text-lg font-black text-red-600">Gs. 8.1M</h4>
                  <p className="text-[7px] text-gray-400 mt-1">2 pendientes</p>
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm border-l-4 border-l-primary">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[8px] font-bold text-gray-400 uppercase">Saldo Actual</p>
                    <span className="material-symbols-outlined text-primary text-xs">account_balance_wallet</span>
                  </div>
                  <h4 className="text-lg font-black text-secondary">Gs. 7.3M</h4>
                  <p className="text-[7px] text-green-600 font-bold mt-1">+12% vs mes anterior</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-[10px] font-black text-secondary">Matriz mensual 2025</h5>
                  <div className="flex gap-2">
                     <div className="bg-secondary text-white px-2 py-1 rounded text-[8px] font-bold">Detalle</div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-1 mb-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-8 rounded transition-all duration-500 ${i < 3 ? 'bg-primary' : i < 6 ? 'bg-primary/40' : 'bg-gray-50'}`}></div>
                  ))}
                </div>
                <div className="flex justify-between text-[7px] text-gray-400 font-bold">
                  <span>ENE</span><span>ABR</span><span>JUL</span><span>DIC</span>
                </div>
              </div>

              {/* Status floating */}
              <div className="absolute bottom-4 right-4 bg-secondary text-white p-3 rounded-xl shadow-2xl flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs text-primary animate-pulse">check_circle</span>
                </div>
                <div>
                  <p className="text-[8px] font-black">Nómina pagada</p>
                  <p className="text-[7px] opacity-70">Confirmado justo ahora</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gray-100 hidden lg:block opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gray-100 hidden lg:block opacity-50"></div>
    </section>
  );
};

export default Hero;
