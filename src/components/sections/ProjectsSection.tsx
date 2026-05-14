"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types";
import { ExternalLink, BookAIcon } from "lucide-react";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { dict, language } = useLanguage();

  return (
    <div className="bg-card-bg rounded-xl p-8 border border-white/5 hover:border-accent/30 transition-all flex flex-col h-full group">
      <h3 className="text-3xl font-bold mb-4 max-w-[70%] group-hover:text-accent transition-colors">
        {project.title[language as 'en' | 'es']}
      </h3>
      
      <p className="text-foreground/75 text-lg mb-8 flex-grow max-w-[70%]">
        {project.description[language as 'en' | 'es']}
      </p>

      {/* Tech Chips */}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.techStack.map((tech) => (
          <span 
            key={tech}
            className="px-4 py-1.5 bg-white/5 text-foreground/90 text-sm font-medium rounded-full select-none"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-end gap-6 mt-auto pt-6 border-t border-white/5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            <ExternalLink size={20} />
            {dict.projects.demo}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            <BookAIcon size={20} />
            {dict.projects.repo}
          </a>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="py-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-accent">/</span>
        {dict.projects.title}
      </h2>

      <div className="flex flex-col gap-10 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
