import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. José Carlos Revilla",
    company: "Grupo Oncológico",
    text: "Essenza transformó nuestra presencia digital. Su enfoque estratégico nos permitió conectar con más pacientes de forma auténtica y profesional.",
  },
  {
    name: "Mariajosé",
    company: "Mariajosé Accessories",
    text: "El equipo de Essenza entendió la esencia de mi marca desde el primer día. Los resultados superaron mis expectativas.",
  },
  {
    name: "J&G Building Studio",
    company: "Arquitectura y Diseño",
    text: "Profesionalismo, creatividad y resultados. Essenza nos ayudó a posicionar nuestra marca en el mercado de manera efectiva.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Testimonios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className="relative">
          <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>
            <p className="font-bold text-foreground">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].company}</p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
