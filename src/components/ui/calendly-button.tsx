"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "./animated-button";

interface CalendlyButtonProps {
  className?: string;
  calendlyUrl: string;
}

export function CalendlyButton({
  calendlyUrl = "https://calendly.com/timoner/prise-contact",
}: CalendlyButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      <AnimatedButton
        href={calendlyUrl}
        className="bg-brand-green hover:bg-brand-green/90 text-white font-bold 
          px-12 py-6 text-xl rounded-xl shadow-lg 
          hover:shadow-brand-green/20 hover:shadow-xl
          transition-shadow duration-300
          transform hover:-translate-y-0.5
          tracking-wide"
      >
        <span className="flex items-center gap-3">🗓️ Prise de contact</span>
      </AnimatedButton>
    </motion.div>
  );
}
