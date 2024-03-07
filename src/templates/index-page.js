import React from 'react';
import { graphql } from 'gatsby';

import FadeInUp from '../components/FadeInUp/FadeInUp';
import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
import Hero from '../components/Hero/Hero';
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
	<FadeInUp>
		<HeaderBanner />
	</FadeInUp>
    {
      Array.isArray(intro) && (
        <IntroSections>
          <IntroSection
			  	  key="map"
				    image="/img/IMG_9686.png"
				    title="COMING TO AN EVENT NEAR YOU!"
				    button={{
					    link: '/events',
					    text: 'Upcoming Events',
				  }}
			  >
				<div className="index-visit">
					<div className="index-visit-us">
          We are a shaved ice stand dedicated to bringing the best experiences to events near you. 
          Keep an eye out on our events page and social media for our next stop near you!
					</div>
				</div>
			  </IntroSection>
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
