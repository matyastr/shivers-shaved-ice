import React from 'react';

import FadeInUp from '../FadeInUp/FadeInUp';
import './Hero.scss';

const Hero = ({ image, title, subtitle }) => (
    <section
        className="hero"
        style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
    >
        <FadeInUp>
        {
            subtitle && (
                <span className="hero-subtitle font-secondary">
                    { subtitle }
                </span> 
            )
        }
        {
            subtitle && (
                <h2 className="hero-title">
                    { title }
                </h2> 
            )
        }
        </FadeInUp>
    </section>
);

export default Hero;
