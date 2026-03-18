import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import teamImg from "@/assets/team-hands.webp";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}>

          <p className="text-3xl md:text-3xl text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {/* Quiénes somos */}
            {/* <span className="text-primary">creativa y profesional</span> */}
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Essenza Estudio es un equipo creativo que transforma marcas para hacerlas crecer.
            Integramos branding, marketing y contenido para construir una presencia sólida y efectiva.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block text-primary font-semibold hover:underline">

            Conoce nuestros servicios →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative">

          <img

            alt="Equipo Essenza Estudio"
            className="w-full rounded-2xl shadow-2xl"
            loading="lazy" src="/lovable-uploads/d87c07d4-4628-4e7b-abff-e8b1900ea710.png" />

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>);

};

export default About;