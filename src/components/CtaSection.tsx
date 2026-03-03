import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CtaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="section-padding gradient-turquoise" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground"
        >
          Potencia tu marca con nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-primary-foreground/90"
        >
          Agenda tu cita y empecemos a construir tu crecimiento.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 inline-block bg-secondary text-secondary-foreground font-bold px-10 py-4 rounded-lg text-lg pulse-cta hover:scale-105 transition-transform"
        >
          AGENDAR CITA
        </motion.a>
      </div>
    </section>
  );
};

export default CtaSection;
