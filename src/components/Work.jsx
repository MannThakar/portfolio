"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "./ui/button";

import ProjectCard from "./ProjectCard";

export const projects = [
  {
    category: "Next.JS",
    demo: "https://tattooadda-productionss-git-master-mannthakars-projects.vercel.app/",
    image: "/work/2.png",
    title: "TattooAdda",
    description:
      "A modern, stylish website for a tattoo studio built with Next.js and Tailwind CSS, featuring smooth UI and mobile-first design.",
  },
  {
    category: "React.JS",
    demo: "https://vivid-affairs.vercel.app/",
    image: "/work/1.png",
    title: "Vivid Affairs",
    description:
      "Vivid Affairs – A vibrant event planning website designed to reflect elegance, culture, and creativity with seamless UX and expressive visuals.",
  },
  {
    category: "Next.JS",
    demo: "https://tattooadda-productionss-git-master-mannthakars-projects.vercel.app/artschool",
    image: "/work/3.png",
    title: "Art School",
    description:
      "Art School – A creative website for an art institution, showcasing visual arts and design programs with an elegant and educational interface.",
  },
  {
    category: "Full Stack",
    demo: "",
    image: "/work/4.png",
    title: "E-commerce",
    description:
      "E-Commerce Store – A sleek and responsive online shopping platform built for performance and a secure checkout process.",
  },
];

const Work = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="max-w-[450px] md:max-w-full flex flex-col lg:flex-row gap-5 mx-auto md:mx-0">
          <div className="max-w-[350px] lg:max-w-full h-fit flex flex-col gap-5 text-center md:text-left bg-muted mx-auto lg:mx-0 p-5 rounded-md">
            <h2 className="section-title">Latest Projects</h2>
            <p className="description">
              Developed responsive, high-performance web apps with real-time
              features and clean UI using React & Next.js
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
            className="max-w-full"
            style={{
              padding: "15px",
              paddingBottom: "50px",
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={25}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {projects.map((item, index) => (
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
