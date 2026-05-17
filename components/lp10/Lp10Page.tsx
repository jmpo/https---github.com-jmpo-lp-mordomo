
import React, { useState, useEffect } from 'react';
import { trackMetaEvent } from '../../metaPixel';
import { getCountdownTarget } from '../../countdownTarget';

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Option {
  label: string;
  emoji: string;
  score: number; // 1=más dolor → 4=menos dolor
}

interface Question {
  id: number;
  category: string;
  question: string;
  options: Option[];
}

interface Profile {
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  bg: string;
  ring: string;
  diagnosis: string;
  ctaCopy: string;
}

// ─── QUIZ DATA ────────────────────────────────────────────────────────────────

const questions: Question[] = [
  {
    id: 1,
    category: 'Tu situación actual',
    question: '¿Cómo terminás económicamente a fin de mes?',
    options: [
      { emoji: '😩', label: 'Sin plata — siempre me queda poco o nada',     score: 1 },
      { emoji: '😬', label: 'Justo justo — por poco no me alcanza',          score: 2 },
      { emoji: '😕', label: 'Me queda algo, pero no sé exactamente cuánto',  score: 3 },
      { emoji: '😌', label: 'Ahorro algo, aunque sin una estrategia clara',  score: 4 },
    ],
  },
  {
    id: 2,
    category: 'Visibilidad financiera',
    question: '¿Sabés exactamente en qué gastaste tu plata este mes?',
    options: [
      { emoji: '🙈', label: 'Para nada — prefiero no mirar',           score: 1 },
      { emoji: '🤷', label: 'Más o menos, pero sin datos reales',      score: 2 },
      { emoji: '📝', label: 'Llevo algo en papel o mental',            score: 3 },
      { emoji: '📊', label: 'Uso una planilla, pero me cuesta seguirla', score: 4 },
    ],
  },
  {
    id: 3,
    category: 'Tu mayor fuga',
    question: '¿Cuál creés que es tu mayor "fuga" de dinero cada mes?',
    options: [
      { emoji: '🛒', label: 'Compras impulsivas que no planeé',                   score: 1 },
      { emoji: '📱', label: 'Suscripciones o cargos que olvidé cancelar',         score: 1 },
      { emoji: '🍔', label: 'Comidas, salidas — gastos del día a día',            score: 2 },
      { emoji: '🤷', label: 'Honestamente no sé — por eso nunca puedo ahorrar',  score: 1 },
    ],
  },
  {
    id: 4,
    category: 'Tus ahorros',
    question: '¿Cuánto lográs ahorrar en un mes normal?',
    options: [
      { emoji: '🚫', label: 'Nada — el sueldo no alcanza o se gasta solo', score: 1 },
      { emoji: '💸', label: 'Muy poco — menos de lo que me gustaría',      score: 2 },
      { emoji: '🤏', label: 'Algo, pero sin un objetivo claro',             score: 3 },
      { emoji: '💰', label: 'Lo que puedo, pero quiero mejorar',            score: 4 },
    ],
  },
  {
    id: 5,
    category: 'Tu nivel de urgencia',
    question: '¿Hace cuánto tiempo querés organizar tus finanzas?',
    options: [
      { emoji: '😮‍💨', label: 'Desde siempre — lo pienso pero nunca arranco',   score: 1 },
      { emoji: '🔄', label: 'Lo intenté varias veces pero no lo sostengo',      score: 2 },
      { emoji: '📅', label: 'Lo quiero hacer este mes',                          score: 3 },
      { emoji: '🚀', label: 'Estoy listo/a — solo me falta la herramienta',     score: 4 },
    ],
  },
];

// ─── RESULT PROFILES ──────────────────────────────────────────────────────────

const getProfile = (totalScore: number, answers: number[]): Profile => {
  if (totalScore <= 8) return {
    title: 'Tu dinero tiene fuga crítica',
    subtitle: 'Nivel: Control Cero 🔴',
    emoji: '🚨',
    color: '#ef4444',
    bg: 'linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 100%)',
    ring: 'rgba(239,68,68,0.3)',
    diagnosis: 'Tu dinero desaparece cada mes sin que sepas exactamente por qué. Esto no es falta de voluntad — es falta de visibilidad. Sin un sistema claro, cada mes es igual al anterior: esfuerzo sin resultados.',
    ctaCopy: '🚨 Necesito tomar control ahora',
  };
  if (totalScore <= 14) return {
    title: 'Estás en zona de riesgo financiero',
    subtitle: 'Nivel: En Riesgo 🟡',
    emoji: '⚠️',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #1a1200 0%, #2d1f00 100%)',
    ring: 'rgba(245,158,11,0.3)',
    diagnosis: 'Tenés algo de consciencia financiera, pero sin un sistema que lo haga automático sigues dependiendo de la fuerza de voluntad. Y la fuerza de voluntad se acaba. Necesitás estructura, no más esfuerzo.',
    ctaCopy: '⚠️ Quiero salir de la zona de riesgo',
  };
  return {
    title: 'Estás cerca — solo te falta el sistema',
    subtitle: 'Nivel: Casi Ahí 🟢',
    emoji: '✅',
    color: '#10b981',
    bg: 'linear-gradient(135deg, #001a10 0%, #002d1a 100%)',
    ring: 'rgba(16,185,129,0.3)',
    diagnosis: 'Ya tenés hábitos y consciencia financiera, pero sin automatización estás dejando dinero sobre la mesa. Con las herramientas correctas podés optimizar lo que ya hacés y llegar a tus metas mucho más rápido.',
    ctaCopy: '✅ Quiero optimizar mis finanzas',
  };
};

// ─── PLANS ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Mensual',
    monthly: 5,
    charge: 5,
    compareAt: null as number | null,
    saving: null as number | null,
    discount: null as number | null,
    cta: 'Empezar por USD 5',
    href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6',
    slug: 'plan_mensual',
    popular: false,
    bestValue: false,
    features: ['Acceso completo', 'Panel con IA', 'Registro por WhatsApp', 'Soporte incluido'],
  },
  {
    name: 'Semestral',
    monthly: 4.17,
    charge: 24.99,
    compareAt: 30 as number | null,
    saving: 5 as number | null,
    discount: 17 as number | null,
    cta: '🔥 Elegir Semestral',
    href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
    slug: 'plan_semestral',
    popular: true,
    bestValue: false,
    features: ['Todo del plan mensual', 'Hábitos financieros', 'Seguimiento mensual', 'Más claridad'],
  },
  {
    name: 'Anual',
    monthly: 3.33,
    charge: 39.99,
    compareAt: 60 as number | null,
    saving: 20 as number | null,
    discount: 33 as number | null,
    cta: '⚡ Mejor precio — Anual',
    href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6',
    slug: 'plan_anual',
    popular: false,
    bestValue: true,
    features: ['Todo lo anterior', 'Control 12 meses', 'Resultados sostenibles', '☕ Menos que un café/día'],
  },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────

const CSS = `
  .lp10 * { box-sizing: border-box; }
  .lp10 {
    font-family: Manrope, sans-serif;
    background: #080e1a;
    color: #fff;
    min-height: 100vh;
  }

  /* Progress */
  .lp10-progress-bar {
    height: 4px;
    background: rgba(255,255,255,0.08);
    border-radius: 9999px;
    overflow: hidden;
  }
  .lp10-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #f48c25, #f5b668);
    border-radius: 9999px;
    transition: width 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  /* Question card */
  .lp10-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.1rem 1.4rem;
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 1rem;
    cursor: pointer;
    transition: all 220ms ease;
    text-align: left;
    width: 100%;
    color: #fff;
    font-family: Manrope, sans-serif;
  }
  .lp10-option:hover {
    background: rgba(244,140,37,0.08);
    border-color: rgba(244,140,37,0.4);
    transform: translateX(6px);
  }
  .lp10-option.selected {
    background: rgba(244,140,37,0.18);
    border-color: #f48c25;
    transform: translateX(6px) scale(1.01);
    box-shadow: 0 0 0 4px rgba(244,140,37,0.12);
  }
  @keyframes lp10-option-pulse {
    0%   { box-shadow: 0 0 0 0   rgba(244,140,37,0.5); }
    70%  { box-shadow: 0 0 0 12px rgba(244,140,37,0); }
    100% { box-shadow: 0 0 0 0   rgba(244,140,37,0); }
  }
  .lp10-option.selected { animation: lp10-option-pulse 0.5s ease-out; }
  .lp10-option-emoji {
    font-size: 1.75rem;
    flex-shrink: 0;
    width: 2.5rem;
    text-align: center;
  }
  .lp10-option-text {
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.4;
  }

  /* Slide transition */
  @keyframes lp10-slide-in {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes lp10-slide-out {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-40px); }
  }
  .lp10-slide-in  { animation: lp10-slide-in  380ms cubic-bezier(0.22,1,0.36,1) forwards; }
  .lp10-slide-out { animation: lp10-slide-out 220ms ease forwards; }

  /* Result reveal */
  @keyframes lp10-fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .lp10-fade-up { animation: lp10-fade-up 500ms cubic-bezier(0.22,1,0.36,1) both; }
  .lp10-delay-1 { animation-delay: 0.1s; }
  .lp10-delay-2 { animation-delay: 0.2s; }
  .lp10-delay-3 { animation-delay: 0.3s; }
  .lp10-delay-4 { animation-delay: 0.4s; }
  .lp10-delay-5 { animation-delay: 0.5s; }

  /* Plan card */
  .lp10-plan {
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 1.25rem;
    padding: 1.75rem;
    position: relative;
    transition: transform 250ms, box-shadow 250ms;
    flex: 1;
    min-width: 240px;
  }
  .lp10-plan:hover { transform: translateY(-4px); }
  .lp10-plan.popular {
    border-color: #f48c25;
    box-shadow: 0 0 0 4px rgba(244,140,37,0.12);
  }
  .lp10-plan.bestvalue {
    border-color: #10b981;
    box-shadow: 0 0 0 4px rgba(16,185,129,0.12);
  }
  .lp10-plan-badge {
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 0.3rem 1.1rem;
    border-radius: 9999px;
    white-space: nowrap;
    color: #fff;
  }
  .lp10-plan-btn {
    display: block;
    width: 100%;
    padding: 0.9rem;
    border-radius: 0.75rem;
    font-family: Manrope, sans-serif;
    font-size: 0.9375rem;
    font-weight: 800;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: all 220ms;
    margin-top: 1.25rem;
  }

  /* Meter / score bar */
  @keyframes lp10-meter {
    from { width: 0; }
  }
  .lp10-meter-fill { animation: lp10-meter 1.2s cubic-bezier(0.34,1.56,0.64,1) both 0.6s; }

  @media(max-width: 640px) {
    .lp10-plans-grid { flex-direction: column !important; }
    .lp10-plan { min-width: unset; }
    .lp10-modules-grid { grid-template-columns: 1fr !important; }
    .lp10-stats-grid  { grid-template-columns: 1fr 1fr !important; }
  }
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

type Stage = 'intro' | 'quiz' | 'loading' | 'result';

const Lp10Page: React.FC = () => {
  const [stage, setStage]           = useState<Stage>('intro');
  const [current, setCurrent]       = useState(0);          // question index
  const [answers, setAnswers]       = useState<number[]>([]); // score per question
  const [selected, setSelected]     = useState<number | null>(null);
  const [animating, setAnimating]   = useState(false);
  const [countdown, setCountdown]   = useState('09:59');

  // Countdown sync
  useEffect(() => {
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

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const profile    = getProfile(totalScore, answers);

  const progress = stage === 'intro'   ? 0
                 : stage === 'quiz'    ? ((current) / questions.length) * 100
                 : 100;

  // ── Start quiz
  const startQuiz = () => {
    trackMetaEvent('Lead', { content_name: 'quiz_start' });
    setStage('quiz');
    setCurrent(0);
    setAnswers([]);
  };

  // ── Select option + auto-advance
  const selectOption = (score: number, optionIndex: number) => {
    if (animating) return;
    setSelected(optionIndex);
    trackMetaEvent('Lead', { content_name: `quiz_q${current + 1}_answered` });

    setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);
        setSelected(null);

        if (current < questions.length - 1) {
          setCurrent(current + 1);
          setAnimating(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setStage('loading');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            const total = newAnswers.reduce((a, b) => a + b, 0);
            const p = getProfile(total, newAnswers);
            trackMetaEvent('Lead', { content_name: 'quiz_result', content_category: p.title });
            setStage('result');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 2200);
        }
      }, 280);
    }, 450);
  };

  // ─── INTRO ────────────────────────────────────────────────────────────────

  if (stage === 'intro') {
    return (
      <div className="lp10">
        <style>{CSS}</style>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.25rem', gap: '2rem', textAlign: 'center' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(244,140,37,0.12)', border: '1px solid rgba(244,140,37,0.3)', color: '#f48c25', padding: '0.45rem 1.1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            🧠 Test financiero — 2 minutos
          </div>

          <h1 style={{ fontSize: 'clamp(1.875rem, 6vw, 3.25rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '640px', margin: 0 }}>
            ¿Sabés por qué <span style={{ color: '#f48c25' }}>no te alcanza</span> el dinero?
          </h1>

          <p style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: '480px', margin: 0 }}>
            Respondé 5 preguntas y descubrí exactamente en qué etapa están tus finanzas — y qué hacer para mejorarlas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
            {['⏱ Solo 2 minutos', '🔒 100% privado', '🎯 Resultado personalizado'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(255,255,255,0.05)', padding: '0.35rem 0.9rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
            ))}
          </div>

          <button
            onClick={startQuiz}
            className="cta-shine btn-glow-orange"
            style={{ background: '#f48c25', color: '#fff', border: 'none', borderRadius: '1rem', padding: '1.1rem 3rem', fontSize: '1.125rem', fontWeight: 900, cursor: 'pointer', fontFamily: 'Manrope, sans-serif' }}
          >
            Hacer el test →
          </button>

          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            +2,400 personas ya conocen su perfil financiero
          </p>
        </div>
      </div>
    );
  }

  // ─── LOADING ──────────────────────────────────────────────────────────────

  if (stage === 'loading') {
    return (
      <div className="lp10">
        <style>{CSS}</style>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '2rem', textAlign: 'center' }}>
          <LoadingDots />
          <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>Analizando tus respuestas…</p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>Preparando tu perfil financiero personalizado</p>
        </div>
      </div>
    );
  }

  // ─── RESULT ───────────────────────────────────────────────────────────────

  if (stage === 'result') {
    const pct = Math.round((totalScore / (questions.length * 4)) * 100);
    // Resultado en tema CLARO (LP8) para generar confianza en la compra
    const R = { bg: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0', cardBg: '#fff' };

    return (
      <div className="lp10" style={{ background: R.bg, color: R.text }}>
        <style>{CSS}</style>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem' }}>

          {/* Result header */}
          <div className="lp10-fade-up" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{profile.emoji}</div>
            <div style={{ display: 'inline-block', background: `${profile.color}18`, border: `1.5px solid ${profile.color}50`, color: profile.color, padding: '0.4rem 1.1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
              {profile.subtitle}
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 1rem', color: R.text }}>
              {profile.title}
            </h1>
            <p style={{ fontSize: '1rem', color: R.muted, lineHeight: 1.7, margin: 0 }}>
              {profile.diagnosis}
            </p>
          </div>

          {/* Score meter */}
          <div className="lp10-fade-up lp10-delay-1" style={{ background: R.cardBg, border: `1px solid ${R.border}`, borderRadius: '1.25rem', padding: '1.5rem 2rem', marginBottom: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: R.muted }}>Tu nivel de control financiero</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: profile.color }}>{pct}%</span>
            </div>
            <div style={{ height: 10, background: '#e2e8f0', borderRadius: 9999, overflow: 'hidden' }}>
              <div className="lp10-meter-fill" style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg, ${profile.color}, ${profile.color}cc)`, borderRadius: 9999 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Sin control</span>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Control total</span>
            </div>
          </div>

          {/* Answer summary */}
          <div className="lp10-fade-up lp10-delay-2" style={{ background: R.cardBg, border: `1px solid ${R.border}`, borderRadius: '1.25rem', padding: '1.5rem', marginBottom: '2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', margin: '0 0 1rem' }}>Tu diagnóstico</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {questions.map((q, i) => {
                const optionScore = answers[i];
                const opt = q.options.find(o => o.score === optionScore) || q.options[0];
                return (
                  <div key={q.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', paddingBottom: i < questions.length - 1 ? '0.75rem' : 0, borderBottom: i < questions.length - 1 ? `1px solid ${R.border}` : 'none' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>{opt.emoji}</span>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block', fontWeight: 600 }}>{q.category}</span>
                      <span style={{ fontSize: '0.875rem', color: R.text, fontWeight: 600 }}>{opt.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solution bridge */}
          <div className="lp10-fade-up lp10-delay-3" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', marginBottom: '0.75rem' }}>La solución</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 1rem', color: R.text }}>
              Controla IA organiza todo esto<br />
              <span style={{ color: '#f48c25' }}>automáticamente — por vos.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: R.muted, lineHeight: 1.65, maxWidth: '520px', margin: '0 auto' }}>
              En 5 minutos de configuración tenés visibilidad total de tu dinero. Sin planillas, sin disciplina extra, sin complicaciones.
            </p>
          </div>

          {/* ── STATS ──────────────────────────────────────────────── */}
          <div className="lp10-fade-up lp10-delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { value: '+2,400', label: 'usuarios activos', emoji: '👥' },
              { value: 'USD 100', label: 'ahorro promedio/mes', emoji: '💰' },
              { value: '5 min', label: 'para configurarlo', emoji: '⚡' },
            ].map(s => (
              <div key={s.label} style={{ background: R.cardBg, border: `1px solid ${R.border}`, borderRadius: '1rem', padding: '1.25rem 0.75rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{s.emoji}</div>
                <div style={{ fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 900, color: '#f48c25', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: R.muted, marginTop: '0.3rem', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── HOW IT WORKS ───────────────────────────────────────── */}
          <div className="lp10-fade-up lp10-delay-3" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', textAlign: 'center', marginBottom: '0.75rem' }}>Cómo funciona</p>
            <h3 style={{ fontSize: 'clamp(1.25rem,3.5vw,1.875rem)', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em', margin: '0 0 2rem', color: R.text }}>
              En 3 pasos tenés el control total
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: '01', emoji: '📲', title: 'Mandá un mensaje por WhatsApp', desc: '"Gasté $500 en supermercado" — Controla IA lo registra, categoriza y analiza automáticamente.' },
                { step: '02', emoji: '📊', title: 'Visualizá todo en tu dashboard', desc: 'Un solo panel con tus gastos, ingresos, metas y alertas. Todo en tiempo real, desde cualquier dispositivo.' },
                { step: '03', emoji: '💡', title: 'La IA te dice qué mejorar', desc: 'Recibís insights personalizados: dónde ahorrar, qué suscripciones cancelar, cuánto falta para tu meta.' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: R.cardBg, border: `1px solid ${R.border}`, borderRadius: '1rem', padding: '1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '0.75rem', background: 'rgba(244,140,37,0.12)', border: '1px solid rgba(244,140,37,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem' }}>
                    {s.emoji}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#f48c25', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>PASO {s.step}</span>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 800, color: R.text, margin: '0 0 0.35rem' }}>{s.title}</p>
                    <p style={{ fontSize: '0.8125rem', color: R.muted, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── MÓDULOS / SCREENSHOTS ──────────────────────────────── */}
          <div className="lp10-fade-up lp10-delay-3" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', textAlign: 'center', marginBottom: '0.75rem' }}>Lo que incluye</p>
            <h3 style={{ fontSize: 'clamp(1.25rem,3.5vw,1.875rem)', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em', margin: '0 0 2rem', color: R.text }}>
              Todo lo que vas a tener desde el día 1
            </h3>

            {/* Dashboard hero screenshot */}
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '1rem', boxShadow: '0 24px 64px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src="/lp8/sistema finanzas/sf-dashboard.png" alt="Dashboard Controla IA" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Module grid 2x2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { img: '/lp8/sistema finanzas/sf-metas.png',         label: '🎯 Metas financieras',       desc: 'Poné una meta y ve cuánto guardar por día' },
                { img: '/lp8/sistema finanzas/sf-supermercado.png',  label: '🛒 Lista de supermercado',   desc: 'Nunca más compres lo que ya tenés' },
                { img: '/lp8/sistema finanzas/sf-vehiculos.png',     label: '🚗 Mantenimiento vehículo',  desc: 'Alertas de service y gastos del auto' },
                { img: '/lp8/sistema finanzas/version dar/dark-whatsapp.png', label: '💬 Registro por WhatsApp', desc: 'Un mensaje y ya está registrado' },
              ].map(m => (
                <div key={m.label} style={{ background: R.cardBg, border: `1px solid ${R.border}`, borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ overflow: 'hidden', maxHeight: '160px' }}>
                    <img src={m.img} alt={m.label} style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  <div style={{ padding: '0.85rem' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 800, color: R.text, margin: '0 0 0.2rem' }}>{m.label}</p>
                    <p style={{ fontSize: '0.7rem', color: R.muted, margin: 0, lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── TESTIMONIOS ────────────────────────────────────────── */}
          <div className="lp10-fade-up lp10-delay-3" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', textAlign: 'center', marginBottom: '2rem' }}>Lo que dicen quienes ya lo usan</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { text: '💰 Ahorré USD 280 en 2 meses sin cambiar de estilo de vida. Solo viendo a dónde se iba mi plata.', name: 'Juan Cáceres', meta: '32 años · Asunción, Paraguay · Usuario desde Marzo 2026', photo: 'https://randomuser.me/api/portraits/men/34.jpg' },
                { text: '💰 Tenía miedo de ver mis gastos. Cuando los vi, entendí todo. En 6 semanas pagué mi deuda de tarjeta.', name: 'María García', meta: '28 años · Ciudad de México · Usuario desde Febrero 2026', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
                { text: '💰 Pensé que el problema era mi sueldo. Era que gastaba USD 180 al mes en cosas que ni usaba. Ya no.', name: 'José Rodríguez', meta: '41 años · Bogotá, Colombia · Usuario desde Enero 2026', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
              ].map(t => (
                <div key={t.name} style={{ background: R.cardBg, border: `1px solid ${R.border}`, borderRadius: '1rem', padding: '1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.75rem' }}>
                    {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: '0.875rem' }}>★</span>)}
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: R.text, lineHeight: 1.65, margin: '0 0 1rem', fontWeight: 600 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.75rem', borderTop: `1px solid ${R.border}` }}>
                    <img src={t.photo} alt={t.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(244,140,37,0.3)' }} />
                    <div>
                      <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: R.text, margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: '0.7rem', color: R.muted, margin: 0 }}>{t.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ MINI ───────────────────────────────────────────── */}
          <FaqMini />

          {/* Urgency */}
          <div className="lp10-fade-up lp10-delay-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <span style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '0.45rem 1.1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 800 }}>
              🔴 Solo quedan 7 cupos a este precio
            </span>
            <span style={{ background: 'rgba(244,140,37,0.1)', border: '1px solid rgba(244,140,37,0.3)', color: '#f48c25', padding: '0.45rem 1.1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 800 }}>
              ⏳ Oferta termina en <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 900 }}>{countdown}</span>
            </span>
          </div>

          {/* Pricing — tema claro LP8 */}
          <div className="lp10-fade-up lp10-delay-4">
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', textAlign: 'center', marginBottom: '1.5rem' }}>Elegí tu plan</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {plans.map(p => (
                <div
                  key={p.slug}
                  style={{
                    background: R.cardBg,
                    border: `2px solid ${p.popular ? '#f48c25' : p.bestValue ? '#10b981' : R.border}`,
                    borderRadius: '1.25rem',
                    padding: '1.5rem',
                    position: 'relative',
                    boxShadow: p.popular ? '0 8px 32px rgba(244,140,37,0.15)' : p.bestValue ? '0 8px 32px rgba(16,185,129,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {p.popular && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#f48c25', color: '#fff', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.1rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>🔥 Más Popular</div>}
                  {p.bestValue && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#10b981', color: '#fff', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.1rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>⚡ Mejor Valor</div>}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <p style={{ fontSize: '1.125rem', fontWeight: 900, color: R.text, margin: '0 0 0.2rem' }}>{p.name}</p>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 900, color: R.text, lineHeight: 1 }}>USD {p.monthly.toFixed(2)}</span>
                        <span style={{ fontSize: '0.75rem', color: R.muted }}>/mes</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: R.muted, margin: '0.2rem 0 0' }}>
                        Total: USD {p.charge.toFixed(2)}
                        {p.compareAt && <span style={{ textDecoration: 'line-through', marginLeft: '0.4rem', color: '#d1d5db' }}>USD {p.compareAt}</span>}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
                      {p.saving && p.discount && (
                        <span style={{ background: '#d1fae5', color: '#065f46', fontSize: '0.7rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                          💰 {p.discount}% OFF
                        </span>
                      )}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'flex-end' }}>
                        {p.features.map(f => (
                          <li key={f} style={{ fontSize: '0.75rem', color: R.muted, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <span style={{ color: '#f48c25' }}>✓</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={p.href}
                    onClick={() => trackMetaEvent('AddToCart', { content_ids: [p.slug], content_name: `${p.name} - Controla IA Quiz`, content_type: 'product', value: p.charge, currency: 'USD', num_items: 1 })}
                    className={`lp10-plan-btn cta-shine ${p.popular ? 'btn-glow-orange' : p.bestValue ? 'btn-glow-green' : 'btn-glow-blue btn-bounce'}`}
                    style={{ background: p.popular ? '#f48c25' : p.bestValue ? '#10b981' : '#2563eb', color: '#fff', marginTop: '1rem' }}
                  >
                    {p.cta}
                  </a>
                  <p style={{ fontSize: '0.65rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.5rem' }}>
                    🛡️ Garantía 7 días — Si no te ayuda, te devolvemos el 100%
                  </p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
              🔒 Pago seguro vía Hotmart · Visa · Mastercard · MercadoPago
            </p>
          </div>

          {/* Retake */}
          <div className="lp10-fade-up lp10-delay-5" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => {
                setStage('intro');
                setAnswers([]);
                setCurrent(0);
                setSelected(null);
                setAnimating(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.8125rem', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'Manrope, sans-serif' }}
            >
              Repetir el test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ ─────────────────────────────────────────────────────────────────

  const q = questions[current];

  return (
    <div className="lp10">
      <style>{CSS}</style>

      {/* Top bar con dots */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(8,14,26,0.92)', backdropFilter: 'blur(12px)', padding: '0.875rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            {questions.map((_, i) => (
              <div key={i} style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: 9999,
                background: i < current ? '#f48c25' : i === current ? '#f48c25' : 'rgba(255,255,255,0.15)',
                transition: 'all 400ms cubic-bezier(0.34,1.56,0.64,1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {i < current && (
                  <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3.5 6L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, margin: '0.35rem 0 0' }}>
            Pregunta {current + 1} de {questions.length}
          </p>
        </div>
      </div>

      {/* Question */}
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 3.5rem) 1.25rem' }}>
        <div className={animating ? 'lp10-slide-out' : 'lp10-slide-in'}>

          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', margin: '0 0 1rem' }}>
            {q.category}
          </p>

          <h2 style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 2rem' }}>
            {q.question}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                className={`lp10-option${selected === idx ? ' selected' : ''}`}
                onClick={() => selectOption(opt.score, idx)}
                disabled={animating}
              >
                <span className="lp10-option-emoji">{opt.emoji}</span>
                <span className="lp10-option-text">{opt.label}</span>
                {selected === idx && (
                  <span style={{ marginLeft: 'auto', color: '#f48c25', fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                )}
              </button>
            ))}
          </div>

          <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
            Tocá una opción para continuar
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── FAQ MINI ─────────────────────────────────────────────────────────────────

const faqs = [
  { q: '¿Necesito saber de finanzas para usarlo?', a: 'No. Si podés usar WhatsApp, podés usar Controla IA. Está diseñado para personas sin experiencia previa.' },
  { q: '¿Mis datos están seguros?', a: 'Sí. Tus datos son tuyos y no los compartimos con nadie. Conexión encriptada en todo momento.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, sin compromisos ni penalidades. Y si en los primeros 7 días no ves resultados, te devolvemos el 100%.' },
];

const FaqMini: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#f48c25', textAlign: 'center', marginBottom: '1.5rem' }}>Preguntas frecuentes</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.875rem', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', color: '#0f172a', fontFamily: 'Manrope, sans-serif' }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{f.q}</span>
              <span style={{ color: '#f48c25', fontSize: '1.25rem', flexShrink: 0, transition: 'transform 250ms', transform: open === i ? 'rotate(45deg)' : 'none', fontWeight: 300 }}>+</span>
            </button>
            {open === i && (
              <p style={{ fontSize: '0.875rem', color: '#64748b', padding: '0 1.25rem 1rem', margin: 0, lineHeight: 1.7 }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── LOADING DOTS ─────────────────────────────────────────────────────────────

const LoadingDots: React.FC = () => {
  const DOT_CSS = `
    @keyframes dot-bounce {
      0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
      40% { transform: scale(1); opacity: 1; }
    }
    .dot { animation: dot-bounce 1.4s ease-in-out infinite; }
    .dot:nth-child(1) { animation-delay: 0s; }
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }
  `;
  return (
    <>
      <style>{DOT_CSS}</style>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        {[0,1,2].map(i => (
          <div key={i} className="dot" style={{ width: 16, height: 16, borderRadius: '50%', background: '#f48c25' }} />
        ))}
      </div>
    </>
  );
};

export default Lp10Page;
