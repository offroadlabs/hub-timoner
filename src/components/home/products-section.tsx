"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Product {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  isSecondary?: boolean;
}

const products: Product[] = [
  {
    title: "PostGenerator",
    description:
      "Boostez vos réseaux sociaux avec des posts captivants générés par l'IA, gratuitement et sans inscription. Gagnez du temps tout en augmentant l'engagement de votre audience.",
    buttonText: "Créer un post",
    buttonLink: "https://postgenerator.offroadlabs.com",
    isSecondary: true,
  },
  {
    title: "BlackLimpkin",
    description:
      "BlackLimpkin est votre compagnon ultime pour naviguer sur LinkedIn avec facilité et efficacité. Notre extension Chrome innovante boostée à l'IA est conçue pour révolutionner la manière dont les professionnels interagissent sur LinkedIn, offrant des outils inégalés pour l'interaction, le réseautage et la gestion des données.",
    buttonText: "Plus d'informations",
    buttonLink: "https://blacklimpkin.com",
  },
  {
    title: "MassMailServer",
    description:
      "MassMailServer, basé sur Haraka, permet de gérer des volumes élevés d'e-mails avec facilité. Nous avons également intégré le pixel tracking et les webhooks pour une traçabilité précise des ouvertures, envois et clics.",
    buttonText: "Contactez-nous",
    buttonLink: "https://calendly.com/timoner/prise-contact",
    isSecondary: true,
  },
  {
    title: "Scraper",
    description:
      "Notre solution de scraping est basée sur une architecture en microservices, offrant une haute scalabilité et une fiabilité élevée. Nous avons conçu notre système pour répondre aux besoins les plus complexes.",
    buttonText: "Contactez-nous",
    buttonLink: "https://calendly.com/timoner/prise-contact",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-brand-blue dark:text-brand-blue-light">
          Nos produits
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card
                className={`group relative overflow-hidden border-2 ${
                  product.isSecondary
                    ? "border-brand-blue/20 hover:border-brand-blue/40"
                    : "border-brand-green/20 hover:border-brand-green/40"
                } bg-white dark:bg-slate-800/50 rounded-lg transition-all duration-300 hover:shadow-xl`}
              >
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${
                    product.isSecondary ? "bg-brand-blue" : "bg-brand-green"
                  }`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                />
                <div className="p-6 relative z-10">
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      product.isSecondary
                        ? "text-brand-blue dark:text-brand-blue-light"
                        : "text-brand-green dark:text-brand-green-light"
                    }`}
                  >
                    {product.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {product.description}
                  </p>
                  <a
                    href={product.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`transform transition-all duration-300 ${
                        product.isSecondary
                          ? "bg-brand-blue hover:bg-brand-blue-light"
                          : "bg-brand-green hover:bg-brand-green-light"
                      } text-white font-semibold`}
                    >
                      {product.buttonText}
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
