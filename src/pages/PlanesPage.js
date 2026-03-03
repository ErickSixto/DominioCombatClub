import { Link } from "react-router-dom";
import { MessageCircle, Check, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const txt = {
  es: {
    label: "Planes", title: "Planes y Precios",
    sub: "Elige el plan que mejor se adapte a tus objetivos. Tu primera clase muestra es gratis, sin compromiso.",
    plan1Tag: "Boxeo", plan1Name: "Mensualidad Boxeo",
    plan1Desc: "Ideal para quienes quieren enfocarse exclusivamente en el boxeo.",
    plan1Features: ["Acceso a todas las clases de Boxeo", "Clases grupales ilimitadas", "Horarios de manana y noche", "Acceso al area de entrenamiento", "Open Gym los viernes"],
    plan2Tag: "Completo", plan2Name: "Artes Marciales + Boxeo", plan2Badge: "Mejor valor",
    plan2Desc: "Para quienes quieren un entrenamiento integral con acceso a todas las disciplinas.",
    plan2Features: ["Acceso a TODAS las disciplinas", "BJJ (Gi y No-Gi), Kickboxing, Boxeo, Judo", "Clases grupales ilimitadas", "Entrenamiento cruzado integral", "Open Gym los viernes", "Mejor valor por tu inversion"],
    planCta1: "Quiero esta membresia", planCta2: "Quiero esta membresia",
    privateTag: "Clases privadas", privateTitle: "Entrenamiento 1 a 1",
    privateDesc: "Coaching personalizado con tu instructor. Agenda tu sesion segun tu disponibilidad.",
    privateFrom: "Desde",
    guideTitle: "No sabes cual elegir?",
    guide: [
      { title: "Solo quieres boxear", text: "La Mensualidad Boxeo ($850 MXN) es perfecta. Accedes a todas las clases de boxeo con horarios de manana y noche." },
      { title: "Quieres entrenamiento completo", text: "Artes Marciales + Boxeo ($1,800 MXN) te da acceso a todo: BJJ, Kickboxing, Boxeo y Judo. El mejor valor." },
      { title: "Necesitas atencion personalizada", text: "Las clases privadas son perfectas si quieres avanzar mas rapido o tienes horarios especificos." },
    ],
    guideCta: "Quiero mi clase muestra gratis",
    guideNote: "Aun tienes dudas? Tu primera clase es gratis, sin compromiso.",
  },
  en: {
    label: "Plans", title: "Plans & Pricing",
    sub: "Choose the plan that best fits your goals. Your first trial class is free, no commitment.",
    plan1Tag: "Boxing", plan1Name: "Boxing Monthly",
    plan1Desc: "Ideal for those who want to focus exclusively on boxing.",
    plan1Features: ["Access to all Boxing classes", "Unlimited group classes", "Morning and evening schedules", "Access to training area", "Open Gym on Fridays"],
    plan2Tag: "Complete", plan2Name: "Martial Arts + Boxing", plan2Badge: "Best value",
    plan2Desc: "For those who want comprehensive training with access to all disciplines.",
    plan2Features: ["Access to ALL disciplines", "BJJ (Gi & No-Gi), Kickboxing, Boxing, Judo", "Unlimited group classes", "Cross-training for complete development", "Open Gym on Fridays", "Best value for your investment"],
    planCta1: "I want this membership", planCta2: "I want this membership",
    privateTag: "Private classes", privateTitle: "1-on-1 Training",
    privateDesc: "Personalized coaching with your instructor. Schedule your session based on availability.",
    privateFrom: "From",
    guideTitle: "Not sure which to choose?",
    guide: [
      { title: "You just want to box", text: "Boxing Monthly ($850 MXN) is perfect. Access all boxing classes with morning and evening schedules." },
      { title: "You want complete training", text: "Martial Arts + Boxing ($1,800 MXN) gives you access to everything: BJJ, Kickboxing, Boxing and Judo. Best value." },
      { title: "You need personalized attention", text: "Private classes are perfect if you want to progress faster or have specific schedules." },
    ],
    guideCta: "I want my free trial class",
    guideNote: "Still have questions? Your first class is free, no commitment.",
  },
};

export default function PlanesPage() {
  const { lang } = useLanguage();
  const tx = txt[lang];
  return (
    <div data-testid="planes-page" className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.label}</span>
          <h1 data-testid="planes-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
            {tx.title}
          </h1>
          <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-xl">{tx.sub}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20 bg-[#0B0B0D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Plan 1 - Boxeo */}
            <div data-testid="plan-1-card" className="bg-[#2B2D31] border border-white/10 p-8 md:p-10 flex flex-col hover:border-white/20 transition-all duration-300">
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan1Tag}</span>
              <h2 className="font-heading text-3xl md:text-4xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan1Name}</h2>
              <div className="accent-line mt-3" />
              <div className="mt-8 mb-8">
                <span className="font-heading text-5xl md:text-6xl font-bold text-[#F4F3EF]">$850</span>
                <span className="text-[#B9B4A8] text-base ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
              </div>
              <p className="text-[#B9B4A8] text-sm leading-relaxed mb-8">{tx.plan1Desc}</p>
              <ul className="space-y-4 mb-10 flex-1">
                {tx.plan1Features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 shrink-0 text-[#C9A24A] mt-0.5" />
                    <span className="text-[#B9B4A8] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="plan-1-cta"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#F4F3EF] hover:bg-white/10 font-bold text-sm uppercase tracking-wider px-6 py-4 transition-all">
                <MessageCircle className="w-4 h-4" />{tx.planCta1}
              </a>
            </div>

            {/* Plan 2 - AM + Boxeo */}
            <div data-testid="plan-2-card" className="bg-[#2B2D31] border border-[#C9A24A]/40 p-8 md:p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C9A24A] text-[#0B0B0D] font-heading text-xs uppercase tracking-wider font-bold px-5 py-2">
                {tx.plan2Badge}
              </div>
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan2Tag}</span>
              <h2 className="font-heading text-3xl md:text-4xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan2Name}</h2>
              <div className="accent-line mt-3" />
              <div className="mt-8 mb-8">
                <span className="font-heading text-5xl md:text-6xl font-bold text-[#F4F3EF]">$1,800</span>
                <span className="text-[#B9B4A8] text-base ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
              </div>
              <p className="text-[#B9B4A8] text-sm leading-relaxed mb-8">{tx.plan2Desc}</p>
              <ul className="space-y-4 mb-10 flex-1">
                {tx.plan2Features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 shrink-0 text-[#C9A24A] mt-0.5" />
                    <span className="text-[#B9B4A8] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="plan-2-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] font-bold text-sm uppercase tracking-wider px-6 py-4 transition-all duration-300">
                <MessageCircle className="w-4 h-4" />{tx.planCta2}
              </a>
            </div>
          </div>

          {/* Private Classes */}
          <div data-testid="private-classes-card" className="mt-8 bg-[#1A1B1E] border border-white/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.privateTag}</span>
                <h3 className="font-heading text-2xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.privateTitle}</h3>
                <p className="text-[#B9B4A8] text-sm mt-2 max-w-md">{tx.privateDesc}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.privateFrom}</p>
                <span className="font-heading text-3xl font-bold text-[#F4F3EF]">$550</span>
                <span className="text-[#B9B4A8] text-sm ml-1">MXN / {lang === 'es' ? 'hora' : 'hour'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner Guide */}
      <section data-testid="beginner-guide" className="py-16 md:py-24 bg-[#1A1B1E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-[#C9A24A]" />
            <h2 className="font-heading text-2xl md:text-3xl uppercase font-bold text-[#F4F3EF]">{tx.guideTitle}</h2>
          </div>
          <div className="space-y-6">
            {tx.guide.map((g) => (
              <div key={g.title} className="border-l-2 border-[#C9A24A]/20 pl-6 hover:border-[#C9A24A] transition-colors duration-300">
                <h3 className="font-heading text-lg uppercase font-semibold text-[#F4F3EF]">{g.title}</h3>
                <p className="text-[#B9B4A8] text-sm mt-1 leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white/[0.03] border border-white/5 text-center">
            <p className="text-[#B9B4A8] text-sm mb-4">{tx.guideNote}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="guide-cta"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-sm transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-4 h-4" />{tx.guideCta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
