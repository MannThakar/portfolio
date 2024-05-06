"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae totam cupiditate eos, neque unde enim quod sequi corrupti laborum.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae totam cupiditate eos, neque unde enim quod sequi corrupti laborum.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae totam cupiditate eos, neque unde enim quod sequi corrupti laborum.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae totam cupiditate eos, neque unde enim quod sequi corrupti laborum.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Oliver Taylor",
    job: "Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae totam cupiditate eos, neque unde enim quod sequi corrupti laborum.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae totam cupiditate eos, neque unde enim quod sequi corrupti laborum.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="space-y-10">
          <h2 className="section-title">Reviews</h2>
          <Swiper
            className="max-w-[450px] md:max-w-full mx-auto md:mx-0"
            style={{ paddingBottom: "50px" }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
            {reviewsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-primary/5 dark:bg-accent">
                  <CardHeader className="pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-14 h-14 relative">
                        <Image
                          className="rounded-full"
                          src={item.avatar}
                          fill
                          sizes="100%"
                          priority
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <CardTitle className="h3 whitespace-nowrap">
                          {item.name}
                        </CardTitle>
                        <span className="font-semibold">{item.job}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="description">
                      {item.review}
                    </CardDescription>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
