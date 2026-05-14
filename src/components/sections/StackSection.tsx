"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SkillCategory } from "@/types";

export const StackColumn = ({ data }: { data: SkillCategory }) => {
  const { dict } = useLanguage();
  
  // Type assertion since dict.stack keys match category values
  const title = dict.stack[data.category as keyof typeof dict.stack];

  return (
    <div className="bg-card-bg rounded-xl p-8 border border-white/5">
      <h3 className="text-2xl font-semibold mb-6 text-center text-accent">
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {data.skills.map((skill) => (
          <li 
            key={skill}
            className="flex items-center gap-3 text-foreground/80 bg-white/5 px-4 py-3 rounded-lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent/50" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const StackSection = ({ skills }: { skills: SkillCategory[] }) => {
  const { dict } = useLanguage();

  return (
    <section id="stack" className="py-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-accent">/</span>
        {dict.stack.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((categoryData) => (
          <StackColumn key={categoryData.id} data={categoryData} />
        ))}
      </div>
    </section>
  );
};
