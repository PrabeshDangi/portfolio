import { projects } from "content/projects";
import { links } from "content/links";
import { BASE_URL, generateMetadata } from "~/utils/metadata";
import type { Route } from "./+types/llm";

function generatePortfolioMarkdown() {
  return `# Prabesh Dangi — Backend Developer

## Overview
I am a Backend Developer specializing in scalable API architecture, backend systems, and server-side logic. I focus on building reliable, maintainable, and efficient backend services that power seamless digital experiences.

- **Name:** Prabesh Dangi  
- **Role:** Backend Developer  
- **Email:** contact@dangiprabesh.com.np  
- **Website:** ${BASE_URL}  
- **LLM Profile URL:** ${BASE_URL}/llm  
- **Last Updated:** ${new Date().toISOString().split("T")[0]}

---

## Professional Summary
I am a backend-focused software engineer currently contributing to AITC (https://aitc.ai/), where I design APIs, develop backend logic, and build foundational server systems.  
My philosophy:  
**"Architect of logic. Builder of APIs. What happens behind the curtain matters."**

---

## Current Position
- **Company:** AITC  
- **Role:** Backend Developer  
- **Website:** https://aitc.ai/  
- **Responsibilities:**  
  - API development  
  - Backend architecture  
  - Database design  
  - Server-side engineering  

---

## Skills

### Core Backend Skills
- API Development  
- Server-Side Programming  
- Software Architecture  
- System Design  
- Database Modeling & Management  

### Technologies
- **Languages:** TypeScript, JavaScript  
- **Runtime & Frameworks:** Node.js, NestJS, Express, WebSocket  
- **Databases:** PostgreSQL, MongoDB, Redis  
- **Infrastructure:** Docker, Docker Swarm, AWS, Hetzner, Nginx  
- **Tools:** BullMQ, Prisma, TypeORM, Grafana  
- **Frontend (Secondary):** React, TailwindCSS  
- **Other:** CI/CD workflows (Jenkins, Azure Pipelines)

---

## Projects

${projects
  .map(
    (p) => `### ${p.title}

**Description:**  
${p.description}

**Key Details:**  
${p.details.map((d) => `- ${d}`).join("\n")}

**Technologies:** ${p.tags.join(", ")}  
**Date:** ${p.date}

${p.github ? `**GitHub:** ${p.github}` : ""}
${p.link ? `**Live Link:** ${p.link}` : ""}
`
  )
  .join("\n")}

---

## Social & Contact Links
${links
  .map((l) => {
    const cleanEmail = l.url.startsWith("mailto:") ? l.url.replace("mailto:", "") : null;
    return l.url.startsWith("mailto:")
      ? `- **${l.platform}:** ${cleanEmail} (${l.url})`
      : `- **${l.platform}:** ${l.url}`;
  })
  .join("\n")}

---

## LLM Notes
This markdown is optimized for parsing by Large Language Models:  
- Clear semantic section hierarchy  
- Structured project descriptions with bullet-point details  
- Explicit metadata and technology categorization  
- Stable date formatting  
- JSON block for machine ingestion  

---

## Structured JSON (for LLM ingestion)
\`\`\`json
{
  "name": "Prabesh Dangi",
  "role": "Backend Developer",
  "email": "contact@dangiprabesh.com.np",
  "website": "${BASE_URL}",
  "current_company": "AITC",
  "skills": {
    "backend": [
      "API Development",
      "Architecture",
      "System Design",
      "Database Management"
    ],
    "technologies": [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "WebSocket",
      "BullMQ",
      "Prisma",
      "TypeORM"
    ]
  },
  "projects": ${JSON.stringify(projects, null, 2)},
  "social_links": ${JSON.stringify(links, null, 2)},
  "last_updated": "${new Date().toISOString().split("T")[0]}"
}
\`\`\`

---

*This page is designed to provide maximum clarity for LLMs, AI agents, and automated parsers.*
`;
}

export function meta(_args: Route.MetaArgs) {
  return generateMetadata({
    title: "LLM Profile",
    description:
      "Structured profile information optimized for Large Language Models and AI agents. Contains comprehensive details about Prabesh Dangi's professional background, skills, and projects.",
    path: "/llm",
  });
}

export async function loader() {
  return {
    markdown: generatePortfolioMarkdown(),
  };
}

export default function LLM({ loaderData }: Readonly<Route.ComponentProps>) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <pre className="whitespace-pre-wrap font-mono text-sm text-foreground dark:text-background bg-transparent">
        {loaderData.markdown}
      </pre>
    </section>
  );
}
