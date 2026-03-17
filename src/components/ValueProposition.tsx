import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, BarChart3, Sparkles } from "lucide-react";
import exitoImg from "@/assets/exito.jpg";

const cards = [
  {
    icon: Palette,
    title: "Branding estratégico",
    description:
      "Creamos identidades visuales únicas que representan la esencia de tu marca y la diferencian en el mercado.",
  },
  {
    icon: BarChart3,
    title: "Marketing digital",
    description:
      "Estrategias inteligentes que posicionan tu marca y generan resultados medibles en el mundo digital.",
  },
  {
    icon: Sparkles,
    title: "Creación de contenido",
    description:
      "Contenido audiovisual de alta calidad que emociona, conecta y resuena con tu audiencia.",
  },
];

const ValueProposition = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section className="w-full">
        <motion.img
          src={exitoImg}
          alt="Escalando hacia el éxito"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[50vh] md:h-[60vh] object-cover"
        />
      </section>
      <section className="section-padding gradient-navy" ref={ref}>
        <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Impulsamos tu esencia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground"
        >
          Elevamos tu éxito
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
