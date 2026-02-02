import React from 'react';
import { trackMetaEvent } from '../../metaPixel';

const demoLink = 'https://demo.controla.site/';
const videoSrc = 'https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

const heroBullets = [
  'Separas gastos personales y del negocio sin duplicar trabajo.',
  'Ves caja real, próximos pagos y margen en un solo panel.',
  'Alertas inteligentes antes de quedarte sin flujo.',
];

const personalBusinessCards = [
  {
    title: 'Personal',
    subtitle: 'Tu vida diaria sin ansiedad financiera.',
    items: ['Suscripciones invisibles bajo control', 'Metas familiares con ritmo real', 'Compras del mes sin sorpresas'],
    tone: 'bg-white',
    subtitleClass: 'text-[color:var(--muted)]',
    badgeClass: 'bg-black/5 text-[color:var(--ink)]',
    listClass: 'text-[color:var(--ink)]',
    badge: 'Modo personal',
  },
  {
    title: 'Negocio',
    subtitle: 'Decisiones con caja clara y previsión.',
    items: ['Ingresos por cliente y proyecto', 'Costos fijos vs variables en segundos', 'Proyección de impuestos y deudas'],
    tone: 'bg-[#0f172a] text-white',
    subtitleClass: 'text-white/70',
    badgeClass: 'bg-white/10 text-white',
    listClass: 'text-white/85',
    badge: 'Modo negocio',
  },
];

const painPoints = [
  'Mezclás cuentas y no sabés cuánto es realmente tuyo.',
  'Pagás proveedores sin una vista clara del flujo de caja.',
  'Te enterás tarde de los vencimientos e intereses.',
  'No tenés reportes simples para decidir qué recortar o invertir.',
];

const workflowSteps = [
  {
    title: 'Centralizás ingresos y gastos',
    desc: 'Cargás lo real y el sistema te muestra el saldo verdadero, no el del banco.',
  },
  {
    title: 'Separás personal vs negocio',
    desc: 'Dos vistas, misma data. Sin Excel ni doble carga.',
  },
  {
    title: 'Recibís alertas accionables',
    desc: 'Vencimientos, fugas y oportunidades antes de que duelan.',
  },
  {
    title: 'Tomás decisiones con claridad',
    desc: 'Sabés qué pagar, qué ajustar y cuánto podés reinvertir.',
  },
];

const featureGrid = [
  {
    title: 'Panel dual inteligente',
    desc: 'Vista personal + vista negocio con categorías automáticas y filtros rápidos.',
    icon: 'space_dashboard',
  },
  {
    title: 'Flujo de caja proyectado',
    desc: 'Simulá semana a semana y evitá quedarte sin caja.',
    icon: 'timeline',
  },
  {
    title: 'Alertas que sí importan',
    desc: 'Recordatorios de pagos, impuestos y suscripciones sin perder tiempo.',
    icon: 'notifications_active',
  },
  {
    title: 'Reportes listos para decidir',
    desc: 'Visualizá margen, gasto por rubro y oportunidades de ahorro.',
    icon: 'query_stats',
  },
  {
    title: 'Rutina semanal guiada',
    desc: 'Checklist en 10 minutos para cerrar la semana con números claros.',
    icon: 'task_alt',
  },
  {
    title: 'Inventario y compras',
    desc: 'Evitá duplicar compras y cuidá el capital de trabajo.',
    icon: 'inventory_2',
  },
];

const outcomes = [
  {
    title: 'Caja predecible',
    desc: 'Sabés cuánto entra, cuánto sale y cuándo. Sin sorpresas.',
  },
  {
    title: 'Separación real',
    desc: 'Tus finanzas personales no se mezclan con el negocio.',
  },
  {
    title: 'Decisiones rápidas',
    desc: 'Ves en minutos qué ajustar y qué potenciar.',
  },
  {
    title: 'Menos estrés',
    desc: 'Alertas y rutina semanal para dormir tranquilo.',
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

const faqs = [
  {
    q: '¿Puedo separar gastos personales y del negocio?',
    a: 'Sí. Tenés dos vistas con la misma data, sin doble carga y con filtros rápidos.',
  },
  {
    q: '¿Necesito saber de finanzas?',
    a: 'No. El sistema guía la rutina semanal y te muestra solo lo importante.',
  },
  {
    q: '¿Sirve si soy freelancer o microempresa?',
    a: 'Está pensado para emprendedores con poco tiempo y necesidad de claridad inmediata.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. Cancelás cuando quieras y tenés garantía de 7 días.',
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

  const themeVars = {
    '--ink': '#0f172a',
    '--muted': '#5b6478',
    '--brand': '#0ea5e9',
    '--brand-strong': '#0284c7',
    '--accent': '#f97316',
    '--sand': '#f4f1ea',
    '--surface': '#ffffff',
    '--surface-alt': '#fdf6ef',
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-[color:var(--sand)] text-[color:var(--ink)]" style={themeVars}>
      <header className="sticky top-0 z-40 bg-[color:var(--sand)]/90 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-[color:var(--brand)] text-white font-black flex items-center justify-center shadow-lg shadow-black/10">
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[color:var(--muted)]">Controla IA</p>
              <p className="text-lg font-extrabold leading-none">Panel Doble</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[color:var(--muted)]">
            <a href="#beneficios" className="hover:text-[color:var(--ink)] transition-colors">Beneficios</a>
            <a href="#flujo" className="hover:text-[color:var(--ink)] transition-colors">Cómo funciona</a>
            <a href="#demo" className="hover:text-[color:var(--ink)] transition-colors">Demo</a>
            <a href="#planes" className="hover:text-[color:var(--ink)] transition-colors">Planes</a>
            <a href="#faq" className="hover:text-[color:var(--ink)] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              onClick={() => handleLead('negocios_header_demo')}
              className="hidden sm:inline-flex text-sm font-bold text-[color:var(--muted)] hover:text-[color:var(--ink)]"
            >
              Ver demo
            </a>
            <button
              onClick={() => handleLead('negocios_header_cta', '#planes')}
              className="bg-[color:var(--accent)] text-[#1f1300] font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-black/10 hover:brightness-95 transition-all active:scale-95"
            >
              Quiero ordenar mis gastos
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(249,115,22,0.18),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,241,234,1))]" />
          <div className="absolute -left-16 top-20 w-64 h-64 bg-[color:var(--brand)]/10 blur-[120px]" />
          <div className="absolute right-0 -bottom-24 w-80 h-80 bg-[color:var(--accent)]/15 blur-[140px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/70 border border-black/10 px-3 py-1 rounded-full text-xs font-black uppercase tracking-[0.18em]">
                <span className="material-symbols-outlined text-sm text-[color:var(--brand)]">verified</span>
                Nuevo: control personal + negocio
              </div>

              <div className="space-y-3 reveal-up">
                <h1 className="text-4xl lg:text-5xl font-black leading-[1.05]">
                  Gastos personales y de negocio en un solo panel, sin caos ni planillas.
                </h1>
                <p className="text-xl font-extrabold text-[color:var(--brand-strong)]">
                  Separás cuentas, ves tu caja real y tomás decisiones en minutos.
                </p>
                <p className="text-lg text-[color:var(--muted)] max-w-2xl">
                  Controla IA te da una vista clara de lo que es tuyo, lo que es del negocio y lo que viene. Sin duplicar trabajo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 reveal-up reveal-delay-1">
                <button
                  onClick={() => handleLead('negocios_hero_cta', '#planes')}
                  className="inline-flex items-center justify-center gap-2 bg-[color:var(--accent)] text-[#1f1300] px-7 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-black/10 hover:brightness-95 transition-all active:scale-95"
                >
                  Quiero control real
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleLead('negocios_hero_demo', '#demo')}
                  className="inline-flex items-center justify-center gap-2 bg-white/80 border border-black/10 px-7 py-4 rounded-2xl font-bold text-[color:var(--ink)] hover:bg-white transition-all active:scale-95"
                >
                  Ver cómo funciona
                  <span className="material-symbols-outlined">play_circle</span>
                </button>
              </div>

              <div className="bg-white/80 border border-black/10 rounded-3xl p-5 shadow-sm reveal-up reveal-delay-2">
                <p className="text-sm font-black text-[color:var(--ink)]">Lo que cambia esta semana:</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[color:var(--muted)] font-semibold">
                  {heroBullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[color:var(--brand)] text-base">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 reveal-up reveal-delay-3">
              <div className="relative rounded-[26px] bg-white/85 border border-black/10 shadow-xl p-4">
                <div className="absolute -top-4 right-4 bg-[color:var(--brand)] text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
                  Panel en vivo
                </div>
                <div className="rounded-2xl overflow-hidden border border-black/5">
                  <img
                    src="/app-preview.gif"
                    alt="Vista del panel de Controla IA"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {outcomes.map((item) => (
                  <div key={item.title} className="bg-white/80 border border-black/10 rounded-2xl p-3 shadow-sm">
                    <p className="text-sm font-black text-[color:var(--ink)]">{item.title}</p>
                    <p className="text-xs font-semibold text-[color:var(--muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--brand-strong)]">Dos mundos, un control</p>
              <p className="text-3xl font-black">Personal y negocio dejan de pelearse.</p>
              <p className="text-[color:var(--muted)] font-semibold max-w-2xl mx-auto">
                Tenés claridad instantánea de lo que podés gastar, lo que debés cubrir y cuánto podés reinvertir.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {personalBusinessCards.map((card) => (
                <div
                  key={card.title}
                  className={`${card.tone} rounded-3xl p-6 border border-black/10 shadow-sm space-y-3`}
                >
                  <span className={`text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-flex ${card.badgeClass}`}>
                    {card.badge}
                  </span>
                  <p className="text-2xl font-black">{card.title}</p>
                  <p className={`text-sm font-semibold ${card.subtitleClass}`}>{card.subtitle}</p>
                  <ul className={`space-y-2 text-sm font-semibold ${card.listClass}`}>
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[color:var(--accent)] text-base">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[color:var(--surface)]">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
            <div className="space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--brand-strong)]">¿Te suena?</p>
              <h2 className="text-3xl font-black leading-tight">Cuando todo se mezcla, todo se vuelve ruido.</h2>
              <p className="text-[color:var(--muted)] font-semibold">
                Si no separás gastos, terminás decidiendo tarde y pagando de más. El problema no es trabajar mucho. Es no ver el tablero.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {painPoints.map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-[color:var(--surface-alt)] border border-black/5 rounded-2xl px-3 py-3 text-sm text-[color:var(--muted)] font-semibold">
                    <span className="material-symbols-outlined text-[color:var(--accent)] text-base">warning</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] text-white rounded-[24px] p-6 shadow-xl shadow-black/25 border border-black/20 space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white/70">Lo que cambia en 30 días</p>
              <ul className="space-y-2 text-sm text-white/80 font-semibold">
                {outcomes.map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[color:var(--accent)] text-base">check_circle</span>
                    <span><span className="font-bold text-white">{item.title}:</span> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleLead('negocios_pain_cta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-[color:var(--accent)] text-[#1f1300] px-5 py-3 rounded-xl font-black shadow-lg shadow-black/20 hover:brightness-95 transition-all active:scale-95"
              >
                Quiero ese control
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section id="flujo" className="py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--brand-strong)]">Tu flujo en minutos</p>
              <p className="text-3xl font-black">Una rutina simple para controlar todo.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="bg-white border border-black/10 rounded-2xl p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--brand)] text-white font-black flex items-center justify-center mb-3">
                    {index + 1}
                  </div>
                  <p className="text-sm font-black">{step.title}</p>
                  <p className="text-sm text-[color:var(--muted)] font-semibold">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-[color:var(--surface)]">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--brand-strong)]">Herramientas clave</p>
              <p className="text-3xl font-black">Todo lo que necesitás para ordenar tu dinero.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featureGrid.map((item) => (
                <div key={item.title} className="p-5 rounded-2xl border border-black/10 bg-white hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[color:var(--brand-strong)]">{item.icon}</span>
                    <p className="text-sm font-black">{item.title}</p>
                  </div>
                  <p className="text-sm text-[color:var(--muted)] font-semibold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="bg-[#0f172a] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Mirá el panel real</p>
              <p className="text-3xl font-black">90 segundos para entenderlo todo.</p>
              <p className="text-white/75 font-semibold">
                Sin promesas vacías. Esto es Controla IA mostrando caja, pagos y categorías en vivo.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[color:var(--brand)]/10 blur-3xl rounded-3xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] bg-black">
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
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleLead('negocios_video_cta', '#planes')}
                className="bg-[color:var(--accent)] hover:brightness-95 text-[#1f1300] px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-black/20 active:scale-95"
              >
                Ver oferta después del video
              </button>
              <p className="text-sm font-semibold text-white/70">No necesitás tarjeta para mirar. Solo 90 segundos.</p>
            </div>
          </div>
        </section>

        <section id="planes" className="bg-[color:var(--sand)] text-[color:var(--ink)] py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--brand-strong)]">Activa tu claridad</p>
              <p className="text-3xl lg:text-4xl font-black">Elegí cómo querés empezar</p>
              <p className="text-[color:var(--muted)] font-semibold">En minutos encontrás dinero perdido y empezás a planificar sin estrés.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const isHighlight = plan.highlight;
                return (
                  <div
                    key={plan.name}
                    className={`p-8 rounded-3xl border transition-all duration-300 ${
                      isHighlight
                        ? 'bg-white text-[color:var(--ink)] border-black/5 shadow-2xl shadow-black/10'
                        : 'bg-white/70 border-black/10 shadow-lg shadow-black/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-black">{plan.name}</p>
                        <p className="text-3xl font-black mt-1">USD {plan.price.toFixed(2)}</p>
                        <p className="text-sm font-semibold text-[color:var(--muted)]">Total hoy: USD {plan.total.toFixed(2)}</p>
                        {plan.months > 1 && (
                          <p className="text-xs font-semibold text-[color:var(--muted)]">Pago único por {plan.months} meses</p>
                        )}
                      </div>
                      {plan.badge && (
                        <span className="text-xs font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full bg-[color:var(--surface-alt)] text-[color:var(--brand-strong)]">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-sm font-semibold mb-6 text-[color:var(--muted)]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[color:var(--brand)] text-base">verified</span>
                        Garantía 7 días
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[color:var(--brand)] text-base">bolt</span>
                        Activación guiada en minutos
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[color:var(--brand)] text-base">check_small</span>
                        Alertas y panel en todos los dispositivos
                      </div>
                    </div>

                    <button
                      onClick={() => handleLead(`negocios_plan_${plan.name.toLowerCase()}`, plan.href)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black transition-all active:scale-95 ${
                        isHighlight
                          ? 'bg-[color:var(--accent)] text-[#1f1300] hover:brightness-95'
                          : 'bg-white border border-black/10 text-[color:var(--ink)] hover:bg-white/90'
                      }`}
                    >
                      Elegir {plan.name}
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/70 border border-black/5 rounded-3xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm font-bold text-[color:var(--muted)]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[color:var(--brand)]">info</span>
                Cancelás cuando quieras. Avisamos antes de renovar.
              </div>
              <a
                href={demoLink}
                onClick={() => handleLead('negocios_planes_demo')}
                className="inline-flex items-center gap-2 text-[color:var(--brand-strong)] font-black"
              >
                Ver demo antes de pagar
                <span className="material-symbols-outlined text-base">play_circle</span>
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#0f172a] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Preguntas frecuentes</p>
              <p className="text-3xl font-black">Lo que siempre preguntan antes de entrar</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3">
                  <span className="material-symbols-outlined text-[color:var(--accent)] mt-0.5">add</span>
                  <div>
                    <p className="font-black text-white">{faq.q}</p>
                    <p className="text-sm text-white/80 font-semibold">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleLead('negocios_faq_cta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-[color:var(--accent)] text-[#1f1300] px-6 py-3 rounded-xl font-black shadow-lg shadow-black/20 hover:brightness-95 transition-all active:scale-95"
              >
                Ver oferta completa
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[color:var(--surface)] border border-black/5 rounded-[28px] p-8 md:p-10 shadow-xl">
              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="space-y-3">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--brand-strong)]">Último paso</p>
                  <h3 className="text-3xl font-black">Dejá de mezclar cuentas. Ganá claridad hoy.</h3>
                  <p className="text-[color:var(--muted)] font-semibold">
                    Activá el panel doble y tomá decisiones con datos reales desde esta semana.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleLead('negocios_final_cta', '#planes')}
                    className="inline-flex items-center justify-center gap-2 bg-[color:var(--accent)] text-[#1f1300] px-6 py-4 rounded-xl font-black shadow-lg shadow-black/20 hover:brightness-95 transition-all active:scale-95"
                  >
                    Quiero activar mi panel
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <a
                    href={demoLink}
                    onClick={() => handleLead('negocios_final_demo')}
                    className="inline-flex items-center justify-center gap-2 bg-black/5 text-[color:var(--ink)] px-6 py-4 rounded-xl font-bold hover:bg-black/10 transition-all"
                  >
                    Ver demo primero
                    <span className="material-symbols-outlined">play_circle</span>
                  </a>
                  <p className="text-xs font-semibold text-[color:var(--muted)]">Garantía 7 días. Cancelás cuando quieras.</p>
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
