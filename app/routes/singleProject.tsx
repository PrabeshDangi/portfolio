import { generateMetadata } from "~/utils/metadata";
import { Link } from "react-router";
import type { Route } from "./+types/singleProject";
import { projects } from "content/projects";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function meta({ params }: Route.MetaArgs) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return generateMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: "/projects",
    });
  }

  return generateMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: Route.ActionArgs) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <section className="space-y-4">
        <h1 className="page-heading">Project not found</h1>
        <Link to="/projects" className="btn-secondary inline-flex">
          ← Back to work
        </Link>
      </section>
    );
  }

  return (
    <article className="space-y-8">
      <Link to="/projects" className="btn-secondary inline-flex">
        ← Back to work
      </Link>

      <div className="space-y-4">
        <h1 className="page-heading">{project.title}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {formatDate(project.date)}
        </p>
        <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
      </div>

      <section className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <p className="section-label">What I built</p>
        <ul className="mt-3 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
          {project.details.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-200">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          Open project →
        </a>
      </div>
    </article>
  );
}
