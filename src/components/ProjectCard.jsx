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

const ProjectCard = ({ category, demo, image, title, description }) => {
  return (
    <Card className="group relative">
      <Badge className="absolute -top-2.5 -left-2.5 capitalize z-10">
        {category}
      </Badge>
      <CardHeader className="relative bg-primary/20 mb-5 pb-0 overflow-hidden dark:bg-accent">
        <div className="flex items-center gap-2.5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
          {demo && (
            <Link href={demo} target="_blank" rel="noopener noreferrer">
              <Button
                className="w-fit h-fit p-2.5 rounded-full opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                variant="secondary"
                size="icon"
                type="button"
              >
                <LinkIcon size={35} />
              </Button>
            </Link>
          )}
        </div>
        <div className="w-[250px] h-[250px] object-contain relative mx-auto">
          <Image
            className="shadow-2xl"
            src={image}
            fill
            sizes="100%"
            priority
            alt={title}
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="h3">{title}</CardTitle>
        <CardDescription className="description">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
