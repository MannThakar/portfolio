import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src={imgSrc} fill sizes="100%" priority alt="Developer" />
    </div>
  );
};

export default DevImg;
