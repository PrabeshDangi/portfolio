import { NavLink } from "react-router";
import { pageLinks } from "content/pageLinks.";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = () => {
  return (
    <header className="relative z-30 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex shrink-0 items-center" viewTransition={false}>
          <span className="inline-flex shrink-0 items-center">
            <img
              src="/logo-light.jpg"
              alt="Prabesh Dangi"
              className="h-auto w-[5.75rem] max-w-none object-contain [aspect-ratio:612/408] dark:hidden sm:w-[6.25rem] md:w-[6.75rem]"
            />
            <img
              src="/logo-dark.png"
              alt="Prabesh Dangi"
              className="hidden h-auto w-[5.75rem] max-w-none object-contain [aspect-ratio:946/510] dark:block sm:w-[6.25rem] md:w-[6.75rem]"
            />
          </span>
        </NavLink>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-5">
            {pageLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                prefetch="intent"
                end={link.path === "/"}
                viewTransition={false}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
