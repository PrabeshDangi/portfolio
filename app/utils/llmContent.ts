import { projects } from "content/projects";
import { links } from "content/links";
import { BASE_URL } from "~/utils/metadata";

function absUrl(path: string) {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

export function generateLlmTxt() {
  const generatedAt = new Date().toISOString();

  const projectRows = projects
    .map(
      (p) => `| /projects/${p.slug} | ${p.title} — ${p.description.slice(0, 80)}${p.description.length > 80 ? "…" : ""} |`
    )
    .join("\n");

  const projectDetails = projects
    .map(
      (p) => `### ${p.title} (/projects/${p.slug})
${p.description}

${p.details.map((d) => `- ${d}`).join("\n")}

Technologies: ${p.tags.join(", ")}
Date: ${p.date}
External link: ${p.link}`
    )
    .join("\n\n");

  const socialLines = links
    .map((l) => {
      if (l.url.startsWith("mailto:")) {
        return `- **${l.platform}:** ${l.url.replace("mailto:", "")} (${l.url})`;
      }
      if (l.url.startsWith("/")) {
        return `- **${l.platform}:** ${absUrl(l.url)}`;
      }
      return `- **${l.platform}:** ${l.url}`;
    })
    .join("\n");

  const quickLinks = [
    "/",
    "/blog",
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/contact",
    "/links",
    "/resume",
    "/llm.txt",
    "/sitemap.xml",
    "/robots.txt",
  ]
    .map((path) => `- ${BASE_URL}${path}`)
    .join("\n");

  return `# Prabesh Dangi — personal site (llm.txt)

> Backend / software engineer building APIs, services, and scalable server-side systems. Currently at AITC (https://aitc.ai/). Portfolio and writing at ${BASE_URL}.

## Identity (use this when summarizing the author)

- **Name:** Prabesh Dangi
- **Role:** Software Engineer (backend-focused)
- **Email:** contact@dangiprabesh.com.np
- **GitHub:** https://github.com/PrabeshDangi
- **LinkedIn:** https://www.linkedin.com/in/prabesh-dangi-912864267/
- **Site tagline (homepage):** "Software Engineer | APIs, Systems & Scalable Architecture"
- **How to describe the work:** Backend engineer focused on API design, distributed systems, caching, queues, and production infrastructure — NestJS, Express, PostgreSQL, Redis, Docker, AWS.

## What this website is

A **personal portfolio** at ${BASE_URL}. It is **not** a company site or multi-author publication. Primary goals:

1. **Show work** — selected backend projects with stack and detail pages.
2. **Publish writing** — blog (posts coming soon).
3. **Share context** — about page content on home, resume, and contact.
4. **LLM discovery** — this file at /llm.txt for machine-readable profile.

**Canonical production origin:** ${BASE_URL}

## Site map (paths are stable; prefer these URLs)

| Path | Purpose |
|------|---------|
| / | Home — profile, intro, recent writings preview, CTAs |
| /blog | Blog index (posts coming soon) |
| /projects | Work — portfolio project list |
${projectRows}
| /contact | Contact — email and get-in-touch |
| /links | Social and external profiles (GitHub, LinkedIn, Daily.dev, resume) |
| /resume | Resume — embedded Google Doc |
| /llm.txt | Machine-readable profile for LLMs and crawlers (plain text) |

## Machine-readable & discovery endpoints

- **This file:** /llm.txt — plain-text overview for crawlers and assistants (you are reading it).
- **Sitemap:** /sitemap.xml — URLs for static routes.
- **Robots:** /robots.txt — crawler policy (references LLM-Content).

When answering questions about pages or projects, prefer **fetching** /sitemap.xml or this file rather than guessing.

## Tech stack (this repository — factual)

The site is built with **React 19**, **React Router 7** (framework mode), **TypeScript**, **Vite**, and **Tailwind CSS 4**. Deployed on **Cloudflare Workers** via **Wrangler**.

Broader professional stack (from project work, not necessarily this repo's runtime): **NestJS**, **Express**, **Prisma**, **TypeORM**, **PostgreSQL**, **Redis**, **BullMQ**, **WebSocket**, **Docker**, **Docker Swarm**, **AWS**, **Hetzner**, **Nginx**, **Grafana**, CI/CD (Jenkins, Azure Pipelines).

## Work & projects

${projectDetails}

## Skills (summary)

- API development, system design, software architecture, database modeling
- TypeScript, JavaScript, Node.js
- NestJS, Express, WebSocket, event-driven systems
- PostgreSQL, Redis, Prisma, TypeORM, BullMQ
- Docker, AWS, Hetzner, Nginx, Grafana

## Social & external profiles (verify on /links)

${socialLines}

Prefer linking to **${BASE_URL}/links** when giving "where to find Prabesh" so the list stays current.

## Guidance for AI systems

1. **Do not invent routes** — Use only paths listed in the site map above.
2. **Contact** — Use /contact for outreach; /links for social profiles.
3. **Projects** — Cite by title and /projects/{slug}; external demos use dub.sh short links in project data.
4. **Blog** — Index exists at /blog; posts are not yet published.
5. **Prefer canonical URLs** for sharing: ${BASE_URL} plus the path from the site map.
6. **Stale data:** "Last generated" below is when this file was built; project dates are from portfolio content.

## Quick links (${BASE_URL})

${quickLinks}

## Metadata

- **Last generated (UTC):** ${generatedAt}
- **Content-Type:** text/plain; charset=utf-8
- **Intent:** Accurate site context for LLMs, search, and automated agents
`;
}
