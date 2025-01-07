"use client";

import { GitHubIcon } from "@/components/icons/github-icon";
import { MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { CalendlyButton } from "@/components/ui/calendly-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 py-12 border-t border-border/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 px-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-brand-blue dark:text-brand-blue-light">
                  Sébastien Timoner
                </p>
                <span className="text-muted-foreground">© {currentYear}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>Aix-en-Provence</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a
                  href="mailto:sebastien@offroadlabs.com"
                  className="hover:text-brand-green transition-colors"
                >
                  sebastien@offroadlabs.com
                </a>
              </div>
            </div>

            <motion.a
              href="https://github.com/offroadlabs/hub-timoner"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-brand-green transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Code source</span>
            </motion.a>
          </div>

          <div className="w-full max-w-md px-4">
            <CalendlyButton
              calendlyUrl="https://calendly.com/timoner/prise-contact"
              className="w-full text-base py-4"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
