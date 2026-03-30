import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_combat-merida/artifacts/onbyxgb2_image.png";

const navLinks = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/clases", label: { es: "Clases", en: "Classes" } },
  { href: "/horario", label: { es: "Horario", en: "Schedule" } },
  { href: "/planes", label: { es: "Planes", en: "Pricing" } },
  { href: "/faq", label: { es: "FAQ", en: "FAQ" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact" } },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      data-testid="main-header"
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out relative ${
        scrolled
          ? "bg-[#0B0B0D]/80 backdrop-blur-xl after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/15 after:to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ease-out ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <img
              src={LOGO_URL}
              alt="Dominio Combat Club"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-lg md:text-xl font-bold uppercase tracking-wider text-[#F4F3EF]">
                Dominio
              </span>
              <span className="font-heading text-xs block tracking-[0.25em] text-[#B9B4A8] uppercase">
                Combat Club
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-testid={`nav-${link.label.es.toLowerCase()}`}
                className={`nav-link-underline font-heading text-sm uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "active text-[#C9A24A]"
                    : "text-[#B9B4A8] hover:text-[#F4F3EF]"
                }`}
              >
                {link.label[lang]}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              data-testid="lang-toggle-desktop"
              className="font-heading text-xs uppercase tracking-wider text-[#B9B4A8] hover:text-[#C9A24A] transition-colors border border-white/10 hover:border-[#C9A24A]/30 px-2.5 py-1.5 flex items-center gap-1.5"
              aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-whatsapp-cta"
              className="btn-glow inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === 'es' ? 'Agendar por WhatsApp' : 'Book via WhatsApp'}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              data-testid="lang-toggle-mobile"
              className="font-heading text-xs uppercase tracking-wider text-[#B9B4A8] hover:text-[#C9A24A] transition-colors border border-white/10 px-2 py-1.5 flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-whatsapp-cta"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider px-3 py-2 rounded-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'es' ? 'WhatsApp' : 'WhatsApp'}</span>
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  data-testid="mobile-menu-toggle"
                  className="p-2 text-[#F4F3EF] hover:text-[#C9A24A] transition-colors"
                  aria-label="Abrir menu"
                >
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0B0B0D] border-[#2B2D31] w-72">
                <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      data-testid={`mobile-nav-${link.label.es.toLowerCase()}`}
                      style={{ animationDelay: `${index * 55}ms` }}
                      className={`font-heading text-lg uppercase tracking-wider py-3 px-2 transition-colors border-b border-white/5 animate-in fade-in-0 slide-in-from-right-3 duration-300 fill-mode-forwards ${
                        location.pathname === link.href
                          ? "text-[#C9A24A]"
                          : "text-[#B9B4A8] hover:text-[#F4F3EF]"
                      }`}
                    >
                      {link.label[lang]}
                    </Link>
                  ))}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-sheet-whatsapp"
                    style={{ animationDelay: `${navLinks.length * 55}ms` }}
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-sm animate-in fade-in-0 slide-in-from-right-3 duration-300 fill-mode-forwards"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {lang === 'es' ? 'Agendar Clase Gratis' : 'Book Free Class'}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
