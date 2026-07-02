const COLS = 9;
const ROWS = 6;

function GridHalf({ side }: { side: "left" | "right" }) {
  const gradientClass =
    side === "left"
      ? "bg-gradient-to-tl from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent"
      : "bg-gradient-to-tr from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent";

  return (
    <div
      className={`absolute top-0 ${side === "left" ? "left-0" : "right-0"} w-1/2 bg-neutral-100 dark:bg-neutral-800`}
    >
      <div
        className={`pointer-events-none absolute inset-0 z-30 h-full w-full ${gradientClass}`}
      />
      <div className="flex flex-col divide-y divide-dashed divide-neutral-300 border-t border-l border-neutral-300 dark:divide-neutral-700 dark:border-neutral-900">
        {Array.from({ length: ROWS }).map((_, row) => (
          <div
            key={row}
            className="flex h-[30px] divide-x divide-dashed divide-neutral-300 sm:h-[45px] md:h-[60px] xl:h-[88px] dark:divide-neutral-700"
          >
            {Array.from({ length: COLS }).map((_, col) => (
              <div
                key={col}
                className="aspect-square w-full bg-white dark:bg-neutral-950"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const GridBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <GridHalf side="left" />
    <GridHalf side="right" />
  </div>
);

export default GridBackground;
