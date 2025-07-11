"use client";

import { useTheme } from "next-themes";

import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme("dark");

  return (
    <Button
      className="rounded-full"
      size="icon"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <MoonIcon className="w-[1.5rem] h-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <SunIcon className="w-[1.5rem] h-[1.5rem] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ThemeToggler;
