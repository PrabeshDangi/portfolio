import { generateMetadata } from "~/utils/metadata";
import { Link } from "react-router";
import type { Route } from "./+types/singleProject";
import { projects } from "content/projects";

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
    return <div>Project not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mb-8">
        {project.github && (
          <Link
            to={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View on GitHub
          </Link>
        )}
        {project.demo && (
          <Link
            to={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Live Demo
          </Link>
        )}
      </div>
      <p className="text-lg leading-relaxed">{project.content}</p>
    </article>
  );
}
