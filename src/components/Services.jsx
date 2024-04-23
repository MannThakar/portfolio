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
  enter: {
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio obcaecati eum modi incidunt?Cum, perferendis libero mollitia hic optio est accusamus delectus molestiae, ipsam rerum magni sapiente expedita et?",
  },
  {
    icon: <Blocks size={75} strokeWidth={1.25} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio obcaecati eum modi incidunt?Cum, perferendis libero mollitia hic optio est accusamus delectus molestiae, ipsam rerum magni sapiente expedita et?",
  },
  {
    icon: <Gem size={75} strokeWidth={1.25} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio obcaecati eum modi incidunt?Cum, perferendis libero mollitia hic optio est accusamus delectus molestiae, ipsam rerum magni sapiente expedita et?",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="space-y-24">
          <h2 className="section-title">Services</h2>
          <motion.div
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
            variants={servicesVariants}
          >
            {servicesData.map((item, index) => (
              <motion.div variants={serviceVariants} key={index}>
                <Card className="group relative pt-14 rounded-xl">
                  <CardHeader className="absolute -top-9 left-1/2 text-primary p-0 -translate-x-1/2 transition-all duration-500 group-hover:scale-[1.25] group-hover:-rotate-6">
                    {item.icon}
                  </CardHeader>
                  <CardContent className="space-y-2.5 text-center">
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
