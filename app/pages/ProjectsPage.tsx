import { useNavigate } from "react-router";
import type { Project } from "~/types/project";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ProjectsPage({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();

  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="section-label">Portfolio</p>
        <h1 className="page-heading">Work</h1>
        <p className="max-w-lg text-neutral-600 dark:text-neutral-400">
          Selected projects from my work in systems, APIs, and tools I&apos;ve built.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group cursor-pointer rounded-2xl border border-neutral-200 p-6 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-medium transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-400">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {formatDate(project.date)}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border border-neutral-200 px-3 py-2 text-xs text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                Open →
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
