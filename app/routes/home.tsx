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

export default function Home() {
  return <Hero />;
}

// Might refer later
// export const generateMetaData = (data: MetaDescriptor[]) => {
//   return [...data];
// };
