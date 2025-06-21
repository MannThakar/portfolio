"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Separator } from "./ui/separator";

import {
  User,
  PhoneCall,
  Mail,
  GraduationCap,
  Home,
  BriefcaseBusiness,
  Laptop,
} from "lucide-react";

import DevImg from "./DevImg";

const tabContentVariants = {
  hidden: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } },
};

const tabs = ["personal info", "qualifications", "skills"];

const personalInfoData = [
  {
    icon: <User />,
    text: "Mann Thakar",
  },
  {
    icon: <PhoneCall />,
    text: "+91 82008 73635",
  },
  {
    icon: <Mail />,
    text: "mannthakar505@gmail.com",
  },
  {
    icon: <Laptop />,
    text: "Full Stack Developer",
  },
  {
    icon: <GraduationCap />,
    text: "Bechelor of Computer Science",
  },
  {
    icon: <Home />,
    text: "Ahmedabad, India",
  },
];

const qualificationData = [
  {
    icon: <GraduationCap />,
    title: "education",
    data: [
      {
        university: "Darshan University",
        qualification: "Bachelor of Computer Science",
        years: "2021 - 2024",
      },
      {
        university: "Government Polytechnic",
        qualification: "Diploma In Computer Science",
        years: "2018 - 2021",
      },
    ],
  },
  {
    icon: <BriefcaseBusiness />,
    title: "experience",
    data: [
      {
        company: "MindInventory",
        role: "Full Stack Developer",
        years: "2024 - 2025",
      },
      {
        company: "7Span",
        role: "Front-End Developer",
        years: "2023 - 2024",
      },
    ],
  },
];

const skillsInfo = [
  {
    title: "skills",
    data: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Git & GitHub",
      "RESTful APIs",
      "Agile Methodologies",
      "UI/UX Design",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "HTML & CSS (Responsive Design)",
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
        <h2 className="section-title mb-10">About</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <DevImg
            containerStyles="hidden lg:inline-block max-w-[500px] h-[500px] bg-about_shape_light bg-no-repeat bg-contain bg-bottom dark:bg-about_shape_dark"
            imgSrc="/about/developer.png"
          />
          <Tabs defaultValue="personal info">
            <TabsList className="max-w-[350px] md:max-w-full h-fit grid justify-stretch gap-1.5 bg-transparent md:bg-muted mx-auto md:mx-0 mb-10 md:grid-cols-3 md:rounded-full">
              {tabs.map((item, index) => (
                <TabsTrigger
                  className="font-semibold capitalize py-3 rounded-full data-[state=active]:text-primary-foreground data-[state=active]:bg-primary"
                  value={item}
                  key={index}
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="personal info">
              <motion.div variants={tabContentVariants}>
                <div className="space-y-5 text-center lg:text-left">
                  <h3 className="h3">
                    Freelance React & Next.js Specialist | Crafting Clean,
                    Conversion-Ready Interfaces
                  </h3>
                  <p className="description max-w-[500px] mx-auto lg:mx-0">
                    I&apos;m a freelance React & Next.js developer focused on
                    building fast, clean, and conversion-friendly web
                    interfaces. With experience in SaaS, dashboards, and
                    AI-driven platforms.
                  </p>
                </div>
                <div className="grid gap-5 my-10 sm:grid-cols-2">
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
              </motion.div>
            </TabsContent>
            <TabsContent value="qualifications">
              <motion.div className="space-y-10" variants={tabContentVariants}>
                <h3 className="h3 text-center lg:text-left">
                  My Awesome Journey
                </h3>
                <div className="grid gap-10 sm:grid-cols-2">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-primary scale-125">
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
                    <div className="flex items-center gap-2.5">
                      <span className="text-primary scale-125">
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
              <motion.div className="space-y-5" variants={tabContentVariants}>
                <h3 className="h3 text-center lg:text-left">
                  Tools I Use Everyday
                </h3>
                <div>
                  <h4 className="h4 capitalize">
                    {getData(skillsInfo, "skills").title}
                  </h4>
                  <Separator className="my-2.5" />
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {getData(skillsInfo, "skills").data.map((item, index) => (
                      <span className="font-semibold" key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="h4 capitalize">
                    {getData(skillsInfo, "tools").title}
                  </h4>
                  <Separator className="my-2.5" />
                  <div className="flex justify-center lg:justify-start items-center gap-8">
                    {getData(skillsInfo, "tools").data.map((item, index) => (
                      <Image
                        src={item}
                        width={45}
                        height={45}
                        priority
                        alt="Tool"
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
