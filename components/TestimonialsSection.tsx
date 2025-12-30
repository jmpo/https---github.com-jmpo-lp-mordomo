
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Andrés Gutiérrez",
      role: "Empleado administrativo",
      content: "Siempre llegaba raspando al 25. Ahora sé qué día pagar cada cosa y cuánto puedo gastar sin miedo. Es la primera vez que cierro un mes con plata a favor.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Laura Martínez",
      role: "Freelance",
      content: "Odiaba sumar recibos los domingos. Conecté mis cuentas y la app me avisa antes de quedar corta. Armé un fondo de emergencia en 2 meses.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ricardo Sosa",
      role: "Papá de 2",
      content: "Tenía suscripciones y gastos chicos que se comían el sueldo. Controla IA los marcó y ahora ahorro fijo para la escuela de mis hijos.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
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
            Personas como vos que dejaron de perder plata y ahora llegan al mes con aire.
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
                <p className="text-gray-600 italic leading-relaxed mb-6">
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
                  <h4 className="text-sm font-bold text-secondary">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
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
