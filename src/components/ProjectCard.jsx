import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { Link as LinkIcon, Github } from "lucide-react";

const ProjectCard = ({ category, demo, github, image, title, description }) => {
  return (
    <Card className="group relative">
      <Badge className="absolute -top-4 -left-6 text-lg z-10">{category}</Badge>
      <CardHeader className="relative bg-primary/20 mb-5 pb-0 overflow-hidden dark:bg-accent">
        <div className="flex items-center gap-2.5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Link href={demo}>
            <Button
              className="w-fit h-fit p-2.5 rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              variant="secondary"
              size="icon"
              type="button"
            >
              <LinkIcon size={35} />
            </Button>
          </Link>
          <Link href={github}>
            <Button
              className="w-fit h-fit p-2.5 rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              variant="secondary"
              size="icon"
              type="button"
            >
              <Github size={35} />
            </Button>
          </Link>
        </div>
        <Image
          className="mx-auto shadow-2xl"
          src={image}
          width={300}
          height={250}
          priority
          alt={title}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="h3">{title}</CardTitle>
        <CardDescription className="description">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
