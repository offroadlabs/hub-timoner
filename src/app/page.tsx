import { SocialLinks } from "@/components/home/social-links";
import { HeroSection } from "@/components/home/hero-section";
import { OpenSourceProjects } from "@/components/home/open-source-projects";
import { SkillsSection } from "@/components/home/skills-section";
import { AboutSection } from "@/components/home/about-section";
import { ProductsSection } from "@/components/home/products-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 space-y-16">
        <HeroSection />
        <AboutSection />
        <SocialLinks />
        <OpenSourceProjects />
        <ProductsSection />
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}
