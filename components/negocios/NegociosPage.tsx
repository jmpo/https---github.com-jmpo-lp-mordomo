import React from 'react';
import { trackMetaEvent } from '../../metaPixel';

const demoLink = 'https://demo.controla.site/';
const videoSrc = 'https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

const villainPoints = [
  {
    title: 'La Trampa del Supermercado',
    desc: 'Comprás “por si acaso”, llegás a casa y ya tenías. Dinero a la basura.',
  },
  {
    title: 'La Hemorragia de las Suscripciones',
    desc: 'Esos $5, $10 y $15 olvidados suman más de $300 al año.',
  },
  {
    title: 'El “Impuesto” del Olvido',
    desc: 'No cambiaste el aceite a tiempo. Lo barato termina en reparación cara.',
  },
];

const mechanismSteps = [
  {
    title: 'Paso 1: Sacá la foto',
    desc: 'Apuntás al ticket o factura. La IA extrae datos y categoriza en segundos.',
  },
  {
    title: 'Paso 2: Escaneá tu despensa',
    desc: 'Antes de comprar, mirás tu celular. Si ya tenés leche: “¡NO COMPRES!”.',
  },
  {
    title: 'Paso 3: Blindaje total',
    desc: 'Registrás tu vehículo. Alertas antes de vencimientos, multas o sorpresas.',
  },
];

const transformation = [
  'Dormís tranquilo: sabés exactamente cuánto tenés.',
  'Cumplís metas: el viaje o la moto se pagan con lo que dejás de perder.',
  'Control total: sos el CEO de tu propia vida.',
];

const offerStack = [
  'El Escáner de IA (Valuado en $15/mes)',
  'Gestor de Despensa Anti-Desperdicio (Valuado en $10/mes)',
  'Asistente de Mantenimiento Vehicular (Valuado en $5/mes)',
  'Proyector de Metas de Ahorro (Invaluable)',
];

const testimonials = [
  {
    q: '“Recuperé $150 USD en mi primera semana.”',
    a: 'Veo exactamente en qué se va el dinero y corté fugas que ni sabía que tenía.',
  },
  {
    q: '“Ahora compro con cabeza, no con ansiedad.”',
    a: 'La despensa me avisa lo que ya tengo y dejo de duplicar compras.',
  },
  {
    q: '“Por fin sé mi ganancia real.”',
    a: 'El panel me muestra margen y gastos en segundos, sin planillas.',
  },
];

const plans = [
  {
    name: 'Mensual',
    price: 5,
    total: 5,
    months: 1,
    href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6',
    badge: null as string | null,
    highlight: false,
  },
  {
    name: 'Semestral',
    price: 4.17,
    total: 24.99,
    months: 6,
    href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
    badge: 'Más elegido',
    highlight: true,
  },
  {
    name: 'Anual',
    price: 3.33,
    total: 39.99,
    months: 12,
    href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6',
    badge: 'Mejor valor',
    highlight: true,
  },
];

const NegociosPage: React.FC = () => {
  const handleLead = (label: string, href?: string) => {
    trackMetaEvent('Lead', { content_name: label });
    if (href && typeof window !== 'undefined') {
      if (href.startsWith('#')) {
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = href;
        }
      } else {
        window.location.href = href;
      }
    }
  };

  const scrollToOffer = () => {
    const target = document.getElementById('oferta');
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const goToOffer = () => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname.toLowerCase();
    if (!path.includes('/negocios')) {
      window.location.href = '/negocios#oferta';
      return;
    }
    window.location.hash = '#oferta';
    requestAnimationFrame(scrollToOffer);
    setTimeout(scrollToOffer, 120);
  };

  const headingFont = { fontFamily: 'Inter, "Space Grotesk", sans-serif' } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <div className="sticky top-0 z-50 bg-[#ccff00] text-black">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em]">
          ⚠️ ¿Tu sueldo no llega al día 30? Lee esto antes de gastar un centavo más.
        </div>
      </div>

      <header className="border-b border-white/10 bg-[#000000]/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-[#00ff9d] text-[#000000] font-black flex items-center justify-center shadow-lg shadow-[#00ff9d]/30">
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/60">Controla IA</p>
              <p className="text-lg font-extrabold leading-none">Controla IA</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/70">
            <a href="#villano" className="hover:text-white transition-colors">El villano</a>
            <a href="#mecanismo" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#transformacion" className="hover:text-white transition-colors">Transformación</a>
            <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-white transition-colors">Objeciones</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              onClick={() => handleLead('negocios_header_demo')}
              className="hidden sm:inline-flex text-sm font-bold text-white/80 hover:text-white"
            >
              Ver demo
            </a>
            <button
              onClick={() => handleLead('negocios_header_cta', '#oferta')}
              className="bg-[#ccff00] text-black font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-[#ccff00]/30 hover:brightness-95 transition-all active:scale-95"
            >
              Escanear mis gastos ahora
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(204,255,0,0.12),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(0,255,157,0.12),transparent_50%)]" />
          <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-black leading-[1.05]" style={headingFont}>
                Dejá de regalar el 30% de tu sueldo a los “Gastos Fantasma”.
              </h1>
              <p className="text-lg text-white/70 font-semibold max-w-2xl">
                No necesitás ganar más dinero, necesitás dejar de perderlo. Controla es la primera IA que audita tu bolsillo,
                escanea tus tickets y vigila tu despensa para que encuentres dinero “oculto” en 5 minutos.
              </p>

              <div className="text-sm text-white/80 font-semibold border-l-2 border-[#ccff00] pl-4">
                ⭐⭐⭐⭐⭐ “Recuperé $150 USD en mi primera semana” - Comentario verificado.
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleLead('negocios_hero_cta', '#oferta')}
                  className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-7 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-[#ccff00]/30 hover:brightness-95 transition-all active:scale-95"
                >
                  👉 Escanear mis gastos ahora
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleLead('negocios_hero_demo', '#mecanismo')}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 px-7 py-4 rounded-2xl font-bold text-white/90 hover:bg-white/10 transition-all active:scale-95"
                >
                  Ver cómo funciona
                  <span className="material-symbols-outlined">play_circle</span>
                </button>
              </div>
              <p className="text-xs font-semibold text-white/60">Empieza gratis • Sin tarjeta</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.7)] bg-white/5">
                <img
                  src="/app-preview.gif"
                  alt="Dashboard Controla"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="villano" className="py-16 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black" style={headingFont}>
                El sistema está diseñado para que te quedes en cero.
              </h2>
              <p className="text-white/70 font-semibold max-w-3xl mx-auto">
                Tu banco, el supermercado y las apps de suscripción tienen un plan para vaciarte los bolsillos. Y está
                funcionando porque confiás en tu memoria.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {villainPoints.map((item) => (
                <div key={item.title} className="bg-black border border-white/10 rounded-2xl p-5">
                  <span className="material-symbols-outlined text-[#ff3b30]">dangerous</span>
                  <p className="mt-2 font-black text-white">{item.title}</p>
                  <p className="text-sm text-white/70 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mecanismo" className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-black" style={headingFont}>
                Tu detector de mentiras financiero (con IA) 🤖
              </h2>
              <p className="text-white/70 font-semibold">
                Olvidate de Excel. Olvidate de anotar en servilletas. Controla hace el trabajo sucio.
              </p>
              <div className="space-y-3">
                {mechanismSteps.map((item) => (
                  <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-black text-[#ccff00]">{item.title}</p>
                    <p className="text-sm text-white/75 font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[#00ff9d]/10 blur-3xl rounded-3xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-black">
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src={videoSrc}
                    loading="lazy"
                    style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}
                    title="Controla IA en acción"
                  ></iframe>
                </div>
              </div>
              <div className="flex justify-center mt-4 relative z-10 pointer-events-auto">
                <a
                  href="#oferta"
                  onClick={(event) => {
                    event.preventDefault();
                    trackMetaEvent('Lead', { content_name: 'negocios_video_cta' });
                    goToOffer();
                  }}
                  className="bg-[#ccff00] text-black px-6 py-3 rounded-xl font-black shadow-lg shadow-[#ccff00]/30 hover:brightness-95 transition-all active:scale-95 pointer-events-auto"
                >
                  Ver oferta después del video
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="transformacion" className="py-16 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-black" style={headingFont}>
                Imaginá despertar el día 25 y tener dinero en la cuenta. 😌
              </h2>
              <p className="text-white/70 font-semibold">
                No es magia. Es matemáticas. Cuando tapás las fugas, el balde se llena solo.
              </p>
              <div className="space-y-2">
                {transformation.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#00ff9d]">check_circle</span>
                    <p className="text-sm text-white/80 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black" style={headingFont}>
                Todo lo que incluye tu cuenta Controla
              </h2>
              <p className="text-white/70 font-semibold">Valor real: <span className="line-through">$30 USD/mes</span></p>
              <p className="text-[#ccff00] font-black text-xl">Planes premium desde el precio de un café.</p>
            </div>

            <div className="relative rounded-[28px] p-[1px] bg-[linear-gradient(135deg,rgba(204,255,0,0.7),rgba(0,255,157,0.15),rgba(255,59,48,0.2))] shadow-[0_30px_90px_-30px_rgba(0,0,0,0.8)]">
              <div className="rounded-[26px] bg-[#050505] border border-white/10 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black bg-[#ccff00] px-3 py-1 rounded-full">Incluye hoy</span>
                  <span className="text-xs font-bold text-white/60">Todo listo para encontrar dinero perdido desde el día 1.</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {offerStack.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                      <span className="material-symbols-outlined text-[#ccff00]">check_circle</span>
                      <p className="text-sm text-white/80 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const isHighlight = plan.highlight;
                const isMonthly = plan.months === 1;
                return (
                  <div
                    key={plan.name}
                    className={`p-8 rounded-3xl border transition-all duration-300 ${
                      isHighlight
                        ? 'bg-white text-black border-[#ccff00] shadow-[0_30px_80px_-30px_rgba(204,255,0,0.35)]'
                        : isMonthly
                          ? 'bg-white text-black border-white/20 shadow-[0_22px_70px_-40px_rgba(0,255,157,0.35)] hover:border-[#00ff9d]/70 hover:shadow-[0_28px_80px_-45px_rgba(0,255,157,0.45)]'
                          : 'bg-[#111111] text-white border-white/15 hover:border-[#ccff00]/60 hover:shadow-[0_20px_60px_-30px_rgba(204,255,0,0.25)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`text-sm font-black ${isHighlight || isMonthly ? 'text-black' : 'text-white'}`}>{plan.name}</p>
                        <p className={`text-3xl font-black mt-1 ${isHighlight || isMonthly ? 'text-black' : 'text-white'}`}>USD {plan.price.toFixed(2)}</p>
                        <p className={`text-sm font-semibold ${isHighlight || isMonthly ? 'text-[#1f2937]' : 'text-white/70'}`}>Total hoy: USD {plan.total.toFixed(2)}</p>
                        {plan.months > 1 && (
                          <p className={`text-xs font-semibold ${isHighlight ? 'text-[#4b5563]' : 'text-white/60'}`}>
                            Pago único por {plan.months} meses
                          </p>
                        )}
                        {isMonthly && (
                          <p className="text-xs font-semibold text-[#4b5563]">Ideal para probar 1 mes</p>
                        )}
                      </div>
                      {plan.badge && (
                        <span className={`text-xs font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full ${
                          isHighlight ? 'bg-[#ccff00]/20 text-black' : 'bg-white/10 text-white'
                        }`}>
                          {plan.badge}
                        </span>
                      )}
                      {!plan.badge && !isHighlight && (
                        <span className={`text-xs font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full ${
                          isMonthly ? 'bg-[#00ff9d]/20 text-[#0b3b2b]' : 'bg-white/10 text-white/70'
                        }`}>
                          Entrada
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleLead(`negocios_plan_${plan.name.toLowerCase()}`, plan.href)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black transition-all active:scale-95 ${
                        isHighlight
                          ? 'bg-[#ccff00] text-black hover:brightness-95'
                          : isMonthly
                            ? 'bg-black/90 text-white hover:bg-black'
                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                      }`}
                    >
                      🛒 Comprar ahora
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black" style={headingFont}>
                Clientes satisfechos
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
              {testimonials.map((item) => (
                <div key={item.q} className="bg-black border border-white/10 rounded-2xl p-4">
                  <p className="font-black text-white">{item.q}</p>
                  <p className="text-sm text-white/80 font-semibold mt-2">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-black border border-white/10 rounded-[28px] p-8 md:p-10 shadow-xl">
              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="space-y-3">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">El dinero no cuida de sí mismo.</p>
                  <h2 className="text-3xl font-black" style={headingFont}>Tú tienes que hacerlo.</h2>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleLead('negocios_final_cta', '#oferta')}
                    className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-6 py-4 rounded-xl font-black shadow-lg shadow-[#ccff00]/30 hover:brightness-95 transition-all active:scale-95"
                  >
                    👉 Empieza ahora
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <a
                    href={demoLink}
                    onClick={() => handleLead('negocios_final_demo')}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    Ver demo primero
                    <span className="material-symbols-outlined">play_circle</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NegociosPage;
