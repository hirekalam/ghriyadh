import { useId } from "react";

const SPROUT = "M7 20h10 M10 20c5.5-2.5.8-6.4 3-10 M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z";

const SHOVEL =
  "M2 22v-5l5-5 5 5-5 5z M9.5 14.5 16 8 M17 2l5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2";

const LEAF =
  "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12";

const FLOWER =
  "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1";

export default function GardenPattern({
  className = "",
  density = 1,
}: {
  className?: string;
  density?: number;
}) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const tileId = `garden-${uid}`;
  const tile = 116 * density;
  const scale = 1.35 * density;
  const half = (12 * scale);

  const glyphs = [
    { cx: tile * 0.3, cy: tile * 0.28, d: SPROUT },
    { cx: tile * 0.78, cy: tile * 0.2, d: LEAF },
    { cx: tile * 0.22, cy: tile * 0.78, d: FLOWER },
    { cx: tile * 0.78, cy: tile * 0.72, d: SHOVEL },
  ];

  return (
    <svg className={`h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern
          id={tileId}
          width={tile}
          height={tile}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(20)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            {glyphs.map((g, i) => (
              <g key={i} transform={`translate(${g.cx - half} ${g.cy - half}) scale(${scale})`}>
                {g.d.split(" M").map((seg, j) =>
                  j === 0 ? (
                    <path key={j} d={seg} />
                  ) : (
                    <path key={j} d={`M ${seg}`} />
                  )
                )}
              </g>
            ))}
          </g>
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx={tile * 0.5} cy={tile * 0.5} r={3.4 * density} strokeDasharray="2.4 3.4" />
            <circle cx={tile * 0.14} cy={tile * 0.5} r={2.2 * density} strokeDasharray="1.6 2.6" />
            <circle cx={tile * 0.86} cy={tile * 0.5} r={2.2 * density} strokeDasharray="1.6 2.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${tileId})`} />
    </svg>
  );
}
