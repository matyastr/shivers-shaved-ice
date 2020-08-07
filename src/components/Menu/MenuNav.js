import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import createSlug from '../../util/slug';
import './MenuNav.scss';

const MenuNav = ({ sectionNames = [] }) => {
    return (
        <section className="menu-nav">
            <div className="container">
                <span className="menu-nav-descriptor font-secondary">
                    Browse Our Menu
                </span>
                {
                    sectionNames.map(name => (
                        <AnchorLink
                            className="menu-nav-link font-secondary"
                            href={`#${createSlug(name)}`}
                            key={createSlug(name)}
                        >
                            { name }
                        </AnchorLink>
                    ))
                }
            </div>
        </section>
    );
};

export default MenuNav;
