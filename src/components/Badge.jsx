"use client";

import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  countText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <span className="text-primary">{icon}</span>
      <div className="flex items-center gap-1.5 text-4xl font-bold text-primary">
        <CountUp end={endCountNum} delay={1} duration={4} />
        {countText}
      </div>
      <span className="font-semibold leading-5">{badgeText}</span>
    </div>
  );
};

export default Badge;
