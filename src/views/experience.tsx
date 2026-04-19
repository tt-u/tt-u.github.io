import * as React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { ExperienceProvider } from "../components/ExperienceProvider";
import HoverTitle from "../components/HoverTitle";

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <HoverTitle sectionId="experience" title="EXPERIENCE" />

      <ExperienceProvider>
        <ExperienceCard
          startDate="2022"
          endDate="Present"
          jobTitle="Tech Lead"
          company="MarinaChain"
          techStack={["Vue", "Django", "PostgreSQL", "TailwindCSS"]}
          link="https://www.marinachain.io/"
          description={
            "Delivered robust production code in creating a responsive frontend and optimized backend for a ship analytics / carbon accounting platform. Implemented best practices and CI/CD pipelines while providing leadership."
          }
        />
        <ExperienceCard
          startDate="Jan"
          endDate="Dec 2021"
          jobTitle="Software Engineer Intern"
          company="Propel Software"
          techStack={["Javascript", "Apex (Java)", "LWC", "Salesforce"]}
          link="https://www.propelsoftware.com/"
          description={
            "Integrated a large-scale enterprise web application based on Salesforce and Office365 to optimize business processes. Spearheaded a migration from a legacy React frontend to Salesforce LWC, streamlining performance and reducing load times significantly."
          }
        />
      </ExperienceProvider>
      <button
        onClick={() => window.open("/Eryn_Seo_Revised_Resume.pdf", "_blank")}
        className="text-blue-white ransform transition-transform hover:translate-x-1 text-blue-500 hover:text-bright-blue border-b-2 border-blue-500 focus:outline-none"
      >
        Download Resume →
      </button>
    </section>
  );
};

export default Experience;
