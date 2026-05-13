
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: “Juan Cáceres”,
      age: “32 años”,
      location: “Asunción, Paraguay”,
      since: “Marzo 2026”,
      content: “💰 Ahorré USD 280 en 2 meses sin cambiar de estilo de vida. Solo viendo a dónde se iba mi plata.”,
      image: “https://randomuser.me/api/portraits/men/34.jpg”
    },
    {
      name: “María García”,
      age: “28 años”,
      location: “Ciudad de México, México”,
      since: “Febrero 2026”,
      content: “💰 Tenía miedo de ver mis gastos. Cuando los vi, entendí todo. En 6 semanas pagué mi deuda de tarjeta y todavía me sobró.”,
      image: “https://randomuser.me/api/portraits/women/44.jpg”
    },
    {
      name: “José Rodríguez”,
      age: “41 años”,
      location: “Bogotá, Colombia”,
      since: “Enero 2026”,
      content: “💰 Pensé que el problema era mi sueldo. Era que gastaba USD 180 al mes en cosas que ni usaba. Ya no.”,
      image: “https://randomuser.me/api/portraits/men/32.jpg”
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary mb-4">
            Historias reales de <span className="text-primary">personas comunes</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Personas reales. Problemas reales. Resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#f8f7f5] p-8 rounded-3xl border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex gap-1 text-primary mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-sm fill-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-secondary">{t.name} — {t.age}</h4>
                  <p className="text-xs text-gray-400">📍 {t.location}</p>
                  <p className="text-xs text-primary font-semibold">★★★★★ Usuario desde {t.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
