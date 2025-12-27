
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Andrés Gutiérrez",
      role: "Propietario de Flota Comercial",
      content: "Mantener mis vehículos al día era un caos. Con Controla IA, los recordatorios de mantenimiento preventivo son automáticos. Evité reparaciones carísimas de motor simplemente haciendo el service a tiempo. Un ahorro real.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Laura Martínez",
      role: "Freelance Digital",
      content: "Como independiente, odiaba sentarme los domingos a sumar facturas. Conectar mi banco y ver cómo la IA categoriza todo automáticamente me devolvió la paz mental. Ya no me asusta el cierre de mes.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ricardo Sosa",
      role: "Inversionista Particular",
      content: "La capacidad de tener mis inversiones y mis gastos fijos en la misma pantalla es invaluable. Me ayudó a identificar que estaba gastando de más en suscripciones que ni usaba.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary mb-4">
            Historias reales de <span className="text-primary">éxito financiero</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Personas como vos que decidieron dejar atrás las hojas de cálculo y tomar el control total.
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
