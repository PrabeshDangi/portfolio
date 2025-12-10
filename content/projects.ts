import type { Project } from "~/types/project";

export const projects: Project[] = [
  {
    slug: "aitc-homes",
    title: "AITC Homes",
    description:
      "Backend system built with NestJS, Redis caching, Docker, BullMQ, AWS, Nginx, and monitoring via Grafana.",
    details: [
      "Developed backend modules using NestJS with a layered caching strategy (Redis) to reduce peak-time latency.",
      "Orchestrated microservices using Docker and deployed with AWS CI/CD pipelines (Jenkins, Azure Pipelines).",
      "Configured Nginx for SSL termination, routing, and optimized API delivery.",
      "Integrated BullMQ for background workflows and real-time task processing.",
      "Implemented Grafana dashboards for system health and performance monitoring."
    ],
    tags: ["NestJS", "Prisma", "Postgres", "Redis", "BullMQ", "Nginx", "Docker", "AWS", "Grafana"],
    date: "2024-06-15",
    link: "https://dub.sh/aitc-homes"
  },

  {
    slug: "annapurna-galleries",
    title: "Annapurna Galleries",
    description:
      "Auction platform with real-time bidding using WebSocket and Event-Driven architecture.",
    details: [
      "Developed backend features using ExpressJS with structured data access via Prisma.",
      "Implemented real-time auction bidding using WebSocket channels.",
      "Built BullMQ-powered pipelines for time-sensitive auction tasks and notifications.",
      "Integrated payments and optimized Nginx routing for high concurrency.",
      "Engineered an event-driven architecture ensuring synchronized and responsive bidding."
    ],
    tags: ["ExpressJS", "Prisma", "Postgres", "BullMQ", "WebSocket", "Nginx"],
    date: "2024-04-01",
    link: "https://dub.sh/annapurna"
  },

  {
    slug: "jawaaf-education",
    title: "Jawaaf Education (Freelance)",
    description:
      "Full-scale LMS backend built solo using NestJS, Redis, Docker Swarm, and Hetzner deployment.",
    details: [
      "Designed and built the entire backend architecture from scratch for a production LMS.",
      "Created modular NestJS services using Prisma and Redis caching.",
      "Enabled real-time features tailored for LMS activities.",
      "Deployed using Docker Swarm on Hetzner with highly available setup.",
      "Optimized Nginx routing and DB performance for smooth learning experiences."
    ],
    tags: ["NestJS", "Prisma", "Redis", "Docker Swarm", "Hetzner", "Nginx"],
    date: "2024-02-10",
    link: "https://dub.sh/jawaaf"
  },

  {
    slug: "coinflick",
    title: "Coinflick",
    description:
      "Crypto portfolio backend using ExpressJS, TypeORM, PostgreSQL, Docker, and AWS.",
    details: [
      "Designed and built backend APIs using Express.js and TypeORM.",
      "Containerized services with Docker and deployed on AWS.",
      "Improved reliability through optimized DB indexing and caching patterns.",
      "Configured Nginx routing and performance tuning for high-speed delivery."
    ],
    tags: ["ExpressJS", "TypeORM", "PostgreSQL", "Docker", "AWS", "Nginx"],
    date: "2023-09-22",
    link: "https://dub.sh/coinflick"
  }
];
