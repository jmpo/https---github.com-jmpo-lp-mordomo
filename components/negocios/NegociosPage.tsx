import React from 'react';
import { trackMetaEvent } from '../../metaPixel';

const demoLink = 'https://demo.controla.site/';
const videoSrc = 'https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

const painPoints = [
  'El "Robo Hormiga" Invisible: compras duplicadas, vueltos que no cuadran y suscripciones fantasma.',
  'Ceguera de Inventario: comprás mercancía que ya tenías o perdés ventas por quedarte sin stock.',
  'Estrés de Fin de Mes: llegás al día 30 sin saber si hubo ganancia real o solo moviste dinero.',
];

const mechanismItems = [
  {
    title: 'Escaneo con IA',
    desc: 'Sacás una foto a tus facturas y la app extrae fechas, montos y proveedores al instante.',
  },
  {
    title: 'Alertas Anti-Desastre',
    desc: 'Notificaciones antes de quedarte sin caja o cuando un gasto se sale de lo normal.',
  },
  {
    title: 'Auditoría Automática',
    desc: 'El sistema cruza tus gastos con tu inventario para justificar cada centavo.',
  },
];

const benefits = [
  'Visibilidad Total: Dashboard con ingresos, gastos y margen neto en tiempo real.',
  'Inventario Blindado: stock, caducidad y reabastecimiento automático.',
  'Flota bajo Control: mantenimiento, gasolina y gastos de vehículos.',
  'Multiusuario Seguro: tu equipo registra, vos controlás con permisos.',
];

const faqs = [
  {
    q: '¿Es difícil de configurar?',
    a: 'No. Está diseñado para gente ocupada. Si sabés usar WhatsApp, sabés usar Controla. En menos de 5 minutos empezás.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Usamos encriptación de grado bancario. Tus números son solo tuyos y nadie más accede.',
  },
  {
    q: '¿Sirve para mi tipo de negocio?',
    a: 'Si comprás insumos, vendés productos o servicios y tenés gastos, Controla es para vos. Funciona para constructoras, restaurantes, tiendas y servicios.',
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
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  };

  const headingFont = { fontFamily: 'Inter, Montserrat, sans-serif' } as React.CSSProperties;
  const bodyFont = { fontFamily: 'Roboto, Open Sans, sans-serif' } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white" style={bodyFont}>
      <header className="sticky top-0 z-40 bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-[#00e599] text-[#0f172a] font-black flex items-center justify-center shadow-lg shadow-[#00e599]/30">
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/60">Controla IA</p>
              <p className="text-lg font-extrabold leading-none">Negocios</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/70">
            <a href="#autoridad" className="hover:text-white transition-colors">Autoridad</a>
            <a href="#dolor" className="hover:text-white transition-colors">Dolor</a>
            <a href="#mecanismo" className="hover:text-white transition-colors">Mecanismo</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
            <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
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
              className="bg-[#00e599] text-[#0f172a] font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-[#00e599]/30 hover:brightness-95 transition-all active:scale-95"
            >
              Empezar prueba gratis
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,229,153,0.25),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(255,92,0,0.2),transparent_40%)]" />
          <div className="absolute -left-16 top-24 w-64 h-64 bg-[#00e599]/15 blur-[130px]" />
          <div className="absolute right-0 -bottom-24 w-80 h-80 bg-[#ff5c00]/10 blur-[140px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00e599]">
                Para dueños de negocio que odian el Excel
              </p>
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-black leading-[1.05]" style={headingFont}>
                  Recuperá el 20% de tus ganancias y eliminá el caos administrativo en 5 minutos al día.
                </h1>
                <p className="text-lg text-white/75 font-semibold">
                  Dejá de adivinar dónde está tu dinero. Controla usa IA para auditar tus facturas, vigilar tu inventario
                  y decirte exactamente cuánto ganás, sin tener que teclear nada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleLead('negocios_hero_cta', '#oferta')}
                  className="inline-flex items-center justify-center gap-2 bg-[#00e599] text-[#0f172a] px-7 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-[#00e599]/30 hover:brightness-95 transition-all active:scale-95"
                >
                  👉 Empezar prueba gratis
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
              <p className="text-xs font-semibold text-white/60">Sin tarjeta de crédito • Se instala en 1 minuto</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[#00e599]/10 blur-3xl rounded-3xl opacity-70" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.55)]">
                <img
                  src="/app-preview.gif"
                  alt="Dashboard de Controla IA"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="autoridad" className="bg-[#121826] py-10 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-4 space-y-4">
            <p className="text-center text-sm font-black tracking-[0.2em] text-white/60">
              MÁS DE 500 EMPRESARIOS LATINOS YA TIENEN EL CONTROL TOTAL
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white/50 text-sm font-semibold">
              <div className="border border-white/10 rounded-xl py-3">Restaurantes</div>
              <div className="border border-white/10 rounded-xl py-3">Tiendas</div>
              <div className="border border-white/10 rounded-xl py-3">Constructoras</div>
              <div className="border border-white/10 rounded-xl py-3">Agencias</div>
            </div>
          </div>
        </section>

        <section id="dolor" className="bg-black py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-black" style={headingFont}>Tu negocio tiene un "agujero en el bolsillo" y no lo ves.</h2>
              <p className="text-white/70 font-semibold">
                Mientras seguís anotando en cuadernos o peleando con hojas de cálculo, esto es lo que pasa con tu dinero:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {painPoints.map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="material-symbols-outlined text-[#ff5c00]">error</span>
                  <p className="text-sm text-white/80 font-semibold mt-2">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mecanismo" className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-black" style={headingFont}>No contrates más personal. Activá a tu gerente financiero digital.</h2>
              <p className="text-white/70 font-semibold">
                Controla no es una agenda. Es un sistema inteligente que trabaja por vos las 24 horas.
              </p>
              <div className="space-y-3">
                {mechanismItems.map((item) => (
                  <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-black text-[#00e599]">{item.title}</p>
                    <p className="text-sm text-white/75 font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[#00e599]/10 blur-3xl rounded-3xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] bg-black">
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
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleLead('negocios_video_cta', '#oferta')}
                  className="bg-[#00e599] text-[#0f172a] px-6 py-3 rounded-xl font-black shadow-lg shadow-[#00e599]/30 hover:brightness-95 transition-all active:scale-95"
                >
                  Ver oferta después del video
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-14 bg-[#0b111e]">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl font-black" style={headingFont}>Lo que obtenés al tomar el control hoy:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="material-symbols-outlined text-[#00e599]">check_circle</span>
                  <p className="text-sm text-white/80 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className="py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black" style={headingFont}>Cuesta menos que un café al día. Te ahorra miles al mes.</h2>
              <p className="text-white/70 font-semibold">Plan Emprendedor. Elegí cómo querés empezar.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const isHighlight = plan.highlight;
                return (
                  <div
                    key={plan.name}
                    className={`p-8 rounded-3xl border transition-all duration-300 ${
                      isHighlight
                        ? 'bg-white text-[#0f172a] border-[#00e599] shadow-2xl shadow-[#00e599]/20'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`text-sm font-black ${isHighlight ? 'text-[#0f172a]' : 'text-white'}`}>{plan.name}</p>
                        <p className={`text-3xl font-black mt-1 ${isHighlight ? 'text-[#0f172a]' : 'text-white'}`}>USD {plan.price.toFixed(2)}</p>
                        <p className={`text-sm font-semibold ${isHighlight ? 'text-[#334155]' : 'text-white/70'}`}>Total hoy: USD {plan.total.toFixed(2)}</p>
                        {plan.months > 1 && (
                          <p className={`text-xs font-semibold ${isHighlight ? 'text-[#475569]' : 'text-white/60'}`}>
                            Pago único por {plan.months} meses
                          </p>
                        )}
                      </div>
                      {plan.badge && (
                        <span className={`text-xs font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full ${
                          isHighlight ? 'bg-[#00e599]/15 text-[#0f172a]' : 'bg-white/10 text-white'
                        }`}>
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className={`space-y-2 text-sm font-semibold mb-6 ${isHighlight ? 'text-[#334155]' : 'text-white/80'}`}>
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-base ${isHighlight ? 'text-[#00e599]' : 'text-[#00e599]'}`}>
                          verified
                        </span>
                        Usuarios ilimitados
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-base ${isHighlight ? 'text-[#00e599]' : 'text-[#00e599]'}`}>
                          bolt
                        </span>
                        Escaneo de facturas con IA
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-base ${isHighlight ? 'text-[#00e599]' : 'text-[#00e599]'}`}>
                          directions_car
                        </span>
                        Módulo de vehículos e inventario
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-base ${isHighlight ? 'text-[#00e599]' : 'text-[#00e599]'}`}>
                          chat
                        </span>
                        Soporte prioritario por WhatsApp
                      </div>
                    </div>

                    <button
                      onClick={() => handleLead(`negocios_plan_${plan.name.toLowerCase()}`, plan.href)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black transition-all active:scale-95 ${
                        isHighlight
                          ? 'bg-[#00e599] text-[#0f172a] hover:brightness-95'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      👉 Activar mi cuenta ahora
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Preguntas frecuentes</p>
              <h2 className="text-3xl font-black" style={headingFont}>Preguntas frecuentes</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3">
                  <span className="material-symbols-outlined text-[#00e599] mt-0.5">add</span>
                  <div>
                    <p className="font-black text-white">{faq.q}</p>
                    <p className="text-sm text-white/80 font-semibold">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#0b111e] border border-white/10 rounded-[28px] p-8 md:p-10 shadow-xl">
              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="space-y-3">
                  <h2 className="text-3xl font-black" style={headingFont}>Dejá de perder dinero hoy mismo.</h2>
                  <p className="text-white/70 font-semibold">
                    Activá Controla y empezá a recuperar margen desde esta semana.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleLead('negocios_final_cta', '#oferta')}
                    className="inline-flex items-center justify-center gap-2 bg-[#00e599] text-[#0f172a] px-6 py-4 rounded-xl font-black shadow-lg shadow-[#00e599]/30 hover:brightness-95 transition-all active:scale-95"
                  >
                    🚀 Quiero controlar mi negocio
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
