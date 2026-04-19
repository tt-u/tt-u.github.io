import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import HoverTitle from "../components/HoverTitle";
import cardThumbnail from "../assets/card.png";
import wordThumbnail from "../assets/word.png";
import { useSite } from "../context/site";

const Projects: React.FC = () => {
  const { t } = useSite();

  return (
    <section id="projects">
      <HoverTitle sectionId="projects" title={t("projects_label")} index="02" />

      <ProjectCard
        index="/01"
        imageSrc={cardThumbnail}
        title={t("card_title")}
        description={t("card_desc")}
        link="https://card.blockinsight.top/"
        techStack={["React", "TypeScript"]}
      />

      <ProjectCard
        index="/02"
        imageSrc={wordThumbnail}
        title={t("word_title")}
        description={t("word_desc")}
        link="https://word.blockinsight.top/"
        techStack={["React", "TypeScript"]}
      />
    </section>
  );
};

export default Projects;
