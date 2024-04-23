"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};

export default function Template({ children }) {
  const scroll = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.25, duration: 0.5 }}
      >
        {children}
      </motion.main>
      <span
        className="w-1 fixed top-0 right-0 bottom-0 bg-primary z-50 transition-all duration-700"
        style={{ transform: `translateY(${scroll - 100}%)` }}
      />
      <div className="h-[1000px]"></div>
    </>
  );
}
