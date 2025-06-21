import Link from "next/link";

import { Youtube, Linkedin, Github, Facebook, Instagram } from "lucide-react";

const socials = [
  {
    pathname: "https://www.linkedin.com/in/mann-thakar/",
    icon: <Linkedin />,
  },
  {
    pathname: "https://github.com/MannThakar",
    icon: <Github />,
  },
  {
    pathname: "/",
    icon: <Facebook />,
  },
  {
    pathname: "/https://www.instagram.com/mannthakar_24/",
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
