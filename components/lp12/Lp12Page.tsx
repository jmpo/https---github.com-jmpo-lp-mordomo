
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { trackMetaEvent } from '../../metaPixel';
import { getCountdownTarget } from '../../countdownTarget';

const ORANGE = '#f48c25';
const DARK   = '#0f172a';
const MUTED  = '#64748b';
const BORDER = '#e2e8f0';
const WHITE  = '#ffffff';
const LIGHT  = '#f8fafc';
const SANS   = 'Manrope, sans-serif';

// ─── PLANS ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Mensual', slug: 'plan_mensual', charge: 5, monthly: 5,
    compareAt: null as number|null, saving: null as number|null, discount: null as number|null,
    cta: 'Empezar por USD 5', href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6',
    popular: false, bestValue: false,
    color: '#2563eb',
  },
  {
    name: 'Semestral', slug: 'plan_semestral', charge: 24.99, monthly: 4.17,
    compareAt: 30 as number|null, saving: 5 as number|null, discount: 17 as number|null,
    cta: '🔥 Quiero el Semestral', href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
    popular: true, bestValue: false,
    color: ORANGE,
  },
  {
    name: 'Anual', slug: 'plan_anual', charge: 39.99, monthly: 3.33,
    compareAt: 60 as number|null, saving: 20 as number|null, discount: 33 as number|null,
    cta: '⚡ Mejor precio — Anual', href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6',
    popular: false, bestValue: true,
    color: '#10b981',
  },
];

// ─── VIDEO SECTION ────────────────────────────────────────────────────────────

// Video dura 1:57 (117s). Botón aparece a 1:45 (105s), mensaje "completado" a 1:57 (117s)
const VSL_CTA_AT      = 105; // 1:45
const VSL_DURATION    = 117; // 1:57

// Sin autoplay — el cliente apreta play y ahí arranca el timer
const BUNNY_SRC = 'https://player.mediadelivery.net/embed/364591/84ad3b37-1d70-4e88-abad-43515572ccdc?autoplay=false&loop=false&muted=false&preload=true&responsive=true';

const VideoBlock: React.FC<{ onCtaReveal: () => void }> = ({ onCtaReveal }) => {
  const iframeRef                   = useRef<HTMLIFrameElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [completed, setCompleted]   = useState(false);

  // ── Timer pausable ──────────────────────────────────────────
  const elapsed     = useRef(0);       // segundos acumulados mientras el video corre
  const tickRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const isRunning   = useRef(false);
  const ctaShown    = useRef(false);
  const endShown    = useRef(false);
  const hasStarted  = useRef(false);

  const showCta = () => {
    if (ctaShown.current) return;
    ctaShown.current = true;
    setCtaVisible(true);
    onCtaReveal();
    trackMetaEvent('Lead', { content_name: 'vsl_cta_revealed' });
    setTimeout(() => {
      document.getElementById('vsl-cta-btn')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
  };

  const resumeTimer = () => {
    if (isRunning.current) return;
    isRunning.current = true;
    tickRef.current = setInterval(() => {
      elapsed.current += 0.25;
      if (!ctaShown.current && elapsed.current >= VSL_CTA_AT) showCta();
      if (!endShown.current && elapsed.current >= VSL_DURATION) {
        endShown.current = true;
        setCompleted(true);
        trackMetaEvent('Lead', { content_name: 'vsl_completed' });
      }
    }, 250); // tick cada 250ms = precisión de ±0.25s
  };

  const pauseTimer = () => {
    if (!isRunning.current) return;
    isRunning.current = false;
    if (tickRef.current) clearInterval(tickRef.current);
  };

  const onPlay = () => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      trackMetaEvent('Lead', { content_name: 'vsl_started' });
    }
    resumeTimer();
  };

  // Limpiar al desmontar
  useEffect(() => {
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, []);

  // ── Plan A: postMessage de Bunny.net ─────────────────────────
  useEffect(() => {
    const handleMsg = (e: MessageEvent) => {
      if (!String(e.origin).includes('mediadelivery.net')) return;
      try {
        const d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        const ev = d?.event || d?.type || d?.action || '';

        // Timeupdate = el método más exacto: currentTime real del video
        if (ev === 'timeupdate' && typeof d?.currentTime === 'number') {
          elapsed.current = d.currentTime;
          if (!ctaShown.current && d.currentTime >= VSL_CTA_AT) showCta();
          if (!endShown.current && d.currentTime >= VSL_DURATION) {
            endShown.current = true;
            setCompleted(true);
          }
          return;
        }
        if (ev === 'play' || ev === 'playing')   onPlay();
        if (ev === 'pause' || ev === 'paused')   pauseTimer();
        if (ev === 'ended')                      { pauseTimer(); setCompleted(true); }
      } catch {}
    };
    window.addEventListener('message', handleMsg);
    return () => window.removeEventListener('message', handleMsg);
  }, []);

  // ── Plan B: window.blur (click en iframe = play) ─────────────
  useEffect(() => {
    const handleBlur = () => {
      if (document.activeElement === iframeRef.current) {
        setTimeout(onPlay, 600);
      }
    };
    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Bunny.net iframe — video vertical 9:16 */}
      <div style={{
        position: 'relative',
        paddingTop: 'min(177.78%, 58vh)',
        borderRadius: 'clamp(0.875rem,3vw,1.5rem)',
        overflow: 'hidden',
        background: '#000',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        maxWidth: '380px',
        margin: '0 auto',
      }}>
        <iframe
          ref={iframeRef}
          src={BUNNY_SRC}
          loading="lazy"
          style={{ border: 0, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen"
          allowFullScreen
        />
      </div>

      {/* Sin countdown visible — el botón aparece solo */}

      {/* CTA que aparece a los 1:45 — sin espacio antes de revelarse */}
      <div
        id="vsl-cta-btn"
        style={{
          marginTop: ctaVisible ? '1.25rem' : 0,
          maxHeight: ctaVisible ? '200px' : 0,
          overflow: 'hidden',
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.98)',
          transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), max-height 700ms ease, margin-top 700ms ease',
          pointerEvents: ctaVisible ? 'auto' : 'none',
          textAlign: 'center',
        }}
      >
        {completed && (
          <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: '#86efac', marginBottom: '0.875rem', fontWeight: 700 }}>
            ✅ ¡Terminaste! Ya sabés todo lo que necesitás.
          </p>
        )}
        <a
          href="#planes"
          onClick={() => trackMetaEvent('Lead', { content_name: 'vsl_main_cta' })}
          className="cta-shine btn-glow-orange"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
            background: ORANGE, color: WHITE,
            padding: '1rem 2rem',
            borderRadius: '1rem', fontSize: '1.0625rem',
            fontWeight: 900, textDecoration: 'none', fontFamily: SANS,
            width: '100%', justifyContent: 'center', boxSizing: 'border-box',
          }}
        >
          👉 Quiero controlar mi dinero
        </a>
        <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', margin: '0.6rem 0 0' }}>
          🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
        </p>
      </div>
    </div>
  );
};

// ─── FAQ MINI ─────────────────────────────────────────────────────────────────

const faqs = [
  { q: '¿Necesito conocimientos de finanzas?', a: 'No. Si podés usar WhatsApp, podés usar Controla IA. Diseñado para personas sin experiencia previa.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, sin compromisos. Y si no quedás conforme en los primeros 7 días, te devolvemos el 100% sin preguntas.' },
  { q: '¿En qué países funciona?', a: 'Argentina, Paraguay, Colombia, México, Chile, Perú, Uruguay, Venezuela y todo Latinoamérica hispanohablante.' },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const Lp12Page: React.FC = () => {
  const [countdown, setCountdown]   = useState('09:59');
  const [ctaRevealed, setCtaRevealed] = useState(false);
  const [faqOpen, setFaqOpen]       = useState<number | null>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackMetaEvent('ViewContent', { content_name: 'lp12_vsl_view' });
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

  const handleCtaReveal = () => {
    setCtaRevealed(true);
  };

  return (
    <div style={{ background: '#080e1a', color: WHITE, fontFamily: SANS, minHeight: '100vh' }}>

      {/* ── HERO + VIDEO ─────────────────────────────────────── */}
      <section style={{ maxWidth: '360px', margin: '0 auto', padding: '1.25rem 1rem 0' }}>

        {/* Headline compacto encima del video */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(244,140,37,0.12)', border: '1px solid rgba(244,140,37,0.3)', color: ORANGE, padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
            📹 Mirá este video — 2 min
          </div>
          <h1 style={{ fontSize: 'clamp(1.125rem,4.5vw,1.5rem)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', color: WHITE, margin: 0 }}>
            El problema no es cuánto ganás.{' '}
            <span style={{ color: ORANGE }}>Es no saber a dónde se va tu dinero.</span>
          </h1>
        </div>

        {/* VIDEO */}
        <VideoBlock onCtaReveal={handleCtaReveal} />

      </section>

      {/* ── MINI SOCIAL PROOF ────────────────────────────────── */}
      <section style={{ borderTop: ctaRevealed ? '1px solid rgba(255,255,255,0.07)' : 'none', borderBottom: ctaRevealed ? '1px solid rgba(255,255,255,0.07)' : 'none', padding: ctaRevealed ? '1rem' : 0, maxHeight: ctaRevealed ? '200px' : 0, overflow: 'hidden', opacity: ctaRevealed ? 1 : 0, transition: 'opacity 800ms ease 300ms, max-height 800ms ease 300ms, padding 800ms ease 300ms', pointerEvents: ctaRevealed ? 'auto' : 'none' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem', textAlign: 'center' }}>
          {[
            { emoji: '👥', value: '+2,400', label: 'usuarios' },
            { emoji: '💰', value: '$100/mes', label: 'ahorro prom.' },
            { emoji: '⭐', value: '4.9/5', label: 'puntuación' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 900, color: ORANGE }}>{s.emoji} {s.value}</div>
              <div style={{ fontFamily: SANS, fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLANES ───────────────────────────────────────────── */}
      <section id="planes" ref={pricingRef} style={{ maxWidth: '480px', margin: '0 auto', padding: ctaRevealed ? 'clamp(2rem,5vw,3.5rem) 1rem' : 0, maxHeight: ctaRevealed ? '9999px' : 0, overflow: 'hidden', opacity: ctaRevealed ? 1 : 0, transform: ctaRevealed ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 800ms ease 400ms, transform 800ms ease 400ms, max-height 1s ease 400ms, padding 800ms ease 400ms', pointerEvents: ctaRevealed ? 'auto' : 'none' }}>

        {/* Urgencia */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <span style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800 }}>
            🔴 Solo quedan 7 cupos a este precio
          </span>
          <span style={{ background: 'rgba(244,140,37,0.12)', border: '1px solid rgba(244,140,37,0.3)', color: ORANGE, padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 800 }}>
            ⏳ Oferta termina en <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 900 }}>{countdown}</span>
          </span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 900, color: WHITE, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 0.75rem' }}>
            Elegí tu plan y empezá hoy
          </h2>
          <p style={{ fontFamily: SANS, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            Menos que un café al mes. Garantía 7 días sin preguntas.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {plans.map(p => (
            <div
              key={p.slug}
              style={{
                background: p.popular ? 'rgba(244,140,37,0.07)' : p.bestValue ? 'rgba(16,185,129,0.05)' : 'rgba(255,255,255,0.04)',
                border: `2px solid ${p.popular ? ORANGE : p.bestValue ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '1.25rem',
                padding: '1.5rem',
                position: 'relative',
                boxShadow: p.popular ? `0 0 0 6px rgba(244,140,37,0.08)` : 'none',
              }}
            >
              {p.popular && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: ORANGE, color: WHITE, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.1rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>🔥 Más Popular</div>}
              {p.bestValue && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#10b981', color: WHITE, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.1rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>⚡ Mejor Valor</div>}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <p style={{ fontFamily: SANS, fontSize: '1.125rem', fontWeight: 900, color: WHITE, margin: '0 0 0.35rem' }}>{p.name}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                    <span style={{ fontFamily: SANS, fontSize: '2.25rem', fontWeight: 900, color: WHITE, lineHeight: 1 }}>USD {p.monthly.toFixed(2)}</span>
                    <span style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>/mes</span>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: '0.2rem 0 0' }}>
                    Total: USD {p.charge.toFixed(2)}
                    {p.compareAt && <span style={{ textDecoration: 'line-through', marginLeft: '0.4rem', color: 'rgba(255,255,255,0.2)' }}>USD {p.compareAt}</span>}
                  </p>
                </div>
                {p.saving && p.discount && (
                  <span style={{ background: '#d1fae5', color: '#065f46', fontSize: '0.75rem', fontWeight: 800, padding: '0.35rem 0.875rem', borderRadius: '9999px', alignSelf: 'flex-start' }}>
                    💰 {p.discount}% OFF
                  </span>
                )}
              </div>

              <a
                href={p.href}
                onClick={() => trackMetaEvent('AddToCart', { content_ids: [p.slug], content_name: `${p.name} - LP12 VSL`, content_type: 'product', value: p.charge, currency: 'USD', num_items: 1 })}
                className={`cta-shine ${p.popular ? 'btn-glow-orange' : p.bestValue ? 'btn-glow-green' : 'btn-glow-blue'}`}
                style={{
                  display: 'block', width: '100%', padding: '1rem',
                  borderRadius: '0.875rem', background: p.color, color: WHITE,
                  fontFamily: SANS, fontWeight: 800, fontSize: '1rem',
                  textAlign: 'center', textDecoration: 'none',
                  boxSizing: 'border-box',
                }}
              >
                {p.cta} →
              </a>
              <p style={{ fontFamily: SANS, fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '0.5rem' }}>
                🛡️ Garantía 7 días — Si no te ayuda, te devolvemos el 100%, sin preguntas.
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: SANS, textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', margin: '0 0 3rem' }}>
          🔒 Pago seguro vía Hotmart · Visa · Mastercard · MercadoPago
        </p>

        {/* Garantía */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '1.25rem', padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>🛡️</span>
          <div>
            <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 900, color: WHITE, margin: '0 0 0.4rem' }}>Garantía oficial 7 días</p>
            <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
              Si en los primeros 7 días sentís que Controla IA no te ayuda a entender mejor tus finanzas, te devolvemos el <strong style={{ color: WHITE }}>100% del dinero</strong>. Sin preguntas, sin formularios.
            </p>
          </div>
        </div>

        {/* FAQ mini */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontFamily: SANS, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: ORANGE, textAlign: 'center', marginBottom: '1.25rem' }}>
            Preguntas frecuentes
          </p>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', fontFamily: SANS, color: WHITE }}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{f.q}</span>
                <span style={{ color: ORANGE, fontSize: '1.25rem', flexShrink: 0, transition: 'transform 250ms', transform: faqOpen === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {faqOpen === i && (
                <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', paddingBottom: '1rem', margin: 0, lineHeight: 1.7 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={plans[1].href}
            onClick={() => trackMetaEvent('AddToCart', { content_ids: ['plan_semestral'], content_name: 'Plan Semestral - LP12 Final', content_type: 'product', value: 24.99, currency: 'USD', num_items: 1 })}
            className="cta-shine btn-glow-orange"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: ORANGE, color: WHITE, padding: '1.1rem 2.5rem', borderRadius: '1rem', fontSize: '1.125rem', fontWeight: 900, textDecoration: 'none', fontFamily: SANS }}
          >
            👉 Empezar ahora
          </a>
          <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.875rem' }}>
            🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem', textAlign: 'center', opacity: ctaRevealed ? 1 : 0, transition: 'opacity 800ms ease' }}>
        <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
          © 2026 Controla IA · <a href="https://wa.link/wcvh0b" style={{ color: ORANGE, textDecoration: 'none' }}>Soporte WhatsApp</a> · Garantía 7 días
        </p>
      </footer>

    </div>
  );
};

export default Lp12Page;
