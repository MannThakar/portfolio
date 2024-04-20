import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={50} height={50} priority alt="Logo" />
    </Link>
  );
};

export default Logo;
