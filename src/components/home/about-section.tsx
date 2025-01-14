"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket, Users } from "lucide-react";

interface HighlightCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlights: HighlightCard[] = [
  {
    icon: <Code2 className="w-8 h-8 text-brand-blue" />,
    title: "20+ ans d'expérience",
    description:
      "En développement logiciel et architecture de systèmes complexes",
  },
  {
    icon: <Brain className="w-8 h-8 text-brand-blue" />,
    title: "Expert technique",
    description:
      "Spécialisé en PHP, Symfony, TS, React et bien d'autres choses encore ...",
  },
  {
    icon: <Rocket className="w-8 h-8 text-brand-blue" />,
    title: "Innovation",
    description:
      "Passionné par les nouvelles technologies et l'amélioration continue",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-blue" />,
    title: "Leadership",
    description: "Direction technique d'équipes et mentorat de développeurs",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-brand-blue dark:text-brand-blue-light"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              À Propos
            </motion.h2>
            <motion.div
              className="prose dark:prose-invert max-w-none space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionné par le développement logiciel, j’accompagne les
                équipes techniques dans la conception et la réalisation de
                solutions sur mesure, robustes et évolutives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fort d’une expérience polyvalente en développement full-stack et
                en gestion de projets complexes, je veille à l’excellence
                technique tout en favorisant la collaboration et l’alignement
                avec les objectifs métiers. Mon approche est centrée sur la
                qualité, la scalabilité et l’innovation continue.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
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
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    className="p-6 border-none shadow-lg bg-white dark:bg-slate-800/50 
                      hover:shadow-xl transition-all duration-300 hover:bg-brand-blue/5"
                  >
                    <div className="space-y-4">
                      <motion.div
                        className="p-3 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-lg w-fit"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-brand-blue dark:text-brand-blue-light">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
