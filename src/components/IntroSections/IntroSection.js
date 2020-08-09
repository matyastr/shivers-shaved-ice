import React from 'react';
import classnames from 'classnames';

import Button from '../Button/Button';
import FadeInUp from '../FadeInUp/FadeInUp';
import './IntroSection.scss';

const IntroSection = ({ button, content, children, image, isEvenRow, title, }) => {
    return (
        <FadeInUp>
            <section
                className={classnames("intro-section", {
                    "intro-section--even": isEvenRow,
                })}
            >
                <div className="intro-section-image">
                    <div
                        className="intro-section-image-content"
                        style={{
                            backgroundImage: `url(${
                                image ? (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) : ''
                            })`,
                        }}
                    />
                </div>
                <div className="intro-section-content">
                    <div className="intro-section-content-inner">
                        <h2>{ title }</h2>
                        <div className="intro-section-content-body">
                        {
                            content
                        }
                        {
                            children
                        }
                        {
                            button && (
                                <div className="intro-section-button">
                                    <Button to={button.link}>{button.text}</Button>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>
            </section>
        </FadeInUp>
    )
};

export default IntroSection;
