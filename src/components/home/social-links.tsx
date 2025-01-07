"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
  title: string;
  description: string;
  url: string;
}

const links: SocialLink[] = [
  {
    title: "Blog Personnel",
    description: "Articles techniques et réflexions sur le développement web",
    url: "https://timoner.com",
  },
  {
    title: "OffroadLabs",
    description: "Studio de développement informatique et design de service",
    url: "https://offroadlabs.com",
  },
  {
    title: "Prendre RDV",
    description: "Planifier une consultation ou une discussion",
    url: "https://calendly.com/timoner/prise-contact",
  },
  {
    title: "GitHub",
    description: "Projets open source et contributions",
    url: "https://github.com/offroadlabs",
  },
];

export function SocialLinks() {
  return (
    <section className="py-16 bg-white/50 dark:bg-slate-900/50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-brand-blue dark:text-brand-blue-light">
            Liens & Contact
          </h2>
          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Retrouvez-moi sur différentes plateformes
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={link.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Card className="p-6 border-none shadow-lg bg-white dark:bg-slate-800/50 hover:shadow-xl transition-all duration-300 hover:bg-brand-green/5">
                  <motion.div
                    className="flex items-start justify-between"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-brand-blue dark:text-brand-blue-light">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {link.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ExternalLink className="w-5 h-5 text-brand-green" />
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
