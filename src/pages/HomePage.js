import { Link } from "react-router-dom";
import { Star, ShieldCheck, Users, Trophy, Clock, MapPin, ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1765303191119-89d0221d5c0b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920&fit=crop",
  bjj: "https://images.unsplash.com/photo-1742863067822-7719483acb63?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200&fit=crop",
  kickboxing: "https://images.unsplash.com/photo-1758778933112-af9fde620101?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200&fit=crop",
  boxing: "https://images.unsplash.com/photo-1748485378587-4ed27d79cce7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200&fit=crop",
  mma: "https://images.unsplash.com/photo-1680022545432-0b318f41838f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200&fit=crop",
  judo: "https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200&fit=crop",
};

const programs = {
  es: [
    { name: "Jiu Jitsu Brasileno", tag: "BJJ", image: IMAGES.bjj, desc: "Control, sumisiones y defensa personal" },
    { name: "Kickboxing", tag: "KICK", image: IMAGES.kickboxing, desc: "Golpes, patadas y acondicionamiento dinamico" },
    { name: "Boxeo", tag: "BOX", image: IMAGES.boxing, desc: "Fundamentos y cultura del boxeo mexicano" },
    { name: "MMA", tag: "MMA", image: IMAGES.mma, desc: "Artes marciales mixtas completas" },
    { name: "Judo", tag: "JUDO", image: IMAGES.judo, desc: "Proyecciones, barridas y control de pie" },
  ],
  en: [
    { name: "Brazilian Jiu Jitsu", tag: "BJJ", image: IMAGES.bjj, desc: "Control, submissions & self-defense" },
    { name: "Kickboxing", tag: "KICK", image: IMAGES.kickboxing, desc: "Strikes, kicks & dynamic conditioning" },
    { name: "Boxing", tag: "BOX", image: IMAGES.boxing, desc: "Fundamentals & Mexican boxing culture" },
    { name: "MMA", tag: "MMA", image: IMAGES.mma, desc: "Complete mixed martial arts" },
    { name: "Judo", tag: "JUDO", image: IMAGES.judo, desc: "Throws, sweeps & standing control" },
  ],
};

const testimonials = [
  { name: "Carlos M.", text: { es: "Llegue sin saber nada de artes marciales y el equipo me hizo sentir bienvenido desde el primer dia. La metodologia es excelente y se nota el profesionalismo.", en: "I arrived knowing nothing about martial arts and the team made me feel welcome from day one. The methodology is excellent and the professionalism shows." }, rating: 5 },
  { name: "Andrea R.", text: { es: "Las clases de Jiu Jitsu son increibles. Los instructores son pacientes y se nota su experiencia. El ambiente es muy respetuoso.", en: "The Jiu Jitsu classes are incredible. The instructors are patient and their experience shows. The atmosphere is very respectful." }, rating: 5 },
  { name: "Roberto L.", text: { es: "Llevo 3 anos entrenando aqui y puedo decir que Dominio es mi segunda casa. El ambiente es serio pero amigable, ideal para crecer.", en: "I've been training here for 3 years and I can say Dominio is my second home. The environment is serious but friendly, ideal for growth." }, rating: 5 },
  { name: "Maria F.", text: { es: "Probe mi primera clase de kickboxing y quede enganchada. Las instalaciones son limpias y bien equipadas. Muy recomendado.", en: "I tried my first kickboxing class and I was hooked. The facilities are clean and well-equipped. Highly recommended." }, rating: 5 },
  { name: "Luis G.", text: { es: "Los horarios son perfectos para quienes trabajamos. Las clases de las 7am son ideales para empezar el dia con energia.", en: "The schedule is perfect for those of us who work. The 7am classes are ideal to start the day with energy." }, rating: 5 },
  { name: "Patricia S.", text: { es: "Mi hijo entrena boxeo aqui y ha mejorado mucho su disciplina y confianza. Los entrenadores son excelentes con todos los niveles.", en: "My son trains boxing here and has greatly improved his discipline and confidence. The coaches are excellent with all levels." }, rating: 5 },
];

const scheduleSnapshot = {
  es: [
    { discipline: "Jiu Jitsu", morning: "8:00am", evening: "7:00pm" },
    { discipline: "Kickboxing", morning: "7:00am", evening: "8:00pm" },
    { discipline: "Boxeo", morning: "7:00am", evening: "7:00pm / 8:00pm" },
    { discipline: "MMA", morning: "7:00am", evening: "6:00pm" },
    { discipline: "Judo", morning: "--", evening: "5:00pm" },
    { discipline: "BJJ Mujeres", morning: "7:00am / 8:00am", evening: "--" },
    { discipline: "BJJ Kids", morning: "--", evening: "4:00pm" },
  ],
  en: [
    { discipline: "Jiu Jitsu", morning: "8:00am", evening: "7:00pm" },
    { discipline: "Kickboxing", morning: "7:00am", evening: "8:00pm" },
    { discipline: "Boxing", morning: "7:00am", evening: "7:00pm / 8:00pm" },
    { discipline: "MMA", morning: "7:00am", evening: "6:00pm" },
    { discipline: "Judo", morning: "--", evening: "5:00pm" },
    { discipline: "Women's BJJ", morning: "7:00am / 8:00am", evening: "--" },
    { discipline: "Kids BJJ", morning: "--", evening: "4:00pm" },
  ],
};

const t = {
  es: {
    heroTitle1: "Entrena Artes", heroTitle2: "Marciales", heroTitle3: "en Merida",
    heroSub: "Jiu Jitsu, Kickboxing, Boxeo, Judo, MMA y mas. Para principiantes, intermedios y peleadores. Ambiente serio, limpio y amigable.",
    ctaPrimary: "Clase Muestra Gratis", ctaSecondary: "Ver Horarios",
    trustReviews: "resenas", trustSince: "Desde", trustFree: "Primera clase", trustFreeB: "gratis",
    progLabel: "Disciplinas", progTitle: "Nuestros Programas", progMore: "Ver mas",
    methLabel: "Metodologia", methTitle: "Como es Entrenar Aqui",
    methItems: [
      { title: "Ambiente seguro", text: "Entrenamos con respeto y profesionalismo. No importa tu nivel, aqui todos son bienvenidos." },
      { title: "Comunidad fuerte", text: "Mas que un gimnasio, somos una comunidad. Entrenas con companeros que te apoyan y te retan a mejorar." },
      { title: "Instruccion de calidad", text: "Desde 2016, hemos perfeccionado nuestra metodologia para ofrecerte la mejor ensenanza de artes marciales en Merida." },
    ],
    methYears: "Anos de", methYearsB: "experiencia",
    schedLabel: "Horario", schedTitle: "Horarios Principales", schedNote: "Clases grupales de lunes a jueves",
    schedViewAll: "Ver horario completo", schedMorning: "Manana", schedEvening: "Tarde / Noche",
    priceLabel: "Paquetes", priceTitle: "Paquetes y Precios",
    plan1Tag: "1 Disciplina", plan1Name: "Paquete Basico", plan1Features: ["Acceso a 1 disciplina", "Clases grupales ilimitadas", "Horarios de manana y noche", "Open Gym los viernes"],
    plan2Tag: "2 Disciplinas", plan2Name: "Paquete Intermedio", plan2Features: ["Acceso a 2 disciplinas", "Entrenamiento cruzado", "Clases grupales ilimitadas", "Mejor relacion precio-valor"],
    plan2Badge: "Popular",
    plan3Tag: "3 Disciplinas", plan3Name: "Paquete Completo", plan3Features: ["Acceso a 3 disciplinas", "BJJ, Kickboxing, Boxeo, MMA, Judo", "Entrenamiento integral completo", "Open Gym los viernes"],
    plan3Badge: "Mejor valor",
    inscNote: "Inscripcion: $200 MXN (incluye playera de uniforme)",
    planCta: "Quiero este paquete",
    priceViewAll: "Ver todos los paquetes",
    reviewsLabel: "Resenas", reviewsTitle: "Lo Que Dicen Nuestros Miembros", reviewsGoogle: "en Google",
    locLabel: "Ubicacion", locTitle: "Visitanos", locDays: "Lunes a Viernes", locHours: "7:00am - 10:00pm",
    locDirections: "Como llegar",
    finalTitle: "Tu Primera Clase es Gratis",
    finalSub: "No necesitas experiencia. Solo ganas de empezar. Agenda tu clase muestra y conoce Dominio.",
    finalCta: "Agendar por WhatsApp",
    finalMotto: "Siete veces me caigo, ocho me levanto.",
  },
  en: {
    heroTitle1: "Train Martial", heroTitle2: "Arts in", heroTitle3: "Merida",
    heroSub: "Jiu Jitsu, Kickboxing, Boxing, Judo, MMA and more. For beginners, intermediate, and fighters. Serious, clean, and welcoming environment.",
    ctaPrimary: "Free Trial Class", ctaSecondary: "View Schedule",
    trustReviews: "reviews", trustSince: "Since", trustFree: "First class", trustFreeB: "free",
    progLabel: "Disciplines", progTitle: "Our Programs", progMore: "Learn more",
    methLabel: "Methodology", methTitle: "What Training Here is Like",
    methItems: [
      { title: "Safe environment", text: "We train with respect and professionalism. No matter your level, everyone is welcome here." },
      { title: "Strong community", text: "More than a gym, we're a community. You train with partners who support you and challenge you to improve." },
      { title: "Quality instruction", text: "Since 2016, we've perfected our methodology to offer you the best martial arts instruction in Merida." },
    ],
    methYears: "Years of", methYearsB: "experience",
    schedLabel: "Schedule", schedTitle: "Main Schedule", schedNote: "Group classes Monday through Friday",
    schedViewAll: "View full schedule", schedMorning: "Morning", schedEvening: "Afternoon / Evening",
    priceLabel: "Packages", priceTitle: "Packages & Pricing",
    plan1Tag: "1 Discipline", plan1Name: "Basic Package", plan1Features: ["Access to 1 discipline", "Unlimited group classes", "Morning and evening schedules", "Open Gym on Fridays"],
    plan2Tag: "2 Disciplines", plan2Name: "Intermediate Package", plan2Features: ["Access to 2 disciplines", "Cross-training", "Unlimited group classes", "Best price-value ratio"],
    plan2Badge: "Popular",
    plan3Tag: "3 Disciplines", plan3Name: "Complete Package", plan3Features: ["Access to 3 disciplines", "BJJ, Kickboxing, Boxing, MMA, Judo", "Complete integral training", "Open Gym on Fridays"],
    plan3Badge: "Best value",
    inscNote: "Registration: $200 MXN (includes uniform t-shirt)",
    planCta: "I want this package",
    priceViewAll: "View all packages",
    reviewsLabel: "Reviews", reviewsTitle: "What Our Members Say", reviewsGoogle: "on Google",
    locLabel: "Location", locTitle: "Visit Us", locDays: "Monday to Friday", locHours: "7:00am - 10:00pm",
    locDirections: "Get directions",
    finalTitle: "Your First Class is Free",
    finalSub: "No experience needed. Just the desire to start. Book your trial class and discover Dominio.",
    finalCta: "Book via WhatsApp",
    finalMotto: "Seven times I fall, eight I get up.",
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const tx = t[lang];
  const progs = programs[lang];
  const sched = scheduleSnapshot[lang];
  return (
    <div data-testid="home-page">
      <section data-testid="hero-section" className="relative min-h-[92vh] flex items-end pb-20 md:pb-28">
        <img
          src={IMAGES.hero}
          alt="Entrenamiento en Dominio Combat Club - artes marciales en Merida"
          className="absolute inset-0 w-full h-full object-cover animate-hero-parallax"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="accent-line mb-6 opacity-0 animate-fade-in-up" />
            <h1
              data-testid="hero-title"
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#F4F3EF] leading-[0.92] opacity-0 animate-fade-in-up animation-delay-100"
            >
              {tx.heroTitle1}<br />{tx.heroTitle2}<br />
              <span className="text-gradient-gold">{tx.heroTitle3}</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#B9B4A8] leading-relaxed max-w-lg opacity-0 animate-fade-in-up animation-delay-200">
              {tx.heroSub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-cta"
                className="btn-glow animate-border-glow inline-flex items-center justify-center gap-2 bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] hover:text-[#0B0B0D] font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A24A]/20"
              >
                <MessageCircle className="w-4 h-4" />
                {tx.ctaPrimary}
              </a>
              <Link
                to="/horario"
                data-testid="hero-schedule-cta"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#F4F3EF] hover:bg-white/10 hover:border-white/40 font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-300"
              >
                {tx.ctaSecondary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="trust-bar" className="bg-[#0B0B0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16">
            <AnimateIn delay={0}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A24A] text-[#C9A24A]" />
                  ))}
                </div>
                <span className="font-heading text-lg font-bold text-[#F4F3EF]">5.0</span>
                <span className="text-[#B9B4A8] text-sm">({lang === 'es' ? '104 resenas' : '104 reviews'})</span>
              </div>
            </AnimateIn>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <AnimateIn delay={150}>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
                <span className="text-[#B9B4A8] text-sm">{tx.trustSince} <span className="text-[#F4F3EF] font-bold">2016</span></span>
              </div>
            </AnimateIn>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <AnimateIn delay={300}>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#C9A24A]" />
                <span className="text-[#B9B4A8] text-sm">{tx.trustFree} <span className="text-[#F4F3EF] font-bold">{tx.trustFreeB}</span></span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section data-testid="programs-section" className="py-20 md:py-32 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-12 md:mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.progLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
              {tx.progTitle}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {progs.map((prog, i) => (
              <AnimateIn key={prog.name} delay={i * 100} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <Link
                  to="/clases"
                  data-testid={`program-card-${prog.tag.toLowerCase()}`}
                  className="program-card card-gradient-border group relative overflow-hidden bg-[#2B2D31] border border-white/5 h-72 md:h-80 flex flex-col justify-end"
                >
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
                  <div className="relative z-10 p-6">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{prog.tag}</span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-[#F4F3EF] mt-1">{prog.name}</h3>
                    <p className="text-[#B9B4A8] text-sm mt-2">{prog.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#F4F3EF] text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tx.progMore} <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="methodology-section" className="section-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.methLabel}</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mt-3" style={{color: '#0B0B0D'}}>
                {tx.methTitle}
              </h2>
              <div className="accent-line mt-4 mb-8" />
              <div className="space-y-6">
                {[ShieldCheck, Users, Trophy].map((Icon, idx) => (
                  <AnimateIn key={idx} delay={idx * 150}>
                    <div className="flex gap-4 border-l-2 border-[#C9A24A]/20 pl-6 hover:border-[#C9A24A] transition-colors duration-300">
                      <Icon className="w-5 h-5 shrink-0 mt-1 text-[#C9A24A]" />
                      <div>
                        <h3 className="font-heading text-lg uppercase font-semibold" style={{color: '#0B0B0D'}}>{tx.methItems[idx].title}</h3>
                        <p className="text-sm leading-relaxed mt-1" style={{color: '#2B2D31'}}>{tx.methItems[idx].text}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="relative">
                <img
                  src={IMAGES.bjj}
                  alt="Entrenamiento de Jiu Jitsu"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#C9A24A] p-6 hidden md:block animate-float">
                  <p className="font-heading text-3xl font-bold text-[#0B0B0D]">+9</p>
                  <p className="font-heading text-sm uppercase tracking-wider text-[#0B0B0D]">{tx.methYears}<br />{tx.methYearsB}</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section data-testid="schedule-snapshot" className="py-20 md:py-32 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.schedLabel}</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
                  {tx.schedTitle}
                </h2>
                <p className="text-[#B9B4A8] text-sm mt-2">{tx.schedNote}</p>
              </div>
              <Link
                to="/horario"
                data-testid="schedule-view-all"
                className="inline-flex items-center gap-2 text-[#C9A24A] hover:text-[#F4F3EF] font-bold text-sm uppercase tracking-wider transition-colors"
              >
                {tx.schedViewAll} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
          <AnimateIn delay={150}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left font-heading text-sm uppercase tracking-wider text-[#B9B4A8] py-4 pr-6">{lang === 'es' ? 'Disciplina' : 'Discipline'}</th>
                    <th className="text-left font-heading text-sm uppercase tracking-wider text-[#B9B4A8] py-4 pr-6">
                      <Clock className="w-3.5 h-3.5 inline mr-2" />{tx.schedMorning}
                    </th>
                    <th className="text-left font-heading text-sm uppercase tracking-wider text-[#B9B4A8] py-4">
                      <Clock className="w-3.5 h-3.5 inline mr-2" />{tx.schedEvening}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sched.map((row) => (
                    <tr key={row.discipline} className="border-b border-white/5 schedule-cell hover:bg-white/[0.03] hover:shadow-[inset_0_0_20px_rgba(201,162,74,0.05)] transition-all duration-300">
                      <td className="py-4 pr-6">
                        <span className="font-heading text-base uppercase font-semibold text-[#F4F3EF]">{row.discipline}</span>
                      </td>
                      <td className="py-4 pr-6 text-sm text-[#B9B4A8]">{row.morning}</td>
                      <td className="py-4 text-sm text-[#B9B4A8]">{row.evening}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section data-testid="pricing-teaser" className="py-20 md:py-32 bg-[#1A1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12 md:mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.priceLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
              {tx.priceTitle}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <AnimateIn delay={0}>
              <div data-testid="pricing-card-1" className="glass-card glass-card-hover border border-white/10 p-7 flex flex-col h-full hover:border-[#C9A24A]/30 hover:-translate-y-1 transition-all duration-300">
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan1Tag}</span>
                <h3 className="font-heading text-xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan1Name}</h3>
                <div className="mt-5 mb-5">
                  <span className="font-heading text-3xl font-bold text-[#F4F3EF]">$850</span>
                  <span className="text-[#B9B4A8] text-xs ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tx.plan1Features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#B9B4A8] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#C9A24A] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#F4F3EF] hover:bg-white/10 hover:border-white/40 font-bold text-xs uppercase tracking-wider px-5 py-3 transition-all duration-300">
                  {tx.planCta}
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div data-testid="pricing-card-2" className="bg-[#2B2D31] border-2 animate-pulse-gold p-7 flex flex-col relative overflow-hidden h-full hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A24A]/10 md:-mt-2 md:mb-[-0.5rem]">
                <div className="absolute top-0 right-0 bg-[#C9A24A] text-[#0B0B0D] font-heading text-xs uppercase tracking-wider font-bold px-3 py-1">
                  {tx.plan2Badge}
                </div>
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan2Tag}</span>
                <h3 className="font-heading text-xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan2Name}</h3>
                <div className="mt-5 mb-5">
                  <span className="font-heading text-3xl font-bold text-[#F4F3EF]">$1,300</span>
                  <span className="text-[#B9B4A8] text-xs ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tx.plan2Features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#B9B4A8] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#C9A24A] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] font-bold text-xs uppercase tracking-wider px-5 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A24A]/20">
                  {tx.planCta}
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div data-testid="pricing-card-3" className="glass-card glass-card-hover border border-white/10 p-7 flex flex-col relative overflow-hidden h-full hover:border-[#C9A24A]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-white/10 text-[#C9A24A] font-heading text-xs uppercase tracking-wider font-bold px-3 py-1">
                  {tx.plan3Badge}
                </div>
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan3Tag}</span>
                <h3 className="font-heading text-xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan3Name}</h3>
                <div className="mt-5 mb-5">
                  <span className="font-heading text-3xl font-bold text-[#F4F3EF]">$1,600</span>
                  <span className="text-[#B9B4A8] text-xs ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tx.plan3Features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#B9B4A8] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#C9A24A] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#F4F3EF] hover:bg-white/10 hover:border-white/40 font-bold text-xs uppercase tracking-wider px-5 py-3 transition-all duration-300">
                  {tx.planCta}
                </a>
              </div>
            </AnimateIn>
          </div>
          <p className="text-center text-[#B9B4A8]/60 text-xs mt-6">{tx.inscNote}</p>
          <div className="text-center mt-6">
            <Link
              to="/planes"
              data-testid="pricing-view-all"
              className="inline-flex items-center gap-2 text-[#C9A24A] hover:text-[#F4F3EF] font-bold text-sm uppercase tracking-wider transition-colors"
            >
              {tx.priceViewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="testimonials-section" className="py-20 md:py-32 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12 md:mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.reviewsLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
              {tx.reviewsTitle}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A24A] text-[#C9A24A]" />
                ))}
              </div>
              <span className="text-[#F4F3EF] font-bold">5.0</span>
              <span className="text-[#B9B4A8] text-sm">{tx.reviewsGoogle} (104 {tx.trustReviews})</span>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <AnimateIn key={review.name} delay={i * 100}>
                <div
                  data-testid={`testimonial-${review.name.replace(/\s/g, '-').toLowerCase()}`}
                  className="glass-card glass-card-hover border border-white/5 p-6 h-full hover:border-[#C9A24A]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A] text-[#C9A24A]" />
                    ))}
                  </div>
                  <blockquote className="text-[#B9B4A8] text-sm leading-relaxed mb-4">"{review.text[lang]}"</blockquote>
                  <p className="font-heading text-sm uppercase tracking-wider text-[#F4F3EF] font-semibold">{review.name}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="location-section" className="section-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.locLabel}</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mt-3" style={{color: '#0B0B0D'}}>
                {tx.locTitle}
              </h2>
              <div className="accent-line mt-4 mb-8" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm" style={{color: '#0B0B0D'}}>C. 32A 514, Maya, 97134</p>
                    <p className="text-sm" style={{color: '#2B2D31'}}>Merida, Yucatan, Mexico</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm" style={{color: '#0B0B0D'}}>{tx.locDays}</p>
                    <p className="text-sm" style={{color: '#2B2D31'}}>{tx.locHours}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.app.goo.gl/ATZMS58GoMJNUu3KA"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-directions-cta"
                  className="inline-flex items-center justify-center gap-2 bg-[#0B0B0D] text-[#F4F3EF] hover:bg-[#2B2D31] font-bold text-sm uppercase tracking-wider px-6 py-3 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  {tx.locDirections}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#0B0B0D]/20 text-[#0B0B0D] hover:bg-[#0B0B0D]/5 font-bold text-sm uppercase tracking-wider px-6 py-3 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </AnimateIn>
            <AnimateIn className="animate-slide-in-right">
              <div className="map-container h-[350px] md:h-[400px] bg-[#2B2D31]">
                <iframe
                  src="https://www.google.com/maps?q=Dominio+Combat+Club+Merida+Yucatan+C.+32A+514+Maya&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicacion de Dominio Combat Club"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section data-testid="final-cta" className="py-20 md:py-28 bg-[#0B0B0D] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-heading text-sm uppercase tracking-[0.3em] mb-4 italic">
              "<span className="text-gradient-gold">{tx.finalMotto}</span>"
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF]">
              {tx.finalTitle}
            </h2>
            <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-lg mx-auto">
              {tx.finalSub}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-whatsapp"
              className="btn-glow mt-8 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              {tx.finalCta}
            </a>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
