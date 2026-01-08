
import React from 'react';
import { trackMetaEvent } from '../metaPixel';

type Plan = {
  name: string;
  charge: number;
  months: number;
  monthlyDisplay?: number;
  compareAt?: number;
  saving?: number;
  mentalCopy?: string;
  bonusCopy?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlight?: 'popular' | 'value';
  href: string;
};

const bonuses = [
  {
    title: 'El Dashboard "Patrimonio 360"',
    desc: 'La herramienta visual para ver tus inversiones y gastos en un solo lugar.',
    badge: 'Lo usan todos',
  },
  {
    title: 'El Módulo de "Piloto Automático"',
    desc: 'Para tus gastos fijos recurrentes (configúralo y olvídalo).',
    badge: 'Ahorra tiempo',
  },
  {
    title: 'BONUS EXCLUSIVO 1: El "Proyector de Libertad" (Ingeniería Inversa de Metas)',
    desc: [
      'La mayoría de la gente nunca cumple sus sueños porque los ve "demasiado grandes" ("Necesito $5,000 USD para el viaje a Disney... es imposible").',
      'Esta herramienta elimina la ansiedad utilizando Matemática Inversa:',
      'Tú defines el sueño: (Ej: "Pagar el auto", "Viaje a Europa", "Fondo de Retiro").',
      'El sistema hace la ingeniería: Calcula automáticamente la "Micro-Cuota de Éxito".',
      'Tú obtienes el mapa: Te dice exactamente: "Si separas $15 USD a la semana o $2 USD al día, llegarás a tu meta el 10 de Octubre".',
      'El Resultado: Convierte una meta gigante e intimidante en una victoria diaria fácil de cumplir. (Valor Real: Incalculable para tu paz mental).',
    ],
    badge: 'El más deseado',
  },
  {
    title: 'BONUS EXCLUSIVO 2: Escáner IA Ilimitado',
    desc: 'Sube todas las facturas que quieras, el sistema nunca se cansa.',
    badge: 'Ahorra fugas',
  },
];

const bonusIcons = ['dashboard_customize', 'autopay', 'flag', 'document_scanner'];

const sharedFeatures = [
  'Calendario de pagos y recordatorios',
  'Alertas antes de que falte dinero',
  'Metas de ahorro con monto sugerido',
  'Detección de gastos hormiga y suscripciones',
  'Lista inteligente de supermercado',
  'Soporte humano prioritario',
];

const plans: Plan[] = [
  {
    name: 'Mensual',
    charge: 5,
    monthlyDisplay: 5,
    months: 1,
    features: sharedFeatures,
    cta: 'Elegir Mensual',
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
    features: sharedFeatures,
    cta: 'Elegir Semestral',
    popular: true,
    highlight: 'popular',
    href: 'https://pay.hotmart.com/E103337720H?off=2kzn4n3n&checkoutMode=6',
  },
  {
    name: 'Anual',
    charge: 39.99,
    compareAt: 60,
    saving: 20,
    monthlyDisplay: 3.33,
    months: 12,
    features: sharedFeatures,
    cta: 'Elegir Anual',
    popular: true,
    highlight: 'value',
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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black">Ten el mismo control que un Director Financiero (CFO), pero en tu celular.</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto font-medium">
            Activa tu Arquitectura de Riqueza Silenciosa con la oferta que mejor se adapte a ti.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 md:mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/5 border border-white/15 shadow-lg shadow-black/20 px-6 py-4 rounded-3xl">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-primary">Oferta de lanzamiento</span>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <span className="material-symbols-outlined text-primary text-lg">hourglass_top</span>
              Termina en {countdown}
            </div>
            <span className="text-xs font-semibold text-white/70">Garantía 30 días o te devolvemos el 100%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto mt-4 md:mt-8">
          {plans.map((p, i) => {
            const monthlyPrice = p.monthlyDisplay ?? p.charge / p.months;
            const isPopular = p.highlight === 'popular';
            const isBestValue = p.highlight === 'value';
            const discountPercent = p.compareAt ? Math.round(((p.compareAt - p.charge) / p.compareAt) * 100) : null;

            return (
              <div
                key={i}
                className={`relative bg-[#0b1220] p-8 sm:p-10 lg:p-12 rounded-[3rem] border ${
                  p.popular
                    ? 'border-primary ring-[10px] ring-primary/10 scale-100 md:scale-105 md:z-10 md:shadow-2xl shadow-primary/20'
                    : 'border-white/10 scale-100 shadow-lg shadow-black/20'
                } transition-all duration-500 md:hover:translate-y-[-10px] group flex flex-col ${
                  isBestValue ? 'bg-gradient-to-b from-[#102138] to-[#0b1220]' : ''
                } reveal-up`}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                {p.highlight && (
                  <div
                    className={`absolute -top-5 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg ${
                      isPopular ? 'bg-primary text-secondary' : 'bg-emerald-500'
                    }`}
                  >
                    {isPopular ? 'Más Popular' : 'Mejor Valor'}
                  </div>
                )}

                <div className="mb-8 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-black mb-1">{p.name}</h3>
                    <p className="text-sm font-semibold text-white/60">
                      {p.months === 1 ? 'Pago mensual' : `Pago único por ${p.months} meses`}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-inner space-y-3 text-center">
                    <div className="text-[11px] font-black uppercase tracking-[0.16em] text-primary">Precio por mes</div>
                    <div className="flex items-baseline justify-center gap-2 whitespace-nowrap">
                      <span className="text-4xl lg:text-5xl font-black leading-tight text-white">USD {monthlyPrice.toFixed(2)}</span>
                      <span className="text-sm font-bold text-white/60">/mes</span>
                    </div>
                    <div className="text-sm font-bold text-white/80">
                      Total hoy: {currencyFormatter.format(p.charge)}{' '}
                      {p.compareAt && (
                        <span className="text-white/40 line-through text-xs ml-1">{currencyFormatter.format(p.compareAt)}</span>
                      )}
                    </div>
                    {p.saving && (
                      <div className="flex justify-center">
                        <span className="text-xs font-black text-emerald-200 bg-emerald-900/40 px-4 py-2 rounded-full shadow-sm">
                          Ahorro real: {currencyFormatter.format(p.saving)} {discountPercent ? `(${discountPercent}% OFF)` : ''}
                        </span>
                      </div>
                    )}
                    <div className="text-xs font-semibold text-white/60">Garantía 30 días.</div>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10 mb-8"></div>

                <ul className="space-y-5 mb-12 min-h-[180px]">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-semibold text-white/80">
                      <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'wght' 700" }}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  onClick={() => trackMetaEvent('InitiateCheckout', { content_name: p.name, value: p.charge, currency: 'USD' })}
                  className={`mt-auto block w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 text-center shadow-xl ${
                    p.popular
                      ? 'bg-primary text-secondary hover:bg-primary-dark shadow-primary/30'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-14 bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-xl shadow-black/30 space-y-6">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
            <span className="material-symbols-outlined text-base">verified</span>
            Lo que desbloqueas hoy
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((item, index) => {
              const isBonus = index >= 2;
              const icon = bonusIcons[index] ?? 'workspace_premium';
              return (
                <div
                  key={item.title}
                  className={`relative bg-gradient-to-br from-white/8 via-white/5 to-transparent border border-white/10 rounded-2xl p-5 md:p-6 h-full flex flex-col gap-4 shadow-lg shadow-black/20 overflow-visible ${
                    item.badge === 'El más deseado' ? 'ring-2 ring-primary/60 ring-offset-2 ring-offset-[#0f172a]' : ''
                  }`}
                >
                  {item.badge && (
                    <div className="absolute -top-3 right-0">
                      <div className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full shadow-[0_14px_40px_rgba(244,140,37,0.35)]">
                        {item.badge}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shadow-inner shadow-black/10">
                      <span className="material-symbols-outlined text-xl">{icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/60">
                        {isBonus ? 'Regalo exclusivo' : 'Pilar esencial'}
                      </span>
                      <p className="font-black text-white leading-snug">{item.title}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className={`text-[11px] font-black px-3 py-1 rounded-full border ${isBonus ? 'border-primary text-primary bg-primary/10' : 'border-white/10 text-white/70'}`}>
                          {isBonus ? 'Regalo' : 'Fundamental'}
                        </span>
                        {item.badge && (
                          <span className="text-[11px] font-black px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {Array.isArray(item.desc) ? (
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-white/75 pl-1">
                      {item.desc.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center text-sm text-white/60 font-semibold">
            Valor Total del Sistema: <span className="line-through decoration-white/40">$350 USD/año</span> · TU INVERSIÓN HOY: Solo USD 3.33 / mes (Plan Anual, total USD 39.99)
          </div>
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
