import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <section className="space-y-8">
        <span className="text-3xl" aria-hidden="true">
          👋
        </span>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-100">
            Hello, I&apos;m Prabesh.
          </h1>
          <h2 className="text-lg font-medium text-neutral-600 md:text-xl dark:text-neutral-400">
            Backend Developer | APIs, Systems &amp; Scalable Architecture
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
            I build the foundations behind seamless digital experiences — APIs,
            services, and backend systems that stay reliable as products grow.
          </p>
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Currently building at{" "}
            <Link
              to="https://aitc.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
            >
              AITC
              <span className="pointer-events-none absolute left-full ml-2 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
                  <img
                    src="/aitc.logo.png"
                    alt="AITC"
                    className="size-8 object-contain"
                  />
                </span>
              </span>
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
          <Link to="/projects" className="btn-secondary">
            View work →
          </Link>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <div className="space-y-2">
          <p className="section-label">Writings</p>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl dark:text-neutral-100">
            Recent posts
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-400">
            Thoughts on backend engineering, architecture, and building
            software that lasts.
          </p>
        </div>

        <article className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Coming soon
          </p>
          <h3 className="mt-2 font-medium text-neutral-900 dark:text-neutral-100">
            Blog posts on the way
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            I&apos;m working on my first articles. Check back soon or follow me
            on social.
          </p>
        </article>

        <Link to="/blog" className="btn-secondary inline-flex">
          View all writings →
        </Link>
      </section>
    </>
  );
};

export default Hero;
