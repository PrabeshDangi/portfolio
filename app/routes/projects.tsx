import { generateMetadata } from "~/utils/metadata";
import { ProjectsPage } from "~/pages/ProjectsPage";
import { projects } from "content/projects";

export function meta() {
  return generateMetadata({
    title: "Projects",
    description:
      "Explore my portfolio of projects and development work. See what I've built and learn about my technical expertise.",
    path: "/projects",
  });
}

export default function Projects() {
  return <ProjectsPage projects={projects} />;
}
