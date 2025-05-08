import type { Route } from "./+types/contact";
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
  return <section>Contact</section>;
}
