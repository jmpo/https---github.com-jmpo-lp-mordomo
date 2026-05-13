
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

type Plan = {
  name: string;
  charge: number;
  months: number;
  monthlyDisplay?: number;
  compareAt?: number;
  saving?: number;
  cta: string;
  popular?: boolean;
  highlight?: 'popular' | 'value';
  href: string;
  socialProof?: string;
  relativeCopy?: string;
};

const bonuses = [
  { emoji: '📊', title: 'Panel 360 de tu plata', desc: 'Tus cuentas, gastos y despensa en un solo lugar. Sin hojas de cálculo.' },
  { emoji: '🔁', title: 'Piloto automático de cuentas fijas', desc: 'Cargá alquiler, luz e internet una vez y recibí alertas antes de que venzan.' },
  { emoji: '🚀', title: 'Calculadora de Metas', desc: 'Define tu meta: viaje, tarjeta o moto. Te decimos cuánto guardar por día. Ves la barra avanzar.' },
  { emoji: '🔍', title: 'Escáner IA ilimitado', desc: 'Sube todas las facturas que quieras. El sistema encuentra los montos al instante.' },
];

// Las primeras 2 son las más valiosas — se destacan visualmente
const sharedFeatures = [
  { text: '📸 Escaneo de tickets con IA y categorización', highlight: true },
  { text: '🚨 Alertas antes de quedarte en cero', highlight: true },
  { text: '🏠 Inventario de despensa sin compras dobles', highlight: false },
  { text: '🎯 Metas con monto diario sugerido', highlight: false },
  { text: '🔔 Recordatorios de pagos y mantenimientos', highlight: false },
  { text: '🛒 Listas inteligentes de supermercado', highlight: false },
];

const leakCosts = [
  { title: 'Comida que se vence en la despensa', icon: 'cancel' },
  { title: 'Suscripciones que olvidaste cancelar', icon: 'do_not_disturb_on' },
  { title: 'Intereses de tarjeta por no pagar a tiempo', icon: 'warning' },
];

const plans: Plan[] = [
  {
    name: 'Mensual',
    charge: 5,
    monthlyDisplay: 5,
    months: 1,
    cta: '🚀 Empezar por USD 5',
    popular: false,
    href: 'https://pay.hotmart.com/E103337720H?off=datt7ri2&checkoutMode=6',
  },
  {
    name: 'Semestral',
    charge: 24.99,
    compareAt: 30,
    saving: 5,
    monthlyDisplay: 4.17,
    months: 6,
    cta: '🔥 Quiero ahorrar 17%',
    popular: true,
    highlight: 'popular',
    socialProof: '👥 127 personas eligieron este plan esta semana',
    href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
  },
  {
    name: 'Anual',
    charge: 39.99,
    compareAt: 60,
    saving: 20,
    monthlyDisplay: 3.33,
    months: 12,
    cta: '⚡ Quiero el mejor precio',
    popular: true,
    highlight: 'value',
    relativeCopy: '☕ Menos que un café al día',
    href: 'https://pay.hotmart.com/E103337720H?off=9011oxf5&checkoutMode=6',
  },
];

const currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const proofMessages = [
  { name: 'María de Lima', action: 'armó su fondo de emergencia', time: 'hace 2 min' },
  { name: 'José de Bogotá', action: 'contrató el plan Anual', time: 'hace 5 min' },
  { name: 'Ana de CDMX', action: 'configuró metas familiares', time: 'hace 8 min' },
  { name: 'Luis de Buenos Aires', action: 'bajó sus suscripciones duplicadas', time: 'hace 12 min' },
];

const PricingSection: React.FC = () => {
  const [countdown, setCountdown] = React.useState('12:00:00');
  const [toastIndex, setToastIndex] = React.useState(0);
  const [showProof, setShowProof] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const bestPlanHref = plans.find((p) => p.highlight === 'value')?.href ?? plans[0].href;

  React.useEffect(() => {
    const target = Date.now() + 12 * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);
      const hrs = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const secs = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
      setCountdown(`${hrs}:${mins}:${secs}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    if (!showProof) return;
    const id = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % proofMessages.length);
    }, 7000);
    return () => clearInterval(id);
  }, [showProof]);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowProof(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#0f172a] text-white" id="oferta" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black">¿Cuánto te cuesta no tener Controla?</h2>
          <p className="text-lg text-white/70 max-w-4xl mx-auto font-medium">
            Comida que se vence, suscripciones olvidadas e intereses por pagar tarde. Eso es mínimo $100 USD al mes en pérdidas. Controla te cuesta menos que una pizza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {leakCosts.map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3 shadow-lg shadow-black/20">
              <div className="w-10 h-10 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <p className="text-sm font-semibold text-white/80 text-left">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/5 border border-white/15 shadow-lg shadow-black/20 px-6 py-4 rounded-3xl">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-primary">Prueba gratis activa</span>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <span className="material-symbols-outlined text-primary text-lg">hourglass_top</span>
              Termina en {countdown}
            </div>
            <span className="text-xs font-semibold text-white/70">Cancela cuando quieras.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto mt-4 md:mt-8">
          {plans.map((p, i) => {
            const monthlyPrice = p.monthlyDisplay ?? p.charge / p.months;
            const isPopular = p.highlight === 'popular';
            const isBestValue = p.highlight === 'value';
            const discountPercent = p.compareAt
              ? Math.round(((p.compareAt - p.charge) / p.compareAt) * 100)
              : null;

            return (
              <div
                key={i}
                className={`relative bg-[#0b1220] p-8 sm:p-10 lg:p-12 rounded-[3rem] border ${
                  p.popular
                    ? 'border-primary ring-[10px] ring-primary/10 scale-100 md:scale-105 md:z-10 md:shadow-2xl shadow-primary/20'
                    : 'border-white/15 scale-100 shadow-lg shadow-black/20'
                } transition-all duration-500 md:hover:translate-y-[-10px] group flex flex-col ${
                  isBestValue ? 'bg-gradient-to-b from-[#102138] to-[#0b1220]' : ''
                } reveal-up`}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                {p.highlight && (
                  <div
                    className={`absolute -top-5 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg whitespace-nowrap ${
                      isPopular ? 'bg-primary text-secondary' : 'bg-emerald-500'
                    }`}
                  >
                    {isPopular ? '🔥 Más Popular' : '⚡ Mejor Valor'}
                  </div>
                )}

                {/* Countdown integrado en el card popular */}
                {isPopular && (
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-primary/90 mb-4 -mt-2">
                    <span className="material-symbols-outlined text-sm">hourglass_top</span>
                    Oferta termina en {countdown}
                  </div>
                )}

                <div className="mb-8 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-black mb-1">{p.name}</h3>
                    <p className="text-sm font-semibold text-white/60">
                      {p.months === 1 ? 'Pago mensual' : `Pago único por ${p.months} meses`}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-inner space-y-2 text-center">
                    <div className="text-[11px] font-black uppercase tracking-[0.16em] text-primary">Precio por mes</div>
                    <div className="flex items-baseline justify-center gap-2 whitespace-nowrap">
                      <span className="text-4xl lg:text-5xl font-black leading-tight text-white">
                        USD {monthlyPrice.toFixed(2)}
                      </span>
                      <span className="text-sm font-bold text-white/60">/mes</span>
                    </div>

                    {/* Ancla relativa de precio solo en plan Anual */}
                    {p.relativeCopy && (
                      <p className="text-xs font-medium text-white/50">{p.relativeCopy}</p>
                    )}

                    <div className="text-sm font-bold text-white/80 pt-1">
                      Total hoy: {currencyFormatter.format(p.charge)}{' '}
                      {p.compareAt && (
                        <span className="text-white/40 line-through text-xs ml-1">
                          {currencyFormatter.format(p.compareAt)}
                        </span>
                      )}
                    </div>

                    {/* Badge de ahorro en una sola línea */}
                    {p.saving && discountPercent && (
                      <div className="flex justify-center pt-1">
                        <span className="text-xs font-black text-emerald-200 bg-emerald-900/40 px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                          💰 Ahorrás ${p.saving} · {discountPercent}% OFF
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10 mb-6"></div>

                <ul className="space-y-4 mb-10 min-h-[180px]">
                  {sharedFeatures.map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-sm ${
                        f.highlight
                          ? 'font-bold text-white'
                          : 'font-medium text-white/70'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-lg shrink-0 ${
                          f.highlight ? 'text-primary' : 'text-primary/60'
                        }`}
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        check_circle
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href={p.href}
                  onClick={() =>
                    trackMetaEvent('AddToCart', {
                      content_ids: [`plan_${p.name.toLowerCase()}`],
                      content_name: `Plan ${p.name} - Controla IA`,
                      content_type: 'product',
                      value: p.charge,
                      currency: 'USD',
                      num_items: 1,
                    })
                  }
                  className={`mt-auto block w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 text-center shadow-xl ${
                    p.popular
                      ? 'bg-primary text-secondary hover:bg-primary-dark shadow-primary/30'
                      : 'bg-white/10 text-white hover:bg-white/18 border border-white/25'
                  }`}
                >
                  {p.cta}
                </a>

                {/* Garantía debajo del botón */}
                <p className="text-center text-[11px] text-white/45 font-medium mt-3">
                  🛡️ Garantía 7 días — si no funciona, te devolvemos el dinero.
                </p>

                {/* Prueba social bajo el CTA del plan popular */}
                {p.socialProof && (
                  <p className="text-center text-[11px] text-white/55 font-medium mt-1">
                    {p.socialProof}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bonuses — imagen valor agregado */}
        <div className="mt-14 space-y-5">
          <div className="text-center space-y-2">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
              🎁 Bonus exclusivos — incluidos gratis
            </p>
            <h3 className="text-2xl lg:text-3xl font-black text-white">
              5 recursos para dominar tus finanzas,{' '}
              <span className="text-primary">sin costo adicional.</span>
            </h3>
            <p className="text-white/60 text-sm font-medium max-w-xl mx-auto">
              Guías, ebooks y checklists de finanzas personales.
            </p>
            <p className="text-primary text-sm font-bold">
              🔓 Se desbloquean al completar los 7 días de garantía
            </p>
          </div>
          <div className="w-full">
            <img
              src="/lp8/sistema finanzas/version dar/dark-bonuses.png"
              alt="Bonus incluidos — Guías y Ebooks Controla IA"
              className="w-full h-auto block"
              style={{ filter: 'drop-shadow(0 24px 48px rgba(244,140,37,0.18))' }}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-5 pt-1">
            {['✔ Acceso inmediato', '✔ Sin complicaciones', '✔ Funciona desde el primer día'].map((t) => (
              <span key={t} className="text-sm font-semibold text-white/55">{t}</span>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <a
            href={bestPlanHref}
            onClick={() =>
              trackMetaEvent('AddToCart', {
                content_ids: ['plan_anual'],
                content_name: 'Plan Anual - Controla IA',
                content_type: 'product',
                value: 39.99,
                currency: 'USD',
                num_items: 1,
              })
            }
            className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cta-shine"
          >
            👉 QUIERO EL PLAN ANUAL POR USD 39.99
          </a>
          <p className="text-sm font-semibold text-white/70">Cancela cuando quieras. Pero te aseguro que no querrás.</p>
          <p className="text-xs text-white/40 font-medium">🛡️ Garantía de devolución 7 días sin preguntas</p>
        </div>

        <p className="text-center mt-16 text-sm font-bold text-white/60">
          ¿Tenés dudas? <a href="https://wa.link/wcvh0b" className="text-primary hover:underline">Escribinos y te ayudamos</a>
        </p>
      </div>

      {showProof && (
        <div className="fixed bottom-6 right-4 sm:right-8 z-40">
          <div className="bg-[#0b1220] border border-white/10 shadow-2xl shadow-black/40 px-4 py-3 rounded-2xl flex items-start gap-3 max-w-xs animate-in fade-in">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-black text-sm">
              <span className="material-symbols-outlined text-base">verified</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">{proofMessages[toastIndex].name}</p>
              <p className="text-xs font-semibold text-white/70">{proofMessages[toastIndex].action}</p>
              <p className="text-[11px] font-bold text-emerald-300">{proofMessages[toastIndex].time}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
