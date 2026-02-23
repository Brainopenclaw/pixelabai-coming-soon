"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-surface border border-white/5 p-10 md:p-14"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-4xl">
            👨‍💻
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Jorge</h3>
            <p className="text-text-muted mb-4">
              Emprendedor, consultor tecnológico y apasionado por la
              inteligencia artificial aplicada a negocios reales.
            </p>
            <div className="flex gap-8 mb-6">
              <div className="text-center">
                <CountUp target={10} suffix="+" />
                <p className="text-sm text-text-muted mt-1">años en tech</p>
              </div>
              <div className="text-center">
                <CountUp target={500} suffix="+" />
                <p className="text-sm text-text-muted mt-1">
                  emprendedores ayudados
                </p>
              </div>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-text-muted">
              &ldquo;Mi misión es democratizar la IA para que cualquier
              emprendedor pueda usarla sin complicaciones.&rdquo;
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
