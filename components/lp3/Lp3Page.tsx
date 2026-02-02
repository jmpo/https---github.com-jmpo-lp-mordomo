import React from 'react';
import { trackMetaEvent } from '../../metaPixel';

const demoLink = 'https://demo.controla.site/';
const videoSrc = 'https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

const heroBullets = [
  'Arrancás en 15 minutos, sin planillas.',
  'Alertas inteligentes: vencimientos, fugas y oportunidades.',
  'Rutina semanal guiada: qué pagar, qué ajustar, qué ahorrar.',
];

const painPoints = [
  'Llegás a fin de mes y no queda nada: no sabés en qué se fue.',
  'Tus metas avanzan lento porque no ves el progreso real.',
  'Decidís a último momento sin números claros de la semana.',
  'Comprás dos veces lo mismo porque no tenés inventario ni alertas.',
];

const testimonials = [
  {
    name: 'Valentina, 34',
    badge: 'Cero recargos',
    quote: 'Antes pagaba intereses por olvidar vencimientos. Ahora recibo alertas y sé qué pagar cada semana.',
  },
  {
    name: 'Rodrigo, 41',
    badge: 'Metas protegidas',
    quote: 'Veo el avance de mi ahorro en tiempo real. El sistema avisa si me desvío y ajusto sin estrés.',
  },
  {
    name: 'Camila y Luis',
    badge: 'Finanzas en pareja',
    quote: 'Compartimos el panel y las alertas. Dejó de ser pelea mensual: ahora tenemos números claros.',
  },
];

const radarPoints = [
  'Saldo real + próximos pagos en un solo panel.',
  'Alertas de vencimientos y fugas antes de que duelan.',
  'Metas con avance visible para no postergarlas.',
];

const includedItems = [
  'Panel centralizado con saldo real y próximos pagos',
  'Radar de gastos invisibles con IA',
  'Metas calculadas con fechas y montos reales',
  'Alertas automáticas por vencimientos y desvíos',
  'Mercado + inventario para no duplicar compras',
  'Gestión de vehículos con mantenimientos y recordatorios',
  'Soporte humano prioritario',
];

const guaranteeBullets = [
  'Activalo hoy y probalo durante 7 días.',
  'Si no sentís más claridad y control, devolvemos tu dinero.',
  'Sin preguntas incómodas. Sin permanencia.',
];

const faqs = [
  { q: '¿Necesito saber de finanzas?', a: 'No. Está pensado para personas normales: cargás lo real y el sistema te guía.' },
  { q: '¿Cuánto tiempo lleva usarlo?', a: '15 minutos para configurarlo, luego revisás pocos minutos por semana.' },
  { q: '¿Puedo cancelar?', a: 'Sí. Cancelás cuando quieras y tenés 7 días de garantía.' },
  { q: '¿Funciona si gano poco?', a: 'Ahí más impacto tiene: elimina fugas e intereses que comen tu dinero.' },
  { q: '¿Lo puedo usar con mi pareja?', a: 'Sí. Podés compartir el panel y las alertas en todos los dispositivos.' },
];

const modules = [
  { icon: 'photo_camera', title: 'Sacás una foto 📸 → te devolvemos tiempo', desc: 'La IA lee tus gastos; no perdés ni un segundo tecleando. Recuperás tus fines de semana.' },
  { icon: 'shopping_cart', title: 'Mirá tu alacena en el cel 🛒 → cuidamos tu bolsillo', desc: 'Nunca más tirás comida ni comprás doble. Evitás gastar en lo que ya tenías.' },
  { icon: 'flag', title: 'Definís el sueño 🎯 → te damos el mapa', desc: '“Guardá USD 2 hoy” y llegás a la meta sin matemáticas complicadas. El sistema te guía.' },
];

const decisionPaths = [
  {
    icon: 'close',
    color: 'text-[#c026d3]',
    title: 'Seguir improvisando',
    desc: 'Más intereses, decisiones a ciegas y metas postergadas.',
  },
  {
    icon: 'check_circle',
    color: 'text-[#22c55e]',
    title: 'Activar el centro de control',
    desc: 'Claridad inmediata, alertas automáticas y progreso real en tus metas.',
  },
];

const marceloImage = '/marcelo.jpg';

const bonuses = [
  { title: '🚀 Rutina semanal lista', desc: 'Checklist de 10 minutos para que no te pierdas nada y cierres cada semana con claridad.' },
  { title: '🔔 Alertas precargadas', desc: 'Vencimientos, suscripciones y duplicados ya listos: solo activás y te avisa.' },
  { title: '🎯 Guía de metas protegidas', desc: 'Define monto, fecha y ritmo para que tus objetivos avancen sin frenarse.' },
  { title: '🛒 Script de mercado inteligente', desc: 'Lista + inventario para dejar de comprar dos veces lo mismo y ahorrar sin pensar.' },
];

const transformation = [
  { title: 'El fin del estrés', desc: 'Apoyás la cabeza en la almohada sabiendo que todo está cubierto. Adiós al insomnio financiero.' },
  { title: 'Compras sin culpa', desc: 'Pedí esa pizza o esos zapatos: el sistema te dice si podés hacerlo sin tocar el alquiler.' },
  { title: 'Dinero “aparecido”', desc: 'Entre $50 y $200 en el primer mes al eliminar compras dobles y suscripciones olvidadas.' },
  { title: 'Meta con fecha', desc: 'Moto, viaje o pagar la tarjeta: deja de ser un sueño y se convierte en una fecha real.' },
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

const Lp3Page: React.FC = () => {
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
    <div className="bg-[#f5f4fb] text-[#0f0a1a] min-h-screen">
      <header className="sticky top-0 z-40 bg-[#f5f4fb]/90 backdrop-blur-xl border-b border-[#e5def7]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#d946ef] to-[#8b5cf6] text-white font-black flex items-center justify-center shadow-lg shadow-[#d946ef]/30">
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#7c7394]">Controla IA</p>
              <p className="text-lg font-extrabold leading-none">Centro de Control</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#5b5571]">
            <a href="#planes" className="hover:text-[#0f0a1a] transition-colors">Oferta</a>
            <a href="#demo" className="hover:text-[#0f0a1a] transition-colors">Ver sistema</a>
            <a href="#garantia" className="hover:text-[#0f0a1a] transition-colors">Garantía</a>
            <a href="#modulos" className="hover:text-[#0f0a1a] transition-colors">Incluye</a>
            <a href="#testimonios" className="hover:text-[#0f0a1a] transition-colors">Testimonios</a>
            <a href="#autor" className="hover:text-[#0f0a1a] transition-colors">Creador</a>
            <a href="#bonos" className="hover:text-[#0f0a1a] transition-colors">Bonos</a>
            <a href="#faq" className="hover:text-[#0f0a1a] transition-colors">FAQ</a>
            <a href="#decision" className="hover:text-[#0f0a1a] transition-colors">Decisión</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              onClick={() => handleLead('lp3_header_demo')}
              className="hidden sm:inline-flex text-sm font-bold text-[#6b21a8] hover:text-[#4c1d95]"
            >
              Ver demo
            </a>
            <button
              onClick={() => handleLead('lp3_header_cta', '#planes')}
              className="bg-[#22c55e] text-[#0f172a] font-black text-sm px-4 py-2 rounded-xl shadow-lg shadow-[#22c55e]/40 hover:bg-[#16a34a] transition-all active:scale-95"
            >
              Ver oferta completa
            </button>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f0ff] to-[#efeaff]" />
          <div className="absolute -left-10 top-6 w-64 h-64 bg-[#d946ef]/15 blur-[120px]" />
          <div className="absolute right-0 -bottom-20 w-80 h-80 bg-[#22c55e]/10 blur-[140px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20 space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#c026d3]">¿CANSADO DE SENTIR ESE NUDO EN EL ESTÓMAGO CADA FIN DE MES?</p>
                <h1 className="text-4xl lg:text-5xl font-black leading-[1.05] text-[#0f0a1a]">
                  Cómo convertir tu sueldo en una fuente de paz mental (y terminar el mes con dinero extra) sin tener que convertirte en un tacaño ni usar hojas de cálculo.
                </h1>
                <p className="text-xl font-extrabold text-[#8b5cf6]">Descubre el sistema que trabaja mientras duermes para tapar las fugas de dinero que hoy te mantienen estancado.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleLead('lp3_hero_offer', '#planes')}
                  className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-[#0f172a] px-7 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-[#22c55e]/30 hover:bg-[#16a34a] transition-all active:scale-95"
                >
                  👉 QUIERO SENTIR ESTE ALIVIO AHORA
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleLead('lp3_hero_demo', '#demo')}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8ddff] px-7 py-4 rounded-2xl font-bold text-[#4b445f] hover:border-[#c4b5fd] transition-all active:scale-95"
                >
                  Ver cómo funciona
                  <span className="material-symbols-outlined">play_circle</span>
                </button>
              </div>
            <p className="text-xs font-semibold text-[#6b6287]">Empieza gratis. Resultados desde el primer día.</p>

            <div className="space-y-2 bg-white border border-[#e8ddff] rounded-3xl p-5 shadow-sm">
              <p className="text-sm font-black text-[#0f0a1a]">Lo que cambia hoy mismo:</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#4b445f] font-semibold">
                  {heroBullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#22c55e] text-base">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-[#0f0a1a] py-12">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1fr] gap-6 items-start">
            <div className="space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5cf6]">Seamos honestos</p>
              <h2 className="text-3xl font-black leading-tight">¿Te suena familiar esta escena?</h2>
              <p className="text-[#4b445f] font-semibold">
                Día 25. Abrís la app del banco. Esa taquicardia antes de ver el saldo. Pensás: “¿En qué diablos se me fue toda la plata?”. Trabajás, cumplís, pero el dinero se escapa.
              </p>
              <p className="text-[#4b445f] font-semibold">No necesitás ganar más para arreglarlo. Necesitás dejar de perder lo que ya tenés.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {painPoints.map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-[#f8f7ff] border border-[#e8ddff] rounded-2xl px-3 py-3 text-sm text-[#4b445f] font-semibold">
                    <span className="material-symbols-outlined text-[#c026d3] text-base">error</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0f0a1a] text-white rounded-[24px] p-6 shadow-xl shadow-black/35 border border-[#1f1535] space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#a78bfa]">Lo que cambia en 30 días</p>
              <ul className="space-y-2 text-sm text-white/80 font-semibold">
                {transformation.map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#22c55e] text-base">check_circle</span>
                    <span><span className="font-bold text-white">{item.title}:</span> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleLead('lp3_pain_cta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-[#0f172a] px-5 py-3 rounded-xl font-black shadow-lg shadow-[#22c55e]/40 hover:bg-[#16a34a] transition-all active:scale-95"
              >
                👉 Quiero sentir este alivio ahora
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white text-[#0f0a1a] py-12">
          <div className="max-w-6xl mx-auto px-4 space-y-4">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5cf6]">Imaginá tu vida en 30 días</p>
            <h2 className="text-3xl font-black">No te hablo de una app. Te hablo de lo que pasa cuando activás el sistema.</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {transformation.map((item) => (
                <div key={item.title} className="bg-[#f8f7ff] border border-[#e8ddff] rounded-2xl p-4 shadow-sm">
                  <p className="font-black text-[#0f0a1a]">✅ {item.title}</p>
                  <p className="text-sm text-[#4b445f] font-semibold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="bg-[#0f0a1a] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a78bfa]">Mirá cómo funciona</p>
              <p className="text-3xl font-black">90 segundos para ver el panel real</p>
              <p className="text-white/75 font-semibold">Sin promesas vacías: es el radar de Controla IA mostrando saldo real, vencimientos y metas en vivo.</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-[#d946ef]/10 blur-3xl rounded-3xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] bg-[#0f0d0c]">
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src="https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
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
                onClick={() => handleLead('lp3_video_cta', '#planes')}
                className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0f172a] px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-[#22c55e]/30 active:scale-95"
              >
                Ver oferta después del video
              </button>
              <p className="text-sm font-semibold text-white/70">No necesitás tarjeta para mirar. Solo 90 segundos.</p>
            </div>
          </div>
        </section>

        <section id="decision" className="bg-[#f5f4fb] text-[#0f0a1a] py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-black">¿Vas a dejar que se te escape otro mes?</h3>
              <p className="text-[#4b445f] font-semibold">Tenés dos opciones hoy. Elegí la que te devuelve paz mental.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-[#f1d7ff] rounded-3xl p-6 shadow-sm space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#c026d3] bg-[#fdf2ff] px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-sm">close</span>
                  Opción A
                </span>
                <p className="text-xl font-black text-[#0f0a1a]">Seguir igual</p>
                <p className="text-sm text-[#4b445f] font-semibold">
                  Llegar a fin de mes con taquicardia, preguntándote dónde está tu dinero y sintiendo que trabajás solo para pagar cuentas.
                </p>
                <p className="text-sm font-semibold text-[#c026d3]">Costo: tu paz mental + cientos de dólares perdidos en fugas.</p>
              </div>

              <div className="bg-gradient-to-br from-[#0f0a1a] via-[#1a0f2b] to-[#140b24] text-white rounded-3xl p-6 shadow-xl shadow-black/35 border border-[#26143d] space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#22c55e] bg-white/10 px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Opción B
                </span>
                <p className="text-xl font-black">Tomar el control hoy</p>
                <p className="text-sm text-white/85 font-semibold">
                  Activar el sistema, encontrar el dinero perdido en los primeros 5 minutos y empezar a construir la vida tranquila que te merecés.
                </p>
                <p className="text-sm text-white/85 font-semibold">Todo con alertas y un mapa claro, sin planillas.</p>
              </div>
            </div>

            <div className="bg-white border border-[#e8ddff] rounded-2xl p-4 text-center shadow-sm">
              <p className="text-sm font-bold text-[#4b445f]">El precio de tu tranquilidad es ridículo: menos que un café y un sándwich. Desde USD 5 / mes.</p>
              <p className="text-xs font-semibold text-[#6b6287]">Garantía total: si no sentís paz, no pagás.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => handleLead('lp3_decision_cta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-[#0f172a] px-7 py-3 rounded-xl font-black shadow-lg shadow-[#22c55e]/40 hover:bg-[#16a34a] transition-all active:scale-95"
              >
                👉 Sí, quiero tomar el control de mi vida
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <a
                href={demoLink}
                onClick={() => handleLead('lp3_decision_demo')}
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8ddff] px-7 py-3 rounded-xl font-bold text-[#4b445f] hover:border-[#c4b5fd] transition-all active:scale-95"
              >
                Ver demo primero
                <span className="material-symbols-outlined">play_circle</span>
              </a>
            </div>
          </div>
        </section>

        <section id="planes" className="bg-[#0f0a1a] text-white py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a78bfa]">Activa tu tranquilidad</p>
              <p className="text-3xl lg:text-4xl font-black">Elegí cómo querés empezar</p>
              <p className="text-white/75 font-semibold">En 5 minutos encontrás dinero perdido y empezás a dormir tranquilo. Cancelás cuando quieras.</p>
              <p className="text-white font-black">Desde USD 5 / mes. Menos que un café y un sándwich.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const isHighlight = plan.highlight;
                return (
                  <div
                    key={plan.name}
                    className={`p-8 rounded-3xl border transition-all duration-300 ${
                      isHighlight
                        ? 'bg-white text-[#0f0a1a] border-white shadow-2xl shadow-[#d946ef]/25 ring-2 ring-[#d946ef]/15'
                        : 'bg-white/5 border-white/10 shadow-lg shadow-black/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`text-sm font-black ${isHighlight ? 'text-[#0f0a1a]' : 'text-white'}`}>{plan.name}</p>
                        <p className={`text-3xl font-black mt-1 ${isHighlight ? 'text-[#0f0a1a]' : 'text-white'}`}>USD {plan.price.toFixed(2)}</p>
                        <p className={`text-sm font-semibold ${isHighlight ? 'text-[#4b445f]' : 'text-white/70'}`}>Total hoy: USD {plan.total.toFixed(2)}</p>
                        {plan.months > 1 && <p className={`text-xs font-semibold ${isHighlight ? 'text-[#6b6287]' : 'text-white/60'}`}>Pago único por {plan.months} meses</p>}
                      </div>
                      {plan.badge && (
                        <span className={`text-xs font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full ${isHighlight ? 'bg-[#f3e8ff] text-[#8b5cf6]' : 'bg-white/10 text-white'}`}>
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-sm font-semibold mb-6">
                      <div className={`flex items-center gap-2 ${isHighlight ? 'text-[#0f0a1a]' : 'text-white/80'}`}>
                        <span className="material-symbols-outlined text-[#22c55e] text-base">verified</span>
                        Garantía 7 días
                      </div>
                      <div className={`flex items-center gap-2 ${isHighlight ? 'text-[#0f0a1a]' : 'text-white/80'}`}>
                        <span className="material-symbols-outlined text-[#22c55e] text-base">bolt</span>
                        Activación guiada en minutos
                      </div>
                      <div className={`flex items-center gap-2 ${isHighlight ? 'text-[#0f0a1a]' : 'text-white/80'}`}>
                        <span className="material-symbols-outlined text-[#22c55e] text-base">check_small</span>
                        Alertas y panel en todos los dispositivos
                      </div>
                    </div>

                    <button
                      onClick={() => handleLead(`lp3_plan_${plan.name.toLowerCase()}`, plan.href)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black transition-all active:scale-95 ${
                        isHighlight ? 'bg-[#22c55e] text-[#0f172a] hover:bg-[#16a34a]' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Elegir {plan.name}
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm font-bold text-white/80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#22c55e]">info</span>
                Cancelás cuando quieras. Avisamos antes de renovar.
              </div>
              <a
                href={demoLink}
                onClick={() => handleLead('lp3_planes_demo')}
                className="inline-flex items-center gap-2 text-[#a78bfa] font-black"
              >
                Ver demo antes de pagar
                <span className="material-symbols-outlined text-base">play_circle</span>
              </a>
            </div>
          </div>
        </section>

        <section id="garantia" className="bg-white text-[#0f0a1a] py-12">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-gradient-to-br from-[#0f0a1a] via-[#1a0f2b] to-[#140b24] text-white rounded-[28px] p-7 shadow-2xl shadow-black/35 border border-[#26143d]">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#a855f7]">verified</span>
                <p className="font-black">Garantía blindada 7 días</p>
              </div>
              <p className="text-sm text-white/80 font-semibold">
                Probá todo el sistema. Si no sentís más claridad y control, te devolvemos el dinero. Sin preguntas.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80 font-semibold">
                {guaranteeBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#a855f7] text-base">auto_awesome</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f8f7ff] border border-[#e8ddff] rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8b5cf6] mb-2">Todo incluido</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#4b445f] font-semibold">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-white border border-[#e8ddff] rounded-2xl px-3 py-2">
                    <span className="material-symbols-outlined text-[#22c55e] text-base">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="modulos" className="bg-white text-[#0f0a1a] py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5cf6]">Tu nuevo vehículo</p>
              <p className="text-3xl font-black">Tu único trabajo es vivir. Nosotros nos encargamos de los números.</p>
              <p className="text-[#4b445f] font-semibold">Olvidate de “administrar”. Este sistema hace el trabajo aburrido y te devuelve paz mental.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((item) => (
                <div key={item.title} className="p-5 rounded-2xl border border-[#e8ddff] bg-[#f8f7ff] hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#8b5cf6]">{item.icon}</span>
                    <p className="text-sm font-black text-[#0f0a1a]">{item.title}</p>
                  </div>
                  <p className="text-sm text-[#4b445f] font-semibold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="bg-[#f5f4fb] text-[#0f0a1a] py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5cf6]">Personas reales</p>
              <p className="text-3xl font-black">Lo que pasa cuando usás Controla IA</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white border border-[#e8ddff] rounded-2xl p-4 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-[#0f0a1a]">{t.name}</p>
                    <span className="text-xs font-black uppercase tracking-[0.14em] bg-[#f3e8ff] text-[#8b5cf6] px-3 py-1 rounded-full">{t.badge}</span>
                  </div>
                  <p className="text-sm text-[#4b445f] font-semibold leading-relaxed">“{t.quote}”</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleLead('lp3_testimonials_cta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-[#0f172a] px-6 py-3 rounded-xl font-black shadow-lg shadow-[#22c55e]/40 hover:bg-[#16a34a] transition-all active:scale-95"
              >
                Quiero el mismo control
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section id="bonos" className="bg-white text-[#0f0a1a] py-14">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="space-y-4 text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5cf6]">Bonos incluidos</p>
              <h3 className="text-3xl font-black leading-tight">Te llevás el sistema y además todo esto</h3>
              <p className="text-[#4b445f] font-semibold max-w-3xl mx-auto">
                Sin pagar extra: bonos que te ahorran tiempo, evitan olvidos y hacen que el control semanal sea casi automático.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {bonuses.map((bonus) => (
                <div key={bonus.title} className="bg-[#f8f7ff] border border-[#e8ddff] rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all">
                  <p className="text-sm font-black text-[#0f0a1a]">{bonus.title}</p>
                  <p className="text-sm text-[#4b445f] font-semibold leading-relaxed">{bonus.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#0f0a1a] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a78bfa]">Preguntas frecuentes</p>
              <p className="text-3xl font-black">Lo que siempre preguntan antes de entrar</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3">
                  <span className="material-symbols-outlined text-[#a855f7] mt-0.5">add</span>
                  <div>
                    <p className="font-black text-white">{faq.q}</p>
                    <p className="text-sm text-white/80 font-semibold">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleLead('lp3_faq_cta', '#planes')}
                className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-[#0f172a] px-6 py-3 rounded-xl font-black shadow-lg shadow-[#22c55e]/40 hover:bg-[#16a34a] transition-all active:scale-95"
              >
                Ver oferta completa
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section id="autor" className="bg-white text-[#0f0a1a] py-16">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div className="rounded-3xl border border-[#f3e8ff] p-1 shadow-lg bg-gradient-to-b from-[#d946ef]/20 via-white to-white">
              <div className="h-full rounded-[22px] bg-white overflow-hidden shadow-md">
                <img src={marceloImage} alt="Marcelo, fundador financiero de Controla IA" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b5cf6]">Sobre el creador</p>
              <h3 className="text-3xl font-black leading-tight">Marcelo, especialista en control financiero</h3>
              <p className="text-[#4b445f] font-semibold">
                Marcelo armó Controla IA para personas ocupadas que quieren dejar de pagar intereses, ordenar sus vencimientos y avanzar en metas reales sin depender de memoria ni planillas.
              </p>
              <p className="text-[#4b445f] font-semibold">
                Su enfoque es simple: centralizar, alertar y guiar decisiones semanales. El sistema te muestra números claros y te avisa antes de que algo se desborde.
              </p>
              <div className="bg-[#f8f7ff] border border-[#e8ddff] rounded-2xl p-4 text-sm text-[#4b445f] font-semibold space-y-1">
                <p className="font-black text-[#0f0a1a]">Qué busca que logres:</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#22c55e] text-base">check</span>Bajar ansiedad financiera con alertas a tiempo.</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#22c55e] text-base">check</span>Evitar recargos y fugas invisibles.</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#22c55e] text-base">check</span>Proteger metas con avance visible cada semana.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Lp3Page;
