"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {Linkedin, Translate} from "react-bootstrap-icons"

export const Navbar = () => {
  const { language, toggleLanguage, dict } = useLanguage();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card-bg/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-end relative">
        
        {/* Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
          <button 
            onClick={() => handleScroll('about')}
            className="text-foreground hover:text-accent font-semibold text-lg transition-colors cursor-pointer"
          >
            {dict.nav.about}
          </button>
          <button 
            onClick={() => handleScroll('projects')}
            className="text-foreground hover:text-accent font-semibold text-lg transition-colors cursor-pointer"
          >
            {dict.nav.projects}
          </button>
          <button 
            onClick={() => handleScroll('stack')}
            className="text-foreground hover:text-accent font-semibold text-lg transition-colors cursor-pointer"
          >
            {dict.nav.stack}
          </button>
        </div>

        {/* Right side options */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/leandro-olmedo-torres"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-full hover:bg-accent/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-foreground" />
          </a>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-sm font-semibold uppercase cursor-pointer"
          >
            <Translate size={18} />
            {language}
          </button>
        </div>

      </div>
    </nav>
  );
};
