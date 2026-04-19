import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import IntroSections from "../components/IntroSections/IntroSections";
import IntroSection from "../components/IntroSections/IntroSection";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import "./about-page.scss";

export const AboutPageTemplate = ({ title, introduction, sections }) => {
  return (
    <>
      <PageHeader heading={title} />
      <div className="container">
        <div className="about-introduction">{introduction}</div>
        {Array.isArray(sections) && (
          <IntroSections>
            {sections.map((section) => (
              <IntroSection
                button={section.button}
                content={section.content}
                image={section.image}
                key={section.title}
                title={section.title}
              />
            ))}
          </IntroSections>
        )}
      </div>
    </>
  );
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      seoTitle="About Shivers | Pittsburgh's Premier Mobile Shaved Ice and Dirty Soda Vendor"
      seoDescription="Meet Allison and Tim, the Pittsburgh-area team behind Shivers — your favorite mobile shaved ice and dirty soda vendor serving the North Hills and greater Pittsburgh region."
      pathname={location.pathname}
    >
      <AboutPageTemplate {...post.frontmatter} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        introduction
        sections {
          title
          content
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
