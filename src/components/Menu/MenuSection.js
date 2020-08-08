import React from 'react';
import classnames from 'classnames';

import createSlug from '../../util/slug';
import FadeInUp from '../FadeInUp/FadeInUp';
import MenuSectionDescription from './MenuSectionDescription';
import MenuSectionItem from './MenuSectionItem';
import './MenuSection.scss';

const MenuSection = ({
    categoryDescription,
    categoryImage,
    categoryItems = [],
    categoryTitle,
    ...props
}) => (
    <FadeInUp>
        <section
            className="menu-section"
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
    </FadeInUp>
);

export default MenuSection;
