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
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Somos una agencia de branding{" "}
            <span className="text-primary">creativa y profesional</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Formada por un equipo creativo y profesional, dedicada a ofrecerte
            soluciones personalizadas en marketing, publicidad, diseño y
            creación de contenidos. Nuestro objetivo es descubrir y potenciar la
            esencia única de tu marca, ayudándote a conectar de manera auténtica
            y efectiva con tu audiencia.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block text-primary font-semibold hover:underline"
          >
            Conoce nuestros servicios →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={teamImg}
            alt="Equipo Essenza Branding"
            className="w-full rounded-2xl shadow-2xl"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
