import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Descubrimos tu esencia",
    desc: "Análisis exhaustivo de tu marca, mercado y audiencia.",
  },
  {
    num: "02",
    title: "Diseñamos tu estrategia",
    desc: "Plan estratégico personalizado para alcanzar tus objetivos.",
  },
  {
    num: "03",
    title: "Creamos tu identidad",
    desc: "Desarrollo visual y comunicacional que te diferencia.",
  },
  {
    num: "04",
    title: "Lanzamos y optimizamos",
    desc: "Implementación, monitoreo y mejora continua de resultados.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestro proceso
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Cómo trabajamos
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line origin-top hidden sm:block"
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="text-primary font-bold text-sm">{step.num}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.desc}</p>
                </div>

                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
                  className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                />

                {/* Spacer for the other side */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
