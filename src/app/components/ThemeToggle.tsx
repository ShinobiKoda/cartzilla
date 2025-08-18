"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ClipLoader } from "react-spinners";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return <ClipLoader color="white" size={20} />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full transition-all duration-300 ease-in-out"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <MdOutlineWbSunny
        className={`text-2xl transition-all duration-300 ease-in-out ${
          resolvedTheme === "light"
            ? "opacity-100 rotate-0 text-gray-200 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
            : "opacity-0 rotate-90 text-transparent"
        }`}
      />

      <FaRegMoon
        className={`absolute top-2 left-2 text-2xl transition-all duration-300 ease-in-out ${
          resolvedTheme === "dark"
            ? "opacity-100 rotate-0 text-gray-200 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"
            : "opacity-0 -rotate-90 text-transparent"
        }`}
      />
    </button>
  );
}
