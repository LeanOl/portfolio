"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Linkedin, Github } from "react-bootstrap-icons";

export const AboutSection = () => {
  const { dict } = useLanguage();

  return (
    <section id="about" className="min-h-[80vh] flex items-center py-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
              {dict.about.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-2">
              {dict.about.role}
            </h2>
            {/* <h3 className="text-lg md:text-xl text-foreground/70">
              {dict.about.studies}
            </h3> */}
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/leandro-olmedo-torres"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-lg transition-all font-medium"
            >
              <Linkedin size={20} />
              {dict.about.linkedin}
            </a>
            <a
              href="https://github.com/LeanOl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 text-foreground hover:bg-white/10 rounded-lg transition-all font-medium"
            >
              <Github size={20} />
              {dict.about.github}
            </a>
          </div>
        </div>

        <div className="bg-card-bg/50 p-10 md:p-12 rounded-3xl border border-white/5 shadow-lg">
          <div className="text-foreground/80 leading-relaxed text-xl md:text-2xl flex flex-col gap-8">
            {dict.about.description.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
