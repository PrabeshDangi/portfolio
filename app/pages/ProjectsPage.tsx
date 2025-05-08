import { Link, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import type { Project } from "~/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

export function ProjectsPage({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section>
      <h1 className="text-4xl font-bold text-foreground dark:text-background mb-12 px-4">
        Projects
      </h1>
      <div className="relative">
        <div className="absolute left-2.5 md:left-8 top-0 bottom-6 md:bottom-10 w-[2px] bg-border/70">
          <div
            className="absolute top-0 left-0 w-full bg-primary transition-all duration-200 ease-out"
            style={{ height: `${scrollProgress + 8}%` }}
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="space-y-8 max-h-[600px] overflow-y-auto pr-4
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-track]:rounded-lg
            [&::-webkit-scrollbar-thumb]:rounded-lg
            [&::-webkit-scrollbar-thumb]:border-2
            [&::-webkit-scrollbar-thumb]:border-transparent
            [&::-webkit-scrollbar-thumb]:bg-clip-padding
            hover:[&::-webkit-scrollbar-thumb]:bg-primary/80
            dark:[&::-webkit-scrollbar-thumb]:bg-primary/40
            dark:hover:[&::-webkit-scrollbar-thumb]:bg-primary/60
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-primary/60
            hover:scrollbar-thumb-primary/80
            dark:scrollbar-thumb-primary/40
            dark:hover:scrollbar-thumb-primary/60"
        >
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="relative pl-10 md:pl-16 group"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="absolute left-0.5 md:left-[25px] top-8 w-4 h-4">
                <div className="absolute w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="absolute w-4 h-4 rounded-full bg-primary opacity-20" />
              </div>

              <div className="relative flex flex-col cursor-pointer rounded-xl border bg-card p-6 hover:bg-accent/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {project.github && (
                      <Link
                        to={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <VscGithub size={20} />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        to={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {project.image && project.image.length > 0 && (
                  <div className="relative mb-4 h-24 md:h-48 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <p className="text-foreground/80 dark:text-background/80 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
