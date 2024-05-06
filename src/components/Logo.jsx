import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="w-12 h-12 inline-block relative" href="/">
      <Image src="/logo.svg" fill sizes="100%" priority alt="Logo" />
    </Link>
  );
};

export default Logo;
