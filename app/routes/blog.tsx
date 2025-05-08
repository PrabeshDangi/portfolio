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
    <div className="container mx-auto pt-32 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {/* Blog post cards will go here */}
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-foreground/40">Blog posts coming soon...</p>
        </div>
      </div>
    </div>
  );
}
