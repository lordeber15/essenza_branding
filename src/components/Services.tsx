import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Fingerprint,
  Target,
  Share2,
  Megaphone,
  Film,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Branding e identidad",
    description:
      "Identidades visuales únicas, auténticas y memorables que representan la esencia de tu marca.",
  },
  {
    icon: Target,
    title: "Estrategia de marca",
    description:
      "Analizamos, planificamos y definimos el ADN de tu marca para que conecte con tu audiencia.",
  },
  {
    icon: Share2,
    title: "Social media",
    description:
      "Gestión estratégica de redes sociales que posiciona tu marca y genera engagement real.",
  },
  {
    icon: Megaphone,
    title: "Pauta publicitaria",
    description:
      "Campañas inteligentes que llegan a la audiencia correcta en el momento adecuado.",
  },
  {
    icon: Film,
    title: "Producción audiovisual",
    description:
      "Contenido audiovisual de alta calidad que emociona, conecta y resuena con tu público.",
  },
  {
    icon: MessageSquare,
    title: "Consultoría estratégica",
    description:
      "Asesoría personalizada para marcas que buscan claridad, dirección y crecimiento sostenido.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Lo que hacemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Nuestros servicios
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.description}
              </p>
              <a
                href="#contact"
                className="text-primary text-sm font-semibold hover:underline"
              >
                Saber más →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
