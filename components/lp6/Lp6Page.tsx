
import React, { useEffect, useRef } from 'react';
import Header from '../Header';
import VideoSection from '../VideoSection';
import PricingSection from '../PricingSection';
import Footer from '../Footer';
import { trackMetaEvent } from '../../metaPixel';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4';

const gOrange: React.CSSProperties = {
  background: 'linear-gradient(90deg, #f48c25 0%, #fce8d4 50%, #f48c25 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

const Hero6: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white"
      style={{ background: '#000', paddingTop: 'clamp(3.5rem, 11svh, 6rem)', paddingBottom: 'clamp(3.5rem, 11svh, 6rem)' }}
    >
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'rgba(0,0,0,0.58)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'radial-gradient(ellipse 85% 65% at 50% 50%, rgba(11,18,32,0.60) 0%, transparent 100%)' }} />

      {/* Desktop: 2 columnas | Mobile: 1 columna */}
      <div className="relative w-full max-w-7xl mx-auto px-4" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Columna izquierda — texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left" style={{ gap: '1.25rem' }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm text-primary">savings</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">
                Para asalariados que sienten que el dinero les quema en la mano
              </span>
            </div>

            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.13, margin: 0 }}>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.82)', lineHeight: 1.13 }}>El sistema simple para</span>
              <span style={{ ...gOrange, display: 'block', lineHeight: 1.13 }}>dejar de vivir al día</span>
              <span style={{ display: 'block', color: '#ffffff', lineHeight: 1.13 }}>y ahorrar desde este mes.</span>
            </h1>

            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#c8c8c8', lineHeight: 1.6, fontWeight: 500, margin: 0, maxWidth: '36rem' }}>
              <strong style={{ color: '#fff' }}>Aunque hoy no te alcance el dinero.</strong> Sin conocimientos financieros. Sin disciplina extrema. En menos de 5 minutos al día.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#oferta" onClick={() => trackMetaEvent('Lead', { content_name: 'lp6_hero_cta' })}
                className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 sm:px-7 py-4 rounded-2xl font-black text-base sm:text-lg hover:bg-primary-dark active:scale-95 cta-shine"
                style={{ transition: 'all 300ms', boxShadow: '0 6px 32px 4px rgba(244,140,37,0.35)' }}>
                <span>👉</span><span>QUIERO DEJAR DE VIVIR AL DÍA</span>
              </a>
              <a href="#video" onClick={() => trackMetaEvent('Lead', { content_name: 'lp6_hero_video' })}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-5 py-4 rounded-2xl text-sm font-semibold text-white/90 hover:bg-white/15 active:scale-95"
                style={{ transition: 'all 300ms' }}>
                <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
                <span>Ver cómo funciona en 60s</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
              <span className="text-xs text-white/50 font-medium">🔒 Pago 100% seguro</span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="text-xs text-white/50 font-medium">✅ Garantía 7 días</span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="text-xs text-white/50 font-medium">🚫 Cancela cuando quieras</span>
            </div>
          </div>

          {/* Columna derecha — mockup (solo visible en desktop, en mobile va abajo) */}
          <div className="flex items-center justify-center">
            <img
              src="/lp8/sistema finanzas/version dar/dark-hero.png"
              alt="Controla IA - Plataforma"
              className="w-full h-auto"
              style={{ maxWidth: '580px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── 2. DOLOR FUERTE ──────────────────────────────────────────────────────────

const ProblemSection6: React.FC = () => (
  <section id="problema" className="py-20 bg-[#0f172a] text-white">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <span className="material-symbols-outlined text-sm text-rose-300">report</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">¿Te suena familiar?</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Si el dinero desaparece antes de que puedas usarlo...{' '}
          <span style={gOrange}>esto es para vos.</span>
        </h2>
        <p className="text-white/70 text-base max-w-3xl mx-auto font-medium leading-relaxed">
          No sos el único. Millones en Latinoamérica viven exactamente lo mismo.
          El problema no es cuánto ganás —{' '}
          <span style={gOrange} className="font-semibold">es que nunca tuviste un sistema para verlo.</span>
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-black/30">
        <div className="grid gap-4">
          {[
            { emoji: '💸', title: 'Cobrás… y en pocos días ya no sabés en qué se fue', desc: 'El dinero entra y desaparece antes de que puedas hacer algo con él. No importa cuánto sea.' },
            { emoji: '🤷', title: 'Te prometés ahorrar… pero nunca pasa', desc: 'Mes a mes, el mismo cuento. Siempre aparece algo. Y el ahorro queda "para el próximo mes".' },
            { emoji: '🔄', title: 'Siempre sentís que estás empezando de cero', desc: 'No importa cuánto trabajes. Al final del mes, la situación es la misma. Eso agota.' },
            { emoji: '😓', title: 'Trabajás duro, pero avanzar parece imposible', desc: 'Los años pasan. Los precios suben. Y seguís en el mismo lugar. Eso no es falta de esfuerzo — es falta de sistema.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl bg-white/5 border border-rose-500/20 px-4 py-4">
              <span className="text-2xl mt-0.5 shrink-0">{item.emoji}</span>
              <div className="space-y-1">
                <p className="text-lg font-bold text-white">{item.title}</p>
                <p className="text-white/75 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── 3. AGITACIÓN — GOLPE EMOCIONAL ──────────────────────────────────────────

const PainSection6: React.FC = () => (
  <section className="py-20 bg-[#0b1220] text-white">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Y lo peor no es el dinero.{' '}
          <span style={gOrange}>Es lo que sentís por dentro.</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto font-medium">
          El problema económico tiene solución. Lo que más duele es el desgaste emocional. Y nadie habla de eso.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { emoji: '😤', label: 'Frustración constante', desc: 'Intentás. Fallás. Te prometés que el próximo mes va a ser diferente.\nPero nada cambia.\nY eso se acumula.' },
          { emoji: '😰', label: 'Ansiedad cada vez que cobrás', desc: 'En vez de alegría, cobrar te genera miedo.\nPorque ya sabés que en pocos días no va a quedar nada.' },
          { emoji: '😔', label: 'Culpa que te agota', desc: 'Pensás que el problema sos vos.\nQue te falta carácter.\nQue "la gente seria" no tiene estos problemas.\nMentira.' },
          { emoji: '😶', label: 'La sensación de no avanzar nunca', desc: 'Mientras otros progresan, vos seguís apagando incendios.\nEso no es mala suerte.\nEs falta de visibilidad.' },
        ].map((p, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-3 shadow-lg shadow-black/20">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{p.emoji}</span>
              <p className="text-lg font-bold text-white">{p.label}</p>
            </div>
            <p className="text-sm text-white/75 leading-relaxed font-medium whitespace-pre-line">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 4. "NO ES TU CULPA" — BISAGRA EMOCIONAL ─────────────────────────────────

const CulpaSection6: React.FC = () => (
  <section className="py-16 bg-[#0f172a] text-white">
    <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
      <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
        La verdad que nadie te dijo:
        <br />
        <span style={gOrange}>No es tu culpa.</span>
      </h2>
      <p className="text-white/80 text-lg font-medium leading-relaxed">
        No te falta disciplina. No te falta voluntad. No sos "mala" con el dinero.
      </p>
      <p className="text-white/70 font-medium leading-relaxed max-w-xl mx-auto">
        Lo que te faltó toda la vida es un sistema que te muestre, en tiempo real, exactamente en qué se va tu dinero y cuánto podés gastar sin miedo.
      </p>
      <div className="inline-block bg-primary/10 border border-primary/30 rounded-2xl px-8 py-5">
        <p className="text-white font-extrabold text-xl leading-snug">
          "No necesitás más disciplina.<br />
          Necesitás <span style={gOrange}>dejar de improvisar</span> con tu dinero."
        </p>
      </div>
    </div>
  </section>
);

// ─── 5. SISTEMA — SECCIÓN FUSIONADA (solución + pasos + diferenciales + antes/después) ───

const SystemSection6: React.FC = () => (
  <section id="solucion" className="py-20 bg-[#0b1220] text-white">
    <div className="max-w-6xl mx-auto px-4 space-y-14">

      {/* Beneficios en formato resultado */}
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Lo que vas a lograr</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            Con Controla, desde el primer mes{' '}
            <span style={gOrange}>vas a sentir la diferencia.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { emoji: '🔍', title: 'Vas a entender exactamente por qué no te alcanza', desc: 'Por primera vez vas a ver con claridad total adónde va tu dinero. Sin suposiciones.' },
            { emoji: '😌', title: 'Vas a dejar de sentirte perdido con tu plata', desc: 'Esa angustia permanente desaparece cuando sabés cuánto podés gastar sin miedo.' },
            { emoji: '💰', title: 'Vas a tener control real desde el primer mes', desc: 'No en seis meses. Desde el primero. El sistema te dice exactamente cuánto guardar.' },
          ].map((b, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-7 space-y-3 shadow-lg shadow-black/20 hover:shadow-2xl transition-all">
              <span className="text-4xl">{b.emoji}</span>
              <p className="text-xl font-bold">{b.title}</p>
              <p className="text-sm text-white/75 leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 pasos */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">4 pasos. Nada más.</p>
          <h3 className="text-2xl lg:text-3xl font-extrabold">Así de simple funciona <span style={gOrange}>Controla IA</span></h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { n: '01', emoji: '🔑', title: 'Accedés al sistema', desc: 'Comprás y en segundos ya estás adentro. Sin instalaciones, desde el celular.' },
            { n: '02', emoji: '⚙️', title: 'Lo configurás en 5 minutos', desc: 'Cargás tus ingresos y gastos fijos. El sistema hace el resto. Sin saber nada de finanzas.' },
            { n: '03', emoji: '📊', title: 'Organizás tu dinero', desc: 'Ves en un solo lugar cuánto tenés, cuánto podés gastar y cuánto guardar. Sin excel.' },
            { n: '04', emoji: '🏆', title: 'Empezás a ver resultados', desc: 'Desde el primer mes. Más control, menos estrés, primeros ahorros reales.' },
          ].map((s) => (
            <div key={s.n} className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-3 shadow-lg shadow-black/20 flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-primary/15 text-primary flex items-center justify-center font-black text-sm">{s.n}</div>
              <div className="space-y-1">
                <p className="text-lg font-bold">{s.emoji} {s.title}</p>
                <p className="text-sm text-white/75 leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No necesitás + Antes/Después en una fila */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Lo que no necesitás */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
          <p className="text-primary font-black uppercase tracking-wide text-sm">✅ No necesitás</p>
          <ul className="space-y-3">
            {[
              ['🧠', 'Conocimientos financieros', 'Si podés usar WhatsApp, podés usar Controla.'],
              ['💪', 'Fuerza de voluntad', 'El sistema hace el trabajo. Vos solo mirás los resultados.'],
              ['💵', 'Ganar más dinero', 'Nuestros usuarios ahorran con el mismo sueldo. El truco es la visibilidad.'],
            ].map(([emoji, bold, desc]) => (
              <li key={bold as string} className="flex items-start gap-3">
                <span className="text-xl shrink-0">{emoji}</span>
                <p className="text-sm text-white/75 font-medium"><strong className="text-white">{bold}</strong> — {desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Antes / Después */}
        <div className="space-y-3">
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5 space-y-2">
            <p className="text-rose-300 font-black text-sm">❌ Sin Controla</p>
            <ul className="space-y-1.5 text-sm text-white/70 font-medium">
              <li>😵 No sabés cuánto podés gastar</li>
              <li>😰 Angustia permanente por la plata</li>
              <li>🔄 Siempre empezando de cero</li>
            </ul>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-5 space-y-2">
            <p className="text-primary font-black text-sm">✅ Con Controla</p>
            <ul className="space-y-1.5 text-sm text-white/70 font-medium">
              <li>🔍 Claridad total en tus gastos</li>
              <li>😌 Tranquilidad real con tus finanzas</li>
              <li>📈 Primeros ahorros desde el mes 1</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats + CTA */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { emoji: '👥', value: '+2,400', label: 'usuarios activos' },
            { emoji: '⚡', value: '5 min', label: 'para configurar' },
            { emoji: '💰', value: '$100/mes', label: 'ahorro promedio' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-xl font-black text-white">{s.value}</span>
              <span className="text-xs font-medium text-white/55 uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
        <a href="#oferta" onClick={() => trackMetaEvent('Lead', { content_name: 'lp6_sistema_cta' })}
          className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine">
          <span>👉</span><span>QUIERO EMPEZAR A AHORRAR AHORA</span>
        </a>
      </div>
    </div>
  </section>
);

// ─── 6. VIDEO (reutilizado) ───────────────────────────────────────────────────
// VideoSection importado

// ─── MOCKUP MULTI-DEVICE ──────────────────────────────────────────────────────

const MockupSection6: React.FC = () => (
  <section className="bg-[#0b1220] py-20 border-y border-white/10 text-white">
    <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
      <div className="space-y-3">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">La plataforma</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Todo en un solo lugar.{' '}
          <span style={{ background: 'linear-gradient(90deg, #f48c25 0%, #fce8d4 50%, #f48c25 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Simple y automático.
          </span>
        </h2>
        <p className="text-white/65 max-w-xl mx-auto font-medium">
          Dashboard, metas, despensa, vehículos e inversiones — conectados y actualizados en tiempo real.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/lp8/sistema finanzas/version dar/dark-hero.png"
          alt="Controla IA en todos tus dispositivos"
          className="w-full max-w-3xl h-auto"
          style={{ filter: 'drop-shadow(0 24px 48px rgba(244,140,37,0.2))' }}
        />
      </div>
    </div>
  </section>
);

// ─── FEATURES SHOWCASE (alternating, dark style) ──────────────────────────────

const showcaseItems6 = [
  { tag: 'Dashboard', title: 'Sistema de Finanzas Personales', desc: 'Todo separado, todo bajo control. Tus cuentas, gastos e ingresos en tiempo real.', points: ['Ingresos y gastos separados', 'Dashboard inteligente', 'Salud financiera en tiempo real', 'Reportes claros y automáticos'], img: '/lp8/dashboard.jpg', reverse: false },
  { tag: 'Metas', title: 'Sistema de Metas Financieras', desc: 'Planificá, ahorrá y cumplí tus objetivos. Paso a paso, sin complicaciones.', points: ['Creá tus objetivos', 'Seguimiento automático', 'Progreso visual claro', 'Motivación constante'], img: '/lp8/metas.jpg', reverse: true },
  { tag: 'Vehículos', title: 'Mantenimiento de Vehículos', desc: 'Controlá servicios y mantenimientos para que nunca te tomen por sorpresa.', points: ['Recordatorios automáticos', 'Historial por vehículo', 'Control de gastos', 'Todo en un solo lugar'], img: '/lp8/mantenimiento-vehiculos.jpg', reverse: false },
  { tag: 'Mercado', title: 'Lista de Supermercado Inteligente', desc: 'Creá, compartí y gestioná tus compras sin complicaciones desde el celular.', points: ['Creá listas desde el celular', 'Sin duplicados', 'Compartí o exportá', 'Compras más organizadas'], img: '/lp8/lista-super.jpg', reverse: true },
  { tag: 'Inversiones', title: 'Gestión de Inversiones', desc: 'Seguí tu portafolio, cobros pendientes y rendimientos. Todo organizado.', points: ['Portafolio centralizado', 'Cobros y rendimientos', 'Historial completo', 'Alertas de vencimiento'], img: '/lp8/inversiones.jpg', reverse: false },
];

// ─── SYSTEMS SHOWCASE DARK (para LP6) ────────────────────────────────────────

const DarkSystemsShowcase6: React.FC = () => (
  <section className="bg-[#0b1220] py-20 border-t border-white/5 text-white">
    <div className="max-w-6xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Módulos del sistema</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Todo lo que incluye{' '}
          <span style={gOrange}>Controla IA</span>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto font-medium">
          Cada módulo diseñado para resolver un problema real de tu vida financiera.
        </p>
      </div>

      {/* Dashboard — full width */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
        <img src="/lp8/sistema finanzas/version dar/dark-dashboard.png" alt="Sistema de Finanzas Personales" className="w-full block" />
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { src: '/lp8/sistema finanzas/version dar/dark-metas.png', alt: 'Sistema de Metas Financieras' },
          { src: '/lp8/sistema finanzas/version dar/dark-vehiculos.png', alt: 'Sistema de Mantenimiento de Vehículos' },
          { src: '/lp8/sistema finanzas/version dar/dark-supermercado.png', alt: 'Lista de Supermercado Inteligente' },
          { src: '/lp8/sistema finanzas/version dar/dark-whatsapp.png', alt: 'Envío por WhatsApp Integrado' },
        ].map((item) => (
          <div key={item.alt} className="rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/30">
            <img src={item.src} alt={item.alt} className="w-full block" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesShowcase6: React.FC = () => (
  <section className="bg-[#0b1220] text-white py-20 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Todo en uno</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Un sistema completo para <span style={gOrange}>tus finanzas</span>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto font-medium">Cada módulo diseñado para resolver un problema real.</p>
      </div>

      {showcaseItems6.map((item, i) => (
        <div key={item.tag} className={`grid gap-10 items-center py-14 ${i > 0 ? 'border-t border-white/5' : ''}`}
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', direction: item.reverse ? 'rtl' : 'ltr' }}>
          <div style={{ direction: 'ltr' }} className="space-y-5">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{item.tag}</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">{item.title}</h3>
            <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
            <ul className="space-y-2.5">
              {item.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'wght' 700" }}>check_circle</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ direction: 'ltr' }}>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img src={item.img} alt={item.title} className="w-full block" style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── 7. TESTIMONIOS ───────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'María García',
    location: 'México',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
    text: 'Llevaba 3 años prometiéndome que iba a organizarme. En el primer mes con Controla entendí por qué nunca me alcanzaba. Ahora ya tengo mi primer ahorro real. No lo puedo creer.',
  },
  {
    name: 'José Rodríguez',
    location: 'Colombia',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
    text: 'Pensé que era un tema de ganar más. No era eso. Era que no veía en qué gastaba. Controla me abrió los ojos en literalmente 5 minutos. Vale cada centavo.',
  },
  {
    name: 'Ana Martínez',
    location: 'Argentina',
    photo: 'https://randomuser.me/api/portraits/women/17.jpg',
    stars: 5,
    text: 'Lo que más me gustó es que no me pide ser disciplinada. El sistema me avisa antes de que se me vaya el dinero. Eso fue un cambio enorme en mi vida.',
  },
  {
    name: 'Carlos López',
    location: 'Perú',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    stars: 5,
    text: 'Dudé mucho antes de comprarlo. Pensé que era igual a todo. Pero en el segundo mes ya había ahorrado lo que pagué por un año entero. Vale mil veces lo que cuesta.',
  },
  {
    name: 'Laura Sánchez',
    location: 'Chile',
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
    stars: 5,
    text: 'Lo de la despensa me cambió la vida. Dejé de comprar cosas que ya tenía. En 2 meses ahorré casi $80 solo con eso. Y eso que yo era la más desorganizada.',
  },
  {
    name: 'Miguel Torres',
    location: 'Venezuela',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    stars: 5,
    text: 'Siempre creí que el problema era mi sueldo. Controla me mostró que era mi falta de control. Ahora duermo tranquilo sabiendo que el mes va a cerrar bien.',
  },
];

const TestimonialsSection6: React.FC = () => (
  <section className="py-20 bg-[#0f172a] text-white">
    <div className="max-w-6xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Lo que dicen nuestros usuarios</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Personas reales.{' '}
          <span style={gOrange}>Resultados reales.</span>
        </h2>
        <p className="text-white/60 font-medium max-w-xl mx-auto">
          No somos los únicos que lo decimos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4 shadow-lg shadow-black/20 flex flex-col">
            {/* Estrellas */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, j) => (
                <span key={j} className="text-primary text-lg">★</span>
              ))}
            </div>
            {/* Texto */}
            <p className="text-sm text-white/80 leading-relaxed font-medium flex-1">"{t.text}"</p>
            {/* Autor */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <img
                src={t.photo}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-white/50 font-medium">📍 {t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prueba social adicional */}
      <div className="flex flex-wrap justify-center gap-6 pt-2">
        {[
          { emoji: '⭐', text: '4.9/5 puntuación promedio' },
          { emoji: '✅', text: '+2,400 usuarios activos' },
          { emoji: '🌎', text: 'Latinoamérica entera' },
        ].map((s) => (
          <div key={s.text} className="flex items-center gap-2 text-sm font-semibold text-white/60">
            <span>{s.emoji}</span><span>{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 8. OBJECIONES ────────────────────────────────────────────────────────────

const ObjectionsSection6: React.FC = () => (
  <section className="py-20 bg-[#0b1220] text-white">
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Antes de decidir</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Sé lo que estás pensando.{' '}
          <span style={gOrange}>Te respondo directo.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {[
          {
            q: '❓ "No soy bueno con el dinero"',
            a: 'Perfecto. Esto NO es para personas que ya saben organizarse. Es exactamente para los que siempre se desordenan. El sistema hace el trabajo — vos solo mirás los resultados.',
          },
          {
            q: '❓ "No tengo fuerza de voluntad para estas cosas"',
            a: 'No la necesitás. Controla no te pide que cambies tu forma de ser. Te da la estructura para que el orden pase solo. La disciplina viene cuando ves que funciona.',
          },
          {
            q: '❓ "Nunca pude ahorrar antes, ¿por qué ahora sí?"',
            a: 'Porque antes intentabas ahorrar a ciegas. Sin visibilidad. Con Controla sabés exactamente cuánto podés guardar sin sacrificar tu calidad de vida.',
          },
          {
            q: '❓ "¿Y si no funciona para mí?"',
            a: 'Tenés 7 días de garantía total. Si no ves resultados concretos, te devolvemos el dinero sin preguntas ni drama. Riesgo cero para vos.',
          },
        ].map((o, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 shadow-lg shadow-black/20">
            <p className="text-lg font-bold text-white">{o.q}</p>
            <p className="text-white/75 text-sm leading-relaxed font-medium">{o.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 9. URGENCIA — PRESIÓN DE DECISIÓN ───────────────────────────────────────

const UrgencySection6: React.FC = () => (
  <section className="py-16 bg-[#0f172a] text-white">
    <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
      <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight">
        <span style={gOrange}>Tres preguntas</span> que necesitás responderte ahora mismo:
      </h2>

      <div className="space-y-3 text-left">
        {[
          '⏰ ¿Vas a seguir igual otro mes… y el siguiente… y el que sigue?',
          '💸 ¿Cuánto dinero más vas a perder sin saber por qué?',
          '😤 ¿Hasta cuándo vas a seguir improvisando con tu plata?',
        ].map((q, i) => (
          <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
            <p className="text-white font-bold text-base">{q}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-2xl px-6 py-5 space-y-2">
        <p className="text-white font-extrabold text-lg">Cada mes que pasa sin control es dinero que ya no vas a recuperar.</p>
        <p className="text-white/65 font-medium text-sm">Podés empezar hoy. O podés seguir igual. La decisión es tuya.</p>
      </div>

      <a href="#oferta" onClick={() => trackMetaEvent('Lead', { content_name: 'lp6_urgencia_cta' })}
        className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine">
        <span>👉</span><span>QUIERO EMPEZAR HOY</span>
      </a>
    </div>
  </section>
);

// ─── 10. PUENTE DE VALOR ──────────────────────────────────────────────────────

const ValueBridgeSection6: React.FC = () => (
  <section className="py-14 bg-[#0b1220] text-white">
    <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Antes de ver el precio</p>
      <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight">
        Un sistema como este podría{' '}
        <span style={gOrange}>fácilmente costar $50 o más</span>.
      </h2>
      <p className="text-white/70 font-medium leading-relaxed">
        Una sesión con un asesor financiero te sale eso solo por la primera hora. Y no te da un sistema para usar todos los días.
      </p>
      <div className="inline-flex flex-col items-center gap-2 bg-primary/10 border border-primary/30 rounded-2xl px-8 py-5">
        <p className="text-white font-extrabold text-xl">Hoy podés acceder por menos de lo que gastás en un café.</p>
        <p className="text-white/60 text-sm font-medium">Sin trucos. Sin sorpresas. Solo el precio que vas a ver abajo.</p>
      </div>
    </div>
  </section>
);

// ─── 11. PRECIO (reutilizado) ─────────────────────────────────────────────────
// PricingSection importado

// ─── 12. CIERRE EMOCIONAL FUERTE ─────────────────────────────────────────────

const ClosingSection6: React.FC = () => (
  <section className="py-20 bg-[#0b1220] text-white">
    <div className="max-w-4xl mx-auto px-4 space-y-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
        Podés seguir igual...{' '}
        <span style={gOrange}>o podés cambiar hoy.</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 text-left">
        <div className="bg-rose-500/10 border border-rose-500/25 rounded-3xl p-6 space-y-3">
          <p className="text-lg font-bold text-rose-300">❌ Sin control significa...</p>
          <ul className="space-y-2 text-sm text-white/75 font-medium">
            <li>• Llegar en cero cada mes sin saber por qué</li>
            <li>• Seguir posponiendo el ahorro "para el próximo"</li>
            <li>• Vivir con esa angustia permanente</li>
            <li>• Dentro de un año, estar exactamente igual</li>
          </ul>
        </div>
        <div className="bg-primary/10 border border-primary/30 rounded-3xl p-6 space-y-3">
          <p className="text-lg font-bold text-primary">✅ Con Controla significa...</p>
          <ul className="space-y-2 text-sm text-white/75 font-medium">
            <li>• Saber exactamente en qué se va tu dinero</li>
            <li>• Empezar a ahorrar desde este mes</li>
            <li>• Dormir tranquilo sabiendo que alcanza</li>
            <li>• Resultados reales en 7 días o te devolvemos todo</li>
          </ul>
        </div>
      </div>

      <p className="text-white/70 font-medium text-lg max-w-2xl mx-auto">
        El cambio no empieza cuando ganés más dinero.<br />
        <span style={gOrange} className="font-bold">Empieza el día que decidís dejar de improvisar.</span>
      </p>

      <div className="flex flex-col items-center gap-3">
        <a href="#oferta" onClick={() => trackMetaEvent('Lead', { content_name: 'lp6_cierre_cta' })}
          className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-5 rounded-2xl font-black text-xl shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine">
          <span>👉</span><span>QUIERO DEJAR DE VIVIR AL DÍA</span>
        </a>
        <p className="text-sm font-semibold text-white/60">🛡️ Garantía 7 días — si no funciona, te devolvemos el dinero.</p>
        <p className="text-xs text-white/40 font-medium">🔒 Pago seguro · Acceso inmediato · Cancela cuando quieras</p>
      </div>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Lp6Page: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#0b1220] text-white">
    <Header />
    <main>
      <Hero6 />
      <ProblemSection6 />
      <PainSection6 />
      <CulpaSection6 />
      <SystemSection6 />
      <VideoSection />
      <DarkSystemsShowcase6 />
      <TestimonialsSection6 />
      <ObjectionsSection6 />
      <UrgencySection6 />
      <ValueBridgeSection6 />
      <PricingSection />
      <ClosingSection6 />
    </main>
    <Footer />
  </div>
);

export default Lp6Page;
