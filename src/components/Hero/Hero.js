import React from 'react';

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
        <div>
        {
            subtitle && (
                <span className="hero-subtitle font-cursive">
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
        </div>
    </section>
);

export default Hero;
