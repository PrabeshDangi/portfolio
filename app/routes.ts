import {
  type RouteConfig,
  route,
  index,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  ...prefix("projects", [
    index("./routes/projects.tsx"),
    route(":slug", "./routes/singleProject.tsx"),
  ]),
  route("blog", "./routes/blog.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("links", "./routes/links.tsx"),
  route("robots.txt", "./routes/[robots.txt].tsx"),
  route("sitemap.xml", "./routes/[sitemap.xml].tsx"),
] satisfies RouteConfig;
