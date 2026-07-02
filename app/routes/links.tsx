import { links } from "content/links";
import { Link } from "react-router";
import type { Route } from "./+types/links";
import { generateMetadata } from "~/utils/metadata";

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
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="section-label">Connect</p>
        <h1 className="page-heading">Let&apos;s connect</h1>
        <p className="max-w-lg text-neutral-600 dark:text-neutral-400">
          Find me across platforms — always open to conversations about
          backend engineering and interesting projects.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.platform}
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-5 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
            aria-label={`Link to ${link.platform}`}
          >
            <span className="text-neutral-500 transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
              {link.icon}
            </span>
            <span className="font-medium">{link.platform}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
