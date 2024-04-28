"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "./ui/button";

import ProjectCard from "./ProjectCard";

export const projectsData = [
  {
    category: "next.JS",
    demo: "/",
    github: "/",
    image: "/work/1.png",
    title: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et.",
  },
  {
    category: "next.JS",
    demo: "/",
    github: "/",
    image: "/work/2.png",
    title: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et.",
  },
  {
    category: "react.JS",
    demo: "/",
    github: "/",
    image: "/work/3.png",
    title: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et.",
  },
  {
    category: "react.JS",
    demo: "/",
    github: "/",
    image: "/work/4.png",
    title: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et.",
  },
  {
    category: "full stack",
    demo: "/",
    github: "/",
    image: "/work/1.png",
    title: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et.",
  },
  {
    category: "full stack",
    demo: "/",
    github: "/",
    image: "/work/2.png",
    title: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et.",
  },
];

const Work = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid gap-2.5 lg:grid-cols-3">
          <div className="max-w-[350px] lg:max-w-full h-fit flex flex-col gap-5 text-center md:text-left bg-muted mx-auto lg:mx-0 p-5 rounded-md">
            <h2 className="section-title">Latest Projects</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              ratione.
            </p>
            <Link href="/projects">
              <Button
                className="w-full font-semibold py-6 px-8 rounded-full md:text-lg"
                type="button"
              >
                All Projects
              </Button>
            </Link>
          </div>
          <Swiper
            className="max-w-full lg:col-span-2"
            style={{
              padding: "35px",
              paddingRight: "85px",
              paddingBottom: "50px",
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={35}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
