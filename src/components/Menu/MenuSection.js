import React from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';

import { useInView } from 'react-intersection-observer';

import createSlug from '../../util/slug';
import MenuSectionItem from './MenuSectionItem';
import './MenuSection.scss';

const MenuSection = ({
    categoryDescription,
    categoryImage,
    categoryItems = [],
    categoryTitle
}) => {
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
                    <div>
                        <h2 className="font-secondary">{categoryTitle}</h2>
                        {
                            categoryDescription && (
                                <div className="menu-section-description">
                                    <ReactMarkdown source={categoryDescription} />
                                </div>
                            )
                        }
                        {
                            categoryItems.map(item => (
                                <MenuSectionItem
                                    key={item.itemName}
                                    {...item}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuSection;
