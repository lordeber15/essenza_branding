import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "El teléfono es obligatorio").max(20),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const url = new URL("https://n8n.impalexander.store/webhook/fb1645bf-db04-40a1-bf9e-ae09218c5515");
      Object.keys(data).forEach(key =>
        url.searchParams.append(key, String(data[key as keyof ContactForm]))
      );

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error al enviar el formulario:", response.statusText);
        alert("Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error de red al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Escríbenos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground">¡Mensaje enviado!</h3>
            <p className="text-muted-foreground mt-2">
              Nos pondremos en contacto contigo pronto.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("name")}
                  placeholder="Nombre *"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("company")}
                  placeholder="Empresa"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email *"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Teléfono *"
                  className={inputClass}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto... *"
                className={inputClass}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={18} />
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
