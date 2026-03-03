import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Estrategia personalizada para cada marca",
  "Equipo creativo experto multidisciplinario",
  "Enfoque en resultados medibles",
  "Branding con propósito y autenticidad",
];

const Differentials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-navy" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-12"
        >
          ¿Por qué elegir{" "}
          <span className="text-primary">Essenza</span>?
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="flex items-center gap-4 bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-5"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-secondary-foreground font-medium text-left">
                {r}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
