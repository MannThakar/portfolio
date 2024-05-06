"use client";

import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  countUpNum,
  countUpText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <span className="text-primary">{icon}</span>
      <div className="flex items-center gap-1 text-4xl font-bold text-primary">
        <CountUp end={countUpNum} delay={1} duration={4} />
        {countUpText}
      </div>
      <span className="font-semibold leading-5">{badgeText}</span>
    </div>
  );
};

export default Badge;
