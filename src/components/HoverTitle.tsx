import React from "react";
import useSectionHover from "../hooks/useSectionHover";

const HoverTitle: React.FC<{
  sectionId: string;
  title: string;
  index?: string;
}> = ({ sectionId, title, index }) => {
  const isHovered = useSectionHover(sectionId);

  return (
    <div
      className={`flex items-center gap-3 mb-10 transition-transform duration-500 ease-out ${
        isHovered ? "translate-x-1" : ""
      }`}
    >
      {index && (
        <span className="font-mono text-[11px] tracking-[0.25em] text-bright-blue">
          {index}
        </span>
      )}
      <span
        className={`h-px bg-bright-blue/50 transition-all duration-500 ease-out ${
          isHovered ? "w-14" : "w-6"
        }`}
      />
      <span className="font-mono text-[11px] tracking-[0.4em] uppercase text-blue-white/80">
        {title}
      </span>
    </div>
  );
};

export default HoverTitle;
