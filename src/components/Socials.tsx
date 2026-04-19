import * as React from "react";
import { useState } from "react";
import github from "../assets/icons/github-mark-white.svg";
import useGithubStreak from "../hooks/useGithubStreak";
import flameIcon from "../assets/icons/flame.svg";

interface SocialIconProps {
  iconSrc: string;
  altText: string;
  profileLink: string;
  onHover?: () => void;
  onLeave?: () => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  iconSrc,
  altText,
  profileLink,
  onHover,
  onLeave,
}) => {
  const openProfile = () => {
    if (profileLink.startsWith("mailto:")) {
      window.location.href = profileLink;
    } else {
      window.open(profileLink, "_blank");
    }
  };

  return (
    <img
      src={iconSrc}
      alt={altText}
      className="w-7 h-7 lg:w-5 lg:h-5 icon cursor-pointer fill-current text-white hover:text-bright-blue transition-transform transform-gpu hover:scale-125"
      onClick={openProfile}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
  );
};

interface GithubStreak {
  streak: number;
  loading: boolean;
}

const Socials: React.FC = ({ children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { streak, loading }: GithubStreak = useGithubStreak("dreamerryao");

  return (
    <div
      className="flex items-center space-x-5 lg:flex-col lg:ml-8 lg:space-x-0 lg:space-y-3 lg:absolute lg:bottom-0 lg:left-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative text-blue-white">
        <SocialIcon
          iconSrc={github}
          altText="GitHub"
          profileLink="https://github.com/dreamerryao"
        />
        {!loading && (
          <div className="pointer-events-none absolute left-full flex items-center ml-2 top-1/2 transform -translate-y-1/2 invisible lg:visible">
            <img src={flameIcon} alt="Streak Flame" className="w-4 h-4 mr-1" />{" "}
            <span>{streak}</span>
          </div>
        )}
      </div>

      <div
        className={`${
          isHovered ? "h-24" : "h-10"
        } mb-4 w-px bg-bright-gray transition-height duration-300 ease-in-out hidden lg:block`}
      ></div>
    </div>
  );
};

export default Socials;
