/* eslint-disable @typescript-eslint/no-unused-vars */
// zustand store example
import { create } from "zustand";

export type ThemeState = {
  theme: boolean | string;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: false,
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.theme;
      if (localStorage.getItem("theme") === "true") {
        localStorage.setItem("theme", "false");
      } else {
        localStorage.setItem("theme", "true");
      }
      localStorage.setItem("theme", newTheme.toString());
      return { theme: newTheme };
    }),
}));
