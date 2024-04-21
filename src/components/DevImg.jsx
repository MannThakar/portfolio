import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Developer" />
    </div>
  );
};

export default DevImg;
