import React from "react";

const useScrollProgress = () => {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScroll(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scroll;
};

export default useScrollProgress;
