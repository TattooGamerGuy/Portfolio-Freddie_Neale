import { HomeHero } from "@/components/home/HomeHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ExperienceSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
