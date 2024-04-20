"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [header, setHeader] = React.useState(false);

  React.useEffect(() => {
    const scrollY = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollY);
  });

  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 bg-white z-40 transition-all ${
        header ? "py-4 shadow-lg dark:bg-accent" : "py-6 dark:bg-transparent"
      } ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-8">
            <Nav
              containerStyles="hidden xl:flex items-center gap-4"
              linkStyles="relative transition-colors hover:text-primary"
              underlineStyles="w-full h-[3px] absolute top-full left-0 bg-primary rounded-sm"
            />
            <MobileNav containerStyles="xl:hidden" />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
