import { useState } from "react";
import { Clock, MessageCircle, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateIn } from "@/hooks/useInView";

const WHATSAPP_URL = "https://wa.me/529996472315?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const schedule = {
  lunes: [
    { time: "7:00 AM", discipline: "Kickb / MMA", type: "mma" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 AM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "4:00 PM", discipline: "BJJ Kids", type: "kids" },
    { time: "5:00 PM", discipline: "Judo", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:30 PM", discipline: "Boxeo", type: "boxing" },
  ],
  martes: [
    { time: "7:00 AM", discipline: "Kickb / MMA", type: "mma" },
    { time: "8:00 AM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "7:00 PM", discipline: { es: "Boxeo (Privadas)", en: "Boxing (Private)" }, type: "private" },
    { time: "8:45 PM", discipline: "BJJ UADY", type: "grappling" },
  ],
  miercoles: [
    { time: "7:00 AM", discipline: "Kickb / MMA", type: "mma" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 AM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "4:00 PM", discipline: "BJJ Kids", type: "kids" },
    { time: "5:00 PM", discipline: "Judo", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:30 PM", discipline: "Boxeo", type: "boxing" },
  ],
  jueves: [
    { time: "7:00 AM", discipline: "Kickb / MMA", type: "mma" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 AM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "Jiu Jitsu", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:30 PM", discipline: "Boxeo", type: "boxing" },
  ],
  viernes: [
    { time: "7:00 AM", discipline: "Open Gym", type: "general" },
    { time: "8:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
    { time: "6:00 PM", discipline: "Open Gym", type: "general" },
    { time: "7:00 PM", discipline: "Open Gym", type: "general" },
    { time: "8:45 PM", discipline: "BJJ UADY", type: "grappling" },
  ],
  sabado: [
    { time: "8:00 AM", discipline: { es: "BJJ Mujeres", en: "Women's BJJ" }, type: "women" },
  ],
  domingo: [
    { time: "9:30 AM", discipline: "BJJ Drills", type: "grappling" },
  ],
};

const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const dayLabels = {
  es: { lunes: "Lunes", martes: "Martes", miercoles: "Miércoles", jueves: "Jueves", viernes: "Viernes", sabado: "Sábado", domingo: "Domingo" },
  en: { lunes: "Monday", martes: "Tuesday", miercoles: "Wednesday", jueves: "Thursday", viernes: "Friday", sabado: "Saturday", domingo: "Sunday" },
};

const typeCellBg = {
  grappling: "bg-blue-500/15",
  striking: "bg-red-500/15",
  boxing: "bg-orange-500/15",
  mma: "bg-emerald-500/15",
  general: "bg-[#C9A24A]/15",
  private: "bg-purple-500/15",
  women: "bg-pink-500/15",
  kids: "bg-cyan-500/15",
};

const typeCellText = {
  grappling: "text-blue-300",
  striking: "text-red-300",
  boxing: "text-orange-300",
  mma: "text-emerald-300",
  general: "text-[#C9A24A]",
  private: "text-purple-300",
  women: "text-pink-300",
  kids: "text-cyan-300",
};

const typeBorder = {
  grappling: "border-blue-500/30",
  striking: "border-red-500/30",
  boxing: "border-orange-500/30",
  mma: "border-emerald-500/30",
  general: "border-[#C9A24A]/30",
  private: "border-purple-500/30",
  women: "border-pink-500/30",
  kids: "border-cyan-500/30",
};

const typeBadgeColors = {
  grappling: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  striking: "bg-red-500/10 text-red-400 border-red-500/30",
  boxing: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  mma: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  general: "bg-[#C9A24A]/10 text-[#C9A24A] border-[#C9A24A]/30",
  private: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  women: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  kids: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
};

const legendItems = [
  { type: "grappling", label: { es: "Grappling (BJJ / Judo)", en: "Grappling (BJJ / Judo)" } },
  { type: "striking", label: { es: "Kickboxing", en: "Kickboxing" } },
  { type: "mma", label: { es: "Kickb / MMA", en: "Kickb / MMA" } },
  { type: "boxing", label: { es: "Boxeo", en: "Boxing" } },
  { type: "women", label: { es: "BJJ Mujeres", en: "Women's BJJ" } },
  { type: "kids", label: { es: "BJJ Kids", en: "Kids BJJ" } },
  { type: "general", label: { es: "Open Gym", en: "Open Gym" } },
  { type: "private", label: { es: "Sesiones Privadas", en: "Private Sessions" } },
];

const txt = {
  es: {
    label: "Horario",
    title: "Horario de Clases",
    sub: "Todas las clases de artes marciales y boxeo en un solo horario. Clases privadas por disponibilidad.",
    groupTitle: "Clases grupales",
    groupText: "Las clases grupales se imparten de lunes a domingo. Los horarios pueden variar en días festivos.",
    privateTitle: "Clases privadas",
    privateText: "Las clases privadas se agendan por disponibilidad del instructor. Desde $550 MXN/hora. Contáctanos por WhatsApp.",
    ctaTitle: "Agenda Tu Clase Muestra",
    ctaSub: "Escoge el horario que más te convenga y llega 10 minutos antes. Tu primera clase es gratis.",
    ctaBtn: "Agendar por WhatsApp",
    timeHeader: "Hora",
  },
  en: {
    label: "Schedule",
    title: "Class Schedule",
    sub: "All martial arts and boxing classes in a single schedule. Private classes by instructor availability.",
    groupTitle: "Group classes",
    groupText: "Group classes are held Monday through Sunday. Schedules may vary on holidays.",
    privateTitle: "Private classes",
    privateText: "Private classes are scheduled by instructor availability. From $550 MXN/hour. Contact us via WhatsApp.",
    ctaTitle: "Book Your Trial Class",
    ctaSub: "Choose the time that works best for you and arrive 10 minutes early. Your first class is free.",
    ctaBtn: "Book via WhatsApp",
    timeHeader: "Time",
  },
};

const parseTime = (t) => {
  const [h, m] = t.replace(/[APM ]/g, "").split(":").map(Number);
  const isPM = t.includes("PM");
  return (isPM && h !== 12 ? h + 12 : h) * 60 + (m || 0);
};

export default function HorarioPage() {
  const { lang } = useLanguage();
  const [activeDay, setActiveDay] = useState("lunes");
  const tx = txt[lang];
  const dFull = dayLabels[lang];

  const getDisciplineName = (d) => (typeof d === "object" ? d[lang] : d);

  const allTimes = [
    ...new Set(days.flatMap((day) => schedule[day].map((c) => c.time))),
  ].sort((a, b) => parseTime(a) - parseTime(b));

  const timesForDay = (day) =>
    [...new Set(schedule[day].map((c) => c.time))].sort(
      (a, b) => parseTime(a) - parseTime(b)
    );

  return (
    <div data-testid="horario-page" className="pt-20">
      {/* Hero */}
      <section className="bg-dark-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A] block">
              {tx.label}
            </span>
          </AnimateIn>
          <AnimateIn delay={90}>
            <h1
              data-testid="horario-title"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3"
            >
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

      {/* Schedule */}
      <section className="bg-dark-rich py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── MOBILE: day pills + timeline ── */}
          <div className="md:hidden">
            <div
              className="flex overflow-x-auto gap-2 pb-4 -mx-4 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`shrink-0 font-heading text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-200 ${
                    activeDay === day
                      ? "bg-[#C9A24A] text-[#1A1720] font-bold shadow-md shadow-[#C9A24A]/25"
                      : "bg-white/[0.05] text-[#B9B4A8] border border-white/10"
                  }`}
                >
                  {dFull[day]}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-5">
              {timesForDay(activeDay).map((time) => {
                const classes = schedule[activeDay].filter(
                  (c) => c.time === time
                );
                return (
                  <div key={time}>
                    <div className="flex items-center gap-3 mb-2.5">
                      <Clock className="w-4 h-4 text-[#C9A24A] shrink-0" />
                      <span className="font-heading text-sm font-bold text-[#C9A24A] whitespace-nowrap">
                        {time}
                      </span>
                      <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {classes.map((cls, i) => (
                        <div
                          key={i}
                          className={`flex-1 min-w-[calc(50%-0.25rem)] rounded-lg px-4 py-3 border ${typeCellBg[cls.type]} ${typeBorder[cls.type]}`}
                        >
                          <span
                            className={`font-heading text-sm uppercase font-bold block ${typeCellText[cls.type]}`}
                          >
                            {getDisciplineName(cls.discipline)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 mt-10 pt-6 border-t border-white/[0.06]">
              {legendItems.map(({ type, label }) => (
                <span
                  key={type}
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${typeBadgeColors[type]}`}
                >
                  {label[lang]}
                </span>
              ))}
            </div>
          </div>

          {/* ── DESKTOP: unified weekly grid ── */}
          <div className="hidden md:block">
            <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-white/[0.02]">
              <table
                data-testid="schedule-table"
                className="w-full border-collapse"
              >
                <thead>
                  <tr>
                    <th className="text-left font-heading text-xs uppercase tracking-widest text-[#C9A24A] py-4 pr-4 pl-5 w-28 border-b border-white/10 bg-white/[0.03]">
                      {tx.timeHeader}
                    </th>
                    {days.map((day) => (
                      <th
                        key={day}
                        className="text-center font-heading text-xs uppercase tracking-widest text-[#F4F3EF]/80 py-4 px-2 border-b border-white/10 bg-white/[0.03]"
                      >
                        {dFull[day]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allTimes.map((timeSlot, rowIdx) => (
                    <tr
                      key={timeSlot}
                      className={
                        rowIdx % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                      }
                    >
                      <td className="py-3 pr-4 pl-5 align-middle border-r border-white/[0.06]">
                        <span className="font-heading text-sm font-bold text-[#C9A24A] whitespace-nowrap">
                          {timeSlot}
                        </span>
                      </td>
                      {days.map((day) => {
                        const classes = schedule[day].filter(
                          (c) => c.time === timeSlot
                        );
                        return (
                          <td key={day} className="py-2 px-1.5 align-middle">
                            {classes.length > 0 ? (
                              <div className="space-y-1">
                                {classes.map((cls, i) => (
                                  <div
                                    key={i}
                                    className={`rounded-lg px-2 py-2 text-center border ${typeCellBg[cls.type]} ${typeBorder[cls.type]} transition-all duration-200 hover:scale-[1.02]`}
                                  >
                                    <span
                                      className={`font-heading text-[11px] uppercase font-bold tracking-wide leading-tight block ${typeCellText[cls.type]}`}
                                    >
                                      {getDisciplineName(cls.discipline)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <AnimateIn className="mt-6">
              <div className="flex flex-wrap justify-center gap-2">
                {legendItems.map(({ type, label }) => (
                  <span
                    key={type}
                    className={`inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border ${typeBadgeColors[type]}`}
                  >
                    {label[lang]}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn>
              <div className="card-light flex gap-3 p-6 rounded-xl">
                <Info className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#1A1720] mb-1">
                    {tx.groupTitle}
                  </h3>
                  <p className="text-[#3A3740] text-sm leading-relaxed">
                    {tx.groupText}
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={120}>
              <div className="card-light flex gap-3 p-6 rounded-xl">
                <Info className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#1A1720] mb-1">
                    {tx.privateTitle}
                  </h3>
                  <p className="text-[#3A3740] text-sm leading-relaxed">
                    {tx.privateText}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-dark glow-gold-top py-24 md:py-32 text-center">
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
