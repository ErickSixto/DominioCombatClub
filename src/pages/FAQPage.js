import { MessageCircle } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL = "https://wa.me/529992570757?text=Hola%2C%20quiero%20agendar%20mi%20clase%20muestra%20gratis.%20%C2%BFQu%C3%A9%20horarios%20tienen%20hoy%3F";

const faqs = {
  es: [
    { question: "Puedo entrenar si soy principiante?", answer: "Claro que si. La mayoria de nuestros miembros empezaron sin experiencia previa. Nuestras clases estan disenadas para todos los niveles y los instructores se aseguran de que te sientas comodo y seguro desde el primer dia. Tu primera clase muestra es gratis." },
    { question: "Que necesito llevar a mi primera clase?", answer: "Ropa deportiva comoda, una toalla y agua. Si vienes a BJJ con Gi, necesitaras un kimono, pero si es tu primera clase te prestamos uno. Para Kickboxing y Boxeo, traemos vendas y guantes de cortesia para tu clase muestra." },
    { question: "Hay clase muestra gratuita?", answer: "Si. Tu primera clase es completamente gratis y sin compromiso. Solo agenda por WhatsApp, elige la disciplina y el horario que prefieras, y llega 10 minutos antes para que te mostremos las instalaciones." },
    { question: "Hay clases de Gi y No-Gi en BJJ?", answer: "Si, entrenamos ambas modalidades. Gi se entrena Lunes y Miercoles, y No-Gi se entrena Martes y Jueves. Pregunta por los horarios especificos de cada modalidad." },
    { question: "Como se paga la membresia?", answer: "La membresia se paga mensualmente. Aceptamos efectivo y transferencia bancaria. El pago se realiza al inicio de cada mes. No hay contratos de permanencia, puedes cancelar cuando quieras." },
    { question: "Hay estacionamiento? Como llego?", answer: "Si, hay estacionamiento disponible cerca del gimnasio. Estamos ubicados en C. 32A 514, Maya, 97134 Merida. Puedes encontrarnos facilmente en Google Maps buscando 'Dominio Combat Club'. Si necesitas indicaciones, escribenos por WhatsApp." },
    { question: "Que edades aceptan?", answer: "Aceptamos jovenes y adultos. La mayoria de nuestros miembros tienen entre 18 y 45 anos, pero recibimos a cualquier persona que quiera entrenar con disciplina y respeto." },
    { question: "Cuales son los planes disponibles?", answer: "Tenemos Mensualidad Boxeo por $850 MXN/mes (acceso a todas las clases de boxeo) y Artes Marciales + Boxeo por $1,800 MXN/mes (acceso a todas las disciplinas). Tambien ofrecemos clases privadas desde $550 MXN/hora." },
  ],
  en: [
    { question: "Can I train if I'm a beginner?", answer: "Absolutely. Most of our members started with no prior experience. Our classes are designed for all levels and instructors make sure you feel comfortable and safe from day one. Your first trial class is free." },
    { question: "What do I need to bring to my first class?", answer: "Comfortable workout clothes, a towel, and water. For BJJ with Gi, you'll need a kimono, but we'll lend you one for your first class. For Kickboxing and Boxing, we provide complimentary wraps and gloves for your trial." },
    { question: "Is there a free trial class?", answer: "Yes. Your first class is completely free with no commitment. Just book via WhatsApp, choose your discipline and preferred time, and arrive 10 minutes early so we can show you around." },
    { question: "Are there Gi and No-Gi BJJ classes?", answer: "Yes, we train both. Gi is on Mondays and Wednesdays, No-Gi is on Tuesdays and Thursdays. Ask about specific schedules for each." },
    { question: "How do I pay for membership?", answer: "Membership is paid monthly. We accept cash and bank transfers. Payment is made at the beginning of each month. There are no lock-in contracts, you can cancel anytime." },
    { question: "Is there parking? How do I get there?", answer: "Yes, there's parking available near the gym. We're located at C. 32A 514, Maya, 97134 Merida. You can easily find us on Google Maps by searching 'Dominio Combat Club'. For directions, message us on WhatsApp." },
    { question: "What ages do you accept?", answer: "We accept teens and adults. Most of our members are between 18 and 45, but we welcome anyone who wants to train with discipline and respect." },
    { question: "What plans are available?", answer: "We have Boxing Monthly for $850 MXN/month (access to all boxing classes) and Martial Arts + Boxing for $1,800 MXN/month (access to all disciplines). We also offer private classes from $550 MXN/hour." },
  ],
};

const txt = {
  es: { label: "FAQ", title: "Preguntas Frecuentes", sub: "Resolvemos tus dudas mas comunes. Si no encuentras lo que buscas, escribenos por WhatsApp.", ctaTitle: "Tienes Otra Pregunta?", ctaSub: "Escribenos por WhatsApp y te respondemos en minutos. Estamos para ayudarte.", ctaBtn: "Preguntanos por WhatsApp", ctaNote: "Respondo mas rapido por WhatsApp" },
  en: { label: "FAQ", title: "Frequently Asked Questions", sub: "We answer your most common questions. If you can't find what you're looking for, message us on WhatsApp.", ctaTitle: "Have Another Question?", ctaSub: "Message us on WhatsApp and we'll respond in minutes. We're here to help.", ctaBtn: "Ask us on WhatsApp", ctaNote: "I respond fastest on WhatsApp" },
};

export default function FAQPage() {
  const { lang } = useLanguage();
  const tx = txt[lang];
  const faqList = faqs[lang];
  return (
    <div data-testid="faq-page" className="pt-20">
      <section className="py-16 md:py-24 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#C9A24A]">{tx.label}</span>
          <h1 data-testid="faq-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4F3EF] mt-3">{tx.title}</h1>
          <p className="mt-4 text-[#B9B4A8] text-base md:text-lg max-w-xl">{tx.sub}</p>
        </div>
      </section>
      <section className="py-8 md:py-16 bg-[#0B0B0D]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-2">
            {faqList.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}
                className="bg-[#2B2D31] border border-white/5 px-6 hover:border-white/10 transition-colors">
                <AccordionTrigger className="font-heading text-base md:text-lg uppercase tracking-wide text-[#F4F3EF] hover:no-underline py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#B9B4A8] text-sm leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#1A1B1E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#F4F3EF]">{tx.ctaTitle}</h2>
          <p className="mt-4 text-[#B9B4A8] text-sm">{tx.ctaSub}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="faq-cta"
            className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105">
            <MessageCircle className="w-5 h-5" />{tx.ctaBtn}
          </a>
          <p className="mt-4 text-[#B9B4A8]/60 text-xs">{tx.ctaNote}</p>
        </div>
      </section>
    </div>
  );
}
