import React from 'react';
import { trackMetaEvent } from '../../metaPixel';

const payLink = 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6';
const demoLink = 'https://demo.controla.site/';
const videoSrc = 'https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

const painPoints = [
  'Cobrás y no sabés exactamente a dónde se fue el dinero',
  'Sentís que trabajás mucho pero avanzás poco',
  'Pagás cosas que “no recordabas”',
  'Postergás metas porque no hay claridad',
  'Vivís con una presión financiera constante',
];

const benefits = [
  'Sabés cuánto dinero es realmente tuyo',
  'Detectás fugas invisibles que hoy te roban tranquilidad',
  'Dejás de decidir “a ojo”',
  'Tenés previsión, no sorpresas',
  'Bajás la ansiedad financiera',
  'Volvés a dormir tranquilo',
];

const steps = [
  'Cargás tus ingresos y gastos reales',
  'El sistema ordena y centraliza todo',
  'Ves alertas, oportunidades y decisiones claras',
  'Empezás a tomar control semana a semana',
];

const extras = [
  {
    title: 'Gestor de Metas Financieras Inteligente',
    desc: 'Calcula cuánto necesitás, en cuánto tiempo y si vas bien o no para cada meta.',
    icon: 'flag',
  },
  {
    title: 'Mercado con Inventario Inteligente',
    desc: 'Controlá lista de mercado y stock en casa para evitar compras duplicadas.',
    icon: 'shopping_basket',
  },
  {
    title: 'Gestión Total de Vehículos',
    desc: 'Mantenimientos, revisiones, historial y alertas para evitar imprevistos caros.',
    icon: 'directions_car',
  },
  {
    title: 'Recordatorios y Alertas Automáticas',
    desc: 'Pagos, vencimientos, mantenimientos y compromisos siempre bajo control.',
    icon: 'notifications_active',
  },
  {
    title: 'Visión Financiera Centralizada',
    desc: 'Dinero, metas, gastos, mercado, vehículos y compromisos en un solo lugar.',
    icon: 'device_hub',
  },
];

const stackValue = [
  'Sistema de control financiero personal',
  'Dashboard inteligente',
  'Gestión de ingresos y gastos',
  'Metas financieras calculadas',
  'Mercado con inventario',
  'Gestión de vehículos',
  'Recordatorios automáticos',
  'Visión financiera centralizada',
];

const faqs = [
  { q: '¿Necesito saber de finanzas?', a: 'No. El sistema es simple y pensado para personas normales.' },
  { q: '¿Sirve si gano poco?', a: 'Justamente ahí más impacto genera.' },
  { q: '¿Es complicado?', a: 'No. Es visual, práctico y fácil de usar.' },
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
    badge: 'Más popular',
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

const Lp2Page: React.FC = () => {
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

  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <header className="sticky top-0 z-40 bg-[#0b1220]/85 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-secondary font-black shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60 font-black">Controla IA</p>
              <p className="text-lg font-extrabold leading-none">Centro de Control</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/70">
            <a href="#identificacion" className="hover:text-white transition-colors">¿Te pasa?</a>
            <a href="#video" className="hover:text-white transition-colors">Ver sistema</a>
            <a href="#planes" className="hover:text-white transition-colors">Planes</a>
            <a href="#extras" className="hover:text-white transition-colors">Incluye</a>
            <a href="#cta-final" className="hover:text-white transition-colors">Empezar</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              onClick={() => handleLead('lp2_header_demo')}
              className="hidden sm:inline-flex text-sm font-bold text-white/80 hover:text-white"
            >
              Ver demo
            </a>
            <button
              onClick={() => handleLead('lp2_header_cta', payLink)}
              className="bg-primary text-secondary font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95"
            >
              Quiero control
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[#102138] to-[#0b1220]" />
          <div className="absolute -left-20 top-10 w-56 h-56 bg-primary/20 blur-[120px]" />
          <div className="absolute right-0 -bottom-10 w-72 h-72 bg-white/5 blur-[140px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-[0.18em]">
                <span className="material-symbols-outlined text-sm text-primary">verified</span>
                Nuevo: control total sin planillas
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-black leading-[1.05]">
                  Tomá el control total de tu dinero
                </h1>
                <p className="text-2xl font-extrabold text-primary">Antes de que tu dinero siga controlando tu vida.</p>
                <p className="text-lg text-white/75 max-w-2xl">
                  La mayoría no tiene un problema de ingresos. Tiene un problema de control. Este sistema lo resuelve.
                </p>
                <div className="space-y-2 text-white/80">
                  <p>Pagos atrasados. Gastos invisibles. Decisiones financieras tomadas a ciegas.</p>
                  <p className="font-bold text-primary">👉 Esto no es falta de disciplina. 👉 Es falta de un sistema.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleLead('lp2_hero_cta', '#planes')}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-7 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine"
                >
                  Quiero ver la oferta
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <a
                  href={demoLink}
                  onClick={() => handleLead('lp2_hero_demo')}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 px-7 py-4 rounded-2xl font-bold text-white/90 hover:bg-white/10 transition-all active:scale-95"
                >
                  Ver cómo se ve
                  <span className="material-symbols-outlined">play_circle</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">verified</span>
                  Garantía 7 días
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">schedule</span>
                  Configuración guiada en 15 minutos
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">chat</span>
                  Soporte humano prioritario
                </span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 lg:p-8 shadow-2xl shadow-black/30 backdrop-blur space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Lo que cambia</p>
                  <p className="text-xl font-black text-white">Pasa de caos a control</p>
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">IA + sistema</div>
              </div>
              <div className="space-y-3 text-white/80 text-sm">
                <p>• Ves todo en un panel. • Alertas antes de los problemas. • Acciones claras cada semana.</p>
                <p className="font-semibold text-white">Sin Excel. Sin apps sueltas. Sin caos.</p>
              </div>
              <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <div>
                  <p className="text-sm font-black text-white">No dependés de fuerza de voluntad.</p>
                  <p className="text-sm text-white/70">Dependés de un sistema que piensa por vos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="identificacion" className="bg-white text-secondary py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">¿Te pasa alguna de estas?</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {painPoints.map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <p className="text-sm font-semibold text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3 text-amber-700 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">warning</span>
                <span>Esto no es normal. Es lo que pasa cuando no hay un sistema que ordene todo por vos.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="video" className="bg-[#f8f7f5] text-secondary py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-2xl font-black">🎥 Mirá cómo funciona el sistema por dentro</p>
              <p className="text-lg text-gray-600 font-semibold">
                En este video te muestro cómo funciona en la práctica, cómo se ve tu información y por qué deja de ser confuso manejar tus finanzas.
              </p>
              <p className="text-sm font-bold text-primary">🎯 No es una promesa. Es el sistema funcionando.</p>
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
                    src={videoSrc}
                    loading="lazy"
                    title="Controla IA en acción"
                    style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleLead('lp2_video_cta', '#planes')}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-primary/30 active:scale-95"
              >
                Quiero ver planes y oferta
              </button>
              <p className="text-sm font-semibold text-gray-600">Toma menos de 2 minutos. No necesitás tarjeta.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1220] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Promesa central</p>
                <h2 className="text-3xl font-black leading-tight">La solución no es gastar menos. Es verlo todo con claridad.</h2>
                <p className="text-lg text-white/75 font-semibold">
                  Creamos un sistema de control financiero personal para que sepas exactamente dónde estás parado, qué decisiones tomar y cómo avanzar sin estrés.
                </p>
                <div className="space-y-1 text-white/80">
                  <p>No es una app de gastos.</p>
                  <p>No es una planilla disfrazada.</p>
                  <p className="font-bold text-primary">👉 Es tu centro de control financiero personal.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/30">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary mb-3">💥 Qué cambia cuando usás el sistema</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <p className="text-sm text-white/80 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white text-secondary rounded-3xl p-6 shadow-xl">
                <p className="text-xl font-black mb-2">🧠 Por qué esto sí funciona</p>
                <p className="text-sm text-gray-700 font-semibold">
                  La mayoría intenta manejar sus finanzas usando la cabeza. Y la cabeza se olvida, se estresa, se satura.
                </p>
                <div className="mt-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-semibold text-gray-700">
                  Este sistema hace algo distinto: no dependés de fuerza de voluntad. Dependés de un sistema que piensa por vos.
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-3xl p-6 text-secondary shadow-sm">
                <p className="text-xl font-black mb-2">🔄 Así de simple</p>
                <div className="space-y-3 text-sm font-semibold text-gray-700">
                  {steps.map((step, idx) => (
                    <div key={step} className="flex items-start gap-3 bg-white rounded-2xl px-3 py-3 shadow-sm">
                      <span className="text-primary font-black">{idx + 1}️⃣</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-black text-secondary">Sin Excel. Sin apps sueltas. Sin caos.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="bg-white text-secondary py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Oferta clara</p>
              <h2 className="text-3xl lg:text-4xl font-black">Elegí el plan que más te convenga</h2>
              <p className="text-lg text-gray-600 font-semibold">Mismos precios que la landing principal, con la comparación que mejor ayuda a decidir.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const isHighlight = plan.highlight;
                return (
                  <div
                    key={plan.name}
                    className={`p-8 rounded-3xl border shadow-lg transition-all duration-300 bg-white hover:-translate-y-1 ${
                      isHighlight ? 'border-primary shadow-primary/20 ring-2 ring-primary/15' : 'border-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-black text-secondary">{plan.name}</p>
                        <p className="text-3xl font-black text-secondary mt-1">USD {plan.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 font-semibold">Total hoy: USD {plan.total.toFixed(2)}</p>
                        {plan.months > 1 && (
                          <p className="text-xs font-semibold text-gray-400">Pago único por {plan.months} meses</p>
                        )}
                      </div>
                      {plan.badge && (
                        <span className="text-xs font-black uppercase tracking-[0.16em] bg-primary/15 text-primary px-3 py-1 rounded-full">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-sm font-semibold text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">shield</span>
                        Garantía de devolución 7 días
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">bolt</span>
                        Activación guiada con un especialista
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">check_small</span>
                        Alertas y panel en todos los dispositivos
                      </div>
                    </div>

                    <button
                      onClick={() => handleLead(`lp2_plan_${plan.name.toLowerCase()}`, plan.href)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black transition-all active:scale-95 ${
                        isHighlight ? 'bg-primary text-secondary hover:bg-primary-dark' : 'bg-secondary text-white hover:bg-secondary/90'
                      }`}
                    >
                      Elegir {plan.name}
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-primary/10 border border-primary/20 rounded-3xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm font-bold text-secondary">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                Podés cancelar cuando quieras; te avisamos 3 días antes de renovar.
              </div>
              <a
                href={demoLink}
                onClick={() => handleLead('lp2_planes_demo')}
                className="inline-flex items-center gap-2 text-primary font-black"
              >
                Ver demo antes de pagar
                <span className="material-symbols-outlined text-base">play_circle</span>
              </a>
            </div>
          </div>
        </section>

        <section id="extras" className="bg-white text-secondary py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center space-y-2">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">🎁 Todo esto ya está incluido en el sistema</p>
              <p className="text-lg text-gray-600 font-semibold">No pagás módulos aparte. No pagás extras ocultos.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extras.map((extra) => (
                <div key={extra.title} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">{extra.icon}</span>
                    <p className="text-sm font-black text-secondary">{extra.title}</p>
                  </div>
                  <p className="text-sm text-gray-700 font-semibold leading-relaxed">{extra.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary text-white rounded-3xl p-6 shadow-2xl shadow-secondary/30 grid lg:grid-cols-[1fr_0.9fr] gap-6 items-center">
              <div className="space-y-2">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Todo incluido</p>
                <p className="text-2xl font-black">Lo que recibís desde el primer día</p>
                <p className="text-white/80 text-sm font-semibold">Valor real: mucho más de lo que cuesta. Accedés hoy por una fracción.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {stackValue.map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    <span className="material-symbols-outlined text-primary">check_small</span>
                    <p className="text-sm text-white/80 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f7f5] text-secondary py-14">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-6 items-center">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-lg space-y-3">
              <p className="text-xl font-black">🛡️ Probalo sin riesgo</p>
              <p className="text-gray-700 font-semibold">
                Si no sentís más claridad, control y tranquilidad financiera, simplemente cancelás.
              </p>
              <p className="font-black text-secondary">👉 El riesgo no es entrar. 👉 El riesgo es seguir improvisando.</p>
              <button
                onClick={() => handleLead('lp2_garantia_cta', payLink)}
                className="mt-2 inline-flex items-center gap-2 bg-primary text-secondary px-5 py-3 rounded-xl font-black shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95"
              >
                Quiero probarlo sin riesgo
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-lg space-y-3">
              <p className="text-xl font-black">⏳ Cada mes sin control cuesta dinero</p>
              <ul className="space-y-2 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base">trending_down</span>Intereses innecesarios</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base">sentiment_dissatisfied</span>Malas decisiones</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base">flag</span>Metas postergadas</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base">mood_bad</span>Estrés acumulado</li>
              </ul>
              <p className="text-sm font-bold text-secondary">📉 Eso también se paga. Aunque no lo veas.</p>
            </div>
          </div>
        </section>

        <section id="cta-final" className="bg-[#0b1220] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div className="space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">CTA final</p>
              <h2 className="text-3xl font-black leading-tight">Tomá el control hoy</h2>
              <p className="text-lg text-white/75 font-semibold">
                Tu dinero ya está decidiendo por vos. Es momento de cambiar eso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleLead('lp2_cta_final', payLink)}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-3 rounded-xl font-black shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95"
                >
                  Quiero tomar el control de mis finanzas ahora
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              <button
                onClick={() => handleLead('lp2_cta_final_oferta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold text-white/90 hover:bg-white/10 transition-all active:scale-95"
              >
                Ver oferta completa
                <span className="material-symbols-outlined">local_offer</span>
              </button>
            </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/30 space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-primary mb-1">FAQ corto</p>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <p className="font-black text-white">{faq.q}</p>
                    <p className="text-sm text-white/80 font-semibold">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lp2Page;
