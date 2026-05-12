
import React, { useState } from 'react';
import { trackMetaEvent } from '../../metaPixel';

// ─── SCREENSHOTS REALES DE CONTROLA IA ───────────────────────────────────────
const IMG_MOCKUP_HERO  = '/lp8/mockup-hero.png';
const IMG_SOCIAL_PROOF = '/lp8/muestra%20plataforma.png';
const IMG_DASHBOARD   = '/lp8/dashboard.jpg';
const IMG_METAS       = '/lp8/metas.jpg';
const IMG_MERCADO     = '/lp8/lista%20super.jpg';
const IMG_VEHICULOS   = '/lp8/mantenimiento%20vehiculos.jpg';
const IMG_INVERSIONES = '/lp8/inversiones.jpg';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const ORANGE  = '#f48c25';
const ORANGE2 = '#e07a1b';
const DARK    = '#111827';
const MUTED   = '#6b7280';
const LIGHT   = '#f9fafb';
const BORDER  = '#e5e7eb';
const WHITE   = '#ffffff';

const SANS = 'Manrope, sans-serif';

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ fontFamily: SANS, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: ORANGE, background: `${ORANGE}18`, border: `1px solid ${ORANGE}30`, borderRadius: '9999px', padding: '0.3rem 0.9rem', display: 'inline-block' }}>
    {children}
  </span>
);

const PrimaryBtn: React.FC<{ label: string; event: string; href?: string; large?: boolean }> = ({ label, event, href = '#oferta', large }) => (
  <a
    href={href}
    onClick={() => trackMetaEvent('Lead', { content_name: event })}
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
      background: ORANGE, color: WHITE, fontFamily: SANS, fontWeight: 800,
      fontSize: large ? '1.125rem' : '1rem',
      padding: large ? '1rem 2.5rem' : '0.875rem 2rem',
      borderRadius: '0.75rem', textDecoration: 'none', cursor: 'pointer',
      transition: 'all 250ms', boxShadow: `0 4px 24px ${ORANGE}40`,
      border: 'none',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = ORANGE2; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = ORANGE; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
  >
    {label}
  </a>
);

// ─── 1. NAV ───────────────────────────────────────────────────────────────────

const Nav8: React.FC = () => (
  <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: WHITE, borderBottom: `1px solid ${BORDER}`, boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }}>
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: 36, height: 36, background: ORANGE, borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="material-symbols-outlined" style={{ color: WHITE, fontSize: '1.1rem' }}>grid_view</span>
        </div>
        <div>
          <p style={{ fontFamily: SANS, fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: MUTED, margin: 0 }}>Controla IA</p>
          <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: DARK, margin: 0, lineHeight: 1 }}>Sueldo sin fugas</p>
        </div>
      </div>

      <div style={{ display: 'none' }} className="lp8-nav-links">
        {['Cómo funciona', 'Funciones', 'Precios', 'FAQ'].map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(/\s/g,'-').replace('ó','o').replace('ú','u')}`} style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 600, color: MUTED, textDecoration: 'none' }}>{l}</a>
        ))}
      </div>

      <PrimaryBtn label="👉 Ver planes" event="lp8_nav_cta" href="#precios" />
    </div>
    <style>{`@media(min-width:768px){.lp8-nav-links{display:flex!important;gap:2rem;}}`}</style>
  </nav>
);

// ─── 2. HERO ──────────────────────────────────────────────────────────────────

const Hero8: React.FC = () => (
  <section style={{ background: WHITE, padding: '5rem 1.5rem 4rem' }}>
    <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Tag>Para asalariados en Latinoamérica</Tag>
        </div>
        <h1 style={{ fontFamily: SANS, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', color: DARK, margin: 0 }}>
          Controla tus finanzas<br />
          fácilmente con{' '}
          <span style={{ color: ORANGE }}>Inteligencia Artificial.</span>
        </h1>
        <p style={{ fontFamily: SANS, fontSize: '1.0625rem', color: MUTED, lineHeight: 1.65, fontWeight: 400, margin: 0, maxWidth: '32rem' }}>
          Registrá tus gastos en segundos y ve todo detallado en tu dashboard — ingresos, ahorros, despensa y metas — de forma automática.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <PrimaryBtn label="👉 Empezar a controlar mis finanzas" event="lp8_hero_cta" href="#precios" large />
          <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED, margin: 0 }}>
            🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
          </p>
        </div>

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem' }}>
          <div style={{ display: 'flex' }}>
            {['44','17','63','32'].map((n) => (
              <img key={n} src={`https://randomuser.me/api/portraits/${parseInt(n) % 2 === 0 ? 'men' : 'women'}/${n}.jpg`} alt="" style={{ width: 32, height: 32, borderRadius: '50%', border: `2px solid ${WHITE}`, marginLeft: -8, objectFit: 'cover' }} />
            ))}
          </div>
          <div>
            <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: '0.875rem' }}>★</span>)}</div>
            <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: MUTED, margin: 0 }}>+2,400 usuarios activos</p>
          </div>
        </div>
      </div>

      {/* Right — mockup real multi-device */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <img
          src={IMG_MOCKUP_HERO}
          alt="Controla IA en todos tus dispositivos"
          style={{ width: '100%', maxWidth: '520px', height: 'auto', display: 'block', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.12))' }}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '9999px', padding: '0.4rem 1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
            <p style={{ fontFamily: SANS, fontSize: '0.8rem', fontWeight: 700, color: DARK, margin: 0 }}>+2,400 usuarios activos</p>
          </div>
          <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '9999px', padding: '0.4rem 1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.9rem' }}>💰</span>
            <p style={{ fontFamily: SANS, fontSize: '0.8rem', fontWeight: 700, color: DARK, margin: 0 }}>Ahorro promedio $100/mes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── 3. PAIN POINTS ───────────────────────────────────────────────────────────

const pains = [
  { emoji: '😩', text: 'Llega fin de mes y no sé a dónde se fue mi dinero' },
  { emoji: '🔄', text: 'Probé apps de finanzas, las abandoné todas en una semana' },
  { emoji: '💳', text: 'Mis gastos crecen y nunca me alcanza para ahorrar' },
  { emoji: '🛒', text: 'Compro cosas que ya tenía en casa y tiro dinero sin querer' },
  { emoji: '😰', text: 'Vivo con la angustia de que no va a llegar a fin de mes' },
  { emoji: '😓', text: 'Trabajo mucho pero siento que no avanzo nunca' },
];

const PainSection8: React.FC = () => (
  <section style={{ background: LIGHT, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Tag>El problema</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          No estás solo. Millones en Latinoamérica<br />sienten lo mismo.
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, maxWidth: '36rem', margin: '0 auto' }}>El problema no es cuánto ganás. Es que nadie te dio las herramientas para verlo.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {pains.map((p, i) => (
          <div key={i} style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{p.emoji}</span>
            <p style={{ fontFamily: SANS, fontSize: '0.9375rem', fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.45 }}>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 4. CÓMO FUNCIONA ─────────────────────────────────────────────────────────

const steps8 = [
  { n: '01', emoji: '📱', title: 'Accedés al sistema', desc: 'Comprás y en segundos ya estás adentro. Desde tu celular o computadora.' },
  { n: '02', emoji: '📸', title: 'Escaneás tus tickets', desc: 'Sacás una foto al comprobante. La IA lee el monto y categoriza automáticamente.' },
  { n: '03', emoji: '📊', title: 'Ves todo en tu panel', desc: 'Un solo lugar para tus gastos, tu despensa y tus metas. Sin excel ni libretas.' },
  { n: '04', emoji: '🏆', title: 'Empezás a ahorrar', desc: 'Desde el primer mes. Menos fugas, más claridad, primeros ahorros reales.' },
];

const HowItWorks8: React.FC = () => (
  <section id="como-funciona" style={{ background: WHITE, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <Tag>Cómo funciona</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Empieza en menos de 5 minutos
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED }}>4 pasos. Sin complicaciones.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {steps8.map((s) => (
          <div key={s.n} style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '1.25rem', padding: '1.75rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: SANS, fontSize: '0.65rem', fontWeight: 800, color: `${ORANGE}60`, letterSpacing: '0.08em' }}>{s.n}</div>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{s.emoji}</span>
            <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: DARK, margin: '0 0 0.5rem' }}>{s.title}</p>
            <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 5. DEMO / MOCKUP ─────────────────────────────────────────────────────────

// ─── FEATURES SHOWCASE (alternating text + screenshot) ───────────────────────

const showcaseItems = [
  {
    tag: 'Dashboard',
    title: 'Sistema de Finanzas Personales',
    desc: 'Todo separado, todo bajo control. Tus cuentas, gastos e ingresos en tiempo real.',
    points: ['Ingresos y gastos separados', 'Dashboard inteligente', 'Salud financiera en tiempo real', 'Reportes claros y automáticos'],
    img: IMG_DASHBOARD,
    reverse: false,
  },
  {
    tag: 'Metas',
    title: 'Sistema de Metas Financieras',
    desc: 'Planificá, ahorrá y cumplí tus objetivos. Paso a paso, sin complicaciones.',
    points: ['Creá tus objetivos', 'Seguimiento automático', 'Progreso visual claro', 'Motivación constante'],
    img: IMG_METAS,
    reverse: true,
  },
  {
    tag: 'Vehículos',
    title: 'Sistema de Mantenimiento de Vehículos',
    desc: 'Controlá servicios, gastos y mantenimientos para que nunca te tome por sorpresa.',
    points: ['Recordatorios automáticos', 'Historial por vehículo', 'Control de gastos', 'Todo en un solo lugar'],
    img: IMG_VEHICULOS,
    reverse: false,
  },
  {
    tag: 'Mercado',
    title: 'Lista de Supermercado Inteligente',
    desc: 'Creá, compartí y gestioná tus compras sin complicaciones desde el celular.',
    points: ['Creá listas desde el celular', 'Sin duplicados', 'Compartí o exportá', 'Compras más organizadas'],
    img: IMG_MERCADO,
    reverse: true,
  },
  {
    tag: 'Inversiones',
    title: 'Gestión de Inversiones',
    desc: 'Seguí tu portafolio, cobros pendientes y rendimientos. Todo organizado y claro.',
    points: ['Portafolio centralizado', 'Cobros y rendimientos', 'Historial completo', 'Alertas de vencimiento'],
    img: IMG_INVERSIONES,
    reverse: false,
  },
];

const FeaturesShowcase8: React.FC = () => (
  <section style={{ background: WHITE, padding: '4rem 1.5rem 2rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <Tag>Todo en uno</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Un sistema completo para tus finanzas
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED }}>Cada módulo diseñado para resolver un problema real.</p>
      </div>

      {showcaseItems.map((item, i) => (
        <div key={item.tag} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          padding: '3.5rem 0',
          borderTop: i > 0 ? `1px solid ${BORDER}` : 'none',
          direction: item.reverse ? 'rtl' : 'ltr',
        }}>
          {/* Text */}
          <div style={{ direction: 'ltr' }}>
            <Tag>{item.tag}</Tag>
            <h3 style={{ fontFamily: SANS, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: DARK, margin: '0.75rem 0 0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, lineHeight: 1.65, margin: '0 0 1.5rem' }}>{item.desc}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {item.points.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: SANS, fontSize: '0.9375rem', fontWeight: 600, color: DARK }}>
                  <span style={{ color: ORANGE, flexShrink: 0, fontSize: '1rem' }}>✓</span>{p}
                </li>
              ))}
            </ul>
          </div>
          {/* Screenshot */}
          <div style={{ direction: 'ltr' }}>
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', border: `1px solid ${BORDER}`, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const DemoSection8: React.FC = () => (
  <section style={{ background: LIGHT, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Tag>El producto real</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Así se ve Controla IA por dentro
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED }}>Panel claro, información al instante, sin complicaciones.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {[
          { img: IMG_DASHBOARD,   title: '📊 Dashboard General',       desc: 'Tus ingresos, gastos y saldo neto en tiempo real. Un vistazo y sabés cómo vas.' },
          { img: IMG_METAS,       title: '🎯 Metas de ahorro',          desc: 'Definís tu objetivo, el sistema te dice cuánto guardar por día para llegar.' },
          { img: IMG_MERCADO,     title: '🛒 Mercado e inventario',     desc: 'Lista de compras inteligente según lo que falta en tu despensa. Sin duplicados.' },
          { img: IMG_VEHICULOS,   title: '🚗 Control de vehículos',     desc: 'Registrá tus autos y recibí alertas de mantenimiento antes de que venzan.' },
          { img: IMG_INVERSIONES, title: '📈 Inversiones',              desc: 'Seguí tu portafolio, cobros pendientes y rendimientos en un solo lugar.' },
        ].map((item) => (
          <div key={item.title} style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <img src={item.img} alt={item.title} style={{ width: '100%', display: 'block', borderBottom: `1px solid ${BORDER}` }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
            <div style={{ padding: '1.25rem' }}>
              <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: DARK, margin: '0 0 0.35rem' }}>{item.title}</p>
              <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video demo */}
      <div style={{ marginTop: '3rem', background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: SANS, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.1em' }}>▶ Video real del producto</span>
        </div>
        <div style={{ paddingTop: '56.25%', position: 'relative' }}>
          <iframe
            src="https://player.mediadelivery.net/embed/364591/d1270fc1-fda6-4383-9a7b-36d9c9cde7ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
            loading="lazy" title="Controla IA demo"
            style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── 6. FEATURES GRID ─────────────────────────────────────────────────────────

const features8 = [
  { emoji: '📸', title: 'Escaneo con IA', desc: 'Foto al ticket → monto y categoría al instante' },
  { emoji: '📊', title: 'Dashboard General', desc: 'Ingresos, gastos, saldo neto y ratios en tiempo real' },
  { emoji: '🎯', title: 'Metas de ahorro', desc: 'Cuánto guardar por día para lograr tu objetivo' },
  { emoji: '🛒', title: 'Mercado e inventario', desc: 'Lista inteligente según lo que falta en despensa' },
  { emoji: '🚗', title: 'Control de vehículos', desc: 'Alertas de mantenimiento antes de que venzan' },
  { emoji: '📈', title: 'Inversiones', desc: 'Portafolio, cobros pendientes y rendimientos' },
  { emoji: '🚨', title: 'Alertas de saldo', desc: 'Avisamos antes de que te quedes en cero' },
  { emoji: '🔄', title: 'Cuentas fijas', desc: 'Alquiler, luz, internet en piloto automático' },
  { emoji: '🤖', title: 'Bot IA', desc: 'Análisis inteligente de tus finanzas con IA' },
  { emoji: '📋', title: 'Reportes', desc: 'Análisis detallado de tus patrones de gasto' },
];

const FeaturesSection8: React.FC = () => (
  <section id="funciones" style={{ background: WHITE, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <Tag>Funcionalidades</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Todo lo que necesitás<br />en un solo lugar
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {features8.map((f) => (
          <div key={f.title} style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', transition: 'box-shadow 250ms, border-color 250ms', cursor: 'default' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${ORANGE}18`; (e.currentTarget as HTMLDivElement).style.borderColor = `${ORANGE}40`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = BORDER; }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.875rem' }}>{f.emoji}</span>
            <p style={{ fontFamily: SANS, fontSize: '0.9375rem', fontWeight: 800, color: DARK, margin: '0 0 0.35rem' }}>{f.title}</p>
            <p style={{ fontFamily: SANS, fontSize: '0.8125rem', color: MUTED, margin: 0, lineHeight: 1.55 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 7. COMPARACIÓN SIN / CON ─────────────────────────────────────────────────

const ComparisonSection8: React.FC = () => (
  <section style={{ background: LIGHT, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Tag>La diferencia</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Con o sin Controla IA
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Sin */}
        <div style={{ background: WHITE, border: '1px solid #fca5a5', borderRadius: '1.25rem', padding: '2rem', boxShadow: '0 4px 16px rgba(239,68,68,0.06)' }}>
          <p style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ef4444', marginBottom: '1.5rem' }}>❌ Sin Controla</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {['No sabés en qué se fue tu plata', 'Comprás cosas que ya tenías', 'Llegás en cero cada mes', 'Ahorro siempre "para el próximo mes"', 'Angustia permanente de que no alcance'].map((t) => (
              <li key={t} style={{ fontFamily: SANS, fontSize: '0.875rem', color: '#6b7280', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ef4444', flexShrink: 0, marginTop: '0.1rem' }}>✕</span>{t}
              </li>
            ))}
          </ul>
        </div>
        {/* Con */}
        <div style={{ background: WHITE, border: `1px solid ${ORANGE}50`, borderRadius: '1.25rem', padding: '2rem', boxShadow: `0 4px 16px ${ORANGE}12` }}>
          <p style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: ORANGE, marginBottom: '1.5rem' }}>✅ Con Controla</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {['Claridad total de tus gastos', 'Despensa organizada, cero compras dobles', 'Primeros ahorros desde el mes 1', 'Metas reales con avance visible', 'Tranquilidad de saber que alcanza'].map((t) => (
              <li key={t} style={{ fontFamily: SANS, fontSize: '0.875rem', color: DARK, display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <span style={{ color: ORANGE, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ─── 8. TESTIMONIOS ───────────────────────────────────────────────────────────

const testimonials8 = [
  { name: 'María García', location: 'México', photo: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'En el primer mes entendí por qué nunca me alcanzaba. Ahora ya tengo mi primer ahorro real. No lo puedo creer.' },
  { name: 'José Rodríguez', location: 'Colombia', photo: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Pensé que era un tema de ganar más. No era eso. Era que no veía en qué gastaba. Vale cada centavo.' },
  { name: 'Ana Martínez', location: 'Argentina', photo: 'https://randomuser.me/api/portraits/women/17.jpg', text: 'Lo de la despensa me cambió la vida. En 2 meses ahorré $80 solo evitando compras que ya tenía.' },
];

// ─── PRUEBA SOCIAL BANNER ─────────────────────────────────────────────────────

const SocialProofBanner8: React.FC = () => (
  <section style={{ background: WHITE, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>

      {/* Foto */}
      <div style={{ position: 'relative' }}>
        <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
          <img
            src={IMG_SOCIAL_PROOF}
            alt="Usuario de Controla IA"
            style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '480px' }}
          />
        </div>
        {/* Badge sobre la foto */}
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: WHITE, borderRadius: '1rem', padding: '0.75rem 1.25rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem', border: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>)}</div>
          <p style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 700, color: DARK, margin: 0 }}>"Finalmente entendí mi dinero"</p>
        </div>
      </div>

      {/* Texto */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <Tag>Usuarios reales</Tag>
          <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Más de <span style={{ color: ORANGE }}>2,400 personas</span> ya controlan su dinero.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED, lineHeight: 1.65, margin: 0 }}>
            Asalariados de toda Latinoamérica que decidieron dejar de improvisar con sus finanzas y empezar a ahorrar de verdad.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { value: '+2,400', label: 'Usuarios activos', emoji: '👥' },
            { value: '$100/mes', label: 'Ahorro promedio', emoji: '💰' },
            { value: '4.9 ★', label: 'Puntuación media', emoji: '⭐' },
            { value: '5 min', label: 'Para configurar', emoji: '⚡' },
          ].map((s) => (
            <div key={s.label} style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.25rem', textAlign: 'center' }}>
              <p style={{ fontFamily: SANS, fontSize: '1.5rem', margin: '0 0 0.25rem' }}>{s.emoji}</p>
              <p style={{ fontFamily: SANS, fontSize: '1.5rem', fontWeight: 900, color: DARK, margin: '0 0 0.2rem' }}>{s.value}</p>
              <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: MUTED, margin: 0, fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <PrimaryBtn label="👉 Quiero ser el próximo" event="lp8_social_proof_cta" href="#precios" large />
      </div>
    </div>
  </section>
);

const TestimonialsSection8: React.FC = () => (
  <section style={{ background: WHITE, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Tag>Testimonios</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Personas reales. Resultados reales.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {testimonials8.map((t) => (
          <div key={t.name} style={{ background: LIGHT, border: `1px solid ${BORDER}`, borderRadius: '1.25rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.25rem' }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b' }}>★</span>)}</div>
            <p style={{ fontFamily: SANS, fontSize: '0.9375rem', color: DARK, lineHeight: 1.65, margin: 0, flex: 1 }}>"{t.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem', borderTop: `1px solid ${BORDER}` }}>
              <img src={t.photo} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 700, color: DARK, margin: 0 }}>{t.name}</p>
                <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: MUTED, margin: 0 }}>📍 {t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 9. PRICING ───────────────────────────────────────────────────────────────

const plans8 = [
  {
    name: 'Mensual', slug: 'plan_mensual', charge: 5, monthlyDisplay: 5, months: 1,
    label: 'Sin compromiso', desc: 'Probá el sistema y empezá a entender tu dinero desde ya.',
    features: ['Acceso completo al sistema', 'Panel de gastos con IA', 'Inventario de despensa', 'Empezás en minutos'],
    cta: 'Empezar por USD 5', href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6',
    popular: false,
  },
  {
    name: 'Semestral', slug: 'plan_semestral', charge: 24.99, monthlyDisplay: 4.17, months: 6,
    compareAt: 30, saving: 5, discount: 17,
    label: 'La mayoría empieza aquí', desc: 'Tiempo suficiente para generar hábitos financieros reales.',
    features: ['Todo del plan mensual', 'Hábitos financieros reales', 'Mejor seguimiento mensual', 'Más claridad mes a mes'],
    cta: 'Elegir Semestral', href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
    popular: true,
  },
  {
    name: 'Anual', slug: 'plan_anual', charge: 39.99, monthlyDisplay: 3.33, months: 12,
    compareAt: 60, saving: 20, discount: 33,
    label: 'Mejor decisión', desc: 'Control total durante todo el año. Menor costo, mayor beneficio.',
    features: ['Todo lo anterior', 'Control total 12 meses', 'Resultados sostenibles', '☕ Menos que un café al día'],
    cta: 'Elegir Anual', href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6',
    popular: false,
    bestValue: true,
  },
];

const PricingSection8: React.FC = () => (
  <section id="precios" style={{ background: LIGHT, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <Tag>Precios</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Menos que un café al mes.
        </h2>
        <p style={{ fontFamily: SANS, fontSize: '1rem', color: MUTED }}>Un asesor financiero cobra $50 la hora. Controla te cuesta menos.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
        {plans8.map((p) => (
          <div key={p.slug} style={{ background: WHITE, border: `2px solid ${p.popular ? ORANGE : BORDER}`, borderRadius: '1.25rem', padding: '2rem', position: 'relative', boxShadow: p.popular ? `0 8px 32px ${ORANGE}20` : '0 2px 8px rgba(0,0,0,0.04)' }}>
            {p.popular && (
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: ORANGE, color: WHITE, fontFamily: SANS, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.25rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>
                🔥 Más Popular
              </div>
            )}
            {p.bestValue && (
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#10b981', color: WHITE, fontFamily: SANS, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.3rem 1.25rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}>
                ⚡ Mejor Valor
              </div>
            )}

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: SANS, fontSize: '1.25rem', fontWeight: 800, color: DARK, margin: '0 0 0.25rem' }}>{p.name}</h3>
              <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: ORANGE, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.75rem' }}>{p.label}</p>
              <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, margin: 0, lineHeight: 1.55 }}>{p.desc}</p>
            </div>

            <div style={{ background: LIGHT, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '1.5rem', border: `1px solid ${BORDER}` }}>
              <p style={{ fontFamily: SANS, fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: ORANGE, margin: '0 0 0.5rem' }}>por mes</p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.25rem' }}>
                <span style={{ fontFamily: SANS, fontSize: '2.5rem', fontWeight: 900, color: DARK, lineHeight: 1 }}>USD {p.monthlyDisplay.toFixed(2)}</span>
                <span style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED }}>/mes</span>
              </div>
              <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED, margin: '0.5rem 0 0' }}>
                Total: USD {p.charge.toFixed(2)}
                {p.compareAt && <span style={{ textDecoration: 'line-through', color: '#d1d5db', marginLeft: '0.5rem', fontSize: '0.75rem' }}>USD {p.compareAt}</span>}
              </p>
              {p.saving && p.discount && (
                <span style={{ display: 'inline-block', marginTop: '0.5rem', background: '#d1fae5', color: '#065f46', fontFamily: SANS, fontSize: '0.7rem', fontWeight: 800, padding: '0.2rem 0.75rem', borderRadius: '9999px' }}>
                  💰 Ahorrás ${p.saving} · {p.discount}% OFF
                </span>
              )}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {p.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: SANS, fontSize: '0.875rem', color: DARK }}>
                  <span style={{ color: ORANGE, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
            </ul>

            <a
              href={p.href}
              onClick={() => trackMetaEvent('AddToCart', { content_ids: [p.slug], content_name: `${p.name} - Controla IA`, content_type: 'product', value: p.charge, currency: 'USD', num_items: 1 })}
              style={{ display: 'block', width: '100%', padding: '0.875rem', borderRadius: '0.75rem', background: p.popular ? ORANGE : 'transparent', border: `2px solid ${p.popular ? ORANGE : BORDER}`, color: p.popular ? WHITE : DARK, fontFamily: SANS, fontWeight: 800, fontSize: '0.9375rem', textAlign: 'center', textDecoration: 'none', cursor: 'pointer', transition: 'all 250ms', boxSizing: 'border-box' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = p.popular ? ORANGE2 : LIGHT; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = p.popular ? ORANGE : 'transparent'; }}
            >
              {p.cta}
            </a>
            <p style={{ fontFamily: SANS, fontSize: '0.7rem', color: '#9ca3af', textAlign: 'center', margin: '0.75rem 0 0' }}>🛡️ Garantía 7 días sin preguntas</p>
          </div>
        ))}
      </div>

      {/* Guarantee banner */}
      <div style={{ marginTop: '3rem', background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '2.5rem' }}>🛡️</span>
          <div>
            <p style={{ fontFamily: SANS, fontSize: '1rem', fontWeight: 800, color: DARK, margin: '0 0 0.25rem' }}>GARANTÍA OFICIAL 7 DÍAS</p>
            <p style={{ fontFamily: SANS, fontSize: '0.875rem', color: MUTED, margin: 0 }}>Si no ves resultados, te devolvemos el dinero sin preguntas. Sin riesgo.</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['🔒 Pago seguro', '⚡ Acceso inmediato', '🚫 Cancela cuando quieras'].map((t) => (
            <span key={t} style={{ fontFamily: SANS, fontSize: '0.8rem', color: MUTED, fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── 10. FAQ ──────────────────────────────────────────────────────────────────

const faqs8 = [
  { q: '¿Necesito conocimientos financieros?', a: 'Para nada. Controla IA está diseñado para personas sin experiencia. Si podés usar WhatsApp, podés usar Controla.' },
  { q: '¿Qué pasa si no soy disciplinado?', a: 'No necesitás disciplina. El sistema hace el trabajo por vos. Solo usalo 5 minutos al día — el resto es automático.' },
  { q: '¿Desde qué dispositivo puedo usarlo?', a: 'Desde tu celular, tablet o computadora. Compatible con todos los navegadores modernos.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, sin compromisos ni penalidades. Y si no quedás conforme en los primeros 7 días, te devolvemos el dinero.' },
  { q: '¿Es seguro? ¿Qué pasa con mis datos?', a: 'Tus datos son tuyos. No los compartimos ni usamos para entrenar IA. Conexión encriptada siempre.' },
];

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
        <span style={{ fontFamily: SANS, fontSize: '0.9375rem', fontWeight: 700, color: DARK }}>{q}</span>
        <span style={{ color: ORANGE, fontSize: '1.25rem', flexShrink: 0, transition: 'transform 250ms', transform: open ? 'rotate(45deg)' : 'rotate(0)', fontWeight: 300 }}>+</span>
      </button>
      {open && <p style={{ fontFamily: SANS, fontSize: '0.9rem', color: MUTED, paddingBottom: '1.25rem', lineHeight: 1.7, margin: 0 }}>{a}</p>}
    </div>
  );
};

const FaqSection8: React.FC = () => (
  <section id="faq" style={{ background: WHITE, padding: '6rem 1.5rem', borderTop: `1px solid ${BORDER}` }}>
    <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Tag>Preguntas frecuentes</Tag>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: DARK, margin: '1rem 0 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Resolvemos tus dudas
        </h2>
      </div>
      {faqs8.map((f) => <FaqItem key={f.q} {...f} />)}
    </div>
  </section>
);

// ─── 11. FINAL CTA ────────────────────────────────────────────────────────────

const FinalCta8: React.FC = () => (
  <section style={{ background: DARK, padding: '6rem 1.5rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '40rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
      <h2 style={{ fontFamily: SANS, fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: WHITE, letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>
        Empezá hoy.<br />
        <span style={{ color: ORANGE }}>Resultados desde el primer mes.</span>
      </h2>
      <p style={{ fontFamily: SANS, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.65 }}>
        Más de 2,400 personas ya controlan sus finanzas con Controla IA.<br />Vos podés ser la siguiente.
      </p>
      <PrimaryBtn label="👉 Quiero tener control de mi dinero" event="lp8_final_cta" large />
      <p style={{ fontFamily: SANS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
        🛡️ Garantía 7 días · 🔒 Pago seguro · ⚡ Acceso inmediato
      </p>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────

const Footer8: React.FC = () => (
  <footer style={{ background: DARK, borderTop: '1px solid rgba(255,255,255,0.08)', padding: '3rem 1.5rem' }}>
    <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: 32, height: 32, background: ORANGE, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="material-symbols-outlined" style={{ color: WHITE, fontSize: '1rem' }}>grid_view</span>
        </div>
        <p style={{ fontFamily: SANS, fontSize: '0.875rem', fontWeight: 800, color: WHITE, margin: 0 }}>Controla IA</p>
      </div>
      <p style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2025 Controla IA. Todos los derechos reservados.</p>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="https://wa.link/wcvh0b" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#25D366', color: WHITE, fontFamily: SANS, fontWeight: 700, fontSize: '0.8rem', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Soporte
        </a>
        <a href="https://demo.controla.site/" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: SANS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
          Ver demo
        </a>
      </div>
    </div>
  </footer>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const Lp8Page: React.FC = () => (
  <div style={{ background: WHITE, color: DARK, minHeight: '100vh' }}>
    <Nav8 />
    <main>
      <Hero8 />
      <PainSection8 />
      <HowItWorks8 />
      <FeaturesShowcase8 />
      <DemoSection8 />
      <FeaturesSection8 />
      <ComparisonSection8 />
      <SocialProofBanner8 />
      <TestimonialsSection8 />
      <PricingSection8 />
      <FaqSection8 />
      <FinalCta8 />
    </main>
    <Footer8 />
  </div>
);

export default Lp8Page;
