"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "../dictionaries/en.json";
import es from "../dictionaries/es.json";

export type Language = "en" | "es";
export type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };
  
  const dict = language === "en" ? en : es;
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
