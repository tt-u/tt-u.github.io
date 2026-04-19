import { useState, useEffect } from "react";

const useSectionHover = (sectionId: string) => {
  const [isHovered, setIsHovered] = useState(false);

  const checkViewport = () => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const boundingBox = section.getBoundingClientRect();

    const isWithinViewportTop =
      boundingBox.top >= 0 && boundingBox.top <= window.innerHeight / 2;
    const isWithinViewportBottom =
      boundingBox.bottom >= window.innerHeight / 2 &&
      boundingBox.bottom <= window.innerHeight;

    setIsHovered(isWithinViewportTop || isWithinViewportBottom);
  };

  useEffect(() => {
    document.addEventListener("scroll", checkViewport);
    checkViewport();

    return () => {
      document.removeEventListener("scroll", checkViewport);
    };
  }, [sectionId]);

  return isHovered;
};

export default useSectionHover;
