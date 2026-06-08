
import React, { useEffect } from 'react';
import { trackMetaEvent } from '../../metaPixel';

const ORANGE = '#f48c25';
const WHITE  = '#ffffff';
const SANS   = 'Manrope, sans-serif';

// ─── SOPORTE WHATSAPP ─────────────────────────────────────────────────────────

const WA_NUMBER  = '595991733685';
const WA_MESSAGE = 'Hola 👋 Acabo de comprar Controla IA y tengo una duda. ¿Me pueden ayudar?';
const WA_LINK    = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const GraciasPage: React.FC = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', { content_name: 'gracias_post_compra' });
  }, []);

  return (
    <div style={{
      background: '#080e1a',
      color: WHITE,
      fontFamily: SANS,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2.5rem 1.25rem',
        maxWidth: '480px',
        margin: '0 auto',
      }}>

        {/* Check animado */}
        <div style={{
          width: '88px',
          height: '88px',
          borderRadius: '9999px',
          background: 'rgba(16,185,129,0.12)',
          border: '2px solid #10b981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.75rem',
          marginBottom: '1.75rem',
          boxShadow: '0 0 0 8px rgba(16,185,129,0.06)',
        }}>
          ✅
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(1.625rem,6vw,2.25rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          margin: '0 0 1rem',
        }}>
          ¡Gracias por tu compra! 🎉
        </h1>

        <p style={{
          fontSize: '1.0625rem',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.7,
          margin: '0 0 2rem',
        }}>
          Tu compra fue procesada con éxito. En breve vas a recibir un{' '}
          <strong style={{ color: WHITE }}>correo electrónico</strong> con todos los datos
          de acceso para empezar a usar <strong style={{ color: ORANGE }}>Controla IA</strong>.
        </p>

        {/* Tarjeta: revisá tu correo */}
        <div style={{
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '1.25rem',
          padding: '1.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          textAlign: 'left',
          marginBottom: '1rem',
        }}>
          <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>📩</span>
          <div>
            <p style={{ fontSize: '0.95rem', fontWeight: 900, margin: '0 0 0.35rem' }}>
              Revisá tu correo
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
              Si no lo ves en unos minutos, revisá la carpeta de{' '}
              <strong style={{ color: WHITE }}>spam o promociones</strong>. El correo llega
              a la dirección que usaste al pagar.
            </p>
          </div>
        </div>

        {/* Tarjeta: soporte WhatsApp */}
        <div style={{
          width: '100%',
          background: 'rgba(16,185,129,0.06)',
          border: '1px solid rgba(16,185,129,0.25)',
          borderRadius: '1.25rem',
          padding: '1.75rem',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <p style={{ fontSize: '1rem', fontWeight: 900, margin: '0 0 0.4rem' }}>
            ¿Tenés alguna duda?
          </p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
            Escribinos por WhatsApp y nuestro equipo de soporte te ayuda al instante.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaEvent('Contact', { content_name: 'gracias_soporte_whatsapp' })}
            className="cta-shine"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              background: '#25D366',
              color: '#062b16',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              fontSize: '1.0625rem',
              fontWeight: 900,
              textDecoration: 'none',
              width: '100%',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.06zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
            </svg>
            Escribir a soporte
          </a>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: '0.875rem 0 0' }}>
            📞 +595 991 733 685
          </p>
        </div>

        {/* Pasos siguientes */}
        <div style={{ width: '100%', textAlign: 'left' }}>
          <p style={{
            fontSize: '0.7rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: ORANGE,
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
            ¿Qué sigue ahora?
          </p>
          {[
            { n: '1', t: 'Revisá tu correo', d: 'Buscá el email con tus datos de acceso.' },
            { n: '2', t: 'Activá tu acceso', d: 'Seguí las instrucciones del correo para empezar.' },
            { n: '3', t: 'Empezá a usar Controla IA', d: 'Tomá el control de tus finanzas desde hoy.' },
          ].map(step => (
            <div key={step.n} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: '9999px',
                background: 'rgba(244,140,37,0.12)',
                border: '1px solid rgba(244,140,37,0.3)',
                color: ORANGE,
                fontWeight: 900,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>{step.n}</span>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 800, margin: '0 0 0.15rem' }}>{step.t}</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.5 }}>{step.d}</p>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
          © 2026 Controla IA ·{' '}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: ORANGE, textDecoration: 'none' }}>
            Soporte WhatsApp
          </a>
        </p>
      </footer>

    </div>
  );
};

export default GraciasPage;
