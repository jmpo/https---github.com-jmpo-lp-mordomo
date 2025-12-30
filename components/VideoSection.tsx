import React from 'react';
import { trackMetaEvent } from '../metaPixel';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-base text-gray-700 font-semibold">
            Si hoy no podés responder con seguridad: <span className="font-black text-secondary">“¿Cuánto puedo gastar sin preocuparme?”</span>
          </p>
          <p className="text-base text-gray-600 font-semibold">
            Entonces no estás manejando tu dinero. Estás reaccionando a él.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full uppercase text-[10px] font-black tracking-[0.2em] text-primary">
            <span className="material-symbols-outlined text-xs">play_circle</span>
            Mirá esto antes de seguir
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary leading-tight">
            Mirá este video y entendé en 2 minutos por qué el problema no es cuánto ganás, sino que no tenés visibilidad.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-3xl opacity-60"></div>
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] bg-[#0f0d0c]">
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 text-xs font-bold text-secondary shadow-sm backdrop-blur">
              <span className="material-symbols-outlined text-sm text-primary">verified</span>
              Video real del producto
            </div>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                loading="lazy"
                title="Controla IA en acción"
                style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg text-gray-700 font-semibold">
            Si esto te resonó, no es casualidad.
          </p>
          <div className="space-y-2 text-gray-600">
            <p>Sabés que algo no está del todo bien.</p>
            <p>Sentís que trabajás pero no avanzás.</p>
            <p>Y necesitás claridad, no más consejos.</p>
          </div>
          <p className="text-base text-gray-700 font-semibold">
            No esperes a “ganar más” para ordenar. El orden viene antes.
          </p>
          <div className="flex flex-col items-center gap-3 pt-2">
            <a
              href="#pricing"
              onClick={() => trackMetaEvent('Lead', { content_name: 'video_empezar_control' })}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 active:scale-95"
            >
              Quiero ver cómo funciona
            </a>
            <p className="text-sm font-semibold text-gray-500">
              Toma menos de 2 minutos. No necesitás tarjeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
