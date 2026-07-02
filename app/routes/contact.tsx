import type { Route } from "./+types/contact";
import { Link } from "react-router";
import { generateMetadata } from "~/utils/metadata";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Contact",
    description:
      "Get in touch with me for collaborations, opportunities, or just to say hello. I'm always open to connecting with fellow developers and tech enthusiasts.",
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="section-label">Contact</p>
        <h1 className="page-heading">Get in touch</h1>
        <p className="max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Open to collaborations, opportunities, or a good technical
          conversation. Drop me a line and I'll get back to you shortly.
        </p>
      </div>

      <div className="space-y-4">
        <Link to="mailto:contact@dangiprabesh.com.np" className="btn-primary">
          Send an email
        </Link>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          contact@dangiprabesh.com.np
        </p>
      </div>
    </section>
  );
}
