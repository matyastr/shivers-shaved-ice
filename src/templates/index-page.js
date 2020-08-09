import React from 'react';
import { graphql } from 'gatsby';

import Address from '../components/Address/Address';
import Hero from '../components/Hero/Hero';
import Hours from '../components/Hours/Hours';
import Layout from '../components/Layout';
import IntroSections from '../components/IntroSections/IntroSections';
import IntroSection from '../components/IntroSections/IntroSection';
import './index-page.scss';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  tiles,
  intro,
}) => (
  <div>
    <Hero
      image={image}
      subtitle={subheading}
      title={title}
    />
    {
      Array.isArray(intro) && (
        <IntroSections>
          {
            intro.map(section => (
              <IntroSection
                button={section.button}
                content={section.content}
                image={section.image}
                key={section.title}
                title={section.title}
              />
            ))
          }
		  <IntroSection
			  	key="map"
				image="/img/ice-cream-cone.jpg"
				title="Visit Us"
				button={{
					link: 'https://goo.gl/maps/eaEAwn648Doew5WS6',
					text: 'Get Directions',
				}}
			>
				<div className="index-visit">
					<div className="index-visit-address">
						<Address />
					</div>
					<div className="index-visit-hours">
						<Hours />
					</div>
				</div>
			</IntroSection>
          {
              Array.isArray(tiles) && tiles.map(tile => (
                <IntroSection
                  key={tile.title}
                  image={tile.image}
                  content={tile.content}
				  title={tile.title}
                />
              ))
          }
        </IntroSections>
      )
    }
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
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
        intro {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
          button {
            text
            link
          }
        }
        tiles {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
        }
      }
    }
  }
`
