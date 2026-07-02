import { Link } from "react-router";
import type { Route } from "./+types/$";
import { FaHome, FaRobot } from "react-icons/fa";
import { generateMetadata } from "~/utils/metadata";

export function meta(_args: Route.MetaArgs) {
  return generateMetadata({
    title: "404 - Page Not Found",
    description: "Even the LLM couldn't hallucinate this page.",
    path: "/404",
  });
}

export function status() {
  return 404;
}

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <div className="flex items-center gap-3 text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl dark:text-neutral-100">
        <span>404</span>
        <FaRobot className="animate-pulse text-4xl md:text-5xl" />
      </div>
      <p className="max-w-lg text-lg text-neutral-600 md:text-xl dark:text-neutral-400">
        Even the LLM couldn&apos;t hallucinate this page.
      </p>
      <Link to="/" className="btn-primary mt-4 inline-flex items-center gap-2">
        <FaHome />
        Back to homepage
      </Link>
    </div>
  );
}
