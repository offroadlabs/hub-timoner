import { SocialLinks } from "@/components/home/social-links";
import { HeroSection } from "@/components/home/hero-section";
import { OpenSourceProjects } from "@/components/home/open-source-projects";
import { SkillsSection } from "@/components/home/skills-section";
import { AboutSection } from "@/components/home/about-section";
import { Footer } from "@/components/layout/footer";
import { ColoredSection } from "@/components/layout/colored-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ColoredSection variant="primary">
        <HeroSection />
      </ColoredSection>

      <ColoredSection variant="white">
        <AboutSection />
      </ColoredSection>

      <ColoredSection variant="secondary">
        <SocialLinks />
      </ColoredSection>

      <ColoredSection variant="white">
        <OpenSourceProjects />
      </ColoredSection>

      <ColoredSection variant="primary">
        <SkillsSection />
      </ColoredSection>

      <Footer />
    </main>
  );
}
