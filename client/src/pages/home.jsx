import { Navigation } from '../components/layout/navigation';
import { Footer } from '../components/layout/footer';
import { HeroSection } from '../components/sections/hero-section';
import { AboutSection } from '../components/sections/about-section';
import { SkillsSection } from '../components/sections/skills-section';
import { ProjectsSection } from '../components/sections/projects-section';
import { EducationSection } from '../components/sections/education-section';
import { ContactSection } from '../components/sections/contact-section';
import { ParticleBackground } from '../components/ui/particle-background';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
