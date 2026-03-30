import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

export const WhatsAppFloat = () => {
  const { lang } = useLanguage();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      aria-label={lang === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
      className="group fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden sm:block bg-[#0B0B0D] text-[#F4F3EF] text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {lang === "es" ? "Clase muestra gratis" : "Free trial class"}
      </span>
      <span className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 whatsapp-pulse">
        <MessageCircle className="w-6 h-6" />
      </span>
    </a>
  );
};
