import { Link } from "react-router";

const Hero = ({ randomSusVariable }: { randomSusVariable: string }) => {
  return (
    <section className="">
      <div className="flex-1 space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-background">
          Hi, I'm <span className="text-primary">Prabesh Dangi</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-foreground dark:text-background font-medium">
          Backend Developer
        </h2>
        <div className="space-y-4 text-lg text-foreground dark:text-background leading-relaxed">
          <p className="">
            Architect of logic. Builder of APIs. I’m a backend developer who
            crafts the foundations of seamless digital experiences — because
            what happens behind the curtain matters.
          </p>
          <p>
            I'm currently working as a backend developer at{" "}
            <Link
              to="https://aitc.ai/"
              target="_blank"
              className="text-primary group relative inline-flex items-center"
            >
              AITC
              <div className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src="/aitc.logo.png"
                    alt="AITC"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-foreground dark:text-background">
              {randomSusVariable}.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
