
import React, { useState, useEffect, useRef } from 'react';
import { trackMetaEvent } from '../../metaPixel';
import { getCountdownTarget } from '../../countdownTarget';
import VideoSection from '../VideoSection';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const ORANGE  = '#f48c25';
const DARK    = '#0f172a';
const MUTED   = '#64748b';
const BORDER  = '#e2e8f0';
const WHITE   = '#ffffff';
const LIGHT   = '#f8fafc';
const SANS    = 'Manrope, sans-serif';

// ─── PLANS ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Mensual', slug: 'plan_mensual', charge: 5, monthly: 5,
    compareAt: null as number|null, saving: null as number|null, discount: null as number|null,
    cta: 'Empezar por USD 5 →', href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=10',
    popular: false, bestValue: false,
    features: ['Acceso completo', 'Panel con IA', 'WhatsApp', 'Soporte'],
  },
  {
    name: 'Semestral', slug: 'plan_semestral', charge: 24.99, monthly: 4.17,
    compareAt: 30 as number|null, saving: 5 as number|null, discount: 17 as number|null,
    cta: '🔥 Quiero el Semestral →', href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=10',
    popular: true, bestValue: false,
    features: ['Todo del mensual', 'Hábitos financieros', 'Seguimiento mensual', 'Más claridad'],
  },
  {
    name: 'Anual', slug: 'plan_anual', charge: 39.99, monthly: 3.33,
    compareAt: 60 as number|null, saving: 20 as number|null, discount: 33 as number|null,
    cta: '⚡ Mejor precio — Anual →', href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=10',
    popular: false, bestValue: true,
    features: ['Todo lo anterior', 'Control 12 meses', 'Resultados sostenibles', '☕ Menos que un café/día'],
  },
];

// ─── REVEAL HOOK ──────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── REVEAL WRAPPER ───────────────────────────────────────────────────────────

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────

const Counter: React.FC<{ to: number; prefix?: string; suffix?: string; duration?: number }> = ({ to, prefix = '', suffix = '', duration = 1800 }) => {
  const { ref, visible } = useReveal();
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, to, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString('es')}{suffix}</span>;
};

// ─── PRICING SECTION ──────────────────────────────────────────────────────────

const PricingBlock: React.FC<{ countdown: string }> = ({ countdown }) => (
  <div id="oferta" style={{ background: DARK, borderRadius: '2rem', padding: 'clamp(2rem,5vw,3.5rem) clamp(1.25rem,4vw,2.5rem)', marginTop: '1rem' }}>
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, margin: '0 0 0.75rem' }}>ELEGÍ TU PLAN</p>
      <h3 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: WHITE, margin: '0 0 1.5rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
        Menos que un café al mes.<br />
        <span style={{ color: ORANGE }}>Control total de tu plata.</span>
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
        <span style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800 }}>
          🔴 Solo quedan 7 cupos
        </span>
        <span style={{ background: 'rgba(244,140,37,0.15)', border: '1px solid rgba(244,140,37,0.4)', color: ORANGE, padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800 }}>
          ⏳ Oferta termina en <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 900 }}>{countdown}</span>
        </span>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
      {plans.map(p => (
        <div key={p.slug} style={{ background: p.popular ? 'rgba(244,140,37,0.08)' : p.bestValue ? 'rgba(16,185,129,0.06)' : 'rgba(255,255,255,0.04)', border: `2px solid ${p.popular ? ORANGE : p.bestValue ? '#10b981' : 'rgba(255,255,255,0.1)'}`, borderRadius: '1.25rem', padding: '1.5rem', position: 'relative' }}>
          {p.popular && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: ORANGE, color: WHITE, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.1rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>🔥 Más Popular</div>}
          {p.bestValue && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#10b981', color: WHITE, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.1rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>⚡ Mejor Valor</div>}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <p style={{ fontFamily: SANS, fontSize: '1.1rem', fontWeight: 800, color: WHITE, margin: '0 0 0.25rem' }}>{p.name}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontFamily: SANS, fontSize: '2rem', fontWeight: 900, color: WHITE, lineHeight: 1 }}>USD {p.monthly.toFixed(2)}</span>
                <span style={{ fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>/mes</span>
              </div>
              <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: '0.2rem 0 0' }}>
                Total: USD {p.charge.toFixed(2)}
                {p.compareAt && <span style={{ textDecoration: 'line-through', marginLeft: '0.4rem', color: 'rgba(255,255,255,0.25)' }}>USD {p.compareAt}</span>}
              </p>
            </div>
            <div>
              {p.saving && p.discount && (
                <span style={{ background: '#d1fae5', color: '#065f46', fontSize: '0.7rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '9999px', display: 'block', textAlign: 'center' }}>
                  💰 {p.discount}% OFF
                </span>
              )}
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {p.features.map(f => (
              <li key={f} style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: ORANGE }}>✓</span>{f}
              </li>
            ))}
          </ul>

          <a
            href={p.href}
            onClick={() => trackMetaEvent('AddToCart', { content_ids: [p.slug], content_name: `${p.name} - LP11`, content_type: 'product', value: p.charge, currency: 'USD', num_items: 1 })}
            className={`cta-shine ${p.popular ? 'btn-glow-orange' : p.bestValue ? 'btn-glow-green' : 'btn-glow-blue'}`}
            style={{ display: 'block', width: '100%', padding: '1rem', borderRadius: '0.875rem', background: p.popular ? ORANGE : p.bestValue ? '#10b981' : '#2563eb', color: WHITE, fontFamily: SANS, fontWeight: 800, fontSize: '1rem', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}
          >
            {p.cta}
          </a>
          <p style={{ fontFamily: SANS, fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: '0.5rem' }}>
            🛡️ Garantía 7 días — Si no te ayuda, te devolvemos el 100%, sin preguntas.
          </p>
        </div>
      ))}
    </div>
    <p style={{ fontFamily: SANS, textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
      🔒 Pago seguro vía Hotmart · Visa · Mastercard · MercadoPago
    </p>
  </div>
);

// ─── SOCIAL PROOF TOAST ───────────────────────────────────────────────────────

const toasts = [
  { name: 'Juan C.', city: 'Asunción', action: 'se suscribió al plan Semestral' },
  { name: 'María G.', city: 'Ciudad de México', action: 'ahorró su primer USD 100' },
  { name: 'José R.', city: 'Bogotá', action: 'canceló 3 suscripciones olvidadas' },
  { name: 'Ana M.', city: 'Buenos Aires', action: 'configuró su primera meta financiera' },
  { name: 'Carlos L.', city: 'Lima', action: 'se suscribió al plan Anual' },
];

const SocialToast: React.FC = () => {
  const [idx, setIdx]     = useState(0);
  const [show, setShow]   = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => { setMounted(true); setShow(true); }, 8000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const rotate = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(i => (i + 1) % toasts.length); setShow(true); }, 600);
    }, 5000);
    return () => clearInterval(rotate);
  }, [mounted]);

  if (!mounted) return null;
  const t = toasts[idx];
  return (
    <div style={{
      position: 'fixed', bottom: '5.5rem', left: '1rem', zIndex: 998,
      background: WHITE, border: `1px solid ${BORDER}`,
      borderRadius: '1rem', padding: '0.875rem 1.1rem',
      boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      maxWidth: '280px',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 400ms ease, transform 400ms ease',
      pointerEvents: 'none',
    }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(244,140,37,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🙋</div>
      <div>
        <p style={{ fontFamily: SANS, fontSize: '0.8rem', fontWeight: 700, color: DARK, margin: 0 }}>{t.name} · {t.city}</p>
        <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: MUTED, margin: 0 }}>{t.action}</p>
      </div>
    </div>
  );
};

// ─── FLOATING BOTTOM CTA ──────────────────────────────────────────────────────

const FloatingCTA: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 997,
      background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
      borderTop: `1px solid ${BORDER}`,
      padding: '0.875rem 1.25rem',
      transform: show ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 350ms cubic-bezier(0.16,1,0.3,1)',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.1)',
    }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: SANS, fontSize: '0.8rem', fontWeight: 800, color: DARK, margin: 0 }}>Controla IA — desde USD 3.33/mes</p>
          <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: MUTED, margin: 0 }}>🛡️ Garantía 7 días sin preguntas</p>
        </div>
        <a
          href="#oferta"
          onClick={() => trackMetaEvent('Lead', { content_name: 'lp11_float_cta' })}
          className="cta-shine btn-glow-orange"
          style={{ background: ORANGE, color: WHITE, padding: '0.7rem 1.5rem', borderRadius: '0.75rem', fontSize: '0.9rem', fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, fontFamily: SANS }}
        >
          Empezar →
        </a>
      </div>
    </div>
  );
};

// ─── TIMELINE SECTION ─────────────────────────────────────────────────────────

const TimelineSection: React.FC = () => {
  const months = [
    { month: 'Semana 1', emoji: '👀', color: '#ef4444', title: 'El descubrimiento', text: 'Sofía conecta Controla IA y ve por primera vez el desglose real de sus gastos. Descubre USD 60/mes en suscripciones olvidadas. Las cancela esa misma tarde.' },
    { month: 'Mes 1', emoji: '💡', color: ORANGE, title: 'Visibilidad real', text: 'Por primera vez en años sabe exactamente cuánto gastó y en qué. Configura su primera meta: fondo de emergencia de USD 300.' },
    { month: 'Mes 2', emoji: '📈', color: '#f59e0b', title: 'Los hábitos arrancan', text: 'Registra gastos por WhatsApp en segundos. La IA le avisa cuando está cerca del límite de comidas. Ahorra USD 120 sin esfuerzo.' },
    { month: 'Mes 3', emoji: '🎯', color: '#10b981', title: 'Meta cumplida', text: 'Alcanza el fondo de emergencia. Paga el saldo de su tarjeta de crédito. Siente control real por primera vez.' },
    { month: 'Mes 4', emoji: '✈️', color: '#3b82f6', title: 'El viaje que parecía imposible', text: 'Reserva el viaje que llevaba 3 años postergando — pagado 100% con sus ahorros. USD 480 guardados en 4 meses.' },
  ];

  return (
    <section style={{ background: LIGHT, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, textAlign: 'center', margin: '0 0 0.75rem' }}>El camino de Sofía</p>
          <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: DARK, textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 3rem' }}>
            De cero a USD 480 ahorrados —<br />
            <span style={{ color: ORANGE }}>mes a mes.</span>
          </h2>
        </Reveal>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg, ${ORANGE}, #10b981)`, borderRadius: 9999 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {months.map((m, i) => (
              <Reveal key={m.month} delay={i * 100}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', paddingBottom: i < months.length - 1 ? '2rem' : 0 }}>
                  {/* Dot */}
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, border: `3px solid ${WHITE}`, boxShadow: `0 0 0 3px ${m.color}30`, zIndex: 1 }}>
                    {m.emoji}
                  </div>
                  {/* Content */}
                  <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.25rem', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 900, color: m.color, textTransform: 'uppercase', letterSpacing: '0.1em', background: `${m.color}15`, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{m.month}</span>
                    </div>
                    <p style={{ fontFamily: SANS, fontSize: '0.9375rem', fontWeight: 800, color: DARK, margin: '0 0 0.35rem' }}>{m.title}</p>
                    <p style={{ fontFamily: SANS, fontSize: '0.8125rem', color: MUTED, margin: 0, lineHeight: 1.65 }}>{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ANTES VS DESPUÉS ─────────────────────────────────────────────────────────

const BeforeAfter: React.FC = () => (
  <section style={{ background: WHITE, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <Reveal>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, textAlign: 'center', margin: '0 0 0.75rem' }}>La diferencia</p>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: DARK, textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 2.5rem' }}>
          Antes y después de<br /><span style={{ color: ORANGE }}>tener visibilidad financiera</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {/* ANTES */}
          <div style={{ background: '#fff5f5', border: '1.5px solid #fecaca', borderRadius: '1.25rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.25rem' }}>😩</span>
              <span style={{ fontFamily: SANS, fontSize: '0.8rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Antes</span>
            </div>
            {['No sabés a dónde va tu plata', 'Llegás a fin de mes sin ahorros', 'Suscripciones que no recordás', 'Miedo de ver el resumen del banco', 'Promesas que nunca arrancás', 'Culpa sin saber por qué'].map(t => (
              <div key={t} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ef4444', flexShrink: 0, fontSize: '0.9rem' }}>✗</span>
                <span style={{ fontFamily: SANS, fontSize: '0.8rem', color: '#7f1d1d', lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
          {/* DESPUÉS */}
          <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '1.25rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.25rem' }}>😌</span>
              <span style={{ fontFamily: SANS, fontSize: '0.8rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Después</span>
            </div>
            {['Sabés exactamente cada peso', 'Ahorrás sin esfuerzo extra', 'Cero gastos sorpresa', 'Revisás tus finanzas con calma', 'Metas que realmente avanzás', 'Control y tranquilidad real'].map(t => (
              <div key={t} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', flexShrink: 0, fontSize: '0.9rem' }}>✓</span>
                <span style={{ fontFamily: SANS, fontSize: '0.8rem', color: '#14532d', lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── COMPARISON TABLE ─────────────────────────────────────────────────────────

const ComparisonTable: React.FC = () => (
  <section style={{ background: LIGHT, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <Reveal>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, textAlign: 'center', margin: '0 0 0.75rem' }}>¿Por qué Controla IA?</p>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: DARK, textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 2.5rem' }}>
          No es lo mismo que Excel<br /><span style={{ color: ORANGE }}>o cualquier otra app.</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: DARK }}>
            <div style={{ padding: '1rem 1.25rem', fontFamily: SANS, fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Funcionalidad</div>
            {['Excel', 'Otras apps', 'Controla IA'].map((h, i) => (
              <div key={h} style={{ padding: '1rem 0.75rem', textAlign: 'center', fontFamily: SANS, fontSize: '0.8rem', fontWeight: 800, color: i === 2 ? ORANGE : 'rgba(255,255,255,0.7)' }}>{h}</div>
            ))}
          </div>
          {/* Rows */}
          {[
            ['Registro por WhatsApp', '✗', '✗', '✓'],
            ['IA que analiza tus gastos', '✗', 'parcial', '✓'],
            ['Alertas antes de quedarte en cero', '✗', 'parcial', '✓'],
            ['Lista de supermercado inteligente', '✗', '✗', '✓'],
            ['Control de vehículos', '✗', '✗', '✓'],
            ['Funciona sin disciplina extra', '✗', '✗', '✓'],
            ['Costo mensual', 'gratis', 'USD 5-15', <span style={{ color: ORANGE, fontWeight: 900 }}>USD 3.33</span>],
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: i % 2 === 0 ? WHITE : LIGHT, borderTop: `1px solid ${BORDER}` }}>
              <div style={{ padding: '0.875rem 1.25rem', fontFamily: SANS, fontSize: '0.8125rem', fontWeight: 600, color: DARK }}>{row[0]}</div>
              {[row[1], row[2], row[3]].map((cell, j) => (
                <div key={j} style={{ padding: '0.875rem 0.75rem', textAlign: 'center', fontFamily: SANS, fontSize: '0.8125rem', color: cell === '✓' ? '#16a34a' : cell === '✗' ? '#ef4444' : MUTED, fontWeight: cell === '✓' || cell === '✗' ? 800 : 500, background: j === 2 ? 'rgba(244,140,37,0.04)' : 'transparent' }}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── BONUSES SECTION ──────────────────────────────────────────────────────────

const BonusesSection: React.FC = () => (
  <section style={{ background: WHITE, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <Reveal>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, textAlign: 'center', margin: '0 0 0.75rem' }}>🎁 Incluido gratis</p>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: DARK, textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 0.75rem' }}>
          5 recursos para dominar tus finanzas
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, textAlign: 'center', margin: '0 0 2.5rem' }}>
          Se desbloquean al completar los 7 días de garantía.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
          {[
            { emoji: '📕', title: 'Ebook: Finanzas para Asalariados', value: 'USD 19', desc: 'Guía completa para organizar tu sueldo desde cero, sin conocimientos previos.' },
            { emoji: '📗', title: 'Guía: Cómo dejar de vivir al día', value: 'USD 15', desc: '7 estrategias concretas para empezar a ahorrar aunque "no alcance".' },
            { emoji: '📊', title: 'Guía Rápida WhatsApp', value: 'USD 12', desc: 'Todos los comandos y atajos para registrar en segundos.' },
            { emoji: '✅', title: 'Checklist Mensual de Finanzas', value: 'USD 9', desc: '30 acciones concretas para cerrar cada mes con superávit.' },
            { emoji: '🚀', title: 'Guía: Tus primeros USD 1000 ahorrados', value: 'USD 19', desc: 'El plan paso a paso que usó Sofía para su primer gran ahorro.' },
          ].map((b, i) => (
            <div key={b.title} style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.1rem 1.25rem' }}>
              <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{b.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: SANS, fontSize: '0.9rem', fontWeight: 800, color: DARK, margin: '0 0 0.2rem' }}>{b.title}</p>
                <p style={{ fontFamily: SANS, fontSize: '0.775rem', color: MUTED, margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontFamily: SANS, fontSize: '0.65rem', color: MUTED, margin: 0, textDecoration: 'line-through' }}>{b.value}</p>
                <p style={{ fontFamily: SANS, fontSize: '0.75rem', fontWeight: 800, color: '#16a34a', margin: 0 }}>GRATIS</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div style={{ background: 'rgba(244,140,37,0.06)', border: `1.5px solid rgba(244,140,37,0.25)`, borderRadius: '1rem', padding: '1.25rem', textAlign: 'center' }}>
          <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: DARK, fontWeight: 700, margin: '0 0 0.25rem' }}>
            Valor total de los bonos: <span style={{ textDecoration: 'line-through', color: MUTED }}>USD 74</span>
          </p>
          <p style={{ fontFamily: SANS, fontSize: '1.0625rem', fontWeight: 900, color: ORANGE, margin: 0 }}>
            Incluidos gratis con cualquier plan 🎁
          </p>
        </div>
      </Reveal>

      {/* Bonuses image */}
      <Reveal delay={100}>
        <div style={{ marginTop: '2rem', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', border: `1px solid ${BORDER}` }}>
          <img src="/lp8/sistema finanzas/light-bonuses.png" alt="Bonos incluidos — Controla IA" style={{ width: '100%', display: 'block' }} />
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Lp11Page: React.FC = () => {
  const [countdown, setCountdown] = useState('09:59');
  const [faqOpen, setFaqOpen]     = useState<number | null>(null);

  useEffect(() => {
    trackMetaEvent('ViewContent', { content_name: 'lp11_view' });
    const target = getCountdownTarget();
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);
      const m = String(Math.floor((diff / 60000) % 60)).padStart(2, '0');
      const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
      setCountdown(`${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontFamily: SANS, background: WHITE, color: DARK, overflowX: 'hidden', paddingBottom: '5rem' }}>

      <SocialToast />
      <FloatingCTA />

      {/* ── STICKY NAV ──────────────────────────────────────────── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${BORDER}`, padding: '0.875rem 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 32, height: 32, background: ORANGE, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ color: WHITE, fontSize: '1rem' }}>grid_view</span>
            </div>
            <span style={{ fontFamily: SANS, fontSize: '0.9rem', fontWeight: 800, color: DARK }}>Controla IA</span>
          </div>
          <a
            href="#oferta"
            onClick={() => trackMetaEvent('Lead', { content_name: 'lp11_nav_cta' })}
            className="cta-shine btn-glow-orange"
            style={{ background: ORANGE, color: WHITE, padding: '0.5rem 1.25rem', borderRadius: '0.625rem', fontSize: '0.8rem', fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Ver planes →
          </a>
        </div>
      </nav>

      {/* ── HERO — HOOK EMOCIONAL ────────────────────────────────── */}
      <section style={{ background: `linear-gradient(180deg, #080e1a 0%, #0f172a 100%)`, padding: 'clamp(3.5rem,8vw,6rem) 1.5rem clamp(3rem,6vw,5rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(244,140,37,0.12)', border: '1px solid rgba(244,140,37,0.3)', color: ORANGE, padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '2rem' }}>
            📖 Una historia real de cambio financiero
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,6vw,3.25rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', color: WHITE, margin: '0 0 1.5rem' }}>
            Cómo Sofía pasó de<br />
            <span style={{ color: ORANGE }}>quedarse sin plata</span><br />
            a ahorrar USD 480<br />
            en 4 meses
          </h1>
          <p style={{ fontSize: 'clamp(1rem,2.5vw,1.1875rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 2.5rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Sin cambiar de trabajo. Sin reducir salidas. Sin hojas de cálculo.<br />
            Solo con ver — por primera vez — exactamente a dónde se iba su dinero.
          </p>
          <a
            href="#historia"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: '2px' }}
          >
            Leer la historia completa ↓
          </a>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, borderBottom: `1px solid ${BORDER}`, padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', textAlign: 'center' }}>
          {[
            { n: 2400, suffix: '+', label: 'usuarios activos', emoji: '👥' },
            { n: 100,  suffix: '/mes', label: 'ahorro promedio USD', emoji: '💰' },
            { n: 4.9,  suffix: '★', label: 'puntuación media', emoji: '⭐' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '0.75rem', borderRight: i < 2 ? `1px solid ${BORDER}` : 'none' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{s.emoji}</div>
              <div style={{ fontSize: 'clamp(1.375rem,3vw,1.875rem)', fontWeight: 900, color: ORANGE, lineHeight: 1 }}>
                {typeof s.n === 'number' && Number.isInteger(s.n)
                  ? <Counter to={s.n} suffix={s.suffix} />
                  : `${s.n}${s.suffix}`}
              </div>
              <div style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.25rem', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HISTORIA DE SOFÍA ────────────────────────────────────── */}
      <section id="historia" style={{ maxWidth: '680px', margin: '0 auto', padding: 'clamp(3rem,7vw,5rem) 1.5rem' }}>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', padding: '1.5rem', background: LIGHT, borderRadius: '1.25rem', border: `1px solid ${BORDER}` }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sofía" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${ORANGE}`, flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: DARK, margin: '0 0 0.2rem' }}>Sofía Ramírez, 29 años</p>
              <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED, margin: 0 }}>Asistente administrativa · Asunción, Paraguay</p>
              <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: ORANGE, fontWeight: 700, margin: '0.25rem 0 0' }}>★★★★★ Usuaria desde Enero 2026</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p style={{ fontSize: 'clamp(0.75rem,1.5vw,0.8125rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: ORANGE, margin: '0 0 1.25rem' }}>El punto de partida</p>
          <h2 style={{ fontSize: 'clamp(1.625rem,4vw,2.375rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: DARK, margin: '0 0 1.5rem' }}>
            "Ganaba bien. Pero siempre llegaba al 20 del mes sin saber a dónde se había ido todo."
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p style={{ fontSize: '1.0625rem', color: MUTED, lineHeight: 1.8, margin: '0 0 1.25rem' }}>
            Sofía trabajaba hace 4 años en la misma empresa. Tenía un sueldo estable, sin deudas grandes, sin gastos locos. Sin embargo, cada fin de mes era igual: revisaba su cuenta y no entendía por qué no le quedaba nada.
          </p>
          <p style={{ fontSize: '1.0625rem', color: MUTED, lineHeight: 1.8, margin: '0 0 2rem' }}>
            Intentó planillas de Excel. Las abandonó en 2 semanas. Probó apps de presupuesto. Demasiado complicado. Decidió que "simplemente no era buena con el dinero" y dejó de intentarlo.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote style={{ borderLeft: `4px solid ${ORANGE}`, paddingLeft: '1.5rem', margin: '0 0 2.5rem', background: LIGHT, padding: '1.5rem 1.5rem 1.5rem 1.75rem', borderRadius: '0 1rem 1rem 0' }}>
            <p style={{ fontFamily: SANS, fontSize: '1.125rem', fontWeight: 700, color: DARK, lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
              "Me convencí de que el problema era que no ganaba suficiente. Pero la realidad era que no sabía exactamente a dónde se iba lo que ganaba."
            </p>
          </blockquote>
        </Reveal>

        {/* Separator */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2.5rem 0' }}>
            <div style={{ flex: 1, height: 1, background: BORDER }} />
            <span style={{ fontSize: '1.25rem' }}>💡</span>
            <div style={{ flex: 1, height: 1, background: BORDER }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p style={{ fontSize: 'clamp(0.75rem,1.5vw,0.8125rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: ORANGE, margin: '0 0 1.25rem' }}>El descubrimiento</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: DARK, margin: '0 0 1.5rem' }}>
            Un martes a las 11pm, revisando el celular, encontró algo diferente.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: MUTED, lineHeight: 1.8, margin: '0 0 1.25rem' }}>
            No era otra app complicada. Era <strong style={{ color: DARK }}>Controla IA</strong> — un sistema que usaba inteligencia artificial para organizar sus finanzas automáticamente. Solo tenía que mandar un mensaje por WhatsApp: "Gasté $80.000 en supermercado" y el sistema lo registraba, categorizaba y analizaba solo.
          </p>
          <p style={{ fontSize: '1.0625rem', color: MUTED, lineHeight: 1.8, margin: '0 0 2rem' }}>
            Sofía lo dudó. Había intentado tantas cosas. Pero el precio era menor a una pizza. Y tenía 7 días de garantía. Así que lo probó.
          </p>
        </Reveal>

        {/* Screenshot dashboard */}
        <Reveal delay={100}>
          <div style={{ margin: '0 0 1rem', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: `1px solid ${BORDER}` }}>
            <img src="/lp8/sistema finanzas/sf-dashboard.png" alt="Dashboard Controla IA" style={{ width: '100%', display: 'block' }} />
          </div>
          <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: MUTED, textAlign: 'center', margin: '0 0 2.5rem', fontStyle: 'italic' }}>
            El panel que Sofía vio por primera vez — todo su dinero en un solo lugar.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote style={{ borderLeft: `4px solid ${ORANGE}`, padding: '1.5rem 1.5rem 1.5rem 1.75rem', borderRadius: '0 1rem 1rem 0', background: LIGHT, margin: '0 0 2.5rem' }}>
            <p style={{ fontFamily: SANS, fontSize: '1.125rem', fontWeight: 700, color: DARK, lineHeight: 1.6, margin: '0 0 0.75rem', fontStyle: 'italic' }}>
              "La primera semana que lo usé descubrí que gastaba USD 60 al mes en suscripciones que ni recordaba tener. Solo con cancelar esas, ya había 'encontrado' dinero que no sabía que perdía."
            </p>
            <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED, margin: 0 }}>— Sofía, primer mes con Controla IA</p>
          </blockquote>
        </Reveal>

        {/* Separator */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2.5rem 0' }}>
            <div style={{ flex: 1, height: 1, background: BORDER }} />
            <span style={{ fontSize: '1.25rem' }}>📈</span>
            <div style={{ flex: 1, height: 1, background: BORDER }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p style={{ fontSize: 'clamp(0.75rem,1.5vw,0.8125rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: ORANGE, margin: '0 0 1.25rem' }}>Los resultados</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: DARK, margin: '0 0 1.5rem' }}>
            En 4 meses, Sofía transformó completamente su relación con el dinero.
          </h2>
        </Reveal>

        {/* Results cards */}
        <Reveal delay={100}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '0 0 2rem' }}>
            {[
              { emoji: '💰', value: 'USD 480', label: 'ahorrados en 4 meses', color: '#10b981' },
              { emoji: '💳', value: 'USD 0', label: 'de deuda de tarjeta', color: '#3b82f6' },
              { emoji: '✈️', value: '1er viaje', label: 'pagado con ahorros propios', color: ORANGE },
              { emoji: '😴', value: 'Tranquilidad', label: 'financiera todos los meses', color: '#8b5cf6' },
            ].map(r => (
              <div key={r.label} style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.25rem', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{r.emoji}</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: r.color, lineHeight: 1, marginBottom: '0.3rem' }}>{r.value}</div>
                <div style={{ fontSize: '0.75rem', color: MUTED, fontWeight: 600, lineHeight: 1.4 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p style={{ fontSize: '1.0625rem', color: MUTED, lineHeight: 1.8, margin: '0 0 1.25rem' }}>
            No cambió de trabajo. No recortó salidas. No se privó de nada importante. Solo empezó a tener <strong style={{ color: DARK }}>visibilidad real</strong> de sus finanzas por primera vez en su vida.
          </p>
          <p style={{ fontSize: '1.0625rem', color: MUTED, lineHeight: 1.8, margin: '0 0 2rem' }}>
            Hoy, Sofía tiene su primer fondo de emergencia, su tarjeta de crédito en cero y — por primera vez en años — siente que el dinero trabaja para ella y no al revés.
          </p>
        </Reveal>

        <Reveal>
          <blockquote style={{ borderLeft: `4px solid ${ORANGE}`, padding: '1.5rem 1.5rem 1.5rem 1.75rem', borderRadius: '0 1rem 1rem 0', background: LIGHT, margin: '0 0 3rem' }}>
            <p style={{ fontFamily: SANS, fontSize: '1.1875rem', fontWeight: 700, color: DARK, lineHeight: 1.6, margin: '0 0 0.75rem', fontStyle: 'italic' }}>
              "Lo que más me sorprendió no fue el ahorro. Fue la tranquilidad. Por primera vez en años llegué al fin de mes sabiendo exactamente cuánto tenía y cuánto iba a tener el mes que viene."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sofía" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
              <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED, margin: 0 }}>Sofía Ramírez · Asunción, Paraguay · Usuaria desde Enero 2026</p>
            </div>
          </blockquote>
        </Reveal>

      </section>

      {/* ── QUÉ INCLUYE ─────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: 'clamp(3rem,7vw,5rem) 1.5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, textAlign: 'center', margin: '0 0 0.75rem' }}>Lo que vas a tener</p>
            <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.625rem,4vw,2.5rem)', fontWeight: 900, color: WHITE, textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 3rem' }}>
              El sistema completo que usó Sofía<br />
              <span style={{ color: ORANGE }}>— y que podés usar vos hoy.</span>
            </h2>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { img: '/lp8/sistema finanzas/sf-dashboard.png', title: '📊 Panel 360 de tus finanzas', desc: 'Todos tus ingresos, gastos, cuentas e inversiones en un solo lugar. Sin hojas de cálculo, sin complicaciones.' },
              { img: '/lp8/sistema finanzas/sf-metas.png', title: '🎯 Metas con monto diario sugerido', desc: 'Definís tu meta — viaje, auto, fondo de emergencia — y Controla IA te dice exactamente cuánto guardar por día.' },
              { img: '/lp8/sistema finanzas/sf-supermercado.png', title: '🛒 Lista de supermercado inteligente', desc: 'Nunca más comprés lo que ya tenés. El sistema sabe tu stock y te genera la lista automáticamente.' },
              { img: '/lp8/sistema finanzas/sf-vehiculos.png', title: '🚗 Control de vehículos', desc: 'Alertas antes de que venza el service, recordatorios de mantenimiento y registro de todos los gastos del auto.' },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', overflow: 'hidden' }}>
                  <img src={m.img} alt={m.title} style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: '1.25rem' }}>
                    <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: WHITE, margin: '0 0 0.4rem' }}>{m.title}</p>
                    <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* WhatsApp feature */}
          <Reveal delay={100}>
            <div style={{ margin: '1.5rem 0 0', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '1.25rem', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, background: '#dcfce7', borderRadius: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>💬</div>
                <div>
                  <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: WHITE, margin: '0 0 0.4rem' }}>Registrá por WhatsApp en segundos</p>
                  <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.65 }}>Mandá un mensaje como "gasté $50 en taxi" y Controla IA lo registra, categoriza y analiza automáticamente. Sin abrir apps extra.</p>
                </div>
              </div>
              <img
                src="/lp8/sistema finanzas/sf-whatsapp.png"
                alt="Registro por WhatsApp — Controla IA"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VIDEO ───────────────────────────────────────────────── */}
      <VideoSection ctaHref="#oferta" />

      {/* ── TIMELINE ────────────────────────────────────────────── */}
      <TimelineSection />

      {/* ── ANTES VS DESPUÉS ────────────────────────────────────── */}
      <BeforeAfter />

      {/* ── MÁS HISTORIAS ───────────────────────────────────────── */}
      <section style={{ background: LIGHT, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, textAlign: 'center', margin: '0 0 0.75rem' }}>Otras historias</p>
            <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: DARK, textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 2.5rem' }}>
              Sofía no es la única.
            </h2>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { text: '💰 Ahorré USD 280 en 2 meses sin cambiar de estilo de vida. Solo viendo a dónde se iba mi plata.', name: 'Juan Cáceres', meta: '32 años · Asunción, Paraguay', since: 'Marzo 2026', photo: 'https://randomuser.me/api/portraits/men/34.jpg' },
              { text: '💰 Pensé que el problema era mi sueldo. Era que gastaba USD 180 al mes en cosas que ni usaba. Ya no.', name: 'José Rodríguez', meta: '41 años · Bogotá, Colombia', since: 'Enero 2026', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { text: '💰 La función de despensa me ahorró USD 120 el primer mes. Dejé de comprar lo que ya tenía en casa.', name: 'Ana Martínez', meta: '35 años · Buenos Aires, Argentina', since: 'Marzo 2026', photo: 'https://randomuser.me/api/portraits/women/17.jpg' },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.875rem' }}>
                    {[1,2,3,4,5].map(j => <span key={j} style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★</span>)}
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: '1rem', color: DARK, lineHeight: 1.7, margin: '0 0 1rem', fontWeight: 600 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.875rem', borderTop: `1px solid ${BORDER}` }}>
                    <img src={t.photo} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: `2px solid rgba(244,140,37,0.3)` }} />
                    <div>
                      <p style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 700, color: DARK, margin: 0 }}>{t.name} — {t.meta}</p>
                      <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: ORANGE, fontWeight: 600, margin: 0 }}>★★★★★ Usuario desde {t.since}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARATIVA ─────────────────────────────────────────── */}
      <ComparisonTable />

      {/* ── BONOS ───────────────────────────────────────────────── */}
      <BonusesSection />

      {/* ── OFERTA ──────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, margin: '0 0 0.75rem' }}>La pregunta que te tenés que hacer</p>
              <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.625rem,4vw,2.5rem)', fontWeight: 900, color: DARK, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 1rem' }}>
                ¿Cuánto te está costando<br />
                <span style={{ color: ORANGE }}>no saber a dónde va tu plata?</span>
              </h2>
              <p style={{ fontFamily: SANS, fontSize: '1.0625rem', color: MUTED, lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 2rem' }}>
                Si Sofía perdía USD 60/mes en suscripciones olvidadas, ¿cuánto estás perdiendo vos sin darte cuenta? Controla IA cuesta menos que eso por mes entero.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <PricingBlock countdown={countdown} />
          </Reveal>
        </div>
      </section>

      {/* ── GARANTÍA ────────────────────────────────────────────── */}
      <section style={{ background: LIGHT, padding: 'clamp(2.5rem,5vw,4rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
        <Reveal>
          <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: '3rem', flexShrink: 0 }}>🛡️</span>
            <div>
              <p style={{ fontFamily: SANS, fontSize: '1.125rem', fontWeight: 900, color: DARK, margin: '0 0 0.5rem' }}>Garantía oficial 7 días</p>
              <p style={{ fontFamily: SANS, fontSize: '0.9375rem', color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Si en los primeros 7 días sentís que Controla IA no te ayuda a entender mejor tus finanzas, te devolvemos el <strong style={{ color: DARK }}>100% del dinero</strong>. Sin preguntas, sin formularios, sin demoras.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: 'clamp(3rem,7vw,5rem) 1.5rem', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.375rem,3.5vw,2rem)', fontWeight: 900, color: DARK, textAlign: 'center', letterSpacing: '-0.02em', margin: '0 0 2rem' }}>
              Preguntas frecuentes
            </h2>
          </Reveal>

          {[
            { q: '¿Funciona si no tengo conocimientos de finanzas?', a: 'Sí. De hecho está diseñado específicamente para personas sin experiencia. Si podés usar WhatsApp, podés usar Controla IA. No hay curvas de aprendizaje.' },
            { q: '¿Necesito disciplina para mantenerlo?', a: 'No. Esa es justamente la diferencia. El sistema hace el trabajo por vos. Solo usalo 5 minutos al día — el resto es automático.' },
            { q: '¿En qué países funciona?', a: 'En todos los países de habla hispana de Latinoamérica: Argentina, Paraguay, Colombia, México, Chile, Perú, Uruguay, Venezuela y más.' },
            { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, cuando quieras, sin compromisos ni penalidades. Y si no quedás conforme en los primeros 7 días, te devolvemos el dinero.' },
            { q: '¿Mis datos financieros están seguros?', a: 'Totalmente. Tus datos son tuyos. Nunca los compartimos ni usamos para entrenar IA. Conexión encriptada en todo momento.' },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{ borderBottom: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', fontFamily: SANS }}
                >
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: DARK }}>{f.q}</span>
                  <span style={{ color: ORANGE, fontSize: '1.25rem', flexShrink: 0, transition: 'transform 250ms', transform: faqOpen === i ? 'rotate(45deg)' : 'none', fontWeight: 300 }}>+</span>
                </button>
                {faqOpen === i && <p style={{ fontFamily: SANS, fontSize: '0.9375rem', color: MUTED, paddingBottom: '1.25rem', margin: 0, lineHeight: 1.7 }}>{f.a}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: 'clamp(3.5rem,8vw,6rem) 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: ORANGE, margin: '0 0 1rem' }}>El próximo paso es tuyo</p>
            <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 900, color: WHITE, letterSpacing: '-0.025em', lineHeight: 1.1, margin: '0 0 1.25rem' }}>
              Sofía empezó igual que vos.<br />
              <span style={{ color: ORANGE }}>La diferencia fue que actuó.</span>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 2.5rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              El problema no es tu sueldo. Es que no tenés visibilidad. En 5 minutos podés tenerla.
            </p>
            <a
              href="#oferta"
              onClick={() => trackMetaEvent('Lead', { content_name: 'lp11_final_cta' })}
              className="cta-shine btn-glow-orange"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: ORANGE, color: WHITE, padding: '1.1rem 2.5rem', borderRadius: '1rem', fontSize: '1.125rem', fontWeight: 900, textDecoration: 'none', fontFamily: SANS }}
            >
              👉 Quiero controlar mi dinero
            </a>
            <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', margin: '1rem 0 0' }}>
              🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ background: '#080e1a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
          © 2026 Controla IA · <a href="https://wa.link/wcvh0b" style={{ color: ORANGE, textDecoration: 'none' }}>Soporte por WhatsApp</a> · Garantía 7 días sin preguntas
        </p>
      </footer>

    </div>
  );
};

export default Lp11Page;
