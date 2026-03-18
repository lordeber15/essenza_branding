import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Essenza Branding - Crecimiento"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight"
        >
          IMPULSAMOS TU ESENCIA,{" "}
          <span className="text-primary">elevamos tu éxito</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto"
        >
          Agencia de branding y marketing estratégico para marcas que quieren
          diferenciarse y crecer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            🟢 Agendar cita
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
