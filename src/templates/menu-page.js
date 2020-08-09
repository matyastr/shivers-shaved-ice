import React from 'react';

import Layout from '../components/Layout';
import MenuHeader from '../components/Menu/MenuHeader';
import MenuSection from '../components/Menu/MenuSection';
import StackedContent from '../components/StackedContent/StackedContent';

export const MenuPageTemplate = ({ menu }) => (
    <>
        <MenuHeader
            heading={menu.heading}
            introduction={menu.introduction}
            sectionNames={menu.categories.map(category => {
                return category.categoryTitle || 'Unknown'
            })}
        />
        <StackedContent>
        {
            menu.categories.map((category) => (
                <MenuSection
                    key={category.categoryTitle}
                    {...category}
                />
            ))
        }
        </StackedContent>
    </>
);

const MenuPage = ({ data }) => {
    const { markdownRemark: post } = data;
    const { frontmatter: menu } = post;

    return (
        <Layout>
            <MenuPageTemplate menu={menu} />
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
                        itemDescription
                        itemName
                        itemPrice
                    }
                }
            }
        }
    }
`
