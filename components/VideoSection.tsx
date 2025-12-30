import React from 'react';
import { trackMetaEvent } from '../metaPixel';

const highlights = [
  {
    icon: 'bolt',
    title: 'Cobros y gastos en automático',
    desc: 'Recordatorios y avisos claros para no quedarte sin efectivo.',
  },
  {
    icon: 'notifications_active',
    title: 'Alertas que te dicen qué hacer',
    desc: 'La app te marca hoy qué pago o gasto atender para no atrasarte.',
  },
  {
    icon: 'insights',
    title: 'Reportes simples',
    desc: 'Sabés cuánto podés gastar y cuánto ahorrar sin planillas.',
  },
];

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.05fr_1.2fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full uppercase text-[10px] font-black tracking-[0.2em] text-primary">
            <span className="material-symbols-outlined text-xs">play_circle</span>
            Verlo en acción
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-secondary leading-tight">
            Mirá cómo <span className="text-primary">Controla IA</span> te ayuda a dejar de perder plata.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Grabación real del tablero que usan personas para ordenar gastos, ahorrar y llegar a fin de mes sin sobresaltos.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8f7f5] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-extrabold text-secondary">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#pricing"
              onClick={() => trackMetaEvent('Lead', { content_name: 'video_ver_planes' })}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 active:scale-95"
            >
              Quiero ordenar mi dinero
            </a>
            <p className="text-sm font-semibold text-gray-500 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">volume_up</span>
              Recomendado verlo con audio.
            </p>
          </div>
        </div>

        <div className="relative lg:-mr-6">
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
      </div>
    </section>
  );
};

export default VideoSection;
