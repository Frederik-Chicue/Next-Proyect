import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
    theme: Theme;
    toogleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
        theme:
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        toogleTheme: () => {
            const newTheme: Theme = get().theme === "light" ? "dark" : "light";
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            set({ theme: newTheme });
        },
        }),
        {
        name: "theme",
        onRehydrateStorage: () => (state) => {
            if (state?.theme === "dark") {
            document.documentElement.classList.add("dark");
            } else {
            document.documentElement.classList.remove("dark");
            }
        },
        }
    )
);
