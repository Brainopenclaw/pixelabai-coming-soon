"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Download } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const milestones = [
  { year: "2015", title: "Inicio en Marketing Digital", description: "Primeros pasos en el mundo del marketing digital, ayudando a pequeños negocios a establecer su presencia online." },
  { year: "2018", title: "Especialización en Automatización", description: "Descubrí el poder de la automatización para escalar negocios sin aumentar costes. Ayudé a más de 50 empresas a optimizar sus procesos." },
  { year: "2020", title: "Consultoría de Transformación Digital", description: "Lideré proyectos de transformación digital para empresas en Latinoamérica y España durante la pandemia." },
  { year: "2023", title: "Adopción de IA en Negocios", description: "Con la llegada de ChatGPT y las nuevas herramientas de IA, me especialicé en ayudar a emprendedores a integrar IA en sus operaciones diarias." },
  { year: "2024", title: "Nace Pixelab AI", description: "Creé Pixelab AI con la misión de democratizar el acceso a la inteligencia artificial para emprendedores hispanohablantes." },
];

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/jorgeailab" },
  { name: "TikTok", icon: null, href: "https://www.tiktok.com/@jorgeailab" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@jorgeailab" },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jorge De Armas",
  jobTitle: "Fundador de Pixelab AI",
  url: "https://pixelabai.com/sobre-mi",
  sameAs: [
    "https://www.instagram.com/jorgeailab",
    "https://www.tiktok.com/@jorgeailab"
  ]
};

const breadcrumbItems = [
  { name: "Home", url: "https://pixelabai.com" },
  { name: "Sobre Mí", url: "https://pixelabai.com/sobre-mi" }
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

function TimelineItem({ milestone, index }: { milestone: (typeof milestones)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-white/10" />
      <div className="absolute left-[-4px] md:left-[12px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00E5FF] ring-4 ring-[#00E5FF]/20" />
      <span className="text-sm font-semibold text-[#00E5FF] mb-1 block">{milestone.year}</span>
      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{milestone.description}</p>
    </motion.div>
  );
}

export default function SobreMiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <JsonLd data={personSchema} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#38bdf8]/20 border-2 border-white/10 flex items-center justify-center flex-shrink-0">
            <span className="text-5xl">👤</span>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-3">Jorge De Armas</motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="text-xl text-[#00E5FF] font-medium mb-4">Fundador de Pixelab AI · Consultor de IA para Negocios</motion.p>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-400 leading-relaxed max-w-xl">
              Ayudo a emprendedores hispanohablantes a usar la inteligencia artificial para trabajar menos, producir más y escalar sus negocios de forma inteligente.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Mi Historia 📖</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>Todo empezó cuando me di cuenta de que los emprendedores en Latinoamérica y España estaban perdiendo una oportunidad enorme. La inteligencia artificial estaba transformando negocios en todo el mundo, pero la mayoría del contenido educativo estaba en inglés, era demasiado técnico, o no tenía aplicación práctica para negocios reales.</p>
            <p>Después de años trabajando en marketing digital y ayudando a empresas a adoptar tecnología, entendí algo clave: <span className="text-white font-medium">no necesitas ser programador para aprovechar la IA</span>. Lo que necesitas es alguien que te muestre cómo aplicarla a tu situación específica.</p>
            <p>Eso es exactamente lo que hago. A través de Pixelab AI, comparto herramientas, estrategias y recursos prácticos para que cualquier emprendedor pueda usar IA en su día a día — desde crear contenido hasta automatizar procesos completos de su negocio.</p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-14 text-center">Mi Trayectoria 🚀</motion.h2>
          <div className="relative">
            {milestones.map((m, i) => (<TimelineItem key={m.year} milestone={m} index={i} />))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mi Misión 🎯</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">&quot;Democratizar el acceso a la inteligencia artificial para emprendedores hispanohablantes, proporcionando educación práctica y herramientas accesibles que generen resultados reales.&quot;</p>
          <p className="text-gray-400">Creo firmemente que la IA no va a reemplazar a los emprendedores — pero los emprendedores que usen IA van a reemplazar a los que no la usen.</p>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl font-bold mb-8">Conecta conmigo</motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="flex justify-center gap-4 mb-12">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00E5FF]/50 transition-all">
                {s.icon ? (
                  <s.icon className="w-5 h-5 text-gray-400 hover:text-[#00E5FF]" />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-400" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                  </svg>
                )}
              </a>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <a href="https://bio.pixelabai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00E5FF] text-[#0a0f1e] font-black rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_28px_rgba(0,229,255,0.35)]">
              <Download className="w-5 h-5" />Empieza gratis
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
