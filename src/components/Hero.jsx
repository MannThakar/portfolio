"use client";
import Link from "next/link";

import { Button } from "./ui/button";

import {
  Send,
  Download,
  BriefcaseBusiness,
  ListChecks,
  Users,
  ChevronDown,
} from "lucide-react";

import Socials from "./Socials";
import Badge from "./Badge";
import DevImg from "./DevImg";

import { motion } from "framer-motion";

const bgVariants = {
  animate: {
    y: [0, -2, 0],
    rotate: [0, 360],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

const Hero = () => {
  return (
    <section className="relative bg-hero bg-no-repeat bg-cover bg-bottom mb-16 md:mb-32 md:py-16 dark:bg-none">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 flex flex-col-reverse gap-20">
          <div className="max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-lg font-semibold text-primary tracking-widest">
              Web Developer
            </span>
            <h1 className="h1 my-5">Hello, my name is Mann Thakar</h1>
            <p className="description">
              From pixel-perfect frontends to robust backends, I craft fast,
              functional, and beautiful web experiences using Next.js, React,
              Node.js, and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 my-10">
              <Link href="/contact">
                <Button
                  className="w-[185px] flex items-center gap-1.5 font-semibold py-6 rounded-full"
                  type="button"
                >
                  Contact Me <Send size={20} />
                </Button>
              </Link>
              {/* <a download href="#">
                <Button
                  className="w-[185px] flex items-center gap-1.5 font-semibold py-6 rounded-full"
                  variant="outline"
                  type="button"
                >
                  Download CV <Download size={20} />
                </Button>
              </a> */}
            </div>
            <Socials
              containerStyles="flex items-center gap-5"
              iconStyles="scale-110 transition-colors hover:text-primary"
            />
          </div>
          <div className="lg:inline-block relative overflow-hidden lg:overflow-visible">
            <div className="hidden lg:inline-block">
              <Badge
                containerStyles="absolute -left-20 xl:left-0"
                icon={<BriefcaseBusiness size={30} />}
                countUpNum={2}
                countUpText="+"
                badgeText="Years of Experience"
              />
              <Badge
                containerStyles="absolute bottom-10 -left-10 xl:left-10"
                icon={<ListChecks size={30} />}
                countUpNum={100}
                countUpText="%"
                badgeText="Client Retention"
              />
              <Badge
                containerStyles="absolute bottom-20 right-5"
                icon={<Users size={30} />}
                countUpNum={5}
                countUpText="+"
                badgeText="Happy Clients"
              />
            </div>
            <motion.div
              className="w-full h-[500px] absolute bg-hero_shape_2_light bg-no-repeat bg-contain bg-center dark:bg-hero_shape_2_dark z-0"
              variants={bgVariants}
              animate="animate"
            />
            <DevImg
              containerStyles="lg:w-[450px] lg:h-[450px] bg-hero_shape_1 bg-no-repeat bg-contain bg-bottom mx-auto h-[400px] w-full"
              imgSrc={"/hero/developer.png"}
            />
          </div>
        </div>
        <div className="hidden lg:inline-block absolute top-full left-1/2 -translate-x-1/2">
          <ChevronDown
            className="text-primary animate-bounce"
            size={35}
            strokeWidth={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
