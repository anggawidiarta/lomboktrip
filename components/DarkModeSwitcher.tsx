"use client";
import { useThemeStore } from "@/lib/store";
import React, { useEffect } from "react";

const DarkModeSwitcher = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  useEffect(() => {
    console.log(theme);
    const controller = new AbortController();
    const { signal } = controller;

    const handleDarkModeChange = () => {
      if (theme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    if (!signal.aborted) {
      handleDarkModeChange();
    }

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [theme, toggleTheme]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center w-24 h-[38px] transition duration-300 bg-white border rounded-full shadow hover:shadow-sm focus:outline-none focus:shadow-outline"
    >
      <div
        className={`relative w-12 h-12 p-1 text-white transition duration-500 transform ${
          theme === false
            ? "-translate-x-2 bg-[#fec601]"
            : "bg-gray-700 translate-x-full"
        }  rounded-full`}
      >
        {theme === false ? lightIcon : darkIcon}
      </div>
    </button>
  );
};

export default DarkModeSwitcher;
