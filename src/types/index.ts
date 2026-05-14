export interface Project {
  id: string;
  title: Record<"en" | "es", string>;
  description: Record<"en" | "es", string>;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  category: "frontend" | "backend" | "tools";
  skills: string[];
}
