"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setHidden(true);
      window.setTimeout(() => setRemoved(true), 600);
    };

    const minTimer = window.setTimeout(finish, 1000);
    if (document.readyState === "complete") {
      window.clearTimeout(minTimer);
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      window.clearTimeout(minTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#367617_0,transparent_45%),radial-gradient(circle_at_80%_0%,#084A16_0,transparent_40%),radial-gradient(circle_at_70%_100%,#6AAB1A_0,transparent_45%)]" />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="animate-leaf-float relative flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-brand-gradient text-white shadow-lift">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 fill-none stroke-current"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime text-forest">
            <span className="h-2 w-2 animate-ping rounded-full bg-forest opacity-60" />
          </span>
        </div>

        <div className="mt-6 text-center">
          <p className="font-latin text-lg font-bold tracking-[0.3em] text-lime-leaf uppercase">
            Green House
          </p>
          <p className="mt-1 text-2xl font-bold text-white">البيت الأخضر</p>
        </div>

        <div className="relative mt-8 h-1 w-44 overflow-hidden rounded-full bg-white/15">
          <div className="animate-bar-indeterminate absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-lime to-lime-leaf" />
        </div>
      </div>
    </div>
  );
}
