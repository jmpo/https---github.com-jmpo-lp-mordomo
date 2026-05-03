
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { trackMetaEvent } from '../../metaPixel';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4';

const SERIF = '"Playfair Display", Georgia, "Times New Roman", serif';
const SANS = 'Manrope, sans-serif';
const GREEN = '#22c55e';
const GREEN_DARK = '#16a34a';
const GREEN_DIM = 'rgba(34,197,94,0.12)';
const GREEN_BORDER = 'rgba(34,197,94,0.25)';
const BORDER = 'rgba(255,255,255,0.08)';
const MUTED = '#6b7280';
const LIGHT = '#d1d5db';

const useFonts = () => {
  useEffect(() => {
    if (document.querySelector('[data-lp7-font]')) return;
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap';
    link.rel = 'stylesheet';
    link.setAttribute('data-lp7-font', '1');
    document.head.appendChild(link);
  }, []);
};

const fadeUp: React.CSSProperties = { animation: 'lp7FadeUp 0.8s ease both' };
const fadeUpDelay = (ms: number): React.CSSProperties => ({ animation: `lp7FadeUp 0.8s ${ms}ms ease both` });

const GlobalStyles: React.FC = () => (
  <style>{`
    @keyframes lp7FadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .lp7-card-hover:hover { border-color: ${GREEN_BORDER} !important; }
  `}</style>
);

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────

const CtaBtn: React.FC<{ label: string; eventName: string; size?: 'md' | 'lg'; href?: string }> = ({
  label, eventName, size = 'md', href = '#oferta',
}) => (
  <a
    href={href}
    onClick={() => trackMetaEvent('Lead', { content_name: eventName })}
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: GREEN, color: '#fff', fontFamily: SANS, fontWeight: 700,
      fontSize: size === 'lg' ? '1.125rem' : '1rem',
      padding: size === 'lg' ? '1rem 2.5rem' : '0.875rem 2rem',
      borderRadius: '9999px', border: 'none', cursor: 'pointer',
      transition: 'all 300ms', textDecoration: 'none', letterSpacing: '-0.01em',
      boxShadow: `0 0 32px 4px rgba(34,197,94,0.25)`,
    }}
    onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1.03)'; el.style.background = GREEN_DARK; }}
    onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1)'; el.style.background = GREEN; }}
  >
    {label}
  </a>
);

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

const Hero7: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', background: '#000', padding: '6rem 1.5rem' }}>
      <video ref={videoRef} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '56rem', margin: '0 auto' }}>
        <p style={{ ...fadeUp, fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '1.5rem' }}>
          Para asalariados en Latinoamérica
        </p>
        <h1 style={{ ...fadeUpDelay(100), fontFamily: SERIF, fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', color: '#fff', marginBottom: '2rem' }}>
          Deja de preguntarte<br />
          <em style={{ fontStyle: 'italic', color: '#e5e5e5' }}>en qué se fue tu sueldo</em><br />
          y empieza a tener<br />
          control real de tu dinero.
        </h1>
        <p style={{ ...fadeUpDelay(200), fontFamily: SANS, fontSize: 'clamp(1rem, 2.2vw, 1.125rem)', color: LIGHT, maxWidth: '36rem', margin: '0 auto 2.5rem', lineHeight: 1.65, fontWeight: 400 }}>
          Si trabajas todo el mes y aún así no te alcanza…<br />
          no es falta de esfuerzo.<br /><br />
          <strong style={{ color: '#fff', fontWeight: 600 }}>👉 Es falta de claridad.</strong>
        </p>
        <div style={{ ...fadeUpDelay(300) }}>
          <CtaBtn label="👉 Quiero dejar de vivir al día" eventName="lp7_hero_cta" size="lg" />
        </div>
        <p style={{ ...fadeUpDelay(400), fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '1.5rem', fontWeight: 500 }}>
          🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)', margin: '0 auto' }} />
      </div>
    </section>
  );
};

// ─── 2. PROBLEMA ──────────────────────────────────────────────────────────────

const ProblemSection7: React.FC = () => (
  <section style={{ background: '#000', padding: '8rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
      <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '2rem' }}>El problema</p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '3rem' }}>
        Trabajas todo el mes…<br />pero:
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
        {[
          'No sabes en qué se fue el dinero',
          'Intentas ahorrar, pero no puedes',
          'Siempre estás empezando de cero',
          'Dependes completamente de tu sueldo',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', background: 'rgba(255,255,255,0.02)' }}>
            <span style={{ color: '#ef4444', fontSize: '1rem', flexShrink: 0 }}>✕</span>
            <p style={{ fontFamily: SANS, fontSize: '1rem', color: LIGHT, fontWeight: 500, margin: 0 }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 3. AGITACIÓN ─────────────────────────────────────────────────────────────

const AgitationSection7: React.FC = () => (
  <section style={{ background: '#0a0a0a', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: '8rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '2.5rem' }}>Y lo peor…</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
        {['No estás avanzando', 'Sientes que estás atrapado', 'El futuro te preocupa'].map((item, i) => (
          <p key={i} style={{ fontFamily: SANS, fontSize: '1.125rem', color: MUTED, fontWeight: 400, margin: 0 }}>{item}</p>
        ))}
      </div>
      <p style={{ fontFamily: SERIF, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.4, borderLeft: '2px solid #ef4444', paddingLeft: '1.5rem', textAlign: 'left' }}>
        Y aunque trabajes más… nada cambia.
      </p>
    </div>
  </section>
);

// ─── 4. REVELACIÓN ────────────────────────────────────────────────────────────

const RevelationSection7: React.FC = () => (
  <section style={{ background: '#000', padding: '8rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
      <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, marginBottom: '2rem', fontWeight: 400, lineHeight: 1.7 }}>
        No necesitas más disciplina.<br />No necesitas ganar más dinero.
      </p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', marginBottom: '3rem' }}>
        Necesitas ver lo que hoy<br />
        <em style={{ color: GREEN, fontStyle: 'italic' }}>no estás viendo.</em>
      </h2>
      <CtaBtn label="👉 Quiero ver la realidad de mi dinero" eventName="lp7_revelacion_cta" />
    </div>
  </section>
);

// ─── 5. SOLUCIÓN (split) ──────────────────────────────────────────────────────

const SolutionSection7: React.FC = () => (
  <section style={{ background: '#0a0a0a', borderTop: `1px solid ${BORDER}`, padding: '8rem 1.5rem' }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
      <div>
        <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '1.5rem' }}>La solución</p>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '2rem' }}>
          Este sistema te muestra:
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            ['📊', 'En qué se va tu dinero', 'Con claridad real, sin suposiciones.'],
            ['🔎', 'Qué estás haciendo mal', 'Los patrones que te drenan sin que lo notes.'],
            ['⚡', 'Qué cambiar', 'Acciones concretas desde el primer día.'],
          ].map(([emoji, title, desc]) => (
            <div key={title as string} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: 2 }}>{emoji}</span>
              <div>
                <p style={{ fontFamily: SANS, fontWeight: 700, color: '#fff', fontSize: '1rem', margin: '0 0 0.25rem' }}>{title}</p>
                <p style={{ fontFamily: SANS, color: MUTED, fontSize: '0.875rem', margin: 0, fontWeight: 400 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard mockup */}
      <div style={{ background: '#111', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', fontFamily: SANS }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <p style={{ color: MUTED, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Panel de control</p>
          <span style={{ background: GREEN_DIM, color: GREEN, fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>En vivo</span>
        </div>
        {[
          { label: 'Sueldo del mes', value: '$2,500', color: GREEN },
          { label: 'Gastos registrados', value: '$1,840', color: '#f59e0b' },
          { label: 'Disponible para ahorrar', value: '$660', color: '#60a5fa' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', borderBottom: `1px solid ${BORDER}` }}>
            <p style={{ color: MUTED, fontSize: '0.875rem', margin: 0 }}>{row.label}</p>
            <p style={{ color: row.color, fontWeight: 700, fontSize: '1rem', margin: 0 }}>{row.value}</p>
          </div>
        ))}
        <div style={{ marginTop: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem', padding: '0.75rem 1rem' }}>
          <p style={{ color: MUTED, fontSize: '0.75rem', margin: '0 0 0.5rem' }}>Meta — Viaje a Cancún</p>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 9999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '42%', background: GREEN, borderRadius: 9999 }} />
          </div>
          <p style={{ color: GREEN, fontSize: '0.7rem', fontWeight: 700, margin: '0.4rem 0 0' }}>42% completado</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── 6. DEMO ──────────────────────────────────────────────────────────────────

const DemoSection7: React.FC = () => (
  <section style={{ background: '#000', padding: '8rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
      <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '1.5rem' }}>Demostración</p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1rem' }}>
        En menos de 5 minutos vas a ver<br />algo que nunca viste:
      </h2>
      <p style={{ fontFamily: SANS, fontSize: '1.125rem', color: MUTED, marginBottom: '3rem', fontWeight: 400 }}>
        👉 La realidad de tu dinero
      </p>
      <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: `1px solid ${BORDER}`, boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)' }}>
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.8rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 700, color: '#111' }}>
          ▶ Video real del producto
        </div>
        <div style={{ paddingTop: '56.25%', position: 'relative' }}>
          <iframe src="https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
            loading="lazy" title="Controla IA demo"
            style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen />
        </div>
      </div>
    </div>
  </section>
);

// ─── 7. BENEFICIOS ────────────────────────────────────────────────────────────

const BenefitsSection7: React.FC = () => (
  <section style={{ background: '#0a0a0a', borderTop: `1px solid ${BORDER}`, padding: '8rem 1.5rem' }}>
    <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '1.5rem' }}>Qué logras</p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '3rem' }}>
        Desde el primer mes.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {['Entiendes tu dinero', 'Tomas mejores decisiones', 'Empiezas a ahorrar', 'Dejas de sentirte perdido', 'Tienes control real', 'Duermes sin angustia'].map((label) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', background: 'rgba(255,255,255,0.02)', textAlign: 'left' }}>
            <span style={{ color: GREEN, fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>✔</span>
            <p style={{ fontFamily: SANS, color: '#e5e7eb', fontSize: '0.9375rem', fontWeight: 500, margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 8. PRICING SECTION 7 (custom) ───────────────────────────────────────────

const plans = [
  {
    name: 'Mensual',
    slug: 'plan_mensual',
    months: 1,
    charge: 5,
    monthlyDisplay: 5,
    label: 'Sin compromiso',
    desc: 'Perfecto si quieres probar el sistema y empezar a entender tu dinero desde ya.',
    features: ['Acceso completo al sistema', 'Organización clara de ingresos y gastos', 'Visualización simple de tu dinero', 'Empiezas en minutos'],
    cta: 'Quiero empezar hoy',
    href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6',
    highlight: null as null | 'popular' | 'value',
  },
  {
    name: 'Semestral',
    slug: 'plan_semestral',
    months: 6,
    charge: 24.99,
    monthlyDisplay: 4.17,
    compareAt: 30,
    saving: 5,
    discount: 17,
    label: 'La mayoría empieza aquí',
    desc: 'Empieza a ver cambios reales en tu forma de manejar el dinero.',
    features: ['Todo lo del plan mensual', 'Más tiempo para generar hábitos reales', 'Mejor seguimiento de tus finanzas', 'Más claridad mes a mes'],
    cta: 'Quiero mejorar mis finanzas',
    href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
    highlight: 'popular' as 'popular',
  },
  {
    name: 'Anual',
    slug: 'plan_anual',
    months: 12,
    charge: 39.99,
    monthlyDisplay: 3.33,
    compareAt: 60,
    saving: 20,
    discount: 33,
    label: 'Donde realmente ocurre el cambio',
    desc: 'Si quieres dejar de vivir al día, necesitas tiempo… y consistencia.',
    features: ['Todo lo anterior', 'Control total durante todo el año', 'Resultados reales y sostenibles', 'Menor costo, mayor beneficio'],
    cta: 'Quiero tomar control total',
    href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6',
    highlight: 'value' as 'value',
  },
];

const bonuses = [
  { emoji: '📊', title: 'Panel 360 de tu plata', desc: 'Tus cuentas, gastos y despensa en un solo lugar. Sin hojas de cálculo.' },
  { emoji: '🔁', title: 'Piloto automático de cuentas fijas', desc: 'Cargás alquiler, luz e internet una vez y recibís alertas antes de que venzan.' },
  { emoji: '🚀', title: 'Calculadora de Metas', desc: 'Define tu meta, te decimos cuánto guardar por día. Ves la barra avanzar.' },
  { emoji: '🔍', title: 'Escáner IA ilimitado', desc: 'Sube todas las facturas que quieras. El sistema encuentra los montos al instante.' },
];

const proofMessages = [
  { name: 'María de Lima', action: 'armó su fondo de emergencia', time: 'hace 2 min' },
  { name: 'José de Bogotá', action: 'contrató el plan Anual', time: 'hace 5 min' },
  { name: 'Ana de CDMX', action: 'configuró metas familiares', time: 'hace 8 min' },
  { name: 'Luis de Buenos Aires', action: 'bajó sus suscripciones duplicadas', time: 'hace 12 min' },
];

const PricingSection7: React.FC = () => {
  const [countdown, setCountdown] = useState('12:00:00');
  const [toastIdx, setToastIdx] = useState(0);
  const [showProof, setShowProof] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = Date.now() + 12 * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);
      const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
      const m = String(Math.floor((diff / 60000) % 60)).padStart(2, '0');
      const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
      setCountdown(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!showProof) return;
    const id = setInterval(() => setToastIdx(p => (p + 1) % proofMessages.length), 7000);
    return () => clearInterval(id);
  }, [showProof]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShowProof(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="oferta" ref={sectionRef} style={{ background: '#000', padding: '8rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Título sección */}
        <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '1.5rem' }}>Elige cómo empezar</p>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1rem' }}>
          Toma control de tu dinero.
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1.0625rem', color: MUTED, marginBottom: '0.5rem', fontWeight: 400, lineHeight: 1.65 }}>
          No necesitas hacer un gran gasto para cambiar tu situación…
        </p>
        <p style={{ fontFamily: SERIF, fontSize: '1.25rem', fontStyle: 'italic', color: '#fff', marginBottom: '3rem' }}>
          Solo necesitas dejar de improvisar.
        </p>

        {/* Countdown */}
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', border: `1px solid ${BORDER}`, borderRadius: '9999px', padding: '0.75rem 1.5rem', marginBottom: '4rem', background: 'rgba(255,255,255,0.02)' }}>
          <span style={{ fontFamily: SANS, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: GREEN }}>Prueba gratis activa</span>
          <span style={{ color: BORDER }}>·</span>
          <span style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>⏳ Termina en {countdown}</span>
          <span style={{ color: BORDER }}>·</span>
          <span style={{ fontFamily: SANS, fontSize: '0.75rem', color: MUTED }}>Cancela cuando quieras</span>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'start', marginBottom: '5rem' }}>
          {plans.map((p) => {
            const isPopular = p.highlight === 'popular';
            const isValue = p.highlight === 'value';
            const isHighlighted = isPopular || isValue;
            return (
              <div key={p.slug} style={{
                position: 'relative', background: isHighlighted ? '#0d0d0d' : '#080808',
                border: `1px solid ${isHighlighted ? GREEN_BORDER : BORDER}`,
                borderRadius: '1.25rem', padding: '2.5rem 2rem',
                boxShadow: isHighlighted ? `0 0 40px rgba(34,197,94,0.08)` : 'none',
                transform: isHighlighted ? 'none' : 'none',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
              }}>
                {/* Badge */}
                {isHighlighted && (
                  <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)' }}>
                    <span style={{ background: GREEN, color: '#fff', fontFamily: SANS, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: '0 0 0.5rem 0.5rem', display: 'block', whiteSpace: 'nowrap' }}>
                      {isPopular ? '🔥 Más Popular' : '⚡ Mejor Valor'}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: '1.5rem', fontWeight: 700, color: '#fff', margin: '0 0 0.25rem' }}>{p.name}</h3>
                  <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: GREEN, fontWeight: 600, margin: '0 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.label}</p>
                  <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                </div>

                {/* Price box */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
                  <p style={{ fontFamily: SANS, fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: GREEN, margin: '0 0 0.5rem' }}>Precio por mes</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.25rem' }}>
                    <span style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                      USD {p.monthlyDisplay.toFixed(2)}
                    </span>
                    <span style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED }}>/mes</span>
                  </div>
                  {p.name === 'Anual' && (
                    <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: MUTED, margin: '0.25rem 0 0' }}>☕ Menos que un café al día</p>
                  )}
                  <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, margin: '0.75rem 0 0', fontWeight: 500 }}>
                    Total hoy: USD {p.charge.toFixed(2)}
                    {p.compareAt && <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.2)', marginLeft: '0.5rem', fontSize: '0.75rem' }}>USD {p.compareAt.toFixed(2)}</span>}
                  </p>
                  {p.saving && p.discount && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, borderRadius: '9999px', padding: '0.3rem 0.9rem', marginTop: '0.75rem' }}>
                      <span style={{ fontFamily: SANS, fontSize: '0.7rem', fontWeight: 800, color: GREEN }}>💰 Ahorrás ${p.saving} · {p.discount}% OFF</span>
                    </div>
                  )}
                </div>

                {/* Features — solo texto, sin check duplicado */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: 'left', flex: 1 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: j === 0 ? 600 : 400, color: j === 0 ? '#e5e7eb' : MUTED, paddingLeft: '0.25rem', borderLeft: j === 0 ? `2px solid ${GREEN}` : '2px solid transparent', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={p.href}
                  onClick={() => trackMetaEvent('AddToCart', { content_ids: [p.slug], content_name: `${p.name} - Controla IA`, content_type: 'product', value: p.charge, currency: 'USD', num_items: 1 })}
                  style={{
                    display: 'block', width: '100%', padding: '1rem', borderRadius: '9999px',
                    background: isHighlighted ? GREEN : 'transparent',
                    border: `1px solid ${isHighlighted ? GREEN : BORDER}`,
                    color: '#fff', fontFamily: SANS, fontWeight: 700, fontSize: '0.9375rem',
                    textAlign: 'center', textDecoration: 'none', cursor: 'pointer',
                    transition: 'all 300ms', boxShadow: isHighlighted ? `0 0 24px rgba(34,197,94,0.25)` : 'none',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = isHighlighted ? GREEN_DARK : 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = isHighlighted ? GREEN : 'transparent'; }}
                >
                  {p.cta}
                </a>

                {/* Garantía */}
                <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: '-0.75rem 0 0' }}>
                  🛡️ Garantía 7 días — devolvemos el dinero sin preguntas
                </p>

                {/* Social proof solo en el popular */}
                {isPopular && (
                  <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: MUTED, textAlign: 'center', margin: '-0.75rem 0 0' }}>
                    👥 127 personas eligieron este plan esta semana
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bonuses */}
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: '1.25rem', padding: '3rem 2rem', background: 'rgba(255,255,255,0.01)', marginBottom: '3rem' }}>
          <p style={{ fontFamily: SANS, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: GREEN, marginBottom: '0.75rem' }}>✓ Todo lo que recibís desde el día 1</p>
          <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '2.5rem', letterSpacing: '-0.01em' }}>Sin letra chica.</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', textAlign: 'left' }}>
            {bonuses.map((b) => (
              <div key={b.title} style={{ border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)' }}>
                <p style={{ fontSize: '1.75rem', margin: '0 0 0.75rem' }}>{b.emoji}</p>
                <p style={{ fontFamily: SANS, fontWeight: 700, color: '#fff', fontSize: '0.9375rem', margin: '0 0 0.5rem' }}>{b.title}</p>
                <p style={{ fontFamily: SANS, color: MUTED, fontSize: '0.8rem', margin: 0, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Refuerzo */}
        <div style={{ margin: '4rem auto 3rem', maxWidth: '36rem', textAlign: 'center' }}>
          <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, lineHeight: 1.7, marginBottom: '0.5rem' }}>
            No necesitas ser bueno con el dinero.<br />No necesitas disciplina perfecta.
          </p>
          <p style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', fontStyle: 'italic' }}>
            Solo necesitas empezar.
          </p>
        </div>

        {/* Micro copy */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          {['Acceso inmediato', 'Sin complicaciones', 'Funciona desde el primer día'].map((item) => (
            <span key={item} style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: GREEN }}>✔</span> {item}
            </span>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <CtaBtn label="👉 Quiero tomar control total" eventName="lp7_pricing_final_cta" size="lg" href="https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6" />
          <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED }}>Cancela cuando quieras. Sin compromiso.</p>
          <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
            ¿Tenés dudas? <a href="https://wa.link/wcvh0b" style={{ color: GREEN, textDecoration: 'none' }}>Escribinos por WhatsApp</a>
          </p>
        </div>
      </div>

      {/* Toast social proof */}
      {showProof && (
        <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 40, background: '#111', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', maxWidth: '18rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <span style={{ color: GREEN, fontSize: '1.25rem' }}>✓</span>
          <div>
            <p style={{ fontFamily: SANS, fontSize: '0.8125rem', fontWeight: 600, color: '#fff', margin: 0 }}>{proofMessages[toastIdx].name}</p>
            <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: MUTED, margin: '0.15rem 0 0' }}>{proofMessages[toastIdx].action}</p>
            <p style={{ fontFamily: SANS, fontSize: '0.65rem', color: GREEN, fontWeight: 700, margin: '0.15rem 0 0' }}>{proofMessages[toastIdx].time}</p>
          </div>
        </div>
      )}
    </section>
  );
};

// ─── 9. OBJECIONES (accordion) ───────────────────────────────────────────────

const faqs = [
  { q: '"No soy bueno con el dinero"', a: 'Por eso es simple. Controla está diseñado para personas sin conocimientos financieros. Si sabés usar WhatsApp, podés usarlo.' },
  { q: '"No tengo disciplina"', a: 'No la necesitás. Este sistema elimina la improvisación. Te dice exactamente qué hacer, cuándo y cuánto. Sin adivinar.' },
  { q: '"Esto no es para mí"', a: 'Es exactamente para vos. Para asalariados que viven al día, que no logran ahorrar, que se preguntan en qué se fue el dinero.' },
  { q: '"¿Y si no funciona?"', a: 'Tenés 7 días de garantía total. Si no ves resultados, te devolvemos el dinero sin preguntas ni drama. Sin riesgo.' },
];

const AccordionItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
        <span style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{q}</span>
        <span style={{ color: GREEN, fontSize: '1.25rem', flexShrink: 0, transition: 'transform 300ms', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </button>
      {open && <p style={{ fontFamily: SANS, fontSize: '0.9375rem', color: MUTED, paddingBottom: '1.5rem', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>{a}</p>}
    </div>
  );
};

const ObjectionsSection7: React.FC = () => (
  <section style={{ background: '#0a0a0a', borderTop: `1px solid ${BORDER}`, padding: '8rem 1.5rem' }}>
    <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
      <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '1.5rem', textAlign: 'center' }}>Preguntas frecuentes</p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '3rem', textAlign: 'center' }}>
        Sé lo que estás pensando.
      </h2>
      {faqs.map((f) => <AccordionItem key={f.q} {...f} />)}
    </div>
  </section>
);

// ─── 10. URGENCIA ─────────────────────────────────────────────────────────────

const UrgencySection7: React.FC = () => (
  <section style={{ background: '#000', borderTop: `1px solid ${BORDER}`, padding: '8rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem' }}>
        Cada mes que pasa…
      </h2>
      <p style={{ fontFamily: SERIF, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontStyle: 'italic', color: MUTED, lineHeight: 1.4, marginBottom: '3rem' }}>
        seguís en el mismo ciclo.
      </p>
      <CtaBtn label="👉 Quiero salir de este ciclo" eventName="lp7_urgencia_cta" size="lg" />
    </div>
  </section>
);

// ─── 11. CIERRE ───────────────────────────────────────────────────────────────

const FinalCta7: React.FC = () => (
  <section style={{ background: '#000', padding: '10rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
      <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, marginBottom: '2rem', lineHeight: 1.7, fontWeight: 400 }}>
        Puedes seguir igual…<br />o empezar a entender tu dinero hoy.
      </p>
      <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', marginBottom: '2.5rem' }}>
        La decisión es tuya.
      </h2>
      <CtaBtn label="👉 Quiero tener control de mi dinero" eventName="lp7_final_cta" size="lg" />
      <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', marginTop: '1.5rem', fontWeight: 500 }}>
        🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
      </p>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Lp7Page: React.FC = () => {
  useFonts();
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero7 />
        <ProblemSection7 />
        <AgitationSection7 />
        <RevelationSection7 />
        <SolutionSection7 />
        <DemoSection7 />
        <BenefitsSection7 />
        <PricingSection7 />
        <ObjectionsSection7 />
        <UrgencySection7 />
        <FinalCta7 />
      </main>
      <Footer />
    </div>
  );
};

export default Lp7Page;
