import { useId } from "react";

export default function LeafPattern({
  className = "",
  density = 1,
}: {
  className?: string;
  density?: number;
}) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const leafId = `leaf-${uid}`;
  const dotsId = `dots-${uid}`;
  const size = 72 * density;

  return (
    <svg className={`h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern
          id={leafId}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <path
            d={`M${size / 2},${size * 0.12}
               C${size * 0.72},${size * 0.26} ${size * 0.72},${size * 0.74} ${size / 2},${size * 0.88}
               C${size * 0.28},${size * 0.74} ${size * 0.28},${size * 0.26} ${size / 2},${size * 0.12}
               Z`}
            fill="currentColor"
            fillOpacity="0.5"
          />
          <circle cx={size / 2} cy={size * 0.5} r={size * 0.05} fill="currentColor" fillOpacity="0.8" />
        </pattern>
        <pattern
          id={dotsId}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <circle cx={size / 2} cy={size / 2} r={size * 0.045} fill="currentColor" fillOpacity="0.55" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${leafId})`} />
      <rect width="100%" height="100%" fill={`url(#${dotsId})`} />
    </svg>
  );
}
