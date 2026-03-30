import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const titles = {
  es: {
    "/": "Dominio Combat Club | Artes Marciales en Merida",
    "/clases": "Clases | Dominio Combat Club",
    "/horario": "Horario | Dominio Combat Club",
    "/planes": "Planes y Precios | Dominio Combat Club",
    "/faq": "Preguntas Frecuentes | Dominio Combat Club",
    "/contacto": "Contacto | Dominio Combat Club",
  },
  en: {
    "/": "Dominio Combat Club | Martial Arts in Merida",
    "/clases": "Classes | Dominio Combat Club",
    "/horario": "Schedule | Dominio Combat Club",
    "/planes": "Plans & Pricing | Dominio Combat Club",
    "/faq": "FAQ | Dominio Combat Club",
    "/contacto": "Contact | Dominio Combat Club",
  },
};

export function usePageTitle() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const title = titles[lang]?.[pathname] || "Dominio Combat Club";
    document.title = title;
  }, [pathname, lang]);
}
