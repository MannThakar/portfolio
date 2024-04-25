"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
            style={{ paddingBottom: "50px" }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={35}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {reviewsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-primary/5 dark:bg-accent">
                  <CardHeader className="pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <Image
                        className="rounded-full"
                        src={item.avatar}
                        width={59}
                        height={50}
                        alt={item.name}
                      />
                      <div>
                        <CardTitle className="h3">{item.name}</CardTitle>
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
