"use client";

import React, { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "./Navbar";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-24 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        {children}
      </main>
    </LanguageProvider>
  );
}
