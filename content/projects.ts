import type { Project } from "~/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React, TypeScript, and Tailwind CSS",
    content:
      "This is my personal portfolio website built with modern web technologies. It showcases my projects, skills, and experience in a clean and responsive design.",
    date: "2024-01-15",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "A full-stack task management application with real-time updates",
    content:
      "A modern task management application that helps users organize their work with real-time collaboration features.",
    date: "2024-01-10",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-manager.com",
  },
];
