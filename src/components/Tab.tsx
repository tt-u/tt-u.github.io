import * as React from "react";
import { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

type TabProps = {
  to: string;
  text: string;
  isActive: boolean;
  setActiveTab: (tabName: string) => void;
};

const Tab: React.FC<TabProps> = ({ to, text, isActive, setActiveTab }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div
          className={`mr-4 h-px ${
            isHovered || isActive ? "w-16 bg-bright-gray" : "w-6 bg-dark-gray"
          } transition-width duration-300 ease-in-out`}
        ></div>
        <button
          className={`btn-link ${
            isHovered || isActive ? "text-bright-gray" : "text-dark-gray"
          }`}
          onClick={() => {
            scrollTo(to);
            setActiveTab(to.slice(1));
          }}
        >
          {text}
        </button>
      </div>

      {/* {text === "experience" && (
        <div
          className={`flex items-center transition-transform transition-opacity transition-max-height duration-300 ease-out overflow-hidden ${
            isActive
              ? "opacity-100 translate-x-0 max-h-20 mt-2"
              : "opacity-0 -translate-x-4 max-h-0"
          }`}
        >
          <div className={`mr-4 w-16 h-0`}></div>
          <button
            className="text-bright-blue no-underline transform transition-transform hover:translate-x-1 hover:text-bright-blue focus:outline-none"
            onClick={() =>
              window.open("/Eryn_Seo_Revised_Resume.pdf", "_blank")
            }
          >
            Résumé →
          </button>
        </div>
      )} */}
    </li>
  );
};

export default Tab;
