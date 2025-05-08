import { Link } from "react-router";

const Nav = () => {
  // const { isDarkMode, toggle } = useDarkMode();

  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logooo.png"
            alt="Logo"
            className="w-auto h-12 dark:invert"
          />
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block group cursor-help">
            <span className="text-text-light dark:text-text-dark hover:opacity-80 transition-colors">
              Hover Me
            </span>
            <div className="absolute size-32 object-cover overflow-hidden rounded-full shadow-lg hidden group-hover:block z-40 top-12">
              <img
                src="/looking-up.jpg"
                alt="Prabesh Dangi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="inline-flex cursor-pointer h-9 w-9 items-center justify-center rounded-md border border-accent hover:bg-accent/10 transition-colors dark:border-border"
          >
            {isDarkMode ? (
              <BiSun className="h-5 w-5 dark:text-text-dark" />
            ) : (
              <BiMoon className="h-5 w-5 dark:text-text-dark" />
            )}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
