
import React from 'react';
import PricingSection from '../PricingSection';
import Footer from '../Footer';
import { trackMetaEvent } from '../../metaPixel';

const IMG_HERO    = '/lp8/sistema finanzas/version dar/dark-hero.png';
const IMG_BONUSES = '/lp8/sistema finanzas/light-bonuses.png';

const LP9_CSS = `
.lp9 * { box-sizing: border-box; }
.lp9 { font-family: Manrope, sans-serif; background: #fff; color: #0f172a; }

/* ── NAV ── */
.lp9-nav-wrap {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f1f5f9;
}
.lp9-nav {
  max-width: 1280px; margin: 0 auto;
  padding: 0 1.5rem; height: 64px;
  display: flex; align-items: center; justify-content: space-between;
}
.lp9-nav-logo { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
.lp9-nav-icon {
  width: 36px; height: 36px; background: #f48c25;
  border-radius: 0.6rem; display: flex; align-items: center; justify-content: center;
}
.lp9-nav-text-top  { font-size: 0.6rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.16em; color: #6b7280; margin: 0; }
.lp9-nav-text-bot  { font-size: 1rem; font-weight: 800; color: #0f172a; line-height: 1; margin: 0; }
.lp9-nav-cta {
  background: linear-gradient(135deg,#2563eb,#1d4ed8);
  color: white; padding: 0.6rem 1.5rem; border-radius: 0.75rem;
  font-size: 0.875rem; font-weight: 700; text-decoration: none;
  box-shadow: 0 4px 16px rgba(37,99,235,.3); transition: .25s ease;
}
.lp9-nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,.35); }

/* ── HERO SECTION ── */
.lp9-hero {
  position: relative; overflow: hidden;
  background:
    radial-gradient(circle at 15% 50%, rgba(59,130,246,.09), transparent 40%),
    radial-gradient(circle at 85% 20%, rgba(249,115,22,.08), transparent 35%),
    #ffffff;
  padding-top: 72px;
  padding-bottom: 0;
}
.lp9-hero-inner {
  max-width: 1280px; margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  align-items: flex-end;
  gap: 0;
  padding: 0 32px;
}
.lp9-hero-left { padding-bottom: 48px; padding-right: 24px; }

/* Badge */
.lp9-badge {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1.5px solid #bfdbfe; background: #f0f7ff; color: #2563eb;
  padding: 10px 18px; border-radius: 999px;
  font-size: 0.8125rem; font-weight: 700; margin-bottom: 28px;
  letter-spacing: 0.02em;
}
.lp9-badge span { font-size: 1rem; }

/* H1 */
.lp9-h1 {
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.06; letter-spacing: -0.03em;
  color: #0f172a; margin: 0 0 24px; font-weight: 900;
}
.lp9-h1 .accent { color: #2563eb; }

/* Description */
.lp9-desc {
  font-size: clamp(0.9375rem, 1.8vw, 1.125rem); line-height: 1.7;
  color: #64748b; margin: 0 0 28px; max-width: 520px;
}

/* WhatsApp card */
.lp9-wa {
  display: flex; align-items: center; gap: 16px;
  background: #fff; border-radius: 22px; padding: 18px 22px;
  box-shadow: 0 12px 40px rgba(15,23,42,.08);
  border: 1px solid #f1f5f9;
  max-width: 480px; margin-bottom: 32px;
}
.lp9-wa-icon {
  width: 56px; height: 56px; border-radius: 14px;
  background: #dcfce7; display: flex; align-items: center;
  justify-content: center; font-size: 26px; flex-shrink: 0;
}
.lp9-wa h3 { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0 0 3px; }
.lp9-wa p  { font-size: 0.875rem; color: #64748b; margin: 0; }

/* CTA */
.lp9-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: linear-gradient(135deg,#2563eb,#1d4ed8);
  color: #fff; padding: 17px 34px; border-radius: 16px;
  font-size: 1.0625rem; font-weight: 800; text-decoration: none; cursor: pointer;
  box-shadow: 0 12px 36px rgba(37,99,235,.30); transition: .25s ease;
  border: none;
}
.lp9-cta:hover { transform: translateY(-3px); box-shadow: 0 20px 48px rgba(37,99,235,.35); }

.lp9-secure { margin-top: 18px; color: #94a3b8; font-size: 0.9rem; }

/* Hero image — edge-to-edge right */
.lp9-hero-right {
  display: flex; align-items: flex-end; justify-content: flex-end;
  padding-right: 0;
}
.lp9-hero-right img {
  width: 100%; max-width: 780px; display: block;
  filter: drop-shadow(0 32px 64px rgba(0,0,0,.15));
}

/* ── FEATURES ── */
.lp9-features {
  max-width: 1280px; margin: 0 auto;
  padding: 48px 32px 56px;
  display: grid; grid-template-columns: repeat(4,1fr); gap: 18px;
}
.lp9-fc {
  background: #fff; border-radius: 22px; padding: 24px;
  border: 1px solid #f1f5f9; box-shadow: 0 6px 24px rgba(15,23,42,.04);
  display: flex; gap: 16px; align-items: flex-start;
  transition: box-shadow .25s;
}
.lp9-fc:hover { box-shadow: 0 12px 36px rgba(15,23,42,.08); }
.lp9-fi {
  width: 50px; height: 50px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.lp9-fi.blue   { background: #eff6ff; }
.lp9-fi.orange { background: #fff7ed; }
.lp9-fi.green  { background: #ecfdf5; }
.lp9-fi.purple { background: #faf5ff; }
.lp9-fc h4 { font-size: 0.9375rem; color: #0f172a; margin: 0 0 7px; font-weight: 700; }
.lp9-fc p  { color: #64748b; line-height: 1.6; font-size: 0.8125rem; margin: 0; }

/* ── BONUSES ── */
.lp9-bonuses-wrap { background: #f8fafc; padding: 0 32px 64px; }
.lp9-bonuses {
  max-width: 1280px; margin: 0 auto;
  background: #fff; border-radius: 32px; padding: 56px;
  display: grid; grid-template-columns: 1fr 1.15fr;
  align-items: center; gap: 48px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 60px rgba(15,23,42,.05);
}
.lp9-bonus-badge {
  display: inline-flex; padding: 9px 18px; border-radius: 999px;
  background: #fff7ed; color: #f97316; font-weight: 700;
  font-size: 0.8125rem; margin-bottom: 18px; border: 1px solid #fed7aa;
}
.lp9-bonuses-left h2 {
  font-size: clamp(1.75rem, 3.5vw, 3rem);
  line-height: 1.1; color: #0f172a; margin: 0 0 16px; font-weight: 900;
  letter-spacing: -0.02em;
}
.lp9-bonuses-left h2 span { color: #f48c25; }
.lp9-bonuses-left p { font-size: 1rem; color: #64748b; line-height: 1.7; margin: 0 0 20px; }
.lp9-unlock {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff7ed; border: 1.5px solid #fed7aa;
  color: #f48c25; font-size: 0.875rem; font-weight: 700;
  padding: 9px 18px; border-radius: 9999px;
}
.lp9-bonuses-right img { width: 100%; display: block; }

/* ── BOTTOM BENEFITS ── */
.lp9-bottom-wrap { background: #f8fafc; padding: 0 32px 48px; }
.lp9-bottom {
  max-width: 1280px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(3,1fr); gap: 14px;
}
.lp9-bi {
  background: #fff; border-radius: 18px; padding: 20px;
  text-align: center; font-size: 0.9375rem; color: #334155;
  border: 1px solid #f1f5f9; font-weight: 600;
  box-shadow: 0 2px 12px rgba(15,23,42,.03);
}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .lp9-hero-inner { grid-template-columns: 1fr; padding: 0 20px; }
  .lp9-hero-left  { padding-bottom: 32px; padding-right: 0; }
  .lp9-hero-right { justify-content: center; }
  .lp9-hero-right img { max-width: 100%; }
  .lp9-features   { grid-template-columns: 1fr 1fr; padding: 40px 20px; }
  .lp9-bonuses    { grid-template-columns: 1fr; padding: 36px 28px; }
  .lp9-bonuses-wrap, .lp9-bottom-wrap { padding-left: 16px; padding-right: 16px; }
  .lp9-bottom     { grid-template-columns: 1fr; }
}
@media(max-width:640px){
  .lp9-hero { padding-top: 48px; }
  .lp9-features { grid-template-columns: 1fr; padding: 32px 16px; }
  .lp9-fc { flex-direction: column; }
}
`;

const features = [
  { icon: '📊', color: 'blue',   title: 'Todo en un solo lugar',      desc: 'Tus cuentas, tarjetas, ingresos, gastos e inversiones en un único dashboard.' },
  { icon: '🔒', color: 'orange', title: '100% seguro y privado',       desc: 'Tus datos siempre protegidos con la más alta tecnología de seguridad.' },
  { icon: '🔄', color: 'green',  title: 'Actualizado en tiempo real',  desc: 'Información en tiempo real para que tomes mejores decisiones cada día.' },
  { icon: '🧠', color: 'purple', title: 'IA que trabaja para vos',     desc: 'Nuestra IA analiza tus finanzas y te da insights y recomendaciones personalizadas.' },
];

const Lp9Page: React.FC = () => (
  <div className="lp9">
    <style>{LP9_CSS}</style>

    {/* NAV */}
    <div className="lp9-nav-wrap">
      <div className="lp9-nav">
        <div className="lp9-nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="lp9-nav-icon">
            <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: '1.1rem' }}>grid_view</span>
          </div>
          <div>
            <p className="lp9-nav-text-top">Controla IA</p>
            <p className="lp9-nav-text-bot">Sueldo sin fugas</p>
          </div>
        </div>
        <a href="#oferta" className="lp9-nav-cta" onClick={() => trackMetaEvent('Lead', { content_name: 'lp9_nav' })}>
          Empezar ahora →
        </a>
      </div>
    </div>

    <main>
      {/* HERO */}
      <section className="lp9-hero">
        <div className="lp9-hero-inner">

          {/* LEFT */}
          <div className="lp9-hero-left">
            <div className="lp9-badge">
              <span>👑</span> TU CENTRO FINANCIERO
            </div>

            <h1 className="lp9-h1">
              El sistema completo<br />
              para dominar tus<br />
              <span className="accent">finanzas personales</span>
            </h1>

            <p className="lp9-desc">
              No es solo un software, es un sistema integral para ordenar
              tu dinero, ahorrar, invertir y alcanzar tu libertad financiera.
            </p>

            <div className="lp9-wa">
              <div className="lp9-wa-icon">💬</div>
              <div>
                <h3>Enviá mensajes por WhatsApp</h3>
                <p>y cargá todo en segundos</p>
              </div>
            </div>

            <a href="#oferta" className="lp9-cta" onClick={() => trackMetaEvent('Lead', { content_name: 'lp9_hero_cta' })}>
              Comenzar ahora →
            </a>

            <div className="lp9-secure">🔒 100% seguro y privado &nbsp;·&nbsp; 🛡️ Garantía 7 días</div>
          </div>

          {/* RIGHT — imagen edge-to-edge */}
          <div className="lp9-hero-right">
            <img src={IMG_HERO} alt="Controla IA Dashboard" />
          </div>

        </div>

        {/* FEATURES */}
        <div className="lp9-features">
          {features.map(f => (
            <div key={f.title} className="lp9-fc">
              <div className={`lp9-fi ${f.color}`}>{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BONUSES */}
      <div className="lp9-bonuses-wrap">
        <div className="lp9-bonuses">
          <div className="lp9-bonuses-left">
            <div className="lp9-bonus-badge">🎁 BONOS EXCLUSIVOS</div>
            <h2>
              Recursos premium<br />
              <span>para transformar tus finanzas de verdad</span>
            </h2>
            <p>
              Accedé a guías, plantillas y estrategias prácticas
              para tomar el control total de tu dinero.
            </p>
            <div className="lp9-unlock">
              🔓 Se desbloquean al completar los 7 días de garantía
            </div>
          </div>
          <div className="lp9-bonuses-right">
            <img src={IMG_BONUSES} alt="Bonos exclusivos Controla IA" />
          </div>
        </div>
      </div>

      {/* BOTTOM BENEFITS */}
      <div className="lp9-bottom-wrap">
        <div className="lp9-bottom">
          {[
            '🛡️ Sin tarjeta de crédito para comenzar',
            '🔄 Cancelá cuando quieras sin complicaciones',
            '👥 Miles de personas ya transformaron sus finanzas',
          ].map(t => <div key={t} className="lp9-bi">{t}</div>)}
        </div>
      </div>

      {/* PRICING */}
      <PricingSection />
    </main>

    <Footer />
  </div>
);

export default Lp9Page;
