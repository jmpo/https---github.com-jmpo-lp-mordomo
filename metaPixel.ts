type FbqFunction = {
  (...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  push?: (...args: any[]) => void;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
    fbqInitialized?: boolean;
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

// ─── Helpers ────────────────────────────────────────────────────────────────

const generateEventId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(16).slice(2)}`;
};

const readCookie = (name: string) => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
};

const getFbpFbc = () => {
  if (typeof window === 'undefined') return {};
  const fbp = readCookie('_fbp') ?? undefined;
  const existingFbc = readCookie('_fbc') ?? undefined;
  let fbc = existingFbc;

  if (!fbc) {
    const fbclid = new URL(window.location.href).searchParams.get('fbclid');
    if (fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  }

  return { fbp, fbc };
};

// ID anónimo persistido 180 días — mejora match quality sin datos personales
const getOrCreateExternalId = (): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const KEY = '_clid';
  const existing = readCookie(KEY);
  if (existing) return existing;
  const id =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `uid_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${KEY}=${id}; expires=${expires}; path=/; SameSite=Lax`;
  return id;
};

// ─── CAPI server-side ────────────────────────────────────────────────────────

const sendCapiEvent = async (
  eventName: string,
  eventId: string,
  params?: Record<string, any>
) => {
  try {
    const { fbp, fbc } = getFbpFbc();
    const externalId = getOrCreateExternalId();
    await fetch('/api/meta-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
          ...(externalId ? { external_id: externalId } : {}),
        },
        custom_data: params ?? {},
      }),
    });
  } catch {
    // CAPI falla silenciosamente — el pixel browser sigue funcionando
  }
};

// ─── Inicialización ──────────────────────────────────────────────────────────

export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;
  if (window.fbqInitialized) return;

  if (!PIXEL_ID) {
    console.warn('Falta configurar VITE_META_PIXEL_ID para inicializar Meta Pixel.');
    return;
  }

  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue?.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  // Coincidencias avanzadas — pasamos lo que tenemos sin requerir formulario
  const externalId = getOrCreateExternalId();
  const fbp        = readCookie('_fbp') ?? undefined;
  const fbc        = (() => {
    const existing = readCookie('_fbc');
    if (existing) return existing;
    const fbclid = new URL(window.location.href).searchParams.get('fbclid');
    return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
  })();

  window.fbq?.('init', PIXEL_ID, {
    ...(externalId ? { external_id: externalId } : {}),
    ...(fbp        ? { fbp }                      : {}),
    ...(fbc        ? { fbc }                      : {}),
  });
  window.fbq?.('track', 'PageView');
  window.fbqInitialized = true;

  // PageView también va a CAPI
  sendCapiEvent('PageView', generateEventId());
};

// ─── Track ───────────────────────────────────────────────────────────────────

export const trackMetaEvent = (
  name: string,
  params?: Record<string, any>,
  options?: { eventId?: string }
) => {
  if (typeof window === 'undefined') return;
  if (!window.fbq) {
    console.warn('Meta Pixel no está inicializado.');
    return;
  }

  const eventId = options?.eventId ?? generateEventId();

  // 1. Pixel browser (client-side)
  window.fbq('track', name, { ...(params ?? {}), event_id: eventId });

  // 2. CAPI server-side en paralelo para deduplicación
  sendCapiEvent(name, eventId, params);

  return { eventId, ...getFbpFbc() };
};

export const buildMetaDedupContext = (eventId?: string) => {
  const finalEventId = eventId ?? generateEventId();
  return { eventId: finalEventId, ...getFbpFbc() };
};
