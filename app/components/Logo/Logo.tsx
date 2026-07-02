type LogoProps = {
  variant?: "nav" | "footer";
  className?: string;
};

const sizes = {
  nav: "h-16 w-auto sm:h-[4.5rem] md:h-20",
  footer: "h-14 w-auto sm:h-16",
};

const Logo = ({ variant = "nav", className = "" }: LogoProps) => (
  <img
    src="/PrabeshLogo.png"
    alt="Prabesh Dangi"
    width={500}
    height={500}
    className={`logo-theme ${sizes[variant]} max-w-none object-contain ${className}`}
  />
);

export default Logo;
