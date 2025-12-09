import Hero from "~/components/Hero/Hero";
import type { Route } from "./+types/home";
import { generateMetadata } from "~/utils/metadata";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Prabesh Dangi",
    description: "Prabesh Dangi's personal website",
    path: "",
  });
}

export async function loader() {
  const susvariable = [
    "I am a sus guy",
    "I am very bg",
    "I love you...",
    "i hope not to see you again...",
    "i am a good guy",
    "i love to be a optimistic person",
    "bro is cool",
  ];

  const randomSusVariable =
    susvariable[Math.floor(Math.random() * susvariable.length)];

  return {
    randomSusVariable,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Hero randomSusVariable={loaderData.randomSusVariable} />;
}

// Might refer later
// export const generateMetaData = (data: MetaDescriptor[]) => {
//   return [...data];
// };
