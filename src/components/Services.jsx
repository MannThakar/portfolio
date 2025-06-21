"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "./ui/card";

import { SquareGanttChart, Blocks, Gem } from "lucide-react";

const servicesVariants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const servicesData = [
  {
    icon: <SquareGanttChart size={75} strokeWidth={1.25} />,
    title: "Web Design",
    description:
      "I craft clean, user-focused web designs that are visually engaging and conversion-ready. With a strong eye for detail and experience in UI systems like Shadcn and Tailwind, I turn ideas into intuitive, responsive interfaces that leave a lasting impression",
  },
  {
    icon: <Blocks size={75} strokeWidth={1.25} />,
    title: "Web Development",
    description:
      "I build fast, scalable websites using React and Next.js—focused on performance, SEO, and responsive design. Whether it's a dynamic dashboard or a high-converting landing page, I deliver clean, maintainable code that powers real business results.",
  },
  {
    icon: <Gem size={75} strokeWidth={1.25} />,
    title: "App Development",
    description:
      "I develop responsive, high-performance web apps using React Native UI library. From dynamic forms to real-time dashboards, I deliver scalable, user-friendly solutions tailored to your business needs.",
  },
];

const Services = () => {
  return (
    <section className="mb-20 md:mb-32">
      <div className="container mx-auto">
        <div className="space-y-20">
          <h2 className="section-title">Services</h2>
          <motion.div
            className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3"
            variants={servicesVariants}
          >
            {servicesData.map((item, index) => (
              <motion.div variants={serviceVariants} key={index}>
                <Card className="group relative pt-14 rounded-xl border-none">
                  <CardHeader className="absolute -top-9 left-1/2 text-primary p-0 -translate-x-1/2 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-125">
                    {item.icon}
                  </CardHeader>
                  <CardContent className="space-y-1.5 text-center">
                    <CardTitle className="h3">{item.title}</CardTitle>
                    <CardDescription className="description">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
