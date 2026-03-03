import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

export const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 whatsapp-pulse"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};
