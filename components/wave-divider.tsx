export default function WaveDivider({
  fill = "#ffffff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative -mb-px overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block h-10 w-full sm:h-14 lg:h-16 ${
          flip ? "-scale-x-100" : ""
        }`}
      >
        <path
          fill={fill}
          d="M0,40 C160,76 320,8 480,28 C640,48 800,84 960,64 C1120,44 1280,12 1440,36 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}
