import { MessageCircle, Check, HelpCircle, Shirt, CreditCard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn, useInView } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const plans = {
  es: [
    {
      tag: "1 Disciplina", name: "Paquete Basico",
      price: "$850", desc: "Elige una disciplina y entrena sin limites. Ideal para enfocarte en una sola arte marcial.",
      features: ["Acceso a 1 disciplina de tu eleccion", "Clases grupales ilimitadas", "Horarios de manana y noche", "Acceso al area de entrenamiento", "Open Gym los viernes"],
      highlight: false,
    },
    {
      tag: "2 Disciplinas", name: "Paquete Intermedio", badge: "Popular",
      price: "$1,300", desc: "Combina dos disciplinas para un entrenamiento mas completo y versatil.",
      features: ["Acceso a 2 disciplinas de tu eleccion", "Clases grupales ilimitadas", "Entrenamiento cruzado", "Horarios de manana y noche", "Open Gym los viernes", "Mejor relacion precio-valor"],
      highlight: true,
    },
    {
      tag: "3 Disciplinas", name: "Paquete Completo", badge: "Mejor valor",
      price: "$1,600", desc: "Acceso a tres disciplinas para el entrenamiento mas integral posible.",
      features: ["Acceso a 3 disciplinas de tu eleccion", "BJJ, Kickboxing, Boxeo, MMA, Judo", "Clases grupales ilimitadas", "Entrenamiento cruzado integral", "Horarios de manana y noche", "Open Gym los viernes"],
      highlight: false,
    },
  ],
  en: [
    {
      tag: "1 Discipline", name: "Basic Package",
      price: "$850", desc: "Choose one discipline and train without limits. Ideal to focus on a single martial art.",
      features: ["Access to 1 discipline of your choice", "Unlimited group classes", "Morning and evening schedules", "Access to training area", "Open Gym on Fridays"],
      highlight: false,
    },
    {
      tag: "2 Disciplines", name: "Intermediate Package", badge: "Popular",
      price: "$1,300", desc: "Combine two disciplines for more complete and versatile training.",
      features: ["Access to 2 disciplines of your choice", "Unlimited group classes", "Cross-training", "Morning and evening schedules", "Open Gym on Fridays", "Best price-value ratio"],
      highlight: true,
    },
    {
      tag: "3 Disciplines", name: "Complete Package", badge: "Best value",
      price: "$1,600", desc: "Access three disciplines for the most comprehensive training possible.",
      features: ["Access to 3 disciplines of your choice", "BJJ, Kickboxing, Boxing, MMA, Judo", "Unlimited group classes", "Comprehensive cross-training", "Morning and evening schedules", "Open Gym on Fridays"],
      highlight: false,
    },
  ],
};

const txt = {
  es: {
    label: "Paquetes", title: "Precios, Paquetes y Horarios",
    sub: "Para todos los niveles: principiantes, intermedios y peleadores. Tu primera clase muestra es gratis, sin compromiso.",
    planCta: "Quiero este paquete",
    inscTitle: "Inscripcion", inscAmount: "$200", inscCurrency: "MXN",
    inscDesc: "Pago unico al inscribirte. Incluye playera de uniforme oficial de Dominio Combat Club.",
    inscIncludes: "Incluye playera de uniforme",
    privateTag: "Clases privadas", privateTitle: "Entrenamiento 1 a 1",
    privateDesc: "Coaching personalizado con tu instructor. Agenda tu sesion segun tu disponibilidad.",
    privateFrom: "Desde",
    disciplines: "Disciplinas disponibles",
    discList: "Jiu Jitsu (Gi y No-Gi) · Kickboxing · Boxeo · MMA · Judo · BJJ Mujeres · BJJ Kids",
    guideTitle: "No sabes cual elegir?",
    guide: [
      { title: "Quieres enfocarte en una disciplina", text: "El Paquete Basico ($850 MXN/mes) es ideal. Elige entre BJJ, Kickboxing, Boxeo, MMA o Judo y entrena sin limites." },
      { title: "Quieres combinar disciplinas", text: "Con 2 Disciplinas ($1,300 MXN) o 3 Disciplinas ($1,600 MXN) puedes hacer entrenamiento cruzado y mejorar mas rapido." },
      { title: "Necesitas atencion personalizada", text: "Las clases privadas (desde $550 MXN/hora) son perfectas si quieres avanzar mas rapido o tienes horarios especificos." },
    ],
    guideCta: "Quiero mi clase muestra gratis",
    guideNote: "Aun tienes dudas? Tu primera clase es gratis, sin compromiso.",
    motto: "Siete veces me caigo, ocho me levanto.",
  },
  en: {
    label: "Packages", title: "Pricing, Packages & Schedules",
    sub: "For all levels: beginners, intermediate, and fighters. Your first trial class is free, no commitment.",
    planCta: "I want this package",
    inscTitle: "Registration", inscAmount: "$200", inscCurrency: "MXN",
    inscDesc: "One-time payment upon registration. Includes official Dominio Combat Club uniform t-shirt.",
    inscIncludes: "Includes uniform t-shirt",
    privateTag: "Private classes", privateTitle: "1-on-1 Training",
    privateDesc: "Personalized coaching with your instructor. Schedule your session based on availability.",
    privateFrom: "From",
    disciplines: "Available disciplines",
    discList: "Jiu Jitsu (Gi & No-Gi) · Kickboxing · Boxing · MMA · Judo · Women's BJJ · Kids BJJ",
    guideTitle: "Not sure which to choose?",
    guide: [
      { title: "You want to focus on one discipline", text: "The Basic Package ($850 MXN/month) is ideal. Choose between BJJ, Kickboxing, Boxing, MMA, or Judo and train without limits." },
      { title: "You want to combine disciplines", text: "With 2 Disciplines ($1,300 MXN) or 3 Disciplines ($1,600 MXN) you can cross-train and improve faster." },
      { title: "You need personalized attention", text: "Private classes (from $550 MXN/hour) are perfect if you want to progress faster or have specific schedules." },
    ],
    guideCta: "I want my free trial class",
    guideNote: "Still have questions? Your first class is free, no commitment.",
    motto: "Seven times I fall, eight I get up.",
  },
};

function PlanFeatureList({ features }) {
  const [ref, inView] = useInView();
  return (
    <ul ref={ref} className="space-y-3 mb-8 flex-1">
      {features.map((item, i) => (
        <li
          key={item}
          className={`flex items-start gap-3 transition-all duration-500 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: inView ? `${i * 55}ms` : "0ms" }}
        >
          <Check
            className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-500 ${
              inView ? "text-[#C9A24A] scale-100" : "text-[#C9A24A]/20 scale-75"
            }`}
            style={{ transitionDelay: inView ? `${i * 55 + 40}ms` : "0ms" }}
          />
          <span className="text-[#B9B4A8] text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PlanesPage() {
  const { lang } = useLanguage();
  const tx = txt[lang];
  const pls = plans[lang];
  return (
    <div data-testid="planes-page" className="pt-20">
      <section className="relative py-20 md:py-28 bg-[#0B0B0D] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,74,0.12),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimateIn>
            <span className="font-heading text-sm uppercase tracking-[0.25em] text-[#C9A24A]">{tx.label}</span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 data-testid="planes-title" className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-4 leading-[0.95]">
              {tx.title}
            </h1>
          </AnimateIn>
          <AnimateIn delay={220} className="max-w-2xl">
            <p className="mt-6 text-[#B9B4A8] text-base md:text-lg md:leading-relaxed border-l-2 border-[#C9A24A]/40 pl-5">{tx.sub}</p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
            {pls.map((plan, i) => (
              <AnimateIn key={plan.tag} delay={i * 150} className="h-full">
                <div
                  data-testid={`plan-${i + 1}-card`}
                  className={`h-full p-8 md:p-9 flex flex-col relative overflow-hidden transition-all duration-300 card-gradient-border ${
                    plan.highlight
                      ? "bg-[#2B2D31] border-2 border-[#C9A24A]/50 animate-border-glow hover:shadow-lg hover:shadow-[#C9A24A]/15 md:-mt-4 md:mb-[-1rem] md:py-12"
                      : "glass-card glass-card-hover hover:-translate-y-1"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 right-0 bg-[#C9A24A] text-[#0B0B0D] font-heading text-xs uppercase tracking-wider font-bold px-4 py-1.5 z-10">
                      {plan.badge}
                    </div>
                  )}
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{plan.tag}</span>
                  <h2 className="font-heading text-2xl md:text-3xl uppercase font-bold text-[#F4F3EF] mt-2">{plan.name}</h2>
                  <div className="accent-line mt-3" />
                  <div className="mt-6 mb-6">
                    <span className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">{plan.price}</span>
                    <span className="text-[#B9B4A8] text-sm ml-2">MXN / {lang === "es" ? "mes" : "month"}</span>
                  </div>
                  <p className="text-[#B9B4A8] text-sm leading-relaxed mb-6">{plan.desc}</p>
                  <PlanFeatureList features={plan.features} />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`plan-${i + 1}-cta`}
                    className={`btn-glow inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider px-6 py-4 transition-all duration-300 relative z-0 ${
                      plan.highlight
                        ? "bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] hover:shadow-lg hover:shadow-[#C9A24A]/20"
                        : "border border-white/20 text-[#F4F3EF] hover:bg-white/10 hover:border-white/40"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{tx.planCta}</span>
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="mt-8 block">
            <div
              data-testid="inscription-card"
              className="card-gradient-border border border-[#C9A24A]/35 bg-[#1A1B1E]/95 p-8 md:p-10 relative overflow-hidden shadow-[0_0_40px_-12px_rgba(201,162,74,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24A]/[0.07] via-transparent to-transparent pointer-events-none" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A24A]/10 flex items-center justify-center shrink-0 border border-[#C9A24A]/20">
                    <CreditCard className="w-6 h-6 text-[#C9A24A]" />
                  </div>
                  <div>
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.inscTitle}</span>
                    <h3 className="font-heading text-2xl uppercase font-bold text-[#F4F3EF] mt-1">
                      {tx.inscAmount} <span className="text-base font-normal text-[#B9B4A8]">{tx.inscCurrency}</span>
                    </h3>
                    <p className="text-[#B9B4A8] text-sm mt-2 max-w-md">{tx.inscDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#C9A24A]/10 px-4 py-2 border border-[#C9A24A]/25">
                  <Shirt className="w-4 h-4 text-[#C9A24A]" />
                  <span className="text-[#C9A24A] text-sm font-bold uppercase tracking-wider">{tx.inscIncludes}</span>
                </div>
              </div>
            </div>
          </AnimateIn>

          <div className="mt-6 p-6 bg-white/[0.02] border border-white/5 text-center rounded-sm">
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A] mb-2">{tx.disciplines}</p>
            <p className="text-[#B9B4A8] text-sm">{tx.discList}</p>
          </div>

          <AnimateIn className="mt-6 block">
            <div
              data-testid="private-classes-card"
              className="glass-card glass-card-hover p-8 md:p-10 border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.privateTag}</span>
                  <h3 className="font-heading text-2xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.privateTitle}</h3>
                  <p className="text-[#B9B4A8] text-sm mt-2 max-w-md">{tx.privateDesc}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.privateFrom}</p>
                  <span className="font-heading text-3xl font-bold text-[#F4F3EF]">$550</span>
                  <span className="text-[#B9B4A8] text-sm ml-1">MXN / {lang === "es" ? "hora" : "hour"}</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section data-testid="beginner-guide" className="py-16 md:py-24 bg-[#1A1B1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_100%_0%,rgba(201,162,74,0.06),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle className="w-7 h-7 text-[#C9A24A]" />
              <h2 className="font-heading text-2xl md:text-4xl uppercase font-bold text-[#F4F3EF] tracking-tight">{tx.guideTitle}</h2>
            </div>
          </AnimateIn>
          <div className="space-y-5">
            {tx.guide.map((g, i) => (
              <AnimateIn key={g.title} delay={i * 120}>
                <div className="border-l-2 border-[#C9A24A]/30 pl-6 py-1 hover:border-[#C9A24A] transition-colors duration-300 bg-white/[0.02] rounded-r-lg pr-4">
                  <h3 className="font-heading text-lg uppercase font-semibold text-[#F4F3EF]">{g.title}</h3>
                  <p className="text-[#B9B4A8] text-sm mt-1.5 leading-relaxed">{g.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={380} className="mt-12 block">
            <div className="relative p-8 md:p-10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#C9A24A]/20 text-center overflow-hidden rounded-sm shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent" />
              <p className="text-[#B9B4A8] text-sm mb-4">{tx.guideNote}</p>
              <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-gradient-gold tracking-tight mb-8 leading-snug">
                &ldquo;{tx.motto}&rdquo;
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="guide-cta"
                className="btn-glow inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-sm transition-all duration-300 hover:scale-[1.02] relative z-0"
              >
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tx.guideCta}</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
