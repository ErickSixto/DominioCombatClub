import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_combat-merida/artifacts/onbyxgb2_image.png";

const navItems = {
  es: [
    { href: "/", label: "Inicio" }, { href: "/clases", label: "Clases" }, { href: "/horario", label: "Horario" },
    { href: "/planes", label: "Planes y precios" }, { href: "/faq", label: "Preguntas frecuentes" }, { href: "/contacto", label: "Contacto" },
  ],
  en: [
    { href: "/", label: "Home" }, { href: "/clases", label: "Classes" }, { href: "/horario", label: "Schedule" },
    { href: "/planes", label: "Plans & pricing" }, { href: "/faq", label: "FAQ" }, { href: "/contacto", label: "Contact" },
  ],
};

export const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer data-testid="site-footer" className="bg-[#0B0B0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="Dominio" className="h-12 w-12 rounded-full" />
              <div>
                <span className="font-heading text-xl font-bold uppercase tracking-wider text-[#F4F3EF] block">Dominio</span>
                <span className="font-heading text-xs tracking-[0.25em] text-[#B9B4A8] uppercase">Combat Club</span>
              </div>
            </div>
            <p className="text-[#B9B4A8] text-sm leading-relaxed max-w-xs">
              {lang === 'es' ? 'Artes marciales en Merida desde 2016. Jiu Jitsu, Kickboxing, Boxeo, Judo, MMA y acondicionamiento fisico.' : 'Martial arts in Merida since 2016. Jiu Jitsu, Kickboxing, Boxing, Judo, MMA and physical conditioning.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A] mb-6">
              {lang === 'es' ? 'Navegacion' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {navItems[lang].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-[#B9B4A8] hover:text-[#F4F3EF] text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A] mb-6">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="flex items-center gap-3 text-[#B9B4A8] hover:text-[#25D366] text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  +52 999 257 0757
                </a>
              </li>
              <li>
                <a
                  href="tel:+529992570757"
                  data-testid="footer-phone"
                  className="flex items-center gap-3 text-[#B9B4A8] hover:text-[#F4F3EF] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +52 999 257 0757
                </a>
              </li>
              <li>
                <a
                  href="mailto:dominiocombatclub@gmail.com"
                  data-testid="footer-email"
                  className="flex items-center gap-3 text-[#B9B4A8] hover:text-[#F4F3EF] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  dominiocombatclub@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dominio_combatclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-instagram"
                  className="flex items-center gap-3 text-[#B9B4A8] hover:text-[#F4F3EF] text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  @Dominio_CombatClub
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A] mb-6">
              {lang === 'es' ? 'Ubicacion' : 'Location'}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-[#B9B4A8] mt-0.5" />
                <p className="text-[#B9B4A8] text-sm leading-relaxed">
                  C. 32A 514, Maya, 97134<br />Merida, Yucatan, Mexico
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 shrink-0 text-[#B9B4A8] mt-0.5" />
                <div className="text-[#B9B4A8] text-sm leading-relaxed">
                  <p>{lang === 'es' ? 'Lun - Vie: 7:00am - 10:00pm' : 'Mon - Fri: 7:00am - 10:00pm'}</p>
                  <p className="text-xs text-[#B9B4A8]/60 mt-1">{lang === 'es' ? 'Clases privadas: por disponibilidad' : 'Private classes: by availability'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#B9B4A8]/50 text-xs">
            &copy; {new Date().getFullYear()} Dominio Combat Club. Todos los derechos reservados.
          </p>
          <p className="text-[#B9B4A8]/50 text-xs">
            Merida, Yucatan, Mexico
          </p>
        </div>
      </div>
    </footer>
  );
};
