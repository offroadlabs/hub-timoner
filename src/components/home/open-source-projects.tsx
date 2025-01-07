"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github-icon";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  url: string;
  stars?: number;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "sudoku-challenge",
    description:
      "Une exploration du développement d'un même jeu de Sudoku dans différents langages et frameworks de programmation. L'objectif est de démontrer comment une même logique de jeu peut être implémentée avec différentes approches techniques.",
    url: "https://github.com/offroadlabs/sudoku-challenge",
    tech: ["C++", "TypeScript", "React", "Next.js"],
  },
  {
    title: "pdf-service",
    description:
      "Un microservice basé sur Symfony 7.2 pour générer des PDFs à partir de contenu HTML en utilisant Chrome Headless. Service robuste et performant pour la génération de documents PDF.",
    url: "https://github.com/offroadlabs/pdf-service",
    tech: ["TypeScript", "Symfony", "Docker", "Chrome Headless"],
  },
  {
    title: "traffic-lights",
    description:
      "Une application de simulation de feux de circulation démontrant l'implémentation de systèmes temps réel avec TypeScript. Utilise une architecture moderne et des patterns de conception avancés.",
    url: "https://github.com/offroadlabs/traffic-lights",
    tech: ["TypeScript", "React", "State Management", "Real-time"],
  },
];

export function OpenSourceProjects() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-brand-blue dark:text-brand-blue-light">
          Projets Open Source
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-lg border p-6 hover:shadow-lg transition-shadow"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Card className="p-6 border-none shadow-lg bg-white dark:bg-slate-800/50 hover:shadow-xl transition-all duration-300 hover:bg-brand-green/5">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <GitHubIcon className="h-5 w-5 text-brand-blue dark:text-brand-blue-light" />
                      <h3 className="text-xl font-semibold text-brand-blue dark:text-brand-blue-light">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 
                            bg-brand-blue/10 dark:bg-brand-blue/20 
                            text-brand-blue dark:text-brand-blue-light
                            rounded-full text-sm font-medium
                            hover:bg-brand-blue/20 dark:hover:bg-brand-blue/30 
                            transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-brand-green dark:text-brand-green-light">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
