import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import MenuCallout from '../components/Menu/MenuCallout';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
}) => (
  <div>
    <Hero
      image={image}
      subtitle={subheading}
      title={title}
    />
    <MenuCallout />
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
