import { Link } from "react-router-dom";
import { Clock, MessageCircle, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const schedule = {
  lunes: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "7:00 AM", discipline: "MMA", type: "mma" },
    { time: "7:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "8:00 AM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "8:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "4:00 PM", discipline: "BJJ Kids", type: "kids" },
    { time: "5:00 PM", discipline: "Judo", type: "grappling" },
    { time: "6:00 PM", discipline: "MMA", type: "mma" },
    { time: "7:00 PM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "8:00 PM", discipline: "Boxeo", type: "boxing" },
  ],
  martes: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "MMA", type: "mma" },
    { time: "7:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "8:00 AM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "8:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "4:00 PM", discipline: "BJJ Kids", type: "kids" },
    { time: "6:00 PM", discipline: "MMA", type: "mma" },
    { time: "7:00 PM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "8:00 PM", discipline: "Kickboxing", type: "striking" },
  ],
  miercoles: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "7:00 AM", discipline: "MMA", type: "mma" },
    { time: "7:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "8:00 AM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "8:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "4:00 PM", discipline: "BJJ Kids", type: "kids" },
    { time: "5:00 PM", discipline: "Judo", type: "grappling" },
    { time: "6:00 PM", discipline: "MMA", type: "mma" },
    { time: "7:00 PM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "8:00 PM", discipline: "Boxeo", type: "boxing" },
  ],
  jueves: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "7:00 AM", discipline: "MMA", type: "mma" },
    { time: "7:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "8:00 AM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "8:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "4:00 PM", discipline: "BJJ Kids", type: "kids" },
    { time: "6:00 PM", discipline: "MMA", type: "mma" },
    { time: "7:00 PM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "8:00 PM", discipline: "Boxeo", type: "boxing" },
  ],
  viernes: [
    { time: "7:00 AM", discipline: "Open Gym", type: "general" },
    { time: "6:00 PM", discipline: "Open Gym", type: "general" },
  ],
};

const dayLabels = {
  es: { lunes: "Lun", martes: "Mar", miercoles: "Mie", jueves: "Jue", viernes: "Vie" },
  en: { lunes: "Mon", martes: "Tue", miercoles: "Wed", jueves: "Thu", viernes: "Fri" },
};

const dayFull = {
  es: { lunes: "Lunes", martes: "Martes", miercoles: "Miercoles", jueves: "Jueves", viernes: "Viernes" },
  en: { lunes: "Monday", martes: "Tuesday", miercoles: "Wednesday", jueves: "Thursday", viernes: "Friday" },
};

const typeColors = {
  grappling: "border-l-blue-500",
  striking: "border-l-red-500",
  boxing: "border-l-orange-500",
  mma: "border-l-emerald-500",
  general: "border-l-[#C9A24A]",
  private: "border-l-purple-500",
  women: "border-l-pink-500",
  kids: "border-l-cyan-500",
};

const typeBadgeColors = {
  grappling: "bg-blue-500/10 text-blue-400",
  striking: "bg-red-500/10 text-red-400",
  boxing: "bg-orange-500/10 text-orange-400",
  mma: "bg-emerald-500/10 text-emerald-400",
  general: "bg-[#C9A24A]/10 text-[#C9A24A]",
  private: "bg-purple-500/10 text-purple-400",
  women: "bg-pink-500/10 text-pink-400",
  kids: "bg-cyan-500/10 text-cyan-400",
};

const typeLabels = {
  es: { grappling: "Grappling", striking: "Striking", boxing: "Boxeo", mma: "MMA", general: "General", private: "Privada", women: "Mujeres", kids: "Kids" },
  en: { grappling: "Grappling", striking: "Striking", boxing: "Boxing", mma: "MMA", general: "General", private: "Private", women: "Women", kids: "Kids" },
};

const txt = {
  es: {
    label: "Horario", title: "Horario de Clases",
    sub: "Clases grupales de lunes a viernes. Clases privadas por disponibilidad del instructor.",
    groupTitle: "Clases grupales", groupText: "Las clases grupales se imparten de lunes a viernes. Los horarios pueden variar en dias festivos.",
    privateTitle: "Clases privadas", privateText: "Las clases privadas se agendan por disponibilidad del instructor. Desde $550 MXN/hora. Contactanos por WhatsApp.",
    ctaTitle: "Agenda Tu Clase Muestra",
    ctaSub: "Escoge el horario que mas te convenga y llega 10 minutos antes. Tu primera clase es gratis.",
    ctaBtn: "Agendar por WhatsApp",
    legendGrappling: "Grappling (BJJ / Judo)", legendStriking: "Striking (Kickboxing)", legendBoxing: "Boxeo", legendMma: "MMA", legendGeneral: "Open Gym", legendWomen: "BJJ Mujeres", legendKids: "BJJ Kids",
  },
  en: {
    label: "Schedule", title: "Class Schedule",
    sub: "Group classes Monday through Friday. Private classes by instructor availability.",
    groupTitle: "Group classes", groupText: "Group classes are held Monday through Friday. Schedules may vary on holidays.",
    privateTitle: "Private classes", privateText: "Private classes are scheduled by instructor availability. From $550 MXN/hour. Contact us via WhatsApp.",
    ctaTitle: "Book Your Trial Class",
    ctaSub: "Choose the time that works best for you and arrive 10 minutes early. Your first class is free.",
    ctaBtn: "Book via WhatsApp",
    legendGrappling: "Grappling (BJJ / Judo)", legendStriking: "Striking (Kickboxing)", legendBoxing: "Boxing", legendMma: "MMA", legendGeneral: "Open Gym", legendWomen: "Women's BJJ", legendKids: "Kids BJJ",
  },
};

function SectionDivider() {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0"
      aria-hidden="true"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A24A]/25 to-transparent" />
    </div>
  );
}

export default function HorarioPage() {
  const { lang } = useLanguage();
  const days = Object.keys(schedule);
  const tx = txt[lang];
  const dLabels = dayLabels[lang];
  const dFull = dayFull[lang];
  const tLabels = typeLabels[lang];

  const getDisciplineName = (d) => typeof d === 'object' ? d[lang] : d;

  // Build time slots for desktop table
  const allTimes = [...new Set(days.flatMap(day => schedule[day].map(c => c.time)))].sort((a, b) => {
    const parse = (t) => { const [h, m] = t.replace(/[APM ]/g, '').split(':').map(Number); const isPM = t.includes('PM'); return (isPM && h !== 12 ? h + 12 : h) * 60 + (m || 0); };
    return parse(a) - parse(b);
  });

  return (
    <div data-testid="horario-page" className="pt-20">
      <section className="py-16 md:py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A] block">
              {tx.label}
            </span>
          </AnimateIn>
          <AnimateIn delay={90}>
            <h1 data-testid="horario-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
              {tx.title}
            </h1>
          </AnimateIn>
          <AnimateIn delay={180}>
            <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-xl">
              {tx.sub}
            </p>
          </AnimateIn>
        </div>
      </section>

      <SectionDivider />

      <section className="py-8 md:py-16 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 md:hidden">
          <Tabs defaultValue="lunes">
            <TabsList className="w-full h-auto p-1.5 grid grid-cols-5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              {days.map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  data-testid={`tab-${day}`}
                  className="font-heading text-xs uppercase tracking-wider py-2.5 rounded-lg text-[#B9B4A8] data-[state=active]:bg-white/[0.06] data-[state=active]:text-[#C9A24A] data-[state=active]:shadow-[inset_0_-2px_0_0_#C9A24A]"
                >
                  {dLabels[day]}
                </TabsTrigger>
              ))}
            </TabsList>
            {days.map((day) => (
              <TabsContent key={day} value={day} className="mt-4 space-y-3">
                {schedule[day].map((cls, i) => (
                  <div
                    key={i}
                    className={`schedule-glass p-4 border-l-4 border border-white/5 hover:border-white/10 transition-colors duration-200 ${typeColors[cls.type]}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading text-base uppercase font-semibold text-[#F4F3EF]">{getDisciplineName(cls.discipline)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3.5 h-3.5 text-[#C9A24A]/80" />
                          <span className="text-[#B9B4A8] text-sm">{cls.time}</span>
                        </div>
                      </div>
                      <span className={`text-xs uppercase tracking-wider font-bold px-2 py-1 rounded-sm ${typeBadgeColors[cls.type]}`}>
                        {tLabels[cls.type]}
                      </span>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table data-testid="schedule-table" className="w-full border-collapse">
              <thead>
                <tr className="glass-card border-0 rounded-t-xl">
                  <th className="text-left font-heading text-sm uppercase tracking-wider text-[#C9A24A] py-4 pr-6 pl-4 w-32 border-b border-white/10">
                    {lang === 'es' ? 'Horario' : 'Time'}
                  </th>
                  {days.map((day) => (
                    <th key={day} className="text-left font-heading text-sm uppercase tracking-wider text-[#F4F3EF] py-4 px-4 border-b border-white/10">
                      {dFull[day]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allTimes.map((timeSlot) => (
                  <tr
                    key={timeSlot}
                    className="border-b border-white/[0.06] transition-all duration-300 hover:bg-white/[0.02] hover:shadow-[inset_0_0_40px_-12px_rgba(201,162,74,0.12)]"
                  >
                    <td className="py-4 pr-6 pl-4 align-top border-r border-[#C9A24A]/15">
                      <span className="font-heading text-sm font-semibold text-[#C9A24A] whitespace-nowrap tracking-wide">
                        {timeSlot}
                      </span>
                    </td>
                    {days.map((day) => {
                      const classes = schedule[day].filter(c => c.time === timeSlot);
                      return (
                        <td key={day} className="py-3 px-4 align-top">
                          {classes.length > 0 ? (
                            <div className="space-y-1.5">
                              {classes.map((cls, i) => (
                                <div
                                  key={i}
                                  className={`schedule-glass schedule-cell px-3 py-1.5 border-l-2 rounded-sm ${typeColors[cls.type]}`}
                                >
                                  <span className="font-heading text-xs uppercase font-semibold text-[#F4F3EF] block">{getDisciplineName(cls.discipline)}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[#B9B4A8]/30 text-sm">--</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AnimateIn className="mt-8">
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-blue-500/30 ${typeBadgeColors.grappling}`}>
                {tx.legendGrappling}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-red-500/30 ${typeBadgeColors.striking}`}>
                {tx.legendStriking}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-orange-500/30 ${typeBadgeColors.boxing}`}>
                {tx.legendBoxing}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30 ${typeBadgeColors.mma}`}>
                {tx.legendMma}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-pink-500/30 ${typeBadgeColors.women}`}>
                {tx.legendWomen}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-cyan-500/30 ${typeBadgeColors.kids}`}>
                {tx.legendKids}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-[#C9A24A]/30 ${typeBadgeColors.general}`}>
                {tx.legendGeneral}
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 md:py-16 bg-[#1A1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn>
              <div className="glass-card glass-card-hover flex gap-3 p-6 rounded-xl">
                <Info className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.groupTitle}</h3>
                  <p className="text-[#B9B4A8] text-sm leading-relaxed">{tx.groupText}</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={120}>
              <div className="glass-card glass-card-hover flex gap-3 p-6 rounded-xl">
                <Info className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.privateTitle}</h3>
                  <p className="text-[#B9B4A8] text-sm leading-relaxed">{tx.privateText}</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-20 bg-[#0B0B0D] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <AnimateIn>
            <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F4F3EF]">
              {tx.ctaTitle}
            </h2>
            <p className="mt-4 text-[#B9B4A8] text-sm">{tx.ctaSub}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="horario-cta"
              className="btn-glow mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105 relative z-0"
            >
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{tx.ctaBtn}</span>
            </a>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
