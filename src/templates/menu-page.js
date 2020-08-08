import React from 'react';

import Layout from '../components/Layout';
import MenuHeader from '../components/Menu/MenuHeader';
import MenuSection from '../components/Menu/MenuSection';

export const MenuPageTemplate = ({ menu }) => (
    <Layout>
        <MenuHeader
            heading={menu.heading}
            introduction={menu.introduction}
            sectionNames={menu.categories.map(category => {
                return category.categoryTitle || 'Unknown'
            })}
        />
        {
            menu.categories.map((category, i) => (
                <MenuSection
                    data-even-section={i % 2 === 0}
                    key={category.categoryTitle}
                    {...category}
                />
            ))
        }
    </Layout>
);

const MenuPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: menu } = post;

  return (
    <Layout>
        <MenuHeader
            heading={menu.heading}
            introduction={menu.introduction}
            sectionNames={menu.categories.map(category => {
                return category.categoryTitle || 'Unknown'
            })}
        />
        {
            menu.categories.map((category, i) => (
                <MenuSection
                    data-even-section={i % 2 === 0}
                    key={category.categoryTitle}
                    {...category}
                />
            ))
        }
    </Layout>
  )
}

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
                    }
                }
            }
        }
    }
`
