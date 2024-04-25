"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Separator } from "./ui/separator";

import {
  User,
  PhoneCall,
  Mail,
  Calendar,
  GraduationCap,
  Home,
  BriefcaseBusiness,
} from "lucide-react";

import DevImg from "./DevImg";

const tabContentVariants = {
  hidden: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } },
};

const personalInfoData = [
  {
    icon: <User />,
    text: "Ryan Davis",
  },
  {
    icon: <PhoneCall />,
    text: "+000 000 0000",
  },
  {
    icon: <Mail />,
    text: "youremail@email.com",
  },
  {
    icon: <Calendar />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap />,
    text: "Master on Computer Science",
  },
  {
    icon: <Home />,
    text: "321 Blue Avenue, NY, USA",
  },
];

const qualificationData = [
  {
    icon: <GraduationCap />,
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Art",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2021 - 2023",
      },
    ],
  },
  {
    icon: <BriefcaseBusiness />,
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developers",
        years: "2022 - Present",
      },
    ],
  },
];

const skillsInfo = [
  {
    title: "skills",
    data: [
      "HTML & CSS",
      "Front-End Development",
      "JavaScript, PHP",
      "Back-End Development",
    ],
  },
  {
    title: "tools",
    data: [
      "/about/vscode.svg",
      "/about/figma.svg",
      "/about/notion.svg",
      "/about/wordpress.svg",
    ],
  },
];

const About = () => {
  const getData = (data, title) => {
    return data.find((item) => item.title === title);
  };

  return (
    <section className="mb-32">
      <div className="container mx-auto">
        <div>
          <h2 className="section-title mb-10">About</h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <DevImg
              containerStyles="hidden lg:inline-block max-w-[500px] h-[500px] bg-about_shape_light bg-no-repeat bg-contain bg-bottom dark:bg-about_shape_dark"
              imgSrc="/about/developer.png"
            />
            <Tabs defaultValue="personal-info">
              <TabsList className="h-fit grid justify-stretch gap-1.5 bg-transparent mb-10 sm:grid-cols-3 sm:bg-muted sm:rounded-full">
                <TabsTrigger
                  className="font-bold py-3 rounded-full data-[state=active]:text-primary-foreground data-[state=active]:bg-primary"
                  value="personal-info"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="font-bold py-3 rounded-full data-[state=active]:text-primary-foreground data-[state=active]:bg-primary"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger
                  className="font-bold py-3 rounded-full data-[state=active]:text-primary-foreground data-[state=active]:bg-primary"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              <div>
                <TabsContent value="personal-info">
                  <motion.div
                    className="space-y-5"
                    variants={tabContentVariants}
                  >
                    <div className="space-y-5 text-center lg:text-left">
                      <h3 className="h3">
                        Unmatched Service Quality for Over 10 Years
                      </h3>
                      <p className="description max-w-[500px] mx-auto lg:mx-0">
                        I specialize in crafting intuitive websites with
                        cutting-edge technology, delivering dynamic and engaging
                        user experience.
                      </p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {personalInfoData.map((item, index) => (
                        <div
                          className="flex items-center gap-2.5 font-semibold"
                          key={index}
                        >
                          <span className="text-primary scale-110">
                            {item.icon}
                          </span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="h4 text-primary">Language Skills:</h4>
                      <Separator className="my-4" />
                      <div className="font-medium">
                        English, French, Spanish, Italian
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="qualification">
                  <motion.div
                    className="space-y-5"
                    variants={tabContentVariants}
                  >
                    <h3 className="h3 text-center lg:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid gap-10 sm:grid-cols-2">
                      <div className="space-y-5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-primary scale-110">
                            {getData(qualificationData, "education").icon}
                          </span>
                          <h4 className="h4 capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="space-y-5">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;

                              return (
                                <div className="group relative p-5" key={index}>
                                  <div className="w-1 h-full absolute inset-0 bg-primary" />
                                  <span className="w-5 h-5 inline-block absolute top-0 -left-2 bg-primary rounded-full transition-all duration-500 ease-in-out group-hover:top-[calc(100%-20px)]" />
                                  <div className="flex flex-col text-sm font-semibold">
                                    <h5 className="h5">{university}</h5>
                                    <span>{qualification}</span>
                                    <span>{years}</span>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="space-y-5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-primary scale-110">
                            {getData(qualificationData, "experience").icon}
                          </span>
                          <h4 className="h4 capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="space-y-5">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;

                              return (
                                <div className="group relative p-5" key={index}>
                                  <div className="w-1 h-full absolute inset-0 bg-primary" />
                                  <span className="w-5 h-5 inline-block absolute top-0 -left-2 bg-primary rounded-full transition-all duration-500 ease-in-out group-hover:top-[calc(100%-20px)]" />
                                  <div className="flex flex-col text-sm font-semibold">
                                    <h5 className="h5">{company}</h5>
                                    <span>{role}</span>
                                    <span>{years}</span>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="skills">
                  <motion.div
                    className="space-y-5"
                    variants={tabContentVariants}
                  >
                    <h3 className="h3 text-center lg:text-left">
                      Tools I Use Everyday
                    </h3>
                    <div>
                      <h4 className="h4 capitalize">
                        {getData(skillsInfo, "skills").title}
                      </h4>
                      <Separator className="my-4" />
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {getData(skillsInfo, "skills").data.map(
                          (item, index) => (
                            <span className="font-semibold" key={index}>
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="h4 capitalize">
                        {getData(skillsInfo, "tools").title}
                      </h4>
                      <Separator className="my-4" />
                      <div className="flex justify-center lg:justify-start items-center gap-8">
                        {getData(skillsInfo, "tools").data.map(
                          (item, index) => (
                            <Image
                              src={item}
                              width={45}
                              height={45}
                              priority
                              alt="Tool"
                              key={index}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
