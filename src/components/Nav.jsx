"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

const links = [
  {
    pathname: "/",
    label: "home",
  },
  {
    pathname: "/projects",
    label: "projects",
  },
  {
    pathname: "/contact",
    label: "contact",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, layoutId }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((item, index) => (
        <Link
          className={`capitalize ${linkStyles}`}
          href={item.pathname}
          key={index}
        >
          {pathname === item.pathname && (
            <motion.span
              className={`${underlineStyles}`}
              layoutId={layoutId}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
            />
          )}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
