import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './reset.scss'
import './base.scss'
import useSiteMetadata from './SiteMetadata'

import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

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

        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />

		    <link rel="manifest" href={`${withPrefix('/')}site.webmanifest`} />

        <meta name="theme-color" content="#0f4f7c" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-175500208-1"
        />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175500208-1');
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
