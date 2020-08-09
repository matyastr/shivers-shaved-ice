import React from 'react';

import './IntroSections.scss';

const IntroSections = ({ children }) => (
    <div className="intro-sections">
        <div className="container">
            { React.Children.toArray(children).map((child, i) => {
                return React.cloneElement(child, {
                    isEvenRow: i % 2 === 0,
                    key: i,
                })
            })}
        </div>
    </div>
);

export default IntroSections;
