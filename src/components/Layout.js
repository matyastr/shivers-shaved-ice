import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './reset.scss'
import './base.scss'
import useSiteMetadata from './SiteMetadata'

import { withPrefix } from 'gatsby';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodTruck',
  '@id': 'https://www.shiverspgh.com',
  name: 'Shivers Shaved Ice',
  description: 'Mobile shaved ice and dirty soda vendor serving the greater Pittsburgh region.',
  url: 'https://www.shiverspgh.com',
  image: 'https://www.shiverspgh.com/img/og-image.png',
  priceRange: '$',
  telephone: '+17242016159',
  email: 'info@shiverspgh.com',
  sameAs: [
    'https://www.facebook.com/shiverspgh',
    'https://www.instagram.com/shiverspgh/',
    'https://www.google.com/maps/place/Shivers+Shaved+Ice/@40.4469489,-79.7469335,9z/data=!3m1!4b1!4m6!3m5!1s0xa7a9968c991caa85:0x9a4487ee52950d5d!8m2!3d40.4469489!4d-79.7469334!16s%2Fg%2F11y5w7h94r?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D'
  ],
  areaServed: [
    'Pittsburgh, PA',
    'Gibsonia, PA',
    'Allison Park, PA',
    'McCandless, PA',
    'Cranberry, PA',
    'Wexford, PA',
    'Sewickley, PA',
    'Ross, PA',
    'Mars, PA',
    'Franklin Park, PA'
  ],
  servesCuisine: ['Shaved Ice', 'Dirty Soda', 'Frozen Desserts'],
}

const TemplateWrapper = ({ children, seoTitle, seoDescription, pathname }) => {
  const { title, description, siteUrl } = useSiteMetadata()
  const pageTitle = seoTitle || title
  const pageDescription = seoDescription || description
  const canonicalUrl = pathname ? `${siteUrl}${pathname}` : siteUrl
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/favicon.png`}
          color="#ff4400"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />

	    <link rel="manifest" href={`${withPrefix('/')}site.webmanifest`} />

        <meta name="theme-color" content="#0f4f7c" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${withPrefix('/')}img/og-image.png`} />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5C5WD1J17"
        />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y5C5WD1J17');
        `}
        </script>

      </Helmet>
      <Navbar />
	<main>
	{children}
	</main>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
