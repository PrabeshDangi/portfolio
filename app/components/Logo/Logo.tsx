type LogoProps = {
  variant?: "nav" | "footer";
  className?: string;
};

// ponytail: width-locked sizing — aspect ratios differ (light 3:2, dark ~946:510)
const sizes = {
  nav: {
    light:
      "w-[5.75rem] aspect-[1536/1024] sm:w-[6.25rem] md:w-[6.75rem]",
    dark: "w-[5.75rem] aspect-[946/510] sm:w-[6.25rem] md:w-[6.75rem]",
  },
  footer: {
    light: "w-[4.75rem] aspect-[1536/1024] sm:w-[5.25rem]",
    dark: "w-[4.75rem] aspect-[946/510] sm:w-[5.25rem]",
  },
};

const Logo = ({ variant = "nav", className = "" }: LogoProps) => (
  <>
    <img
      src="/logo-light.jpg"
      alt="Prabesh Dangi"
      width={1536}
      height={1024}
      className={`${sizes[variant].light} h-auto object-contain dark:hidden ${className}`}
    />
    <img
      src="/logo-dark.png"
      alt="Prabesh Dangi"
      width={946}
      height={510}
      className={`${sizes[variant].dark} hidden h-auto object-contain dark:block ${className}`}
    />
  </>
);

export default Logo;
