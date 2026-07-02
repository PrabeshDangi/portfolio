import { NavLink } from "react-router";
import { pageLinks } from "content/pageLinks.";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";

const Nav = () => {
  return (
    <header className="relative z-30 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex shrink-0 items-center">
          <Logo variant="nav" />
        </NavLink>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-5">
            {pageLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                prefetch="viewport"
                end={link.path === "/"}
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
