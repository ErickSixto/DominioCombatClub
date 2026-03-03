import { Link } from "react-router-dom";
import { Clock, MessageCircle, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const schedule = {
  lunes: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 AM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "5:00 PM", discipline: "Judo", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:30 PM", discipline: "Boxeo", type: "boxing" },
  ],
  martes: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "8:00 AM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "8:30 PM", discipline: { es: "Sesiones privadas", en: "Private sessions" }, type: "private" },
  ],
  miercoles: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 AM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "5:00 PM", discipline: "Judo", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "BJJ (Gi)", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:30 PM", discipline: "Boxeo", type: "boxing" },
  ],
  jueves: [
    { time: "7:00 AM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 AM", discipline: "Boxeo", type: "boxing" },
    { time: "8:00 AM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "6:00 PM", discipline: "Kickboxing", type: "striking" },
    { time: "7:00 PM", discipline: "BJJ (No-Gi)", type: "grappling" },
    { time: "7:00 PM", discipline: "Boxeo", type: "boxing" },
    { time: "8:30 PM", discipline: "Boxeo", type: "boxing" },
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
  general: "border-l-[#C9A24A]",
  private: "border-l-purple-500",
};

const typeBadgeColors = {
  grappling: "bg-blue-500/10 text-blue-400",
  striking: "bg-red-500/10 text-red-400",
  boxing: "bg-orange-500/10 text-orange-400",
  general: "bg-[#C9A24A]/10 text-[#C9A24A]",
  private: "bg-purple-500/10 text-purple-400",
};

const typeLabels = {
  es: { grappling: "Grappling", striking: "Striking", boxing: "Boxeo", general: "General", private: "Privada" },
  en: { grappling: "Grappling", striking: "Striking", boxing: "Boxing", general: "General", private: "Private" },
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
    legendGrappling: "Grappling (BJJ / Judo)", legendStriking: "Striking (Kickboxing)", legendBoxing: "Boxeo", legendGeneral: "Open Gym", legendPrivate: "Sesiones privadas",
  },
  en: {
    label: "Schedule", title: "Class Schedule",
    sub: "Group classes Monday through Friday. Private classes by instructor availability.",
    groupTitle: "Group classes", groupText: "Group classes are held Monday through Friday. Schedules may vary on holidays.",
    privateTitle: "Private classes", privateText: "Private classes are scheduled by instructor availability. From $550 MXN/hour. Contact us via WhatsApp.",
    ctaTitle: "Book Your Trial Class",
    ctaSub: "Choose the time that works best for you and arrive 10 minutes early. Your first class is free.",
    ctaBtn: "Book via WhatsApp",
    legendGrappling: "Grappling (BJJ / Judo)", legendStriking: "Striking (Kickboxing)", legendBoxing: "Boxing", legendGeneral: "Open Gym", legendPrivate: "Private sessions",
  },
};

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
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.label}</span>
          <h1 data-testid="horario-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">
            {tx.title}
          </h1>
          <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-xl">
            {tx.sub}
          </p>
        </div>
      </section>

      {/* Mobile Tabs */}
      <section className="py-8 md:hidden bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="lunes">
            <TabsList className="w-full bg-[#1A1B1E] h-auto p-1 grid grid-cols-5">
              {days.map((day) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  data-testid={`tab-${day}`}
                  className="font-heading text-xs uppercase tracking-wider py-2.5 data-[state=active]:bg-[#2B2D31] data-[state=active]:text-[#C9A24A]"
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
                    className={`bg-[#2B2D31] border border-white/5 p-4 border-l-4 ${typeColors[cls.type]}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading text-base uppercase font-semibold text-[#F4F3EF]">{getDisciplineName(cls.discipline)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3.5 h-3.5 text-[#B9B4A8]" />
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
      </section>

      {/* Desktop Table */}
      <section className="hidden md:block py-8 md:py-16 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table data-testid="schedule-table" className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left font-heading text-sm uppercase tracking-wider text-[#B9B4A8] py-4 pr-6 w-32">{lang === 'es' ? 'Horario' : 'Time'}</th>
                  {days.map((day) => (
                    <th key={day} className="text-left font-heading text-sm uppercase tracking-wider text-[#B9B4A8] py-4 px-4">
                      {dFull[day]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allTimes.map((timeSlot) => (
                  <tr key={timeSlot} className="border-b border-white/5">
                    <td className="py-4 pr-6">
                      <span className="text-[#B9B4A8] text-sm whitespace-nowrap">{timeSlot}</span>
                    </td>
                    {days.map((day) => {
                      const classes = schedule[day].filter(c => c.time === timeSlot);
                      return (
                        <td key={day} className="py-3 px-4">
                          {classes.length > 0 ? (
                            <div className="space-y-1.5">
                              {classes.map((cls, i) => (
                                <div key={i} className={`px-3 py-1.5 border-l-2 ${typeColors[cls.type]} bg-white/[0.02] schedule-cell`}>
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

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500/20 border-l-2 border-blue-500" />
              <span className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.legendGrappling}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500/20 border-l-2 border-red-500" />
              <span className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.legendStriking}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500/20 border-l-2 border-orange-500" />
              <span className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.legendBoxing}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#C9A24A]/20 border-l-2 border-[#C9A24A]" />
              <span className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.legendGeneral}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500/20 border-l-2 border-purple-500" />
              <span className="text-[#B9B4A8] text-xs uppercase tracking-wider">{tx.legendPrivate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 md:py-16 bg-[#1A1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3 p-6 bg-white/[0.02] border border-white/5">
              <Info className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.groupTitle}</h3>
                <p className="text-[#B9B4A8] text-sm leading-relaxed">{tx.groupText}</p>
              </div>
            </div>
            <div className="flex gap-3 p-6 bg-white/[0.02] border border-white/5">
              <Info className="w-5 h-5 shrink-0 text-[#C9A24A] mt-0.5" />
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-[#F4F3EF] mb-1">{tx.privateTitle}</h3>
                <p className="text-[#B9B4A8] text-sm leading-relaxed">{tx.privateText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0B0B0D] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F4F3EF]">
            {tx.ctaTitle}
          </h2>
          <p className="mt-4 text-[#B9B4A8] text-sm">{tx.ctaSub}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="horario-cta"
            className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {tx.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}
