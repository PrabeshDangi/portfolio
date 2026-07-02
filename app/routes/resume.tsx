import type { Route } from "./+types/resume";
import { generateMetadata } from "~/utils/metadata";

export function meta(_args: Route.MetaArgs) {
  return generateMetadata({
    title: "Resume",
    description: "Prabesh Dangi's resume and professional background.",
    path: "/resume",
  });
}

export default function Resume() {
  const resumeUrl =
    "https://docs.google.com/document/d/13Duwn5MSvycEwG9iSPKJGteIwrdGCSUAm4swgZb94JQ/preview";

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="section-label">Resume</p>
        <h1 className="page-heading">Resume</h1>
      </div>
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <iframe
          src={resumeUrl}
          className="h-[75vh] w-full border-0"
          title="Resume"
          allow="fullscreen"
        />
      </div>
    </section>
  );
}
