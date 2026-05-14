import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { mockProjects, mockSkills } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <AboutSection />
      <ProjectsSection projects={mockProjects} />
      <StackSection skills={mockSkills} />
    </div>
  );
}
