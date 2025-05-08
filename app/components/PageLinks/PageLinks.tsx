import { pageLinks } from "content/pageLinks.";
import { NavLink } from "react-router";

const PageLinks = () => {
  return (
    <div className="mt-12  ">
      <div className="text-lg ">
        {pageLinks.map((link, index) => (
          <>
            <NavLink
              key={index}
              to={link.path}
              prefetch="viewport"
              className={({ isActive }) =>
                isActive
                  ? "text-foreground dark:text-background"
                  : "text-primary hover:underline"
              }
            >
              {link.name}
            </NavLink>
            {index < pageLinks.length - 1 && (
              <span className="mx-3 text-muted dark:text-muted-foreground">
                |
              </span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default PageLinks;
