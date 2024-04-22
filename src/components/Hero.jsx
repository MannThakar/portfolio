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

const Hero = () => {
  return (
    <section className="relative bg-hero bg-no-repeat bg-cover bg-bottom pt-10 dark:bg-none">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">
          <div className="max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-lg font-semibold text-primary tracking-widest">
              Web Developer
            </span>
            <h1 className="h1 my-4">Hello, my name is Ryan Davis</h1>
            <p className="description">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 my-8">
              <Link href="/contact">
                <Button
                  className="w-[185px] flex items-center gap-2 font-semibold py-6 rounded-full"
                  type="button"
                >
                  Contact Me <Send size={20} />
                </Button>
              </Link>
              <a download href="#">
                <Button
                  className="w-[185px] flex items-center gap-2 font-semibold py-6 rounded-full"
                  type="button"
                  variant="outline"
                >
                  Download CV <Download size={20} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles="flex items-center gap-8"
              iconStyles="scale-110 transition-colors hover:text-primary"
            />
          </div>
          <div className="hidden lg:inline-block relative">
            <Badge
              containerStyles="absolute -left-14 xl:-left-28"
              icon={<BriefcaseBusiness size={30} />}
              countNum={3}
              badgeText="Years of Experience"
            />
            <Badge
              containerStyles="absolute bottom-14 -left-10"
              icon={<ListChecks size={30} />}
              countNum={125}
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute -right-5 2xl:-right-10 bottom-24"
              icon={<Users size={30} />}
              countNum={4}
              countText="K"
              badgeText="Happy Clients"
            />
            <div className="w-[500px] h-[500px] absolute -top-4 right-12 bg-hero_shape_2_light bg-no-repeat dark:bg-hero_shape_2_dark" />
            <DevImg
              containerStyles="w-[510px] h-[460px] bg-hero_shape_1 bg-no-repeat bg-bottom"
              imgSrc="/hero/developer.png"
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
