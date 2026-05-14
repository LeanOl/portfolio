import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { projects, skills } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <AboutSection />
      <ProjectsSection projects={projects} />
      <StackSection skills={skills} />
    </div>
  );
}
