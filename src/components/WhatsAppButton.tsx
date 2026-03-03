import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 1000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/51990253005"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform ${
        bounce ? "whatsapp-bounce" : ""
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
