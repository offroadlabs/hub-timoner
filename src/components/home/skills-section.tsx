"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Langages & Frameworks",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "PHP",
      "Symfony",
      "Flutter/Dart",
      "Kotlin",
      "C++/QT",
      "Node.js",
      "Zephyr OS/IoT",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Tailwind",
      "React",
      "Next.js",
      "TypeScript",
      "FrankenPHP",
      "Chrome Extensions",
    ],
  },
  {
    title: "Backend & Bases de données",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "Redis",
      "MongoDB",
      "Nginx",
      "Apache",
    ],
  },
  {
    title: "DevOps & Outils",
    skills: [
      "Docker",
      "Git",
      "MacOS",
      "Debian (Linux)",
      "CI/CD",
      "Chrome Headless",
      "API Platform",
    ],
  },
  {
    title: "Architecture & Méthodologies",
    skills: [
      "Microservices",
      "API REST",
      "Gestion de projet technique",
      "Lead Developer",
      "Architecture logicielle",
      "Spécifications fonctionnelles",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8">Compétences</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg border flex flex-col items-center gap-2"
          >
            <h3 className="text-xl font-semibold mb-4 text-brand-blue dark:text-brand-blue-light">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 
                    bg-brand-blue/10 dark:bg-brand-blue/20 
                    text-brand-blue dark:text-brand-blue-light
                    rounded-full text-sm font-medium
                    hover:bg-brand-blue/20 dark:hover:bg-brand-blue/30 
                    transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
