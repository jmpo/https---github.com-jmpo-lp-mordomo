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

export const trackMetaEvent = (name: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  if (!window.fbq) {
    console.warn('Meta Pixel no está inicializado.');
    return;
  }
  window.fbq('track', name, params);
};
