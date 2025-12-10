import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { FaHome, FaRobot } from "react-icons/fa";
import "./app.css";
import Nav from "./components/Nav/Nav";
import PageLinks from "./components/PageLinks/PageLinks";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/logooo.png",
  },
];

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    <main className="container max-w-4xl mx-auto px-6">
      <Nav />
      <div className="mt-8 md:mt-16">
        <Outlet />
      </div>
      <PageLinks />
    </main>
  );
}

export default App;

export function ErrorBoundary({ error }: Readonly<Route.ErrorBoundaryProps>) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  let is404 = false;

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404;
    message = is404 ? "404" : "Error";
    details = is404
      ? "Even the LLM couldn't hallucinate this page."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container max-w-4xl mx-auto px-6">
      <Nav />
      <div className="mt-8 md:mt-16">
        {is404 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <div className="flex items-center gap-3 text-6xl md:text-7xl font-bold text-foreground dark:text-background">
              <span>404</span>
              <FaRobot className="text-5xl md:text-6xl animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 dark:text-background/80 max-w-2xl">
              Even the LLM couldn't hallucinate this page.
            </p>
            <Link
              to="/"
              className="group relative mt-8 inline-block"
            >
              <div className="relative px-8 py-4 overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-primary/20 dark:hover:shadow-primary/30">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <FaHome className="text-2xl md:text-3xl text-primary transform group-hover:scale-125 group-hover:rotate-[-15deg] transition-all duration-300" />
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary group-hover:to-primary transition-all duration-300">
                    Back to the homepage
                  </span>
                  <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
              </div>
            </Link>
          </div>
        ) : (
          <>
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
              <pre className="w-full p-4 overflow-x-auto">
                <code>{stack}</code>
              </pre>
            )}
          </>
        )}
      </div>
      <PageLinks />
    </main>
  );
}
