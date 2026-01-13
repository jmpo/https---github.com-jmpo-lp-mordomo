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

const generateEventId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(16).slice(2)}`;
};

const readCookie = (name: string) => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const getFbpFbc = () => {
  if (typeof window === 'undefined') return {};
  const fbp = readCookie('_fbp') ?? undefined;
  const existingFbc = readCookie('_fbc') ?? undefined;
  let fbc = existingFbc;

  // Si no existe _fbc, pero llega fbclid en la URL, construimos el token.
  if (!fbc) {
    const url = new URL(window.location.href);
    const fbclid = url.searchParams.get('fbclid');
    if (fbclid) {
      fbc = `fb.1.${Date.now()}.${fbclid}`;
    }
  }

  return { fbp, fbc };
};

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

  window.fbq?.('init', PIXEL_ID);
  window.fbq?.('track', 'PageView');
  window.fbqInitialized = true;
};

/**
 * Envía un evento al píxel y devuelve los datos necesarios para deduplicar con CAPI.
 * Incluye event_id por defecto para que lo reutilices en el servidor junto a fbp/fbc.
 */
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
  window.fbq('track', name, { ...(params ?? {}), event_id: eventId });
  const ids = getFbpFbc();
  return { eventId, ...ids };
};

/**
 * Úsalo para construir el payload de deduplicación en el servidor (CAPI).
 * Genera event_id si no pasas uno y adjunta fbp/fbc si existen.
 */
export const buildMetaDedupContext = (eventId?: string) => {
  const finalEventId = eventId ?? generateEventId();
  const ids = getFbpFbc();
  return { eventId: finalEventId, ...ids };
};
