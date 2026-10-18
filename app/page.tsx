import { ProfileAside } from "@/components/profile/ProfileAside";
import { ProfileIntro } from "@/components/profile/ProfileIntro";
import { Container } from "@/components/ui/Container";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { LicensesSection } from "@/components/sections/LicensesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function HomePage() {
  return (
    <Container className="py-4 sm:py-6">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-4">
        <div className="space-y-3">
          <ProfileIntro />
          <AboutSection />
          <FeaturedSection />
          <ExperienceSection />
          <EducationSection />
          <LicensesSection />
          <SkillsSection />
          <WorkSection />
          <ContactSection />
        </div>
        <ProfileAside />
      </div>
    </Container>
  );
}
