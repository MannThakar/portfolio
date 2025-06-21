"use client";

import React from "react";

import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { projects } from "@/components/Work";

import ProjectCard from "@/components/ProjectCard";

const projectsVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

const projectCategories = [
  "all projects",
  ...new Set(projects.map((item) => item.category)),
];

export default function Projects() {
  const [category, setCategory] = React.useState("all projects");

  let filteredProjects = [];

  filteredProjects = projects.filter((item) => {
    return category === "all projects" ? projects : item.category === category;
  });

  return (
    <section className="mt-12 mb-24">
      <div className="container mx-auto">
        <div className="space-y-5">
          <h1 className="section-title !justify-center">Projects</h1>
          <Tabs defaultValue={category}>
            <TabsList className=" h-fit flex justify-start items-center gap-2.5 mx-auto mb-14 rounded-full overflow-y-hidden overflow-x-auto sm:max-w-fit">
              {projectCategories.map((item, index) => (
                <TabsTrigger
                  className="font-semibold capitalize py-3 rounded-full data-[state=active]:text-primary-foreground data-[state=active]:bg-primary"
                  value={item}
                  onClick={() => setCategory(item)}
                  key={index}
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={category}>
              <motion.div
                className="max-w-[450px] md:max-w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto md:mx-0"
                variants={projectsVariants}
              >
                {filteredProjects.map((item, index) => (
                  <motion.div variants={projectVariants} key={index}>
                    <ProjectCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
