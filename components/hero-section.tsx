"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 0.58]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.62], [1, 0.76, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -54]);
  const rotate = useTransform(scrollYProgress, [0, 0.6], [0, -2.8]);

  return (
    <div ref={ref} className="relative z-0 h-[125vh]">
      <section className="sticky top-0 flex h-screen items-start justify-center overflow-hidden pt-[18vh]">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/background.png')" }}
          animate={{
            scale: [1, 1.035, 1.02, 1.04, 1],
            filter: ["brightness(0.92)", "brightness(0.98)", "brightness(1)", "brightness(0.97)", "brightness(0.92)"],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[#2b210f]/25" />
        <div className="gold-rays" />
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale, opacity, y, rotate }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <h1 className="hero-title text-6xl text-[#f3ead4] drop-shadow-[0_8px_24px_rgba(40,24,8,0.35)] md:text-8xl">
            tem<span className="font-semibold">UKM</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-[#f6edd8]/90 md:text-base">
            temUKM membantu mahasiswa UIN Jambi menemukan, mengenal, dan mendapatkan informasi
            tentang berbagai Unit Kegiatan Mahasiswa yang tersedia di kampus.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
