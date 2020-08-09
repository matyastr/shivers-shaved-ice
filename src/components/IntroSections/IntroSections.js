import React from 'react';

const IntroSections = ({ children }) => {
    return React.Children.toArray(children).map((child, i) => {
        return React.cloneElement(child, {
            isEvenRow: i % 2 === 0,
            key: i,
        })
    })
};

export default IntroSections;
