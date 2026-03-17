import logo from "@/assets/essenza-logo-white.svg";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy section-padding pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & description */}
          <div>
            <img src={logo} alt="Essenza Branding" className="h-10 w-auto mb-4" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Agencia de branding y marketing estratégico para marcas que quieren
              diferenciarse y crecer.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-secondary-foreground/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+51990253005">990 253 005</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:essenzaestudio1@gmail.com">essenzaestudio1@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Lima, Perú
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/essenzabranding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Essenza Branding. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
