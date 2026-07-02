import type { Route } from "./+types/blog";
import { generateMetadata } from "~/utils/metadata";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Blog",
    description:
      "Read my latest thoughts, tutorials, and insights about software development, technology, and programming.",
    path: "/blog",
  });
}

export default function Blog() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="section-label">Writings</p>
        <h1 className="page-heading">Blog</h1>
        <p className="max-w-lg text-neutral-600 dark:text-neutral-400">
          Articles on backend development, system design, and lessons from
          building software.
        </p>
      </div>

      <article className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Coming soon
        </p>
        <h2 className="mt-2 text-lg font-medium">Posts are on the way</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          I&apos;m drafting my first articles. Check back soon.
        </p>
      </article>
    </section>
  );
}
