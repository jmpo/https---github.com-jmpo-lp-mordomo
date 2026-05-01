
import React, { useEffect, useRef } from 'react';
import { trackMetaEvent } from '../metaPixel';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4';

// Gradiente naranja para palabras clave (no usar con textShadow en el padre)
const gOrange: React.CSSProperties = {
  background: 'linear-gradient(90deg, #f48c25 0%, #fce8d4 50%, #f48c25 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'block',
  lineHeight: 1.13,
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white"
      style={{
        background: '#000',
        paddingTop: 'clamp(3.5rem, 11svh, 6rem)',
        paddingBottom: 'clamp(3.5rem, 11svh, 6rem)',
      }}
    >
      {/* Video MP4 de fondo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Capa oscura base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: 'rgba(0,0,0,0.58)' }}
      />
      {/* Velo radial detrás del texto */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'radial-gradient(ellipse 85% 65% at 50% 50%, rgba(11,18,32,0.60) 0%, transparent 100%)',
        }}
      />

      {/* Contenido */}
      <div
        className="relative w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center"
        style={{ zIndex: 2, gap: '1.25rem' }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full">
          <span className="material-symbols-outlined text-sm text-primary">campaign</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">
            Para empleados que trabajan duro pero terminan el mes en cero
          </span>
        </div>

        {/* Titular — NO usar textShadow aquí, rompe el background-clip:text de los spans */}
        <h1
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(2rem, 5.5vw, 4.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.015em',
            lineHeight: 1.13,
            margin: 0,
          }}
        >
          <span style={{ display: 'block', color: 'rgba(255,255,255,0.82)', lineHeight: 1.13 }}>
            ¿Tu sueldo desaparece
          </span>
          <span style={gOrange}>misteriosamente el día 20?</span>
          <span style={{ display: 'block', color: '#ffffff', lineHeight: 1.13 }}>
            Aquí está la razón.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="max-w-xl px-1"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#c8c8c8',
            lineHeight: 1.6,
            fontWeight: 500,
            margin: 0,
            textShadow: '0 1px 12px rgba(0,0,0,0.6)',
          }}
        >
          Deja de culpar a la economía. Tienes "agujeros" en tu bolsillo que no estás viendo.
          Usa la primera App con IA que escanea tus gastos, vigila tu despensa y protege tu
          sueldo automáticamente. (Sin usar Excel aburrido).
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-center">
          <a
            href="#oferta"
            onClick={() => trackMetaEvent('Lead', { content_name: 'hero_cta_fugas' })}
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 sm:px-7 py-4 rounded-2xl font-black text-base sm:text-lg hover:bg-primary-dark active:scale-95 cta-shine"
            style={{
              transition: 'all 300ms',
              boxShadow: '0 6px 32px 4px rgba(244,140,37,0.35)',
            }}
          >
            <span>👉</span>
            <span>QUIERO ENCONTRAR MIS FUGAS DE DINERO</span>
          </a>
          <a
            href="#video"
            onClick={() => trackMetaEvent('Lead', { content_name: 'hero_ver_video' })}
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-5 py-4 rounded-2xl text-sm font-semibold text-white/90 hover:bg-white/15 active:scale-95"
            style={{ transition: 'all 300ms' }}
          >
            <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
            <span>Ver cómo funciona en 60s</span>
          </a>
        </div>

        {/* Trust badges — reducen la fricción antes de hacer clic */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-xs text-white/50 font-medium flex items-center gap-1">🔒 Pago 100% seguro</span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="text-xs text-white/50 font-medium flex items-center gap-1">✅ Garantía 30 días</span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="text-xs text-white/50 font-medium flex items-center gap-1">🚫 Cancela cuando quieras</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
