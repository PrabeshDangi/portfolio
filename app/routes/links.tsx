import { links } from "content/links";
import { Link } from "react-router";
import type { Route } from "./+types/links";
import { BASE_URL, generateMetadata } from "~/utils/metadata";

export function meta({}: Route.MetaArgs) {
  return [
    generateMetadata({
      title: "Links",
      description:
        "Connect with me on various social platforms and professional networks. Find all my important links in one place.",
      path: "/links",
    }),
  ];
}

export default function Links() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground dark:text-background">
        Let's Connect
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {links.map((link) => (
          <Link
            key={link.platform}
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-xl p-6 border  dark:border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center space-y-3 ${link.color}`}
            aria-label={`Link to ${link.platform}`}
          >
            {link.icon}
            <div className="relative overflow-hidden w-full  text-center h-6">
              <span className="text-sm md:text-base font-medium text-foreground dark:text-background absolute inset-0 w-full transition-transform duration-300 group-hover:-translate-y-full">
                {link.platform}
              </span>
              <span className="text-sm md:text-base font-medium text-foreground dark:text-background absolute w-full inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                {link.platform}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
