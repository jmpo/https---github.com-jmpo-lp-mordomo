const KEY = 'cta_countdown_target';
const DURATION = 10 * 60 * 1000; // 10 minutos

export function getCountdownTarget(): number {
  if (typeof window === 'undefined') return Date.now() + DURATION;
  const stored = sessionStorage.getItem(KEY);
  if (stored) {
    const t = parseInt(stored, 10);
    if (t > Date.now()) return t;
  }
  const target = Date.now() + DURATION;
  sessionStorage.setItem(KEY, String(target));
  return target;
}
