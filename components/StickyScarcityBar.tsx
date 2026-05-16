
import React, { useEffect, useState } from 'react';
import { trackMetaEvent } from '../metaPixel';
import { getCountdownTarget } from '../countdownTarget';

interface Props {
  theme: 'dark' | 'light';
  ctaHref?: string;
}

const CUPOS = 7;

const StickyScarcityBar: React.FC<Props> = ({ theme, ctaHref = '#oferta' }) => {
  const [show, setShow]         = useState(false);
  const [countdown, setCountdown] = useState('09:59');
  const [msgIndex, setMsgIndex]   = useState(0);
  const [fade, setFade]           = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const visible = window.scrollY > 500;
      setShow(visible);
      document.body.classList.toggle('scarcity-bar-active', visible);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('scarcity-bar-active');
    };
  }, []);

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

  // Alterna mensaje cada 3.5s con fade
  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMsgIndex(i => (i + 1) % 2);
        setFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const isDark = theme === 'dark';

  const messages = [
    <>
      <span style={{ fontSize: '0.7rem', color: '#ef4444' }}>🔴</span>
      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: isDark ? '#fff' : '#0f172a' }}>
        Solo <span style={{ color: '#ef4444' }}>{CUPOS} cupos</span> a este precio
      </span>
    </>,
    <>
      <span style={{ fontSize: '0.7rem' }}>⏳</span>
      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.85)' : '#374151' }}>
        Oferta termina en{' '}
        <span style={{ color: '#f48c25', fontWeight: 900, fontVariantNumeric: 'tabular-nums' }}>
          {countdown}
        </span>
      </span>
    </>,
  ];

  return (
    <a
      href={ctaHref}
      onClick={() => trackMetaEvent('Lead', { content_name: 'sticky_bar_cta' })}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 999,
        transform: show ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 350ms cubic-bezier(0.16,1,0.3,1)',
        background: isDark
          ? 'linear-gradient(90deg, #0b1220 0%, #102138 100%)'
          : 'linear-gradient(90deg, #ffffff 0%, #fff7f0 100%)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1d4a8',
        boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 4px 24px rgba(244,140,37,0.12)',
        textDecoration: 'none',
        display: 'block',
      }}
      aria-label="Ver oferta"
    >
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>
        {/* Mensaje rotante */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 300ms ease, transform 300ms ease',
        }}>
          {messages[msgIndex]}
        </div>

        <span style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db', fontSize: '0.75rem', flexShrink: 0 }}>·</span>

        <span style={{
          color: '#f48c25',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 800,
          flexShrink: 0,
        }}>
          Ver precio →
        </span>
      </div>
    </a>
  );
};

export default StickyScarcityBar;
