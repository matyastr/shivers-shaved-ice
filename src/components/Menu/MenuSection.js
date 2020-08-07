import React from 'react';
import classnames from 'classnames';

import { useInView } from 'react-intersection-observer';

import createSlug from '../../util/slug';
import './MenuSection.scss';

const MenuSection = ({ categoryImage, categoryTitle }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <>
            <a name={createSlug(categoryTitle)} />
            <section
                className={classnames("menu-section", {
                    "menu-section--animate-in": inView,
                })}
                ref={ref}
            >
                <div
                    className="menu-section-image"
                    style={{
                        backgroundImage: `url(${
                        !!categoryImage.childImageSharp ? categoryImage.childImageSharp.fluid.src : categoryImage
                        })`,
                    }}
                />
                <div className="menu-section-content">
                    <h1>{categoryTitle}</h1>
                </div>
            </section>
        </>
    );
};

export default MenuSection;
