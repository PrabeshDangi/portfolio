import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import GridBackground from "./components/GridBackground/GridBackground";

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/PrabeshLogo.png",
  },
];

const themeScript = `
(function () {
  var theme = localStorage.getItem("theme");
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();
`;

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <GridBackground />
      <Nav />
      <main className="relative z-10 mx-auto w-full max-w-2xl flex-1 px-6 py-12 md:py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

export function ErrorBoundary({ error }: Readonly<Route.ErrorBoundaryProps>) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="page-heading">{message}</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">{details}</p>
      {stack && (
        <pre className="mt-6 w-full overflow-x-auto rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
