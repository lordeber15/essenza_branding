import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import logoAmaq from "@/assets/clients/logo-amaq.png";
import logoDrToledo from "@/assets/clients/logo-dr-adan-toledo.png";
import logoDrCardenas from "@/assets/clients/logo-dr-cardenas.png";
import logoDrRevilla from "@/assets/clients/logo-dr-revilla.png";
import logoJG from "@/assets/clients/logo-jg.png";
import logoMariajose from "@/assets/clients/logo-mariajose.png";
import logoOsteoclinic from "@/assets/clients/logo-osteoclinic.png";
import logoSanho from "@/assets/clients/logo-sanho.png";

const logos = [
  { src: logoAmaq, alt: "AMAQ" },
  { src: logoDrToledo, alt: "Dr. Adan Toledo" },
  { src: logoDrCardenas, alt: "Dr. Jimmy Cárdenas" },
  { src: logoDrRevilla, alt: "Dr. José Carlos Revilla" },
  { src: logoJG, alt: "J&G Building Studio" },
  { src: logoMariajose, alt: "Mariajosé Joyas & Accesorios" },
  { src: logoOsteoclinic, alt: "OsteoClinic" },
  { src: logoSanho, alt: "Sanho" },
];

const ClientLogos = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Nuestros clientes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Marcas que han confiado en Essenza
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Hemos trabajado con marcas de distintos sectores ayudándolas a fortalecer su presencia y estrategia de marketing.
        </motion.p>
      </div>

      {/* Infinite carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-52 h-32 mx-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[180px] max-h-[100px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
