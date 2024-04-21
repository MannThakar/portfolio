import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    pathname: "",
    icon: <Youtube />,
  },
  {
    pathname: "",
    icon: <Linkedin />,
  },
  {
    pathname: "",
    icon: <Github />,
  },
  {
    pathname: "",
    icon: <Facebook />,
  },
  {
    pathname: "",
    icon: <Instagram />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => (
        <Link className={`${iconStyles}`} href={item.pathname} key={index}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
