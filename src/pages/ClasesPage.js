import { MessageCircle, ChevronRight, Users, Shield, Dumbbell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const disciplines = {
  es: [
    {
      id: "bjj", name: "Jiu Jitsu Brasileno", tag: "BJJ",
      image: "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "Para todos los niveles. Ideal si buscas aprender defensa personal, mejorar tu condicion fisica o competir.",
      whatYouLearn: "Control de posiciones, sumisiones, escapes, barridas y defensa personal. Entrenamos tanto Gi como No-Gi.",
      whatToBring: "Para Gi: kimono (gi) de BJJ. Para No-Gi: rash guard y shorts sin bolsillos. Si no tienes equipo, te prestamos uno en tu clase muestra.",
      schedule: "Gi: Lun/Mie 8:00am y 7:00pm | No-Gi: Mar/Jue 8:00am y 7:00pm",
    },
    {
      id: "kickboxing", name: "Kickboxing", tag: "KICK",
      image: "https://images.unsplash.com/photo-1765303193537-ae41f1a3720f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGd5bSUyMHRyYWluaW5nJTIwTU1BJTIwa2lja2JveGluZ3xlbnwwfHx8fDE3NzI1NjQ2OTZ8MA&ixlib=rb-4.1.0&q=85",
      forWho: "Para quien quiera mejorar su condicion fisica, aprender a golpear y patear con tecnica, o simplemente desestresarse.",
      whatYouLearn: "Combinaciones de golpes y patadas, movimiento de pies, defensa, acondicionamiento dinamico y trabajo en pads.",
      whatToBring: "Ropa deportiva comoda, vendas para manos y guantes de boxeo. Si no tienes equipo, tenemos disponible para tu primera clase.",
      schedule: "Lun - Jue: 7:00am y 6:00pm",
    },
    {
      id: "boxeo", name: "Boxeo", tag: "BOX",
      image: "https://images.unsplash.com/photo-1754630591156-ef00f2e0d888?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bSUyMGRhcmslMjBtb29keXxlbnwwfHx8fDE3NzI1NjQ3MDd8MA&ixlib=rb-4.1.0&q=85",
      forWho: "Para quienes quieran aprender los fundamentos del boxeo, mejorar su coordinacion y ganar confianza.",
      whatYouLearn: "Postura, jab, cross, hooks, uppercuts, movimiento de cabeza, trabajo de bolsa y pads. La esencia del boxeo mexicano.",
      whatToBring: "Ropa deportiva, vendas para manos y guantes de boxeo. Si es tu primera vez, te prestamos el equipo.",
      schedule: "Lun/Mie/Jue: 7:00am, 7:00pm y 8:30pm | Vie: Open Gym 7:00am y 6:00pm",
    },
    {
      id: "judo", name: "Judo", tag: "JUDO",
      image: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "Para quienes quieran aprender proyecciones, barridas y tecnicas de combate de pie con una arte marcial olimpica.",
      whatYouLearn: "Proyecciones (nage-waza), tecnicas de control en el piso, barridas, y fundamentos del judo deportivo y de defensa personal.",
      whatToBring: "Judogi (kimono de judo) o gi de BJJ. Si es tu primera vez, te prestamos uno.",
      schedule: "Lun/Mie: 5:00pm",
    },
    {
      id: "mma", name: "MMA", tag: "MMA",
      image: "https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHw0fHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "Para quienes quieran combinar las mejores tecnicas de striking y grappling en un entrenamiento completo.",
      whatYouLearn: "Transiciones entre pie y piso, clinch, takedowns, ground and pound, y estrategia de combate completa.",
      whatToBring: "Ropa deportiva, guantes de MMA y protector bucal. El equipo se puede conseguir con nosotros.",
      schedule: "Consulta horarios disponibles por WhatsApp",
    },
    {
      id: "private", name: "Clases Privadas", tag: "1:1",
      image: "https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "Para quienes prefieran atencion personalizada, quieran avanzar mas rapido o tengan horarios especificos.",
      whatYouLearn: "Programa 100% personalizado a tus objetivos. Desde tecnica avanzada hasta preparacion para competencia.",
      whatToBring: "Dependiendo de la disciplina. Tu instructor te indicara que necesitas.",
      schedule: "Por disponibilidad del instructor. Desde $550 MXN/hora.",
    },
  ],
  en: [
    {
      id: "bjj", name: "Brazilian Jiu Jitsu", tag: "BJJ",
      image: "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "For all levels. Ideal if you're looking to learn self-defense, improve fitness, or compete.",
      whatYouLearn: "Position control, submissions, escapes, sweeps and self-defense. We train both Gi and No-Gi.",
      whatToBring: "For Gi: BJJ kimono (gi). For No-Gi: rash guard and shorts without pockets. If you don't have gear, we'll lend you some for your trial class.",
      schedule: "Gi: Mon/Wed 8:00am & 7:00pm | No-Gi: Tue/Thu 8:00am & 7:00pm",
    },
    {
      id: "kickboxing", name: "Kickboxing", tag: "KICK",
      image: "https://images.unsplash.com/photo-1765303193537-ae41f1a3720f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGd5bSUyMHRyYWluaW5nJTIwTU1BJTIwa2lja2JveGluZ3xlbnwwfHx8fDE3NzI1NjQ2OTZ8MA&ixlib=rb-4.1.0&q=85",
      forWho: "For anyone looking to improve fitness, learn proper striking technique, or just de-stress.",
      whatYouLearn: "Punch and kick combinations, footwork, defense, dynamic conditioning and pad work.",
      whatToBring: "Comfortable workout clothes, hand wraps and boxing gloves. If you don't have gear, we have some available for your first class.",
      schedule: "Mon - Thu: 7:00am & 6:00pm",
    },
    {
      id: "boxeo", name: "Boxing", tag: "BOX",
      image: "https://images.unsplash.com/photo-1754630591156-ef00f2e0d888?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bSUyMGRhcmslMjBtb29keXxlbnwwfHx8fDE3NzI1NjQ3MDd8MA&ixlib=rb-4.1.0&q=85",
      forWho: "For those who want to learn boxing fundamentals, improve coordination, and gain confidence.",
      whatYouLearn: "Stance, jab, cross, hooks, uppercuts, head movement, bag and pad work. The essence of Mexican boxing culture.",
      whatToBring: "Workout clothes, hand wraps and boxing gloves. First-timers get gear provided.",
      schedule: "Mon/Wed/Thu: 7:00am, 7:00pm & 8:30pm | Fri: Open Gym 7:00am & 6:00pm",
    },
    {
      id: "judo", name: "Judo", tag: "JUDO",
      image: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "For those who want to learn throws, sweeps and standing combat techniques with an Olympic martial art.",
      whatYouLearn: "Throws (nage-waza), ground control techniques, sweeps, and judo fundamentals for sport and self-defense.",
      whatToBring: "Judogi (judo kimono) or BJJ gi. First-timers get gear provided.",
      schedule: "Mon/Wed: 5:00pm",
    },
    {
      id: "mma", name: "MMA", tag: "MMA",
      image: "https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHw0fHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "For those who want to combine the best striking and grappling techniques in complete training.",
      whatYouLearn: "Stand-up to ground transitions, clinch, takedowns, ground and pound, and full combat strategy.",
      whatToBring: "Workout clothes, MMA gloves and mouthguard. Gear can be purchased through us.",
      schedule: "Check available schedules via WhatsApp",
    },
    {
      id: "private", name: "Private Classes", tag: "1:1",
      image: "https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGdyYXBwbGluZyUyMHRyYWluaW5nfGVufDB8fHx8MTc3MjU2NDcwMnww&ixlib=rb-4.1.0&q=85",
      forWho: "For those who prefer personalized attention, want to progress faster, or have specific schedules.",
      whatYouLearn: "100% personalized program for your goals. From advanced technique to competition preparation.",
      whatToBring: "Depends on the discipline. Your instructor will tell you what you need.",
      schedule: "By instructor availability. From $550 MXN/hour.",
    },
  ],
};

const txt = {
  es: {
    label: "Disciplinas", title: "Nuestras Clases", sub: "Cada disciplina tiene su propia identidad y metodologia. Encuentra la que mejor se adapte a ti o combina varias.",
    forWho: "Para quien es", learn: "Que aprenderas", bring: "Que llevar", sched: "Horario",
    cta: "Agendar clase muestra", bottomTitle: "No sabes cual elegir?",
    bottomSub: "Agenda tu clase muestra gratis y te ayudamos a encontrar la disciplina ideal para ti. Sin compromiso.",
    bottomCta: "Preguntanos por WhatsApp",
  },
  en: {
    label: "Disciplines", title: "Our Classes", sub: "Each discipline has its own identity and methodology. Find the one that fits you best or combine several.",
    forWho: "Who it's for", learn: "What you'll learn", bring: "What to bring", sched: "Schedule",
    cta: "Book trial class", bottomTitle: "Not sure which to choose?",
    bottomSub: "Book your free trial class and we'll help you find the ideal discipline for you. No commitment.",
    bottomCta: "Ask us via WhatsApp",
  },
};

export default function ClasesPage() {
  const { lang } = useLanguage();
  const tx = txt[lang];
  const discs = disciplines[lang];
  return (
    <div data-testid="clases-page" className="pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.label}</span>
          <h1 data-testid="clases-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
            {tx.title}
          </h1>
          <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-xl">{tx.sub}</p>
        </div>
      </section>

      {/* Disciplines */}
      {discs.map((d, i) => (
        <section key={d.id} data-testid={`class-${d.id}`}
          className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-[#0B0B0D]' : 'bg-[#1A1B1E]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
              <div className={`relative overflow-hidden h-[300px] md:h-[400px] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img src={d.image} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 bg-[#0B0B0D]/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#C9A24A] font-bold">{d.tag}</span>
                </div>
              </div>
              <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F4F3EF]">{d.name}</h2>
                <div className="accent-line mt-3 mb-6" />
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Users className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                    <div>
                      <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.forWho}</h3>
                      <p className="text-[#B9B4A8] text-sm leading-relaxed">{d.forWho}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                    <div>
                      <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.learn}</h3>
                      <p className="text-[#B9B4A8] text-sm leading-relaxed">{d.whatYouLearn}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Dumbbell className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                    <div>
                      <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.bring}</h3>
                      <p className="text-[#B9B4A8] text-sm leading-relaxed">{d.whatToBring}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/5 border border-white/5">
                  <p className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.sched}</p>
                  <p className="text-[#F4F3EF] text-sm font-semibold mt-1">{d.schedule}</p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid={`class-${d.id}-cta`}
                  className="mt-6 inline-flex items-center gap-2 bg-[#F4F3EF] text-[#0B0B0D] hover:bg-[#C9A24A] font-bold text-sm uppercase tracking-wider px-6 py-3 transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />{tx.cta}<ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-[#0B0B0D] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F4F3EF]">{tx.bottomTitle}</h2>
          <p className="mt-4 text-[#B9B4A8] text-sm md:text-base">{tx.bottomSub}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="clases-bottom-cta"
            className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105">
            <MessageCircle className="w-5 h-5" />{tx.bottomCta}
          </a>
        </div>
      </section>
    </div>
  );
}
