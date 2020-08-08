import React from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';

import { useInView } from 'react-intersection-observer';

import createSlug from '../../util/slug';
import MenuSectionDescription from './MenuSectionDescription';
import MenuSectionItem from './MenuSectionItem';
import './MenuSection.scss';

const MenuSection = ({
    categoryDescription,
    categoryImage,
    categoryItems = [],
    categoryTitle,
    ...props
}) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <section
            className={classnames("menu-section", {
                "menu-section--animate-in": inView,
            })}
            ref={ref}
            id={createSlug(categoryTitle)}
            {...props}
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
                    <h2 className="menu-section-title">{categoryTitle}</h2>
                    {
                        categoryDescription && (
                            <MenuSectionDescription description={categoryDescription} />
                        )
                    }
                    {
                        categoryItems ? (
                            <ul className="menu-section-items">
                                {categoryItems.map(item => (
                                    <MenuSectionItem
                                        key={item.itemName}
                                        {...item}
                                    />
                                ))}
                            </ul>
                        ) : null
                    }
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
