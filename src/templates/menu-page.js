import React from "react";

import Layout from "../components/Layout";
import MenuHeader from "../components/Menu/MenuHeader";
import MenuSection from "../components/Menu/MenuSection";
import StackedContent from "../components/StackedContent/StackedContent";
import { graphql } from "gatsby";

export const MenuPageTemplate = ({ menu }) => (
  <>
    <MenuHeader
      heading={menu.heading}
      introduction={menu.introduction}
    />
    <StackedContent>
      {menu.categories.map((category) => (
        <MenuSection key={category.categoryTitle} {...category} />
      ))}
    </StackedContent>
  </>
);

const MenuPage = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: menu } = post;

  return (
    <Layout
      seoTitle="Shaved Ice Flavors and Dirty Soda Menu | Shivers Pittsburgh"
      seoDescription="Browse our full menu of shaved ice flavors, specialty mixes, dirty sodas, and toppings — available at events across Pittsburgh's North Hills."
      pathname={location.pathname}
    >
      <MenuPageTemplate menu={menu} />
    </Layout>
  );
};

export default MenuPage;

export const menuPageQuery = graphql`
  query MenuPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        introduction
        categories {
          categoryTitle
          categoryImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          categoryDescription
          categoryItems {
            itemName
            itemDescription
          }
        }
      }
    }
  }
`;
