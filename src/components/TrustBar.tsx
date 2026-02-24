"use client";

import { motion } from "framer-motion";

const countries = [
  { flag: "🇲🇽", name: "México" },
  { flag: "🇨🇴", name: "Colombia" },
  { flag: "🇦🇷", name: "Argentina" },
  { flag: "🇪🇸", name: "España" },
  { flag: "🇵🇪", name: "Perú" },
  { flag: "🇨🇱", name: "Chile" },
  { flag: "🇪🇨", name: "Ecuador" },
  { flag: "🇻🇪", name: "Venezuela" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇩🇴", name: "República Dominicana" },
];

export default function TrustBar() {
  return (
    <section className="relative py-8 px-6 bg-gradient-to-r from-surface via-surface/90 to-surface overflow-hidden border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <p className="text-text-muted text-center md:text-left font-medium">
            Emprendedores de 10+ países ya usan nuestras guías
          </p>
          <div className="flex items-center gap-3 overflow-hidden">
            <motion.div
              animate={{
                x: [0, -50],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              {[...countries, ...countries].map((country, i) => (
                <span
                  key={i}
                  className="text-3xl"
                  title={country.name}
                >
                  {country.flag}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle gradient accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
