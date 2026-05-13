
import React, { useEffect, useState } from 'react';
import { trackMetaEvent } from '../metaPixel';

interface Props {
  theme: 'dark' | 'light';
  ctaHref?: string;
}

const CUPOS = 7; // número fijo por sesión

const StickyScarcityBar: React.FC<Props> = ({ theme, ctaHref = '#oferta' }) => {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState('09:59');

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const target = Date.now() + 10 * 60 * 1000; // 10 minutos
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

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transform: show ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 350ms cubic-bezier(0.16,1,0.3,1)',
        background: isDark
          ? 'linear-gradient(90deg, #0b1220 0%, #102138 100%)'
          : 'linear-gradient(90deg, #ffffff 0%, #fff7f0 100%)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1d4a8',
        boxShadow: isDark
          ? '0 4px 24px rgba(0,0,0,0.4)'
          : '0 4px 24px rgba(244,140,37,0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0.625rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          {/* Cupos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ef4444' }}>🔴</span>
            <span style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 800,
              color: isDark ? '#fff' : '#0f172a',
            }}>
              Solo quedan <span style={{ color: '#ef4444' }}>{CUPOS} cupos</span> a este precio
            </span>
          </div>
          {/* Divisor */}
          <span style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db' }}>·</span>
          {/* Countdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem' }}>⏳</span>
            <span style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: isDark ? 'rgba(255,255,255,0.75)' : '#6b7280',
            }}>
              Oferta termina en{' '}
              <span style={{
                color: isDark ? '#f48c25' : '#f48c25',
                fontWeight: 900,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {countdown}
              </span>
            </span>
          </div>
        </div>

        {/* Flecha clickeable compacta */}
        <a
          href={ctaHref}
          onClick={() => trackMetaEvent('Lead', { content_name: 'sticky_bar_cta' })}
          style={{
            color: '#f48c25',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '1.25rem',
            textDecoration: 'none',
            flexShrink: 0,
            lineHeight: 1,
          }}
          aria-label="Ver planes"
        >
          →
        </a>
      </div>
    </div>
  );
};

export default StickyScarcityBar;
