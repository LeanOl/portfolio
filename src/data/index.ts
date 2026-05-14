import { Project, SkillCategory } from "@/types";

export const mockProjects: Project[] = [
  {
    id: "ecommerce",
    title: {
      en: "E-Commerce Web Application",
      es: "Aplicación Web de E-Commerce"
    },
    description: {
      en: "A complete E-Commerce platform featuring a robust backend built with .NET and C# alongside an interactive Angular frontend. It includes a custom REST API architecture for seamless client-database communication.",
      es: "Plataforma integral de E-Commerce que incluye un backend robusto construido en .NET y C# junto a un frontend interactivo en Angular. Cuenta con una arquitectura de API REST para la comunicación fluida entre el cliente y la base de datos."
    },
    techStack: [".NET", "C#", "Angular", "REST API"],
    githubUrl: "https://github.com/LeanOl/ProyectoDA2"
  },
  {
    id: "raytracing",
    title: {
      en: "Full-Stack AI Ray Tracing Application",
      es: "Aplicación Full-Stack de Ray Tracing con IA"
    },
    description: {
      en: "A full-stack application for rendering sphere images via ray tracing algorithms. Built with a React frontend and a Java REST API backend, the solution is containerized with Docker and deployed on Microsoft Azure.",
      es: "Aplicación full-stack para la renderización de imágenes de esferas mediante algoritmos de ray tracing. Desarrollada con un frontend en React y un backend API REST en Java, contenerizada con Docker y desplegada en Microsoft Azure."
    },
    techStack: ["React", "Java", "Docker", "Microsoft Azure", "REST API"],
    liveUrl: "https://raytracing-frontend.jollymeadow-4cb0e451.eastus.azurecontainerapps.io/", 
    githubUrl: "https://github.com/LeanOl/raytracingproject",
  }
];

export const mockSkills: SkillCategory[] = [ 
  {
    id: "languages",
    category: "frontend",
    skills: ["Javascript", "Angular", "TypeScript", "React"]
  },
  {
    id: "frameworks",
    category: "backend",
    skills: ["Node.js", ".NET", "MySql", "SQL", "Java", "C#"]
  },
  {
    id: "tools",
    category: "tools",
    skills: ["Git", "Docker", "Azure", "AI Agents"]
  }
];
