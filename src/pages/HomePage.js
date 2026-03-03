import { Link } from "react-router-dom";
import { Star, ShieldCheck, Users, Trophy, Clock, MapPin, ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1765303191119-89d0221d5c0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxtYXJ0aWFsJTIwYXJ0cyUyMGd5bSUyMHRyYWluaW5nJTIwTU1BJTIwa2lja2JveGluZ3xlbnwwfHx8fDE3NzI1NjQ2OTZ8MA&ixlib=rb-4.1.0&q=85",
  bjj: "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
  kickboxing: "https://images.unsplash.com/photo-1765303193537-ae41f1a3720f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGd5bSUyMHRyYWluaW5nJTIwTU1BJTIwa2lja2JveGluZ3xlbnwwfHx8fDE3NzI1NjQ2OTZ8MA&ixlib=rb-4.1.0&q=85",
  boxing: "https://images.unsplash.com/photo-1754630591156-ef00f2e0d888?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bSUyMGRhcmslMjBtb29keXxlbnwwfHx8fDE3NzI1NjQ3MDd8MA&ixlib=rb-4.1.0&q=85",
  mma: "https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHw0fHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
  conditioning: "https://images.unsplash.com/photo-1623092350739-4635ce84d47c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwyfHxneW0lMjBjb25kaXRpb25pbmclMjBiYXR0bGUlMjByb3BlcyUyMGRhcmslMjBzd2VhdHxlbnwwfHx8fDE3NzI1NjQ3ODF8MA&ixlib=rb-4.1.0&q=85",
  judo: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
};

const programs = {
  es: [
    { name: "Jiu Jitsu Brasileno", tag: "BJJ", image: IMAGES.bjj, desc: "Control, sumisiones y defensa personal" },
    { name: "Kickboxing", tag: "KICK", image: IMAGES.kickboxing, desc: "Golpes, patadas y acondicionamiento dinamico" },
    { name: "Boxeo", tag: "BOX", image: IMAGES.boxing, desc: "Fundamentos y cultura del boxeo mexicano" },
    { name: "Judo", tag: "JUDO", image: IMAGES.judo, desc: "Proyecciones, barridas y control de pie" },
    { name: "MMA", tag: "MMA", image: IMAGES.mma, desc: "Artes marciales mixtas completas" },
    { name: "Acondicionamiento", tag: "FIT", image: IMAGES.conditioning, desc: "Fuerza, resistencia y movilidad" },
  ],
  en: [
    { name: "Brazilian Jiu Jitsu", tag: "BJJ", image: IMAGES.bjj, desc: "Control, submissions & self-defense" },
    { name: "Kickboxing", tag: "KICK", image: IMAGES.kickboxing, desc: "Strikes, kicks & dynamic conditioning" },
    { name: "Boxing", tag: "BOX", image: IMAGES.boxing, desc: "Fundamentals & Mexican boxing culture" },
    { name: "Judo", tag: "JUDO", image: IMAGES.judo, desc: "Throws, sweeps & standing control" },
    { name: "MMA", tag: "MMA", image: IMAGES.mma, desc: "Complete mixed martial arts" },
    { name: "Conditioning", tag: "FIT", image: IMAGES.conditioning, desc: "Strength, endurance & mobility" },
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
    { discipline: "BJJ (Gi)", morning: "8:00am (L/Mi)", evening: "7:00pm (L/Mi)" },
    { discipline: "BJJ (No-Gi)", morning: "8:00am (Ma/J)", evening: "7:00pm (Ma/J)" },
    { discipline: "Kickboxing", morning: "7:00am (L-J)", evening: "6:00pm (L-J)" },
    { discipline: "Boxeo", morning: "7:00am (L/Mi/J)", evening: "7:00pm / 8:30pm" },
    { discipline: "Judo", morning: "--", evening: "5:00pm (L/Mi)" },
  ],
  en: [
    { discipline: "BJJ (Gi)", morning: "8:00am (Mon/Wed)", evening: "7:00pm (Mon/Wed)" },
    { discipline: "BJJ (No-Gi)", morning: "8:00am (Tue/Thu)", evening: "7:00pm (Tue/Thu)" },
    { discipline: "Kickboxing", morning: "7:00am (Mon-Thu)", evening: "6:00pm (Mon-Thu)" },
    { discipline: "Boxing", morning: "7:00am (Mon/Wed/Thu)", evening: "7:00pm / 8:30pm" },
    { discipline: "Judo", morning: "--", evening: "5:00pm (Mon/Wed)" },
  ],
};

const t = {
  es: {
    heroTitle1: "Entrena Artes", heroTitle2: "Marciales", heroTitle3: "en Merida",
    heroSub: "Jiu Jitsu, Kickboxing, Boxeo, Judo, MMA y acondicionamiento fisico. Ambiente serio, limpio y amigable con principiantes.",
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
    priceLabel: "Planes", priceTitle: "Membresias",
    plan1Tag: "Boxeo", plan1Name: "Mensualidad Boxeo", plan1Features: ["Acceso a clases de Boxeo", "Clases grupales ilimitadas", "Horarios de manana y noche", "Ideal para enfocarte en boxeo"],
    plan2Tag: "Completo", plan2Name: "Artes Marciales + Boxeo", plan2Features: ["Acceso a todas las disciplinas", "BJJ, Kickboxing, Boxeo, Judo", "Clases grupales ilimitadas", "Entrenamiento integral completo"],
    plan2Badge: "Mejor valor",
    planCta1: "Quiero esta membresia", planCta2: "Quiero esta membresia",
    priceViewAll: "Ver todos los planes",
    reviewsLabel: "Resenas", reviewsTitle: "Lo Que Dicen Nuestros Miembros", reviewsGoogle: "en Google",
    locLabel: "Ubicacion", locTitle: "Visitanos", locDays: "Lunes a Viernes", locHours: "7:00am - 10:00pm",
    locDirections: "Como llegar",
    finalTitle: "Tu Primera Clase es Gratis",
    finalSub: "No necesitas experiencia. Solo ganas de empezar. Agenda tu clase muestra y conoce Dominio.",
    finalCta: "Agendar por WhatsApp",
  },
  en: {
    heroTitle1: "Train Martial", heroTitle2: "Arts in", heroTitle3: "Merida",
    heroSub: "Jiu Jitsu, Kickboxing, Boxing, Judo, MMA and physical conditioning. Serious, clean, and beginner-friendly environment.",
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
    priceLabel: "Plans", priceTitle: "Memberships",
    plan1Tag: "Boxing", plan1Name: "Boxing Monthly", plan1Features: ["Access to Boxing classes", "Unlimited group classes", "Morning and evening schedules", "Ideal to focus on boxing"],
    plan2Tag: "Complete", plan2Name: "Martial Arts + Boxing", plan2Features: ["Access to all disciplines", "BJJ, Kickboxing, Boxing, Judo", "Unlimited group classes", "Complete integral training"],
    plan2Badge: "Best value",
    planCta1: "I want this membership", planCta2: "I want this membership",
    priceViewAll: "View all plans",
    reviewsLabel: "Reviews", reviewsTitle: "What Our Members Say", reviewsGoogle: "on Google",
    locLabel: "Location", locTitle: "Visit Us", locDays: "Monday to Friday", locHours: "7:00am - 10:00pm",
    locDirections: "Get directions",
    finalTitle: "Your First Class is Free",
    finalSub: "No experience needed. Just the desire to start. Book your trial class and discover Dominio.",
    finalCta: "Book via WhatsApp",
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const tx = t[lang];
  const progs = programs[lang];
  const sched = scheduleSnapshot[lang];
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section data-testid="hero-section" className="relative min-h-[90vh] flex items-end pb-20 md:pb-28">
        <img
          src={IMAGES.hero}
          alt="Entrenamiento en Dominio Combat Club"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="accent-line mb-6 opacity-0 animate-fade-in-up" />
            <h1
              data-testid="hero-title"
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#F4F3EF] leading-[0.95] opacity-0 animate-fade-in-up animation-delay-100"
            >
              {tx.heroTitle1}<br />{tx.heroTitle2}<br />{tx.heroTitle3}
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
                className="inline-flex items-center justify-center gap-2 bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] hover:text-[#0B0B0D] font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                {tx.ctaPrimary}
              </a>
              <Link
                to="/horario"
                data-testid="hero-schedule-cta"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#F4F3EF] hover:bg-white/10 font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-300"
              >
                {tx.ctaSecondary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section data-testid="trust-bar" className="bg-[#0B0B0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A24A] text-[#C9A24A]" />
                ))}
              </div>
              <span className="font-heading text-lg font-bold text-[#F4F3EF]">5.0</span>
              <span className="text-[#B9B4A8] text-sm">({lang === 'es' ? '104 resenas' : '104 reviews'})</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A24A]" />
              <span className="text-[#B9B4A8] text-sm">{tx.trustSince} <span className="text-[#F4F3EF] font-bold">2016</span></span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#C9A24A]" />
              <span className="text-[#B9B4A8] text-sm">{tx.trustFree} <span className="text-[#F4F3EF] font-bold">{tx.trustFreeB}</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section data-testid="programs-section" className="py-20 md:py-32 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.progLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
              {tx.progTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {progs.map((prog, i) => (
              <Link
                key={prog.name}
                to="/clases"
                data-testid={`program-card-${prog.tag.toLowerCase()}`}
                className={`program-card group relative overflow-hidden bg-[#2B2D31] border border-white/5 h-72 md:h-80 flex flex-col justify-end ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105 transition-transform"
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
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section data-testid="methodology-section" className="section-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.methLabel}</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mt-3" style={{color: '#0B0B0D'}}>
                {tx.methTitle}
              </h2>
              <div className="accent-line mt-4 mb-8" />
              <div className="space-y-6">
                {[ShieldCheck, Users, Trophy].map((Icon, idx) => (
                  <div key={idx} className="flex gap-4 border-l-2 border-[#C9A24A]/20 pl-6 hover:border-[#C9A24A] transition-colors duration-300">
                    <Icon className="w-5 h-5 shrink-0 mt-1 text-[#C9A24A]" />
                    <div>
                      <h3 className="font-heading text-lg uppercase font-semibold" style={{color: '#0B0B0D'}}>{tx.methItems[idx].title}</h3>
                      <p className="text-sm leading-relaxed mt-1" style={{color: '#2B2D31'}}>{tx.methItems[idx].text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.bjj}
                alt="Entrenamiento de Jiu Jitsu"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C9A24A] p-6 hidden md:block">
                <p className="font-heading text-3xl font-bold text-[#0B0B0D]">+9</p>
                <p className="font-heading text-sm uppercase tracking-wider text-[#0B0B0D]">{tx.methYears}<br />{tx.methYearsB}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE SNAPSHOT */}
      <section data-testid="schedule-snapshot" className="py-20 md:py-32 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <tr key={row.discipline} className="border-b border-white/5 schedule-cell">
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
        </div>
      </section>

      {/* PRICING TEASER */}
      <section data-testid="pricing-teaser" className="py-20 md:py-32 bg-[#1A1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.priceLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
              {tx.priceTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Plan 1 */}
            <div data-testid="pricing-card-1" className="bg-[#2B2D31] border border-white/10 p-8 flex flex-col hover:border-[#C9A24A]/30 transition-all duration-300">
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan1Tag}</span>
              <h3 className="font-heading text-2xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan1Name}</h3>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-bold text-[#F4F3EF]">$850</span>
                <span className="text-[#B9B4A8] text-sm ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tx.plan1Features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[#B9B4A8] text-sm">
                    <div className="w-1 h-1 bg-[#C9A24A] rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-[#F4F3EF] hover:bg-white/10 font-bold text-sm uppercase tracking-wider px-6 py-3 transition-all"
              >
                {tx.planCta1}
              </a>
            </div>
            {/* Plan 2 */}
            <div data-testid="pricing-card-2" className="bg-[#2B2D31] border border-[#C9A24A]/30 p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C9A24A] text-[#0B0B0D] font-heading text-xs uppercase tracking-wider font-bold px-4 py-1.5">
                {tx.plan2Badge}
              </div>
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A]">{tx.plan2Tag}</span>
              <h3 className="font-heading text-2xl uppercase font-bold text-[#F4F3EF] mt-2">{tx.plan2Name}</h3>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-bold text-[#F4F3EF]">$1,800</span>
                <span className="text-[#B9B4A8] text-sm ml-2">MXN / {lang === 'es' ? 'mes' : 'month'}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tx.plan2Features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[#B9B4A8] text-sm">
                    <div className="w-1 h-1 bg-[#C9A24A] rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] font-bold text-sm uppercase tracking-wider px-6 py-3 transition-all duration-300"
              >
                {tx.planCta2}
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
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

      {/* TESTIMONIALS */}
      <section data-testid="testimonials-section" className="py-20 md:py-32 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-testid={`testimonial-${t.name.replace(/\s/g, '-').toLowerCase()}`}
                className="bg-[#2B2D31] border border-white/5 p-6 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A] text-[#C9A24A]" />
                  ))}
                </div>
                <p className="text-[#B9B4A8] text-sm leading-relaxed mb-4">"{t.text[lang]}"</p>
                <p className="font-heading text-sm uppercase tracking-wider text-[#F4F3EF] font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section data-testid="location-section" className="section-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
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
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section data-testid="final-cta" className="py-20 md:py-28 bg-[#0B0B0D] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="mt-8 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {tx.finalCta}
          </a>
        </div>
      </section>
    </div>
  );
}
