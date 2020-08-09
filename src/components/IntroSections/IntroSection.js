import React from 'react';
import classnames from 'classnames';

const IntroSection = ({ content, children, image, isEvenRow, title, }) => {
    return (
        <section
            className={classnames("intro-section", {
                "intro-section--even": isEvenRow,
            })}
        >
            <div className="intro-section-image">
            
            </div>
            <div className="intro-section-content">
                <div>
                    <h2>{ title }</h2>
                    <div className="intro-section-content-body">
                    {
                        content ? content : children
                    }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default IntroSection;
