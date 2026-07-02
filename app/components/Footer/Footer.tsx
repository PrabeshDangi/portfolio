import { Link } from "react-router";
import { links } from "content/links";
import Logo from "../Logo/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Link to="/" className="inline-flex">
            <Logo variant="footer" />
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {year} Prabesh Dangi. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.platform}
              to={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
