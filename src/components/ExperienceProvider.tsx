import React, { createContext, useState, useContext, ReactNode } from "react";

interface ExperienceContextProps {
  isAnyCardHovered: boolean;
  setIsAnyCardHovered: (hovered: boolean) => void;
}

const ExperienceContext = createContext<ExperienceContextProps | undefined>(
  undefined
);

interface ExperienceProviderProps {
  children: ReactNode;
}

export const ExperienceProvider: React.FC<ExperienceProviderProps> = ({
  children,
}) => {
  const [isAnyCardHovered, setIsAnyCardHovered] = useState(false);

  return (
    <ExperienceContext.Provider
      value={{ isAnyCardHovered, setIsAnyCardHovered }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error(
      "useExperienceContext must be used within a ExperienceProvider"
    );
  }
  return context;
};
