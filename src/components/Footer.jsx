"use client";

import { usePathname } from "next/navigation";

import Socials from "./Socials";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={`py-10 ${pathname !== "/" && "bg-accent"}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5">
          <Socials
            containerStyles="flex items-center gap-5"
            iconStyles="scale-110 transition-colors hover:text-primary"
          />
          <p className="text-sm font-semibold">
            Copyright &copy;{" "}
            <span className="font-bold text-primary">Mann Thakar</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
