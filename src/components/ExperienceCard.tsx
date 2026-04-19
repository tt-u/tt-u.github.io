import React, { useState } from "react";
import { useExperienceContext } from "./ExperienceProvider";

export interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  jobTitle: string;
  company: string;
  techStack: string[];
  link?: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  startDate,
  endDate,
  jobTitle,
  company,
  techStack,
  link,
  description,
}) => {
  const { isAnyCardHovered, setIsAnyCardHovered } = useExperienceContext();
  const [isCardHovered, setCardHovered] = useState(false);

  const opacity = isAnyCardHovered ? "opacity-60" : "opacity-90";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block"
    >
      <div
        onMouseEnter={() => {
          setIsAnyCardHovered(true);
          setCardHovered(true);
        }}
        onMouseLeave={() => {
          setIsAnyCardHovered(false);
          setCardHovered(false);
        }}
        className={`flex items-start p-4 mb-5 rounded-xl transition-all duration-300 ${opacity} hover:opacity-100 hover:bg-[#1e293b]/[0.5] hover:drop-shadow-lg`}
      >
        {/* Date part */}
        <div className="mr-5 min-w-[60px] md:min-w-[105px]">
          <span className="block w-full text-sm text-[#4e596b] font-medium">{`${startDate} — ${endDate}`}</span>
        </div>

        {/* Main card */}
        <div className={`flex-grow rounded-xl`}>
          <div
            className={`flex items-center font-normal mb-2 transition-colors duration-300 ${
              isCardHovered ? "text-bright-blue" : ""
            }`}
          >
            <div className="flex flex-col sm:flex-row mr-2 mb-2 sm:mb-0 text-blue-white hover:text-bright-blue">
              <span className="text-bright-blue sm:text-blue-white sm:font-mono font-medium sm:font-medium sm:tracking-wide mb-1 sm:mb-0">
                {company}
              </span>
              <span className="mx-1 text-gray-400 hidden sm:inline">
                &nbsp;•&nbsp;
              </span>
              <span className="font-mono font-medium">{jobTitle}</span>
            </div>
            {link && (
              <span
                className={`hidden sm:block transform transition-transform ${
                  isCardHovered
                    ? "translate-x-2 text-bright-blue"
                    : "text-blue-white"
                }`}
              >
                →
              </span>
            )}
          </div>
          <div className="mb-2 space-x-2 space-y-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 rounded-full bg-bright-blue bg-opacity-20 text-bright-blue hover:bg-opacity-40 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="mt-3 list-disc leading-relaxed text-[15px] tracking-wide font-normal font-mono text-blue-white/[0.8] space-y-3">
            {description}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;
