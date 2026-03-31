import { MessageCircle, Phone, Mail, Instagram, MapPin, Clock, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const txt = {
  es: {
    label: "Contacto", title: "Contactanos", sub: "La forma mas rapida de comunicarte con nosotros es por WhatsApp. Te respondemos en minutos.",
    waNote: "Respondo mas rapido por WhatsApp", locTitle: "Ubicacion",
    days: "Lunes a Viernes", hours: "7:00am - 10:00pm", privNote: "Clases privadas: por disponibilidad",
    mapLink: "Abrir en Google Maps",
    ctaTitle: "Listo Para Empezar?", ctaSub: "Tu primera clase muestra es gratis. Agenda por WhatsApp y te esperamos.", ctaBtn: "Agendar por WhatsApp",
  },
  en: {
    label: "Contact", title: "Contact Us", sub: "The fastest way to reach us is via WhatsApp. We respond in minutes.",
    waNote: "I respond fastest on WhatsApp", locTitle: "Location",
    days: "Monday to Friday", hours: "7:00am - 10:00pm", privNote: "Private classes: by availability",
    mapLink: "Open in Google Maps",
    ctaTitle: "Ready to Start?", ctaSub: "Your first trial class is free. Book via WhatsApp and we'll be waiting.", ctaBtn: "Book via WhatsApp",
  },
};

export default function ContactoPage() {
  const { lang } = useLanguage();
  const tx = txt[lang];
  return (
    <div data-testid="contacto-page" className="pt-20">
      <section className="bg-dark-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.label}</span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 data-testid="contacto-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">{tx.title}</h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-xl">{tx.sub}</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-cream-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <AnimateIn delay={0}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp"
                  className="block bg-[#25D366]/10 border border-[#25D366]/25 hover:border-[#25D366]/50 p-6 md:p-8 rounded-sm transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0"><MessageCircle className="w-6 h-6 text-white" /></div>
                    <div>
                      <p className="font-heading text-lg uppercase font-bold text-[#1A1720] group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                      <p className="text-[#3A3740] text-sm">+52 999 647 2315</p>
                      <p className="text-[#25D366] text-xs mt-1 font-semibold uppercase tracking-wider">{tx.waNote}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#3A3740] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </AnimateIn>
              <AnimateIn delay={80}>
                <a href="tel:+529996472315" data-testid="contact-phone"
                  className="block card-light p-6 md:p-8 transition-all duration-300 group hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1720]/5 border border-[#1A1720]/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-[#1A1720]" /></div>
                    <div>
                      <p className="font-heading text-lg uppercase font-bold text-[#1A1720]">{lang === 'es' ? 'Telefono' : 'Phone'}</p>
                      <p className="text-[#3A3740] text-sm">+52 999 647 2315</p>
                    </div>
                  </div>
                </a>
              </AnimateIn>
              <AnimateIn delay={160}>
                <a href="mailto:dominiocombatclub@gmail.com" data-testid="contact-email"
                  className="block card-light p-6 md:p-8 transition-all duration-300 group hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1720]/5 border border-[#1A1720]/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-[#1A1720]" /></div>
                    <div>
                      <p className="font-heading text-lg uppercase font-bold text-[#1A1720]">Email</p>
                      <p className="text-[#3A3740] text-sm">dominiocombatclub@gmail.com</p>
                    </div>
                  </div>
                </a>
              </AnimateIn>
              <AnimateIn delay={240}>
                <a href="https://www.instagram.com/dominio_combatclub/" target="_blank" rel="noopener noreferrer" data-testid="contact-instagram"
                  className="block card-light p-6 md:p-8 transition-all duration-300 group hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A1720]/5 border border-[#1A1720]/10 flex items-center justify-center shrink-0"><Instagram className="w-5 h-5 text-[#1A1720]" /></div>
                    <div>
                      <p className="font-heading text-lg uppercase font-bold text-[#1A1720]">Instagram</p>
                      <p className="text-[#3A3740] text-sm">@Dominio_CombatClub</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#3A3740] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </AnimateIn>
            </div>
            <AnimateIn from="right" className="min-w-0">
              <div className="mb-6">
                <h2 className="font-heading text-2xl md:text-3xl uppercase font-bold text-[#1A1720]">{tx.locTitle}</h2>
                <div className="accent-line mt-3" />
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                  <div>
                    <p className="text-[#1A1720] text-sm font-semibold">C. 32A 514, Maya, 97134</p>
                    <p className="text-[#3A3740] text-sm">Merida, Yucatan, Mexico</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                  <div>
                    <p className="text-[#1A1720] text-sm font-semibold">{tx.days}</p>
                    <p className="text-[#3A3740] text-sm">{tx.hours}</p>
                    <p className="text-[#3A3740]/60 text-xs mt-1">{tx.privNote}</p>
                  </div>
                </div>
              </div>
              <div className="h-[350px] md:h-[400px] rounded-sm overflow-hidden border-2 border-[#1A1720]/10">
                <iframe src="https://www.google.com/maps?q=Dominio+Combat+Club+Merida+Yucatan+C.+32A+514+Maya&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicacion de Dominio Combat Club" />
              </div>
              <a href="https://maps.app.goo.gl/ATZMS58GoMJNUu3KA" target="_blank" rel="noopener noreferrer" data-testid="contact-directions"
                className="mt-4 inline-flex items-center gap-2 text-[#C9A24A] hover:text-[#1A1720] font-bold text-sm uppercase tracking-wider transition-colors">
                <MapPin className="w-4 h-4" />{tx.mapLink}<ExternalLink className="w-3.5 h-3.5" />
              </a>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-dark-rich py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateIn>
            <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F4F3EF]">{tx.ctaTitle}</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="mt-4 text-[#B9B4A8] text-sm">{tx.ctaSub}</p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contacto-cta"
              className="btn-glow relative z-10 mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-5 h-5" />{tx.ctaBtn}
            </a>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
