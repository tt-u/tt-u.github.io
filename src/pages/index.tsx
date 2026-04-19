import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "../views/about";
import Projects from "../views/projects";

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="space-y-28 lg:space-y-40 py-32">
        <About />

        <Projects />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: React.FC = () => <Seo title="TTU — AI's sidekick" />;
