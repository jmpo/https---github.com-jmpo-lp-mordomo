
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-6xl font-black text-white mb-8 leading-tight">
            ¿Listo para tomar las riendas de tu capital?
          </h2>
          <p className="text-primary-light text-xl mb-12 max-w-2xl mx-auto font-medium">
            Únete a más de 2,000 profesionales que ya simplificaron su vida financiera. Empieza hoy mismo y deja que la IA trabaje por vos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#pricing"
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl active:scale-95 text-center"
            >
              Comenzar ahora mismo
            </a>
            <a 
              href="https://controla.site/demo"
              className="bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all active:scale-95 text-center"
            >
              Ver Demo Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
