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
  const resumeUrl = "https://docs.google.com/document/d/13Duwn5MSvycEwG9iSPKJGteIwrdGCSUAm4swgZb94JQ/preview";

  return (
    <section className="w-full h-screen">
      <iframe
        src={resumeUrl}
        className="w-full h-full border-0"
        title="Resume"
        allow="fullscreen"
      />
    </section>
  );
}

